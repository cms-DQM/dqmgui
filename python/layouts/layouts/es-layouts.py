from layouts.layout_manager import LayoutScope, adapt_and_register
dqmitems={}

def ecalpreshowerlayout(i, p, *rows): i["EcalPreshower/Layouts/" + p] = rows
def ecalpreshowershiftlayout(i, p, *rows): i["EcalPreshower/Layouts/00 Shift/" + p] = rows
def ecalpreshowerintegritylayout(i, p, *rows): i["EcalPreshower/Layouts/01 Preshower Shift/01 Integrity/" + p] = rows
def ecalpreshoweroccupancylayout(i, p, *rows): i["EcalPreshower/Layouts/01 Preshower Shift/02 Occupancy/" + p] = rows
def ecalpreshowerintegrityexpertlayout(i, p, *rows): i["EcalPreshower/Layouts/01 Preshower Expert/01 Integrity/" + p] = rows
def ecalpreshoweroccupancyexpertlayout(i, p, *rows): i["EcalPreshower/Layouts/01 Preshower Expert/02 Occupancy/" + p] = rows

# Quick Collections
ecalpreshowerlayout(dqmitems, "01-IntegritySummary-EcalPreshower",
  [{ 'path': "EcalPreshower/ESIntegrityClient/ES Integrity Summary 1 Z 1 P 1", 'description': "ES+ Front Integrity Summary 1 - <a href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower</a> <br/> <table width=100%> <tr><td>1 - not used<td>2 - fiber problem<td>3 - OK<td>4 - FED problem<td><tr>5 - KCHIP problem<td>6 - ES counters are not synced with GT counters (see ESRawDataTask) <td> 7 - more than one problem<td>8 - SLink CRC error</table> " },
   { 'path': "EcalPreshower/ESIntegrityClient/ES Integrity Summary 1 Z -1 P 1", 'description': "ES- Front Integrity Summary 1 - <a href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower</a> <br/> <table width=100%> <tr><td>1 - not used<td>2 - fiber problem<td>3 - OK<td>4 - FED problem<td><tr>5 - KCHIP problem<td>6 - ES counters are not synced with GT counters (see ESRawDataTask) <td> 7 - more than one problem<td>8 - SLink CRC error</table> " }],
  [{ 'path': "EcalPreshower/ESIntegrityClient/ES Integrity Summary 1 Z 1 P 2", 'description': "ES+ Rear Integrity Summary 1 - <a href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower</a> <br/> <table width=100%> <tr><td>1 - not used<td>2 - fiber problem<td>3 - OK<td>4 - FED problem<td><tr>5 - KCHIP problem<td>6 - ES counters are not synced with GT counters (see ESRawDataTask) <td> 7 - more than one problem<td>8 - SLink CRC error</table> " },
   { 'path': "EcalPreshower/ESIntegrityClient/ES Integrity Summary 1 Z -1 P 2", 'description': "ES- Rear Integrity Summary 1 - <a href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower</a> <br/> <table width=100%> <tr><td>1 - not used<td>2 - fiber problem<td>3 - OK<td>4 - FED problem<td><tr>5 - KCHIP problem<td>6 - ES counters are not synced with GT counters (see ESRawDataTask) <td> 7 - more than one problem<td>8 - SLink CRC error</table> " }])

ecalpreshowerlayout(dqmitems, "02-GoodRechitOccupancySummary-EcalPreshower",
  [{ 'path': "EcalPreshower/ESOccupancyTask/ES Occupancy with selected hits Z 1 P 1", 'description': "ES Occupancy for ES+F. The colors in each segment represent the average number of strips per sensor per event that have hits with a pulse shape consistent with a real signal. A good reference run is 251643 for collision and 253299 for cosmic. The detailed description can be found in <a href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower</a> " },
   { 'path': "EcalPreshower/ESOccupancyTask/ES Occupancy with selected hits Z -1 P 1", 'description': "ES Occupancy for ES-F. The colors in each segment represent the average number of strips per sensor per event that have hits with a pulse shape consistent with a real signal. A good reference run is 251643 for collision and 253299 for cosmic. The detailed description can be found in <a href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower</a> " }], 
  [{ 'path': "EcalPreshower/ESOccupancyTask/ES Occupancy with selected hits Z 1 P 2", 'description': "ES Occupancy for ES+R. The colors in each segment represent the average number of strips per sensor per event that have hits with a pulse shape consistent with a real signal. A good reference run is 251643 for collision and 253299 for cosmic. The detailed description can be found in <a href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower</a> " }, 
   { 'path': "EcalPreshower/ESOccupancyTask/ES Occupancy with selected hits Z -1 P 2", 'description': "ES Occupancy for ES-R. The colors in each segment represent the average number of strips per sensor per event that have hits with a pulse shape consistent with a real signal. A good reference run is 251643 for collision and 253299 for cosmic. The detailed description can be found in <a href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower</a> " }]) 

