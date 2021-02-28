# distutils: language = c++

import zlib
import cython
import struct

# Cython imports
from libc.string cimport memcpy
from libcpp.vector cimport vector
from libcpp.map cimport map
from libcpp.utility cimport pair
from cython.operator cimport dereference


# These classes allow reading the ROOT contianer structures (TFile, TDirectory, TKey),
# but not actually decoding ROOT serialized objects.
# The reason to use this rather than uproot is much higher performance on TDirectory's,
# as well as fewer dependencies.
# Everything is designed around a buffer like that supports indexing to get bytes. 
# Reading from the buffer is rather lazy and copying data is avoided as long as possible.

# The basic structures to read a ROOT file: TFile and TKey.
# We don't actually need TDirectory, since the directory structure can be inferred
# from the TKeys (though reading the TDirectories *might* be more efficient).
# Both of these structures are well documented and should be quite stable over time.

# A ROOT file is a TFile header followed by a sequence of TKey objects. Each TKey object
# starts with a TKey header with some metadata followed by the actual payload object,
# which may be compressed. There can be gaps between TKeys (deleted objects?).


cdef struct FlatRootObjectLocation:
    unsigned int fSeekKey
    # This vector holds StringLocation objects that identify 
    # strings forming a path of the ROOT object inside `c_buf` buffer. 
    # First two elements in this array are not part of the path and 
    # they represent objname and classname strings. All remaining 
    # elements represent the path.
    vector[StringLocation]* parts


cdef struct StringLocation:
    unsigned int start
    unsigned int end


ctypedef vector[StringLocation]* strlptr
ctypedef pair[unsigned long long, strlptr] cachepair


# ROOT is big endian and our x86 machines are little endian.
# This function reverses the order of bytes of an arbitrary size object.
cdef void swapbytes(void* _object, size_t _size):
    cdef unsigned char *start = <unsigned char *>_object
    cdef unsigned char *end = start + _size - 1
    cdef unsigned char swap

    while start < end:
        swap = start[0]
        start[0] = end[0]
        end[0] = swap
        start += 1
        end -= 1


# Universal container for fields depending on fVersion
# Structure from here: https://root.cern.ch/doc/master/classTFile.html
cdef struct TFileFields:
    char[4] root # 4
    unsigned int fVersion # 4
    unsigned int fBEGIN # 4
    unsigned long long fEND # 4 or 8
    unsigned long long fSeekFree # 4 or 8
    unsigned int fNbytesFree # 4
    unsigned int nfree # 4
    unsigned int fNbytesName # 4
    signed char fUnits # 1
    unsigned int fCompress # 4
    unsigned long long fSeekInfo # 4 or 8
    unsigned int fNbytesInfo # 4
    unsigned long long fUUID_low # 8
    unsigned long long fUUID_high # 8


