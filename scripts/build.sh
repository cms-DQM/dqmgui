#!/bin/bash -e
CMSSW_VERSION=CMSSW_11_2_0_pre9
SCRAM_ARCH=slc7_amd64_gcc820

pushd $(scram -a $SCRAM_ARCH list -c $CMSSW_VERSION | tail -1 | sed 's|.* ||')
  export ROOT_ROOT=$(scram tool tag root_interface ROOT_INTERFACE_BASE)
  export BOOST_ROOT=$(scram tool tag boost BOOST_BASE)
  export PNG_ROOT=$(scram tool tag libpng LIBPNG_BASE)
  export LIBJPEG_TURBO_ROOT=$(scram tool tag libjpeg-turbo LIBJPEG_TURBO_BASE)
  eval `scram run -sh`
popd
gmake $@ all
