from layouts.layout_manager import LayoutScope, adapt_and_register
dqmitems={}

def shiftpflowlayout(i, p, *rows): i["00 Shift/PFlow/" + p] = rows

def shiftpflowjetreslayout(i, p , *rows): i["00 Shift/PFlow/PTJetRes/" + p] = rows

shiftpflowjetreslayout(dqmitems, "01 - Jet Pt Resolution - Barrel",
 [{ 'path': "ParticleFlow/ElectronValidation/JetPtRes/average_BRdelta_et_Over_et_VS_et_",
    'description': "Average value of Pt resolution for jets in Barrel", 'draw': { 'withref': "no" }},
  { 'path': "ParticleFlow/ElectronValidation/JetPtRes/rms_BRdelta_et_Over_et_VS_et_",
    'description': "RMS value of Pt resolution for jets in Barrel", 'draw': { 'withref': "no" }}],
  [{ 'path': "ParticleFlow/ElectronValidation/JetPtRes/mean_BRdelta_et_Over_et_VS_et_",
    'description': "Mean value of Pt resolution for jets in Barrel", 'draw': { 'withref': "no" }},
  { 'path': "ParticleFlow/ElectronValidation/JetPtRes/sigma_BRdelta_et_Over_et_VS_et_",
    'description': "Sigma value of Pt resolution for jets in Barrel", 'draw': { 'withref': "no" }}
  ]),
shiftpflowjetreslayout(dqmitems, "02 - Jet Pt Resolution - Endcap",
 [{ 'path': "ParticleFlow/ElectronValidation/JetPtRes/average_ERdelta_et_Over_et_VS_et_",
    'description': "Average value of Pt resolution for jets in Endcap", 'draw': { 'withref': "no" }},
  { 'path': "ParticleFlow/ElectronValidation/JetPtRes/rms_ERdelta_et_Over_et_VS_et_",
    'description': "RMS value of Pt resolution for jets in Endcap", 'draw': { 'withref': "no" }}],
  [{ 'path': "ParticleFlow/ElectronValidation/JetPtRes/mean_ERdelta_et_Over_et_VS_et_",
    'description': "Mean value of Pt resolution for jets in Endcap", 'draw': { 'withref': "no" }},
  { 'path': "ParticleFlow/ElectronValidation/JetPtRes/sigma_ERdelta_et_Over_et_VS_et_",
    'description': "Sigma value of Pt resolution for jets in Endcap", 'draw': { 'withref': "no" }}
  ])
shiftpflowjetreslayout(dqmitems, "03 - Jet Pt Resolution distribution - Barrel",
 [{ 'path': "ParticleFlow/ElectronValidation/JetPtRes/BRPt20_40",
    'description': "Pt resolution for jets in Barrel", 'draw': { 'withref': "no" }},
  { 'path': "ParticleFlow/ElectronValidation/JetPtRes/BRPt40_60",
    'description': "Pt resolution for jets in Barrel", 'draw': { 'withref': "no" }},
  { 'path': "ParticleFlow/ElectronValidation/JetPtRes/BRPt60_80",
    'description': "Pt resolution for jets in Barrel", 'draw': { 'withref': "no" }},
  { 'path': "ParticleFlow/ElectronValidation/JetPtRes/BRPt80_100",
    'description': "Pt resolution for jets in Barrel", 'draw': { 'withref': "no" }}],
  [{ 'path': "ParticleFlow/ElectronValidation/JetPtRes/BRPt100_150",
    'description': "Pt resolution for jets in Barrel", 'draw': { 'withref': "no" }},
  { 'path': "ParticleFlow/ElectronValidation/JetPtRes/BRPt150_200",
    'description': "Pt resolution for jets in Barrel", 'draw': { 'withref': "no" }},
  { 'path': "ParticleFlow/ElectronValidation/JetPtRes/BRPt200_250",
    'description': "Pt resolution for jets in Barrel", 'draw': { 'withref': "no" }},
  { 'path': "ParticleFlow/ElectronValidation/JetPtRes/BRPt250_300",
    'description': "Pt resolution for jets in Barrel", 'draw': { 'withref': "no" }}],
  [{ 'path': "ParticleFlow/ElectronValidation/JetPtRes/BRPt300_400",
    'description': "Pt resolution for jets in Barrel", 'draw': { 'withref': "no" }},
  { 'path': "ParticleFlow/ElectronValidation/JetPtRes/BRPt400_500",
    'description': "Pt resolution for jets in Barrel", 'draw': { 'withref': "no" }},
  { 'path': "ParticleFlow/ElectronValidation/JetPtRes/BRPt500_750",
    'description': "Pt resolution for jets in Barrel", 'draw': { 'withref': "no" }}
  ])
shiftpflowjetreslayout(dqmitems, "04 - Jet Pt Resolution distribution - Endcap",
 [{ 'path': "ParticleFlow/ElectronValidation/JetPtRes/ERPt20_40",
    'description': "Pt resolution for jets in Endcap", 'draw': { 'withref': "no" }},
  { 'path': "ParticleFlow/ElectronValidation/JetPtRes/ERPt40_60",
    'description': "Pt resolution for jets in Endcap", 'draw': { 'withref': "no" }},
  { 'path': "ParticleFlow/ElectronValidation/JetPtRes/ERPt60_80",
    'description': "Pt resolution for jets in Endcap", 'draw': { 'withref': "no" }},
  { 'path': "ParticleFlow/ElectronValidation/JetPtRes/ERPt80_100",
    'description': "Pt resolution for jets in Endcap", 'draw': { 'withref': "no" }}],
  [{ 'path': "ParticleFlow/ElectronValidation/JetPtRes/ERPt100_150",
    'description': "Pt resolution for jets in Endcap", 'draw': { 'withref': "no" }},
  { 'path': "ParticleFlow/ElectronValidation/JetPtRes/ERPt150_200",
    'description': "Pt resolution for jets in Endcap", 'draw': { 'withref': "no" }},
  { 'path': "ParticleFlow/ElectronValidation/JetPtRes/ERPt200_250",
    'description': "Pt resolution for jets in Endcap", 'draw': { 'withref': "no" }},
  { 'path': "ParticleFlow/ElectronValidation/JetPtRes/ERPt250_300",
    'description': "Pt resolution for jets in Endcap", 'draw': { 'withref': "no" }}],
  [{ 'path': "ParticleFlow/ElectronValidation/JetPtRes/ERPt300_400",
    'description': "Pt resolution for jets in Endcap", 'draw': { 'withref': "no" }},
  { 'path': "ParticleFlow/ElectronValidation/JetPtRes/ERPt400_500",
    'description': "Pt resolution for jets in Endcap", 'draw': { 'withref': "no" }},
  { 'path': "ParticleFlow/ElectronValidation/JetPtRes/ERPt500_750",
    'description': "Pt resolution for jets in Endcap", 'draw': { 'withref': "no" }}
  ])

adapt_and_register(dqmitems, scope=LayoutScope.OFFLINE)
