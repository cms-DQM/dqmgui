import os
from enum import Enum
from collections import namedtuple

class LayoutScope(Enum):
    ONLINE = 1
    OFFLINE = 2
    RELVAL = 3
    ALL = 4


Layout = namedtuple('Layout', ['source', 'destination', 'name', 'draw', 'overlays'])
Draw = namedtuple('Draw', ['withref', 'xmin', 'xmax', 'ymin', 'ymax', 'zmin', 'zmax', 'xtype', 'ytype', 'ztype', 'drawopts'], defaults=(None,) * 11)


def register_layout(source, destination, name='default', draw=Draw(), overlays=tuple(), scope=LayoutScope.ALL):
    LayoutManager.add_layout(Layout(source, destination, name, draw, overlays), scope)


def adapt_and_register(dqmitems, scope=LayoutScope.ALL):
    """ Adapt the layout structure from the old DQM GUI to the new one. """

    for key in dqmitems.keys():
        dir = os.path.dirname(key)
        name = os.path.basename(key)
        for items in dqmitems[key]:
            for item in items:
                if item == None or 'path' not in item:
                    continue
                plot_name = os.path.basename(item['path'])
                source = item['path']
                destination = os.path.join(dir, plot_name)
                draw = Draw(**item['draw']) if 'draw' in item else Draw()
                overlays = tuple(item['overlays']) if 'overlays' in item else tuple()
                register_layout(source, destination, name, draw, overlays, scope)


class LayoutManager:
    __layouts_online = []
    __layouts_offline = []
    __layouts_relval = []


    @classmethod
    def get_layouts(cls, scope):
        result = []
        if scope == LayoutScope.ONLINE or scope == LayoutScope.ALL:
            result += cls.__layouts_online
        if scope == LayoutScope.OFFLINE or scope == LayoutScope.ALL:
            result += cls.__layouts_offline
        if scope == LayoutScope.RELVAL or scope == LayoutScope.ALL:
            result += cls.__layouts_relval
        return result


    @classmethod
    def add_layout(cls, layout, scope=LayoutScope.ALL):
        if not layout or not layout.source or not layout.destination or not layout.name:
            raise Exception('source, destination and name has to be provided for the layout.')

        if scope == LayoutScope.ONLINE or scope == LayoutScope.ALL:
            cls.__layouts_online.append(layout)
        if scope == LayoutScope.OFFLINE or scope == LayoutScope.ALL:
            cls.__layouts_offline.append(layout)
        if scope == LayoutScope.RELVAL or scope == LayoutScope.ALL:
            cls.__layouts_relval.append(layout)


    @classmethod
    def get_layouts_by_name(cls, name, scope):
        result = []
        if not name:
            return []
        
        if scope == LayoutScope.ONLINE or scope == LayoutScope.ALL:
            result += cls.__layouts_online
        if scope == LayoutScope.OFFLINE or scope == LayoutScope.ALL:
            result += cls.__layouts_offline
        if scope == LayoutScope.RELVAL or scope == LayoutScope.ALL:
            result += cls.__layouts_relval

        return [x for x in result if x.name == name]
