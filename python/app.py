"""
_|_|_|      _|_|      _|      _|        _|_|_|  _|    _|  _|_|_|  
_|    _|  _|    _|    _|_|  _|_|      _|        _|    _|    _|    
_|    _|  _|  _|_|    _|  _|  _|      _|  _|_|  _|    _|    _|    
_|    _|  _|    _|    _|      _|      _|    _|  _|    _|    _|    
_|_|_|      _|_|  _|  _|      _|        _|_|_|    _|_|    _|_|_|  

This is an entry point to the DQM GUI application. It can be started like this: dqmgui.sh

This file configures and initializes aiohttp web server and all DQM GUI services. 
Responsibilities of the endpoint methods here are to parse input parameters, call 
the corresponding service methods to get the result and format the output.

Each method is defined twice: for legacy API and for new, v1 API.
If a new version of the API needs to be provided, new /v2/ methods can be provided
and configured here.
"""

from helpers import get_absolute_path

# Add local python packages dir (if it exists) to python path.
import sys, os
local_packages_dir = get_absolute_path('.python_packages/')
if os.path.isdir(local_packages_dir):
    sys.path.insert(0, local_packages_dir)

# This is to make sure that the fork() happens before any imports, and before 
# any threads are created.
processpoolexecutor = None
if __name__ == '__main__':
    import multiprocessing
    # forkserver means that a dummy process (a fork server process) will be forked
    # right now, before any threads/locks are created. Whenever a new process will
    # be requested by the ProcessPoolExecutor, fork server process will be forked
    # instead of the main process.
    multiprocessing.set_start_method('forkserver')
    from concurrent.futures import ProcessPoolExecutor
    # concurrent.futures initializes the actual multiprocessing pool lazily. So we
    # force the creation of a fork server here.
    with ProcessPoolExecutor(1) as executor:
        fut = executor.submit(print, "Process pool initialized.")
        fut.result()
    # Now we should be safe.

    # Import things only when in the main process.
    # This ensures that layouts are not registered in the fork.
    import asyncio
    import logging
    import argparse

    from aiohttp import web
    from logging.handlers import TimedRotatingFileHandler

    from service import GUIService
    from storage import GUIDataStore
    from helpers import parse_run_lumi
    from rendering import GUIRenderer
    from data_types import RenderingOptions, MEDescription, TooManyRequestsException
    from importing.importing import GUIImportManager

    # Services
    service = GUIService()

# This is needed for the decorators
from helpers import getNotOlderThanFromUrl
from aiohttp.web import middleware


# ###################################################################################################### #
# =========================== API endpoint handling methods for all versions =========================== #
# ###################################################################################################### #

async def index(request):
    return web.FileResponse(get_absolute_path('../frontend/index.html'))


@getNotOlderThanFromUrl
async def samples_legacy(request, notOlderThan):
    """Returns a list of matching run/dataset pairs based on provided regex search."""

    run, lumi = parse_run_lumi(request.rel_url.query.get('run'))
    dataset = request.rel_url.query.get('match')

    samples = await service.get_samples(run, dataset, lumi, notOlderThan=notOlderThan)

    result = {
        'samples': [{
            'type': 'offline_data',
            'items': [{
                'run': str(sample.run) if sample.lumi == 0 else '%s:%s' % (sample.run, sample.lumi),
                'dataset': sample.dataset
            } for sample in samples]
        }]
    }
    return web.json_response(result)


@getNotOlderThanFromUrl
async def samples_v1(request, notOlderThan):
    """Returns a list of matching run/dataset pairs based on provided regex search."""

    run = request.rel_url.query.get('run')
    lumi = request.rel_url.query.get('lumi', 0)
    dataset = request.rel_url.query.get('dataset')

    samples = await service.get_samples(run, dataset, lumi, notOlderThan=notOlderThan)

    result = {
        'data': [{
            'run': sample.run,
            'lumi': sample.lumi,
            'dataset': sample.dataset,
        } for sample in samples]
    }
    return web.json_response(result)


@getNotOlderThanFromUrl
async def archive_legacy(request, notOlderThan):
    """Returns a directory listing for provided run:lumi/dataset/path combination."""

    run, lumi = parse_run_lumi(request.match_info['run'])
    full_path = request.match_info['path']
    search = request.rel_url.query.get('search')

    # Separate dataset and a path within the root file
    parts = full_path.split('/')
    dataset = '/' + '/'.join(parts[0:3])
    path = '/'.join(parts[3:])

    data = await service.get_archive(run, dataset, path, search, lumi, notOlderThan=notOlderThan)
    if not data:
        return web.HTTPNotFound()

    result = {'contents': []}
    result['contents'].extend({'subdir': name, 'me_count': me_count} for name, me_count in data.dirs)

    for (name, path, layout, qteststatuses) in data.objs:
        obj = {
            'name': name,
            'path': path,
            'layout': layout.name if layout != None else None
        }
        if layout != None:
            obj['draw'] = { k:v for k, v in zip(layout.draw._fields, layout.draw) if v is not None }
            obj['overlays'] = layout.overlays
            obj['description'] = layout.description
        obj['qtstatuses'] = [x for x in qteststatuses]
        result['contents'].append(obj)

    return web.json_response(result)


