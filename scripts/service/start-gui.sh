#!/bin/bash

# This is a wrapper script that finds the current
# version of the DQM GUI from the CMSSW release
# This script is invoked by systemd but can also
# be executed manually

if [ "$USER" != "dqmpro" ]; then
    echo "This script has to be executed as dqmpro user"
    exit 1
fi

DQMGUI_PATH=/dqmgui/scripts
cd $DQMGUI_PATH
source /opt/offline/cmsset_default.sh
DQMGUI_SCRIPT="dqmgui.sh"
FULL_PATH="$DQMGUI_PATH/$DQMGUI_SCRIPT"
HOST=$(hostname)
source $FULL_PATH -p 8889 -r 8 -f /data/dqmgui/files/root/ -d /data/dqmgui/state/ -host $HOST "$@"