cdef int tfile_fields_from_bytes(TFileFields* fields, const unsigned char* c_buf):
    # Depending on a file version, certain fields might have different lengths
    # This code reads them to the containers of appropriate size.
    cdef unsigned int fEND
    cdef unsigned int fSeekFree
    cdef unsigned int fSeekInfo
    cdef int fields_size = 61
    cdef int offset = 0

    memcpy(&fields.root, <const void *>&c_buf[offset + 0], 4)
    memcpy(&fields.fVersion, <const void *>&c_buf[offset + 4], 4)
    memcpy(&fields.fBEGIN, <const void *>&c_buf[offset + 8], 4)

    # Swap to make it little endian
    swapbytes(&fields.fVersion, sizeof(fields.fVersion))
    swapbytes(&fields.fBEGIN, sizeof(fields.fBEGIN))

    if fields.fVersion > 1000000:
        fields_size = 73

        memcpy(&fields.fEND, <const void *>&c_buf[offset + 12], 8)
        offset += 4
        memcpy(&fields.fSeekFree, <const void *>&c_buf[offset + 16], 8)
        offset += 4

        swapbytes(&fields.fEND, sizeof(fields.fEND))
        swapbytes(&fields.fSeekFree, sizeof(fields.fSeekFree))
    else:
        memcpy(&fEND, <const void *>&c_buf[offset + 12], 4)
        memcpy(&fSeekFree, <const void *>&c_buf[offset + 16], 4)

        swapbytes(&fEND, sizeof(fEND))
        swapbytes(&fSeekFree, sizeof(fSeekFree))

        fields.fEND = fEND
        fields.fSeekFree = fSeekFree

    memcpy(&fields.fNbytesFree, <const void *>&c_buf[offset + 20], 4)
    memcpy(&fields.nfree, <const void *>&c_buf[offset + 24], 4)
    memcpy(&fields.fNbytesName, <const void *>&c_buf[offset + 28], 4)
    memcpy(&fields.fUnits, <const void *>&c_buf[offset + 32], 1)
    memcpy(&fields.fCompress, <const void *>&c_buf[offset + 33], 4)

    swapbytes(&fields.fNbytesFree, sizeof(fields.fNbytesFree))
    swapbytes(&fields.nfree, sizeof(fields.nfree))
    swapbytes(&fields.fNbytesName, sizeof(fields.fNbytesName))
    swapbytes(&fields.fUnits, sizeof(fields.fUnits))
    swapbytes(&fields.fCompress, sizeof(fields.fCompress))

    if fields.fVersion > 1000000:
        memcpy(&fields.fSeekInfo, <const void *>&c_buf[offset + 37], 8)
        offset += 4
        swapbytes(&fields.fSeekInfo, sizeof(fields.fSeekInfo))
    else:
        memcpy(&fSeekInfo, <const void *>&c_buf[offset + 37], 4)
        swapbytes(&fSeekInfo, sizeof(fSeekInfo))
        fields.fSeekInfo = fSeekInfo

    memcpy(&fields.fNbytesInfo, <const void *>&c_buf[offset + 41], 4)
    memcpy(&fields.fUUID_low, <const void *>&c_buf[offset + 45], 8)
    memcpy(&fields.fUUID_high, <const void *>&c_buf[offset + 53], 8)

    swapbytes(&fields.fNbytesInfo, sizeof(fields.fNbytesInfo))
    swapbytes(&fields.fUUID_low, sizeof(fields.fUUID_low))
    swapbytes(&fields.fUUID_high, sizeof(fields.fUUID_high))

    return fields_size