@getNotOlderThanFromUrl
async def archive_v1(request, notOlderThan):
    """Returns a directory listing for provided run:lumi/dataset/path combination."""

    run, lumi = parse_run_lumi(request.match_info['run'])
    full_path = request.match_info['path']
    search = request.rel_url.query.get('search')

    # Separate dataset and a path within the root file
    parts = full_path.split('/')
    dataset = '/' + '/'.join(parts[0:3])
    path = '/'.join(parts[3:])

    data = await service.get_archive(run, dataset, path, search, lumi, notOlderThan=notOlderThan)
    if not data:
        return web.HTTPNotFound()

    result = {'data': []}
    result['data'].extend({'subdir': name, 'me_count': me_count} for name, me_count in data.dirs)

    for (name, path, layout, qteststatuses) in data.objs:
        obj = {
            'name': name,
            'path': path,
            'layout': layout.name if layout != None else None
        }
        if layout != None:
            obj['draw'] = { k:v for k, v in zip(layout.draw._fields, layout.draw) if v is not None }
            obj['overlays'] = layout.overlays
            obj['description'] = layout.description
        obj['qtstatuses'] = [x for x in qteststatuses]
        result['data'].append(obj)

    return web.json_response(result)


# This endpoint doesn't exist in legacy API
async def layouts_v1(request):
    """Returns all monitor elements present in the layout of a given name"""

    name = request.rel_url.query.get('name')

    layouts = await service.get_layouts_by_name(name)

    result = {'data':
        [{'source': x.source, 'destination': x.destination} for x in layouts]
    }

    return web.json_response(result)


@getNotOlderThanFromUrl
async def render_legacy(request, notOlderThan):
    """Returns a PNG image for provided run:lumi/dataset/path combination"""

    run, lumi = parse_run_lumi(request.match_info['run'])
    full_path = request.match_info['path']
    options = RenderingOptions.from_dict_legacy(request.rel_url.query)

    # Separate dataset and a path within the root file
    parts = full_path.split('/')
    dataset = '/' + '/'.join(parts[0:3])
    path = '/'.join(parts[3:])

    me_description = MEDescription(dataset, path, run, lumi)

    data, error = await service.get_rendered_image([me_description], options, notOlderThan=notOlderThan)

    if data == b'crashed':
        return web.HTTPInternalServerError()
    elif data == b'error':
        return web.HTTPBadRequest()
    return web.Response(body=data, content_type='image/png', status = 200 if error == 0 else 500)


@getNotOlderThanFromUrl
async def render_v1(request, notOlderThan):
    """Returns a PNG image for provided run:lumi/dataset/path combination"""

    run, lumi = parse_run_lumi(request.match_info['run'])
    full_path = request.match_info['path']
    options = RenderingOptions.from_dict(request.rel_url.query)

    # Separate dataset and a path within the root file
    parts = full_path.split('/')
    dataset = '/' + '/'.join(parts[0:3])
    path = '/'.join(parts[3:])

    me_description = MEDescription(dataset, path, run, lumi)

    data, error = await service.get_rendered_image([me_description], options, notOlderThan=notOlderThan)

    if data == b'crashed':
        return web.HTTPInternalServerError()
    elif data == b'error':
        return web.HTTPBadRequest()
    return web.Response(body=data, content_type='image/png', status = 200 if error == 0 else 500)


@getNotOlderThanFromUrl
async def render_overlay_legacy(request, notOlderThan):
    """Returns a PNG image for provided run:lumi/dataset/path combination"""

    options = RenderingOptions.from_dict_legacy(request.rel_url.query)

    me_descriptions = []
    for obj in request.rel_url.query.getall('obj', []):
        parts = obj.split('/')
        run, lumi = parse_run_lumi(parts[1])
        dataset = '/' + '/'.join(parts[2:5])
        path = '/'.join(parts[5:])

        me_description = MEDescription(dataset, path, run, lumi)
        me_descriptions.append(me_description)

    data, error = await service.get_rendered_image(me_descriptions, options, notOlderThan=notOlderThan)

    if data == b'crashed':
        return web.HTTPInternalServerError()
    elif data == b'error':
        return web.HTTPBadRequest()
    return web.Response(body=data, content_type='image/png', status = 200 if error == 0 else 500)


