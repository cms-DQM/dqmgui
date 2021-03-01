
import os
import zlib
from collections import namedtuple


# This struct stores a wire type and a field number. Those two values make up a key.
cdef struct PBKey:
    unsigned char wire_type
    unsigned char field_number


cdef class ProtobufParser:
    """
    Protocol buffers is binary serialization format from Google. Python library for deserializing protobuf 
    encoded messages exist, however, it doesn't support partial reads - if we want to get just a single 
    histogram out, we have to read and deserialize the entire file. This is an implementation of protocol 
    buffers format deserializer with limited functionality as we only need to deserialize fields used in our 
    messages. To see the supported message format, please have a look at ROOTFilePB.proto. This deserializer 
    supports reading any number of histograms from any location in the file without reading/deserializing 
    anything else.

    In the main scope of the message there is only one repeated Histo field. Repeated fields are like lists
    that can have 0 to infinitely many elements. Histo message contains 4 required fields that hold data
    and metadata about the ME.

    Bellow I will discuss the implemented parts of the format. For a complete format specification please 
    have a look here: https://developers.google.com/protocol-buffers/docs/encoding

    Data Formats:

    Full format specifies more data formats but we'll be using only two: variants and length-delimited values.

    Variant is a variable length number. For more info on how to deserialize it please look at the doc string
    of read_variant_value() function.

    Length-delimited value is an arbitrary length blob. For more information on how to deserialize it please 
    look at the doc string of read_length_delimited_value() function.

    Wire type reveals us the type of the value and tells us how to read it. Continue reading the Message 
    format section for more details.

    Message format:

    Messages are stored in key value pairs. Key is always of variant type. 3 least significant bits of this
    variant encode the wire type and remaining preceding bits encode the field number of the following value.
    For more information on how to extract wire type and field number from a variant please look at the doc
    string of read_field_number_and_wire_type() method.

    Every odd numbered element (1, 3, 5, ...) in the main message, as well as in every embedded message, is 
    a variant that splits into wire type and field number - a key. 
    Every even numbered element in the main message, as well as in every embedded message, is a value that we 
    read differently based on wire type.

    Wire type tells us the length of the value and instructions on how to read it. 
    Field number is just a number that was assigned to every field in the message so we could identify what
    field we have just deserialized. You can see what field corresponds to what field number in 
    ROOTFilePB.proto file.

    Since we only have a few data types in this implementation, we only care about two wire types: 
    0 - variant
    2 - Length-delimited value

    Embedded message, string and bytes will use wire type 2 and uint32 will use variant.

    Backwards compatibility:

    Protobuf format ensures that updated messages can be read with old serializers provided no breaking
    changes occur. All fields that we don't know about are just skipped. 

    Partial reading:

    The crux of this code is to be able to read only one histogram without having to read and deserialize 
    the entire file.

    read_histo_message() function does just that. Give it a buffer that is seeked to the correct position
    and a size of the message and it will return only one histo message without reading more bytes than
    required.
    """


    # This is a type that hold a decoded message. seek_key and offset are not within the message,
    # they are added by the parser.
    # A list of this tuple will be returned when reading from file.
    HistoMessage = namedtuple('HistoMessage', ['full_pathname', 'size', 'streamed_histo', 'flags', 'offset', 'message_size'])

    # Wire type tells us the length of the value and instructions on how to read it
    cdef WIRE_TYPE_LENGTHS

    # Wire types that are suppored by protobuf format.
    # If we encounter a wire type that is not from this list, we are doing something wrong or the file is corrupted.
    cdef WIRE_TYPES

    cdef bytes buf
    cdef const unsigned char* c_buf
    cdef unsigned int c_buf_size
    cdef unsigned int c_buf_position

    
    def __cinit__(self):
        self.WIRE_TYPE_LENGTHS = { 0: 'variant', 1: 8, 2: 'length-delimited', 3: 0, 4: 0, 5: 4 }
        self.WIRE_TYPES = self.WIRE_TYPE_LENGTHS.keys()


    def deserialize_file(self, buf, bint uncompress_only_scalars=False):
        """
        Parses non-gzipped protobuf file and returns a list of HistoMessage tuples.
        If uncompress_only_scalars is True, binary data of actual histograms will be uncompressed
        only if a histogram is a scalar. A scalar is identified by the last byte of flags value. It
        has to be 1, 2 or 3 for a histogram to be a scalar value. This is done in order to not waste
        time uncompressing histograms during importing when regular histogram cointent is never looked
        at except when a histogram is a scalar. This cuts down the time of importing by a factor of 3.
        """

        self.buf = buf[:]
        self.c_buf_size = len(buf)
        self.c_buf_position = 0
        cdef const unsigned char[:] view = self.buf
        self.c_buf = <const unsigned char*>&view[0]

        cdef PBKey key
        cdef int message_size

        histos = []
        while self.c_buf_position < self.c_buf_size:
            key = self.read_field_number_and_wire_type()
            
            if key.field_number == 1 and key.wire_type == 2:
                # Found a value of the repeated Histo field, parse it!
                message_size = self.read_variant_value()
                histo = self.read_histo_message(message_size, uncompress_only_scalars)
                histos.append(histo)
            else:
                self.consume_unknown_field(key.wire_type)

        return histos


    async def read_histo_message_async(self, buf, offset, message_size):
        """ This is not used for importing. This is only used for rendering a single ME. """

        # Preload the buffer in an async way. Everything else is sync.
        self.buf = await buf[offset : offset + message_size]
        self.c_buf_size = message_size
        self.c_buf_position = 0
        cdef const unsigned char[:] view = self.buf
        self.c_buf = <const unsigned char*>&view[0]

        return self.read_histo_message(message_size, uncompress_only_scalars=False)


    cdef read_histo_message(self, int message_size, bint uncompress_only_scalars=False):
        """Read Histo message and parse its fields"""

        # Values that will be returned in HistoMessage tuple
        full_pathname = b''
        cdef int size = 0
        streamed_histo = None
        cdef int flags = 0
        cdef unsigned int offset = self.c_buf_position

        cdef unsigned int end = self.c_buf_position + message_size
        cdef PBKey key
        cdef bint flags_read = False
        cdef int streamed_histo_size = 0

        while self.c_buf_position < end:
            key = self.read_field_number_and_wire_type()

            if key.field_number == 1 and key.wire_type == 2:
                full_pathname = self.read_length_delimited_value()
            elif key.field_number == 2 and key.wire_type == 0:
                size = self.read_variant_value()
            elif key.field_number == 3 and key.wire_type == 2:
                # If uncompress_only_scalars is set, we're importing a sample.
                # In such case, if we're sure that the ME that we're reading is of scalar type,
                # we skip reading it altogether to save bytes allocations.
                if uncompress_only_scalars and flags_read and (flags & 255) in (1, 2, 3):
                    streamed_histo_size = self.read_variant_value()
                    self.c_buf_position += streamed_histo_size
                    streamed_histo = None
                else:
                    streamed_histo = self.read_length_delimited_value()
            elif key.field_number == 4 and key.wire_type == 0:
                flags = self.read_variant_value()
                flags_read = True
            else:
                self.consume_unknown_field(key.wire_type)

        cdef int type_byte = flags & 255
        cdef bint is_scalar = type_byte in (1, 2, 3)
        if (uncompress_only_scalars and is_scalar) or not uncompress_only_scalars:
            try:
                streamed_histo = zlib.decompress(streamed_histo)
            except:
                print('Error zlib decompressing:')
                print(streamed_histo)
                print(full_pathname)

        return self.HistoMessage(full_pathname, size, streamed_histo, flags, offset, message_size)


    cdef int read_variant_value(self):
        """
        Variants are variable length integers. Their wire type is 0.
        We read one byte at a time and check the most significant bit (msb) of each byte.
        If msb is 1, this is not the last byte of an integer.
        If msb is 0, this is the last byte of an integer (we still include it).

        Msb is just to tell us if there are more bytes to come or not. When decoding we drop it!!!

        Variants store numbers with the least significant group first, so when decoding, 
        groups of 7 bits have to be combined in a reversed order.

        Example:
        We know that the following message has a wire_type of 0 (it's a variant) and we want to decode it:

        1010 1100 0000 0010

        As you can see, msb of the first byte (8 bits) is 1, so we read the next byte too.
        Msb of the second byte is 0 meaning that it's the final byte we need to read.
        Now we drop both msbs:

        010 1100 000 0010

        And combine the groups in reverse order:

        000 0010 010 1100

        This is the binary representation of the decoded number:

        0000 0001 0010 1100

        Or 300 in decimal.
        """

        cdef int value = 0
        cdef int number_of_bytes = 0
        cdef int msb = 1 # We read bytes one by one until most significant bit is 0.

        cdef unsigned char data

        while msb == 1:
            data = self.c_buf[self.c_buf_position]
            self.c_buf_position += 1
            msb = (data >> 7) & 1

            # Set msb to 0:
            data &= ~(1 << 7)

            # Variants are stored with least significant group of 7 bits first
            value |= data << (7 * number_of_bytes)
            number_of_bytes += 1

        return value


    cdef bytes read_length_delimited_value(self):
        """
        Length-delimited value is an arbitrary length blob (string, bytes or embedded message). Its wire type is 2.
        Length-delimited value consists of two parts: a variant denoting it's length followed by a blob of that length.

        To decode a length-delimited value we first read a variant to figure out its size and read that many bytes 
        from the stream.
        """

        cdef int size = self.read_variant_value()
        cdef bytes value = <bytes> self.c_buf[self.c_buf_position : self.c_buf_position + size]
        self.c_buf_position += size
        return value


    cdef PBKey read_field_number_and_wire_type(self):
        """
        Wire type is encoded in the last (least significant) 3 bits of a variant.
        Field number is encoded in all other preceding bits.
        """

        cdef int variant = self.read_variant_value()

        cdef PBKey key
        key.field_number = variant >> 3 # will drop last 3 bits
        key.wire_type = variant & 0b111 # will get last 3 bits

        assert key.wire_type in self.WIRE_TYPES, 'Incorrect wire_type: %s' % key.wire_type

        return key


    cdef void consume_unknown_field(self, unsigned char wire_type):
        """If we encounter a field number that we don't know how to or don't want to deserialize, we seek through it."""
        
        cdef int message_length

        size = self.WIRE_TYPE_LENGTHS[wire_type]
        if isinstance(size, int):
            self.c_buf_position += size
        elif size == 'variant':
            # We have to actually read and inspect msb of every byte to know when to stop reading
            self.read_variant_value()
        elif size == 'length-delimited':
            message_length = self.read_variant_value()
            self.c_buf_position += message_length
