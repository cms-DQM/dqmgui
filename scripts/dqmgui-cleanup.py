#!/usr/bin/env python3
import os
import sys
import time
import argparse
import subprocess
from collections import defaultdict

def get_disk_info( directory ):
    lines = subprocess.check_output(['df','-BM', directory]).decode('utf-8')
    mdir  = "/" + directory.split("/")[0]
    for line in lines.split("\n") : 
        if not mdir in line : continue
        # print( line.split() ) like ['/dev/sda7', '116G', '85G', '32G', '73%', '/home']
        return line.split()
    return None

def start(directory, cmsswSymlink, threshold, lower_threshold) :
    print('Starting to watch directory: %s' % directory)
    while True:
        time.sleep(10)
        try:
            allPBFiles = defaultdict(list)
            for file in os.listdir(directory):
                if not os.path.isfile(os.path.join(directory, file)):
                    continue
                if not file.startswith('run') and not file.endswith('.pb'):
                    continue

                try:
                    run = int(file[3:9])
                except:
                    print('Unable to get run number form a PB file: %s' % file)
                    continue

                allPBFiles[run].append(os.path.join(directory, file))

            # sometimes folder is empty
            if allPBFiles :
                # we will delete all but the newest run
                newestRun = max(allPBFiles.keys())
                for run in allPBFiles.keys():
                    if run != newestRun:
                        for file in allPBFiles[run]:
                            try:
                                print('dqmgui-cleanup.py: removing %s' % file)
                                os.remove(file)
                            except:
                                pass

                # check available disk space
                disk_info   = get_disk_info( directory )
                total_space = float(disk_info[1][:-1])
                used_space  = float(disk_info[2][:-1])
                if used_space > threshold * total_space:
                    print("dqmgui-cleanup.py: Maximum requsted fraction of used space in disk is exceeded (" + str(used_space) + " Mb > " + str(threshold * total_space) + "Mb ), cleaning up .pb files")

                    # remove oldest files of latest run
                    files = allPBFiles[newestRun]
                    files.sort(key=lambda x: os.path.getmtime(x))

                    freed_space = 0
                    for file in files:
                        try:
                            fsize = os.path.getsize( file )/(1024*1024)
                            print('dqmgui-cleanup.py: removing %s %.1f Mb from %.1f Mb' % (file, fsize, used_space - freed_space))
                            os.remove(file)
                            freed_space += fsize
                        except: pass

                        if (used_space - freed_space) <= lower_threshold * total_space : break

                    if (used_space - freed_space) > lower_threshold * total_space:
                        print('dqmgui-cleanup.py: can"t reach the target fraction of disk free space, no more files to delete! (', (used_space - freed_space), "Mb >", lower_threshold * total_space, "Mb)")
                 
        except Exception as ex:
            print(ex)

        # Check if CMSSW was updated
        cmsswDir = subprocess.check_output(['readlink', '-e', cmsswSymlink])
        cmsswDir = cmsswDir.decode('utf-8').rstrip()
        if os.getcwd() != cmsswDir:
            print('CMSSW release changed - exiting.')
            sys.exit(1)

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=
        '''This utility removes old PB files from the Online DQM GUI machine.
        Only the latest file of the latest run is kept. It also periodically checks if CMSSW release is updated and if it is,
        it restarts the DQM GUI from the updated CMSSW release.''')
    parser.add_argument('-d', '--directory', default='/data/dqmgui/files/pb/', help='Directory from which PB files will be deleted.')
    parser.add_argument('-c', '--cmsswSymlink', default='/dqmdata/dqm_cmssw/current_production/src/', help='Symbolic link to the current CMSSW release.')
    parser.add_argument('-t', '--threshold', default=0.90, type=float,  help='Maximum fraction of used space in disk; exceeding .pb files will be removed.')
    parser.add_argument('-l', '--lower_threshold', default=0.80, type=float, help='Target fraction of used space in disk; will try to clean up up to this fraction.')
    args = parser.parse_args()

    start(args.directory, args.cmsswSymlink, args.threshold, args.lower_threshold)