@getNotOlderThanFromUrl
async def render_overlay_v1(request, notOlderThan):
    """Returns a PNG image for provided run:lumi/dataset/path combination"""

    options = RenderingOptions.from_dict(request.rel_url.query)

    me_descriptions = []
    for obj in request.rel_url.query.getall('obj', []):
        parts = obj.split('/')
        run, lumi = parse_run_lumi(parts[1])
        dataset = '/' + '/'.join(parts[2:5])
        path = '/'.join(parts[5:])

        me_description = MEDescription(dataset, path, run, lumi)
        me_descriptions.append(me_description)

    data, error = await service.get_rendered_image(me_descriptions, options, notOlderThan=notOlderThan)

    if data == b'crashed':
        return web.HTTPInternalServerError()
    elif data == b'error':
        return web.HTTPBadRequest()
    return web.Response(body=data, content_type='image/png', status= 200 if error == 0 else 500)


@getNotOlderThanFromUrl
async def jsroot_legacy(request, notOlderThan):
    """Returns a JSON representation of a ROOT histogram for provided run:lumi/dataset/path combination"""

    run, lumi = parse_run_lumi(request.match_info['run'])
    full_path = request.match_info['path']

    # This is caused by a double slash in the url
    if full_path[0] == '/':
        full_path = full_path[1:]

    # Separate dataset and a path within the root file
    parts = full_path.split('/')
    dataset = '/' + '/'.join(parts[0:3])
    path = '/'.join(parts[3:])

    me_description = MEDescription(dataset, path, run, lumi)
    options = RenderingOptions(json=True)

    data, error = await service.get_rendered_json([me_description], options, notOlderThan=notOlderThan)

    if data == b'crashed':
        return web.HTTPInternalServerError()
    elif data == b'error':
        return web.HTTPBadRequest()
    return web.json_response(data, status = 200 if error == 0 else 500)


@getNotOlderThanFromUrl
async def jsroot_overlay(request, notOlderThan):
    """Returns a list of JSON representations of ROOT histograms for provided run:lumi/dataset/path combinations"""

    me_descriptions = []
    for obj in request.rel_url.query.getall('obj', []):
        parts = obj.split('/')
        run, lumi = parse_run_lumi(parts[1])
        dataset = '/' + '/'.join(parts[2:5])
        path = '/'.join(parts[5:])

        me_description = MEDescription(dataset, path, run, lumi)
        me_descriptions.append(me_description)

    options = RenderingOptions(json=True)

    data, error = await service.get_rendered_json(me_descriptions, options, notOlderThan=notOlderThan)

    if data == b'crashed':
        return web.HTTPInternalServerError()
    elif data == b'error':
        return web.HTTPBadRequest()
    return web.json_response(data, status = 200 if error == 0 else 500)


async def available_lumis_v1(request):
    """Returns a list of available lumisections for provided dataset/run combination."""

    run = request.match_info['run']
    dataset = '/' + request.match_info['dataset']

    data = await service.get_available_lumis(dataset, run)
    return web.json_response(data)


async def register(request):
    """
    Regsiters a sample into a database. 
    A list of samples has to be posted in HTTP body, in JSON format:
    [{"dataset": "/a/b/c", "run": "123456", "lumi": "0", "file": "/a/b/c.root", "fileformat": 1}]
    """

    result = await service.register_samples(await request.text())

    if result != True:
        return web.json_response(result, status=400)
    
    return web.HTTPCreated()


@getNotOlderThanFromUrl
async def dataset_search(request, notOlderThan):
    """Returns at most 100 dataset names matching the search term."""

    search = request.rel_url.query.get('search', '')
    data = await service.search_dataset_names(search, notOlderThan)
    return web.json_response({'datasets': data})


@getNotOlderThanFromUrl
async def latest_runs(request, notOlderThan):
    """
    Returns at most 100 latest run numbers.
    If search argument is provided, returns at most 100 latest runs matching the search term.
    """

    search = request.rel_url.query.get('search', '')
    data = await service.get_latest_runs(search, notOlderThan)
    return web.json_response({'runs': data})


async def get_host(request):
    """ Returns a host name, where DQM GUI is running """
    host = args.h
    return web.json_response({'host': host})

# ###################################################################################################### #
# ================================== Server middleware configuration =================================== #
# ###################################################################################################### #

@middleware
async def exception_handler_middleware(request, handler):
    try:
        resp = await handler(request)
        return resp
    except TooManyRequestsException:
        return web.json_response({'error': 'The server is under a heavy load at the moment, please try again later.'}, status=429)


