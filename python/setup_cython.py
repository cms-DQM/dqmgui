from setuptools import setup, Extension
from Cython.Build import cythonize

extensions = [
    Extension("nanoroot.io", ["nanoroot/io.pyx"]),
    Extension("nanoroot.tbufferfile", ["nanoroot/tbufferfile.pyx"]),
    Extension("nanoroot.tfile", ["nanoroot/tfile.pyx"]),
    Extension("nanoroot.ttree", ["nanoroot/ttree.pyx"]),
    Extension("ioservice", ["ioservice.pyx"]),
]

compiler_directives = {"language_level": 3, "embedsignature": True}
extensions = cythonize(extensions, compiler_directives=compiler_directives, annotate=True)

setup(
    ext_modules=extensions,
)
