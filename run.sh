#!/bin/bash
export VO_CMS_SW_DIR=/cvmfs/cms.cern.ch
source $VO_CMS_SW_DIR/cmsset_default.sh
./scripts/build.sh
cd ./scripts
./dqmgui.sh -p 8889