# ###################################################################################################### #
# ==================== Server configuration, initialization/destruction of services ==================== #
# ###################################################################################################### #

async def initialize_services(directory, in_memory, files, workers):
    await GUIDataStore.initialize(directory=directory, in_memory=in_memory)
    await GUIImportManager.initialize(files=files)
    await GUIRenderer.initialize(workers=workers)


async def destroy_services():
    await GUIDataStore.destroy()
    await GUIImportManager.destroy()
    await GUIRenderer.destroy()


async def on_shutdown(app):
    print('\nDestroying services...')
    await destroy_services()


def config_and_start_webserver(port):
    app = web.Application(middlewares=[
        web.normalize_path_middleware(append_slash=True, merge_slashes=True),
        exception_handler_middleware,
    ])


    # Legacy routes
    app.add_routes([web.get('/data/json/samples', samples_legacy),
                    web.get(r'/data/json/archive/{run}/{path:.+}', archive_legacy),
                    web.get(r'/plotfairy/archive/{run}/{path:.+}', render_legacy),
                    web.get('/plotfairy/overlay', render_overlay_legacy),
                    web.get(r'/jsrootfairy/archive/{run}/{path:.+}', jsroot_legacy),])

    # Version 1 API routes
    app.add_routes([web.get('/api/v1/samples', samples_v1),
                    web.get('/api/v1/layouts', layouts_v1),
                    web.get(r'/api/v1/archive/{run}/{path:.+}', archive_v1),
                    web.get(r'/api/v1/render/{run}/{path:.+}', render_v1),
                    web.get('/api/v1/render_overlay', render_overlay_v1),
                    web.get(r'/api/v1/json/{run}/{path:.+}', jsroot_legacy),
                    web.get('/api/v1/json_overlay', jsroot_overlay),
                    web.get(r'/api/v1/lumis/{run}/{dataset:.+}', available_lumis_v1),
                    web.post('/api/v1/register', register),
                    web.get('/api/v1/datasets', dataset_search),
                    web.get('/api/v1/latest_runs', latest_runs),
                    web.get('/api/v1/host', get_host)])

    # Routes for HTML files
    app.add_routes([web.get('/', index), web.static('/', get_absolute_path('../frontend/'), show_index=True)])

    app.on_shutdown.append(on_shutdown)

    web.run_app(app, port=port)


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='DQM GUI API')
    parser.add_argument('-f', dest='files', nargs='*', 
        help='DQM files to be imported. You can pass many files or one directory where ROOT files will be taken from.')
    parser.add_argument('-p', dest='port', type=int, default=8889, help='Server port.')
    parser.add_argument('-r', dest='renderers', type=int, default=2, help='Number of renderer processes.')
    parser.add_argument('--in-memory', dest='in_memory', default=False, action='store_true', help='If set uses an in memory database.')
    parser.add_argument('--stderr', default=False, action='store_true', help='If set log to stdout instead of log files.')
    parser.add_argument('-d', dest='workdir', type=str, default='../data/', 
        help='''Directory where SQLite file and logs will be placed. If it starts with / the full absolute directory will be used. 
        If it does not start with /, it will be used as a directory relative to DQMServices/DQMGUI/python/.''')
    parser.add_argument('-h', dest='host', type=str, default='Not specified', help='Host wehere DQM GUI is running')
    args = parser.parse_args()

    # Make sure workdir is an absolute path and that it exists
    if args.workdir.startswith('/'):
        workdir = args.workdir
    else:
        workdir = get_absolute_path(args.workdir)
    os.makedirs(workdir, exist_ok=True)

    # Setup rotating file logging
    def log_file_namer(filename):
        parts = filename.split('/')
        parts[-1] = f'dqmgui_{parts[-1][11:]}.log'
        return '/'.join(parts)
    
    if not args.stderr:
        log_path = os.path.join(workdir, 'logs', 'dqmgui.log')
        os.makedirs(os.path.dirname(log_path), exist_ok=True)
        handler = TimedRotatingFileHandler(log_path, when='midnight', interval=1)
        handler.namer = log_file_namer
    else:
        handler = logging.StreamHandler()
    logger = logging.getLogger()
    formatter = logging.Formatter('%(asctime)s - %(levelname)s - %(name)s - %(message)s')
    handler.setFormatter(formatter)
    logger.setLevel(logging.INFO)
    logger.addHandler(handler)

    asyncio.get_event_loop().run_until_complete(initialize_services(workdir, args.in_memory, args.files, args.renderers))
    config_and_start_webserver(args.port)