ecalpreshowerlayout(dqmitems, "03-GoodRechitEnergySummary-EcalPreshower",
  [{ 'path': "EcalPreshower/ESOccupancyTask/ES RecHit Energy with selected hits Z 1 P 1", 'description': "Energy spectrum with selected hits with a pulse shape consistent with a real signal for ES+F. A good reference run is 251643 for collision and 253299 for cosmic. The detailed description can be found in <a href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower</a> " },
   { 'path': "EcalPreshower/ESOccupancyTask/ES RecHit Energy with selected hits Z -1 P 1", 'description': "Energy spectrum with selected hits with a pulse shape consistent with a real signal for ES-F. A good reference run is 251643 for collision and 253299 for cosmic. The detailed description can be found in <a href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower</a> " }],
  [{ 'path': "EcalPreshower/ESOccupancyTask/ES RecHit Energy with selected hits Z 1 P 2", 'description': "Energy spectrum with selected hits with a pulse shape consistent with a real signal for ES+R. A good reference run is 251643 for collision and 253299 for cosmic. The detailed description can be found in <a href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower</a> " },
   { 'path': "EcalPreshower/ESOccupancyTask/ES RecHit Energy with selected hits Z -1 P 2", 'description': "Energy spectrum with selected hits with a pulse shape consistent with a real signal for ES-R. A good reference run is 251643 for collision and 253299 for cosmic. The detailed description can be found in <a href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower</a> " }])

ecalpreshowerlayout(dqmitems, "04-ESTimingTaskSummary-EcalPreshower",
  [{ 'path': "EcalPreshower/ESTimingTask/ES Timing Z 1 P 1", 'description': "ES Timing Z 1 P 1 - <a href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower</a> " },
   { 'path': "EcalPreshower/ESTimingTask/ES Timing Z -1 P 1", 'description': "ES Timing Z -1 P 1 - <a href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower</a> " }],
  [{ 'path': "EcalPreshower/ESTimingTask/ES Timing Z 1 P 2", 'description': "ES Timing Z 1 P 2 - <a href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower</a> " },
   { 'path': "EcalPreshower/ESTimingTask/ES Timing Z -1 P 2", 'description': "ES Timing Z -1 P 2 - <a href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower</a> " }])

ecalpreshowerlayout(dqmitems, "05-ESGain-EcalPreshower",
  [{ 'path': "EcalPreshower/ESIntegrityTask/ES Gain used for data taking", 'description': "ES Gain configuration in the front-end electronics"}])

ecalpreshowerlayout(dqmitems, "06-ES-Fiber-Error-Code",
  [{ 'path': "EcalPreshower/ESIntegrityTask/ES Fiber Error Code", 'description': "Error codes for each ES integrity error; the number of entries is the number of events with an error."}])

