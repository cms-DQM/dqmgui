#!/usr/bin/env python3

import time
import math
import aiohttp
import asyncio
import argparse

async def get(url, session):
    start = time.time()
    async with session.get(url) as response:
        end = time.time()
        elapsed_milliseconds = (end - start) * 1000
        return response, elapsed_milliseconds


async def start(query, count, url, port):
    start = time.time()

    async with aiohttp.ClientSession() as session:
        # Round down to the nearest 10 seconds
        ts = int(math.ceil(time.time() / 10.0)) * 10
        guiEndpoint = '%s:%s%s?notOlderThan=%s' % (url, port, query, ts)
        coroutines = [get(guiEndpoint, session) for _ in range(count)]
        results = await asyncio.gather(*coroutines)

        end = time.time()
        total_elapsed_milliseconds = (end - start) * 1000

        for result in results:
            response, elapsed_milliseconds = result
            print('[%s] - %s ms' % (response.status, elapsed_milliseconds))

        print('TOTAL - %s ms' % total_elapsed_milliseconds)


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=
        '''This utility performs specified number of parallel requests to the DQM GUI.''')
    parser.add_argument('-q', '--query', type=str, default='/api/v1/archive/0/Global/Online/ALL/', help='URL that will be requested')
    parser.add_argument('-n', '--count', type=int, default=10, help='Number of parallel requests to perform.')
    parser.add_argument('-u', '--url', type=str, default='http://localhost', help='URL where DQM GUI is running.')
    parser.add_argument('-p', '--port', type=int, default=8889, help='Port DQM GUI is running on.')
    args = parser.parse_args()

    loop = asyncio.get_event_loop()
    loop.run_until_complete(start(args.query, args.count, args.url, args.port))
