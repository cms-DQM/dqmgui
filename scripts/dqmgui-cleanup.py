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

def start(directory, cmsswSymlink, threshold, lower_threshold, life_time) :
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
                    files = [ (f, os.path.getmtime(f)) for f in files ]
                    files.sort( key=lambda x: x[1] )
                    local_time = files[-1][1]
                    freed_space = 0
                    for item in files:
                        file, file_time = item[0], item[1]
                        # do not delete files younger than `life_time` minutes [0]
                        if (local_time - file_time) < life_time * 60 : break
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
    parser.add_argument('--life_time', default=10, type=int, help='Minimum life time values of .pb files before deletion, in Minutes')
    args = parser.parse_args()

    start(args.directory, args.cmsswSymlink, args.threshold, args.lower_threshold, args.life_time)

"""
[0] a.kirilovas : ``protobuf (PB) files are only used for the live mode of the DQM GUI. The reason why we need to store multiple of them is related to on-demand-importing and caching features of the DQM GUI application. We have configured the system to bypass the cache and perform an on-demand-import (which is slow) every 20 seconds in order to keep the live mode actually live. Deleting newer than 20 second old PB files would result in unavailable data for the users and should be avoided at all costs. Your solution to the problem looks sound and I expect it to be working flawlessly for quite some time in the future! However, it's very important to note that the same disk (1.3T) is also used to store ROOT file that contain DQM GUI online archive data which we have to provide for all runs that happened in the past. This means that ROOT files should remain there, basically forever. I'm concerned about the time when the disk will eventually fill up to 90% (upper threshold in your code) of its capacity by the untouchable ROOT files and every additional PB file will be deleted as soon as it gets transferred to the GUI, resulting in online live mode being completely broken even though we would still have a moderate 130GB to spare. Having that said, I'd suggest to keep latest 10 minutes worth of PB files of a latest run and delete the rest. Also, making sure that we always keep at least, say 10, PB files of a latest run is a reasonable additional rule, I think. Following what I've outlined above, it would totally suffice to just keep latest 20 seconds worth of PB files because that's how long it takes for us to reset the cache, but I'm afraid of a corner case, when files will make it to the GUI disk but will fail to be registered for some reason (or the registration will take longer than expected). So 10 minutes is an arbitrary safety margin - feel free to adjust those numbers to what you think is reasonable. I hope I cleared things up a bit''

[1] For the debugging you can populate random file like : head -c 100M </dev/urandom > run341343_DQMLive_concat_b25f7ad9934658ca42f93f07407b372f.pb
"""