# Layouts
ecalpreshowershiftlayout(dqmitems, "01-IntegritySummary-EcalPreshower",
  [{ 'path': "EcalPreshower/ESIntegrityClient/ES Integrity Summary 1 Z 1 P 1", 'description': "ES+ Front Integrity Summary 1 - <a href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower</a> <br/> <table width=100%> <tr><td>1 - not used<td>2 - fiber problem<td>3 - OK<td>4 - FED problem<td><tr>5 - KCHIP problem<td>6 - ES counters are not synced with GT counters (see ESRawDataTask) <td> 7 - more than one problem<td>8 - SLink CRC error</table> " },
   { 'path': "EcalPreshower/ESIntegrityClient/ES Integrity Summary 1 Z -1 P 1", 'description': "ES- Front Integrity Summary 1 - <a href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower</a> <br/> <table width=100%> <tr><td>1 - not used<td>2 - fiber problem<td>3 - OK<td>4 - FED problem<td><tr>5 - KCHIP problem<td>6 - ES counters are not synced with GT counters (see ESRawDataTask) <td> 7 - more than one problem<td>8 - SLink CRC error</table> " }],
  [{ 'path': "EcalPreshower/ESIntegrityClient/ES Integrity Summary 1 Z 1 P 2", 'description': "ES+ Rear Integrity Summary 1 - <a href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower</a> <br/> <table width=100%> <tr><td>1 - not used<td>2 - fiber problem<td>3 - OK<td>4 - FED problem<td><tr>5 - KCHIP problem<td>6 - ES counters are not synced with GT counters (see ESRawDataTask) <td> 7 - more than one problem<td>8 - SLink CRC error</table> " },
   { 'path': "EcalPreshower/ESIntegrityClient/ES Integrity Summary 1 Z -1 P 2", 'description': "ES- Rear Integrity Summary 1 - <a href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower</a> <br/> <table width=100%> <tr><td>1 - not used<td>2 - fiber problem<td>3 - OK<td>4 - FED problem<td><tr>5 - KCHIP problem<td>6 - ES counters are not synced with GT counters (see ESRawDataTask) <td> 7 - more than one problem<td>8 - SLink CRC error</table> " }])

ecalpreshowershiftlayout(dqmitems, "02-GoodRechitOccupancySummary-EcalPreshower",
  [{ 'path': "EcalPreshower/ESOccupancyTask/ES Occupancy with selected hits Z 1 P 1", 'description': "ES Occupancy for ES+F. The colors in each segment represent the average number of strips per sensor per event that have hits with a pulse shape consistent with a real signal. A good reference run is 251643 for collision and 253299 for cosmic. The detailed description can be found in <a href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower</a> " },
   { 'path': "EcalPreshower/ESOccupancyTask/ES Occupancy with selected hits Z -1 P 1", 'description': "ES Occupancy for ES-F. The colors in each segment represent the average number of strips per sensor per event that have hits with a pulse shape consistent with a real signal. A good reference run is 251643 for collision and 253299 for cosmic. The detailed description can be found in <a href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower</a> " }], 
  [{ 'path': "EcalPreshower/ESOccupancyTask/ES Occupancy with selected hits Z 1 P 2", 'description': "ES Occupancy for ES+R. The colors in each segment represent the average number of strips per sensor per event that have hits with a pulse shape consistent with a real signal. A good reference run is 251643 for collision and 253299 for cosmic. The detailed description can be found in <a href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower</a> " }, 
   { 'path': "EcalPreshower/ESOccupancyTask/ES Occupancy with selected hits Z -1 P 2", 'description': "ES Occupancy for ES-R. The colors in each segment represent the average number of strips per sensor per event that have hits with a pulse shape consistent with a real signal. A good reference run is 251643 for collision and 253299 for cosmic. The detailed description can be found in <a href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower</a> " }]) 

ecalpreshowershiftlayout(dqmitems, "03-GoodRechitEnergySummary-EcalPreshower",
  [{ 'path': "EcalPreshower/ESOccupancyTask/ES RecHit Energy with selected hits Z 1 P 1", 'description': "Energy spectrum with selected hits with a pulse shape consistent with a real signal for ES+F. A good reference run is 251643 for collision and 253299 for cosmic. The detailed description can be found in <a href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower</a> " },
   { 'path': "EcalPreshower/ESOccupancyTask/ES RecHit Energy with selected hits Z -1 P 1", 'description': "Energy spectrum with selected hits with a pulse shape consistent with a real signal for ES-F. A good reference run is 251643 for collision and 253299 for cosmic. The detailed description can be found in <a href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower</a> " }],
  [{ 'path': "EcalPreshower/ESOccupancyTask/ES RecHit Energy with selected hits Z 1 P 2", 'description': "Energy spectrum with selected hits with a pulse shape consistent with a real signal for ES+R. A good reference run is 251643 for collision and 253299 for cosmic. The detailed description can be found in <a href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower</a> " },
   { 'path': "EcalPreshower/ESOccupancyTask/ES RecHit Energy with selected hits Z -1 P 2", 'description': "Energy spectrum with selected hits with a pulse shape consistent with a real signal for ES-R. A good reference run is 251643 for collision and 253299 for cosmic. The detailed description can be found in <a href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower</a> " }])

