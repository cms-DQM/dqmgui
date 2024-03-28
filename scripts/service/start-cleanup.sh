#!/bin/bash

# This is a wrapper script that finds the current
# version of the DQM GUI cleanup script from the
# CMSSW release. This script is invoked by systemd
# but can also be executed manually

# Vars replaced during installation
ALLOWED_USER=dqmpro
INSTALLATION_DIR=/dqmgui
CMSSW_BASE_DIR=/dqmdata/dqm_cmssw
DQMGUI_DATA_DIR=/data/dqmgui

if [ "$USER" != "$ALLOWED_USER" ]; then
    echo "This script has to be executed as $ALLOWED_USER user"
    exit 1
fi

CMSSW_SYMLINK=$CMSSW_BASE_DIR/current_production/src/
DQMGUI_CLEANUP=$INSTALLATION_DIR/scripts/dqmgui-cleanup.py

cd $CMSSW_SYMLINK
source /opt/offline/cmsset_default.sh
eval $(scramv1 runtime -sh)
exec $DQMGUI_CLEANUP -d $DQMGUI_DATA_DIR/files/pb/ -c $CMSSW_SYMLINK "$@"
