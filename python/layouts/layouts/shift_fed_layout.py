from layouts.layout_manager import LayoutScope, adapt_and_register
dqmitems={}

def fedlayout(i, p, *rows): i["00 Shift/FED/" + p] = rows

fedlayout(dqmitems, "00 Report Summary Map",
  [{ 'path': "FED/EventInfo/reportSummaryMap",
     'description': 'FED summary for each subdetector'}])

fedlayout(dqmitems, "01 FED Integrity Check",
  [{ 'path': "FED/FEDIntegrity_EvF/FedEntries",
     'description': 'Number of entries vs FED ID'}],
  [{ 'path': "FED/FEDIntegrity_EvF/FedFatal",
     'description': 'Number of fatal errors vs FED ID'}],
  [{ 'path': "FED/FEDIntegrity_EvF/FedNonFatal",
     'description': 'Number of non-fatal errors vs FED ID'}])

adapt_and_register(dqmitems, scope=LayoutScope.ONLINE)
