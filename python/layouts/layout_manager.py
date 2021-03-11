import os
from enum import Enum
from collections import namedtuple

class LayoutScope(Enum):
    ONLINE = 1
    OFFLINE = 2
    BOTH = 3


def register_layout(source, destination, name='default', draw=None, scope=LayoutScope.BOTH):
    LayoutManager.add_layout(Layout(source, destination, name, draw), scope)


def adapt_and_register(dqmitems, scope=LayoutScope.BOTH):
    """ Adapt the layout structure from the old DQM GUI to the new one. """

    for key in dqmitems.keys():
        dir = os.path.dirname(key)
        name = os.path.basename(key)
        for items in dqmitems[key]:
            for item in items:
                plot_name = os.path.basename(item['path'])
                source = item['path']
                destination = os.path.join(dir, plot_name)
                draw = Draw(**item['draw']) if 'draw' in item else Draw()
                register_layout(source, destination, name, draw, scope)


class LayoutManager:
    __layouts_online = []
    __layouts_offline = []


    @classmethod
    def get_layouts(cls, scope):
        result = []
        if scope == LayoutScope.ONLINE or scope == LayoutScope.BOTH:
            result += cls.__layouts_online
        if scope == LayoutScope.OFFLINE or scope == LayoutScope.BOTH:
            result += cls.__layouts_offline
        return result


    @classmethod
    def add_layout(cls, layout, scope=LayoutScope.BOTH):
        if not layout or not layout.source or not layout.destination or not layout.name:
            raise Exception('source, destination and name has to be provided for the layout.')

        if scope == LayoutScope.ONLINE or scope == LayoutScope.BOTH:
            cls.__layouts_online.append(layout)
        if scope == LayoutScope.OFFLINE or scope == LayoutScope.BOTH:
            cls.__layouts_offline.append(layout)


    @classmethod
    def get_layouts_by_name(cls, name, scope):
        result = []
        if not name:
            return []
        
        if scope == LayoutScope.ONLINE or scope == LayoutScope.BOTH:
            result += cls.__layouts_online
        if scope == LayoutScope.OFFLINE or scope == LayoutScope.BOTH:
            result += cls.__layouts_offline

        return [x for x in result if x.name == name]


# Name has a default value
Layout = namedtuple('Layout', ['source', 'destination', 'name', 'draw'])
# Python3.6 compatible hack to set the defaults:
Layout.__new__.__defaults__ = ('default',)

Draw = namedtuple('Draw', ['withref', 'xmin', 'xmax', 'ymin', 'ymax', 'zmin', 'zmax', 'xtype', 'ytype', 'ztype', 'drawopts'], defaults=(None,) * 11)
