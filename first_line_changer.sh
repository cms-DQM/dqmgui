#!/bin/bash -e

#CORRECT_PATH="#include "../src/DQMRenderPlugin.h""
CORRECT_PATH="aaaaa"

for entry in ./plugins/*
do
	sed -i "1s/.*/\$CORRECT_PATH/" $entry
	echo $correct_path
done
