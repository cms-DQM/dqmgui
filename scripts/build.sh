#!/bin/bash -e

BASE=$(pwd)
CMSSW_VERSION=$(cat $BASE/scripts/cmssw_info | sed -n '2 p')
SCRAM_ARCH=$(cat $BASE/scripts/cmssw_info | sed -n '3 p')

pushd $(scram -a $SCRAM_ARCH list -c $CMSSW_VERSION | tail -1 | sed 's|.* ||') > /dev/null
  export ROOT_ROOT=$(scram tool tag root_interface ROOT_INTERFACE_BASE)
  export BOOST_ROOT=$(scram tool tag boost BOOST_BASE)
  export PNG_ROOT=$(scram tool tag libpng LIBPNG_BASE)
  export LIBJPEG_TURBO_ROOT=$(scram tool tag libjpeg-turbo LIBJPEG_TURBO_BASE)
  eval `scram run -sh`
popd > /dev/null

gmake $@ all

# Build Cython modules
cd $BASE/python/
python3 setup_cython.py build_ext --inplace