cdef class TFile:
    cdef bytes buf
    cdef const unsigned char* c_buf
    cdef unsigned long long c_buf_size
    cdef TFileFields fields
    cdef bint error
    cdef dqm_classes
    cdef vector[FlatRootObjectLocation] vflat
    cdef map[unsigned long long, strlptr] cachemap


    def __cinit__(self):
        self.dqm_classes = [
            b'TH1D',
            b'TH1F',
            b'TH1S',
            b'TH2D',
            b'TH2F',
            b'TH2S',
            b'TH3F',
            b'TObjString',
            b'TProfile',
            b'TProfile2D'
        ]


    def __dealloc__(self):
        # Delete all new calls
        for i in range(self.vflat.size()):
            del self.vflat[i].parts


    def load(self, buf):
        """
        The TFile datastructure is pretty boring, the only thing we really need
        is the address of the first TKey, which is actually hardcoded to 100...
        We provide the fulllist() method for efficient listing of all objects here.
        """

        self.buf = buf[:]
        self.c_buf_size = len(buf)
        cdef const unsigned char[:] view = self.buf
        self.c_buf = <const unsigned char*>&view[0]
        cdef int headersize = tfile_fields_from_bytes(&self.fields, <const unsigned char *>&self.c_buf[0])

        assert self.fields.root[0:sizeof(self.fields.root)] == b'root'

        self.error = False
        return self
    
    
    def __repr__(self):
        return f"TFile({self.buf}, fields = {self.fields})"


    cdef TKey first(self):
        """ 
        First TKey in the file. They are sequential, use `next` on the key to get the next key. 
        """

        return TKey().load(self.c_buf, self.c_buf_size, self.fields.fBEGIN, self.end())


    cdef unsigned long long end(self):
        if self.c_buf_size < self.fields.fEND:
            self.error = True
            print(f"TFile corrupted, fEND ({self.fields.fEND}) behind end-of-file ({self.c_buf_size)})")
            return self.c_buf_size
        return self.fields.fEND


    cdef void fullname(self, unsigned int fSeekKey, vector[StringLocation]* parts):
        """ Recursive list of path fragments with caching, indexed by fSeekPdir """

        # Check if this directory was already seen. 
        # If it was, just copy the path elements over and return.
        # cdef map[unsigned long long, strlptr].iterator it = self.cachemap.find(fSeekKey)
        # if it != self.cachemap.end():
        #     for i in range(2, dereference(it).second.size()):
        #         parts.push_back(dereference(it).second[0][i])
        #     return

        cdef TKey k = TKey().load(self.c_buf, self.c_buf_size, fSeekKey)
        cdef unsigned int parent = k.fields.fSeekPdir

        if parent == 0:
            parts.push_back(k.objname_location)
            return
        
        # Recurse to its parent till parent == 0
        self.fullname(parent, parts)
        parts.push_back(k.objname_location)
        

    def fulllist(self):
        """
        Returns a python list of (path, name, class, offset) tuples.
        The paths are normalized and the classes are filtered acoarding 
        to the requirements of the DMQ GUI.
        """
        
        cdef TKey key = self.first()
        cdef FlatRootObjectLocation root_object

        while key:
            if key.classname() in self.dqm_classes:
                root_object.fSeekKey = key.fields.fSeekKey
                root_object.parts = new vector[StringLocation]()
                root_object.parts.push_back(key.objname_location)
                root_object.parts.push_back(key.classname_location)
                self.vflat.push_back(root_object)

                # Recursively traverse till parent object and fill in path parts
                self.fullname(key.fields.fSeekPdir, root_object.parts)

                # Add to cache
                self.cachemap.insert(cachepair(key.fields.fSeekPdir, root_object.parts))
                
            n = key.next()
            if key.error:
                self.error = True
            key = n
        
        # Now write the results to a Python list
        result = []
        for i in range(self.vflat.size()):
            fSeekKey = self.vflat[i].fSeekKey

            # First two items are objname and classname
            objname = <bytes> self.c_buf[self.vflat[i].parts[0][0].start : self.vflat[i].parts[0][0].end]
            classname = <bytes> self.c_buf[self.vflat[i].parts[0][1].start : self.vflat[i].parts[0][1].end]

            # The rest of the items represent the path items (directories) of the object.
            # We first check if the path represents a valid DQM object.
            # Valid DQM object path structure is the following: 
            # filename.root/DQMData/Run XXXXXX/subsystem/Run summary/<arbitrary folder structure based on booking calls in CMSSW>
            # If the path doesn't conform to this structure, it has to be discarded and not shown in the DQM GUI.
            if self.vflat[i].parts.size() > 6 and self.c_buf[self.vflat[i].parts[0][6].start : self.vflat[i].parts[0][6].end] == b'Run summary':
                path = <bytes> self.c_buf[self.vflat[i].parts[0][5].start : self.vflat[i].parts[0][5].end] + b'/'
                for j in range(7, self.vflat[i].parts.size()):
                    path += <bytes> self.c_buf[self.vflat[i].parts[0][j].start : self.vflat[i].parts[0][j].end] + b'/'
                
                result.append((path, objname, classname, fSeekKey))
        
        return result


# Universal container for fields depending on fVersion.
# Structure also here: https://root.cern.ch/doc/master/classTFile.html 
cdef struct TKeyFields:
    int fNbytes # 4
    unsigned short fVersion # 2
    unsigned int fObjLen # 4
    unsigned int fDatime # 4
    unsigned short fKeyLen # 2
    unsigned short fCycle # 2
    unsigned long long fSeekKey # 4 or 8
    unsigned long long fSeekPdir # 4 or 8