ecalpreshowershiftlayout(dqmitems, "04-ESTimingTaskSummary-EcalPreshower",
  [{ 'path': "EcalPreshower/ESTimingTask/ES Timing Z 1 P 1", 'description': "ES Timing Z 1 P 1 - <a href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower</a> " },
   { 'path': "EcalPreshower/ESTimingTask/ES Timing Z -1 P 1", 'description': "ES Timing Z -1 P 1 - <a href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower</a> " }],
  [{ 'path': "EcalPreshower/ESTimingTask/ES Timing Z 1 P 2", 'description': "ES Timing Z 1 P 2 - <a href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower</a> " },
   { 'path': "EcalPreshower/ESTimingTask/ES Timing Z -1 P 2", 'description': "ES Timing Z -1 P 2 - <a href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower</a> " }])

ecalpreshowershiftlayout(dqmitems, "05-ESGain-EcalPreshower",
  [{ 'path': "EcalPreshower/ESIntegrityTask/ES Gain used for data taking", 'description': "ES Gain configuration in the front-end electronics"}])

ecalpreshowershiftlayout(dqmitems, "06-ES-Fiber-Error-Code",
  [{ 'path': "EcalPreshower/ESIntegrityTask/ES Fiber Error Code", 'description': "Error codes for each ES integrity error; the number of entries is the number of events with an error."}])

ecalpreshowerintegritylayout(dqmitems, "01 Integrity Summary 1 Z 1 P 1",
   [{'path': "EcalPreshower/ESIntegrityClient/ES Integrity Summary 1 Z 1 P 1", 'description': "ES+ Front Integrity Summary 1 - <a href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower</a> <br/> <table width=100%> <tr><td>1 - not used<td>2 - fiber problem<td>3 - OK<td>4 - FED problem<td><tr>5 - KCHIP problem<td>6 - ES counters are not synced with GT counters (see ESRawDataTask) <td> 7 - more than one problem<td>8 - SLink CRC error</table> " }])
ecalpreshowerintegritylayout(dqmitems, "02 Integrity Summary 1 Z -1 P 1",
   [{'path': "EcalPreshower/ESIntegrityClient/ES Integrity Summary 1 Z -1 P 1", 'description': "ES- Front Integrity Summary 1 - <a href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower</a> <br/> <table width=100%> <tr><td>1 - not used<td>2 - fiber problem<td>3 - OK<td>4 - FED problem<td><tr>5 - KCHIP problem<td>6 - ES counters are not synced with GT counters (see ESRawDataTask) <td> 7 - more than one problem<td>8 - SLink CRC error</table> " }])
ecalpreshowerintegritylayout(dqmitems, "03 Integrity Summary 1 Z 1 P 2",
   [{'path': "EcalPreshower/ESIntegrityClient/ES Integrity Summary 1 Z 1 P 2", 'description': "ES+ Rear Integrity Summary 1 - <a href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower</a> <br/> <table width=100%> <tr><td>1 - not used<td>2 - fiber problem<td>3 - OK<td>4 - FED problem<td><tr>5 - KCHIP problem<td>6 - ES counters are not synced with GT counters (see ESRawDataTask) <td> 7 - more than one problem<td>8 - SLink CRC error</table> " }])
ecalpreshowerintegritylayout(dqmitems, "04 Integrity Summary 1 Z -1 P 2",
   [{'path': "EcalPreshower/ESIntegrityClient/ES Integrity Summary 1 Z -1 P 2", 'description': "ES- Rear Integrity Summary 1 - <a href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower</a> <br/> <table width=100%> <tr><td>1 - not used<td>2 - fiber problem<td>3 - OK<td>4 - FED problem<td><tr>5 - KCHIP problem<td>6 - ES counters are not synced with GT counters (see ESRawDataTask) <td> 7 - more than one problem<td>8 - SLink CRC error</table> " }])

