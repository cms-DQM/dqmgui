# distutils: language = c++

import zlib
import cython
import struct
import asyncio
from collections import namedtuple
from ioservice import FullFile
from ioservice cimport FullFile

# Cython imports
from libc.string cimport memcpy, strcmp
from libc.stdlib cimport malloc, free
from libcpp.vector cimport vector
from libcpp.map cimport map
from libcpp.utility cimport pair
from cython.operator cimport dereference, postincrement

# ctypedef vector[StringLocation]* slvp
ctypedef pair[unsigned int, Item*] map_item

cdef cppclass Item:
    unsigned int fSeekKey
    vector[StringLocation]* parts

# These classes allow reading the ROOT contianer structures (TFile, TDirectory, TKey),
# but not actually decoding ROOT serialized objects.
# The reason to use this rather than uproot is much higher performance on TDirectory's,
# as well as fewer dependencies.
# Everything is designed around a buffer like that supports indexing to get bytes. 
# Reading from the buffer is rather lazy and copying data is avoided as long as possible.
# This library supports asyncio; that is another reason for its existence. To acheive
# that, many methods are async, and the buffers have an *async* [...:...] operator.

# The basic structures to read a ROOT file: TFile and TKey.
# We don't actually need TDirectory, since the directory structure can be inferred
# from the TKeys (though reading the TDirectories *might* be more efficient).
# Both of these structures are well documented and should be quite stable over time.

# A ROOT file is a TFile header followed by a sequence of TKey objects. Each TKey object
# starts with a TKey header with some metadata followed by the actual payload object,
# which may be compressed. There can be gaps between TKeys (deleted objects?).

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


# def normalize(parts):
#     # Assert that a correct run number is being imported
#     if parts[2][:3] == b'Run':
#         assert parts[2] == run_str, 'Imported run (%s) doesn\'t match the number in a ROOT file (%s)' % (parts[2], run_str)

#     if len(parts) < 5 or parts[4] != b'Run summary':
#         return b'<broken>' + b'/'.join(parts) + b'/'
#     else:
#         return b'/'.join((parts[3],) + (parts[5:]) + (b'',))
        
# # Only import these types
# def dqm_classes(name):
#     return name in {
#         b'TH1D',
#         b'TH1F',
#         b'TH1S',
#         b'TH2D',
#         b'TH2F',
#         b'TH2S',
#         b'TH3F',
#         b'TObjString',
#         b'TProfile',
#         b'TProfile2D',
#     }


