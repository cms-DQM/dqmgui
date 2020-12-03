#!/bin/bash
CMSSW_VERSION=CMSSW_11_1_0_pre6
SCRAM_ARCH=slc7_amd64_gcc820

pushd $(scram -a $SCRAM_ARCH list -c $CMSSW_VERSION | tail -1 | sed 's|.* ||')
  eval `scram run -sh`
popd

BASE="`dirname $0`"
python3 $BASE/../python/app.py "$@"
