#!/bin/bash

# This is a wrapper script that finds the current
# version of the DQM GUI cleanup script from the
# CMSSW release. This script is invoked by systemd
# but can also be executed manually

if [ "$USER" != "dqmpro" ]; then
    echo "This script has to be executed as dqmpro user"
    exit 1
fi

CMSSW_SYMLINK=/dqmdata/dqm_cmssw/current_production/src/
DQMGUI_CLEANUP=/dqmgui/scripts/dqmgui-cleanup.py

cd $CMSSW_SYMLINK
source /opt/offline/cmsset_default.sh
eval `scramv1 runtime -sh`
exec $DQMGUI_CLEANUP -d /data/dqmgui/files/pb/ -c $CMSSW_SYMLINK "$@"
