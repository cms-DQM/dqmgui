#!/bin/bash -e
BASE=$(pwd)
CMSSW_VERSION=$(cat $BASE/scripts/cmssw_info | sed -n '2 p')
SCRAM_ARCH=$(cat $BASE/scripts/cmssw_info | sed -n '3 p')

pushd $(scram -a $SCRAM_ARCH list -c $CMSSW_VERSION | tail -1 | sed 's|.* ||') > /dev/null
  eval `scram run -sh`
popd > /dev/null

python3 $BASE/../python/app.py "$@"
