#!/usr/bin/env python3

import os
import time
import asyncio
import argparse
import statistics
from random import sample
from threading import Thread
from datetime import datetime
import matplotlib.pyplot as plt
from aiohttp import ClientSession


async def run(loop, url, port, input_file, rate, plot):
    # Use port number if not -1 was passed
    base_url = url
    if port != -1:
        base_url = '%s:%s' % (url, port)

    if not os.path.isfile(input_file):
        print("Input file doen't exist: %s" % input_file)
        return

    # rate has to be >= 10
    if rate < 10:
        print('Rate has to be at least 10 requests per second.')
        return

    rate = int(rate / 10)

    print('Loading input file, this can take a bit...')
    with open(input_file) as file:
        url_list = list(file)
        # You can use less URLs for debugging:
        # url_list = file.readlines(100000)
        # To debug things, you can keep only archive or render requests:
        # url_list = [url for url in url_list if '/api/v1/render' in url]

    print('%s URLs were loaded' % len(url_list))

    # This is for statistics
    results = { 'success': 0, 'error': 0 }

    def when_finished(task):
        if task.result() == 200:
            results['success'] += 1
        else:
            results['error'] += 1

    # Start the timer
    thread = Thread(target=timer_function, daemon=True, args=(results, plot))
    thread.start()

    # Start random requests
    async with ClientSession() as session:
        while True:
            for url in sample(url_list, rate):
                full_url = base_url + url.rstrip('\n')
                task = loop.create_task(fetch(full_url, session))
                task.add_done_callback(when_finished)

            # We're firing the requests 10 times per second to balance the load
            await asyncio.sleep(0.1)


async def fetch(url, session):
    async with session.get(url) as response:
        return response.status


def timer_function(results, plot):
    last_time = datetime.now()
    last_requests = 0
    frequencies = []
    means = []

    while True:
        time.sleep(1)
        time_diff = (datetime.now() - last_time).total_seconds()
        requests_diff = (results['success'] + results['error']) - last_requests
        
        frequency = requests_diff / time_diff
        frequencies.append(frequency)
        mean = statistics.mean(frequencies)
        means.append(mean)

        print('Req/s.: %s, mean: %s. Successes: %s, errors: %s' % (frequency, mean, results['success'], results['error']))

        last_time = datetime.now()
        last_requests = results['success'] + results['error']

        if plot:
            if len(frequencies) % 10 == 0:
                print('Saving the plot for %s seconds.' % len(frequencies))
                plt.plot(range(1, len(means) + 1), means, 'g')
                plt.title('Rolling average of the number of served requests per second')
                plt.xlabel('Seconds')
                plt.ylabel('Average # of requests')
                plt.savefig('distribution.png')


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=
        ''' 
        This utility randomly samples URLs from a provided text file and performs HTTP requests to the DQM GUI at a given rate (req/s). 
        Input file content should looks omething like this:
        /api/v1/archive/325054/ZeroBias/Run2018D-PromptReco-v2/DQMIO/AlCaReco
        /api/v1/archive/325054/ZeroBias/Run2018D-PromptReco-v2/DQMIO/AlCaReco/SiStrip
        /api/v1/archive/325054/ZeroBias/Run2018D-PromptReco-v2/DQMIO/AlCaReco/SiStrip/MechanicalView
        /api/v1/render/325054/ZeroBias/Run2018D-PromptReco-v2/DQMIO/AlCaReco/SiStrip/MechanicalView/TEC/MINUS/wheel_1/backward_petals/petal_1/ring_1/mono_modules/module_470044966/ClusterDigiPosition__det__470044966
        ...
        ''')
    parser.add_argument('-i', '--input', type=str, required=True, help='Input file that contains URLs.')
    parser.add_argument('-r', '--rate', type=int, default=10, help='Number of random requests to perform per second.')
    parser.add_argument('-u', '--url', type=str, default='http://localhost', help='URL where DQM GUI is running.')
    parser.add_argument('-p', '--port', type=int, default=8889, help='Port DQM GUI is running on. Pass -1 if you want port not to be used at all.')
    parser.add_argument('--plot', dest='plot', action='store_true', default=False, help='If passed, a plot showing average requests per second will be saved periodically.')
    
    args = parser.parse_args()

    loop = asyncio.get_event_loop()
    future = asyncio.ensure_future(run(loop, args.url, args.port, args.input, args.rate, args.plot))
    loop.run_until_complete(future)