cdef int tkey_fields_from_bytes(TKeyFields* fields, const unsigned char* c_buf):
    # Depending on a file version, fSeekKey and fSeekPdir are either 
    # unsigned long long or unsigned int. First one is 8 bytes and 
    # the second one is 4 bytes. We first read the file version and
    # then the following values into an appropriate size container.
    # The struct itself cotains the 8 byte version to fit both formats.
    cdef unsigned int fSeekKey
    cdef unsigned int fSeekPdir
    cdef int fields_size = 26

    memcpy(&fields.fNbytes, <const void *>&c_buf[0], 4)
    memcpy(&fields.fVersion, <const void *>&c_buf[4], 2)
    memcpy(&fields.fObjLen, <const void *>&c_buf[6], 4)
    memcpy(&fields.fDatime, <const void *>&c_buf[10], 4)
    memcpy(&fields.fKeyLen, <const void *>&c_buf[14], 2)
    memcpy(&fields.fCycle, <const void *>&c_buf[16], 2)
    
    # Swap to make it little endian
    swapbytes(&fields.fNbytes, sizeof(fields.fNbytes))
    swapbytes(&fields.fVersion, sizeof(fields.fVersion))
    swapbytes(&fields.fObjLen, sizeof(fields.fObjLen))
    swapbytes(&fields.fDatime, sizeof(fields.fDatime))
    swapbytes(&fields.fKeyLen, sizeof(fields.fKeyLen))
    swapbytes(&fields.fCycle, sizeof(fields.fCycle))

    if fields.fVersion > 1000:
        fields_size = 34

        memcpy(&fields.fSeekKey, <const void *>&c_buf[18], 8)
        memcpy(&fields.fSeekPdir, <const void *>&c_buf[26], 8)

        swapbytes(&fields.fSeekKey, sizeof(fields.fSeekKey))
        swapbytes(&fields.fSeekPdir, sizeof(fields.fSeekPdir))
    else:
        memcpy(&fSeekKey, <const void *>&c_buf[18], 4)
        memcpy(&fSeekPdir, <const void *>&c_buf[22], 4)

        swapbytes(&fSeekKey, sizeof(fSeekKey))
        swapbytes(&fSeekPdir, sizeof(fSeekPdir))

        fields.fSeekKey = fSeekKey
        fields.fSeekPdir = fSeekPdir

    return fields_size