ecalpreshoweroccupancylayout(dqmitems, "01 ES RecHit 2D Occupancy Z 1 P 1",
  [{ 'path': "EcalPreshower/ESOccupancyTask/ES RecHit 2D Occupancy Z 1 P 1", 'description': "ES RecHit 2D Occupancy Z 1 P 1 - <a href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower</a> " }])
ecalpreshoweroccupancylayout(dqmitems, "02 ES RecHit 2D Occupancy Z -1 P 1",
  [{ 'path': "EcalPreshower/ESOccupancyTask/ES RecHit 2D Occupancy Z -1 P 1", 'description': "ES RecHit 2D Occupancy Z -1 P 1 - <a href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower</a> " }])
ecalpreshoweroccupancylayout(dqmitems, "03 ES RecHit 2D Occupancy Z 1 P 2",
  [{ 'path': "EcalPreshower/ESOccupancyTask/ES RecHit 2D Occupancy Z 1 P 2", 'description': "ES RecHit 2D Occupancy Z 1 P 2 - <a href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower</a> " }])
ecalpreshoweroccupancylayout(dqmitems, "04 ES RecHit 2D Occupancy Z -1 P 2",
  [{ 'path': "EcalPreshower/ESOccupancyTask/ES RecHit 2D Occupancy Z -1 P 2", 'description': "ES RecHit 2D Occupancy Z -1 P 2 - <a href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower</a> " }])
ecalpreshoweroccupancylayout(dqmitems, "05 ES RecHit Energy Z 1 P 1",
  [{ 'path': "EcalPreshower/ESOccupancyTask/ES RecHit Energy Z 1 P 1", 'description': "ES RecHit Energy Z 1 P 1 - <a href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower</a> " }])
ecalpreshoweroccupancylayout(dqmitems, "06 ES RecHit Energy Z -1 P 1",
  [{ 'path': "EcalPreshower/ESOccupancyTask/ES RecHit Energy Z -1 P 1", 'description': "ES RecHit Energy Z -1 P 1 - <a href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower</a> " }])
ecalpreshoweroccupancylayout(dqmitems, "07 ES RecHit Energy Z 1 P 2",
  [{ 'path': "EcalPreshower/ESOccupancyTask/ES RecHit Energy Z 1 P 2", 'description': "ES RecHit Energy Z 1 P 2 - <a href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower</a> " }])
ecalpreshoweroccupancylayout(dqmitems, "08 ES RecHit Energy Z -1 P 2",
  [{ 'path': "EcalPreshower/ESOccupancyTask/ES RecHit Energy Z -1 P 2", 'description': "ES RecHit Energy Z -1 P 2 - <a href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower</a> " }])

ecalpreshowerintegrityexpertlayout(dqmitems, "01 Integrity Summary 1 Z 1 P 1",
   [{'path': "EcalPreshower/ESIntegrityClient/ES Integrity Summary 1 Z 1 P 1", 'description': "ES+ Front Integrity Summary 1 - <a href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower</a> <br/> <table width=100%> <tr><td>1 - not used<td>2 - fiber problem<td>3 - OK<td>4 - FED problem<td><tr>5 - KCHIP problem<td>6 - ES counters are not synced with GT counters (see ESRawDataTask) <td> 7 - more than one problem<td>8 - SLink CRC error</table> " }])
ecalpreshowerintegrityexpertlayout(dqmitems, "02 Integrity Summary 1 Z -1 P 1",
   [{'path': "EcalPreshower/ESIntegrityClient/ES Integrity Summary 1 Z -1 P 1", 'description': "ES- Front Integrity Summary 1 - <a href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower</a> <br/> <table width=100%> <tr><td>1 - not used<td>2 - fiber problem<td>3 - OK<td>4 - FED problem<td><tr>5 - KCHIP problem<td>6 - ES counters are not synced with GT counters (see ESRawDataTask) <td> 7 - more than one problem<td>8 - SLink CRC error</table> " }])
