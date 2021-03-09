import os
import time
import logging
import contextvars
import json
from inspect import getframeinfo, stack
from collections import namedtuple

class PrintTime():
    """A helper that will print the location a of where the constructor was called from and a wall clock time. """

    def __init__(self, message=''):
        caller = getframeinfo(stack()[1][0])
        filename = os.path.basename(caller.filename)
        lineno = caller.lineno
        print('%s:%s - %s s. %s' % (filename, lineno, time.time(), message))


class Timed():
    """A helper that will measure wall clock time between enter and exit methods."""

    def __init__(self, message='', quiet=False):
        caller = getframeinfo(stack()[1][0])
        self.filename = os.path.basename(caller.filename)
        self.lineno = caller.lineno
        self.message = message
        self.quiet = quiet

    def __enter__(self):
        self.start_time = time.time()
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        elapsed = time.time() - self.start_time
        elapsed = elapsed * 1000
        if not self.quiet:
            print('%s:%s - %s ms %s' % (self.filename, self.lineno, elapsed, self.message))

# `logged` uses some "task local" variables to track a global request id and
# keep track of how calls are nested.
logged_curid = [0]
logged_reqid = contextvars.ContextVar("logged_reqid", default=None)
logged_depth = contextvars.ContextVar("logged_depth", default=0)


def logged(fn):
    """A decorator to write timing information to a log."""
    logger = logging.getLogger("helpers.logged")
    async def wrapped(*posargs, **kwargs):
        showargs = [repr(arg) for arg in posargs if isinstance(arg, str) or isinstance(arg, int) or isinstance(arg, tuple)]
        showargs += [repr(arg) for arg in kwargs.values() if isinstance(arg, str) or isinstance(arg, int) or isinstance(arg, tuple)]

        reqid = logged_reqid.get()
        if not reqid:
            logged_curid[0] += 1
            reqid = logged_curid[0]
            logged_reqid.set(reqid)
        depth = logged_depth.get() + 1
        logged_depth.set(depth)

        msg = f"{reqid}{' ' * depth}{fn.__qualname__}({', '.join(showargs)})"
        start_time = time.time()
        ok = "FAIL"
        try:
            ret = await fn(*posargs, **kwargs)
            ok = "OK"
        finally:
            elapsed = time.time() - start_time
            logged_depth.set(depth - 1)
            logger.info(f"{msg} [{ok} {elapsed*1000:.1f}ms]")
        return ret
    return wrapped


def get_api_error(message):
    """Returns an object that is returned by the API to signify an error."""
    return { 'message': message }


def get_base_release_dir():
    """
    Returns an absolute path to the python folder of the base of the release.
    """
    return os.path.dirname(__file__)


def get_absolute_path(to=''):
    """
    Returns an absolute path to a specified directory or file. 
    Specified path must be a relative path starting at the base of the release.
    """

    base = get_base_release_dir()
    return os.path.join(base, to)
    # base = get_base_release_dir()
    # directory = 'src/DQMServices/DQMGUI/python/'
    # if base:
    #     return os.path.join(base, directory, to)
    # return os.path.join(directory, to)


def binary_search(array, target, key=None):
    """
    Binary search implementation. Returns an index of an element if found, otherwise -1.
    If key is passed, value will be taken by that key from every item in the array.
    If decode is True, every item in the array is utf-8 decoded.
    """

    first = 0
    last = len(array) - 1

    while first <= last:
        mid = (first + last)//2

        if key:
            current = array[mid][key]
        else:
            current = array[mid]

        if current == target:
            return mid
        else:
            if target < current:
                last = mid - 1
            else:
                first = mid + 1
    return -1


def binary_search_qtests(me_names, me_path):
    """
    Binary search implementation. me_names array has to be an array of binary
    strings containing ME names.
    Returns a tuple of indices pointing to the QTest MEInfo items of a given me_path.
    """

    first = 0
    last = len(me_names) - 1
    index = -1
    target = me_path + b'\0.'

    while first <= last:
        mid = (first + last)//2

        if me_names[mid][:len(target)] == target:
            index = mid
            break
        else:
            if target < me_names[mid][:len(target)]:
                last = mid - 1
            else:
                first = mid + 1

    if index == -1:
        return tuple()

    # Found an index, now linearly search nearby items to get all values
    result = (index,)

    potential_index = 1
    while index + potential_index < len(me_names):
        if me_names[index + potential_index][:len(target)] == target:
            result += (index + potential_index,)
            potential_index += 1
        else:
            break

    potential_index = 1
    while index - potential_index >= 0:
        if me_names[index - potential_index][:len(target)] == target:
            result += (index - potential_index,)
            potential_index += 1
        else:
            break

    return result


def parse_run_lumi(runlumi):
    """
    Run/lumi pair is passed to the API in this format: run:lumi
    This method parses such string and returns a tuple (run, lumi).
    If lumi is not passed, it's assumed that it's value is 0.
    If run is not passed, it's assumed that it's value is None.
    """

    def intTryParse(value, default=0):
        try:
            return int(value)
        except ValueError:
            return default
        
    if not runlumi:
        return None, 0
    elif ':' in runlumi:
        parts = runlumi.split(':')
        return intTryParse(parts[0], default=None), intTryParse(parts[1], default=0)
    else:
        return intTryParse(runlumi, default=None), 0


def getNotOlderThanFromUrl(function):
    """
    Gets the value of notOlderThan from the request object and passes it down to the function.
    Supposed to be used on aiohttp endpoint methods that accept only one (request) parameter.
    If notOlderThan is missformatted, returns an error.
    """

    def wrap_function(*args, **kwargs):
        notOlderThan = args[0].rel_url.query.get('notOlderThan', None)
        if notOlderThan and not notOlderThan.isnumeric():
            from aiohttp import web
            return web.json_response(get_api_error('notOlderThan is a numeric timestamp in seconds, in UTC time zone.'))

        notOlderThan = int(notOlderThan) if notOlderThan else None

        return function(*args, **kwargs, notOlderThan=notOlderThan)
    return wrap_function

def JSONSerializeTuple(named_tuple):
    orderedDict = named_tuple._asdict()
    dictionary = dict(orderedDict)
    keys = dictionary.keys()
    if 'draw' in keys:
        json_acceptable_string = dictionary['draw'].replace("'", "\"")
        dictionary['draw'] = json.loads(json_acceptable_string)
    if 'overlays' in keys:
        json_acceptable_string = dictionary['overlays'].replace("'", "\"")
        dictionary['overlays'] = json.loads(json_acceptable_string)
    return dictionary

def formRootObj(layout, qteststatuses, segment):
    all_keys = layout._fields
    values = []
    keys=[]
    for key in all_keys:
        if key != 'source' and key != 'name' and key != 'destination' and key != 'file_path':
            #we don't need to send these attributes to the client
            values.append(str(getattr(layout, key)))
            keys.append(key)
    ##adding main attributes
    keys.append('name')
    values.append(segment) 
    keys.append('path') 
    values.append(layout.source) 
    keys.append('layout') 
    values.append(layout.name)
    keys.append('qteststatuses') 
    values.append(qteststatuses)
    Root_obj = namedtuple('RootObj', keys)
    root_obj = Root_obj._make(values)
    return root_obj
