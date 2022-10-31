from layouts.layout_manager import LayoutScope, adapt_and_register
dqmitems={}

from layouts.layout_manager import LayoutScope, register_layout

register_layout(source='FakeBeamMonitor/EventInfo/reportSummaryMap', destination='Summary/reportSummaryMap', name='Summaries',  scope=LayoutScope.ALL)
register_layout(source='GEM/EventInfo/reportSummaryMap', destination='Summary/reportSummaryMap', name='Summaries', scope=LayoutScope.ALL)
register_layout(source='CSC/EventInfo/reportSummaryMap', destination='Summary/reportSummaryMap', name='Summaries', scope=LayoutScope.ALL)
register_layout(source='DT/EventInfo/reportSummaryMap', destination='Summary/reportSummaryMap', name='Summaries', scope=LayoutScope.ALL)
register_layout(source='Ecal/EventInfo/reportSummaryMap', destination='Summary/reportSummaryMap', name='Summaries', scope=LayoutScope.ALL)
register_layout(source='EcalPreshower/EventInfo/reportSummaryMap', destination='Summary/reportSummaryMap', name='Summaries', scope=LayoutScope.ALL)
register_layout(source='FED/EventInfo/reportSummaryMap', destination='Summary/reportSummaryMap', name='Summaries', scope=LayoutScope.ALL)
register_layout(source='Hcal/EventInfo/reportSummaryMap', destination='Summary/reportSummaryMap', name='Summaries', scope=LayoutScope.ALL)
register_layout(source='HcalReco/EventInfo/reportSummaryMap', destination='Summary/reportSummaryMap', name='Summaries', scope=LayoutScope.ALL)
register_layout(source='Info/EventInfo/reportSummaryMap', destination='Summary/reportSummaryMap', name='Summaries', scope=LayoutScope.ALL)
register_layout(source='L1T/EventInfo/reportSummaryMap', destination='Summary/reportSummaryMap', name='Summaries', scope=LayoutScope.ALL)
register_layout(source='L1TEMU/EventInfo/reportSummaryMap', destination='Summary/reportSummaryMap', name='Summaries', scope=LayoutScope.ALL)
register_layout(source='PixelPhase1/EventInfo/reportSummaryMap', destination='Summary/reportSummaryMap', name='Summaries', scope=LayoutScope.ALL)
register_layout(source='RPC/EventInfo/reportSummaryMap', destination='Summary/reportSummaryMap', name='Summaries', scope=LayoutScope.ALL)
register_layout(source='SiStrip/EventInfo/reportSummaryMap', destination='Summary/reportSummaryMap', name='Summaries', scope=LayoutScope.ALL)
register_layout(source='Tracking/EventInfo/reportSummaryMap', destination='Summary/reportSummaryMap', name='Summaries', scope=LayoutScope.ALL)
