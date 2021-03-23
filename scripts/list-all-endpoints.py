#!/usr/bin/env python3

import sys
import json
import random
import argparse
import requests


def start(url, port, num_samples):
    # Use port number if not -1 was passed
    base_url = url
    if port != -1:
        base_url = '%s:%s' % (url, port)

    try:
        samples_url = '%s/api/v1/samples' % base_url
        r = requests.get(samples_url)
        samples = json.loads(r.text)
        samples = samples['data']
    except Exception as ex:
        print(ex, file=sys.stderr)
        return

    # Shuffle the list
    random.shuffle(samples)

    # Take num_samples random samples
    for sample in samples[:num_samples]:
        print('Selected random sample: %s %s' % (sample['run'], sample['dataset']), file=sys.stderr)
        get_dir_content(base_url, sample['run'], sample['dataset'], '')


def get_dir_content(base_url, run, dataset, path):
    ''' Recursively traverses all directories '''

    try:
        archive_url = '%s/api/v1/archive/%s%s/%s' % (base_url, run, dataset, path)
        r = requests.get(archive_url)
        content = json.loads(r.text)
        content = content['data']
        
        for item in content:
            if 'subdir' in item:
                if path == '':
                    new_path = item['subdir']
                else:
                    new_path = path
                    new_path += item['subdir'] if new_path[-1] == '/' else '/' + item['subdir']

                new_url = archive_url
                new_url += item['subdir'] if new_url[-1] == '/' else '/' + item['subdir']

                print(new_url[21:])
                get_dir_content(base_url, run, dataset, new_path)
            elif 'path' in item and item['layout'] == None:
                render_url = '%s/api/v1/render/%s%s/%s' % (base_url, run, dataset, item['path'])
                print(render_url[21:])
    except Exception as ex:
        print(ex, file=sys.stderr)
        return None



if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=
        ''' 
        This utility recursively traverses all samples registered in the DQM GUI and provides a list of all possible archive and rendering requests. 
        Randomly sampled output of this script is indended to be used for a stress test of the DQM GUI.
        ''')
    parser.add_argument('-u', '--url', type=str, default='http://localhost', help='URL where DQM GUI is running.')
    parser.add_argument('-p', '--port', type=int, default=8889, help='Port DQM GUI is running on. Pass -1 if you want port not to be used at all.')
    parser.add_argument('-n', '--num_samples', type=int, default=100, help='Number of samples to process.')
    args = parser.parse_args()

    start(args.url, args.port, args.num_samples)
