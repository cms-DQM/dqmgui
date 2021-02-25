import os
import asyncio
from async_lru import alru_cache

from helpers import logged
from nanoroot.io import XRDFile


cdef bint boolean_variable = True


cdef extern from "constants.h":
    cdef int _BLOCKSIZE   # number of bytes to read at once 
    cdef int _CACHEBLOCKS # total number of block to keep in cache
    cdef int _CONNECTIONS # maximum number of open connections
    cdef int _OPENTIMEOUT # maximum time to wait while opening file (seconds)
    cdef int _MAXOPENTIME # maximum time that a connection stays open (seconds)


cdef class IOService:
    BLOCKSIZE = _BLOCKSIZE
    CACHEBLOCKS = _CACHEBLOCKS
    CONNECTIONS = _CONNECTIONS
    OPENTIMEOUT = _OPENTIMEOUT
    MAXOPENTIME = _MAXOPENTIME

    
    @classmethod
    async def open_url(cls, str url, bint blockcache=True):
        """
        Create a file handle for local or remote file `url`.

        If `blockcache` is set, this file handle will use the global caching 
        mechanism, else the full file will be read to memory in a local buffer.
        This can be useful for indexing, where we don't want to pollute the
        global cache with lots of blocks that are never read again.
        """
        if blockcache:
            f = BlockCachedFile(url, cls.BLOCKSIZE)
        else:
            f = FullFile(url, timeout = cls.OPENTIMEOUT)
        await f.preload()
        return f
    

    @classmethod
    @alru_cache(maxsize=CACHEBLOCKS)
    @logged
    async def read_block(cls, str url, int blockid):
        """ 
        Internal: read a block from a url, creating a connection as needed.

        This method is cached, and that cache is the main block cache.
        """
        file = await cls.__connect(url)
        return await file[blockid*cls.BLOCKSIZE : (blockid+1)*cls.BLOCKSIZE]


    @classmethod
    @alru_cache(maxsize=CONNECTIONS)
    @logged
    async def read_len(cls, str url):
        """Internal: read length of the file at the given url."""
        
        file = await cls.__connect(url)
        return len(file)


    @classmethod
    @alru_cache(maxsize=CONNECTIONS)
    @logged
    async def __connect(cls, str url):
        """Create a pyxrootd.client (via nanoroot) connection to the url."""

        async def closefile(url):
            # XRD connections tend to break after a while.
            # To prevent this, we preventively close all connections after a certain time.
            await asyncio.sleep(cls.MAXOPENTIME)
            # Then,remove it from the cache. Since we have a ref (`file` from
            # the closure), the connection will not be closed yet (via GC).
            cls.__connect.invalidate(cls, url)
            # now close the connection. This has to be done async, so we can't 
            # leave it up to GC (which would do a sync close)
            await file.close()
            # note that this close tends to time out/take forever. But leaking
            # a connection is much better than deadlocking the main thread when
            # GC destroys and closes the connection.
            # now file goes out of scope and should be destroyed.
        file = await XRDFile().load(url, timeout=cls.OPENTIMEOUT)
        asyncio.Task(closefile(url))
        return file


cdef class AsyncBufferBase:
    """Base class that provides some async buffer methods."""

    def __cinit__(self):
        self.position = 0

    
    cdef int seek(self, int offset, int whence):
        """
        Changes current position pointer.
        os.SEEK_SET or 0 - start of the stream (the default); offset should be zero or positive
        os.SEEK_CUR or 1 - current stream position; offset may be negative
        """

        if whence == os.SEEK_SET:
            self.position = offset
        elif whence == os.SEEK_CUR:
            self.position += offset

        return self.position


    async def peek(self, int size):
        """Return bytes from the stream without advancing the position."""
        return await self[self.position:self.position + size]
    

    async def read(self, int size):
        """Read up to size bytes from the object and return them."""

        data = await self[self.position:self.position + size]
        self.position += size
        return data


cdef class BlockCachedFile(AsyncBufferBase):
    """This type of file handle reads blocks via the global block cache."""

    def __cinit__(self, str url, int blocksize):
        super().__init__()
        self.url = url 
        self.blocksize = blocksize
        

    async def preload(self):
        # since len() can't be async, we read the length here.
        self.size = await IOService.read_len(self.url)
        

    def __len__(self):
        return self.size
    

    async def __getblocks(self, slice idxslice):
        # Process the __getitem__ parameters.
        start, end, stride = idxslice.indices(len(self))
        assert stride == 1 and start >= 0 and end >= 0
        
        firstblock, lastblock = start//self.blocksize, end//self.blocksize
        
        # For the blocks we actually need (rarely more than one), we start parallel requests.
        blockids = list(range(firstblock, lastblock+1))
        tasks = [IOService.read_block(self.url, blockid) for blockid in blockids]
        blocks = await asyncio.gather(*tasks)
        
        # finally, we assemble the result. There are some unnecessary copies here.
        parts = []
        for blockid, block in zip(blockids, blocks): 
            offset = blockid*self.blocksize
            parts.append(block[max(0, start-offset) : max(0, end-offset)])
        return b''.join(parts)


    async def __getitem__(self, slice idx):
        if isinstance(idx, slice):
            return await self.__getblocks(idx)
        else:
            return (await self[idx:idx+1])[0]


    #cdef str __repr__(self):
    #    return f"BlockCachedFile(url={repr(self.url)})"


from libc.string cimport memcpy

cdef class FullFile():
    """This type of file handle loads and keeps a full copy of the file content, bypassing the cache."""

    def __cinit__(self, str url, int timeout):
        #super().__init__()
        self.url = url
        self.timeout = timeout


    async def preload(self):
        # in this mode, we just preload the full file in the beginning, into a per-file cache.
        f = await XRDFile().load(self.url, timeout=self.timeout)
        self.buf = await f[:]


    def __len__(self):
        return len(self.buf)


    def __getitem__(self, slice idx):
        return self.buf[idx]

    
    cdef bytes getitem(self, slice idx):
        data = self.buf[idx]
        return data

        #cdef char* pi = 3.14159
        #cdef char* buf[len(data)]
        #memcpy(&buf, &data, len(data))
        #cdef char* c_buffer = data
        #return c_buffer


    def __repr__(self):
        return f"FullFile(url={repr(self.url)})"