cdef class TKey:
    compressedheader = struct.Struct("2sBBBBBBB")

    # These values represents the sum of lengths 
    # of individual fields in TKeyFields, depending 
    # on the file version
    cdef int KEY_FIELDS_SMALL_LENGTH
    cdef int KEY_FIELDS_BIG_LENGTH

    cdef const unsigned char* c_buf
    cdef unsigned long long c_buf_size
    cdef unsigned long long end
    cdef public unsigned int fSeekKey
    cdef public TKeyFields fields
    cdef public bint error
    cdef StringLocation classname_location
    cdef StringLocation objname_location
    cdef StringLocation objtitle_location

    cdef bytes data


    def __cinit__(self):
        self.KEY_FIELDS_SMALL_LENGTH = 26
        self.KEY_FIELDS_BIG_LENGTH = 34


    async def load_async(self, buf, fSeekKey):
        """
        This is an async version of load method. This is not used when importing!
        This coroutine reads minimal number of bytes required to render a specific histogram.
        `buf` has to be of type `BlockCachedFile`.
        """

        # Loading the amount of data required for big fields will also work for small fields
        self.data = await buf[fSeekKey : fSeekKey + self.KEY_FIELDS_BIG_LENGTH]
        headersize = tkey_fields_from_bytes(&self.fields, self.data)

        # Load all bytes associated with this ROOT object
        self.data += await buf[fSeekKey + self.KEY_FIELDS_BIG_LENGTH : fSeekKey + self.fields.fNbytes]

        # Setting this to 0 because we async load only the bytes for this object
        self.fSeekKey = 0

        self.c_buf_size = self.fields.fNbytes
        cdef const unsigned char[:] view = self.data
        self.c_buf = <const unsigned char*>&view[0]

        self.classname_location = self.__readstrloc(self.fSeekKey + headersize)
        self.objname_location = self.__readstrloc(self.classname_location.end)
        self.objtitle_location = self.__readstrloc(self.objname_location.end)

        return self


    cdef TKey load(self, const unsigned char* c_buf, unsigned long long c_buf_size, unsigned int fSeekKey, unsigned long long end=0):
        """
        Decode key at offset `fSeekKey` in `buf`. `end` can be the file end
        address if it is less than the buffer end.
        """

        self.end = end if end != 0 else c_buf_size
        self.fSeekKey = fSeekKey
        self.c_buf = c_buf
        self.c_buf_size = c_buf_size
        cdef int headersize = tkey_fields_from_bytes(&self.fields, <const unsigned char *>&self.c_buf[self.fSeekKey])

        assert self.fields.fSeekKey == self.fSeekKey, f"{self} is corrupted!"

        # The TKey struct is followed by three strings: class, object name, object title.
        # These consume the sest of the space of the key, unitl, fKeyLen.

        self.classname_location = self.__readstrloc(self.fSeekKey + headersize)
        self.objname_location = self.__readstrloc(self.classname_location.end)
        self.objtitle_location = self.__readstrloc(self.objname_location.end)

        self.error = False
        return self


    cdef StringLocation __readstrloc(self, unsigned int pos):
        cdef int size = self.c_buf[pos]
        
        if size == 255: # solution for when length does not fit one byte
            memcpy(&size, <const void *>&self.c_buf[pos+1], 4)
            swapbytes(&size, sizeof(size))
            pos += 4
        
        cdef int nextpos = pos + size + 1
        cdef StringLocation out
        out.start = pos+1
        out.end = nextpos

        return out


    def __repr__(self):
        return f"TKey({self.fSeekKey}, fields = {self.fields})"

    
    cdef TKey next(self):
        """
        Read the TKey following this key. According to the documentation these
        should be one after the other in the file, but in practice there are
        sometimes gaps (resized/deleted objects?), which are skipped here.
        """

        cdef unsigned long long offset = self.fields.fSeekKey + self.fields.fNbytes
        cdef int size
        cdef TKey k
        
        while (offset + self.KEY_FIELDS_SMALL_LENGTH) < self.end:
            # It seems that a negative length indicates an unused block of that size. Skip it.
            # The number of such blocks matches nfree in the TFile.
            
            memcpy(&size, <const void *>&self.c_buf[offset], 4)
            swapbytes(&size, sizeof(size))

            if size < 0:
                offset += -size
                continue

            k = TKey().load(self.c_buf, self.c_buf_size, offset, self.end)
            return k
        return None

    
    cdef bytes classname(self):
        return self.c_buf[self.classname_location.start : self.classname_location.end]


    # This is called from the outside, so it can't be cdef
    def objname(self):
        return self.c_buf[self.objname_location.start : self.objname_location.end]


    cdef bytes objtitle(self):
        return self.c_buf[self.objtitle_location.start : self.objtitle_location.end]


    cdef bint compressed(self):
        return <unsigned int>(self.fields.fNbytes - self.fields.fKeyLen) != self.fields.fObjLen


    def objdata(self):
        """
        Return and potentially decompress object data.
        Compression is done in thread pool since it could take more time.
        """

        start = self.fSeekKey + self.fields.fKeyLen
        end = self.fSeekKey + self.fields.fNbytes

        if not self.compressed():
            return self.c_buf[start:end]
        else:
            def decompress(buf, start, end):
                out = []
                while start < end:
                    # Thanks uproot!
                    algo, method, c1, c2, c3, u1, u2, u3 = TKey.compressedheader.unpack(
                        buf[start : start + TKey.compressedheader.size])
                    
                    compressedbytes = c1 + (c2 << 8) + (c3 << 16)
                    uncompressedbytes = u1 + (u2 << 8) + (u3 << 16)
                    start += TKey.compressedheader.size
                    assert algo == b'ZL', "Only Zlib compression supported, not " #+ repr(comp)
                    uncomp =  zlib.decompress(buf[start:start+compressedbytes])
                    out.append(uncomp)
                    assert len(uncomp) == uncompressedbytes
                    start += compressedbytes
                return b''.join(out)

            buf = self.c_buf[start:end]
            return decompress(buf, 0, end-start)

    # # Each key (except the root) has a parent directory.
    # # This creates a new TKey pointing there.
    # def parent(self):
    #     if self.fields.fSeekPdir == 0:
    #         return None
    #     return TKey().load(self.c_buf, self.c_buf_size, self.fields.fSeekPdir, self.end)

    # # Derive the full path of an object by recursing up the parents.
    # # slow, primarily for debugging.
    # def fullname(self):
    #     parent = self.parent()
    #     parentname = parent.fullname() if parent else b''
    #     return b"%s/%s" % (parentname, self.objname())
