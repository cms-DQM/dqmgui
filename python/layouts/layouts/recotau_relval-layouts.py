from layouts.layout_manager import LayoutScope, adapt_and_register
dqmitems={}

def recotaulayout(i, p, *rows): i["RecoTauV/Layouts/" + p] = rows

paths = ["DoubleElectron","DoubleMuon","JETHT","QCD","ZEE","ZMM","ZTT"]
for j in paths:
    recotaulayout(dqmitems, j+"/00_Summary",
            [
                {'path':"RecoTauV/miniAODValidation/"+j+"/Summary/summaryPlot",
                'description':"none"},
                {'path':"RecoTauV/miniAODValidation/"+j+"/Summary/summaryPlotDen",
                'description':"none"},
                {'path':"RecoTauV/miniAODValidation/"+j+"/Summary/summaryPlotNum",
                'description':"none"},
            ])
    recotaulayout(dqmitems, j+"/01_TauObjects",
            [
                {'path':"RecoTauV/miniAODValidation/"+j+"/Summary/tau_pt",
                'description':"none",
                'draw':{'xmax':'500'}},
                {'path':"RecoTauV/miniAODValidation/"+j+"/Summary/tau_eta",
                'description':"none"},
                {'path':"RecoTauV/miniAODValidation/"+j+"/Summary/tau_pu",
                'description':"none",
                'draw':{'xmax':'50'}},
            ],[
                {'path':"RecoTauV/miniAODValidation/"+j+"/Summary/tau_phi",
                'description':"none"},
                {'path':"RecoTauV/miniAODValidation/"+j+"/Summary/tau_mass",
                'description':"none",
                'draw':{'xmax':'2.0'}},
            ])
    recotaulayout(dqmitems, j+"/02_DecayModes",
            [
                {'path':"RecoTauV/miniAODValidation/"+j+"/Summary/ntau_vs_dm",
                'description':"none",
                'draw': {"drawopts" : "colz"}},
                {'path':"RecoTauV/miniAODValidation/"+j+"/Summary/dmMigration",
                'description':"none",
                'draw': {"drawopts" : "colz"}},
                {'path':"RecoTauV/miniAODValidation/"+j+"/Summary/tau_decayMode",
                'description':"none"},
                {'path':"RecoTauV/miniAODValidation/"+j+"/Summary/tau_decayModeFinding",
                'description':"none"},
            ],[
                {'path':"RecoTauV/miniAODValidation/"+j+"/Summary/pTOverProng_dm0",
                'description':"none",
                'draw': {"drawopts" : "colz","xmax" : "500"}},
                {'path':"RecoTauV/miniAODValidation/"+j+"/Summary/pTOverProng_dm1",
                'description':"none",
                'draw': {"drawopts" : "colz","xmax" : "500"}},
                {'path':"RecoTauV/miniAODValidation/"+j+"/Summary/pTOverProng_dm10",
                'description':"none",
                'draw': {"drawopts" : "colz","xmax" : "500"}},
                {'path':"RecoTauV/miniAODValidation/"+j+"/Summary/pTOverProng_dm11",
                'description':"none",
                'draw': {"drawopts" : "colz","xmax" : "500"}},
            ])
    recotaulayout(dqmitems, j+"/03_DeepTau2017v2p1Raw",
            [
                {'path':"RecoTauV/miniAODValidation/"+j+"/Summary/tau_byDeepTau2017v2p1VSeraw",
                'description':"none",'draw':{'ytype':'log'}},
                {'path':"RecoTauV/miniAODValidation/"+j+"/Summary/tau_byDeepTau2017v2p1VSjetraw",
                'description':"none",'draw':{'ytype':'log'}},
                {'path':"RecoTauV/miniAODValidation/"+j+"/Summary/tau_byDeepTau2017v2p1VSmuraw",
                'description':"none",'draw':{'ytype':'log'}},
            ])

    if j == "QCD" or j == "ZTT":
        recotaulayout(dqmitems, j+"/04_vsJet",
                [
                    {'path':"RecoTauV/miniAODValidation/"+j+"/vsJet/loose/tau_loosevsJet_pt",
                    'description':"none",
                    'draw':{'xmax':'200'}},
                    {'path':"RecoTauV/miniAODValidation/"+j+"/vsJet/loose/tau_loosevsJet_eta",
                    'description':"none"},
                    {'path':"RecoTauV/miniAODValidation/"+j+"/vsJet/loose/tau_loosevsJet_phi",
                    'description':"none"},
                    {'path':"RecoTauV/miniAODValidation/"+j+"/vsJet/loose/tau_loosevsJet_mass",
                    'description':"none",
                    'draw':{'xmax':'2.0'}},
                    {'path':"RecoTauV/miniAODValidation/"+j+"/vsJet/loose/tau_loosevsJet_pu",
                    'description':"none",
                    'draw':{'xmax':'50'}},
                ],[
                    {'path':"RecoTauV/miniAODValidation/"+j+"/vsJet/medium/tau_mediumvsJet_pt",
                    'description':"none",
                    'draw':{'xmax':'200'}},
                    {'path':"RecoTauV/miniAODValidation/"+j+"/vsJet/medium/tau_mediumvsJet_eta",
                    'description':"none"},
                    {'path':"RecoTauV/miniAODValidation/"+j+"/vsJet/medium/tau_mediumvsJet_phi",
                    'description':"none"},
                    {'path':"RecoTauV/miniAODValidation/"+j+"/vsJet/medium/tau_mediumvsJet_mass",
                    'description':"none",
                    'draw':{'xmax':'2.0'}},
                    {'path':"RecoTauV/miniAODValidation/"+j+"/vsJet/medium/tau_mediumvsJet_pu",
                    'description':"none",
                    'draw':{'xmax':'50'}},
                ],[
                    {'path':"RecoTauV/miniAODValidation/"+j+"/vsJet/tight/tau_tightvsJet_pt",
                    'description':"none",
                    'draw':{'xmax':'200'}},
                    {'path':"RecoTauV/miniAODValidation/"+j+"/vsJet/tight/tau_tightvsJet_eta",
                    'description':"none"},
                    {'path':"RecoTauV/miniAODValidation/"+j+"/vsJet/tight/tau_tightvsJet_phi",
                    'description':"none"},
                    {'path':"RecoTauV/miniAODValidation/"+j+"/vsJet/tight/tau_tightvsJet_mass",
                    'description':"none",
                    'draw':{'xmax':'2.0'}},
                    {'path':"RecoTauV/miniAODValidation/"+j+"/vsJet/tight/tau_tightvsJet_pu",
                    'description':"none",
                    'draw':{'xmax':'50'}},
               ])
    if j == "ZEE" or j == "ZTT":
        recotaulayout(dqmitems, j+"/04_vsElectron",
                [
                    {'path':"RecoTauV/miniAODValidation/"+j+"/vsEle/loose/tau_loosevsEle_pt",
                    'description':"none",
                    'draw':{'xmax':'200'}},
                    {'path':"RecoTauV/miniAODValidation/"+j+"/vsEle/loose/tau_loosevsEle_eta",
                    'description':"none"},
                    {'path':"RecoTauV/miniAODValidation/"+j+"/vsEle/loose/tau_loosevsEle_phi",
                    'description':"none"},
                    {'path':"RecoTauV/miniAODValidation/"+j+"/vsEle/loose/tau_loosevsEle_mass",
                    'description':"none",
                    'draw':{'xmax':'2.0'}},
                    {'path':"RecoTauV/miniAODValidation/"+j+"/vsEle/loose/tau_loosevsEle_pu",
                    'description':"none",
                    'draw':{'xmax':'50'}},
                ],[
                    {'path':"RecoTauV/miniAODValidation/"+j+"/vsEle/medium/tau_mediumvsEle_pt",
                    'description':"none",
                    'draw':{'xmax':'200'}},
                    {'path':"RecoTauV/miniAODValidation/"+j+"/vsEle/medium/tau_mediumvsEle_eta",
                    'description':"none"},
                    {'path':"RecoTauV/miniAODValidation/"+j+"/vsEle/medium/tau_mediumvsEle_phi",
                    'description':"none"},
                    {'path':"RecoTauV/miniAODValidation/"+j+"/vsEle/medium/tau_mediumvsEle_mass",
                    'description':"none",
                    'draw':{'xmax':'2.0'}},
                    {'path':"RecoTauV/miniAODValidation/"+j+"/vsEle/medium/tau_mediumvsEle_pu",
                    'description':"none",
                    'draw':{'xmax':'50'}},
                ],[
                    {'path':"RecoTauV/miniAODValidation/"+j+"/vsEle/tight/tau_tightvsEle_pt",
                    'description':"none",
                    'draw':{'xmax':'200'}},
                    {'path':"RecoTauV/miniAODValidation/"+j+"/vsEle/tight/tau_tightvsEle_eta",
                    'description':"none"},
                    {'path':"RecoTauV/miniAODValidation/"+j+"/vsEle/tight/tau_tightvsEle_phi",
                    'description':"none"},
                    {'path':"RecoTauV/miniAODValidation/"+j+"/vsEle/tight/tau_tightvsEle_mass",
                    'description':"none",
                    'draw':{'xmax':'2.0'}},
                    {'path':"RecoTauV/miniAODValidation/"+j+"/vsEle/tight/tau_tightvsEle_pu",
                    'description':"none",
                    'draw':{'xmax':'50'}},
               ])
    if j == "ZMM" or j == "ZTT":
        recotaulayout(dqmitems, j+"/04_vsMuon",
                [
                    {'path':"RecoTauV/miniAODValidation/"+j+"/vsMuo/loose/tau_loosevsMuo_pt",
                    'description':"none",
                    'draw':{'xmax':'200'}},
                    {'path':"RecoTauV/miniAODValidation/"+j+"/vsMuo/loose/tau_loosevsMuo_eta",
                    'description':"none"},
                    {'path':"RecoTauV/miniAODValidation/"+j+"/vsMuo/loose/tau_loosevsMuo_phi",
                    'description':"none"},
                    {'path':"RecoTauV/miniAODValidation/"+j+"/vsMuo/loose/tau_loosevsMuo_mass",
                    'description':"none",
                    'draw':{'xmax':'2.0'}},
                    {'path':"RecoTauV/miniAODValidation/"+j+"/vsMuo/loose/tau_loosevsMuo_pu",
                    'description':"none",
                    'draw':{'xmax':'50'}},
                ],[
                    {'path':"RecoTauV/miniAODValidation/"+j+"/vsMuo/medium/tau_mediumvsMuo_pt",
                    'description':"none",
                    'draw':{'xmax':'200'}},
                    {'path':"RecoTauV/miniAODValidation/"+j+"/vsMuo/medium/tau_mediumvsMuo_eta",
                    'description':"none"},
                    {'path':"RecoTauV/miniAODValidation/"+j+"/vsMuo/medium/tau_mediumvsMuo_phi",
                    'description':"none"},
                    {'path':"RecoTauV/miniAODValidation/"+j+"/vsMuo/medium/tau_mediumvsMuo_mass",
                    'description':"none",
                    'draw':{'xmax':'2.0'}},
                    {'path':"RecoTauV/miniAODValidation/"+j+"/vsMuo/medium/tau_mediumvsMuo_pu",
                    'description':"none",
                    'draw':{'xmax':'50'}},
                ],[
                    {'path':"RecoTauV/miniAODValidation/"+j+"/vsMuo/tight/tau_tightvsMuo_pt",
                    'description':"none",
                    'draw':{'xmax':'200'}},
                    {'path':"RecoTauV/miniAODValidation/"+j+"/vsMuo/tight/tau_tightvsMuo_eta",
                    'description':"none"},
                    {'path':"RecoTauV/miniAODValidation/"+j+"/vsMuo/tight/tau_tightvsMuo_phi",
                    'description':"none"},
                    {'path':"RecoTauV/miniAODValidation/"+j+"/vsMuo/tight/tau_tightvsMuo_mass",
                    'description':"none",
                    'draw':{'xmax':'2.0'}},
                    {'path':"RecoTauV/miniAODValidation/"+j+"/vsMuo/tight/tau_tightvsMuo_pu",
                    'description':"none",
                    'draw':{'xmax':'50'}},
               ])

adapt_and_register(dqmitems, scope=LayoutScope.RELVAL)
