#!/usr/bin/env python3

import json
import time
import argparse
import requests
from itertools import cycle

INPUT_FILES = [
    '/afs/cern.ch/work/a/akirilov/newGuiInputData/run500736_DQMLive_concat_fc40770e4e4cbaf8e8aa16ba6d9d36c0.pb', 
    '/afs/cern.ch/work/a/akirilov/newGuiInputData/run500830_DQMLive_concat_ffe8265e4b40896d153b0def9cf96226.pb',
]

def start(files, delay, url, port):
    for file in cycle(files):        
        guiRegisterEndpoint = '%s:%s/api/v1/register' % (url, port)
        try:
            r = requests.post(guiRegisterEndpoint, data = json.dumps([
                {
                    'dataset': '/Global/Online/ALL', 
                    'run': '0', 
                    'lumi': '0', 
                    'file': file, 
                    'fileformat': 3 # Online protobuf file
                }
            ]))

            print('Registered new file in the GUI: %s' % r.status_code)
        except Exception as ex:
            print(ex)

        for x in range (0, delay):
            print ('Next upload in %s seconds...' % (delay - x), end='\r')
            time.sleep(1)


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=
        '''This utility simulates an Online environment by registering provided files to the DQM GUI every -d seconds, in an endless loop.''')
    parser.add_argument('-f', '--files', type=str, nargs='+', default=INPUT_FILES, help='Input files to register.')
    parser.add_argument('-d', '--delay', type=int, default=23, help='Delay between consecutive file registrations. Default is 23 - the length of one lumisection.')
    parser.add_argument('-u', '--url', type=str, default='http://localhost', help='URL where DQM GUI is running.')
    parser.add_argument('-p', '--port', type=int, default=8889, help='Port DQM GUI is running on.')
    args = parser.parse_args()

    start(args.files, args.delay, args.url, args.port)