ecalpreshowerintegrityexpertlayout(dqmitems, "03 Integrity Summary 1 Z 1 P 2",
   [{'path': "EcalPreshower/ESIntegrityClient/ES Integrity Summary 1 Z 1 P 2", 'description': "ES+ Rear Integrity Summary 1 - <a href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower</a> <br/> <table width=100%> <tr><td>1 - not used<td>2 - fiber problem<td>3 - OK<td>4 - FED problem<td><tr>5 - KCHIP problem<td>6 - ES counters are not synced with GT counters (see ESRawDataTask) <td> 7 - more than one problem<td>8 - SLink CRC error</table> " }])
ecalpreshowerintegrityexpertlayout(dqmitems, "04 Integrity Summary 1 Z -1 P 2",
   [{'path': "EcalPreshower/ESIntegrityClient/ES Integrity Summary 1 Z -1 P 2", 'description': "ES- Rear Integrity Summary 1 - <a href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower</a> <br/> <table width=100%> <tr><td>1 - not used<td>2 - fiber problem<td>3 - OK<td>4 - FED problem<td><tr>5 - KCHIP problem<td>6 - ES counters are not synced with GT counters (see ESRawDataTask) <td> 7 - more than one problem<td>8 - SLink CRC error</table> " }])

ecalpreshoweroccupancyexpertlayout(dqmitems, "01 ES RecHit 2D Occupancy Z 1 P 1",
  [{ 'path': "EcalPreshower/ESOccupancyTask/ES RecHit 2D Occupancy Z 1 P 1", 'description': "ES RecHit 2D Occupancy Z 1 P 1 - <a href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower</a> " }])
ecalpreshoweroccupancyexpertlayout(dqmitems, "02 ES RecHit 2D Occupancy Z -1 P 1",
  [{ 'path': "EcalPreshower/ESOccupancyTask/ES RecHit 2D Occupancy Z -1 P 1", 'description': "ES RecHit 2D Occupancy Z -1 P 1 - <a href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower</a> " }])
ecalpreshoweroccupancyexpertlayout(dqmitems, "03 ES RecHit 2D Occupancy Z 1 P 2",
  [{ 'path': "EcalPreshower/ESOccupancyTask/ES RecHit 2D Occupancy Z 1 P 2", 'description': "ES RecHit 2D Occupancy Z 1 P 2 - <a href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower</a> " }])
ecalpreshoweroccupancyexpertlayout(dqmitems, "04 ES RecHit 2D Occupancy Z -1 P 2",
  [{ 'path': "EcalPreshower/ESOccupancyTask/ES RecHit 2D Occupancy Z -1 P 2", 'description': "ES RecHit 2D Occupancy Z -1 P 2 - <a href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower</a> " }])
ecalpreshoweroccupancyexpertlayout(dqmitems, "05 ES RecHit Energy Z 1 P 1",
  [{ 'path': "EcalPreshower/ESOccupancyTask/ES RecHit Energy Z 1 P 1", 'description': "ES RecHit Energy Z 1 P 1 - <a href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower</a> " }])
ecalpreshoweroccupancyexpertlayout(dqmitems, "06 ES RecHit Energy Z -1 P 1",
  [{ 'path': "EcalPreshower/ESOccupancyTask/ES RecHit Energy Z -1 P 1", 'description': "ES RecHit Energy Z -1 P 1 - <a href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower</a> " }])
ecalpreshoweroccupancyexpertlayout(dqmitems, "07 ES RecHit Energy Z 1 P 2",
  [{ 'path': "EcalPreshower/ESOccupancyTask/ES RecHit Energy Z 1 P 2", 'description': "ES RecHit Energy Z 1 P 2 - <a href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower</a> " }])
ecalpreshoweroccupancyexpertlayout(dqmitems, "08 ES RecHit Energy Z -1 P 2",
  [{ 'path': "EcalPreshower/ESOccupancyTask/ES RecHit Energy Z -1 P 2", 'description': "ES RecHit Energy Z -1 P 2 - <a href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower</a> " }])

adapt_and_register(dqmitems, scope=LayoutScope.ONLINE)
