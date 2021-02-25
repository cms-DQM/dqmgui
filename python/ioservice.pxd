

cdef class AsyncBufferBase:
    cdef int position
    cdef int seek(self, int offset, int whence)

cdef class BlockCachedFile(AsyncBufferBase):
    cdef str url
    cdef int blocksize

    #cpdef double preload(self)
    #cdef int __len__(self)
    #cpdef double __getblocks(self, slice idxslice)
    #cpdef double __getitem__(self, slice idx)
    #cdef str __repr__(self)

cdef class FullFile(AsyncBufferBase):
    cdef str url
    cdef int timeout
    cdef bytes buf

    cdef bytes getitem(self, slice idx)
    #cpdef double preload(self)
    #cpdef int __len__(self)
    #cpdef str __getitem__(self, slice idx)
    #cpdef str __repr__(self)
