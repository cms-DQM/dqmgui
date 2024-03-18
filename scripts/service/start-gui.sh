#!/bin/bash

# This is a wrapper script that finds the current
# version of the DQM GUI from the CMSSW release
# This script is invoked by systemd but can also
# be executed manually

# Vars replaced during installation
ALLOWED_USER=dqmpro
INSTALLATION_DIR=/dqmgui
CMSSW_BASE_DIR=/dqmdata/dqm_cmssw
DQMGUI_DATA_DIR=/data/dqmgui

if [ "$USER" != "$ALLOWED_USER" ]; then
    echo "This script has to be executed as $ALLOWED_USER user"
    exit 1
fi

DQMGUI_PATH=$INSTALLATION_DIR/scripts
cd $DQMGUI_PATH
source /opt/offline/cmsset_default.sh
DQMGUI_SCRIPT_FILEPATH="$DQMGUI_PATH/dqmgui.sh"
HOST=$(hostname)
source $DQMGUI_SCRIPT_FILEPATH -p 8889 -r 8 -f $DQMGUI_DATA_DIR/files/root/ -d $DQMGUI_DATA_DIR/state/ -host $HOST "$@"
