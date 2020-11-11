#!/bin/bash
set -e
set -x
BASE="`dirname $0`"

mkdir -p $BASE/../lib
mkdir -p $BASE/../bin

CFLAGS="--std=c++17 -fPIC -D_GLIBCXX_USE_CXX11_ABI=0"
INCLUDE=(
  "-I/cvmfs/cms.cern.ch/slc7_amd64_gcc820/lcg/root/6.18.04-blocog/include" # ROOT
  "-I/cvmfs/cms.cern.ch/slc7_amd64_gcc820/external/boost/1.72.0-bcolbf/include" # BOOST
)
LIB=(
  "-L/cvmfs/cms.cern.ch/slc7_amd64_gcc820/cms/cmssw/CMSSW_11_1_0_pre6/external/slc7_amd64_gcc820/lib"
)
ROOTLIBS=(-lCore -lRIO -lNet -lHist -lMatrix -lThread -lTree -lMathCore -lGpad -lGraf3d -lGraf -lPhysics -lPostscript -lASImage)
OTHERLIBS=(-ldl -ljpeg -lpng15 "-lstdc++fs")
# I have no idea why G++ does not read symbols from here with -lstdc++fs. I got that filename out of strace, so it was sure opened...
HACKS="/cvmfs/cms-ib.cern.ch/nweek-02654/slc7_amd64_gcc820/external/gcc/8.2.0-pafccj/bin/../lib/gcc/x86_64-unknown-linux-gnu/8.3.1/../../../../lib64/libstdc++fs.a" 

# Compile
g++ $CFLAGS "${INCLUDE[@]}" -c $BASE/../src/DQMRenderPlugin.cc -o $BASE/../lib/DQMRenderPlugin.o
g++ $CFLAGS "${INCLUDE[@]}" "${OTHERLIBS[@]}" -c $BASE/../src/render.cc -o $BASE/../lib/render.o
g++ --shared "${LIB[@]}" "${ROOTLIBS[@]}" "${OTHERLIBS[@]}" $BASE/../lib/DQMRenderPlugin.o -o $BASE/../lib/renderplugin.so

# Link executable
g++ $CFLAGS "${LIB[@]}" "${ROOTLIBS[@]}" "${OTHERLIBS[@]}" $BASE/../lib/renderplugin.so $BASE/../lib/render.o -o $BASE/../bin/render $HACKS

# Link render plugins
g++ -O3 $CFLAGS "${INCLUDE[@]}" --shared $BASE/../plugins/*.cc -o $BASE/../lib/libDQMRenderPlugins.so