cdef class TFile:
    # Structure from here: https://root.cern.ch/doc/master/classTFile.html
    #Fields = namedtuple("TFileFields", ["root", "fVersion", "fBEGIN", "fEND", "fSeekFree", "fNbytesFree", "nfree", "fNbytesName", "fUnits", "fCompress", "fSeekInfo", "fNbytesInfo", "fUUID_low", "fUUID_high"])
    #structure_small = struct.Struct(">4sIIIIIIIbIIIQQ")
    #structure_big   = struct.Struct(">4sIIQQIIIbIQIQQ")

    cdef FullFile buf
    cdef const unsigned char* c_buf
    cdef unsigned long long c_buf_size
    cdef TFileFields fields
    cdef bint error
    cdef const char* dqm_classes[10]

    def __cinit__(self):
        self.dqm_classes[:] = [
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
        print('TFile __dealloc__')
        # free(self.c_buf)
    
    # This is a hardcoded list of allowed classes
    # so we can disable division by zero error checking
    @cython.cdivision(True)
    cdef bint keep_class(self, const char* name):
        cdef int len = (int)(sizeof(self.dqm_classes)/sizeof(self.dqm_classes[0]))
        for i in range(len):
            if strcmp(self.dqm_classes[i], name) == 0:
                return True
        return False

    # cdef normalize(self, parts):
    #     # print(parts)
    #     return None


    # Default behaviour for fulllist()
    # TOPATH = lambda parts: b'/'.join(parts) + b'/'
    # ALLCLASSES = lambda name: True

    # The TFile datastructure is pretty boring, the only thing we really need
    # is the address of the first TKey, which is actually hardcoded to 100...
    # We provide the fulllist() method for efficient listing of all objects here.
    def load(self, buf):
        # import os
        # import time
        # print('PID:', os.getpid())
        # time.sleep(5)

        self.buf = <FullFile>buf

        # print('amost')

        #self.fields = TFile.Fields(*TFile.structure_small.unpack(
        #    self.buf[0:TFile.structure_small.size]))
        #if self.fields.fVersion > 1000000:
        #    self.fields = TFile.Fields(*TFile.structure_big.unpack(
        #        self.buf[0:TFile.structure_big.size]))

        
        # self.c_buf_size = len(self.buf)
        # self.c_buf = <unsigned char*> malloc(self.c_buf_size)
        # if not self.c_buf:
        #     raise MemoryError()
        # cdef const unsigned char[:] view = self.buf[:]
        # memcpy(self.c_buf, <void*>&view[0], self.c_buf_size)


        self.c_buf_size = len(self.buf)
        cdef const unsigned char[:] view = self.buf[:]
        self.c_buf = <const unsigned char*>&view[0]
        

        cdef int headersize = tfile_fields_from_bytes(&self.fields, <const unsigned char *>&self.c_buf[0])

        assert self.fields.root[0:sizeof(self.fields.root)] == b'root'
        self.error = False
        return self
        
    def __repr__(self):
        return f"TFile({self.buf}, fields = {self.fields})"

    # First TKey in the file. They are sequential, use `next` on the key to
    # get the next key.
    cdef TKey first(self):
        return TKey().load(self.c_buf, self.c_buf_size, self.fields.fBEGIN, self.end())

    cdef unsigned long long end(self):
        if self.c_buf_size < self.fields.fEND:
            self.error = True
            print(f"TFile corrupted, fEND ({self.fields.fEND}) behind end-of-file ({len(self.buf)})")
            return self.c_buf_size
        return self.fields.fEND




    cdef dircache # contains tuples of bytes
    cdef normalizedcache # contains strings



    # recursive list of path fragments with caching, indexed by fSeekPdir
    cdef void fullname(self, unsigned int fSeekKey, vector[StringLocation]* parts):
        # fast path if in cache
        # if fSeekKey in self.dircache:
        #     return

        # else load the TKey...
        cdef TKey k = TKey().load(self.c_buf, self.c_buf_size, fSeekKey)
        cdef unsigned int parent = k.fields.fSeekPdir
        # ... and recurse to its parent.
        # res = self.fullname(parent) + (k.objname(),)

        # res = self.fullname(parent) + [ k.objname_location ]

        if parent == 0:
            parts.push_back(k.objname_location)
            return
        
        self.fullname(parent, parts)
        parts.push_back(k.objname_location)

        
        # self.dircache[fSeekKey] = None
        # return res

    cdef normalize(self, parts):
        if len(parts) < 5 or parts[4] != b'Run summary':
            return b'<broken>' + b'/'.join(parts) + b'/'
        else:
            return b'/'.join((parts[3],) + (parts[5:]) + (b'',))
    
    # normalized dirname for each dir identified by its fSeekKey
    cdef void normalized(self, unsigned int fSeekKey, vector[StringLocation]* parts):
        # if fSeekKey in self.normalizedcache:
        #     return
        self.fullname(fSeekKey, parts)
        # res = self.normalize(parts)
        # res = parts2
        # self.normalizedcache[fSeekKey] = None
        # return res
    

    # Returns an async generator producing (path, name, class, offset) tuples.
    # The paths are normalized with the `normalize` callback, the classes 
    # filtered with the `classes` callback.
    # Use `async for` to iterate this.
    def fulllist(self):
        self.dircache = dict() 
        self.dircache[0] = []
        self.normalizedcache = dict()

        result = []
        cdef TKey key = self.first()
        # cdef const char* c
        # cdef TKey k

        # cdef struct Item:
        #     unsigned int fSeekKey
        #     vector[StringLocation] parts


        cdef map[unsigned int, Item*] main_map
        cdef Item* main_item

        while key:
            c = key.classname()
            if self.keep_class(c) == True:
                main_item = new Item()
                main_item.fSeekKey = key.fSeekKey
                main_item.parts = new vector[StringLocation]()
                # main_vector = new vector[StringLocation]()

                main_item.parts.push_back(key.objname_location)
                main_item.parts.push_back(key.classname_location)
                main_map.insert(map_item(key.fields.fSeekPdir, main_item))

                self.normalized(key.fields.fSeekPdir, main_item.parts)

                
                # result.append( (self.normalized(key.fields.fSeekPdir), key.objname_location, key.classname_location, key.fSeekKey) )
            n = key.next()
            if key.error:
                self.error = True
            key = n
        print('Done', main_map.size())

        cdef map[unsigned int, Item*].iterator it = main_map.begin()
        cdef Item* second
        # cdef vector[StringLocation].iterator vec_it

        # objname = self.c_buf[self.classname_location.start : self.classname_location.end]
        
        

        while it != main_map.end():
            second = dereference(it).second
            fSeekKey = second.fSeekKey

            # First two items are objname and classname
            
            objname = <bytes> self.c_buf[second.parts[0][0].start : second.parts[0][0].end]
            classname = <bytes> self.c_buf[second.parts[0][1].start : second.parts[0][1].end]


            path = ()
            for i in range(2, second.parts.size()):
                # print(type(dereference(it).second.parts[0]))
                # print(dereference(it).second.parts[0][i])

                path += (<bytes> self.c_buf[second.parts[0][i].start : second.parts[0][i].end], )
            
            path = self.normalize(path)

                
            result.append((path, objname, classname, fSeekKey))
            postincrement(it)
        
        

        print(result[:10])
        return result


# Universal container for fields depending on fVersion
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


cdef struct StringLocation:
    unsigned int start
    unsigned int end


cdef class TKey:
    # Structure also here: https://root.cern.ch/doc/master/classTFile.html
    #Fields = namedtuple("TKeyFields", ["fNbytes", "fVersion", "fObjLen", "fDatime", "fKeyLen", "fCycle", "fSeekKey", "fSeekPdir"])
    #structure_small = struct.Struct(">iHIIHHII")
    #structure_big   = struct.Struct(">iHIIHHQQ")
    #sizefield = struct.Struct(">i")
    compressedheader = struct.Struct("2sBBBBBBB")

    # This value represents the sum of lengths 
    # of individual fields in TKeyFields
    cdef int KEY_FIELDS_SMALL_LENGTH

    cdef FullFile buf
    cdef const unsigned char* c_buf
    cdef unsigned long long c_buf_size
    cdef unsigned long long end
    cdef public unsigned int fSeekKey
    cdef public TKeyFields fields

    cdef StringLocation classname_location
    cdef StringLocation objname_location
    cdef StringLocation objtitle_location

    # cdef bytes __classname
    # cdef bytes __objname
    # cdef bytes __objtitle

    cdef public bint error

    def __cinit__(self):
        self.KEY_FIELDS_SMALL_LENGTH = 26

    # Decode key at offset `fSeekKey` in `buf`. `end` can be the file end
    # address if it is less than the buffer end.
    cdef TKey load(self, const unsigned char* c_buf, unsigned long long c_buf_size, unsigned int fSeekKey, unsigned long long end=0):
        # self.buf = buf
        self.end = end if end != 0 else c_buf_size
        self.fSeekKey = fSeekKey
        self.c_buf_size = c_buf_size

        self.c_buf = c_buf
        cdef int headersize = tkey_fields_from_bytes(&self.fields, <const unsigned char *>&self.c_buf[self.fSeekKey])

        assert self.fields.fSeekKey == self.fSeekKey, f"{self} is corrupted!"

        # The TKey struct is followed by three strings: class, object name, object title.
        # These consume the sest of the space of the key, unitl, fKeyLen.
        # Read them here eagerly to avoid making to many async read requests later.
        # namebuf = <const unsigned char*>&self.c_buf[self.fSeekKey + headersize]

        # self.__classname, pos = self.__readstr(namebuf, 0)
        # self.__objname, pos = self.__readstr(namebuf, pos)
        # self.__objtitle, pos = self.__readstr(namebuf, pos)

        self.classname_location = self.__readstrloc(self.fSeekKey + headersize)
        self.objname_location = self.__readstrloc(self.classname_location.end)
        self.objtitle_location = self.__readstrloc(self.objname_location.end)

        # self.__classname = self.c_buf[classname_out.start:classname_out.end]
        # self.__objname = self.c_buf[objname_out.start:objname_out.end]
        # self.__objtitle = self.c_buf[objtitle_out.start:objtitle_out.end]

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


    # cdef ReadStringOutput __readstr(self, const unsigned char* c_buf, int pos):
    #     cdef int size = c_buf[pos]
    #     if size == 255: # solution for when length does not fit one byte
    #         memcpy(&size, <const void *>&c_buf[pos+1], 4)
    #         swapbytes(&size, sizeof(size))
    #         pos += 4
        
    #     cdef int nextpos = pos + size + 1
    #     cdef ReadStringOutput out
    #     out.string = c_buf[pos+1:nextpos]
    #     out.nextpos = nextpos
    #     return out

    def __repr__(self):
        return f"TKey({self.fSeekKey}, fields = {self.fields})"

    # Read the TKey following this key. According to the documentation these
    # should be one after the other in the file, but in practice there are
    # sometimes gaps (resized/deleted objects?), which are skipped here.
    cdef TKey next(self):
        cdef unsigned long long offset = self.fields.fSeekKey + self.fields.fNbytes
        cdef int size
        cdef TKey k
        
        # print(TKey.structure_small.size)
        while (offset + self.KEY_FIELDS_SMALL_LENGTH) < self.end:
            # It seems that a negative length indicates an unused block of that size. Skip it.
            # The number of such blocks matches nfree in the TFile.
            # size, = TKey.sizefield.unpack(self.buf[offset:offset+4])
            
            memcpy(&size, <const void *>&self.c_buf[offset], 4)
            swapbytes(&size, sizeof(size))

            if size < 0:
                offset += -size
                continue

            k = TKey().load(self.c_buf, self.c_buf_size, offset, self.end)
            return k
        return None

    # Parse the three strings in the TKey (classname, objname, objtitle)
    cdef bytes classname(self):
        # return self.__classname
        return self.c_buf[self.classname_location.start : self.classname_location.end]

    cdef bytes objname(self):
        # return self.__objname
        return self.c_buf[self.objname_location.start : self.objname_location.end]

    cdef bytes objtitle(self):
        return self.c_buf[self.objtitle_location.start : self.objtitle_location.end]
    
    cdef bint compressed(self):
        return <unsigned int>(self.fields.fNbytes - self.fields.fKeyLen) != self.fields.fObjLen

    # Return and potentially decompress object data.
    # Compression is done in thread pool since it could take more time.
    def objdata(self):
        start = self.fields.fSeekKey + self.fields.fKeyLen
        end = self.fields.fSeekKey + self.fields.fNbytes
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
            #return await asyncio.get_event_loop().run_in_executor(None, decompress, buf, 0, end-start)
            return decompress(buf, 0, end-start)

    # Each key (except the root) has a parent directory.
    # This creates a new TKey pointing there.
    def parent(self):
        if self.fields.fSeekPdir == 0:
            return None
        return TKey().load(self.c_buf, self.c_buf_size, self.fields.fSeekPdir, self.end)

    # Derive the full path of an object by recursing up the parents.
    # slow, primarily for debugging.
    def fullname(self):
        parent = self.parent()
        parentname = parent.fullname() if parent else b''
        return b"%s/%s" % (parentname, self.objname())


