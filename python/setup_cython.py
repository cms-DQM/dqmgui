from setuptools import setup, Extension
from Cython.Build import cythonize

extensions = [
    Extension("nanoroot.io", ["nanoroot/io.pyx"]),
    Extension("nanoroot.tbufferfile", ["nanoroot/tbufferfile.pyx"]),
    Extension("nanoroot.tfile", ["nanoroot/tfile.pyx"]),
    Extension("nanoroot.ttree", ["nanoroot/ttree.pyx"]),
    Extension("protobuf.protobuf_parser", ["protobuf/protobuf_parser.pyx"]),
]

compiler_directives = { "language_level": 3 }
extensions = cythonize(extensions, compiler_directives=compiler_directives, annotate=False)

setup(
    ext_modules=extensions,
)
