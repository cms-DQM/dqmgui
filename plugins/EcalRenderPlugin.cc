// $Id: EcalRenderPlugin.cc,v 1.3 2012/11/16 10:01:00 yiiyama Exp $

/*
  \file EcalRenderPlugin
  \brief Display Plugin for Quality Histograms
  \author M.Sun
  \author Y. Iiyama
  \author G. Della Ricca
  \author B. Gobbo
  \version $Revision: 1.3 $
  \date $Date: 2012/11/16 10:01:00 $
*/

#include "../src/DQMRenderPlugin.h"
#include "utils.h"

#include <iostream>

#include "TObjArray.h"
#include "TString.h"
#include "TPRegexp.h"
#include "TH1F.h"
#include "TH1D.h"
#include "TH2F.h"
#include "TH2D.h"
#include "TH2C.h"
#include "TProfile.h"
#include "TProfile2D.h"
#include "TStyle.h"
#include "TCanvas.h"
#include "TGaxis.h"
#include "TColor.h"
#include "TPaletteAxis.h"
#include "TAxis.h"
#include "TROOT.h"

#include <vector>

class EcalRenderPlugin : public DQMRenderPlugin {
private:
  TH2C* ebTTLabels;
  TH2C* ebSMLabels;
  TH2C* ebSMShiftedLabels;

  TH2C* eeTTLabels;
  TH2C* eemTCCLabels;
  TH2C* eepTCCLabels;
  TH2C* eemSCLabels;
  TH2C* eepSCLabels;
  TH2C* eemSMLabels;
  TH2C* eepSMLabels;
  TH2C* eeSMLabels;
  TH2C* eePNLabels;

  TH2C* ecalSMLabels;

  TH2C* MEMLabels;

  TLine* eeDCCSectors[330];
  TLine* eemTCCSectors[707];
  TLine* eepTCCSectors[707];
  TLine* eemTTSectors[2413];
  TLine* eepTTSectors[2413];
  TLine* ecalSubdetPartitions[3];
  TLine* ecalRCTSectors[36];

  TObjArray* eeDCCArray[10];
  TObjArray* eemTCCArray[10];
  TObjArray* eepTCCArray[10];
  TObjArray* eemTTArray[9];
  TObjArray* eepTTArray[9];

  std::vector<int> qualityPalette;
  std::vector<int> tpTimingPalette;
  std::vector<int> accumPalette;
  std::vector<int> accumMaskedPalette;
  std::vector<int> timingPalette;
  std::vector<int> pedestalPalette;

  TGaxis* timingAxis;
  TGaxis* ebpSMPhiAxis[18];

public:
  EcalRenderPlugin();
  ~EcalRenderPlugin() override;

  void initialise(int, char**) override;
  bool applies(const VisDQMObject&, const VisDQMImgInfo&) override;

  void preDraw(TCanvas*, const VisDQMObject&, const VisDQMImgInfo&, VisDQMRenderInfo&) override;
  void postDraw(TCanvas*, const VisDQMObject&, const VisDQMImgInfo&) override;

private:
  void preDrawByName(TCanvas*, VisDQMObject const&, VisDQMImgInfo const&, VisDQMRenderInfo&, bool&);
  void postDrawByName(TCanvas*, VisDQMObject const&, VisDQMImgInfo const&, bool&);

  std::pair<unsigned, unsigned> getPlotType(TH1 const*, TString const&) const;
  void drawEESectors(char, int, TH1 const*, float factor = 1., float offset = 0.) const;
  void setLimits(TH1*, TH1 const*);

  enum ObjectType {
    kEB,
    kEE,
    kEEm,
    kEEp,
    kSM,
    kEBSM,
    kEESM,
    kSMMEM,
    kEBSMMEM,
    kEESMMEM,
    kEcal,
    kMEM,
    kEBMEM,
    kEEMEM,
    kEcal2P,
    kEcal3P,
    kChannel,
    nObjType
  };

  enum BinningType {
    kCrystal,
    kTriggerTower,
    kPseudoStrip,
    kSuperCrystal,
    kTCC,
    kDCC,
    kProjEta,
    kProjPhi,
    kRCT,
    kUser,
    kReport,
    kTrend,
    nBinType
  };
};

inline EcalRenderPlugin::EcalRenderPlugin()
    : DQMRenderPlugin(),
      ebTTLabels(nullptr),
      ebSMLabels(nullptr),
      ebSMShiftedLabels(nullptr),
      eeTTLabels(nullptr),
      eemTCCLabels(nullptr),
      eepTCCLabels(nullptr),
      eemSCLabels(nullptr),
      eepSCLabels(nullptr),
      eemSMLabels(nullptr),
      eepSMLabels(nullptr),
      eeSMLabels(nullptr),
      eePNLabels(nullptr),
      ecalSMLabels(nullptr),
      MEMLabels(nullptr),
      qualityPalette(),
      tpTimingPalette(),
      accumPalette(),
      accumMaskedPalette(),
      timingPalette(),
      pedestalPalette(),
      timingAxis(nullptr) {
  for (int i(0); i < 330; ++i)
    eeDCCSectors[i] = nullptr;
  for (int i(0); i < 707; ++i) {
    eemTCCSectors[i] = nullptr;
    eepTCCSectors[i] = nullptr;
  }
  for (int i(0); i < 2413; ++i) {
    eemTTSectors[i] = nullptr;
    eepTTSectors[i] = nullptr;
  }
  for (int i(0); i < 3; ++i)
    ecalSubdetPartitions[i] = nullptr;
  for (int i(0); i < 36; ++i)
    ecalRCTSectors[i] = nullptr;

  for (int i(0); i < 10; ++i) {
    eeDCCArray[i] = nullptr;
    eemTCCArray[i] = nullptr;
    eepTCCArray[i] = nullptr;
  }
  for (int i(0); i < 9; ++i) {
    eemTTArray[i] = nullptr;
    eepTTArray[i] = nullptr;
  }

  for (int i(0); i < 18; ++i)
    ebpSMPhiAxis[i] = nullptr;
}

inline EcalRenderPlugin::~EcalRenderPlugin() {
  delete ebTTLabels;
  delete ebSMLabels;
  delete ebSMShiftedLabels;
  delete eeTTLabels;
  delete eemTCCLabels;
  delete eepTCCLabels;
  delete eemSCLabels;
  delete eepSCLabels;
  delete eemSMLabels;
  delete eepSMLabels;
  delete eeSMLabels;
  delete eePNLabels;
  delete ecalSMLabels;
  delete MEMLabels;

  delete timingAxis;

  for (int i(0); i < 18; ++i)
    delete ebpSMPhiAxis[i];

  for (int i(0); i < 330; ++i)
    delete eeDCCSectors[i];
  for (int i(0); i < 707; ++i) {
    delete eemTCCSectors[i];
    delete eepTCCSectors[i];
  }
  for (int i(0); i < 2413; ++i) {
    delete eemTTSectors[i];
    delete eepTTSectors[i];
  }
  for (int i(0); i < 3; ++i)
    delete ecalSubdetPartitions[i];
  for (int i(0); i < 36; ++i)
    delete ecalRCTSectors[i];

  for (int i(0); i < 10; ++i) {
    delete eeDCCArray[i];
    delete eemTCCArray[i];
    delete eepTCCArray[i];
  }
  for (int i(0); i < 9; ++i) {
    delete eemTTArray[i];
    delete eepTTArray[i];
  }

  int iCol(10001);
  TColor* color(nullptr);
  while ((color = gROOT->GetColor(iCol++)))
    delete color;
}

inline void EcalRenderPlugin::initialise(int, char**) {
  //
  // INITIALISE COLORS
  //
  int const nQual(7);
  int const nTPTim(7);
  int const nTimingSide(23);
  int const nTimingCenter(4);
  int const nPedestalSide(10);
  int const nPedestalCenter(10);
  int const nAccum(50);
  int const nAccumMasked(14);

  tpTimingPalette.resize(nTPTim);
  tpTimingPalette[0] = kGray + 2;
  tpTimingPalette[1] = kWhite;
  tpTimingPalette[2] = kRed;
  tpTimingPalette[3] = kOrange;
  tpTimingPalette[4] = kGreen;
  tpTimingPalette[5] = kAzure;
  tpTimingPalette[6] = kViolet;

  int iCol(10001);

  qualityPalette.resize(nQual);
  float rgbQual[nQual][3] = {{1.00, 0.00, 0.00},
                             {0.00, 1.00, 0.00},
                             {1.00, 0.96, 0.00},
                             {0.50, 0.00, 0.00},
                             {0.00, 1.00, 0.00},
                             {0.80, 0.80, 0.00},
                             {1.00, 1.00, 1.00}};
  for (int i(0); i < nQual; i++) {
    new TColor(iCol + i, rgbQual[i][0], rgbQual[i][1], rgbQual[i][2]);
    qualityPalette[i] = iCol + i;
  }

  iCol += nQual;

  timingPalette.resize(2 * nTimingSide + nTimingCenter);
  double rgbTimLow[3][2] = {{0.142, 0.740}, {0.000, 0.900}, {0.850, 1.000}};
  double rgbTimMed[3] = {0.500, 1.000, 0.500};
  double rgbTimHigh[3][2] = {{1.000, 0.650}, {0.900, 0.000}, {0.610, 0.130}};
  for (int i(0); i < nTimingSide; i++) {
    double r((rgbTimLow[0][1] - rgbTimLow[0][0]) / (nTimingSide - 1) * i + rgbTimLow[0][0]);
    double g((rgbTimLow[1][1] - rgbTimLow[1][0]) / (nTimingSide - 1) * i + rgbTimLow[1][0]);
    double b((rgbTimLow[2][1] - rgbTimLow[2][0]) / (nTimingSide - 1) * i + rgbTimLow[2][0]);
    new TColor(iCol + i, r, g, b);
    timingPalette[i] = iCol + i;

    r = (rgbTimHigh[0][1] - rgbTimHigh[0][0]) / (nTimingSide - 1) * i + rgbTimHigh[0][0];
    g = (rgbTimHigh[1][1] - rgbTimHigh[1][0]) / (nTimingSide - 1) * i + rgbTimHigh[1][0];
    b = (rgbTimHigh[2][1] - rgbTimHigh[2][0]) / (nTimingSide - 1) * i + rgbTimHigh[2][0];
    new TColor(iCol + nTimingSide + nTimingCenter + i, r, g, b);
    timingPalette[nTimingSide + nTimingCenter + i] = iCol + nTimingSide + nTimingCenter + i;
  }
  for (int i(nTimingSide); i < nTimingSide + nTimingCenter; i++) {
    double r(rgbTimMed[0]);
    double g(rgbTimMed[1]);
    double b(rgbTimMed[2]);
    new TColor(iCol + i, r, g, b);
    timingPalette[i] = iCol + i;
  }

  iCol += 2 * nTimingSide + nTimingCenter;

  accumPalette.resize(nAccum);
  double rgbAccum[3][2] = {{0.70, 0.00}, {0.90, 0.10}, {0.90, 0.90}};
  for (int i(0); i < nAccum; i++) {
    double r((rgbAccum[0][1] - rgbAccum[0][0]) / (nAccum - 1) * i + rgbAccum[0][0]);
    double g((rgbAccum[1][1] - rgbAccum[1][0]) / (nAccum - 1) * i + rgbAccum[1][0]);
    double b((rgbAccum[2][1] - rgbAccum[2][0]) / (nAccum - 1) * i + rgbAccum[2][0]);
    new TColor(iCol + i, r, g, b);
    accumPalette[i] = iCol + i;
  }

  // For TTF4 vs Masking Status
  // Offset by 10 to avoid confusion with standard status values
  accumMaskedPalette.resize(nAccumMasked);
  for (int i(0); i < 11; i++) {
    accumMaskedPalette[i] = kWhite;
  }
  accumMaskedPalette[11] = kGray + 1;
  accumMaskedPalette[12] = kBlack;
  accumMaskedPalette[13] = kBlue;

  iCol += nAccum;

  pedestalPalette.resize(2 * nPedestalSide + nPedestalCenter);
  double rgbPedestalLow[3][2] = {{0.142, 0.740}, {0.000, 0.900}, {0.850, 1.000}};
  double rgbPedestalMed[3][2] = {{0.600, 0.400}, {1.000, 1.000}, {0.400, 0.600}};
  double rgbPedestalHigh[3][2] = {{1.000, 0.650}, {0.900, 0.000}, {0.610, 0.130}};
  for (int i(0); i < nPedestalSide; ++i) {
    double r((rgbPedestalLow[0][1] - rgbPedestalLow[0][0]) / (nPedestalSide - 1) * i + rgbPedestalLow[0][0]);
    double g((rgbPedestalLow[1][1] - rgbPedestalLow[1][0]) / (nPedestalSide - 1) * i + rgbPedestalLow[1][0]);
    double b((rgbPedestalLow[2][1] - rgbPedestalLow[2][0]) / (nPedestalSide - 1) * i + rgbPedestalLow[2][0]);
    new TColor(iCol + i, r, g, b);
    pedestalPalette[i] = iCol + i;

    r = (rgbPedestalHigh[0][1] - rgbPedestalHigh[0][0]) / (nPedestalSide - 1) * i + rgbPedestalHigh[0][0];
    g = (rgbPedestalHigh[1][1] - rgbPedestalHigh[1][0]) / (nPedestalSide - 1) * i + rgbPedestalHigh[1][0];
    b = (rgbPedestalHigh[2][1] - rgbPedestalHigh[2][0]) / (nPedestalSide - 1) * i + rgbPedestalHigh[2][0];
    new TColor(iCol + nPedestalSide + nPedestalCenter + i, r, g, b);
    pedestalPalette[nPedestalSide + nPedestalCenter + i] = iCol + nPedestalSide + nPedestalCenter + i;
  }
  for (int i(nPedestalSide); i < nPedestalSide + nPedestalCenter; ++i) {
    double r((rgbPedestalMed[0][1] - rgbPedestalMed[0][0]) / (nPedestalSide - 1) * i + rgbPedestalMed[0][0]);
    double g((rgbPedestalMed[1][1] - rgbPedestalMed[1][0]) / (nPedestalSide - 1) * i + rgbPedestalMed[1][0]);
    double b((rgbPedestalMed[2][1] - rgbPedestalMed[2][0]) / (nPedestalSide - 1) * i + rgbPedestalMed[2][0]);
    new TColor(iCol + i, r, g, b);
    pedestalPalette[i] = iCol + i;
  }

  //
  // INITIALISE LABELS
  //

  ebTTLabels = new TH2C("ebTTLabels", "ebTTLabels", 17, 0, 85, 4, 0, 20);
  ebSMLabels = new TH2C("ebSMLabels", "ebSMLabels", 18, 0., 360., 2, -85., 85.);
  ebSMShiftedLabels = new TH2C("ebSMShiftedLabels", "ebSMShiftedLabels", 18, -3.6652, 2.6180, 2, -1.479, 1.479);

  eeTTLabels = new TH2C("eeTTLabels", "eeTTLabels", 100, 0., 100., 100, 0., 100.);
  eemTCCLabels = new TH2C("eemTCCLabels", "eemTCCLabels", 100, 0., 100., 100, 0., 100.);
  eepTCCLabels = new TH2C("eepTCCLabels", "eepTCCLabels", 100, 0., 100., 100, 0., 100.);
  eemSCLabels = new TH2C("eemSCLabels", "eemSCLabels", 22, -5., 105., 22, -5., 105.);
  eepSCLabels = new TH2C("eepSCLabels", "eepSCLabels", 22, -5., 105., 22, -5., 105.);
  eemSMLabels = new TH2C("eemSMLabels", "eemSMLabels", 10, 0., 100., 10, 0., 100.);
  eepSMLabels = new TH2C("eepSMLabels", "eepSMLabels", 10, 0., 100., 10, 0., 100.);
  eeSMLabels = new TH2C("eeSMLabels", "eeSMLabels", 20, 0., 200., 10, 0., 100.);
  eePNLabels = new TH2C("eePNLabels", "eePNLabels", 9, 0., 45., 2, -10., 10.);

  ecalSMLabels = new TH2C("ecalSMLabels", "ecalSMLabels", 9, 0., 9., 6, 0., 6.);

  MEMLabels = new TH2C("MEMLabels", "MEMLabels", 2, 0., 10., 1, 0., 5.);

  ebTTLabels->SetDirectory(gROOT);
  ebSMLabels->SetDirectory(gROOT);
  ebSMShiftedLabels->SetDirectory(gROOT);

  eeTTLabels->SetDirectory(gROOT);
  eemTCCLabels->SetDirectory(gROOT);
  eepTCCLabels->SetDirectory(gROOT);
  eemSCLabels->SetDirectory(gROOT);
  eepSCLabels->SetDirectory(gROOT);
  eemSMLabels->SetDirectory(gROOT);
  eepSMLabels->SetDirectory(gROOT);
  eeSMLabels->SetDirectory(gROOT);
  eePNLabels->SetDirectory(gROOT);

  ecalSMLabels->SetDirectory(gROOT);

  MEMLabels->SetDirectory(gROOT);

  ebTTLabels->SetMinimum(0.1);
  ebSMLabels->SetMinimum(-18.1);
  ebSMShiftedLabels->SetMinimum(-18.1);

  eeTTLabels->SetMinimum(0.1);
  eemTCCLabels->SetMinimum(0.1);
  eepTCCLabels->SetMinimum(0.1);
  eemSCLabels->SetMinimum(0.1);
  eepSCLabels->SetMinimum(0.1);
  eemSMLabels->SetMinimum(-9.1);
  eepSMLabels->SetMinimum(0.1);
  eeSMLabels->SetMinimum(-9.1);
  eePNLabels->SetMinimum(-9.1);

  ecalSMLabels->SetMinimum(-18.1);

  MEMLabels->SetMinimum(68.1);

  for (int i = 1; i < 69; i++)
    ebTTLabels->SetBinContent(i / 4 + 1, i % 4 + 1, i + 1);

  // 36 entries
  int iEBSM[] = {1,  2,  3,  4,  5,  6,  7,  8,  9,  10,  11,  12,  13,  14,  15,  16,  17,  18,
                 -1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15, -16, -17, -18};

  for (int i = 0; i < 36; i++) {
    int ix(i % 18 + 1);
    int iy(2 - i / 18);
    ebSMLabels->SetBinContent(ix, iy, iEBSM[i]);
  }

  int iEBSMShifted[] = {9,  10,  11,  12,  13,  14,  15,  16,  17,  18,  1,  2,  3,  4,  5,  6,  7,  8,
                        -9, -10, -11, -12, -13, -14, -15, -16, -17, -18, -1, -2, -3, -4, -5, -6, -7, -8};

  for (int i = 0; i < 36; i++) {
    int ix(i % 18 + 1);
    int iy(2 - i / 18);
    ebSMShiftedLabels->SetBinContent(ix, iy, iEBSMShifted[i]);
  }

  // 720 entries
  int ixTT[] = {
      99, 99, 97, 97, 95, 94, 92, 91, 87, 84, 79, 77, 74, 69, 64, 61, 58, 54, 47, 43, 40, 37, 32, 27, 24, 22, 17, 14,
      10, 9,  7,  6,  4,  4,  2,  2,  2,  2,  4,  4,  6,  7,  9,  10, 14, 17, 22, 24, 27, 32, 37, 40, 43, 47, 54, 58,
      61, 64, 69, 74, 77, 79, 84, 87, 91, 92, 94, 95, 97, 97, 99, 99, 96, 96, 94, 94, 92, 91, 89, 87, 84, 82, 78, 75,
      72, 69, 65, 61, 57, 52, 49, 44, 40, 36, 32, 29, 26, 23, 19, 16, 14, 12, 10, 9,  7,  7,  5,  5,  5,  5,  7,  7,
      9,  10, 12, 14, 16, 19, 23, 26, 29, 32, 36, 40, 44, 49, 52, 57, 61, 65, 69, 72, 75, 78, 82, 85, 87, 89, 91, 92,
      94, 94, 96, 96, 92, 92, 91, 90, 89, 87, 85, 84, 81, 78, 76, 73, 70, 67, 64, 60, 57, 52, 49, 44, 41, 37, 34, 31,
      28, 25, 23, 20, 17, 16, 14, 12, 11, 10, 9,  9,  9,  9,  10, 11, 12, 14, 16, 17, 20, 23, 25, 28, 31, 34, 37, 41,
      44, 49, 52, 57, 60, 64, 67, 70, 73, 76, 78, 81, 84, 85, 87, 89, 90, 91, 92, 92, 88, 87, 87, 87, 87, 84, 82, 81,
      79, 76, 74, 71, 68, 66, 62, 59, 56, 53, 48, 45, 42, 39, 35, 33, 30, 27, 25, 23, 20, 19, 17, 14, 14, 14, 14, 13,
      13, 14, 14, 14, 14, 17, 19, 20, 22, 25, 27, 30, 33, 35, 39, 42, 45, 48, 53, 56, 59, 62, 66, 68, 71, 74, 76, 78,
      81, 82, 84, 87, 87, 87, 87, 88, 85, 84, 83, 84, 82, 80, 79, 78, 75, 74, 72, 69, 67, 64, 61, 58, 56, 52, 49, 45,
      43, 40, 37, 34, 32, 29, 28, 26, 23, 22, 21, 19, 17, 18, 17, 16, 16, 17, 18, 17, 19, 21, 22, 23, 26, 27, 29, 32,
      34, 37, 40, 43, 45, 49, 52, 56, 58, 61, 64, 67, 69, 72, 73, 75, 78, 79, 80, 82, 84, 83, 84, 85, 82, 80, 80, 80,
      79, 78, 77, 76, 74, 72, 69, 67, 64, 62, 59, 57, 54, 52, 49, 47, 44, 42, 39, 37, 34, 32, 29, 27, 25, 24, 23, 22,
      21, 21, 21, 19, 19, 21, 21, 21, 22, 23, 24, 25, 27, 29, 32, 34, 37, 39, 42, 44, 47, 49, 52, 54, 57, 59, 62, 64,
      67, 69, 72, 74, 76, 77, 78, 79, 80, 80, 80, 82, 77, 77, 77, 77, 76, 74, 74, 72, 71, 69, 67, 66, 64, 62, 59, 57,
      54, 52, 49, 47, 44, 42, 39, 37, 35, 34, 32, 30, 29, 27, 27, 25, 24, 24, 24, 24, 24, 24, 24, 24, 25, 27, 27, 29,
      30, 32, 34, 35, 37, 39, 42, 44, 47, 49, 52, 54, 57, 59, 62, 64, 66, 67, 69, 71, 72, 74, 74, 76, 77, 77, 77, 77,
      74, 74, 74, 74, 72, 72, 71, 69, 69, 67, 65, 64, 62, 59, 58, 55, 54, 52, 49, 47, 46, 43, 42, 39, 37, 36, 34, 33,
      32, 30, 29, 29, 27, 27, 27, 27, 27, 27, 27, 27, 29, 29, 30, 32, 32, 34, 36, 37, 39, 42, 43, 46, 47, 49, 52, 54,
      55, 58, 59, 62, 64, 65, 67, 68, 69, 71, 72, 72, 74, 74, 74, 74, 71, 71, 69, 69, 69, 69, 69, 67, 66, 64, 62, 62,
      60, 59, 57, 55, 54, 52, 49, 47, 46, 44, 42, 41, 39, 39, 37, 35, 34, 32, 32, 32, 32, 32, 30, 30, 30, 30, 32, 32,
      32, 32, 32, 34, 35, 37, 39, 39, 41, 42, 44, 46, 47, 49, 52, 54, 55, 57, 59, 60, 62, 62, 64, 66, 67, 69, 69, 69,
      69, 69, 71, 71, 67, 67, 66, 64, 62, 60, 57, 54, 52, 49, 47, 44, 41, 39, 37, 35, 34, 34, 34, 34, 35, 37, 39, 41,
      44, 47, 49, 52, 54, 57, 60, 62, 64, 66, 67, 67, 64, 63, 62, 62, 60, 59, 56, 54, 52, 49, 47, 45, 42, 42, 39, 39,
      38, 37, 37, 38, 39, 39, 41, 42, 45, 47, 49, 52, 54, 56, 59, 59, 62, 62, 63, 64};
  int iyTT[] = {
      54, 58, 61, 64, 69, 74, 77, 79, 84, 87, 91, 92, 94, 95, 97, 97, 99, 99, 99, 99, 97, 96, 94, 94, 91, 91, 86, 84,
      79, 77, 74, 69, 64, 61, 57, 52, 47, 43, 40, 37, 32, 27, 24, 22, 17, 14, 10, 9,  7,  6,  4,  4,  2,  2,  2,  2,
      4,  5,  7,  7,  10, 10, 15, 17, 22, 24, 27, 32, 37, 40, 44, 49, 52, 57, 61, 65, 69, 72, 75, 78, 81, 84, 87, 89,
      91, 92, 94, 94, 96, 96, 96, 95, 94, 94, 92, 91, 89, 86, 85, 82, 78, 75, 72, 68, 64, 60, 57, 52, 49, 44, 40, 36,
      32, 29, 26, 23, 19, 16, 14, 12, 10, 9,  7,  7,  5,  5,  5,  6,  7,  7,  9,  10, 12, 15, 16, 19, 23, 26, 29, 33,
      37, 41, 44, 49, 52, 57, 60, 64, 67, 70, 73, 76, 78, 81, 84, 85, 87, 89, 90, 91, 92, 92, 91, 91, 91, 90, 89, 87,
      85, 84, 81, 78, 76, 73, 70, 67, 64, 60, 57, 52, 49, 44, 41, 37, 34, 31, 28, 25, 23, 20, 17, 16, 14, 12, 11, 10,
      9,  9,  10, 10, 10, 11, 12, 14, 16, 17, 20, 23, 25, 28, 31, 34, 37, 41, 44, 49, 53, 56, 59, 62, 66, 68, 71, 74,
      76, 78, 81, 82, 84, 87, 87, 87, 87, 88, 88, 87, 87, 87, 86, 84, 82, 81, 78, 76, 74, 71, 67, 65, 62, 59, 56, 52,
      48, 45, 42, 39, 35, 33, 30, 27, 25, 23, 20, 19, 17, 14, 14, 14, 14, 13, 13, 14, 14, 14, 15, 17, 19, 20, 23, 25,
      27, 30, 34, 36, 39, 42, 45, 49, 52, 56, 58, 61, 64, 67, 69, 72, 73, 75, 78, 79, 80, 82, 84, 83, 84, 85, 85, 84,
      83, 83, 82, 80, 79, 78, 75, 74, 72, 69, 67, 64, 61, 58, 55, 52, 49, 45, 43, 40, 37, 34, 32, 29, 28, 26, 23, 22,
      21, 19, 17, 18, 17, 16, 16, 17, 18, 18, 19, 21, 22, 23, 26, 27, 29, 32, 34, 37, 40, 43, 46, 49, 52, 54, 57, 59,
      62, 64, 67, 69, 71, 74, 76, 77, 78, 79, 80, 80, 80, 82, 81, 80, 80, 79, 79, 77, 77, 75, 73, 71, 69, 66, 64, 62,
      59, 57, 54, 52, 49, 47, 44, 42, 39, 37, 34, 32, 30, 27, 25, 24, 23, 22, 21, 21, 21, 19, 20, 21, 21, 22, 22, 24,
      24, 26, 28, 30, 32, 35, 37, 39, 42, 44, 47, 49, 52, 54, 57, 59, 62, 64, 66, 67, 69, 71, 72, 74, 74, 76, 77, 77,
      77, 77, 77, 77, 77, 77, 75, 74, 74, 72, 70, 69, 67, 66, 63, 62, 59, 56, 54, 51, 49, 47, 44, 42, 39, 37, 35, 34,
      32, 30, 29, 27, 27, 25, 24, 24, 24, 24, 24, 24, 24, 24, 26, 27, 27, 29, 31, 32, 34, 35, 38, 39, 42, 45, 47, 50,
      52, 54, 55, 58, 59, 62, 64, 65, 67, 68, 69, 71, 72, 72, 74, 74, 74, 74, 74, 74, 73, 74, 72, 72, 71, 69, 69, 67,
      64, 63, 61, 59, 58, 55, 53, 51, 49, 47, 46, 43, 42, 39, 37, 36, 34, 33, 32, 30, 29, 29, 27, 27, 27, 27, 27, 27,
      28, 27, 29, 29, 30, 32, 32, 34, 37, 38, 40, 42, 43, 46, 48, 50, 52, 54, 55, 57, 59, 60, 61, 62, 64, 66, 67, 68,
      69, 69, 69, 69, 71, 71, 71, 71, 69, 69, 69, 68, 68, 67, 65, 64, 62, 61, 60, 58, 56, 54, 54, 51, 49, 47, 46, 44,
      42, 41, 40, 39, 37, 35, 34, 33, 32, 32, 32, 32, 30, 30, 30, 30, 32, 32, 32, 33, 33, 34, 36, 37, 39, 40, 41, 43,
      45, 47, 47, 50, 52, 54, 57, 60, 62, 64, 66, 67, 67, 66, 66, 66, 64, 62, 59, 57, 54, 52, 49, 47, 44, 41, 39, 37,
      35, 34, 34, 35, 35, 35, 37, 39, 42, 44, 47, 49, 52, 54, 56, 59, 59, 62, 62, 63, 64, 64, 63, 62, 62, 59, 59, 56,
      54, 52, 49, 47, 45, 42, 42, 39, 39, 38, 37, 37, 38, 39, 39, 42, 42, 45, 47, 49};
  int iTT[] = {
      3,  4,  1,  2,  3,  4,  1,  2,  3,  4,  1,  2,  3,  4,  1,  2,  3,  4,  1,  2,  3,  4,  1,  2,  3,  4,  1,  2,
      3,  4,  1,  2,  3,  4,  1,  2,  3,  4,  1,  2,  3,  4,  1,  2,  3,  4,  1,  2,  3,  4,  1,  2,  3,  4,  1,  2,
      3,  4,  1,  2,  3,  4,  1,  2,  3,  4,  1,  2,  3,  4,  1,  2,  7,  8,  5,  6,  7,  8,  5,  6,  7,  8,  5,  6,
      7,  8,  5,  6,  7,  8,  5,  6,  7,  8,  5,  6,  7,  8,  5,  6,  7,  8,  5,  6,  7,  8,  5,  6,  7,  8,  5,  6,
      7,  8,  5,  6,  7,  8,  5,  6,  7,  8,  5,  6,  7,  8,  5,  6,  7,  8,  5,  6,  7,  8,  5,  6,  7,  8,  5,  6,
      7,  8,  5,  6,  11, 12, 9,  10, 11, 12, 9,  10, 11, 12, 9,  10, 11, 12, 9,  10, 11, 12, 9,  10, 11, 12, 9,  10,
      11, 12, 9,  10, 11, 12, 9,  10, 11, 12, 9,  10, 11, 12, 9,  10, 11, 12, 9,  10, 11, 12, 9,  10, 11, 12, 9,  10,
      11, 12, 9,  10, 11, 12, 9,  10, 11, 12, 9,  10, 11, 12, 9,  10, 11, 12, 9,  10, 15, 16, 13, 14, 15, 16, 13, 14,
      15, 16, 13, 14, 15, 16, 13, 14, 15, 16, 13, 14, 15, 16, 13, 14, 15, 16, 13, 14, 15, 16, 13, 14, 15, 16, 13, 14,
      15, 16, 13, 14, 15, 16, 13, 14, 15, 16, 13, 14, 15, 16, 13, 14, 15, 16, 13, 14, 15, 16, 13, 14, 15, 16, 13, 14,
      15, 16, 13, 14, 15, 16, 13, 14, 3,  4,  1,  2,  3,  4,  1,  2,  3,  4,  1,  2,  3,  4,  1,  2,  3,  4,  1,  2,
      3,  4,  1,  2,  3,  4,  1,  2,  3,  4,  1,  2,  3,  4,  1,  2,  3,  4,  1,  2,  3,  4,  1,  2,  3,  4,  1,  2,
      3,  4,  1,  2,  3,  4,  1,  2,  3,  4,  1,  2,  3,  4,  1,  2,  3,  4,  1,  2,  3,  4,  1,  2,  7,  8,  5,  6,
      7,  8,  5,  6,  7,  8,  5,  6,  7,  8,  5,  6,  7,  8,  5,  6,  7,  8,  5,  6,  7,  8,  5,  6,  7,  8,  5,  6,
      7,  8,  5,  6,  7,  8,  5,  6,  7,  8,  5,  6,  7,  8,  5,  6,  7,  8,  5,  6,  7,  8,  5,  6,  7,  8,  5,  6,
      7,  8,  5,  6,  7,  8,  5,  6,  7,  8,  5,  6,  11, 12, 9,  10, 11, 12, 9,  10, 11, 12, 9,  10, 11, 12, 9,  10,
      11, 12, 9,  10, 11, 12, 9,  10, 11, 12, 9,  10, 11, 12, 9,  10, 11, 12, 9,  10, 11, 12, 9,  10, 11, 12, 9,  10,
      11, 12, 9,  10, 11, 12, 9,  10, 11, 12, 9,  10, 11, 12, 9,  10, 11, 12, 9,  10, 11, 12, 9,  10, 11, 12, 9,  10,
      15, 16, 13, 14, 15, 16, 13, 14, 15, 16, 13, 14, 15, 16, 13, 14, 15, 16, 13, 14, 15, 16, 13, 14, 15, 16, 13, 14,
      15, 16, 13, 14, 15, 16, 13, 14, 15, 16, 13, 14, 15, 16, 13, 14, 15, 16, 13, 14, 15, 16, 13, 14, 15, 16, 13, 14,
      15, 16, 13, 14, 15, 16, 13, 14, 15, 16, 13, 14, 15, 16, 13, 14, 19, 20, 17, 18, 19, 20, 17, 18, 19, 20, 17, 18,
      19, 20, 17, 18, 19, 20, 17, 18, 19, 20, 17, 18, 19, 20, 17, 18, 19, 20, 17, 18, 19, 20, 17, 18, 19, 20, 17, 18,
      19, 20, 17, 18, 19, 20, 17, 18, 19, 20, 17, 18, 19, 20, 17, 18, 19, 20, 17, 18, 19, 20, 17, 18, 19, 20, 17, 18,
      19, 20, 17, 18, 23, 21, 23, 21, 23, 21, 23, 21, 23, 21, 23, 21, 23, 21, 23, 21, 23, 21, 23, 21, 23, 21, 23, 21,
      23, 21, 23, 21, 23, 21, 23, 21, 23, 21, 23, 21, 27, 25, 27, 25, 27, 25, 27, 25, 27, 25, 27, 25, 27, 25, 27, 25,
      27, 25, 27, 25, 27, 25, 27, 25, 27, 25, 27, 25, 27, 25, 27, 25, 27, 25, 27, 25};

  int ixTCC[] = {92, 90, 83, 72, 59, 43, 30, 19, 12, 9,  12, 19, 30, 43, 59, 72, 83, 90,
                 77, 76, 72, 65, 56, 46, 36, 30, 25, 24, 24, 29, 36, 46, 56, 65, 71, 77};
  int iyTCC[] = {51, 65, 77, 86, 91, 91, 86, 77, 66, 51, 36, 24, 15, 10, 10, 15, 24, 35,
                 49, 60, 68, 74, 77, 77, 74, 68, 60, 50, 40, 33, 27, 24, 24, 27, 33, 40};
  int imTCC[] = {19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
                 1,  2,  3,  4,  5,  6,  7,  8,  9,  10, 11, 12, 13, 14, 15, 16, 17, 18};
  int ipTCC[] = {73, 74, 75, 76, 77, 78, 79, 80, 81, 82,  83,  84,  85,  86,  87,  88,  89,  90,
                 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108};

  for (unsigned i = 0; i < 720; i++) {
    eeTTLabels->SetBinContent(ixTT[i], iyTT[i], iTT[i]);
  }
  for (unsigned i = 0; i < 36; i++) {
    eemTCCLabels->SetBinContent(ixTCC[i], iyTCC[i], imTCC[i]);
    eepTCCLabels->SetBinContent(ixTCC[i], iyTCC[i], ipTCC[i]);
  }

  // 484 entries
  int iCCUFromIPEEm[] = {
      0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
      0,  0,  0,  30, 5,  1,  1,  5,  30, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  30, 19, 18, 17, 6,
      2,  2,  6,  17, 18, 19, 30, 0,  0,  0,  0,  0,  0,  0,  0,  0,  3,  23, 22, 21, 20, 7,  3,  3,  7,  20, 21,
      22, 23, 3,  0,  0,  0,  0,  0,  0,  0,  3,  2,  1,  26, 25, 24, 8,  4,  4,  8,  24, 25, 26, 1,  2,  3,  0,
      0,  0,  0,  0,  25, 6,  5,  4,  29, 28, 27, 13, 9,  9,  13, 27, 28, 29, 4,  5,  6,  25, 0,  0,  0,  0,  11,
      10, 9,  8,  7,  32, 31, 14, 10, 10, 14, 31, 32, 7,  8,  9,  10, 11, 0,  0,  0,  0,  17, 16, 15, 14, 13, 12,
      33, 15, 11, 11, 15, 33, 12, 13, 14, 15, 16, 17, 0,  0,  0,  25, 24, 23, 22, 21, 20, 19, 18, 16, 12, 12, 16,
      18, 19, 20, 21, 22, 23, 24, 25, 0,  0,  2,  1,  31, 30, 29, 28, 27, 26, 25, 3,  25, 3,  26, 27, 28, 29, 30,
      31, 1,  2,  0,  0,  9,  8,  7,  6,  5,  4,  3,  32, 0,  0,  0,  0,  32, 3,  4,  5,  6,  7,  8,  9,  0,  0,
      17, 16, 15, 14, 13, 12, 11, 10, 0,  0,  0,  0,  10, 11, 12, 13, 14, 15, 16, 17, 0,  0,  24, 23, 22, 21, 20,
      19, 18, 1,  21, 14, 21, 14, 1,  18, 19, 20, 21, 22, 23, 24, 0,  0,  34, 29, 28, 27, 26, 25, 3,  2,  32, 6,
      30, 32, 2,  3,  25, 26, 27, 28, 29, 34, 0,  0,  0,  30, 32, 31, 7,  6,  5,  4,  33, 7,  31, 33, 4,  5,  6,
      7,  31, 32, 30, 0,  0,  0,  0,  33, 13, 12, 11, 10, 9,  8,  4,  8,  32, 28, 8,  9,  10, 11, 12, 13, 33, 0,
      0,  0,  0,  14, 20, 19, 18, 17, 16, 15, 5,  9,  33, 29, 15, 16, 17, 18, 19, 20, 14, 0,  0,  0,  0,  0,  14,
      26, 25, 24, 23, 22, 10, 14, 38, 34, 22, 23, 24, 25, 26, 14, 0,  0,  0,  0,  0,  0,  0,  21, 27, 30, 28, 1,
      11, 15, 39, 35, 25, 28, 30, 27, 21, 0,  0,  0,  0,  0,  0,  0,  0,  0,  21, 31, 29, 2,  12, 16, 40, 36, 26,
      29, 31, 21, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3,  13, 17, 41, 37, 27, 0,  0,  0,  0,  0,
      0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0};

  int iCCUToIPEEp[] = {
      0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
      0,  0,  0,  30, 5,  1,  1,  5,  30, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  30, 19, 18, 17, 6,
      2,  2,  6,  17, 18, 19, 30, 0,  0,  0,  0,  0,  0,  0,  0,  0,  3,  23, 22, 21, 20, 7,  3,  3,  7,  20, 21,
      22, 23, 3,  0,  0,  0,  0,  0,  0,  0,  3,  2,  1,  26, 25, 24, 8,  4,  4,  8,  24, 25, 26, 1,  2,  3,  0,
      0,  0,  0,  0,  25, 6,  5,  4,  29, 28, 27, 13, 9,  9,  13, 27, 28, 29, 4,  5,  6,  25, 0,  0,  0,  0,  11,
      10, 9,  8,  7,  32, 31, 14, 10, 10, 14, 31, 32, 7,  8,  9,  10, 11, 0,  0,  0,  0,  17, 16, 15, 14, 13, 12,
      33, 15, 11, 11, 15, 33, 12, 13, 14, 15, 16, 17, 0,  0,  0,  25, 24, 23, 22, 21, 20, 19, 18, 16, 12, 12, 16,
      18, 19, 20, 21, 22, 23, 24, 25, 0,  0,  2,  1,  31, 30, 29, 28, 27, 26, 25, 3,  25, 3,  26, 27, 28, 29, 30,
      31, 1,  2,  0,  0,  9,  8,  7,  6,  5,  4,  3,  32, 0,  0,  0,  0,  32, 3,  4,  5,  6,  7,  8,  9,  0,  0,
      17, 16, 15, 14, 13, 12, 11, 10, 0,  0,  0,  0,  10, 11, 12, 13, 14, 15, 16, 17, 0,  0,  24, 23, 22, 21, 20,
      19, 18, 1,  21, 14, 21, 14, 1,  18, 19, 20, 21, 22, 23, 24, 0,  0,  34, 29, 28, 27, 26, 25, 3,  2,  32, 30,
      6,  32, 2,  3,  25, 26, 27, 28, 29, 34, 0,  0,  0,  30, 32, 31, 7,  6,  5,  4,  33, 31, 7,  33, 4,  5,  6,
      7,  31, 32, 30, 0,  0,  0,  0,  33, 13, 12, 11, 10, 9,  8,  28, 32, 8,  4,  8,  9,  10, 11, 12, 13, 33, 0,
      0,  0,  0,  14, 20, 19, 18, 17, 16, 15, 29, 33, 9,  5,  15, 16, 17, 18, 19, 20, 14, 0,  0,  0,  0,  0,  14,
      26, 25, 24, 23, 22, 34, 38, 14, 10, 22, 23, 24, 25, 26, 14, 0,  0,  0,  0,  0,  0,  0,  21, 27, 30, 28, 25,
      35, 39, 15, 11, 1,  28, 30, 27, 21, 0,  0,  0,  0,  0,  0,  0,  0,  0,  21, 31, 29, 26, 36, 40, 16, 12, 2,
      29, 31, 21, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  27, 37, 41, 17, 13, 3,  0,  0,  0,  0,  0,
      0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0};

  // CCU numbering is identical between EE+ and EE- when both are seen from the IP
  // DQM consistently uses "From Jura (from positive)" point of view -> +-05 has flipped configuration

  for (unsigned i = 0; i < 484; i++) {
    int ix(i % 22 + 1);
    int iy(22 - i / 22);
    eemSCLabels->SetBinContent(ix, iy, iCCUFromIPEEm[i]);
    eepSCLabels->SetBinContent(ix, iy, iCCUToIPEEp[i]);
  }

  // 100 entries
  int iEESM[] = {0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0,
                 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                 0, 0, 0, 0, 4, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0};

  for (unsigned i(0); i < 100; i++) {
    int ix(i % 10 + 1);
    int iy(10 - i / 10);
    eemSMLabels->SetBinContent(ix, iy, -iEESM[i]);
    eepSMLabels->SetBinContent(ix, iy, iEESM[i]);
    eeSMLabels->SetBinContent(ix, iy, -iEESM[i]);
    eeSMLabels->SetBinContent(ix + 10, iy, iEESM[i]);
  }

  // 18 entries
  int iEESMPN[] = {0, 2, 3, 0, 0, 0, 7, 8, 0, 0, -2, -3, 0, 0, 0, -7, -8, 0};

  for (unsigned i(0); i < 18; i++) {
    int ix(i % 9 + 1);
    int iy(2 - i / 9);
    eePNLabels->SetBinContent(ix, iy, iEESMPN[i]);
  }

  for (int i(1); i <= 9; ++i) {
    ecalSMLabels->SetBinContent(i, 1, i);
    ecalSMLabels->SetBinContent(i, 3, i);
    ecalSMLabels->SetBinContent(i, 5, -i);
    ecalSMLabels->SetBinContent(i, 6, -i);
  }
  for (int i(10); i <= 18; ++i) {
    ecalSMLabels->SetBinContent(i - 9, 2, i);
    ecalSMLabels->SetBinContent(i - 9, 4, -i);
  }

  for (int i(0); i < 2; i++)
    MEMLabels->SetBinContent(i + 1, 1, i + 1 + 68);

  ebTTLabels->SetMarkerSize(2);
  ebSMLabels->SetMarkerSize(2);
  ebSMShiftedLabels->SetMarkerSize(2);

  eeTTLabels->SetMarkerSize(0.9);
  eemTCCLabels->SetMarkerSize(2);
  eepTCCLabels->SetMarkerSize(2);
  eemSCLabels->SetMarkerSize(2);
  eepSCLabels->SetMarkerSize(2);
  eemSMLabels->SetMarkerSize(2);
  eepSMLabels->SetMarkerSize(2);
  eeSMLabels->SetMarkerSize(2);
  eePNLabels->SetMarkerSize(2);

  ecalSMLabels->SetMarkerSize(3);

  MEMLabels->SetMarkerSize(2);

  //
  // INITIALISE EE SECTOR LINES
  //

  int hLinesDCC[82][3] = {
      {0, 40, 60},  {3, 35, 40},  {3, 60, 65},  {5, 25, 35},  {5, 65, 75},  {8, 20, 25},  {8, 75, 80},  {13, 15, 20},
      {13, 80, 85}, {15, 13, 15}, {15, 35, 40}, {15, 60, 65}, {15, 85, 87}, {20, 8, 13},  {20, 87, 92}, {25, 5, 10},
      {25, 90, 95}, {30, 10, 20}, {30, 40, 45}, {30, 55, 60}, {30, 80, 90}, {35, 3, 5},   {35, 20, 30}, {35, 70, 80},
      {35, 95, 97}, {39, 45, 55}, {40, 0, 3},   {40, 30, 35}, {40, 43, 45}, {40, 55, 57}, {40, 65, 70}, {40, 97, 100},
      {41, 42, 43}, {41, 57, 58}, {42, 41, 42}, {42, 58, 59}, {43, 40, 41}, {43, 59, 60}, {45, 35, 40}, {45, 60, 65},
      {50, 35, 39}, {50, 61, 65}, {55, 10, 35}, {55, 39, 40}, {55, 60, 61}, {55, 65, 90}, {57, 40, 41}, {57, 59, 60},
      {58, 41, 42}, {58, 58, 59}, {59, 42, 43}, {59, 57, 58}, {60, 0, 10},  {60, 40, 45}, {60, 55, 60}, {60, 90, 100},
      {61, 45, 55}, {65, 3, 5},   {65, 35, 40}, {65, 60, 65}, {65, 95, 97}, {70, 30, 35}, {70, 65, 70}, {75, 5, 8},
      {75, 25, 30}, {75, 70, 75}, {75, 92, 95}, {80, 8, 13},  {80, 87, 92}, {85, 13, 15}, {85, 20, 25}, {85, 75, 80},
      {85, 85, 87}, {87, 15, 20}, {87, 80, 85}, {92, 20, 25}, {92, 75, 80}, {95, 25, 35}, {95, 65, 75}, {97, 35, 40},
      {97, 60, 65}, {100, 40, 60}};
  for (int i(0); i < 82; i++) {
    eeDCCSectors[i] = new TLine(hLinesDCC[i][1], hLinesDCC[i][0], hLinesDCC[i][2], hLinesDCC[i][0]);
    eeDCCSectors[i + 165] = new TLine(hLinesDCC[i][1] + 100, hLinesDCC[i][0], hLinesDCC[i][2] + 100, hLinesDCC[i][0]);
  }
  int vLinesDCC[83][3] = {
      {0, 40, 60},   {3, 35, 40},   {3, 60, 65},  {5, 25, 35},  {5, 65, 75},  {8, 20, 25},  {8, 75, 80},  {10, 25, 30},
      {10, 55, 60},  {13, 15, 20},  {13, 80, 85}, {15, 13, 15}, {15, 85, 87}, {20, 8, 13},  {20, 30, 35}, {20, 85, 92},
      {25, 5, 8},    {25, 75, 85},  {25, 92, 95}, {30, 35, 40}, {30, 70, 75}, {35, 3, 15},  {35, 40, 45}, {35, 50, 55},
      {35, 65, 70},  {35, 95, 97},  {39, 45, 55}, {40, 0, 3},   {40, 15, 30}, {40, 43, 45}, {40, 55, 57}, {40, 60, 65},
      {40, 97, 100}, {41, 42, 43},  {41, 57, 58}, {42, 41, 42}, {42, 58, 59}, {43, 40, 41}, {43, 59, 60}, {45, 30, 40},
      {45, 60, 61},  {50, 61, 100}, {55, 30, 40}, {55, 60, 61}, {57, 40, 41}, {57, 59, 60}, {58, 41, 42}, {58, 58, 59},
      {59, 42, 43},  {59, 57, 58},  {60, 0, 3},   {60, 15, 30}, {60, 43, 45}, {60, 55, 57}, {60, 60, 65}, {60, 97, 100},
      {61, 45, 55},  {65, 3, 15},   {65, 40, 45}, {65, 50, 55}, {65, 65, 70}, {65, 95, 97}, {70, 35, 40}, {70, 70, 75},
      {75, 5, 8},    {75, 75, 85},  {75, 92, 95}, {80, 8, 13},  {80, 30, 35}, {80, 85, 92}, {85, 13, 15}, {85, 85, 87},
      {87, 15, 20},  {87, 80, 85},  {90, 25, 30}, {90, 55, 60}, {92, 20, 25}, {92, 75, 80}, {95, 25, 35}, {95, 65, 75},
      {97, 35, 40},  {97, 60, 65},  {100, 40, 60}};
  for (int i(0); i < 83; i++) {
    eeDCCSectors[i + 82] = new TLine(vLinesDCC[i][0], vLinesDCC[i][1], vLinesDCC[i][0], vLinesDCC[i][2]);
    eeDCCSectors[i + 247] = new TLine(vLinesDCC[i][0] + 100, vLinesDCC[i][1], vLinesDCC[i][0] + 100, vLinesDCC[i][2]);
  }

  eeDCCArray[9] = new TObjArray(330);
  for (int i(0); i < 330; i++)
    eeDCCArray[9]->Add(eeDCCSectors[i]);

  int hLinesTCC[357][3] = {
      {6, 33, 34},  {6, 66, 67},   {9, 34, 35},  {9, 65, 66},  {12, 35, 37}, {12, 63, 65}, {13, 36, 37}, {13, 49, 51},
      {13, 63, 64}, {14, 36, 37},  {14, 46, 49}, {14, 51, 54}, {14, 63, 64}, {15, 20, 21}, {15, 37, 46}, {15, 54, 63},
      {15, 79, 80}, {16, 37, 38},  {16, 62, 63}, {17, 21, 23}, {17, 35, 38}, {17, 62, 65}, {17, 77, 79}, {18, 23, 25},
      {18, 34, 35}, {18, 65, 66},  {18, 75, 77}, {19, 31, 34}, {19, 38, 39}, {19, 61, 62}, {19, 66, 69}, {20, 29, 31},
      {20, 39, 40}, {20, 60, 61},  {20, 69, 71}, {21, 25, 27}, {21, 28, 29}, {21, 71, 72}, {21, 73, 75}, {22, 27, 28},
      {22, 72, 73}, {23, 26, 27},  {23, 73, 74}, {24, 25, 26}, {24, 27, 29}, {24, 71, 73}, {24, 74, 75}, {25, 8, 10},
      {25, 24, 25}, {25, 29, 30},  {25, 40, 41}, {25, 59, 60}, {25, 70, 71}, {25, 75, 76}, {25, 90, 92}, {26, 23, 24},
      {26, 41, 42}, {26, 58, 59},  {26, 76, 77}, {27, 10, 11}, {27, 22, 23}, {27, 30, 31}, {27, 69, 70}, {27, 77, 78},
      {27, 89, 90}, {28, 11, 14},  {28, 21, 22}, {28, 31, 32}, {28, 68, 69}, {28, 78, 79}, {28, 86, 89}, {29, 14, 15},
      {29, 20, 21}, {29, 42, 43},  {29, 57, 58}, {29, 79, 80}, {29, 85, 86}, {30, 15, 16}, {30, 32, 35}, {30, 65, 68},
      {30, 84, 85}, {31, 16, 18},  {31, 19, 20}, {31, 80, 81}, {31, 82, 84}, {32, 18, 19}, {32, 20, 21}, {32, 43, 44},
      {32, 56, 57}, {32, 79, 80},  {32, 81, 82}, {33, 21, 22}, {33, 35, 37}, {33, 44, 45}, {33, 55, 56}, {33, 63, 65},
      {33, 78, 79}, {34, 18, 19},  {34, 37, 38}, {34, 62, 63}, {34, 81, 82}, {35, 17, 18}, {35, 22, 25}, {35, 38, 40},
      {35, 75, 78}, {35, 82, 83},  {36, 25, 27}, {36, 73, 75}, {37, 16, 17}, {37, 27, 28}, {37, 61, 62}, {37, 72, 73},
      {37, 83, 84}, {38, 15, 16},  {38, 28, 30}, {38, 60, 61}, {38, 70, 72}, {38, 84, 85}, {39, 45, 55}, {40, 30, 35},
      {40, 40, 42}, {40, 43, 45},  {40, 55, 60}, {40, 65, 70}, {41, 0, 5},   {41, 42, 43}, {41, 57, 58}, {41, 95, 100},
      {42, 5, 11},  {42, 35, 37},  {42, 41, 42}, {42, 58, 59}, {42, 63, 65}, {42, 89, 95}, {43, 11, 14}, {43, 15, 17},
      {43, 39, 41}, {43, 59, 61},  {43, 83, 85}, {43, 86, 89}, {44, 14, 15}, {44, 17, 18}, {44, 37, 39}, {44, 61, 63},
      {44, 82, 83}, {44, 85, 86},  {45, 18, 25}, {45, 29, 30}, {45, 39, 40}, {45, 60, 61}, {45, 70, 71}, {45, 75, 82},
      {46, 14, 15}, {46, 25, 27},  {46, 28, 29}, {46, 32, 33}, {46, 67, 68}, {46, 71, 72}, {46, 73, 75}, {46, 85, 86},
      {47, 27, 28}, {47, 30, 32},  {47, 33, 34}, {47, 35, 37}, {47, 63, 65}, {47, 66, 67}, {47, 68, 70}, {47, 72, 73},
      {48, 34, 35}, {48, 37, 39},  {48, 61, 63}, {48, 65, 66}, {49, 13, 14}, {49, 86, 87}, {51, 13, 14}, {51, 86, 87},
      {52, 34, 35}, {52, 37, 39},  {52, 61, 63}, {52, 65, 66}, {53, 27, 28}, {53, 30, 32}, {53, 33, 34}, {53, 35, 37},
      {53, 63, 65}, {53, 66, 67},  {53, 68, 70}, {53, 72, 73}, {54, 14, 15}, {54, 25, 27}, {54, 28, 29}, {54, 32, 33},
      {54, 67, 68}, {54, 71, 72},  {54, 73, 75}, {54, 85, 86}, {55, 18, 25}, {55, 29, 30}, {55, 70, 71}, {55, 75, 82},
      {56, 14, 15}, {56, 17, 18},  {56, 37, 39}, {56, 61, 63}, {56, 82, 83}, {56, 85, 86}, {57, 11, 14}, {57, 15, 17},
      {57, 39, 40}, {57, 60, 61},  {57, 83, 85}, {57, 86, 89}, {58, 5, 11},  {58, 35, 37}, {58, 63, 65}, {58, 89, 95},
      {59, 0, 5},   {59, 95, 100}, {60, 0, 3},   {60, 30, 35}, {60, 40, 43}, {60, 58, 60}, {60, 65, 70}, {60, 97, 99},
      {62, 15, 16}, {62, 28, 30},  {62, 39, 40}, {62, 70, 72}, {62, 84, 85}, {63, 16, 17}, {63, 27, 28}, {63, 38, 39},
      {63, 72, 73}, {63, 83, 84},  {64, 25, 27}, {64, 73, 75}, {65, 3, 5},   {65, 17, 18}, {65, 22, 25}, {65, 60, 62},
      {65, 75, 78}, {65, 82, 83},  {65, 95, 97}, {66, 18, 19}, {66, 37, 38}, {66, 62, 63}, {66, 81, 82}, {67, 21, 22},
      {67, 35, 37}, {67, 44, 45},  {67, 55, 56}, {67, 63, 65}, {67, 78, 79}, {68, 18, 19}, {68, 20, 21}, {68, 43, 44},
      {68, 56, 57}, {68, 79, 80},  {68, 81, 82}, {69, 16, 18}, {69, 19, 20}, {69, 80, 81}, {69, 82, 84}, {70, 15, 16},
      {70, 32, 35}, {70, 65, 68},  {70, 84, 85}, {71, 14, 15}, {71, 20, 21}, {71, 42, 43}, {71, 57, 58}, {71, 79, 80},
      {71, 85, 86}, {72, 11, 14},  {72, 21, 22}, {72, 31, 32}, {72, 68, 69}, {72, 78, 79}, {72, 86, 89}, {73, 10, 11},
      {73, 22, 23}, {73, 30, 31},  {73, 69, 70}, {73, 77, 78}, {73, 89, 90}, {74, 23, 24}, {74, 41, 42}, {74, 58, 59},
      {74, 76, 77}, {75, 5, 10},   {75, 24, 25}, {75, 29, 30}, {75, 40, 41}, {75, 59, 60}, {75, 70, 71}, {75, 75, 76},
      {75, 90, 95}, {76, 25, 26},  {76, 27, 29}, {76, 71, 73}, {76, 74, 75}, {77, 26, 27}, {77, 73, 74}, {78, 27, 28},
      {78, 72, 73}, {79, 25, 27},  {79, 28, 29}, {79, 71, 72}, {79, 73, 75}, {80, 8, 13},  {80, 29, 31}, {80, 39, 40},
      {80, 60, 61}, {80, 69, 71},  {80, 87, 92}, {81, 31, 34}, {81, 38, 39}, {81, 61, 62}, {81, 66, 69}, {82, 23, 25},
      {82, 34, 35}, {82, 65, 66},  {82, 75, 77}, {83, 21, 23}, {83, 35, 38}, {83, 62, 65}, {83, 77, 79}, {84, 37, 38},
      {84, 62, 63}, {85, 13, 15},  {85, 20, 21}, {85, 37, 46}, {85, 54, 63}, {85, 79, 80}, {85, 85, 87}, {86, 36, 37},
      {86, 46, 49}, {86, 51, 54},  {86, 63, 64}, {87, 15, 20}, {87, 36, 37}, {87, 49, 51}, {87, 63, 64}, {87, 80, 85},
      {88, 35, 37}, {88, 63, 65},  {91, 34, 35}, {91, 65, 66}, {92, 20, 25}, {92, 75, 80}, {94, 33, 34}, {94, 66, 67},
      {95, 25, 35}, {95, 65, 75},  {97, 35, 40}, {97, 60, 65}, {100, 40, 60}};
  for (int i(0); i < 357; i++) {
    eemTCCSectors[i] = new TLine(100 - hLinesTCC[i][2], hLinesTCC[i][0], 100 - hLinesTCC[i][1], hLinesTCC[i][0]);
    eemTCCSectors[i]->SetLineStyle(2);
    eemTCCSectors[i]->SetLineWidth(2);
    eepTCCSectors[i] = new TLine(hLinesTCC[i][1], hLinesTCC[i][0], hLinesTCC[i][2], hLinesTCC[i][0]);
    eepTCCSectors[i]->SetLineStyle(2);
    eepTCCSectors[i]->SetLineWidth(2);
  }
  int vLinesTCC[350][3] = {
      {5, 41, 42},  {5, 58, 59},  {10, 25, 27},  {10, 73, 75}, {11, 27, 28}, {11, 42, 43}, {11, 57, 58}, {11, 72, 73},
      {13, 49, 51}, {14, 28, 29}, {14, 43, 44},  {14, 46, 49}, {14, 51, 54}, {14, 56, 57}, {14, 71, 72}, {15, 29, 30},
      {15, 38, 46}, {15, 54, 62}, {15, 70, 71},  {16, 30, 31}, {16, 37, 38}, {16, 62, 63}, {16, 69, 70}, {17, 35, 37},
      {17, 43, 44}, {17, 56, 57}, {17, 63, 65},  {18, 31, 32}, {18, 34, 35}, {18, 44, 45}, {18, 55, 56}, {18, 65, 66},
      {18, 68, 69}, {19, 31, 34}, {19, 66, 69},  {20, 13, 15}, {20, 29, 32}, {20, 68, 71}, {20, 85, 87}, {21, 15, 17},
      {21, 28, 29}, {21, 32, 33}, {21, 67, 68},  {21, 71, 72}, {21, 83, 85}, {22, 27, 28}, {22, 33, 35}, {22, 65, 67},
      {22, 72, 73}, {23, 17, 18}, {23, 26, 27},  {23, 73, 74}, {23, 82, 83}, {24, 25, 26}, {24, 74, 75}, {25, 18, 21},
      {25, 24, 25}, {25, 35, 36}, {25, 45, 46},  {25, 54, 55}, {25, 64, 65}, {25, 75, 76}, {25, 79, 82}, {26, 23, 24},
      {26, 76, 77}, {27, 21, 24}, {27, 36, 37},  {27, 46, 47}, {27, 53, 54}, {27, 63, 64}, {27, 76, 79}, {28, 21, 22},
      {28, 37, 38}, {28, 46, 47}, {28, 53, 54},  {28, 62, 63}, {28, 78, 79}, {29, 20, 21}, {29, 24, 25}, {29, 45, 46},
      {29, 54, 55}, {29, 75, 76}, {29, 79, 80},  {30, 25, 27}, {30, 38, 40}, {30, 45, 47}, {30, 53, 55}, {30, 60, 62},
      {30, 73, 75}, {31, 19, 20}, {31, 27, 28},  {31, 72, 73}, {31, 80, 81}, {32, 28, 30}, {32, 46, 47}, {32, 53, 54},
      {32, 70, 72}, {33, 5, 6},   {33, 46, 47},  {33, 53, 54}, {33, 94, 95}, {34, 6, 9},   {34, 18, 19}, {34, 47, 48},
      {34, 52, 53}, {34, 81, 82}, {34, 91, 94},  {35, 9, 12},  {35, 17, 18}, {35, 30, 33}, {35, 40, 42}, {35, 47, 48},
      {35, 52, 53}, {35, 58, 60}, {35, 67, 70},  {35, 82, 83}, {35, 88, 91}, {36, 13, 14}, {36, 86, 87}, {37, 12, 13},
      {37, 14, 15}, {37, 16, 17}, {37, 33, 34},  {37, 42, 44}, {37, 47, 48}, {37, 52, 53}, {37, 56, 58}, {37, 66, 67},
      {37, 83, 84}, {37, 85, 86}, {37, 87, 88},  {38, 15, 16}, {38, 17, 19}, {38, 34, 35}, {38, 63, 66}, {38, 81, 83},
      {38, 84, 85}, {39, 19, 20}, {39, 43, 44},  {39, 45, 55}, {39, 56, 57}, {39, 62, 63}, {39, 80, 81}, {40, 20, 25},
      {40, 35, 40}, {40, 43, 45}, {40, 55, 57},  {40, 60, 62}, {40, 75, 80}, {41, 25, 26}, {41, 42, 43}, {41, 57, 58},
      {41, 74, 75}, {42, 26, 29}, {42, 40, 42},  {42, 58, 59}, {42, 71, 74}, {43, 29, 32}, {43, 40, 41}, {43, 59, 60},
      {43, 68, 71}, {44, 32, 33}, {44, 67, 68},  {45, 33, 40}, {45, 60, 67}, {46, 14, 15}, {46, 85, 86}, {49, 13, 14},
      {49, 86, 87}, {50, 0, 39},  {50, 61, 100}, {51, 13, 14}, {51, 86, 87}, {54, 14, 15}, {54, 85, 86}, {55, 33, 39},
      {55, 61, 67}, {56, 32, 33}, {56, 67, 68},  {57, 29, 32}, {57, 68, 71}, {58, 26, 29}, {58, 59, 60}, {58, 71, 74},
      {59, 25, 26}, {59, 74, 75}, {60, 0, 3},    {60, 20, 25}, {60, 38, 40}, {60, 60, 65}, {60, 75, 80}, {60, 97, 99},
      {61, 19, 20}, {61, 37, 38}, {61, 43, 44},  {61, 56, 57}, {61, 80, 81}, {62, 15, 16}, {62, 17, 19}, {62, 34, 37},
      {62, 65, 66}, {62, 81, 83}, {62, 84, 85},  {63, 12, 13}, {63, 14, 15}, {63, 16, 17}, {63, 33, 34}, {63, 42, 44},
      {63, 47, 48}, {63, 52, 53}, {63, 56, 58},  {63, 66, 67}, {63, 83, 84}, {63, 85, 86}, {63, 87, 88}, {64, 13, 14},
      {64, 86, 87}, {65, 3, 5},   {65, 9, 12},   {65, 17, 18}, {65, 30, 33}, {65, 40, 42}, {65, 47, 48}, {65, 52, 53},
      {65, 58, 60}, {65, 67, 70}, {65, 82, 83},  {65, 88, 91}, {65, 95, 97}, {66, 6, 9},   {66, 18, 19}, {66, 47, 48},
      {66, 52, 53}, {66, 81, 82}, {66, 91, 94},  {67, 5, 6},   {67, 46, 47}, {67, 53, 54}, {67, 94, 95}, {68, 28, 30},
      {68, 46, 47}, {68, 53, 54}, {68, 70, 72},  {69, 19, 20}, {69, 27, 28}, {69, 72, 73}, {69, 80, 81}, {70, 25, 27},
      {70, 38, 40}, {70, 45, 47}, {70, 53, 55},  {70, 60, 62}, {70, 73, 75}, {71, 20, 21}, {71, 24, 25}, {71, 45, 46},
      {71, 54, 55}, {71, 75, 76}, {71, 79, 80},  {72, 21, 22}, {72, 37, 38}, {72, 46, 47}, {72, 53, 54}, {72, 62, 63},
      {72, 78, 79}, {73, 21, 24}, {73, 36, 37},  {73, 46, 47}, {73, 53, 54}, {73, 63, 64}, {73, 76, 79}, {74, 23, 24},
      {74, 76, 77}, {75, 5, 8},   {75, 18, 21},  {75, 24, 25}, {75, 35, 36}, {75, 45, 46}, {75, 54, 55}, {75, 64, 65},
      {75, 75, 76}, {75, 79, 82}, {75, 92, 95},  {76, 25, 26}, {76, 74, 75}, {77, 17, 18}, {77, 26, 27}, {77, 73, 74},
      {77, 82, 83}, {78, 27, 28}, {78, 33, 35},  {78, 65, 67}, {78, 72, 73}, {79, 15, 17}, {79, 28, 29}, {79, 32, 33},
      {79, 67, 68}, {79, 71, 72}, {79, 83, 85},  {80, 8, 15},  {80, 29, 32}, {80, 68, 71}, {80, 85, 92}, {81, 31, 34},
      {81, 66, 69}, {82, 31, 32}, {82, 34, 35},  {82, 44, 45}, {82, 55, 56}, {82, 65, 66}, {82, 68, 69}, {83, 35, 37},
      {83, 43, 44}, {83, 56, 57}, {83, 63, 65},  {84, 30, 31}, {84, 37, 38}, {84, 62, 63}, {84, 69, 70}, {85, 13, 15},
      {85, 29, 30}, {85, 38, 46}, {85, 54, 62},  {85, 70, 71}, {85, 85, 87}, {86, 28, 29}, {86, 43, 44}, {86, 46, 49},
      {86, 51, 54}, {86, 56, 57}, {86, 71, 72},  {87, 15, 20}, {87, 49, 51}, {87, 80, 85}, {89, 27, 28}, {89, 42, 43},
      {89, 57, 58}, {89, 72, 73}, {90, 25, 27},  {90, 73, 75}, {92, 20, 25}, {92, 75, 80}, {95, 25, 35}, {95, 41, 42},
      {95, 58, 59}, {95, 65, 75}, {97, 35, 40},  {97, 60, 65}, {99, 59, 60}, {100, 40, 59}};
  for (int i(0); i < 350; i++) {
    eemTCCSectors[i + 357] = new TLine(100 - vLinesTCC[i][0], vLinesTCC[i][1], 100 - vLinesTCC[i][0], vLinesTCC[i][2]);
    eemTCCSectors[i + 357]->SetLineStyle(2);
    eemTCCSectors[i + 357]->SetLineWidth(2);
    eepTCCSectors[i + 357] = new TLine(vLinesTCC[i][0], vLinesTCC[i][1], vLinesTCC[i][0], vLinesTCC[i][2]);
    eepTCCSectors[i + 357]->SetLineStyle(2);
    eepTCCSectors[i + 357]->SetLineWidth(2);
  }

  eemTCCArray[9] = new TObjArray(707);
  eepTCCArray[9] = new TObjArray(707);
  for (int i(0); i < 707; i++) {
    eemTCCArray[9]->Add(eemTCCSectors[i]);
    eepTCCArray[9]->Add(eepTCCSectors[i]);
  }

  int hLinesTT[1206][3] = {
      {3, 43, 57},  {4, 37, 38},   {4, 42, 43},  {4, 57, 58},  {4, 62, 63},   {5, 35, 42},  {5, 45, 47},
      {5, 53, 55},  {5, 58, 65},   {6, 32, 34},  {6, 42, 43},  {6, 49, 51},   {6, 57, 58},  {6, 66, 68},
      {7, 28, 32},  {7, 38, 39},   {7, 41, 42},  {7, 43, 45},  {7, 46, 49},   {7, 51, 54},  {7, 55, 57},
      {7, 58, 59},  {7, 61, 62},   {7, 68, 72},  {8, 26, 28},  {8, 35, 36},   {8, 37, 38},  {8, 39, 41},
      {8, 45, 46},  {8, 54, 55},   {8, 59, 61},  {8, 62, 63},  {8, 64, 65},   {8, 72, 74},  {9, 22, 23},
      {9, 34, 35},  {9, 36, 37},   {9, 63, 64},  {9, 65, 66},  {9, 77, 78},   {10, 23, 27}, {10, 30, 35},
      {10, 38, 40}, {10, 45, 47},  {10, 53, 55}, {10, 60, 62}, {10, 65, 70},  {10, 73, 77}, {11, 21, 23},
      {11, 27, 28}, {11, 31, 32},  {11, 42, 43}, {11, 45, 55}, {11, 57, 58},  {11, 68, 69}, {11, 72, 73},
      {11, 77, 79}, {12, 23, 24},  {12, 28, 30}, {12, 35, 45}, {12, 55, 65},  {12, 70, 72}, {12, 76, 77},
      {13, 20, 21}, {13, 24, 25},  {13, 27, 28}, {13, 32, 35}, {13, 36, 37},  {13, 46, 47}, {13, 49, 51},
      {13, 53, 54}, {13, 63, 64},  {13, 65, 68}, {13, 72, 73}, {13, 75, 76},  {13, 79, 80}, {14, 17, 18},
      {14, 25, 27}, {14, 28, 29},  {14, 32, 33}, {14, 36, 37}, {14, 43, 44},  {14, 46, 49}, {14, 51, 54},
      {14, 56, 57}, {14, 63, 64},  {14, 67, 68}, {14, 71, 72}, {14, 73, 75},  {14, 82, 83}, {15, 15, 17},
      {15, 20, 21}, {15, 24, 26},  {15, 29, 35}, {15, 37, 47}, {15, 53, 63},  {15, 65, 71}, {15, 74, 76},
      {15, 79, 80}, {15, 83, 85},  {16, 16, 17}, {16, 23, 24}, {16, 30, 31},  {16, 37, 38}, {16, 47, 48},
      {16, 52, 53}, {16, 62, 63},  {16, 69, 70}, {16, 76, 77}, {16, 84, 85},  {17, 14, 15}, {17, 21, 23},
      {17, 26, 27}, {17, 29, 30},  {17, 35, 38}, {17, 43, 44}, {17, 46, 47},  {17, 48, 52}, {17, 53, 54},
      {17, 56, 57}, {17, 62, 65},  {17, 70, 71}, {17, 73, 74}, {17, 77, 79},  {17, 82, 84}, {17, 85, 86},
      {18, 13, 14}, {18, 17, 20},  {18, 21, 22}, {18, 23, 25}, {18, 26, 29},  {18, 31, 32}, {18, 34, 35},
      {18, 44, 46}, {18, 54, 56},  {18, 65, 66}, {18, 68, 69}, {18, 71, 74},  {18, 75, 77}, {18, 78, 79},
      {18, 86, 87}, {19, 20, 21},  {19, 25, 26}, {19, 31, 34}, {19, 38, 39},  {19, 41, 44}, {19, 56, 59},
      {19, 61, 62}, {19, 66, 69},  {19, 74, 75}, {19, 79, 80}, {20, 13, 15},  {20, 19, 20}, {20, 24, 25},
      {20, 28, 32}, {20, 35, 42},  {20, 58, 65}, {20, 68, 72}, {20, 75, 76},  {20, 79, 82}, {20, 85, 87},
      {21, 11, 13}, {21, 15, 17},  {21, 18, 19}, {21, 20, 22}, {21, 23, 24},  {21, 25, 27}, {21, 28, 29},
      {21, 32, 33}, {21, 36, 37},  {21, 42, 43}, {21, 47, 48}, {21, 52, 53},  {21, 57, 58}, {21, 63, 64},
      {21, 67, 68}, {21, 71, 72},  {21, 73, 75}, {21, 76, 77}, {21, 81, 82},  {21, 83, 85}, {21, 87, 89},
      {22, 8, 9},   {22, 17, 18},  {22, 22, 23}, {22, 27, 28}, {22, 33, 35},  {22, 40, 60}, {22, 65, 67},
      {22, 72, 73}, {22, 77, 79},  {22, 82, 83}, {22, 91, 92}, {23, 9, 12},   {23, 16, 18}, {23, 21, 23},
      {23, 26, 27}, {23, 30, 32},  {23, 33, 34}, {23, 37, 40}, {23, 60, 63},  {23, 66, 67}, {23, 68, 70},
      {23, 73, 74}, {23, 75, 77},  {23, 78, 79}, {23, 82, 84}, {23, 88, 91},  {24, 12, 13}, {24, 15, 16},
      {24, 20, 21}, {24, 25, 26},  {24, 27, 29}, {24, 32, 33}, {24, 37, 38},  {24, 43, 44}, {24, 48, 49},
      {24, 51, 52}, {24, 56, 57},  {24, 62, 63}, {24, 67, 68}, {24, 71, 73},  {24, 74, 75}, {24, 79, 80},
      {24, 84, 85}, {24, 87, 88},  {25, 8, 10},  {25, 13, 15}, {25, 18, 21},  {25, 23, 25}, {25, 28, 30},
      {25, 33, 38}, {25, 40, 60},  {25, 62, 67}, {25, 70, 71}, {25, 74, 76},  {25, 79, 82}, {25, 85, 87},
      {25, 90, 92}, {26, 8, 10},   {26, 15, 17}, {26, 18, 19}, {26, 23, 24},  {26, 25, 26}, {26, 32, 33},
      {26, 41, 42}, {26, 58, 59},  {26, 67, 68}, {26, 73, 74}, {26, 76, 77},  {26, 81, 82}, {26, 83, 85},
      {26, 90, 92}, {27, 10, 11},  {27, 13, 14}, {27, 17, 18}, {27, 21, 24},  {27, 26, 28}, {27, 30, 35},
      {27, 36, 37}, {27, 38, 39},  {27, 46, 47}, {27, 48, 49}, {27, 51, 52},  {27, 53, 54}, {27, 61, 62},
      {27, 63, 64}, {27, 65, 70},  {27, 71, 73}, {27, 76, 79}, {27, 82, 83},  {27, 86, 87}, {27, 89, 90},
      {28, 7, 8},   {28, 11, 14},  {28, 18, 20}, {28, 21, 22}, {28, 31, 32},  {28, 36, 38}, {28, 39, 40},
      {28, 46, 48}, {28, 49, 51},  {28, 52, 54}, {28, 60, 61}, {28, 62, 64},  {28, 68, 69}, {28, 70, 75},
      {28, 78, 79}, {28, 80, 82},  {28, 86, 89}, {28, 92, 93}, {29, 14, 15},  {29, 17, 18}, {29, 20, 21},
      {29, 24, 27}, {29, 35, 36},  {29, 42, 43}, {29, 45, 46}, {29, 54, 55},  {29, 57, 58}, {29, 64, 65},
      {29, 75, 76}, {29, 79, 80},  {29, 82, 83}, {29, 85, 86}, {30, 5, 12},   {30, 15, 17}, {30, 20, 30},
      {30, 32, 36}, {30, 38, 47},  {30, 53, 62}, {30, 64, 68}, {30, 69, 80},  {30, 83, 85}, {30, 88, 95},
      {31, 10, 11}, {31, 16, 18},  {31, 19, 20}, {31, 27, 28}, {31, 30, 32},  {31, 33, 34}, {31, 36, 37},
      {31, 48, 49}, {31, 51, 52},  {31, 63, 64}, {31, 66, 67}, {31, 72, 73},  {31, 80, 81}, {31, 82, 84},
      {31, 89, 90}, {32, 6, 7},    {32, 11, 13}, {32, 14, 15}, {32, 18, 19},  {32, 20, 21}, {32, 23, 24},
      {32, 26, 27}, {32, 28, 30},  {32, 32, 33}, {32, 37, 39}, {32, 41, 42},  {32, 43, 44}, {32, 46, 47},
      {32, 48, 49}, {32, 51, 52},  {32, 53, 54}, {32, 56, 57}, {32, 58, 59},  {32, 61, 63}, {32, 66, 69},
      {32, 70, 72}, {32, 73, 74},  {32, 76, 77}, {32, 79, 80}, {32, 81, 82},  {32, 85, 86}, {32, 87, 89},
      {32, 93, 94}, {33, 5, 6},    {33, 13, 14}, {33, 21, 22}, {33, 23, 26},  {33, 31, 32}, {33, 35, 37},
      {33, 38, 39}, {33, 40, 41},  {33, 42, 43}, {33, 44, 56}, {33, 57, 58},  {33, 59, 60}, {33, 61, 62},
      {33, 63, 65}, {33, 68, 69},  {33, 74, 77}, {33, 78, 79}, {33, 86, 87},  {33, 94, 95}, {34, 6, 9},
      {34, 18, 19}, {34, 22, 23},  {34, 30, 31}, {34, 32, 34}, {34, 37, 38},  {34, 39, 40}, {34, 41, 42},
      {34, 47, 48}, {34, 52, 53},  {34, 58, 59}, {34, 60, 61}, {34, 62, 63},  {34, 65, 66}, {34, 69, 70},
      {34, 77, 78}, {34, 81, 82},  {34, 91, 94}, {35, 8, 13},  {35, 15, 25},  {35, 27, 36}, {35, 38, 42},
      {35, 45, 55}, {35, 58, 62},  {35, 65, 73}, {35, 75, 85}, {35, 87, 92},  {36, 8, 9},   {36, 13, 14},
      {36, 20, 21}, {36, 25, 27},  {36, 28, 29}, {36, 30, 31}, {36, 36, 37},  {36, 44, 45}, {36, 55, 56},
      {36, 64, 65}, {36, 69, 70},  {36, 71, 72}, {36, 73, 75}, {36, 79, 80},  {36, 86, 87}, {36, 91, 92},
      {37, 4, 5},   {37, 8, 9},    {37, 12, 13}, {37, 14, 15}, {37, 16, 17},  {37, 21, 23}, {37, 24, 25},
      {37, 27, 28}, {37, 31, 34},  {37, 37, 39}, {37, 40, 41}, {37, 42, 44},  {37, 47, 48}, {37, 52, 53},
      {37, 56, 58}, {37, 59, 60},  {37, 61, 64}, {37, 66, 69}, {37, 72, 73},  {37, 75, 76}, {37, 77, 79},
      {37, 83, 84}, {37, 85, 86},  {37, 87, 88}, {37, 91, 92}, {37, 95, 96},  {38, 3, 4},   {38, 5, 10},
      {38, 15, 16}, {38, 17, 19},  {38, 23, 24}, {38, 25, 30}, {38, 32, 33},  {38, 34, 37}, {38, 41, 42},
      {38, 58, 59}, {38, 60, 61},  {38, 65, 66}, {38, 67, 68}, {38, 70, 75},  {38, 76, 77}, {38, 81, 83},
      {38, 84, 85}, {38, 90, 95},  {38, 96, 97}, {39, 7, 8},   {39, 19, 20},  {39, 27, 28}, {39, 30, 32},
      {39, 33, 34}, {39, 37, 38},  {39, 43, 44}, {39, 45, 55}, {39, 56, 57},  {39, 63, 65}, {39, 66, 67},
      {39, 68, 70}, {39, 72, 73},  {39, 80, 81}, {39, 92, 93}, {40, 10, 15},  {40, 20, 35}, {40, 37, 42},
      {40, 43, 45}, {40, 55, 80},  {40, 85, 90}, {41, 0, 5},   {41, 7, 8},    {41, 15, 20}, {41, 25, 26},
      {41, 30, 32}, {41, 33, 34},  {41, 37, 38}, {41, 42, 43}, {41, 57, 58},  {41, 62, 63}, {41, 66, 67},
      {41, 68, 70}, {41, 74, 75},  {41, 80, 85}, {41, 92, 93}, {41, 95, 100}, {42, 4, 11},  {42, 20, 21},
      {42, 26, 29}, {42, 32, 34},  {42, 35, 38}, {42, 41, 42}, {42, 58, 60},  {42, 62, 65}, {42, 66, 68},
      {42, 71, 74}, {42, 79, 80},  {42, 89, 96}, {43, 3, 4},   {43, 6, 7},    {43, 11, 14}, {43, 15, 17},
      {43, 21, 24}, {43, 29, 33},  {43, 39, 41}, {43, 59, 61}, {43, 67, 71},  {43, 76, 79}, {43, 83, 85},
      {43, 86, 89}, {43, 93, 94},  {43, 96, 97}, {44, 14, 15}, {44, 17, 19},  {44, 24, 30}, {44, 32, 33},
      {44, 36, 39}, {44, 61, 64},  {44, 67, 68}, {44, 70, 76}, {44, 81, 83},  {44, 85, 86}, {45, 0, 5},
      {45, 7, 8},   {45, 10, 12},  {45, 18, 25}, {45, 29, 40}, {45, 60, 71},  {45, 75, 82}, {45, 88, 90},
      {45, 92, 93}, {45, 95, 100}, {46, 7, 8},   {46, 11, 13}, {46, 14, 15},  {46, 17, 18}, {46, 25, 27},
      {46, 28, 29}, {46, 32, 33},  {46, 67, 68}, {46, 71, 72}, {46, 73, 75},  {46, 82, 83}, {46, 85, 86},
      {46, 87, 89}, {46, 92, 93},  {47, 5, 10},  {47, 13, 14}, {47, 15, 21},  {47, 27, 28}, {47, 30, 32},
      {47, 33, 34}, {47, 35, 37},  {47, 63, 65}, {47, 66, 67}, {47, 68, 70},  {47, 72, 73}, {47, 79, 85},
      {47, 86, 87}, {47, 90, 95},  {48, 16, 17}, {48, 21, 24}, {48, 25, 31},  {48, 32, 33}, {48, 34, 35},
      {48, 37, 39}, {48, 61, 63},  {48, 65, 66}, {48, 67, 68}, {48, 69, 75},  {48, 76, 79}, {48, 83, 84},
      {49, 6, 7},   {49, 13, 14},  {49, 24, 25}, {49, 27, 28}, {49, 31, 32},  {49, 68, 69}, {49, 72, 73},
      {49, 75, 76}, {49, 86, 87},  {49, 93, 94}, {50, 0, 39},  {50, 61, 100}, {51, 6, 7},   {51, 13, 14},
      {51, 24, 25}, {51, 27, 28},  {51, 31, 32}, {51, 68, 69}, {51, 72, 73},  {51, 75, 76}, {51, 86, 87},
      {51, 93, 94}, {52, 16, 17},  {52, 21, 24}, {52, 25, 31}, {52, 32, 33},  {52, 34, 35}, {52, 37, 39},
      {52, 61, 63}, {52, 65, 66},  {52, 67, 68}, {52, 69, 75}, {52, 76, 79},  {52, 83, 84}, {53, 5, 10},
      {53, 13, 14}, {53, 15, 21},  {53, 27, 28}, {53, 30, 32}, {53, 33, 34},  {53, 35, 37}, {53, 63, 65},
      {53, 66, 67}, {53, 68, 70},  {53, 72, 73}, {53, 79, 85}, {53, 86, 87},  {53, 90, 95}, {54, 7, 8},
      {54, 11, 13}, {54, 14, 15},  {54, 17, 18}, {54, 25, 27}, {54, 28, 29},  {54, 32, 33}, {54, 67, 68},
      {54, 71, 72}, {54, 73, 75},  {54, 82, 83}, {54, 85, 86}, {54, 87, 89},  {54, 92, 93}, {55, 0, 5},
      {55, 7, 8},   {55, 10, 12},  {55, 18, 25}, {55, 29, 39}, {55, 61, 71},  {55, 75, 82}, {55, 88, 90},
      {55, 92, 93}, {55, 95, 100}, {56, 14, 15}, {56, 17, 19}, {56, 24, 30},  {56, 32, 33}, {56, 36, 39},
      {56, 61, 64}, {56, 67, 68},  {56, 70, 76}, {56, 81, 83}, {56, 85, 86},  {57, 3, 4},   {57, 6, 7},
      {57, 11, 14}, {57, 15, 17},  {57, 21, 24}, {57, 29, 33}, {57, 39, 40},  {57, 60, 61}, {57, 67, 71},
      {57, 76, 79}, {57, 83, 85},  {57, 86, 89}, {57, 93, 94}, {57, 96, 97},  {58, 4, 11},  {58, 20, 21},
      {58, 26, 29}, {58, 32, 34},  {58, 35, 38}, {58, 40, 41}, {58, 62, 65},  {58, 66, 68}, {58, 71, 74},
      {58, 79, 80}, {58, 89, 96},  {59, 0, 5},   {59, 7, 8},   {59, 15, 20},  {59, 25, 26}, {59, 30, 32},
      {59, 33, 34}, {59, 37, 38},  {59, 62, 63}, {59, 66, 67}, {59, 68, 70},  {59, 74, 75}, {59, 80, 85},
      {59, 92, 93}, {59, 95, 100}, {60, 0, 3},   {60, 10, 15}, {60, 20, 43},  {60, 58, 63}, {60, 65, 80},
      {60, 85, 90}, {60, 97, 99},  {61, 7, 8},   {61, 19, 20}, {61, 27, 28},  {61, 30, 32}, {61, 33, 34},
      {61, 35, 37}, {61, 43, 44},  {61, 56, 57}, {61, 62, 63}, {61, 66, 67},  {61, 68, 70}, {61, 72, 73},
      {61, 80, 81}, {61, 92, 93},  {62, 3, 4},   {62, 5, 10},  {62, 15, 16},  {62, 17, 19}, {62, 23, 24},
      {62, 25, 30}, {62, 32, 33},  {62, 34, 35}, {62, 39, 40}, {62, 41, 42},  {62, 58, 59}, {62, 63, 66},
      {62, 67, 68}, {62, 70, 75},  {62, 76, 77}, {62, 81, 83}, {62, 84, 85},  {62, 90, 95}, {62, 96, 97},
      {63, 4, 5},   {63, 8, 9},    {63, 12, 13}, {63, 14, 15}, {63, 16, 17},  {63, 21, 23}, {63, 24, 25},
      {63, 27, 28}, {63, 31, 34},  {63, 36, 39}, {63, 40, 41}, {63, 42, 44},  {63, 47, 48}, {63, 52, 53},
      {63, 56, 58}, {63, 59, 60},  {63, 61, 63}, {63, 66, 69}, {63, 72, 73},  {63, 75, 76}, {63, 77, 79},
      {63, 83, 84}, {63, 85, 86},  {63, 87, 88}, {63, 91, 92}, {63, 95, 96},  {64, 8, 9},   {64, 13, 14},
      {64, 20, 21}, {64, 25, 27},  {64, 28, 29}, {64, 30, 31}, {64, 35, 36},  {64, 44, 45}, {64, 55, 56},
      {64, 63, 64}, {64, 69, 70},  {64, 71, 72}, {64, 73, 75}, {64, 79, 80},  {64, 86, 87}, {64, 91, 92},
      {65, 3, 5},   {65, 8, 13},   {65, 15, 25}, {65, 27, 35}, {65, 38, 42},  {65, 45, 55}, {65, 58, 62},
      {65, 64, 73}, {65, 75, 85},  {65, 87, 92}, {65, 95, 97}, {66, 6, 9},    {66, 18, 19}, {66, 22, 23},
      {66, 30, 31}, {66, 34, 35},  {66, 37, 38}, {66, 39, 40}, {66, 41, 42},  {66, 47, 48}, {66, 52, 53},
      {66, 58, 59}, {66, 60, 61},  {66, 62, 63}, {66, 66, 68}, {66, 69, 70},  {66, 77, 78}, {66, 81, 82},
      {66, 91, 94}, {67, 5, 6},    {67, 13, 14}, {67, 21, 22}, {67, 23, 26},  {67, 31, 32}, {67, 35, 37},
      {67, 38, 39}, {67, 40, 41},  {67, 42, 43}, {67, 44, 56}, {67, 57, 58},  {67, 59, 60}, {67, 61, 62},
      {67, 63, 65}, {67, 68, 69},  {67, 74, 77}, {67, 78, 79}, {67, 86, 87},  {67, 94, 95}, {68, 6, 7},
      {68, 11, 13}, {68, 14, 15},  {68, 18, 19}, {68, 20, 21}, {68, 23, 24},  {68, 26, 27}, {68, 28, 30},
      {68, 31, 34}, {68, 37, 39},  {68, 41, 42}, {68, 43, 44}, {68, 46, 47},  {68, 48, 49}, {68, 51, 52},
      {68, 53, 54}, {68, 56, 57},  {68, 58, 59}, {68, 61, 63}, {68, 67, 68},  {68, 70, 72}, {68, 73, 74},
      {68, 76, 77}, {68, 79, 80},  {68, 81, 82}, {68, 85, 86}, {68, 87, 89},  {68, 93, 94}, {69, 10, 11},
      {69, 16, 18}, {69, 19, 20},  {69, 27, 28}, {69, 33, 34}, {69, 36, 37},  {69, 48, 49}, {69, 51, 52},
      {69, 63, 64}, {69, 66, 67},  {69, 68, 70}, {69, 72, 73}, {69, 80, 81},  {69, 82, 84}, {69, 89, 90},
      {70, 5, 12},  {70, 15, 17},  {70, 20, 31}, {70, 32, 36}, {70, 38, 47},  {70, 53, 62}, {70, 64, 68},
      {70, 70, 80}, {70, 83, 85},  {70, 88, 95}, {71, 14, 15}, {71, 17, 18},  {71, 20, 21}, {71, 24, 25},
      {71, 35, 36}, {71, 42, 43},  {71, 45, 46}, {71, 54, 55}, {71, 57, 58},  {71, 64, 65}, {71, 73, 76},
      {71, 79, 80}, {71, 82, 83},  {71, 85, 86}, {72, 7, 8},   {72, 11, 14},  {72, 18, 20}, {72, 21, 22},
      {72, 25, 30}, {72, 31, 32},  {72, 36, 38}, {72, 39, 40}, {72, 46, 48},  {72, 49, 51}, {72, 52, 54},
      {72, 60, 61}, {72, 62, 64},  {72, 68, 69}, {72, 78, 79}, {72, 80, 82},  {72, 86, 89}, {72, 92, 93},
      {73, 10, 11}, {73, 13, 14},  {73, 17, 18}, {73, 21, 24}, {73, 27, 29},  {73, 30, 35}, {73, 36, 37},
      {73, 38, 39}, {73, 46, 47},  {73, 48, 49}, {73, 51, 52}, {73, 53, 54},  {73, 61, 62}, {73, 63, 64},
      {73, 65, 70}, {73, 72, 74},  {73, 76, 79}, {73, 82, 83}, {73, 86, 87},  {73, 89, 90}, {74, 8, 10},
      {74, 15, 17}, {74, 18, 19},  {74, 23, 24}, {74, 26, 27}, {74, 32, 33},  {74, 41, 42}, {74, 58, 59},
      {74, 67, 68}, {74, 74, 75},  {74, 76, 77}, {74, 81, 82}, {74, 83, 85},  {74, 90, 92}, {75, 5, 10},
      {75, 13, 15}, {75, 18, 21},  {75, 24, 26}, {75, 29, 30}, {75, 33, 38},  {75, 40, 60}, {75, 62, 67},
      {75, 70, 72}, {75, 75, 77},  {75, 79, 82}, {75, 85, 87}, {75, 90, 95},  {76, 12, 13}, {76, 15, 16},
      {76, 20, 21}, {76, 25, 26},  {76, 27, 29}, {76, 32, 33}, {76, 37, 38},  {76, 43, 44}, {76, 48, 49},
      {76, 51, 52}, {76, 56, 57},  {76, 62, 63}, {76, 67, 68}, {76, 71, 73},  {76, 74, 75}, {76, 79, 80},
      {76, 84, 85}, {76, 87, 88},  {77, 9, 12},  {77, 16, 18}, {77, 21, 22},  {77, 23, 25}, {77, 26, 27},
      {77, 30, 32}, {77, 33, 34},  {77, 37, 40}, {77, 60, 63}, {77, 66, 67},  {77, 68, 70}, {77, 73, 74},
      {77, 77, 79}, {77, 82, 84},  {77, 88, 91}, {78, 8, 9},   {78, 17, 18},  {78, 21, 23}, {78, 27, 28},
      {78, 33, 35}, {78, 40, 60},  {78, 65, 67}, {78, 72, 73}, {78, 77, 78},  {78, 82, 83}, {78, 91, 92},
      {79, 11, 13}, {79, 15, 17},  {79, 18, 19}, {79, 23, 24}, {79, 25, 27},  {79, 28, 29}, {79, 32, 33},
      {79, 36, 37}, {79, 42, 43},  {79, 47, 48}, {79, 52, 53}, {79, 57, 58},  {79, 63, 64}, {79, 67, 68},
      {79, 71, 72}, {79, 73, 75},  {79, 76, 77}, {79, 78, 80}, {79, 81, 82},  {79, 83, 85}, {79, 87, 89},
      {80, 8, 15},  {80, 18, 21},  {80, 24, 25}, {80, 28, 32}, {80, 35, 42},  {80, 58, 65}, {80, 68, 72},
      {80, 75, 76}, {80, 80, 81},  {80, 85, 92}, {81, 20, 21}, {81, 25, 26},  {81, 31, 34}, {81, 38, 39},
      {81, 41, 44}, {81, 56, 59},  {81, 61, 62}, {81, 66, 69}, {81, 74, 75},  {81, 79, 80}, {81, 85, 86},
      {82, 13, 14}, {82, 21, 22},  {82, 23, 25}, {82, 26, 29}, {82, 31, 32},  {82, 34, 35}, {82, 44, 46},
      {82, 54, 56}, {82, 65, 66},  {82, 68, 69}, {82, 71, 74}, {82, 75, 77},  {82, 78, 79}, {82, 80, 83},
      {82, 85, 87}, {83, 14, 15},  {83, 16, 18}, {83, 21, 23}, {83, 26, 27},  {83, 29, 30}, {83, 35, 38},
      {83, 43, 44}, {83, 46, 47},  {83, 48, 52}, {83, 53, 54}, {83, 56, 57},  {83, 62, 65}, {83, 70, 71},
      {83, 73, 74}, {83, 77, 79},  {83, 85, 86}, {84, 15, 16}, {84, 23, 24},  {84, 30, 31}, {84, 37, 38},
      {84, 47, 48}, {84, 52, 53},  {84, 62, 63}, {84, 69, 70}, {84, 76, 77},  {84, 83, 84}, {84, 85, 86},
      {85, 13, 17}, {85, 20, 21},  {85, 24, 26}, {85, 29, 35}, {85, 37, 47},  {85, 53, 63}, {85, 65, 71},
      {85, 74, 76}, {85, 79, 80},  {85, 81, 82}, {85, 83, 87}, {86, 17, 18},  {86, 25, 27}, {86, 28, 29},
      {86, 32, 33}, {86, 36, 37},  {86, 43, 44}, {86, 46, 49}, {86, 51, 54},  {86, 56, 57}, {86, 63, 64},
      {86, 67, 68}, {86, 71, 72},  {86, 73, 75}, {86, 81, 83}, {86, 84, 85},  {87, 15, 21}, {87, 24, 25},
      {87, 27, 28}, {87, 32, 35},  {87, 36, 37}, {87, 46, 47}, {87, 49, 51},  {87, 53, 54}, {87, 63, 64},
      {87, 65, 68}, {87, 72, 73},  {87, 75, 76}, {87, 79, 85}, {88, 23, 24},  {88, 28, 30}, {88, 35, 45},
      {88, 55, 65}, {88, 70, 72},  {88, 76, 77}, {89, 21, 23}, {89, 27, 28},  {89, 31, 32}, {89, 42, 43},
      {89, 45, 55}, {89, 57, 58},  {89, 68, 69}, {89, 72, 73}, {89, 77, 79},  {90, 23, 27}, {90, 30, 35},
      {90, 38, 40}, {90, 45, 47},  {90, 53, 55}, {90, 60, 62}, {90, 65, 70},  {90, 73, 77}, {91, 22, 23},
      {91, 34, 35}, {91, 36, 37},  {91, 63, 64}, {91, 65, 66}, {91, 77, 78},  {92, 20, 25}, {92, 26, 28},
      {92, 35, 36}, {92, 37, 38},  {92, 39, 41}, {92, 45, 46}, {92, 54, 55},  {92, 59, 61}, {92, 62, 63},
      {92, 64, 65}, {92, 72, 74},  {92, 75, 80}, {93, 28, 32}, {93, 38, 39},  {93, 41, 42}, {93, 43, 45},
      {93, 46, 49}, {93, 51, 54},  {93, 55, 57}, {93, 58, 59}, {93, 61, 62},  {93, 68, 72}, {94, 32, 34},
      {94, 42, 43}, {94, 49, 51},  {94, 57, 58}, {94, 66, 68}, {95, 25, 42},  {95, 45, 47}, {95, 53, 55},
      {95, 58, 75}, {96, 37, 38},  {96, 42, 43}, {96, 57, 58}, {96, 62, 63},  {97, 35, 40}, {97, 43, 57},
      {97, 60, 65}, {100, 40, 60}};
  for (int i(0); i < 1206; i++) {
    eemTTSectors[i] = new TLine(100 - hLinesTT[i][2], hLinesTT[i][0], 100 - hLinesTT[i][1], hLinesTT[i][0]);
    eemTTSectors[i]->SetLineStyle(3);
    eepTTSectors[i] = new TLine(hLinesTT[i][1], hLinesTT[i][0], hLinesTT[i][2], hLinesTT[i][0]);
    eepTTSectors[i]->SetLineStyle(3);
  }
  int vLinesTT[1207][3] = {
      {3, 43, 57},  {4, 37, 38},   {4, 42, 43},  {4, 57, 58},  {4, 62, 63},   {5, 35, 42},  {5, 45, 47},
      {5, 53, 55},  {5, 58, 65},   {6, 32, 34},  {6, 42, 43},  {6, 49, 51},   {6, 57, 58},  {6, 66, 68},
      {7, 28, 32},  {7, 38, 39},   {7, 41, 42},  {7, 43, 45},  {7, 46, 49},   {7, 51, 54},  {7, 55, 57},
      {7, 58, 59},  {7, 61, 62},   {7, 68, 72},  {8, 26, 28},  {8, 35, 36},   {8, 37, 38},  {8, 39, 41},
      {8, 45, 46},  {8, 54, 55},   {8, 59, 61},  {8, 62, 63},  {8, 64, 65},   {8, 72, 74},  {9, 22, 23},
      {9, 34, 35},  {9, 36, 37},   {9, 63, 64},  {9, 65, 66},  {9, 77, 78},   {10, 23, 27}, {10, 30, 35},
      {10, 38, 40}, {10, 45, 47},  {10, 53, 55}, {10, 60, 62}, {10, 65, 70},  {10, 73, 77}, {11, 21, 23},
      {11, 27, 28}, {11, 31, 32},  {11, 42, 43}, {11, 45, 55}, {11, 57, 58},  {11, 68, 69}, {11, 72, 73},
      {11, 77, 79}, {12, 23, 24},  {12, 28, 30}, {12, 35, 45}, {12, 55, 65},  {12, 70, 72}, {12, 76, 77},
      {13, 20, 21}, {13, 24, 25},  {13, 27, 28}, {13, 32, 35}, {13, 36, 37},  {13, 46, 47}, {13, 49, 51},
      {13, 53, 54}, {13, 63, 64},  {13, 65, 68}, {13, 72, 73}, {13, 75, 76},  {13, 79, 80}, {14, 17, 18},
      {14, 25, 27}, {14, 28, 29},  {14, 32, 33}, {14, 36, 37}, {14, 43, 44},  {14, 46, 49}, {14, 51, 54},
      {14, 56, 57}, {14, 63, 64},  {14, 67, 68}, {14, 71, 72}, {14, 73, 75},  {14, 82, 83}, {15, 15, 17},
      {15, 20, 21}, {15, 24, 26},  {15, 29, 35}, {15, 37, 47}, {15, 53, 63},  {15, 65, 71}, {15, 74, 76},
      {15, 79, 80}, {15, 83, 85},  {16, 15, 16}, {16, 23, 24}, {16, 30, 31},  {16, 37, 38}, {16, 47, 48},
      {16, 52, 53}, {16, 62, 63},  {16, 69, 70}, {16, 76, 77}, {16, 83, 84},  {17, 14, 15}, {17, 16, 18},
      {17, 21, 23}, {17, 26, 27},  {17, 29, 30}, {17, 35, 38}, {17, 43, 44},  {17, 46, 47}, {17, 48, 52},
      {17, 53, 54}, {17, 56, 57},  {17, 62, 65}, {17, 70, 71}, {17, 73, 74},  {17, 77, 79}, {17, 85, 86},
      {18, 13, 14}, {18, 21, 22},  {18, 23, 25}, {18, 26, 29}, {18, 31, 32},  {18, 34, 35}, {18, 44, 46},
      {18, 54, 56}, {18, 65, 66},  {18, 68, 69}, {18, 71, 74}, {18, 75, 77},  {18, 78, 79}, {18, 80, 83},
      {18, 86, 87}, {19, 20, 21},  {19, 25, 26}, {19, 31, 34}, {19, 38, 39},  {19, 41, 44}, {19, 56, 59},
      {19, 61, 62}, {19, 66, 69},  {19, 74, 75}, {19, 79, 80}, {20, 13, 15},  {20, 18, 21}, {20, 24, 25},
      {20, 28, 32}, {20, 35, 42},  {20, 58, 65}, {20, 68, 72}, {20, 75, 76},  {20, 80, 81}, {20, 85, 87},
      {21, 11, 13}, {21, 15, 17},  {21, 18, 19}, {21, 23, 24}, {21, 25, 27},  {21, 28, 29}, {21, 32, 33},
      {21, 36, 37}, {21, 42, 43},  {21, 47, 48}, {21, 52, 53}, {21, 57, 58},  {21, 63, 64}, {21, 67, 68},
      {21, 71, 72}, {21, 73, 75},  {21, 76, 77}, {21, 78, 80}, {21, 81, 82},  {21, 83, 85}, {21, 87, 89},
      {22, 8, 9},   {22, 17, 18},  {22, 21, 23}, {22, 27, 28}, {22, 33, 35},  {22, 40, 60}, {22, 65, 67},
      {22, 72, 73}, {22, 77, 78},  {22, 82, 83}, {22, 91, 92}, {23, 9, 12},   {23, 16, 18}, {23, 21, 22},
      {23, 23, 25}, {23, 26, 27},  {23, 30, 32}, {23, 33, 34}, {23, 37, 40},  {23, 60, 63}, {23, 66, 67},
      {23, 68, 70}, {23, 73, 74},  {23, 77, 79}, {23, 82, 84}, {23, 88, 91},  {24, 12, 13}, {24, 15, 16},
      {24, 20, 21}, {24, 25, 26},  {24, 27, 29}, {24, 32, 33}, {24, 37, 38},  {24, 43, 44}, {24, 48, 49},
      {24, 51, 52}, {24, 56, 57},  {24, 62, 63}, {24, 67, 68}, {24, 71, 73},  {24, 74, 75}, {24, 79, 80},
      {24, 84, 85}, {24, 87, 88},  {25, 8, 10},  {25, 13, 15}, {25, 18, 21},  {25, 24, 26}, {25, 29, 30},
      {25, 33, 38}, {25, 40, 60},  {25, 62, 67}, {25, 70, 72}, {25, 75, 77},  {25, 79, 82}, {25, 85, 87},
      {25, 90, 92}, {26, 8, 10},   {26, 15, 17}, {26, 18, 19}, {26, 23, 24},  {26, 26, 27}, {26, 32, 33},
      {26, 41, 42}, {26, 58, 59},  {26, 67, 68}, {26, 74, 75}, {26, 76, 77},  {26, 81, 82}, {26, 83, 85},
      {26, 90, 92}, {27, 10, 11},  {27, 13, 14}, {27, 17, 18}, {27, 21, 24},  {27, 27, 29}, {27, 30, 35},
      {27, 36, 37}, {27, 38, 39},  {27, 46, 47}, {27, 48, 49}, {27, 51, 52},  {27, 53, 54}, {27, 61, 62},
      {27, 63, 64}, {27, 65, 70},  {27, 72, 74}, {27, 76, 79}, {27, 82, 83},  {27, 86, 87}, {27, 89, 90},
      {28, 7, 8},   {28, 11, 14},  {28, 18, 20}, {28, 21, 22}, {28, 25, 30},  {28, 31, 32}, {28, 36, 38},
      {28, 39, 40}, {28, 46, 48},  {28, 49, 51}, {28, 52, 54}, {28, 60, 61},  {28, 62, 64}, {28, 68, 69},
      {28, 78, 79}, {28, 80, 82},  {28, 86, 89}, {28, 92, 93}, {29, 14, 15},  {29, 17, 18}, {29, 20, 21},
      {29, 24, 25}, {29, 35, 36},  {29, 42, 43}, {29, 45, 46}, {29, 54, 55},  {29, 57, 58}, {29, 64, 65},
      {29, 73, 76}, {29, 79, 80},  {29, 82, 83}, {29, 85, 86}, {30, 5, 12},   {30, 15, 17}, {30, 20, 31},
      {30, 32, 36}, {30, 38, 47},  {30, 53, 62}, {30, 64, 68}, {30, 70, 80},  {30, 83, 85}, {30, 88, 95},
      {31, 10, 11}, {31, 16, 18},  {31, 19, 20}, {31, 27, 28}, {31, 33, 34},  {31, 36, 37}, {31, 48, 49},
      {31, 51, 52}, {31, 63, 64},  {31, 66, 67}, {31, 68, 70}, {31, 72, 73},  {31, 80, 81}, {31, 82, 84},
      {31, 89, 90}, {32, 6, 7},    {32, 11, 13}, {32, 14, 15}, {32, 18, 19},  {32, 20, 21}, {32, 23, 24},
      {32, 26, 27}, {32, 28, 30},  {32, 31, 34}, {32, 37, 39}, {32, 41, 42},  {32, 43, 44}, {32, 46, 47},
      {32, 48, 49}, {32, 51, 52},  {32, 53, 54}, {32, 56, 57}, {32, 58, 59},  {32, 61, 63}, {32, 67, 68},
      {32, 70, 72}, {32, 73, 74},  {32, 76, 77}, {32, 79, 80}, {32, 81, 82},  {32, 85, 86}, {32, 87, 89},
      {32, 93, 94}, {33, 5, 6},    {33, 13, 14}, {33, 21, 22}, {33, 23, 26},  {33, 31, 32}, {33, 35, 37},
      {33, 38, 39}, {33, 40, 41},  {33, 42, 43}, {33, 44, 56}, {33, 57, 58},  {33, 59, 60}, {33, 61, 62},
      {33, 63, 65}, {33, 68, 69},  {33, 74, 77}, {33, 78, 79}, {33, 86, 87},  {33, 94, 95}, {34, 6, 9},
      {34, 18, 19}, {34, 22, 23},  {34, 30, 31}, {34, 34, 35}, {34, 37, 38},  {34, 39, 40}, {34, 41, 42},
      {34, 47, 48}, {34, 52, 53},  {34, 58, 59}, {34, 60, 61}, {34, 62, 63},  {34, 66, 68}, {34, 69, 70},
      {34, 77, 78}, {34, 81, 82},  {34, 91, 94}, {35, 8, 13},  {35, 15, 25},  {35, 27, 35}, {35, 38, 42},
      {35, 45, 55}, {35, 58, 62},  {35, 64, 73}, {35, 75, 85}, {35, 87, 92},  {36, 8, 9},   {36, 13, 14},
      {36, 20, 21}, {36, 25, 27},  {36, 28, 29}, {36, 30, 31}, {36, 35, 36},  {36, 44, 45}, {36, 55, 56},
      {36, 63, 64}, {36, 69, 70},  {36, 71, 72}, {36, 73, 75}, {36, 79, 80},  {36, 86, 87}, {36, 91, 92},
      {37, 4, 5},   {37, 8, 9},    {37, 12, 13}, {37, 14, 15}, {37, 16, 17},  {37, 21, 23}, {37, 24, 25},
      {37, 27, 28}, {37, 31, 34},  {37, 36, 39}, {37, 40, 41}, {37, 42, 44},  {37, 47, 48}, {37, 52, 53},
      {37, 56, 58}, {37, 59, 60},  {37, 61, 63}, {37, 66, 69}, {37, 72, 73},  {37, 75, 76}, {37, 77, 79},
      {37, 83, 84}, {37, 85, 86},  {37, 87, 88}, {37, 91, 92}, {37, 95, 96},  {38, 3, 4},   {38, 5, 10},
      {38, 15, 16}, {38, 17, 19},  {38, 23, 24}, {38, 25, 30}, {38, 32, 33},  {38, 34, 35}, {38, 39, 40},
      {38, 41, 42}, {38, 58, 59},  {38, 63, 66}, {38, 67, 68}, {38, 70, 75},  {38, 76, 77}, {38, 81, 83},
      {38, 84, 85}, {38, 90, 95},  {38, 96, 97}, {39, 7, 8},   {39, 19, 20},  {39, 27, 28}, {39, 30, 32},
      {39, 33, 34}, {39, 35, 37},  {39, 43, 44}, {39, 45, 55}, {39, 56, 57},  {39, 62, 63}, {39, 66, 67},
      {39, 68, 70}, {39, 72, 73},  {39, 80, 81}, {39, 92, 93}, {40, 10, 15},  {40, 20, 45}, {40, 55, 57},
      {40, 58, 63}, {40, 65, 80},  {40, 85, 90}, {41, 0, 5},   {41, 7, 8},    {41, 15, 20}, {41, 25, 26},
      {41, 30, 32}, {41, 33, 34},  {41, 37, 38}, {41, 42, 43}, {41, 57, 58},  {41, 62, 63}, {41, 66, 67},
      {41, 68, 70}, {41, 74, 75},  {41, 80, 85}, {41, 92, 93}, {41, 95, 100}, {42, 4, 11},  {42, 20, 21},
      {42, 26, 29}, {42, 32, 34},  {42, 35, 38}, {42, 40, 42}, {42, 58, 59},  {42, 62, 65}, {42, 66, 68},
      {42, 71, 74}, {42, 79, 80},  {42, 89, 96}, {43, 3, 4},   {43, 6, 7},    {43, 11, 14}, {43, 15, 17},
      {43, 21, 24}, {43, 29, 33},  {43, 39, 41}, {43, 59, 61}, {43, 67, 71},  {43, 76, 79}, {43, 83, 85},
      {43, 86, 89}, {43, 93, 94},  {43, 96, 97}, {44, 14, 15}, {44, 17, 19},  {44, 24, 30}, {44, 32, 33},
      {44, 36, 39}, {44, 61, 64},  {44, 67, 68}, {44, 70, 76}, {44, 81, 83},  {44, 85, 86}, {45, 0, 5},
      {45, 7, 8},   {45, 10, 12},  {45, 18, 25}, {45, 29, 40}, {45, 60, 71},  {45, 75, 82}, {45, 88, 90},
      {45, 92, 93}, {45, 95, 100}, {46, 7, 8},   {46, 11, 13}, {46, 14, 15},  {46, 17, 18}, {46, 25, 27},
      {46, 28, 29}, {46, 32, 33},  {46, 67, 68}, {46, 71, 72}, {46, 73, 75},  {46, 82, 83}, {46, 85, 86},
      {46, 87, 89}, {46, 92, 93},  {47, 5, 10},  {47, 13, 14}, {47, 15, 21},  {47, 27, 28}, {47, 30, 32},
      {47, 33, 34}, {47, 35, 37},  {47, 63, 65}, {47, 66, 67}, {47, 68, 70},  {47, 72, 73}, {47, 79, 85},
      {47, 86, 87}, {47, 90, 95},  {48, 16, 17}, {48, 21, 24}, {48, 25, 31},  {48, 32, 33}, {48, 34, 35},
      {48, 37, 39}, {48, 61, 63},  {48, 65, 66}, {48, 67, 68}, {48, 69, 75},  {48, 76, 79}, {48, 83, 84},
      {49, 6, 7},   {49, 13, 14},  {49, 24, 25}, {49, 27, 28}, {49, 31, 32},  {49, 68, 69}, {49, 72, 73},
      {49, 75, 76}, {49, 86, 87},  {49, 93, 94}, {50, 0, 39},  {50, 61, 100}, {51, 6, 7},   {51, 13, 14},
      {51, 24, 25}, {51, 27, 28},  {51, 31, 32}, {51, 68, 69}, {51, 72, 73},  {51, 75, 76}, {51, 86, 87},
      {51, 93, 94}, {52, 16, 17},  {52, 21, 24}, {52, 25, 31}, {52, 32, 33},  {52, 34, 35}, {52, 37, 39},
      {52, 61, 63}, {52, 65, 66},  {52, 67, 68}, {52, 69, 75}, {52, 76, 79},  {52, 83, 84}, {53, 5, 10},
      {53, 13, 14}, {53, 15, 21},  {53, 27, 28}, {53, 30, 32}, {53, 33, 34},  {53, 35, 37}, {53, 63, 65},
      {53, 66, 67}, {53, 68, 70},  {53, 72, 73}, {53, 79, 85}, {53, 86, 87},  {53, 90, 95}, {54, 7, 8},
      {54, 11, 13}, {54, 14, 15},  {54, 17, 18}, {54, 25, 27}, {54, 28, 29},  {54, 32, 33}, {54, 67, 68},
      {54, 71, 72}, {54, 73, 75},  {54, 82, 83}, {54, 85, 86}, {54, 87, 89},  {54, 92, 93}, {55, 0, 5},
      {55, 7, 8},   {55, 10, 12},  {55, 18, 25}, {55, 29, 39}, {55, 61, 71},  {55, 75, 82}, {55, 88, 90},
      {55, 92, 93}, {55, 95, 100}, {56, 14, 15}, {56, 17, 19}, {56, 24, 30},  {56, 32, 33}, {56, 36, 39},
      {56, 61, 64}, {56, 67, 68},  {56, 70, 76}, {56, 81, 83}, {56, 85, 86},  {57, 3, 4},   {57, 6, 7},
      {57, 11, 14}, {57, 15, 17},  {57, 21, 24}, {57, 29, 33}, {57, 39, 40},  {57, 60, 61}, {57, 67, 71},
      {57, 76, 79}, {57, 83, 85},  {57, 86, 89}, {57, 93, 94}, {57, 96, 97},  {58, 4, 11},  {58, 20, 21},
      {58, 26, 29}, {58, 32, 34},  {58, 35, 38}, {58, 59, 60}, {58, 62, 65},  {58, 66, 68}, {58, 71, 74},
      {58, 79, 80}, {58, 89, 96},  {59, 0, 5},   {59, 7, 8},   {59, 15, 20},  {59, 25, 26}, {59, 30, 32},
      {59, 33, 34}, {59, 37, 38},  {59, 62, 63}, {59, 66, 67}, {59, 68, 70},  {59, 74, 75}, {59, 80, 85},
      {59, 92, 93}, {59, 95, 100}, {60, 0, 3},   {60, 10, 15}, {60, 20, 35},  {60, 37, 42}, {60, 57, 80},
      {60, 85, 90}, {60, 97, 99},  {61, 7, 8},   {61, 19, 20}, {61, 27, 28},  {61, 30, 32}, {61, 33, 34},
      {61, 37, 38}, {61, 43, 44},  {61, 56, 57}, {61, 63, 65}, {61, 66, 67},  {61, 68, 70}, {61, 72, 73},
      {61, 80, 81}, {61, 92, 93},  {62, 3, 4},   {62, 5, 10},  {62, 15, 16},  {62, 17, 19}, {62, 23, 24},
      {62, 25, 30}, {62, 32, 33},  {62, 34, 37}, {62, 41, 42}, {62, 58, 59},  {62, 60, 61}, {62, 65, 66},
      {62, 67, 68}, {62, 70, 75},  {62, 76, 77}, {62, 81, 83}, {62, 84, 85},  {62, 90, 95}, {62, 96, 97},
      {63, 4, 5},   {63, 8, 9},    {63, 12, 13}, {63, 14, 15}, {63, 16, 17},  {63, 21, 23}, {63, 24, 25},
      {63, 27, 28}, {63, 31, 34},  {63, 37, 39}, {63, 40, 41}, {63, 42, 44},  {63, 47, 48}, {63, 52, 53},
      {63, 56, 58}, {63, 59, 60},  {63, 61, 64}, {63, 66, 69}, {63, 72, 73},  {63, 75, 76}, {63, 77, 79},
      {63, 83, 84}, {63, 85, 86},  {63, 87, 88}, {63, 91, 92}, {63, 95, 96},  {64, 8, 9},   {64, 13, 14},
      {64, 20, 21}, {64, 25, 27},  {64, 28, 29}, {64, 30, 31}, {64, 36, 37},  {64, 44, 45}, {64, 55, 56},
      {64, 64, 65}, {64, 69, 70},  {64, 71, 72}, {64, 73, 75}, {64, 79, 80},  {64, 86, 87}, {64, 91, 92},
      {65, 3, 5},   {65, 8, 13},   {65, 15, 25}, {65, 27, 36}, {65, 38, 42},  {65, 45, 55}, {65, 58, 62},
      {65, 65, 73}, {65, 75, 85},  {65, 87, 92}, {65, 95, 97}, {66, 6, 9},    {66, 18, 19}, {66, 22, 23},
      {66, 30, 31}, {66, 32, 34},  {66, 37, 38}, {66, 39, 40}, {66, 41, 42},  {66, 47, 48}, {66, 52, 53},
      {66, 58, 59}, {66, 60, 61},  {66, 62, 63}, {66, 65, 66}, {66, 69, 70},  {66, 77, 78}, {66, 81, 82},
      {66, 91, 94}, {67, 5, 6},    {67, 13, 14}, {67, 21, 22}, {67, 23, 26},  {67, 31, 32}, {67, 35, 37},
      {67, 38, 39}, {67, 40, 41},  {67, 42, 43}, {67, 44, 56}, {67, 57, 58},  {67, 59, 60}, {67, 61, 62},
      {67, 63, 65}, {67, 68, 69},  {67, 74, 77}, {67, 78, 79}, {67, 86, 87},  {67, 94, 95}, {68, 6, 7},
      {68, 11, 13}, {68, 14, 15},  {68, 18, 19}, {68, 20, 21}, {68, 23, 24},  {68, 26, 27}, {68, 28, 30},
      {68, 32, 33}, {68, 37, 39},  {68, 41, 42}, {68, 43, 44}, {68, 46, 47},  {68, 48, 49}, {68, 51, 52},
      {68, 53, 54}, {68, 56, 57},  {68, 58, 59}, {68, 61, 63}, {68, 66, 69},  {68, 70, 72}, {68, 73, 74},
      {68, 76, 77}, {68, 79, 80},  {68, 81, 82}, {68, 85, 86}, {68, 87, 89},  {68, 93, 94}, {69, 10, 11},
      {69, 16, 18}, {69, 19, 20},  {69, 27, 28}, {69, 30, 32}, {69, 33, 34},  {69, 36, 37}, {69, 48, 49},
      {69, 51, 52}, {69, 63, 64},  {69, 66, 67}, {69, 72, 73}, {69, 80, 81},  {69, 82, 84}, {69, 89, 90},
      {70, 5, 12},  {70, 15, 17},  {70, 20, 30}, {70, 32, 36}, {70, 38, 47},  {70, 53, 62}, {70, 64, 68},
      {70, 69, 80}, {70, 83, 85},  {70, 88, 95}, {71, 14, 15}, {71, 17, 18},  {71, 20, 21}, {71, 24, 27},
      {71, 35, 36}, {71, 42, 43},  {71, 45, 46}, {71, 54, 55}, {71, 57, 58},  {71, 64, 65}, {71, 75, 76},
      {71, 79, 80}, {71, 82, 83},  {71, 85, 86}, {72, 7, 8},   {72, 11, 14},  {72, 18, 20}, {72, 21, 22},
      {72, 31, 32}, {72, 36, 38},  {72, 39, 40}, {72, 46, 48}, {72, 49, 51},  {72, 52, 54}, {72, 60, 61},
      {72, 62, 64}, {72, 68, 69},  {72, 70, 75}, {72, 78, 79}, {72, 80, 82},  {72, 86, 89}, {72, 92, 93},
      {73, 10, 11}, {73, 13, 14},  {73, 17, 18}, {73, 21, 24}, {73, 26, 28},  {73, 30, 35}, {73, 36, 37},
      {73, 38, 39}, {73, 46, 47},  {73, 48, 49}, {73, 51, 52}, {73, 53, 54},  {73, 61, 62}, {73, 63, 64},
      {73, 65, 70}, {73, 71, 73},  {73, 76, 79}, {73, 82, 83}, {73, 86, 87},  {73, 89, 90}, {74, 8, 10},
      {74, 15, 17}, {74, 18, 19},  {74, 23, 24}, {74, 25, 26}, {74, 32, 33},  {74, 41, 42}, {74, 58, 59},
      {74, 67, 68}, {74, 73, 74},  {74, 76, 77}, {74, 81, 82}, {74, 83, 85},  {74, 90, 92}, {75, 5, 10},
      {75, 13, 15}, {75, 18, 21},  {75, 23, 25}, {75, 28, 30}, {75, 33, 38},  {75, 40, 60}, {75, 62, 67},
      {75, 70, 71}, {75, 74, 76},  {75, 79, 82}, {75, 85, 87}, {75, 90, 95},  {76, 12, 13}, {76, 15, 16},
      {76, 20, 21}, {76, 25, 26},  {76, 27, 29}, {76, 32, 33}, {76, 37, 38},  {76, 43, 44}, {76, 48, 49},
      {76, 51, 52}, {76, 56, 57},  {76, 62, 63}, {76, 67, 68}, {76, 71, 73},  {76, 74, 75}, {76, 79, 80},
      {76, 84, 85}, {76, 87, 88},  {77, 9, 12},  {77, 16, 18}, {77, 21, 23},  {77, 26, 27}, {77, 30, 32},
      {77, 33, 34}, {77, 37, 40},  {77, 60, 63}, {77, 66, 67}, {77, 68, 70},  {77, 73, 74}, {77, 75, 77},
      {77, 78, 79}, {77, 82, 84},  {77, 88, 91}, {78, 8, 9},   {78, 17, 18},  {78, 22, 23}, {78, 27, 28},
      {78, 33, 35}, {78, 40, 60},  {78, 65, 67}, {78, 72, 73}, {78, 77, 79},  {78, 82, 83}, {78, 91, 92},
      {79, 11, 13}, {79, 15, 17},  {79, 18, 19}, {79, 20, 22}, {79, 23, 24},  {79, 25, 27}, {79, 28, 29},
      {79, 32, 33}, {79, 36, 37},  {79, 42, 43}, {79, 47, 48}, {79, 52, 53},  {79, 57, 58}, {79, 63, 64},
      {79, 67, 68}, {79, 71, 72},  {79, 73, 75}, {79, 76, 77}, {79, 81, 82},  {79, 83, 85}, {79, 87, 89},
      {80, 8, 15},  {80, 19, 20},  {80, 24, 25}, {80, 28, 32}, {80, 35, 42},  {80, 58, 65}, {80, 68, 72},
      {80, 75, 76}, {80, 79, 82},  {80, 85, 92}, {81, 20, 21}, {81, 25, 26},  {81, 31, 34}, {81, 38, 39},
      {81, 41, 44}, {81, 56, 59},  {81, 61, 62}, {81, 66, 69}, {81, 74, 75},  {81, 79, 80}, {81, 85, 86},
      {82, 13, 14}, {82, 17, 20},  {82, 21, 22}, {82, 23, 25}, {82, 26, 29},  {82, 31, 32}, {82, 34, 35},
      {82, 44, 46}, {82, 54, 56},  {82, 65, 66}, {82, 68, 69}, {82, 71, 74},  {82, 75, 77}, {82, 78, 79},
      {82, 85, 87}, {83, 14, 15},  {83, 21, 23}, {83, 26, 27}, {83, 29, 30},  {83, 35, 38}, {83, 43, 44},
      {83, 46, 47}, {83, 48, 52},  {83, 53, 54}, {83, 56, 57}, {83, 62, 65},  {83, 70, 71}, {83, 73, 74},
      {83, 77, 79}, {83, 82, 84},  {83, 85, 86}, {84, 16, 17}, {84, 23, 24},  {84, 30, 31}, {84, 37, 38},
      {84, 47, 48}, {84, 52, 53},  {84, 62, 63}, {84, 69, 70}, {84, 76, 77},  {84, 84, 86}, {85, 13, 17},
      {85, 20, 21}, {85, 24, 26},  {85, 29, 35}, {85, 37, 47}, {85, 53, 63},  {85, 65, 71}, {85, 74, 76},
      {85, 79, 80}, {85, 81, 82},  {85, 83, 84}, {85, 85, 87}, {86, 17, 18},  {86, 25, 27}, {86, 28, 29},
      {86, 32, 33}, {86, 36, 37},  {86, 43, 44}, {86, 46, 49}, {86, 51, 54},  {86, 56, 57}, {86, 63, 64},
      {86, 67, 68}, {86, 71, 72},  {86, 73, 75}, {86, 81, 83}, {86, 84, 85},  {87, 15, 21}, {87, 24, 25},
      {87, 27, 28}, {87, 32, 35},  {87, 36, 37}, {87, 46, 47}, {87, 49, 51},  {87, 53, 54}, {87, 63, 64},
      {87, 65, 68}, {87, 72, 73},  {87, 75, 76}, {87, 79, 85}, {88, 23, 24},  {88, 28, 30}, {88, 35, 45},
      {88, 55, 65}, {88, 70, 72},  {88, 76, 77}, {89, 21, 23}, {89, 27, 28},  {89, 31, 32}, {89, 42, 43},
      {89, 45, 55}, {89, 57, 58},  {89, 68, 69}, {89, 72, 73}, {89, 77, 79},  {90, 23, 27}, {90, 30, 35},
      {90, 38, 40}, {90, 45, 47},  {90, 53, 55}, {90, 60, 62}, {90, 65, 70},  {90, 73, 77}, {91, 22, 23},
      {91, 34, 35}, {91, 36, 37},  {91, 63, 64}, {91, 65, 66}, {91, 77, 78},  {92, 20, 25}, {92, 26, 28},
      {92, 35, 36}, {92, 37, 38},  {92, 39, 41}, {92, 45, 46}, {92, 54, 55},  {92, 59, 61}, {92, 62, 63},
      {92, 64, 65}, {92, 72, 74},  {92, 75, 80}, {93, 28, 32}, {93, 38, 39},  {93, 41, 42}, {93, 43, 45},
      {93, 46, 49}, {93, 51, 54},  {93, 55, 57}, {93, 58, 59}, {93, 61, 62},  {93, 68, 72}, {94, 32, 34},
      {94, 42, 43}, {94, 49, 51},  {94, 57, 58}, {94, 66, 68}, {95, 25, 42},  {95, 45, 47}, {95, 53, 55},
      {95, 58, 75}, {96, 37, 38},  {96, 42, 43}, {96, 57, 58}, {96, 62, 63},  {97, 35, 40}, {97, 43, 57},
      {97, 60, 65}, {99, 59, 60},  {100, 40, 59}};
  for (int i(0); i < 1207; i++) {
    eemTTSectors[i + 1206] = new TLine(100 - vLinesTT[i][0], vLinesTT[i][1], 100 - vLinesTT[i][0], vLinesTT[i][2]);
    eemTTSectors[i + 1206]->SetLineStyle(3);
    eepTTSectors[i + 1206] = new TLine(vLinesTT[i][0], vLinesTT[i][1], vLinesTT[i][0], vLinesTT[i][2]);
    eepTTSectors[i + 1206]->SetLineStyle(3);
  }

  std::vector<int> indices[9];

  int di0[] = {14,  16,  19,  20,  23,  24,  25,  29,  30,  31,  33,  35,  37,  39,  41,  44,  45,
               47,  49,  51,  54,  55,  56,  59,  60,  62,  124, 125, 126, 127, 128, 129, 130, 131,
               132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148,
               149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164};
  int di1[] = {39,  41,  44,  45,  47,  49,  51,  54,  55,  56,  59,  60,  62,  65,  66,  68,  71,  72,  74,  76,  78,
               123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143,
               144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164};
  int di2[] = {43,  44,  45,  46,  47,  48,  49,  50,  51,  53,  54,  55,  56,  58,  59,  62,  65,  68,  71,
               72,  74,  76,  78,  79,  80,  81,  109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120,
               121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139,
               140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157};
  int di3[] = {42,  43,  44,  46,  47,  48,  49,  50,  51,  52,  53,  54,  56,  58,  59,  61,  64,  67,  69,
               70,  73,  75,  77,  79,  80,  81,  89,  90,  91,  92,  93,  94,  95,  96,  97,  98,  99,  100,
               101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119,
               120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137};
  int di4[] = {38,  40,  42,  43,  46,  48,  50,  52,  53,  56,  57,  58,  61,  63,  64,  67,  69,  70,  73,  75,  77,
               82,  83,  84,  85,  86,  87,  88,  89,  90,  91,  92,  93,  94,  95,  96,  97,  98,  99,  100, 101, 102,
               103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123};
  int di5[] = {13,  15,  17,  18,  21,  22,  25,  26,  27,  28,  32,  34,  36,  38,  40,  42,  43,
               46,  48,  50,  52,  53,  56,  57,  58,  61,  82,  83,  84,  85,  86,  87,  88,  89,
               90,  91,  92,  93,  94,  95,  96,  97,  98,  99,  100, 101, 102, 103, 104, 105, 106,
               107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122};
  int di6[] = {0,   1,   3,   5,   7,   9,   10,  13,  15,  17,  18,  21,  22,  25,  26,  27,
               28,  32,  34,  36,  38,  40,  82,  83,  84,  85,  86,  87,  88,  89,  90,  91,
               92,  93,  94,  95,  96,  97,  98,  99,  100, 101, 102, 103, 104, 105, 106, 107,
               108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123};
  int di7[] = {0,   1,   2,   3,   4,   5,   6,   10,  11,  18,  19,  22,  23,  25,  27,  28,  29,  30,  32,  33,
               34,  35,  36,  37,  38,  39,  98,  99,  100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111,
               112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131,
               132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148};
  int di8[] = {0,   2,   4,   6,   8,   11,  12,  14,  16,  19,  20,  23,  24,  25,  29,  30,
               31,  33,  35,  37,  39,  41,  123, 124, 125, 126, 127, 128, 129, 130, 131, 132,
               133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148,
               149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164};

  indices[0].assign(di0, di0 + sizeof(di0) / sizeof(int));
  indices[1].assign(di1, di1 + sizeof(di1) / sizeof(int));
  indices[2].assign(di2, di2 + sizeof(di2) / sizeof(int));
  indices[3].assign(di3, di3 + sizeof(di3) / sizeof(int));
  indices[4].assign(di4, di4 + sizeof(di4) / sizeof(int));
  indices[5].assign(di5, di5 + sizeof(di5) / sizeof(int));
  indices[6].assign(di6, di6 + sizeof(di6) / sizeof(int));
  indices[7].assign(di7, di7 + sizeof(di7) / sizeof(int));
  indices[8].assign(di8, di8 + sizeof(di8) / sizeof(int));
  for (int i(0); i < 9; i++) {
    eeDCCArray[i] = new TObjArray(indices[i].size());
    for (unsigned iInd(0); iInd < indices[i].size(); iInd++)
      eeDCCArray[i]->Add(eeDCCSectors[indices[i][iInd]]);
  }

  int ti0[] = {33,  34,  37,  38,  40,  42,  45,  46,  51,  52,  53,  54,  57,  58,  62,  63,  64,  68,  69,  70,  74,
               75,  76,  79,  80,  83,  84,  88,  89,  90,  94,  95,  96,  99,  100, 104, 105, 107, 110, 111, 112, 115,
               116, 117, 118, 122, 123, 126, 127, 131, 132, 133, 137, 138, 139, 143, 144, 145, 149, 150, 151, 156, 157,
               158, 159, 164, 165, 166, 167, 170, 171, 173, 175, 178, 179, 184, 185, 186, 187, 192, 193, 194, 195, 198,
               199, 203, 204, 205, 209, 210, 211, 214, 215, 217, 221, 222, 223, 227, 228, 232, 233, 235, 239, 240, 241,
               242, 245, 246, 250, 251, 252, 256, 257, 258, 261, 262, 265, 266, 532, 533, 534, 535, 536, 537, 538, 539,
               540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560,
               561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581,
               582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602,
               603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623,
               624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644,
               645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665,
               666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686,
               687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706};
  int ti1[] = {149, 150, 151, 156, 157, 158, 159, 164, 165, 166, 167, 170, 171, 173, 175, 178, 179, 184, 185, 186, 187,
               192, 193, 194, 195, 198, 199, 203, 204, 205, 209, 210, 211, 214, 215, 217, 221, 222, 223, 227, 228, 232,
               233, 235, 239, 240, 241, 242, 245, 246, 250, 251, 252, 256, 257, 258, 261, 262, 265, 266, 270, 271, 272,
               276, 277, 278, 282, 283, 284, 287, 288, 293, 294, 295, 296, 299, 300, 302, 304, 307, 308, 312, 313, 314,
               317, 318, 321, 322, 325, 326, 328, 332, 333, 334, 337, 338, 341, 342, 343, 345, 347, 349, 351, 353, 526,
               527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547,
               548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568,
               569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589,
               590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610,
               611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631,
               632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652,
               653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673,
               674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694,
               695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706};
  int ti2[] = {198, 199, 203, 204, 205, 208, 209, 210, 211, 214, 215, 220, 221, 222, 226, 227, 228, 232, 233, 235, 239,
               240, 241, 245, 246, 249, 250, 251, 252, 255, 256, 257, 258, 261, 262, 265, 266, 269, 270, 271, 272, 276,
               277, 278, 282, 283, 284, 286, 287, 288, 292, 293, 294, 295, 296, 299, 300, 302, 304, 307, 308, 311, 312,
               313, 314, 317, 318, 321, 322, 325, 326, 328, 331, 332, 333, 334, 336, 337, 338, 341, 342, 343, 345, 347,
               349, 351, 353, 354, 355, 356, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514,
               515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535,
               536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556,
               557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577,
               578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598,
               599, 600, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619,
               620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640,
               641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661,
               662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682,
               683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696};
  int ti3[] = {196, 197, 200, 201, 202, 206, 207, 208, 209, 212, 213, 219, 220, 221, 224, 225, 226, 229, 230, 231, 234,
               237, 238, 239, 243, 244, 247, 248, 249, 250, 253, 254, 255, 256, 259, 260, 263, 264, 267, 268, 269, 270,
               273, 274, 275, 279, 280, 281, 285, 286, 287, 289, 290, 291, 292, 293, 297, 298, 301, 303, 305, 306, 309,
               310, 311, 312, 315, 316, 319, 320, 323, 324, 327, 329, 330, 331, 332, 335, 336, 337, 339, 340, 341, 344,
               346, 348, 350, 352, 354, 355, 356, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372,
               373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393,
               394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414,
               415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435,
               436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456,
               457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477,
               478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498,
               499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519,
               520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540,
               541, 542, 543, 544, 545, 546, 547, 548};
  int ti4[] = {146, 147, 148, 152, 153, 154, 155, 160, 161, 162, 163, 168, 169, 172, 174, 176, 177, 180, 181, 182,
               183, 188, 189, 190, 191, 196, 197, 200, 201, 202, 206, 207, 208, 212, 213, 216, 218, 219, 220, 224,
               225, 226, 229, 230, 231, 234, 236, 237, 238, 243, 244, 247, 248, 249, 253, 254, 255, 259, 260, 263,
               264, 267, 268, 269, 273, 274, 275, 279, 280, 281, 285, 286, 289, 290, 291, 292, 297, 298, 301, 303,
               305, 306, 309, 310, 311, 315, 316, 319, 320, 323, 324, 327, 329, 330, 331, 335, 336, 339, 340, 341,
               344, 346, 348, 350, 352, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371,
               372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391,
               392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411,
               412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431,
               432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451,
               452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471,
               472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491,
               492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511,
               512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527};
  int ti5[] = {31,  32,  35,  36,  39,  41,  43,  44,  47,  48,  49,  50,  55,  56,  59,  60,  61,  65,  66,  67,  71,
               72,  73,  77,  78,  81,  82,  85,  86,  87,  91,  92,  93,  97,  98,  101, 102, 103, 106, 108, 109, 113,
               114, 118, 119, 120, 121, 124, 125, 128, 129, 130, 134, 135, 136, 140, 141, 142, 146, 147, 148, 152, 153,
               154, 155, 160, 161, 162, 163, 168, 169, 172, 174, 176, 177, 180, 181, 182, 183, 188, 189, 190, 191, 196,
               197, 200, 201, 202, 206, 207, 208, 212, 213, 216, 218, 219, 220, 224, 225, 226, 229, 230, 231, 234, 236,
               237, 238, 243, 244, 247, 248, 249, 253, 254, 255, 259, 260, 263, 264, 357, 358, 359, 360, 361, 362, 363,
               364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384,
               385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405,
               406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426,
               427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447,
               448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468,
               469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489,
               490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510,
               511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521};
  int ti6[] = {0,   2,   4,   6,   7,   9,   10,  13,  14,  17,  19,  20,  23,  24,  27,  28,  31,  32,  35,  36,
               39,  41,  43,  44,  47,  48,  49,  50,  55,  56,  59,  60,  61,  65,  66,  67,  71,  72,  73,  77,
               78,  81,  82,  85,  86,  87,  91,  92,  93,  97,  98,  101, 102, 103, 106, 108, 109, 113, 114, 118,
               119, 120, 121, 124, 125, 128, 129, 130, 134, 135, 136, 140, 141, 142, 146, 147, 148, 152, 153, 154,
               155, 160, 161, 162, 163, 168, 169, 172, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368,
               369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388,
               389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408,
               409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428,
               429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448,
               449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468,
               469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488,
               489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508,
               509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527};
  int ti7[] = {0,   1,   2,   3,   4,   5,   6,   7,   8,   9,   10,  11,  12,  14,  15,  17,  18,  20,  21,  23,  24,
               25,  26,  27,  28,  29,  30,  31,  32,  33,  34,  35,  36,  37,  38,  39,  40,  41,  42,  43,  44,  45,
               46,  48,  49,  50,  51,  52,  53,  56,  57,  61,  62,  67,  68,  73,  74,  78,  79,  87,  88,  92,  93,
               94,  95,  98,  99,  102, 103, 104, 106, 107, 109, 110, 111, 114, 115, 116, 118, 119, 120, 121, 122, 123,
               125, 126, 129, 130, 131, 132, 136, 137, 142, 143, 146, 147, 148, 149, 150, 151, 412, 413, 414, 415, 416,
               417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437,
               438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458,
               459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479,
               480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500,
               501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521,
               522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542,
               543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563,
               564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584,
               585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605,
               606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626,
               627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639};
  int ti8[] = {1,   3,   5,   7,   8,   11,  12,  15,  16,  18,  21,  22,  25,  26,  29,  30,  33,  34,  37,  38,  40,
               42,  45,  46,  51,  52,  53,  54,  57,  58,  62,  63,  64,  68,  69,  70,  74,  75,  76,  79,  80,  83,
               84,  88,  89,  90,  94,  95,  96,  99,  100, 104, 105, 107, 110, 111, 112, 115, 116, 117, 118, 122, 123,
               126, 127, 131, 132, 133, 137, 138, 139, 143, 144, 145, 149, 150, 151, 156, 157, 158, 159, 164, 165, 166,
               167, 170, 171, 173, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542,
               543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563,
               564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584,
               585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605,
               606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626,
               627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647,
               648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668,
               669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689,
               690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706};

  indices[0].assign(ti0, ti0 + sizeof(ti0) / sizeof(int));
  indices[1].assign(ti1, ti1 + sizeof(ti1) / sizeof(int));
  indices[2].assign(ti2, ti2 + sizeof(ti2) / sizeof(int));
  indices[3].assign(ti3, ti3 + sizeof(ti3) / sizeof(int));
  indices[4].assign(ti4, ti4 + sizeof(ti4) / sizeof(int));
  indices[5].assign(ti5, ti5 + sizeof(ti5) / sizeof(int));
  indices[6].assign(ti6, ti6 + sizeof(ti6) / sizeof(int));
  indices[7].assign(ti7, ti7 + sizeof(ti7) / sizeof(int));
  indices[8].assign(ti8, ti8 + sizeof(ti8) / sizeof(int));
  for (int i(0); i < 9; i++) {
    eemTCCArray[i] = new TObjArray(indices[i].size());
    eepTCCArray[i] = new TObjArray(indices[i].size());
    for (unsigned iInd(0); iInd < indices[i].size(); iInd++) {
      eemTCCArray[i]->Add(eemTCCSectors[indices[i][iInd]]);
      eepTCCArray[i]->Add(eepTCCSectors[indices[i][iInd]]);
    }
  }

  int tti0[] = {
      156,  157,  158,  159,  160,  173,  174,  175,  176,  177,  178,  179,  180,  181,  187,  188,  189,  190,  191,
      192,  200,  201,  202,  203,  204,  205,  206,  207,  218,  219,  220,  221,  222,  223,  224,  225,  232,  233,
      234,  235,  236,  237,  238,  246,  247,  248,  249,  250,  251,  252,  265,  266,  267,  268,  269,  270,  271,
      272,  283,  284,  285,  286,  287,  288,  289,  290,  298,  299,  300,  301,  302,  303,  304,  310,  311,  312,
      313,  314,  324,  325,  326,  327,  328,  329,  346,  347,  348,  349,  350,  351,  352,  353,  354,  355,  356,
      357,  367,  368,  369,  370,  371,  372,  373,  374,  375,  376,  387,  388,  389,  390,  391,  392,  393,  394,
      399,  400,  401,  402,  403,  412,  413,  414,  415,  416,  417,  418,  419,  434,  435,  436,  437,  438,  439,
      440,  441,  442,  443,  444,  445,  455,  456,  457,  458,  459,  460,  461,  462,  463,  464,  472,  473,  474,
      475,  476,  477,  478,  479,  484,  485,  494,  495,  496,  497,  498,  499,  500,  501,  508,  509,  510,  511,
      512,  513,  521,  522,  523,  524,  525,  526,  527,  533,  534,  535,  536,  537,  543,  544,  545,  546,  547,
      555,  556,  557,  558,  559,  560,  561,  569,  570,  571,  572,  573,  574,  575,  582,  583,  584,  585,  586,
      587,  593,  594,  595,  596,  597,  599,  605,  606,  607,  608,  609,  616,  617,  618,  619,  620,  621,  629,
      630,  631,  632,  633,  634,  635,  643,  644,  645,  646,  647,  648,  649,  655,  656,  657,  658,  659,  665,
      666,  667,  668,  669,  677,  678,  679,  680,  681,  682,  683,  690,  691,  692,  693,  694,  702,  703,  704,
      705,  706,  707,  708,  712,  713,  714,  715,  723,  724,  725,  726,  727,  728,  729,  740,  741,  742,  743,
      744,  745,  746,  747,  748,  763,  764,  765,  766,  767,  768,  769,  770,  771,  772,  773,  774,  783,  784,
      785,  786,  787,  788,  789,  790,  796,  797,  798,  799,  800,  801,  812,  813,  814,  815,  816,  817,  818,
      819,  829,  830,  831,  832,  833,  834,  835,  836,  837,  838,  855,  856,  857,  858,  859,  860,  861,  862,
      863,  864,  865,  866,  875,  876,  877,  878,  879,  880,  881,  887,  888,  889,  890,  891,  1856, 1857, 1858,
      1859, 1860, 1861, 1862, 1863, 1864, 1865, 1866, 1867, 1868, 1869, 1870, 1871, 1872, 1873, 1874, 1875, 1876, 1877,
      1878, 1879, 1880, 1881, 1882, 1883, 1884, 1885, 1886, 1887, 1888, 1889, 1890, 1891, 1892, 1893, 1894, 1895, 1896,
      1897, 1898, 1899, 1900, 1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909, 1910, 1911, 1912, 1913, 1914, 1915,
      1916, 1917, 1918, 1919, 1920, 1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933, 1934,
      1935, 1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953,
      1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972,
      1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991,
      1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
      2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029,
      2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040, 2041, 2042, 2043, 2044, 2045, 2046, 2047, 2048,
      2049, 2050, 2051, 2052, 2053, 2054, 2055, 2056, 2057, 2058, 2059, 2060, 2061, 2062, 2063, 2064, 2065, 2066, 2067,
      2068, 2069, 2070, 2071, 2072, 2073, 2074, 2075, 2076, 2077, 2078, 2079, 2080, 2081, 2082, 2083, 2084, 2085, 2086,
      2087, 2088, 2089, 2090, 2091, 2092, 2093, 2094, 2095, 2096, 2097, 2098, 2099, 2100, 2101, 2102, 2103, 2104, 2105,
      2106, 2107, 2108, 2109, 2110, 2111, 2112, 2113, 2114, 2115, 2116, 2117, 2118, 2119, 2120, 2121, 2122, 2123, 2124,
      2125, 2126, 2127, 2128, 2129, 2130, 2131, 2132, 2133, 2134, 2135, 2136, 2137, 2138, 2139, 2140, 2141, 2142, 2143,
      2144, 2145, 2146, 2147, 2148, 2149, 2150, 2151, 2152, 2153, 2154, 2155, 2156, 2157, 2158, 2159, 2160, 2161, 2162,
      2163, 2164, 2165, 2166, 2167, 2168, 2169, 2170, 2171, 2172, 2173, 2174, 2175, 2176, 2177, 2178, 2179, 2180, 2181,
      2182, 2183, 2184, 2185, 2186, 2187, 2188, 2189, 2190, 2191, 2192, 2193, 2194, 2195, 2196, 2197, 2198, 2199, 2200,
      2201, 2202, 2203, 2204, 2205, 2206, 2207, 2208, 2209, 2210, 2211, 2212, 2213, 2214, 2215, 2216, 2217, 2218, 2219,
      2220, 2221, 2222, 2223, 2224, 2225, 2226, 2227, 2228, 2229, 2230, 2231, 2232, 2233, 2234, 2235, 2236, 2237, 2238,
      2239, 2240, 2241, 2242, 2243, 2244, 2245, 2246, 2247, 2248, 2249, 2250, 2251, 2252, 2253, 2254, 2255, 2256, 2257,
      2258, 2259, 2260, 2261, 2262, 2263, 2264, 2265, 2266, 2267, 2268, 2269, 2270, 2271, 2272, 2273, 2274, 2275, 2276,
      2277, 2278, 2279, 2280, 2281, 2282, 2283, 2284, 2285, 2286, 2287, 2288, 2289, 2290, 2291, 2292, 2293, 2294, 2295,
      2296, 2297, 2298, 2299, 2300, 2301, 2302, 2303, 2304, 2305, 2306, 2307, 2308, 2309, 2310, 2311, 2312, 2313, 2314,
      2315, 2316, 2317, 2318, 2319, 2320, 2321, 2322, 2323, 2324, 2325, 2326, 2327, 2328, 2329, 2330, 2331, 2332, 2333,
      2334, 2335, 2336, 2337, 2338, 2339, 2340, 2341, 2342, 2343, 2344, 2345, 2346, 2347, 2348, 2349, 2350, 2351, 2352,
      2353, 2354, 2355, 2356, 2357, 2358, 2359, 2360, 2361, 2362, 2363, 2364, 2365, 2366, 2367, 2368, 2369, 2370, 2371,
      2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2384, 2385, 2386, 2387, 2388, 2389, 2390,
      2391, 2392, 2393, 2394, 2395, 2396, 2397, 2398, 2399, 2400, 2401, 2402, 2403, 2404, 2405, 2406, 2407, 2408, 2409,
      2410, 2411, 2412};
  int tti1[] = {
      543,  544,  545,  546,  547,  555,  556,  557,  558,  559,  560,  561,  569,  570,  571,  572,  573,  574,  575,
      582,  583,  584,  585,  586,  587,  593,  594,  595,  596,  597,  599,  605,  606,  607,  608,  609,  616,  617,
      618,  619,  620,  621,  629,  630,  631,  632,  633,  634,  635,  643,  644,  645,  646,  647,  648,  649,  655,
      656,  657,  658,  659,  665,  666,  667,  668,  669,  677,  678,  679,  680,  681,  682,  683,  690,  691,  692,
      693,  694,  702,  703,  704,  705,  706,  707,  708,  712,  713,  714,  715,  723,  724,  725,  726,  727,  728,
      729,  740,  741,  742,  743,  744,  745,  746,  747,  748,  762,  763,  764,  765,  766,  767,  768,  769,  770,
      771,  772,  773,  774,  783,  784,  785,  786,  787,  788,  789,  790,  796,  797,  798,  799,  800,  801,  811,
      812,  813,  814,  815,  816,  817,  818,  819,  829,  830,  831,  832,  833,  834,  835,  836,  837,  838,  853,
      854,  855,  856,  857,  858,  859,  860,  861,  862,  863,  864,  865,  866,  874,  875,  876,  877,  878,  879,
      880,  881,  887,  888,  889,  890,  891,  899,  900,  901,  902,  903,  904,  905,  915,  916,  917,  918,  919,
      920,  921,  922,  923,  934,  935,  936,  937,  938,  939,  940,  941,  942,  943,  951,  952,  953,  954,  955,
      956,  957,  964,  965,  966,  967,  968,  969,  970,  980,  981,  982,  983,  984,  985,  986,  987,  988,  997,
      998,  999,  1000, 1001, 1002, 1003, 1009, 1010, 1011, 1012, 1013, 1014, 1025, 1026, 1027, 1028, 1029, 1030, 1031,
      1032, 1033, 1034, 1035, 1041, 1042, 1043, 1044, 1045, 1051, 1052, 1053, 1054, 1055, 1056, 1064, 1065, 1066, 1067,
      1068, 1069, 1070, 1071, 1080, 1081, 1082, 1083, 1084, 1085, 1086, 1087, 1093, 1094, 1095, 1096, 1097, 1098, 1104,
      1105, 1106, 1107, 1108, 1109, 1117, 1118, 1119, 1120, 1121, 1122, 1123, 1124, 1131, 1132, 1133, 1134, 1135, 1136,
      1137, 1141, 1142, 1143, 1148, 1149, 1150, 1151, 1152, 1157, 1158, 1159, 1160, 1164, 1165, 1166, 1173, 1174, 1175,
      1176, 1177, 1178, 1184, 1185, 1186, 1187, 1188, 1191, 1192, 1193, 1196, 1197, 1804, 1805, 1806, 1807, 1808, 1809,
      1810, 1811, 1812, 1813, 1814, 1815, 1816, 1817, 1818, 1819, 1820, 1821, 1822, 1823, 1824, 1825, 1826, 1827, 1828,
      1829, 1830, 1831, 1832, 1833, 1834, 1835, 1836, 1837, 1838, 1839, 1840, 1841, 1842, 1843, 1844, 1845, 1846, 1847,
      1848, 1849, 1850, 1851, 1852, 1853, 1854, 1855, 1856, 1857, 1858, 1859, 1860, 1861, 1862, 1863, 1864, 1865, 1866,
      1867, 1868, 1869, 1870, 1871, 1872, 1873, 1874, 1875, 1876, 1877, 1878, 1879, 1880, 1881, 1882, 1883, 1884, 1885,
      1886, 1887, 1888, 1889, 1890, 1891, 1892, 1893, 1894, 1895, 1896, 1897, 1898, 1899, 1900, 1901, 1902, 1903, 1904,
      1905, 1906, 1907, 1908, 1909, 1910, 1911, 1912, 1913, 1914, 1915, 1916, 1917, 1918, 1919, 1920, 1921, 1922, 1923,
      1924, 1925, 1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940, 1941, 1942,
      1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961,
      1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980,
      1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999,
      2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018,
      2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037,
      2038, 2039, 2040, 2041, 2042, 2043, 2044, 2045, 2046, 2047, 2048, 2049, 2050, 2051, 2052, 2053, 2054, 2055, 2056,
      2057, 2058, 2059, 2060, 2061, 2062, 2063, 2064, 2065, 2066, 2067, 2068, 2069, 2070, 2071, 2072, 2073, 2074, 2075,
      2076, 2077, 2078, 2079, 2080, 2081, 2082, 2083, 2084, 2085, 2086, 2087, 2088, 2089, 2090, 2091, 2092, 2093, 2094,
      2095, 2096, 2097, 2098, 2099, 2100, 2101, 2102, 2103, 2104, 2105, 2106, 2107, 2108, 2109, 2110, 2111, 2112, 2113,
      2114, 2115, 2116, 2117, 2118, 2119, 2120, 2121, 2122, 2123, 2124, 2125, 2126, 2127, 2128, 2129, 2130, 2131, 2132,
      2133, 2134, 2135, 2136, 2137, 2138, 2139, 2140, 2141, 2142, 2143, 2144, 2145, 2146, 2147, 2148, 2149, 2150, 2151,
      2152, 2153, 2154, 2155, 2156, 2157, 2158, 2159, 2160, 2161, 2162, 2163, 2164, 2165, 2166, 2167, 2168, 2169, 2170,
      2171, 2172, 2173, 2174, 2175, 2176, 2177, 2178, 2179, 2180, 2181, 2182, 2183, 2184, 2185, 2186, 2187, 2188, 2189,
      2190, 2191, 2192, 2193, 2194, 2195, 2196, 2197, 2198, 2199, 2200, 2201, 2202, 2203, 2204, 2205, 2206, 2207, 2208,
      2209, 2210, 2211, 2212, 2213, 2214, 2215, 2216, 2217, 2218, 2219, 2220, 2221, 2222, 2223, 2224, 2225, 2226, 2227,
      2228, 2229, 2230, 2231, 2232, 2233, 2234, 2235, 2236, 2237, 2238, 2239, 2240, 2241, 2242, 2243, 2244, 2245, 2246,
      2247, 2248, 2249, 2250, 2251, 2252, 2253, 2254, 2255, 2256, 2257, 2258, 2259, 2260, 2261, 2262, 2263, 2264, 2265,
      2266, 2267, 2268, 2269, 2270, 2271, 2272, 2273, 2274, 2275, 2276, 2277, 2278, 2279, 2280, 2281, 2282, 2283, 2284,
      2285, 2286, 2287, 2288, 2289, 2290, 2291, 2292, 2293, 2294, 2295, 2296, 2297, 2298, 2299, 2300, 2301, 2302, 2303,
      2304, 2305, 2306, 2307, 2308, 2309, 2310, 2311, 2312, 2313, 2314, 2315, 2316, 2317, 2318, 2319, 2320, 2321, 2322,
      2323, 2324, 2325, 2326, 2327, 2328, 2329, 2330, 2331, 2332, 2333, 2334, 2335, 2336, 2337, 2338, 2339, 2340, 2341,
      2342, 2343, 2344, 2345, 2346, 2347, 2348, 2349, 2350, 2351, 2352, 2353, 2354, 2355, 2356, 2357, 2358, 2359, 2360,
      2361, 2362, 2363, 2364, 2365, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379,
      2380, 2381, 2382, 2383, 2384, 2385, 2386, 2387, 2388, 2389, 2390, 2391, 2392, 2393, 2394, 2395, 2396, 2397, 2398,
      2399, 2400, 2401, 2402, 2403, 2404, 2405, 2406, 2407, 2408, 2409, 2410, 2411, 2412};
  int tti2[] = {
      655,  656,  657,  665,  666,  667,  668,  669,  676,  677,  678,  679,  680,  681,  689,  690,  691,  692,  693,
      694,  702,  703,  704,  705,  706,  711,  712,  713,  714,  722,  723,  724,  725,  726,  727,  728,  738,  739,
      740,  741,  742,  743,  744,  745,  746,  747,  759,  760,  761,  762,  763,  764,  765,  766,  767,  768,  769,
      770,  771,  772,  782,  783,  784,  785,  786,  787,  788,  789,  795,  796,  797,  798,  799,  800,  808,  809,
      810,  811,  812,  813,  814,  815,  816,  817,  818,  827,  828,  829,  830,  831,  832,  833,  834,  835,  836,
      837,  849,  850,  851,  852,  853,  854,  855,  856,  857,  858,  859,  860,  861,  862,  863,  864,  865,  873,
      874,  875,  876,  877,  878,  879,  880,  881,  886,  887,  888,  889,  890,  891,  897,  898,  899,  900,  901,
      902,  903,  904,  905,  913,  914,  915,  916,  917,  918,  919,  920,  921,  922,  932,  933,  934,  935,  936,
      937,  938,  939,  940,  941,  942,  943,  950,  951,  952,  953,  954,  955,  956,  957,  964,  965,  966,  967,
      968,  969,  970,  978,  979,  980,  981,  982,  983,  984,  985,  986,  987,  988,  996,  997,  998,  999,  1000,
      1001, 1002, 1003, 1009, 1010, 1011, 1012, 1013, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033,
      1034, 1035, 1040, 1041, 1042, 1043, 1044, 1045, 1050, 1051, 1052, 1053, 1054, 1055, 1056, 1063, 1064, 1065, 1066,
      1067, 1068, 1069, 1070, 1071, 1078, 1079, 1080, 1081, 1082, 1083, 1084, 1085, 1086, 1087, 1092, 1093, 1094, 1095,
      1096, 1097, 1098, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1122, 1123,
      1124, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1140, 1141, 1142, 1143, 1147, 1148, 1149, 1150, 1151, 1152,
      1155, 1156, 1157, 1158, 1159, 1160, 1164, 1165, 1166, 1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1181, 1182,
      1183, 1184, 1185, 1186, 1187, 1188, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1199, 1200, 1201, 1202, 1203,
      1204, 1205, 1686, 1687, 1688, 1689, 1690, 1691, 1692, 1693, 1694, 1695, 1696, 1697, 1698, 1699, 1700, 1701, 1702,
      1703, 1704, 1705, 1706, 1707, 1708, 1709, 1710, 1711, 1712, 1713, 1714, 1715, 1716, 1717, 1718, 1719, 1720, 1721,
      1722, 1723, 1724, 1725, 1726, 1727, 1728, 1729, 1730, 1731, 1732, 1733, 1734, 1735, 1736, 1737, 1738, 1739, 1740,
      1741, 1742, 1743, 1744, 1745, 1746, 1747, 1748, 1749, 1750, 1751, 1752, 1753, 1754, 1755, 1756, 1757, 1758, 1759,
      1760, 1761, 1762, 1763, 1764, 1765, 1766, 1767, 1768, 1769, 1770, 1771, 1772, 1773, 1774, 1775, 1776, 1777, 1778,
      1779, 1780, 1781, 1782, 1783, 1784, 1785, 1786, 1787, 1788, 1789, 1790, 1791, 1792, 1793, 1794, 1795, 1796, 1797,
      1798, 1799, 1800, 1801, 1802, 1803, 1804, 1805, 1806, 1807, 1808, 1809, 1810, 1811, 1812, 1813, 1814, 1815, 1816,
      1817, 1818, 1819, 1820, 1821, 1822, 1823, 1824, 1825, 1826, 1827, 1828, 1829, 1830, 1831, 1832, 1833, 1834, 1835,
      1836, 1837, 1838, 1839, 1840, 1841, 1842, 1843, 1844, 1845, 1846, 1847, 1848, 1849, 1850, 1851, 1852, 1853, 1854,
      1855, 1856, 1857, 1858, 1859, 1860, 1861, 1862, 1863, 1864, 1865, 1866, 1867, 1868, 1869, 1870, 1871, 1872, 1873,
      1874, 1875, 1876, 1877, 1878, 1879, 1880, 1881, 1882, 1883, 1884, 1885, 1886, 1887, 1888, 1889, 1890, 1891, 1892,
      1893, 1894, 1895, 1896, 1897, 1898, 1899, 1900, 1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909, 1910, 1911,
      1912, 1913, 1914, 1915, 1916, 1917, 1918, 1919, 1920, 1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929, 1930,
      1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949,
      1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968,
      1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987,
      1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006,
      2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025,
      2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040, 2041, 2042, 2043, 2044,
      2045, 2046, 2047, 2048, 2049, 2050, 2051, 2052, 2053, 2054, 2055, 2056, 2057, 2058, 2059, 2060, 2061, 2062, 2063,
      2064, 2065, 2066, 2067, 2068, 2069, 2070, 2071, 2072, 2073, 2074, 2075, 2076, 2077, 2078, 2079, 2080, 2081, 2082,
      2083, 2084, 2085, 2086, 2087, 2088, 2089, 2090, 2091, 2092, 2093, 2094, 2095, 2096, 2097, 2098, 2099, 2100, 2101,
      2102, 2103, 2104, 2105, 2106, 2107, 2108, 2109, 2110, 2111, 2112, 2113, 2114, 2115, 2116, 2117, 2118, 2119, 2120,
      2121, 2122, 2123, 2124, 2125, 2126, 2127, 2128, 2129, 2130, 2131, 2132, 2133, 2134, 2135, 2136, 2137, 2138, 2139,
      2140, 2141, 2142, 2143, 2144, 2145, 2146, 2147, 2148, 2149, 2150, 2151, 2152, 2153, 2154, 2155, 2156, 2157, 2158,
      2159, 2160, 2161, 2162, 2163, 2164, 2165, 2166, 2167, 2168, 2169, 2170, 2171, 2172, 2173, 2174, 2175, 2176, 2177,
      2178, 2179, 2180, 2181, 2182, 2183, 2184, 2185, 2186, 2187, 2188, 2189, 2190, 2191, 2192, 2193, 2194, 2195, 2196,
      2197, 2198, 2199, 2200, 2201, 2202, 2203, 2204, 2205, 2206, 2207, 2208, 2209, 2210, 2211, 2212, 2213, 2214, 2215,
      2216, 2217, 2218, 2219, 2220, 2221, 2222, 2223, 2224, 2225, 2226, 2227, 2228, 2229, 2230, 2231, 2232, 2233, 2234,
      2235, 2236, 2237, 2238, 2239, 2240, 2241, 2242, 2243, 2244, 2245, 2246, 2247, 2248, 2249, 2250, 2251, 2252, 2253,
      2254, 2255, 2256, 2257, 2258, 2259, 2260, 2261, 2262, 2263, 2264, 2265, 2266, 2267, 2268, 2269, 2270, 2271, 2272,
      2273, 2274, 2275, 2276, 2277, 2278, 2279, 2280, 2281, 2282, 2283, 2284, 2285, 2286, 2287, 2288, 2289, 2290, 2291,
      2292, 2293, 2294, 2295, 2296, 2297, 2298, 2299, 2300, 2301, 2302, 2303, 2304, 2305, 2306, 2307, 2308, 2309, 2310,
      2311, 2312, 2313, 2314, 2315, 2316, 2317, 2318, 2319, 2320, 2321, 2322, 2323, 2324, 2325, 2326, 2327, 2328, 2329,
      2330, 2331, 2332, 2333, 2334, 2335, 2336, 2337, 2338, 2339, 2340, 2341, 2342, 2343, 2344, 2345, 2346, 2347, 2348,
      2349, 2350, 2351, 2352, 2353, 2354, 2355, 2356, 2357, 2358, 2359, 2360, 2361, 2362, 2363, 2364, 2365, 2366};
  int tti3[] = {
      652,  653,  654,  660,  661,  662,  663,  664,  672,  673,  674,  675,  676,  677,  684,  685,  686,  687,  688,
      689,  697,  698,  699,  700,  701,  710,  711,  712,  717,  718,  719,  720,  721,  722,  723,  731,  732,  733,
      734,  735,  736,  737,  738,  739,  740,  751,  752,  753,  754,  755,  756,  757,  758,  759,  760,  761,  762,
      763,  764,  776,  777,  778,  779,  780,  781,  782,  783,  792,  793,  794,  795,  796,  797,  803,  804,  805,
      806,  807,  808,  809,  810,  811,  812,  813,  821,  822,  823,  824,  825,  826,  827,  828,  829,  830,  831,
      840,  841,  842,  843,  844,  845,  846,  847,  848,  849,  850,  851,  852,  853,  854,  855,  856,  867,  868,
      869,  870,  871,  872,  873,  874,  882,  883,  884,  885,  886,  887,  892,  893,  894,  895,  896,  897,  898,
      899,  900,  907,  908,  909,  910,  911,  912,  913,  914,  915,  916,  917,  924,  925,  926,  927,  928,  929,
      930,  931,  932,  933,  934,  935,  944,  945,  946,  947,  948,  949,  950,  951,  958,  959,  960,  961,  962,
      963,  964,  971,  972,  973,  974,  975,  976,  977,  978,  979,  980,  981,  989,  990,  991,  992,  993,  994,
      995,  996,  997,  1005, 1006, 1007, 1008, 1009, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023, 1024, 1025,
      1026, 1036, 1037, 1038, 1039, 1040, 1041, 1046, 1047, 1048, 1049, 1050, 1051, 1057, 1058, 1059, 1060, 1061, 1062,
      1063, 1064, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080, 1081, 1082, 1088, 1089, 1090, 1091, 1092, 1093,
      1099, 1100, 1101, 1102, 1103, 1104, 1110, 1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1125, 1126, 1127, 1128,
      1129, 1130, 1131, 1132, 1138, 1139, 1140, 1141, 1144, 1145, 1146, 1147, 1148, 1149, 1153, 1154, 1155, 1156, 1157,
      1158, 1161, 1162, 1163, 1167, 1168, 1169, 1170, 1171, 1172, 1173, 1174, 1179, 1180, 1181, 1182, 1183, 1184, 1185,
      1186, 1189, 1190, 1191, 1192, 1194, 1195, 1196, 1197, 1198, 1199, 1200, 1202, 1203, 1204, 1205, 1246, 1247, 1248,
      1249, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1259, 1260, 1261, 1262, 1263, 1264, 1265, 1266, 1267,
      1268, 1269, 1270, 1271, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1286,
      1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305,
      1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324,
      1325, 1326, 1327, 1328, 1329, 1330, 1331, 1332, 1333, 1334, 1335, 1336, 1337, 1338, 1339, 1340, 1341, 1342, 1343,
      1344, 1345, 1346, 1347, 1348, 1349, 1350, 1351, 1352, 1353, 1354, 1355, 1356, 1357, 1358, 1359, 1360, 1361, 1362,
      1363, 1364, 1365, 1366, 1367, 1368, 1369, 1370, 1371, 1372, 1373, 1374, 1375, 1376, 1377, 1378, 1379, 1380, 1381,
      1382, 1383, 1384, 1385, 1386, 1387, 1388, 1389, 1390, 1391, 1392, 1393, 1394, 1395, 1396, 1397, 1398, 1399, 1400,
      1401, 1402, 1403, 1404, 1405, 1406, 1407, 1408, 1409, 1410, 1411, 1412, 1413, 1414, 1415, 1416, 1417, 1418, 1419,
      1420, 1421, 1422, 1423, 1424, 1425, 1426, 1427, 1428, 1429, 1430, 1431, 1432, 1433, 1434, 1435, 1436, 1437, 1438,
      1439, 1440, 1441, 1442, 1443, 1444, 1445, 1446, 1447, 1448, 1449, 1450, 1451, 1452, 1453, 1454, 1455, 1456, 1457,
      1458, 1459, 1460, 1461, 1462, 1463, 1464, 1465, 1466, 1467, 1468, 1469, 1470, 1471, 1472, 1473, 1474, 1475, 1476,
      1477, 1478, 1479, 1480, 1481, 1482, 1483, 1484, 1485, 1486, 1487, 1488, 1489, 1490, 1491, 1492, 1493, 1494, 1495,
      1496, 1497, 1498, 1499, 1500, 1501, 1502, 1503, 1504, 1505, 1506, 1507, 1508, 1509, 1510, 1511, 1512, 1513, 1514,
      1515, 1516, 1517, 1518, 1519, 1520, 1521, 1522, 1523, 1524, 1525, 1526, 1527, 1528, 1529, 1530, 1531, 1532, 1533,
      1534, 1535, 1536, 1537, 1538, 1539, 1540, 1541, 1542, 1543, 1544, 1545, 1546, 1547, 1548, 1549, 1550, 1551, 1552,
      1553, 1554, 1555, 1556, 1557, 1558, 1559, 1560, 1561, 1562, 1563, 1564, 1565, 1566, 1567, 1568, 1569, 1570, 1571,
      1572, 1573, 1574, 1575, 1576, 1577, 1578, 1579, 1580, 1581, 1582, 1583, 1584, 1585, 1586, 1587, 1588, 1589, 1590,
      1591, 1592, 1593, 1594, 1595, 1596, 1597, 1598, 1599, 1600, 1601, 1602, 1603, 1604, 1605, 1606, 1607, 1608, 1609,
      1610, 1611, 1612, 1613, 1614, 1615, 1616, 1617, 1618, 1619, 1620, 1621, 1622, 1623, 1624, 1625, 1626, 1627, 1628,
      1629, 1630, 1631, 1632, 1633, 1634, 1635, 1636, 1637, 1638, 1639, 1640, 1641, 1642, 1643, 1644, 1645, 1646, 1647,
      1648, 1649, 1650, 1651, 1652, 1653, 1654, 1655, 1656, 1657, 1658, 1659, 1660, 1661, 1662, 1663, 1664, 1665, 1666,
      1667, 1668, 1669, 1670, 1671, 1672, 1673, 1674, 1675, 1676, 1677, 1678, 1679, 1680, 1681, 1682, 1683, 1684, 1685,
      1686, 1687, 1688, 1689, 1690, 1691, 1692, 1693, 1694, 1695, 1696, 1697, 1698, 1699, 1700, 1701, 1702, 1703, 1704,
      1705, 1706, 1707, 1708, 1709, 1710, 1711, 1712, 1713, 1714, 1715, 1716, 1717, 1718, 1719, 1720, 1721, 1722, 1723,
      1724, 1725, 1726, 1727, 1728, 1729, 1730, 1731, 1732, 1733, 1734, 1735, 1736, 1737, 1738, 1739, 1740, 1741, 1742,
      1743, 1744, 1745, 1746, 1747, 1748, 1749, 1750, 1751, 1752, 1753, 1754, 1755, 1756, 1757, 1758, 1759, 1760, 1761,
      1762, 1763, 1764, 1765, 1766, 1767, 1768, 1769, 1770, 1771, 1772, 1773, 1774, 1775, 1776, 1777, 1778, 1779, 1780,
      1781, 1782, 1783, 1784, 1785, 1786, 1787, 1788, 1789, 1790, 1791, 1792, 1793, 1794, 1795, 1796, 1797, 1798, 1799,
      1800, 1801, 1802, 1803, 1804, 1805, 1806, 1807, 1808, 1809, 1810, 1811, 1812, 1813, 1814, 1815, 1816, 1817, 1818,
      1819, 1820, 1821, 1822, 1823, 1824, 1825, 1826, 1827, 1828, 1829, 1830, 1831, 1832, 1833, 1834, 1835, 1836, 1837,
      1838, 1839, 1840, 1841, 1842, 1843, 1844, 1845, 1846, 1847, 1848, 1849, 1850, 1851, 1852, 1853, 1854, 1855, 1856,
      1857, 1858, 1859, 1860, 1861, 1862, 1863, 1864, 1865, 1866, 1867, 1868, 1869, 1870, 1871, 1872, 1873, 1874, 1875,
      1876, 1877, 1878, 1879, 1880, 1881, 1882, 1883, 1884, 1885, 1886, 1887, 1888, 1889, 1890, 1891, 1892, 1893, 1894,
      1895, 1896, 1897, 1898, 1899, 1900, 1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909, 1910, 1911, 1912, 1913,
      1914, 1915, 1916, 1917, 1918, 1919, 1920, 1921};
  int tti4[] = {
      538,  539,  540,  541,  542,  548,  549,  550,  551,  552,  553,  554,  562,  563,  564,  565,  566,  567,  568,
      576,  577,  578,  579,  580,  581,  588,  589,  590,  591,  592,  598,  600,  601,  602,  603,  604,  610,  611,
      612,  613,  614,  615,  622,  623,  624,  625,  626,  627,  628,  636,  637,  638,  639,  640,  641,  642,  650,
      651,  652,  653,  654,  660,  661,  662,  663,  664,  670,  671,  672,  673,  674,  675,  676,  684,  685,  686,
      687,  688,  689,  695,  696,  697,  698,  699,  700,  701,  709,  710,  711,  716,  717,  718,  719,  720,  721,
      722,  730,  731,  732,  733,  734,  735,  736,  737,  738,  739,  749,  750,  751,  752,  753,  754,  755,  756,
      757,  758,  759,  760,  761,  775,  776,  777,  778,  779,  780,  781,  782,  791,  792,  793,  794,  795,  796,
      802,  803,  804,  805,  806,  807,  808,  809,  810,  820,  821,  822,  823,  824,  825,  826,  827,  828,  829,
      839,  840,  841,  842,  843,  844,  845,  846,  847,  848,  849,  850,  851,  852,  867,  868,  869,  870,  871,
      872,  873,  882,  883,  884,  885,  886,  892,  893,  894,  895,  896,  897,  898,  906,  907,  908,  909,  910,
      911,  912,  913,  914,  915,  924,  925,  926,  927,  928,  929,  930,  931,  932,  933,  944,  945,  946,  947,
      948,  949,  950,  958,  959,  960,  961,  962,  963,  964,  971,  972,  973,  974,  975,  976,  977,  978,  979,
      989,  990,  991,  992,  993,  994,  995,  996,  1004, 1005, 1006, 1007, 1008, 1009, 1015, 1016, 1017, 1018, 1019,
      1020, 1021, 1022, 1023, 1024, 1036, 1037, 1038, 1039, 1040, 1046, 1047, 1048, 1049, 1050, 1057, 1058, 1059, 1060,
      1061, 1062, 1063, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080, 1088, 1089, 1090, 1091, 1092, 1099, 1100,
      1101, 1102, 1103, 1110, 1111, 1112, 1113, 1114, 1115, 1116, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1138, 1139,
      1140, 1144, 1145, 1146, 1147, 1148, 1153, 1154, 1155, 1156, 1161, 1162, 1163, 1167, 1168, 1169, 1170, 1171, 1172,
      1179, 1180, 1181, 1182, 1183, 1189, 1190, 1191, 1194, 1195, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214,
      1215, 1216, 1217, 1218, 1219, 1220, 1221, 1222, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1231, 1232, 1233,
      1234, 1235, 1236, 1237, 1238, 1239, 1240, 1241, 1242, 1243, 1244, 1245, 1246, 1247, 1248, 1249, 1250, 1251, 1252,
      1253, 1254, 1255, 1256, 1257, 1258, 1259, 1260, 1261, 1262, 1263, 1264, 1265, 1266, 1267, 1268, 1269, 1270, 1271,
      1272, 1273, 1274, 1275, 1276, 1277, 1278, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1286, 1287, 1288, 1289, 1290,
      1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309,
      1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328,
      1329, 1330, 1331, 1332, 1333, 1334, 1335, 1336, 1337, 1338, 1339, 1340, 1341, 1342, 1343, 1344, 1345, 1346, 1347,
      1348, 1349, 1350, 1351, 1352, 1353, 1354, 1355, 1356, 1357, 1358, 1359, 1360, 1361, 1362, 1363, 1364, 1365, 1366,
      1367, 1368, 1369, 1370, 1371, 1372, 1373, 1374, 1375, 1376, 1377, 1378, 1379, 1380, 1381, 1382, 1383, 1384, 1385,
      1386, 1387, 1388, 1389, 1390, 1391, 1392, 1393, 1394, 1395, 1396, 1397, 1398, 1399, 1400, 1401, 1402, 1403, 1404,
      1405, 1406, 1407, 1408, 1409, 1410, 1411, 1412, 1413, 1414, 1415, 1416, 1417, 1418, 1419, 1420, 1421, 1422, 1423,
      1424, 1425, 1426, 1427, 1428, 1429, 1430, 1431, 1432, 1433, 1434, 1435, 1436, 1437, 1438, 1439, 1440, 1441, 1442,
      1443, 1444, 1445, 1446, 1447, 1448, 1449, 1450, 1451, 1452, 1453, 1454, 1455, 1456, 1457, 1458, 1459, 1460, 1461,
      1462, 1463, 1464, 1465, 1466, 1467, 1468, 1469, 1470, 1471, 1472, 1473, 1474, 1475, 1476, 1477, 1478, 1479, 1480,
      1481, 1482, 1483, 1484, 1485, 1486, 1487, 1488, 1489, 1490, 1491, 1492, 1493, 1494, 1495, 1496, 1497, 1498, 1499,
      1500, 1501, 1502, 1503, 1504, 1505, 1506, 1507, 1508, 1509, 1510, 1511, 1512, 1513, 1514, 1515, 1516, 1517, 1518,
      1519, 1520, 1521, 1522, 1523, 1524, 1525, 1526, 1527, 1528, 1529, 1530, 1531, 1532, 1533, 1534, 1535, 1536, 1537,
      1538, 1539, 1540, 1541, 1542, 1543, 1544, 1545, 1546, 1547, 1548, 1549, 1550, 1551, 1552, 1553, 1554, 1555, 1556,
      1557, 1558, 1559, 1560, 1561, 1562, 1563, 1564, 1565, 1566, 1567, 1568, 1569, 1570, 1571, 1572, 1573, 1574, 1575,
      1576, 1577, 1578, 1579, 1580, 1581, 1582, 1583, 1584, 1585, 1586, 1587, 1588, 1589, 1590, 1591, 1592, 1593, 1594,
      1595, 1596, 1597, 1598, 1599, 1600, 1601, 1602, 1603, 1604, 1605, 1606, 1607, 1608, 1609, 1610, 1611, 1612, 1613,
      1614, 1615, 1616, 1617, 1618, 1619, 1620, 1621, 1622, 1623, 1624, 1625, 1626, 1627, 1628, 1629, 1630, 1631, 1632,
      1633, 1634, 1635, 1636, 1637, 1638, 1639, 1640, 1641, 1642, 1643, 1644, 1645, 1646, 1647, 1648, 1649, 1650, 1651,
      1652, 1653, 1654, 1655, 1656, 1657, 1658, 1659, 1660, 1661, 1662, 1663, 1664, 1665, 1666, 1667, 1668, 1669, 1670,
      1671, 1672, 1673, 1674, 1675, 1676, 1677, 1678, 1679, 1680, 1681, 1682, 1683, 1684, 1685, 1686, 1687, 1688, 1689,
      1690, 1691, 1692, 1693, 1694, 1695, 1696, 1697, 1698, 1699, 1700, 1701, 1702, 1703, 1704, 1705, 1706, 1707, 1708,
      1709, 1710, 1711, 1712, 1713, 1714, 1715, 1716, 1717, 1718, 1719, 1720, 1721, 1722, 1723, 1724, 1725, 1726, 1727,
      1728, 1729, 1730, 1731, 1732, 1733, 1734, 1735, 1736, 1737, 1738, 1739, 1740, 1741, 1742, 1743, 1744, 1745, 1746,
      1747, 1748, 1749, 1750, 1751, 1752, 1753, 1754, 1755, 1756, 1757, 1758, 1759, 1760, 1761, 1762, 1763, 1764, 1765,
      1766, 1767, 1768, 1769, 1770, 1771, 1772, 1773, 1774, 1775, 1776, 1777, 1778, 1779, 1780, 1781, 1782, 1783, 1784,
      1785, 1786, 1787, 1788, 1789, 1790, 1791, 1792, 1793, 1794, 1795, 1796, 1797, 1798, 1799, 1800, 1801, 1802, 1803,
      1804, 1805};
  int tti5[] = {
      151,  152,  153,  154,  155,  161,  162,  163,  164,  165,  166,  167,  168,  169,  170,  182,  183,  184,  185,
      186,  187,  193,  194,  195,  196,  197,  198,  199,  208,  209,  210,  211,  212,  213,  214,  215,  226,  227,
      228,  229,  230,  231,  232,  239,  240,  241,  242,  243,  244,  245,  253,  254,  255,  256,  257,  258,  259,
      260,  273,  274,  275,  276,  277,  278,  279,  291,  292,  293,  294,  295,  296,  297,  305,  306,  307,  308,
      309,  315,  316,  317,  318,  319,  320,  321,  330,  331,  332,  333,  334,  335,  336,  337,  338,  339,  340,
      341,  358,  359,  360,  361,  362,  363,  364,  365,  366,  367,  377,  378,  379,  380,  381,  382,  383,  384,
      395,  396,  397,  398,  399,  404,  405,  406,  407,  408,  409,  410,  411,  420,  421,  422,  423,  424,  425,
      426,  427,  428,  429,  430,  431,  446,  447,  448,  449,  450,  451,  452,  453,  454,  465,  466,  467,  468,
      469,  470,  471,  472,  480,  481,  482,  483,  486,  487,  488,  489,  490,  491,  492,  493,  502,  503,  504,
      505,  506,  507,  514,  515,  516,  517,  518,  519,  520,  528,  529,  530,  531,  532,  538,  539,  540,  541,
      542,  548,  549,  550,  551,  552,  553,  554,  562,  563,  564,  565,  566,  567,  568,  576,  577,  578,  579,
      580,  581,  588,  589,  590,  591,  592,  598,  600,  601,  602,  603,  604,  610,  611,  612,  613,  614,  615,
      622,  623,  624,  625,  626,  627,  628,  636,  637,  638,  639,  640,  641,  642,  650,  651,  652,  653,  654,
      660,  661,  662,  663,  664,  670,  671,  672,  673,  674,  675,  676,  684,  685,  686,  687,  688,  689,  695,
      696,  697,  698,  699,  700,  701,  709,  710,  711,  716,  717,  718,  719,  720,  721,  722,  730,  731,  732,
      733,  734,  735,  736,  737,  738,  739,  749,  750,  751,  752,  753,  754,  755,  756,  757,  758,  759,  760,
      775,  776,  777,  778,  779,  780,  781,  782,  791,  792,  793,  794,  795,  796,  802,  803,  804,  805,  806,
      807,  808,  809,  820,  821,  822,  823,  824,  825,  826,  827,  828,  829,  839,  840,  841,  842,  843,  844,
      845,  846,  847,  848,  849,  850,  867,  868,  869,  870,  871,  872,  882,  883,  884,  885,  886,  1206, 1207,
      1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1217, 1218, 1219, 1220, 1221, 1222, 1223, 1224, 1225, 1226,
      1227, 1228, 1229, 1230, 1231, 1232, 1233, 1234, 1235, 1236, 1237, 1238, 1239, 1240, 1241, 1242, 1243, 1244, 1245,
      1246, 1247, 1248, 1249, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1259, 1260, 1261, 1262, 1263, 1264,
      1265, 1266, 1267, 1268, 1269, 1270, 1271, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1279, 1280, 1281, 1282, 1283,
      1284, 1285, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302,
      1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321,
      1322, 1323, 1324, 1325, 1326, 1327, 1328, 1329, 1330, 1331, 1332, 1333, 1334, 1335, 1336, 1337, 1338, 1339, 1340,
      1341, 1342, 1343, 1344, 1345, 1346, 1347, 1348, 1349, 1350, 1351, 1352, 1353, 1354, 1355, 1356, 1357, 1358, 1359,
      1360, 1361, 1362, 1363, 1364, 1365, 1366, 1367, 1368, 1369, 1370, 1371, 1372, 1373, 1374, 1375, 1376, 1377, 1378,
      1379, 1380, 1381, 1382, 1383, 1384, 1385, 1386, 1387, 1388, 1389, 1390, 1391, 1392, 1393, 1394, 1395, 1396, 1397,
      1398, 1399, 1400, 1401, 1402, 1403, 1404, 1405, 1406, 1407, 1408, 1409, 1410, 1411, 1412, 1413, 1414, 1415, 1416,
      1417, 1418, 1419, 1420, 1421, 1422, 1423, 1424, 1425, 1426, 1427, 1428, 1429, 1430, 1431, 1432, 1433, 1434, 1435,
      1436, 1437, 1438, 1439, 1440, 1441, 1442, 1443, 1444, 1445, 1446, 1447, 1448, 1449, 1450, 1451, 1452, 1453, 1454,
      1455, 1456, 1457, 1458, 1459, 1460, 1461, 1462, 1463, 1464, 1465, 1466, 1467, 1468, 1469, 1470, 1471, 1472, 1473,
      1474, 1475, 1476, 1477, 1478, 1479, 1480, 1481, 1482, 1483, 1484, 1485, 1486, 1487, 1488, 1489, 1490, 1491, 1492,
      1493, 1494, 1495, 1496, 1497, 1498, 1499, 1500, 1501, 1502, 1503, 1504, 1505, 1506, 1507, 1508, 1509, 1510, 1511,
      1512, 1513, 1514, 1515, 1516, 1517, 1518, 1519, 1520, 1521, 1522, 1523, 1524, 1525, 1526, 1527, 1528, 1529, 1530,
      1531, 1532, 1533, 1534, 1535, 1536, 1537, 1538, 1539, 1540, 1541, 1542, 1543, 1544, 1545, 1546, 1547, 1548, 1549,
      1550, 1551, 1552, 1553, 1554, 1555, 1556, 1557, 1558, 1559, 1560, 1561, 1562, 1563, 1564, 1565, 1566, 1567, 1568,
      1569, 1570, 1571, 1572, 1573, 1574, 1575, 1576, 1577, 1578, 1579, 1580, 1581, 1582, 1583, 1584, 1585, 1586, 1587,
      1588, 1589, 1590, 1591, 1592, 1593, 1594, 1595, 1596, 1597, 1598, 1599, 1600, 1601, 1602, 1603, 1604, 1605, 1606,
      1607, 1608, 1609, 1610, 1611, 1612, 1613, 1614, 1615, 1616, 1617, 1618, 1619, 1620, 1621, 1622, 1623, 1624, 1625,
      1626, 1627, 1628, 1629, 1630, 1631, 1632, 1633, 1634, 1635, 1636, 1637, 1638, 1639, 1640, 1641, 1642, 1643, 1644,
      1645, 1646, 1647, 1648, 1649, 1650, 1651, 1652, 1653, 1654, 1655, 1656, 1657, 1658, 1659, 1660, 1661, 1662, 1663,
      1664, 1665, 1666, 1667, 1668, 1669, 1670, 1671, 1672, 1673, 1674, 1675, 1676, 1677, 1678, 1679, 1680, 1681, 1682,
      1683, 1684, 1685, 1686, 1687, 1688, 1689, 1690, 1691, 1692, 1693, 1694, 1695, 1696, 1697, 1698, 1699, 1700, 1701,
      1702, 1703, 1704, 1705, 1706, 1707, 1708, 1709, 1710, 1711, 1712, 1713, 1714, 1715, 1716, 1717, 1718, 1719, 1720,
      1721, 1722, 1723, 1724, 1725, 1726, 1727, 1728, 1729, 1730, 1731, 1732, 1733, 1734, 1735, 1736, 1737, 1738, 1739,
      1740, 1741, 1742, 1743, 1744, 1745, 1746, 1747, 1748, 1749, 1750, 1751, 1752, 1753};
  int tti6[] = {
      0,    1,    2,    5,    6,    9,    10,   11,   14,   15,   16,   17,   18,   24,   25,   26,   27,   28,   34,
      35,   36,   40,   41,   42,   43,   48,   49,   50,   51,   52,   57,   58,   59,   63,   64,   65,   66,   67,
      68,   69,   76,   77,   78,   79,   80,   81,   82,   90,   91,   92,   93,   94,   100,  101,  102,  103,  104,
      110,  111,  112,  113,  114,  115,  116,  117,  126,  127,  128,  129,  130,  131,  132,  133,  141,  142,  143,
      144,  145,  151,  152,  153,  154,  155,  161,  162,  163,  164,  165,  166,  167,  168,  169,  170,  171,  182,
      183,  184,  185,  186,  187,  193,  194,  195,  196,  197,  198,  199,  208,  209,  210,  211,  212,  213,  214,
      215,  216,  226,  227,  228,  229,  230,  231,  232,  239,  240,  241,  242,  243,  244,  245,  253,  254,  255,
      256,  257,  258,  259,  260,  261,  262,  273,  274,  275,  276,  277,  278,  279,  280,  281,  291,  292,  293,
      294,  295,  296,  297,  305,  306,  307,  308,  309,  315,  316,  317,  318,  319,  320,  321,  322,  330,  331,
      332,  333,  334,  335,  336,  337,  338,  339,  340,  341,  342,  343,  358,  359,  360,  361,  362,  363,  364,
      365,  366,  367,  377,  378,  379,  380,  381,  382,  383,  384,  385,  395,  396,  397,  398,  399,  404,  405,
      406,  407,  408,  409,  410,  411,  420,  421,  422,  423,  424,  425,  426,  427,  428,  429,  430,  431,  432,
      446,  447,  448,  449,  450,  451,  452,  453,  454,  465,  466,  467,  468,  469,  470,  471,  472,  480,  481,
      482,  483,  486,  487,  488,  489,  490,  491,  492,  493,  502,  503,  504,  505,  506,  507,  514,  515,  516,
      517,  518,  519,  520,  528,  529,  530,  531,  532,  538,  539,  540,  541,  542,  548,  549,  550,  551,  552,
      553,  554,  562,  563,  564,  565,  566,  567,  568,  576,  577,  578,  579,  580,  581,  588,  589,  590,  591,
      592,  598,  1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1217, 1218, 1219, 1220, 1221, 1222,
      1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1231, 1232, 1233, 1234, 1235, 1236, 1237, 1238, 1239, 1240, 1241,
      1242, 1243, 1244, 1245, 1246, 1247, 1248, 1249, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1259, 1260,
      1261, 1262, 1263, 1264, 1265, 1266, 1267, 1268, 1269, 1270, 1271, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1279,
      1280, 1281, 1282, 1283, 1284, 1285, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298,
      1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317,
      1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328, 1329, 1330, 1331, 1332, 1333, 1334, 1335, 1336,
      1337, 1338, 1339, 1340, 1341, 1342, 1343, 1344, 1345, 1346, 1347, 1348, 1349, 1350, 1351, 1352, 1353, 1354, 1355,
      1356, 1357, 1358, 1359, 1360, 1361, 1362, 1363, 1364, 1365, 1366, 1367, 1368, 1369, 1370, 1371, 1372, 1373, 1374,
      1375, 1376, 1377, 1378, 1379, 1380, 1381, 1382, 1383, 1384, 1385, 1386, 1387, 1388, 1389, 1390, 1391, 1392, 1393,
      1394, 1395, 1396, 1397, 1398, 1399, 1400, 1401, 1402, 1403, 1404, 1405, 1406, 1407, 1408, 1409, 1410, 1411, 1412,
      1413, 1414, 1415, 1416, 1417, 1418, 1419, 1420, 1421, 1422, 1423, 1424, 1425, 1426, 1427, 1428, 1429, 1430, 1431,
      1432, 1433, 1434, 1435, 1436, 1437, 1438, 1439, 1440, 1441, 1442, 1443, 1444, 1445, 1446, 1447, 1448, 1449, 1450,
      1451, 1452, 1453, 1454, 1455, 1456, 1457, 1458, 1459, 1460, 1461, 1462, 1463, 1464, 1465, 1466, 1467, 1468, 1469,
      1470, 1471, 1472, 1473, 1474, 1475, 1476, 1477, 1478, 1479, 1480, 1481, 1482, 1483, 1484, 1485, 1486, 1487, 1488,
      1489, 1490, 1491, 1492, 1493, 1494, 1495, 1496, 1497, 1498, 1499, 1500, 1501, 1502, 1503, 1504, 1505, 1506, 1507,
      1508, 1509, 1510, 1511, 1512, 1513, 1514, 1515, 1516, 1517, 1518, 1519, 1520, 1521, 1522, 1523, 1524, 1525, 1526,
      1527, 1528, 1529, 1530, 1531, 1532, 1533, 1534, 1535, 1536, 1537, 1538, 1539, 1540, 1541, 1542, 1543, 1544, 1545,
      1546, 1547, 1548, 1549, 1550, 1551, 1552, 1553, 1554, 1555, 1556, 1557, 1558, 1559, 1560, 1561, 1562, 1563, 1564,
      1565, 1566, 1567, 1568, 1569, 1570, 1571, 1572, 1573, 1574, 1575, 1576, 1577, 1578, 1579, 1580, 1581, 1582, 1583,
      1584, 1585, 1586, 1587, 1588, 1589, 1590, 1591, 1592, 1593, 1594, 1595, 1596, 1597, 1598, 1599, 1600, 1601, 1602,
      1603, 1604, 1605, 1606, 1607, 1608, 1609, 1610, 1611, 1612, 1613, 1614, 1615, 1616, 1617, 1618, 1619, 1620, 1621,
      1622, 1623, 1624, 1625, 1626, 1627, 1628, 1629, 1630, 1631, 1632, 1633, 1634, 1635, 1636, 1637, 1638, 1639, 1640,
      1641, 1642, 1643, 1644, 1645, 1646, 1647, 1648, 1649, 1650, 1651, 1652, 1653, 1654, 1655, 1656, 1657, 1658, 1659,
      1660, 1661, 1662, 1663, 1664, 1665, 1666, 1667, 1668, 1669, 1670, 1671, 1672, 1673, 1674, 1675, 1676, 1677, 1678,
      1679, 1680, 1681, 1682, 1683, 1684, 1685, 1686, 1687, 1688, 1689, 1690, 1691, 1692, 1693, 1694, 1695, 1696, 1697,
      1698, 1699, 1700, 1701, 1702, 1703, 1704, 1705, 1706, 1707, 1708, 1709, 1710, 1711, 1712, 1713, 1714, 1715, 1716,
      1717, 1718, 1719, 1720, 1721, 1722, 1723, 1724, 1725, 1726, 1727, 1728, 1729, 1730, 1731, 1732, 1733, 1734, 1735,
      1736, 1737, 1738, 1739, 1740, 1741, 1742, 1743, 1744, 1745, 1746, 1747, 1748, 1749, 1750, 1751, 1752, 1753, 1754,
      1755, 1756, 1757, 1758, 1759, 1760, 1761, 1762, 1763, 1764, 1765, 1766, 1767, 1768, 1769, 1770, 1771, 1772, 1773,
      1774, 1775, 1776, 1777, 1778, 1779, 1780, 1781, 1782, 1783, 1784, 1785, 1786, 1787, 1788, 1789, 1790, 1791, 1792,
      1793, 1794, 1795, 1796, 1797, 1798, 1799, 1800, 1801, 1802, 1803, 1804, 1805};
  int tti7[] = {
      0,    1,    2,    3,    4,    5,    6,    7,    8,    9,    10,   11,   12,   13,   14,   15,   16,   17,   18,
      19,   20,   21,   22,   23,   24,   25,   26,   27,   28,   29,   30,   31,   32,   33,   35,   36,   37,   38,
      40,   41,   42,   43,   44,   45,   46,   47,   49,   50,   51,   52,   53,   54,   55,   58,   59,   60,   61,
      64,   65,   66,   67,   68,   69,   70,   71,   72,   73,   74,   77,   78,   79,   80,   81,   82,   83,   84,
      85,   86,   87,   88,   92,   93,   94,   95,   96,   97,   102,  103,  104,  105,  106,  107,  112,  113,  114,
      115,  116,  117,  118,  119,  120,  121,  122,  129,  130,  131,  132,  133,  134,  135,  136,  137,  138,  142,
      143,  144,  145,  146,  147,  148,  149,  153,  154,  155,  156,  157,  158,  166,  167,  168,  169,  170,  171,
      172,  173,  174,  175,  176,  177,  185,  186,  187,  188,  189,  196,  197,  198,  199,  200,  201,  202,  203,
      204,  211,  212,  213,  214,  215,  216,  217,  218,  219,  220,  221,  222,  229,  230,  231,  232,  233,  234,
      235,  243,  244,  245,  246,  247,  248,  257,  258,  259,  260,  261,  262,  263,  264,  265,  266,  267,  268,
      277,  278,  279,  280,  281,  282,  283,  284,  285,  286,  294,  295,  296,  297,  298,  299,  300,  301,  307,
      308,  309,  310,  311,  312,  318,  319,  320,  321,  322,  323,  324,  325,  326,  336,  337,  338,  339,  340,
      341,  342,  343,  344,  345,  346,  347,  348,  349,  350,  351,  361,  362,  363,  364,  365,  366,  367,  368,
      369,  370,  371,  372,  373,  380,  381,  382,  383,  384,  385,  386,  387,  388,  389,  390,  391,  396,  397,
      398,  399,  400,  401,  402,  407,  408,  409,  410,  411,  412,  413,  414,  415,  416,  426,  427,  428,  429,
      430,  431,  432,  433,  434,  435,  436,  437,  438,  439,  451,  452,  453,  454,  455,  456,  457,  458,  459,
      467,  468,  469,  470,  471,  472,  473,  474,  475,  476,  477,  481,  482,  483,  484,  489,  490,  491,  492,
      493,  494,  495,  496,  497,  498,  504,  505,  506,  507,  508,  509,  510,  511,  519,  520,  521,  522,  530,
      531,  532,  533,  534,  535,  541,  542,  543,  544,  1432, 1433, 1434, 1435, 1436, 1437, 1438, 1439, 1440, 1441,
      1442, 1443, 1444, 1445, 1446, 1447, 1448, 1449, 1450, 1451, 1452, 1453, 1454, 1455, 1456, 1457, 1458, 1459, 1460,
      1461, 1462, 1463, 1464, 1465, 1466, 1467, 1468, 1469, 1470, 1471, 1472, 1473, 1474, 1475, 1476, 1477, 1478, 1479,
      1480, 1481, 1482, 1483, 1484, 1485, 1486, 1487, 1488, 1489, 1490, 1491, 1492, 1493, 1494, 1495, 1496, 1497, 1498,
      1499, 1500, 1501, 1502, 1503, 1504, 1505, 1506, 1507, 1508, 1509, 1510, 1511, 1512, 1513, 1514, 1515, 1516, 1517,
      1518, 1519, 1520, 1521, 1522, 1523, 1524, 1525, 1526, 1527, 1528, 1529, 1530, 1531, 1532, 1533, 1534, 1535, 1536,
      1537, 1538, 1539, 1540, 1541, 1542, 1543, 1544, 1545, 1546, 1547, 1548, 1549, 1550, 1551, 1552, 1553, 1554, 1555,
      1556, 1557, 1558, 1559, 1560, 1561, 1562, 1563, 1564, 1565, 1566, 1567, 1568, 1569, 1570, 1571, 1572, 1573, 1574,
      1575, 1576, 1577, 1578, 1579, 1580, 1581, 1582, 1583, 1584, 1585, 1586, 1587, 1588, 1589, 1590, 1591, 1592, 1593,
      1594, 1595, 1596, 1597, 1598, 1599, 1600, 1601, 1602, 1603, 1604, 1605, 1606, 1607, 1608, 1609, 1610, 1611, 1612,
      1613, 1614, 1615, 1616, 1617, 1618, 1619, 1620, 1621, 1622, 1623, 1624, 1625, 1626, 1627, 1628, 1629, 1630, 1631,
      1632, 1633, 1634, 1635, 1636, 1637, 1638, 1639, 1640, 1641, 1642, 1643, 1644, 1645, 1646, 1647, 1648, 1649, 1650,
      1651, 1652, 1653, 1654, 1655, 1656, 1657, 1658, 1659, 1660, 1661, 1662, 1663, 1664, 1665, 1666, 1667, 1668, 1669,
      1670, 1671, 1672, 1673, 1674, 1675, 1676, 1677, 1678, 1679, 1680, 1681, 1682, 1683, 1684, 1685, 1686, 1687, 1688,
      1689, 1690, 1691, 1692, 1693, 1694, 1695, 1696, 1697, 1698, 1699, 1700, 1701, 1702, 1703, 1704, 1705, 1706, 1707,
      1708, 1709, 1710, 1711, 1712, 1713, 1714, 1715, 1716, 1717, 1718, 1719, 1720, 1721, 1722, 1723, 1724, 1725, 1726,
      1727, 1728, 1729, 1730, 1731, 1732, 1733, 1734, 1735, 1736, 1737, 1738, 1739, 1740, 1741, 1742, 1743, 1744, 1745,
      1746, 1747, 1748, 1749, 1750, 1751, 1752, 1753, 1754, 1755, 1756, 1757, 1758, 1759, 1760, 1761, 1762, 1763, 1764,
      1765, 1766, 1767, 1768, 1769, 1770, 1771, 1772, 1773, 1774, 1775, 1776, 1777, 1778, 1779, 1780, 1781, 1782, 1783,
      1784, 1785, 1786, 1787, 1788, 1789, 1790, 1791, 1792, 1793, 1794, 1795, 1796, 1797, 1798, 1799, 1800, 1801, 1802,
      1803, 1804, 1805, 1806, 1807, 1808, 1809, 1810, 1811, 1812, 1813, 1814, 1815, 1816, 1817, 1818, 1819, 1820, 1821,
      1822, 1823, 1824, 1825, 1826, 1827, 1828, 1829, 1830, 1831, 1832, 1833, 1834, 1835, 1836, 1837, 1838, 1839, 1840,
      1841, 1842, 1843, 1844, 1845, 1846, 1847, 1848, 1849, 1850, 1851, 1852, 1853, 1854, 1855, 1856, 1857, 1858, 1859,
      1860, 1861, 1862, 1863, 1864, 1865, 1866, 1867, 1868, 1869, 1870, 1871, 1872, 1873, 1874, 1875, 1876, 1877, 1878,
      1879, 1880, 1881, 1882, 1883, 1884, 1885, 1886, 1887, 1888, 1889, 1890, 1891, 1892, 1893, 1894, 1895, 1896, 1897,
      1898, 1899, 1900, 1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909, 1910, 1911, 1912, 1913, 1914, 1915, 1916,
      1917, 1918, 1919, 1920, 1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933, 1934, 1935,
      1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954,
      1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973,
      1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992,
      1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011,
      2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030,
      2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040, 2041, 2042, 2043, 2044, 2045, 2046, 2047, 2048, 2049,
      2050, 2051, 2052, 2053, 2054, 2055, 2056, 2057, 2058, 2059, 2060, 2061, 2062, 2063, 2064, 2065, 2066, 2067, 2068,
      2069, 2070, 2071, 2072, 2073, 2074, 2075, 2076, 2077, 2078, 2079, 2080, 2081, 2082, 2083, 2084, 2085, 2086, 2087,
      2088, 2089, 2090, 2091, 2092, 2093, 2094, 2095, 2096, 2097, 2098, 2099, 2100, 2101, 2102, 2103, 2104, 2105, 2106,
      2107, 2108, 2109, 2110, 2111, 2112, 2113, 2114, 2115, 2116, 2117, 2118, 2119, 2120, 2121, 2122, 2123, 2124, 2125,
      2126, 2127, 2128, 2129, 2130, 2131, 2132, 2133, 2134, 2135, 2136, 2137, 2138, 2139, 2140, 2141, 2142, 2143, 2144,
      2145, 2146, 2147, 2148, 2149, 2150, 2151, 2152, 2153, 2154, 2155, 2156, 2157, 2158, 2159, 2160, 2161, 2162, 2163,
      2164, 2165, 2166, 2167, 2168, 2169, 2170, 2171, 2172, 2173, 2174, 2175, 2176};
  int tti8[] = {
      0,    3,    4,    7,    8,    11,   12,   13,   19,   20,   21,   22,   23,   29,   30,   31,   32,   33,   37,
      38,   39,   44,   45,   46,   47,   52,   53,   54,   55,   56,   60,   61,   62,   69,   70,   71,   72,   73,
      74,   75,   83,   84,   85,   86,   87,   88,   89,   95,   96,   97,   98,   99,   105,  106,  107,  108,  109,
      117,  118,  119,  120,  121,  122,  123,  124,  125,  134,  135,  136,  137,  138,  139,  140,  146,  147,  148,
      149,  150,  156,  157,  158,  159,  160,  172,  173,  174,  175,  176,  177,  178,  179,  180,  181,  187,  188,
      189,  190,  191,  192,  200,  201,  202,  203,  204,  205,  206,  207,  217,  218,  219,  220,  221,  222,  223,
      224,  225,  232,  233,  234,  235,  236,  237,  238,  246,  247,  248,  249,  250,  251,  252,  263,  264,  265,
      266,  267,  268,  269,  270,  271,  272,  281,  282,  283,  284,  285,  286,  287,  288,  289,  290,  298,  299,
      300,  301,  302,  303,  304,  310,  311,  312,  313,  314,  323,  324,  325,  326,  327,  328,  329,  344,  345,
      346,  347,  348,  349,  350,  351,  352,  353,  354,  355,  356,  357,  367,  368,  369,  370,  371,  372,  373,
      374,  375,  376,  386,  387,  388,  389,  390,  391,  392,  393,  394,  399,  400,  401,  402,  403,  412,  413,
      414,  415,  416,  417,  418,  419,  433,  434,  435,  436,  437,  438,  439,  440,  441,  442,  443,  444,  445,
      455,  456,  457,  458,  459,  460,  461,  462,  463,  464,  472,  473,  474,  475,  476,  477,  478,  479,  484,
      485,  494,  495,  496,  497,  498,  499,  500,  501,  508,  509,  510,  511,  512,  513,  521,  522,  523,  524,
      525,  526,  527,  533,  534,  535,  536,  537,  543,  544,  545,  546,  547,  555,  556,  557,  558,  559,  560,
      561,  569,  570,  571,  572,  573,  574,  575,  582,  583,  584,  585,  586,  587,  593,  594,  595,  596,  597,
      599,  1804, 1805, 1806, 1807, 1808, 1809, 1810, 1811, 1812, 1813, 1814, 1815, 1816, 1817, 1818, 1819, 1820, 1821,
      1822, 1823, 1824, 1825, 1826, 1827, 1828, 1829, 1830, 1831, 1832, 1833, 1834, 1835, 1836, 1837, 1838, 1839, 1840,
      1841, 1842, 1843, 1844, 1845, 1846, 1847, 1848, 1849, 1850, 1851, 1852, 1853, 1854, 1855, 1856, 1857, 1858, 1859,
      1860, 1861, 1862, 1863, 1864, 1865, 1866, 1867, 1868, 1869, 1870, 1871, 1872, 1873, 1874, 1875, 1876, 1877, 1878,
      1879, 1880, 1881, 1882, 1883, 1884, 1885, 1886, 1887, 1888, 1889, 1890, 1891, 1892, 1893, 1894, 1895, 1896, 1897,
      1898, 1899, 1900, 1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909, 1910, 1911, 1912, 1913, 1914, 1915, 1916,
      1917, 1918, 1919, 1920, 1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933, 1934, 1935,
      1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954,
      1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973,
      1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992,
      1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011,
      2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030,
      2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040, 2041, 2042, 2043, 2044, 2045, 2046, 2047, 2048, 2049,
      2050, 2051, 2052, 2053, 2054, 2055, 2056, 2057, 2058, 2059, 2060, 2061, 2062, 2063, 2064, 2065, 2066, 2067, 2068,
      2069, 2070, 2071, 2072, 2073, 2074, 2075, 2076, 2077, 2078, 2079, 2080, 2081, 2082, 2083, 2084, 2085, 2086, 2087,
      2088, 2089, 2090, 2091, 2092, 2093, 2094, 2095, 2096, 2097, 2098, 2099, 2100, 2101, 2102, 2103, 2104, 2105, 2106,
      2107, 2108, 2109, 2110, 2111, 2112, 2113, 2114, 2115, 2116, 2117, 2118, 2119, 2120, 2121, 2122, 2123, 2124, 2125,
      2126, 2127, 2128, 2129, 2130, 2131, 2132, 2133, 2134, 2135, 2136, 2137, 2138, 2139, 2140, 2141, 2142, 2143, 2144,
      2145, 2146, 2147, 2148, 2149, 2150, 2151, 2152, 2153, 2154, 2155, 2156, 2157, 2158, 2159, 2160, 2161, 2162, 2163,
      2164, 2165, 2166, 2167, 2168, 2169, 2170, 2171, 2172, 2173, 2174, 2175, 2176, 2177, 2178, 2179, 2180, 2181, 2182,
      2183, 2184, 2185, 2186, 2187, 2188, 2189, 2190, 2191, 2192, 2193, 2194, 2195, 2196, 2197, 2198, 2199, 2200, 2201,
      2202, 2203, 2204, 2205, 2206, 2207, 2208, 2209, 2210, 2211, 2212, 2213, 2214, 2215, 2216, 2217, 2218, 2219, 2220,
      2221, 2222, 2223, 2224, 2225, 2226, 2227, 2228, 2229, 2230, 2231, 2232, 2233, 2234, 2235, 2236, 2237, 2238, 2239,
      2240, 2241, 2242, 2243, 2244, 2245, 2246, 2247, 2248, 2249, 2250, 2251, 2252, 2253, 2254, 2255, 2256, 2257, 2258,
      2259, 2260, 2261, 2262, 2263, 2264, 2265, 2266, 2267, 2268, 2269, 2270, 2271, 2272, 2273, 2274, 2275, 2276, 2277,
      2278, 2279, 2280, 2281, 2282, 2283, 2284, 2285, 2286, 2287, 2288, 2289, 2290, 2291, 2292, 2293, 2294, 2295, 2296,
      2297, 2298, 2299, 2300, 2301, 2302, 2303, 2304, 2305, 2306, 2307, 2308, 2309, 2310, 2311, 2312, 2313, 2314, 2315,
      2316, 2317, 2318, 2319, 2320, 2321, 2322, 2323, 2324, 2325, 2326, 2327, 2328, 2329, 2330, 2331, 2332, 2333, 2334,
      2335, 2336, 2337, 2338, 2339, 2340, 2341, 2342, 2343, 2344, 2345, 2346, 2347, 2348, 2349, 2350, 2351, 2352, 2353,
      2354, 2355, 2356, 2357, 2358, 2359, 2360, 2361, 2362, 2363, 2364, 2365, 2366, 2367, 2368, 2369, 2370, 2371, 2372,
      2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2384, 2385, 2386, 2387, 2388, 2389, 2390, 2391,
      2392, 2393, 2394, 2395, 2396, 2397, 2398, 2399, 2400, 2401, 2402, 2403, 2404, 2405, 2406, 2407, 2408, 2409, 2410,
      2411, 2412};

  indices[0].assign(tti0, tti0 + sizeof(tti0) / sizeof(int));
  indices[1].assign(tti1, tti1 + sizeof(tti1) / sizeof(int));
  indices[2].assign(tti2, tti2 + sizeof(tti2) / sizeof(int));
  indices[3].assign(tti3, tti3 + sizeof(tti3) / sizeof(int));
  indices[4].assign(tti4, tti4 + sizeof(tti4) / sizeof(int));
  indices[5].assign(tti5, tti5 + sizeof(tti5) / sizeof(int));
  indices[6].assign(tti6, tti6 + sizeof(tti6) / sizeof(int));
  indices[7].assign(tti7, tti7 + sizeof(tti7) / sizeof(int));
  indices[8].assign(tti8, tti8 + sizeof(tti8) / sizeof(int));
  for (int i(0); i < 9; ++i) {
    eemTTArray[i] = new TObjArray(indices[i].size());
    eepTTArray[i] = new TObjArray(indices[i].size());
    for (unsigned iInd(0); iInd < indices[i].size(); ++iInd) {
      eemTTArray[i]->Add(eemTTSectors[indices[i][iInd]]);
      eepTTArray[i]->Add(eepTTSectors[indices[i][iInd]]);
    }
  }

  ecalSubdetPartitions[0] = new TLine(0., 5., 9., 5.);
  ecalSubdetPartitions[1] = new TLine(0., 3., 9., 3.);
  ecalSubdetPartitions[2] = new TLine(0., 1., 9., 1.);
  for (int i(0); i < 3; ++i) {
    ecalSubdetPartitions[i]->SetLineStyle(2);
    ecalSubdetPartitions[i]->SetLineWidth(3);
  }

  for (int i(0); i < 19; i++) {
    ecalRCTSectors[i] = new TLine(-32 + (i + 1) % 2 * 4, i * 4, 32 - (i + 1) % 2 * 4, i * 4);
    ecalRCTSectors[i]->SetLineWidth(3);
    if (i % 2 == 0)
      ecalRCTSectors[i]->SetLineColor(kRed);
  }
  for (int i(0); i < 17; ++i) {
    ecalRCTSectors[i + 19] = new TLine(-32 + i * 4, 0, -32 + i * 4, 72);
    ecalRCTSectors[i + 19]->SetLineWidth(3);
    ecalRCTSectors[i + 19]->SetLineColor(kRed);
    if (i % 2 == 1 && i != 1 && i != 15)
      ecalRCTSectors[i + 19]->SetLineStyle(3);
  }
}

inline bool EcalRenderPlugin::applies(const VisDQMObject& dqmObject, const VisDQMImgInfo&) {
  return dqmObject.name.substr(0, 4) == "Ecal" && dqmObject.name.substr(4, 9) != "Preshower" &&
         dqmObject.name.substr(4, 11) != "Calibration";
}

inline void EcalRenderPlugin::preDraw(TCanvas* canvas,
                                      const VisDQMObject& dqmObject,
                                      const VisDQMImgInfo& imgInfo,
                                      VisDQMRenderInfo& renderInfo) {
  if (!dqmObject.object || !dqmObject.object->InheritsFrom(TH1::Class()))
    return;
  TH1* obj(static_cast<TH1*>(dqmObject.object));

  canvas->cd();

  gStyle->Reset("Modern");

  // color 10 = off-white
  gStyle->SetCanvasColor(10);
  gStyle->SetPadColor(10);
  gStyle->SetFillColor(10);
  gStyle->SetFrameFillColor(10);
  gStyle->SetStatColor(10);
  gStyle->SetTitleFillColor(10);

  gStyle->SetOptTitle(true);
  gStyle->SetTitleBorderSize(0);
  gStyle->SetStatBorderSize(1);
  gStyle->SetOptFit(false);

  TGaxis::SetMaxDigits(3);

  gROOT->ForceStyle();

  TString fullpath(dqmObject.name.c_str());

  if (obj->GetXaxis()->GetLabels()) {
    gPad->SetBottomMargin(0.2);
    obj->GetXaxis()->LabelsOption("v");
  }

  bool isTH2Derived(obj->InheritsFrom(TH2::Class()));
  if (isTH2Derived) {
    gStyle->SetOptStat(0);
    gPad->SetLogy(false);
    gPad->SetRightMargin(0.15);
    gPad->SetGrid(true, true);
    obj->SetStats(false);
    obj->SetContour(50);

    renderInfo.drawOptions = "colz";
  }

  if (obj->IsA() == TProfile2D::Class()) {
    obj->GetZaxis()->SetLimits(0., obj->GetMaximum());
    if (obj->GetMaximum() > 0.)
      obj->SetMinimum(1.e-08);
    gStyle->SetPalette(1);
  } else if (obj->IsA() == TH2F::Class() || obj->IsA() == TH2D::Class()) {
    if (TString(obj->GetZaxis()->GetTitle()).Length() != 0) {
      gStyle->SetPalette(1);
      obj->GetZaxis()->SetRangeUser(0., obj->GetMaximum());
    } else if (fullpath.Contains("quality") || fullpath.Contains("global summary") ||
               fullpath.Contains("status summary")) {
      obj->SetMinimum(-0.00000001);
      obj->SetMaximum(7.0);
      gStyle->SetPalette(qualityPalette.size(), &(qualityPalette[0]));
      renderInfo.drawOptions = "col";
    } else if (fullpath.Contains("SummaryMap")) {
      dqm::utils::reportSummaryMapPalette(static_cast<TH2*>(obj));
    } else if (fullpath.Contains("Masking")) {
      obj->SetMinimum(0);
      obj->SetMaximum(1.0);
      gStyle->SetPalette(2);
      renderInfo.drawOptions = "col";
    } else {
      obj->SetMinimum(0.);
      gStyle->SetPalette(accumPalette.size(), &(accumPalette[0]));
    }
  } else if (obj->IsA() == TProfile::Class()) {
    gStyle->SetOptStat("ourme");
    gPad->SetLogy(false);
    obj->SetMarkerStyle(8);
    renderInfo.drawOptions = "P";
  } else if (obj->IsA() == TH1F::Class() || obj->IsA() == TH1D::Class()) {
    gStyle->SetOptStat("ourme");

    canvas->UseCurrentStyle();
    bool isProjection(fullpath.Contains(" eta") || fullpath.Contains(" phi"));
    bool isTrend(fullpath.Contains("Trend"));

    if (!isProjection && !isTrend && obj->GetBinContent(obj->GetMaximumBin()) > 0.)
      gPad->SetLogy(true);
    else
      gPad->SetLogy(false);

    if ((fullpath.Contains("EventInfo/Calib")))
      renderInfo.drawOptions = "bar2 TEXT0";
    else
      renderInfo.drawOptions = "HIST";
  }

  bool applyDefaults(true);
  preDrawByName(canvas, dqmObject, imgInfo, renderInfo, applyDefaults);

  if (!applyDefaults)
    return;

  std::pair<unsigned, unsigned> types(getPlotType(obj, fullpath));
  unsigned& otype(types.first);
  unsigned& btype(types.second);

  bool isEB(fullpath.Contains("EcalBarrel"));
  uint32_t packedInfo = obj->GetUniqueID();
  bool isNewStyle = (packedInfo > 0);
  bool isMap = (isNewStyle ? (packedInfo % 2 == 1) : isTH2Derived);

  if (isMap) {
    switch (otype) {
      case kEB:
        obj->GetXaxis()->SetNdivisions(18, false);
        obj->GetYaxis()->SetNdivisions(2, false);
        break;
      case kEE:
        obj->GetXaxis()->SetNdivisions(20);
        obj->GetYaxis()->SetNdivisions(10);
        if (btype == kTriggerTower)
          gPad->SetGrid(false, false);
        break;
      case kEEm:
      case kEEp:
        obj->GetXaxis()->SetNdivisions(10);
        obj->GetYaxis()->SetNdivisions(10);
        if (btype == kTriggerTower)
          gPad->SetGrid(false, false);
        break;
      case kSM:
      case kEBSM:
      case kEESM:
        if (isEB) {
          obj->GetXaxis()->SetNdivisions(17);
          obj->GetYaxis()->SetNdivisions(4);
        } else {
          obj->GetXaxis()->SetNdivisions(obj->GetNbinsX() / 5);
          obj->GetYaxis()->SetNdivisions(obj->GetNbinsY() / 5);
          if (btype == kTriggerTower || btype == kPseudoStrip)
            gPad->SetGrid(false, false);
        }
        break;
      case kSMMEM:
      case kEBSMMEM:
      case kEESMMEM:
        obj->GetXaxis()->SetNdivisions(10);
        obj->GetYaxis()->SetNdivisions(1);
        break;
      case kEcal:
        if (btype == kRCT) {
          obj->GetXaxis()->SetNdivisions(64, false);
          obj->GetYaxis()->SetNdivisions(72, false);
          obj->GetXaxis()->SetLabelSize(0);
          obj->GetYaxis()->SetLabelSize(0);
        } else {
          obj->GetXaxis()->SetNdivisions(9, false);
          obj->GetYaxis()->SetNdivisions(6, false);
          obj->GetXaxis()->SetLabelSize(0.);
          obj->GetYaxis()->SetLabelSize(0.1);
        }
        break;
      case kMEM:
        obj->GetXaxis()->SetNdivisions(44);
        obj->GetYaxis()->SetNdivisions(10);
        break;
      case kEBMEM:
        if (isNewStyle) {
          obj->GetXaxis()->SetNdivisions(36);
          obj->GetYaxis()->SetNdivisions(10);
        } else {
          obj->GetXaxis()->SetNdivisions(18);
          obj->GetYaxis()->SetNdivisions(2);
        }
        break;
      case kEEMEM:
        if (isNewStyle) {
          obj->GetXaxis()->SetNdivisions(8);
          obj->GetYaxis()->SetNdivisions(10);
        } else {
          obj->GetXaxis()->SetNdivisions(9);
          obj->GetYaxis()->SetNdivisions(2);
        }
        break;
      default:
        break;
    }
  } else {
    if (isTH2Derived) {
      int nbins(obj->GetNbinsX());
      int ndiv(nbins > 50 ? nbins / 4 : nbins);
      obj->GetXaxis()->SetNdivisions(ndiv, false);
      nbins = obj->GetNbinsY();
      ndiv = nbins > 50 ? nbins / 4 : nbins;
      obj->GetYaxis()->SetNdivisions(ndiv, false);
    } else {
      if (btype == kProjEta || btype == kProjPhi)
        gStyle->SetOptStat("rme");
      else if (btype == kDCC || btype == kTCC || btype == kTrend)
        gStyle->SetOptStat("e");
    }
  }
}

inline void EcalRenderPlugin::postDraw(TCanvas* canvas, const VisDQMObject& dqmObject, const VisDQMImgInfo& imgInfo) {
  if (!dqmObject.object || !dqmObject.object->InheritsFrom(TH1::Class()))
    return;
  TH1* obj(static_cast<TH1*>(dqmObject.object));

  canvas->cd();

  if (obj->IsA() == TH1F::Class() || obj->IsA() == TH1D::Class()) {
    gStyle->SetOptStat("ourme");
  }

  bool applyDefaults(true);
  postDrawByName(canvas, dqmObject, imgInfo, applyDefaults);

  if (!applyDefaults)
    return;

  TString fullpath(dqmObject.name.c_str());

  std::pair<unsigned, unsigned> types(getPlotType(obj, fullpath));

  unsigned& otype(types.first);
  unsigned& btype(types.second);

  bool isEB(fullpath.Contains("EcalBarrel"));

  bool isTH2Derived(obj->InheritsFrom(TH2::Class()));
  uint32_t packedInfo = obj->GetUniqueID();
  bool isNewStyle = (packedInfo > 0);
  bool isMap = (isNewStyle ? (packedInfo % 2 == 1) : isTH2Derived);

  if (isMap) {
    canvas->SetBit(TCanvas::kClipFrame);

    switch (otype) {
      case kEB:
        gStyle->SetPaintTextFormat("+03g");
        setLimits(ebSMLabels, obj);
        ebSMLabels->Draw("text same");
        break;
      case kEE:
        gStyle->SetPaintTextFormat("+03g");
        setLimits(eeSMLabels, obj);
        eeSMLabels->Draw("text same");
        drawEESectors('D', 0, obj);
        if (btype == kTriggerTower)
          drawEESectors('T', 0, obj);
        break;
      case kEEm:
        gStyle->SetPaintTextFormat("+03g");
        setLimits(eemSMLabels, obj);
        eemSMLabels->Draw("text same");
        drawEESectors('D', -10, obj);
        if (btype == kTriggerTower)
          drawEESectors('T', -10, obj);
        break;
      case kEEp:
        gStyle->SetPaintTextFormat("+03g");
        setLimits(eepSMLabels, obj);
        eepSMLabels->Draw("text same");
        drawEESectors('D', 10, obj);
        if (btype == kTriggerTower)
          drawEESectors('T', 10, obj);
        break;
      case kSM:
      case kEBSM:
      case kEESM:
        gStyle->SetPaintTextFormat("g");
        if (isEB) {
          float ymin(obj->GetYaxis()->GetXmin());
          float ymax(obj->GetYaxis()->GetXmax());
          setLimits(ebTTLabels, obj);
          ebTTLabels->Draw("text same");

          if (ymin < 0.) {
            int ism(-int(ymax) / 20);
            if (!ebpSMPhiAxis[ism]) {
              ebpSMPhiAxis[ism] = new TGaxis(0, ymax, 0.0001, ymin, -ymax, -ymin, 4);
              ebpSMPhiAxis[ism]->SetLabelFont(obj->GetYaxis()->GetLabelFont());
              ebpSMPhiAxis[ism]->SetLabelSize(obj->GetXaxis()->GetLabelSize());
              ebpSMPhiAxis[ism]->SetLabelOffset(-0.02);
            }
            if (ebpSMPhiAxis[ism]) {
              obj->GetYaxis()->SetLabelSize(0.);
              ebpSMPhiAxis[ism]->Draw("same");
            }
          }
        } else {
          // EE SC labels are left-right symmetric - no need to worry about mirroring
          TObjArray* matches(TPRegexp("EE([+-]0[1-9])").MatchS(fullpath));
          matches->SetOwner(true);
          if (matches->GetEntries() > 0) {
            int iSM(TString(matches->At(1)->GetName()).Atoi());
            int iSMCopy = iSM;

            TH2C* labels(nullptr);
            if (btype == kTriggerTower || btype == kPseudoStrip)
              labels = eeTTLabels;
            else
              labels = iSM < 0 ? eemSCLabels : eepSCLabels;

            labels->GetXaxis()->SetRangeUser(obj->GetXaxis()->GetXmin(), obj->GetXaxis()->GetXmax() - 0.5);
            labels->GetYaxis()->SetRangeUser(obj->GetYaxis()->GetXmin(), obj->GetYaxis()->GetXmax() - 0.5);
            labels->Draw("text same");

            if (btype == kTriggerTower || btype == kPseudoStrip) {
              eemTCCLabels->GetXaxis()->SetRangeUser(obj->GetXaxis()->GetXmin(), obj->GetXaxis()->GetXmax() - 1);
              eemTCCLabels->GetYaxis()->SetRangeUser(obj->GetYaxis()->GetXmin(), obj->GetYaxis()->GetXmax() - 1);
              eepTCCLabels->GetXaxis()->SetRangeUser(obj->GetXaxis()->GetXmin(), obj->GetXaxis()->GetXmax() - 1);
              eepTCCLabels->GetYaxis()->SetRangeUser(obj->GetYaxis()->GetXmin(), obj->GetYaxis()->GetXmax() - 1);
              if (iSM < 0)
                eemTCCLabels->Draw("text same");
              else
                eepTCCLabels->Draw("text same");
            }

            // historical - plots up to 2012C were mirrored for EE-
            // drawEESectors() need to shift the objects accordingly
            if (iSM < 0 && !isNewStyle)
              iSM += 10;

            drawEESectors('D', iSM, obj);
            if (btype == kTriggerTower || btype == kPseudoStrip) {
              drawEESectors('T', iSMCopy, obj);
              drawEESectors('t', iSMCopy, obj);
            }
          }
          delete matches;
        }
        break;
      case kSMMEM:
      case kEBSMMEM:
      case kEESMMEM:
        setLimits(MEMLabels, obj);
        MEMLabels->Draw("text same");
        break;
      case kEcal:
        if (btype == kRCT) {
          TGaxis rctEtaAxis(-28, 0, 28, 0, 4, 18, 14, "BMN+-");
          TGaxis ecalEtaAxis(-32, 72, 32, 72, -32, 32, 416, "BLN-");
          TGaxis rctPhiAxis(-32, 0, -32, 72, 0, 18, 18, "BMN+-");
          rctEtaAxis.DrawClone("same");
          ecalEtaAxis.DrawClone("same");
          rctPhiAxis.DrawClone("same");
          for (int i(0); i < 36; ++i)
            ecalRCTSectors[i]->Draw();
        } else {
          gStyle->SetPaintTextFormat("+03g");
          ecalSMLabels->Draw("text same");
          for (int i(0); i < 3; ++i)
            ecalSubdetPartitions[i]->Draw();
        }
        break;
      case kEBMEM:
        if (!isNewStyle) {
          gStyle->SetPaintTextFormat("+03g");
          setLimits(ebSMLabels, obj);
          ebSMLabels->Draw("text same");
        }
        break;
      case kEEMEM:
        if (!isNewStyle) {
          gStyle->SetPaintTextFormat("+03g");
          setLimits(eePNLabels, obj);
          eePNLabels->Draw("text same");
        }
        break;
      default:
        break;
    }
  }
}

inline void EcalRenderPlugin::preDrawByName(TCanvas* canvas,
                                            VisDQMObject const& dqmObject,
                                            VisDQMImgInfo const&,
                                            VisDQMRenderInfo& renderInfo,
                                            bool& applyDefaults) {
  // avoid running regexp matches
  TString fullpath(dqmObject.name.c_str());
  if (!fullpath.Contains("shape") && !fullpath.Contains("Timing") && !fullpath.Contains("Pedestal") &&
      !fullpath.Contains("pedestal") && !fullpath.Contains("event size") && !fullpath.Contains("flag mismatch") &&
      !fullpath.Contains("Trigger Primitives") && !fullpath.Contains("Occupancy") && !fullpath.Contains("TestPulse") &&
      !fullpath.Contains("Cluster") && !fullpath.Contains("channel status") && !fullpath.Contains("Status Flags") &&
      !fullpath.Contains("Masking Status") && !fullpath.Contains("Real vs Emulated") &&
      !fullpath.Contains("energy Side"))
    return;

  TH1* obj(static_cast<TH1*>(dqmObject.object));

  bool isNewStyle = (obj->GetUniqueID() > 0);

  if (TPRegexp("E[BE]LaserTask/Laser[1-4]/E[BE]LT shape E[BE][+-][0-1][0-9] L[1-4]").MatchB(fullpath) ||
      TPRegexp("E[BE]TestPulseTask/Gain[0-9]+/E[BE]TPT shape E[BE][+-][0-1][0-9] G[0-9]+").MatchB(fullpath) ||
      TPRegexp("EELedTask/Led[1-2]/EELDT shape EE[+-]0[0-9] L[1-2]").MatchB(fullpath)) {
    canvas->SetTheta(+30.);
    canvas->SetPhi(-60.);
    obj->GetXaxis()->SetTitleOffset(2.5);
    obj->GetYaxis()->SetTitleOffset(3.0);
    obj->GetZaxis()->SetTitleOffset(1.3);

    renderInfo.drawOptions = "lego";

    applyDefaults = false;
  } else if (TPRegexp("E[BE]Pedestal(|Online)Task/Gain[0-9]+/E[BE]PO?T pedestal E[BE][+-][0-1][0-9] G[0-9]+")
                 .MatchB(fullpath)) {
    obj->GetZaxis()->SetRangeUser(160., 240.);
    gStyle->SetPalette(pedestalPalette.size(), &(pedestalPalette[0]));
  } else if (TPRegexp("E[BE]SummaryClient/E[BE]POT (|EE [+-] )pedestal G12 RMS map").MatchB(fullpath) ||
             TPRegexp("E[BE]PedestalOnlineClient/E[BE]POT pedestal rms map G12 E[BE][+-][0-1][0-9]").MatchB(fullpath)) {
    obj->GetZaxis()->SetRangeUser(0., 5.);
  } else if (TPRegexp("E[BE]SelectiveReadoutTask/E[BE]SRT event size vs DCC").MatchB(fullpath)) {
    gPad->SetLogy(true);
    obj->GetYaxis()->SetRangeUser(0.1, 0.608 * 68);

    applyDefaults = false;
  }
  /*
  else if(TPRegexp("E[BE]SelectiveReadoutTask/E[BE]SRT TT flag mismatch(| EE [+-])").MatchB(fullpath)){
    const Int_t Number = 2;
    Double_t Red[Number]    = {1.00, 1.00};
    Double_t Green[Number]  = {0.85, 0.00};
    Double_t Blue[Number]   = {0.85, 0.00};
    Double_t Length[Number] = {0.00, 1.00 };
    Int_t nb=50;
    TColor::CreateGradientColorTable(Number,Length,Red,Green,Blue,nb);
  }
  */
  else if (TPRegexp("E[BE]TriggerTowerTask/E[BE]TTT Real vs Emulated TP Et(| EE [+-])").MatchB(fullpath)) {
    if (obj->GetMaximum() > 0.)
      gPad->SetLogz(true);
    gPad->SetGrid(false, false);

    applyDefaults = false;
  } else if (TPRegexp("E[BE]SummaryClient/E[BE]TTT (|EE [+-] )Trigger Primitives Timing summary").MatchB(fullpath) ||
             TPRegexp("E[BE]TriggerTowerClient/E[BE]TTT Trigger Primitives Timing E[BE][+-][0-1][0-9]")
                 .MatchB(fullpath)) {
    obj->SetMinimum(-1.0);
    obj->SetMaximum(6.0);
    gStyle->SetPalette(tpTimingPalette.size(), &(tpTimingPalette[0]));
  } else if (TPRegexp("E[BE]TimingTask/E[BE]TMT timing (map(| EE [+-])|E[BE][+-][0-1][0-9])").MatchB(fullpath)) {
    if (isNewStyle)
      obj->GetZaxis()->SetRangeUser(-5., 5.);
    else
      obj->GetZaxis()->SetRangeUser(45., 55.);
    gStyle->SetPalette(timingPalette.size(), &(timingPalette[0]));
  } else if (TPRegexp("E[BE]TimingTask/E[BE]TMT timing E[BE]+ vs E[BE]-").MatchB(fullpath)) {
    gPad->SetGrid(false, false);

    applyDefaults = false;
  } else if (TPRegexp("E[BE]TimingTask/E[BE]TMT timing vs amplitude (summary(| EE [+-])|E[BE][+-][0-1][0-9])")
                 .MatchB(fullpath)) {
    if (obj->GetMaximum() > 0.)
      gPad->SetLogz(true);
    gPad->SetLogx(true);
    gPad->SetGrid(false, false);

    applyDefaults = false;
  } else if (TPRegexp("E[BE]TimingTask/E[BE]TMT in-time vs BX[+-]1 amplitude(| EE [+-])").MatchB(fullpath)) {
    if (obj->GetMaximum() > 0.)
      gPad->SetLogz(true);
    obj->GetXaxis()->SetNoExponent(kTRUE);
    gStyle->SetPalette(1);
    gPad->SetGrid(false, false);

    applyDefaults = false;
  } else if (TPRegexp("E[BE]TimingTask/E[BE]TMT timing E[BE][+] vs E[BE][-]").MatchB(fullpath)) {
    if (obj->GetMaximum() > 0.)
      gPad->SetLogz(true);
    gPad->SetGrid(false, false);

    applyDefaults = false;
  } else if (TPRegexp("E[BE]TimingClient/E[BE]TMT timing projection (eta|phi)(| EE [+-])").MatchB(fullpath))
    obj->GetYaxis()->SetRangeUser(-5., 5.);
  else if (TPRegexp("E[BE]ClusterTask/E[BE]CLT SC energy vs seed crystal energy").MatchB(fullpath)) {
    if (obj->GetMaximum() > 0.)
      gPad->SetLogz(true);
    gPad->SetGrid(false, false);

    applyDefaults = false;
  } else if (TPRegexp("E[BE]OccupancyTask/E[BE]OT rec hit thr occupancy correlation").MatchB(fullpath) ||
             TPRegexp("E[BE]OccupancyTask/E[BE]OT rec hit thr occupancy difference").MatchB(fullpath)) {
    if (obj->GetMaximum() > 0.)
      gPad->SetLogz(true);
    gPad->SetGrid(false, false);
    //obj->SetStats(true);
    //gStyle->SetOptStat("ourme");

    applyDefaults = false;
  } else if (TPRegexp("Preshower EE vs ES energy Side[+-]").MatchB(fullpath)) {
    obj->GetXaxis()->SetNoExponent(kTRUE);
    gStyle->SetPalette(1);
    gPad->SetGrid(false, false);

    applyDefaults = false;
  }

  if (TPRegexp("E[BE]IntegrityClient/E[BE]IT (|EE [+-] )channel status map").MatchB(fullpath)) {
    if (obj->GetMaximum() > 0.)
      obj->GetZaxis()->SetRangeUser(0., 15.);
    obj->SetContour(15);
    gStyle->SetPalette(1);
  }
  if (TPRegexp("E[BE]TriggerTowerTask/E[BE]TTT TT Status Flags(| EE [+-])").MatchB(fullpath)) {
    if (obj->GetMaximum() > 0.)
      obj->GetZaxis()->SetRangeUser(0., 5.);
    obj->SetContour(5);
    gStyle->SetPalette(1);
  }
  if (TPRegexp("E[BE]TriggerTowerTask/E[BE]TTT TT Masking Status(| EE [+-])").MatchB(fullpath)) {
    if (obj->GetMaximum() > 0.)
      obj->GetZaxis()->SetRangeUser(0., 1.);
    gStyle->SetPalette(1);
  }
  if (TPRegexp("E[BE]TriggerTowerTask/E[BE]TTT TTF4 vs Masking Status(| EE [+-])").MatchB(fullpath)) {
    if (obj->GetMaximum() > 0.)
      obj->GetZaxis()->SetRangeUser(0., 14.);
    gStyle->SetPalette(accumMaskedPalette.size(), &(accumMaskedPalette[0]));
  }
  if (TPRegexp("E[BE]OccupancyTask/E[BE]OT (|TP )(digi |rec hit )(|thr )occupancy (|EE [+-] )projection (eta|phi)")
          .MatchB(fullpath) ||
      TPRegexp("E[BE]ClusterTask/E[BE]CLT BC number projection (eta|phi)(| EE [+-])").MatchB(fullpath)) {
    if (obj->GetMaximum() > 0.)
      obj->GetYaxis()->SetRangeUser(0., 1.2 * obj->GetMaximum());
  }

  if (TPRegexp("E[BE]TestPulseTask/Gain(12|6|1)/E[BE]TPT amplitude E[BE][+-][0-1][0-9] (G12|G6|G1)").MatchB(fullpath)) {
    if (fullpath.Contains("EBTPT"))
      obj->GetZaxis()->SetRangeUser(100., 800.);
    else if (fullpath.Contains("EETPT"))
      obj->GetZaxis()->SetRangeUser(150., 850.);
  }

  if (TPRegexp("E[BE]TestPulseClient/E[BE]TPT test pulse rms (G12|G6|G1) E[BE][+-][0-1][0-9]").MatchB(fullpath)) {
    if (fullpath.Contains(" G12 "))
      obj->GetZaxis()->SetRangeUser(0., 10.);
    else if (fullpath.Contains(" G6 "))
      obj->GetZaxis()->SetRangeUser(0., 80.);
    else if (fullpath.Contains(" G1 "))
      obj->GetZaxis()->SetRangeUser(0., 160.);
  }
}

inline void EcalRenderPlugin::postDrawByName(TCanvas* canvas,
                                             VisDQMObject const& dqmObject,
                                             VisDQMImgInfo const&,
                                             bool& applyDefaults) {
  TString fullpath(dqmObject.name.c_str());

  if (!fullpath.Contains("Timing") && !fullpath.Contains("Real vs Emulated") && !fullpath.Contains("Occupancy") &&
      !fullpath.Contains("Cluster") && !fullpath.Contains("TT Flags vs Et"))
    return;

  TH1* obj(static_cast<TH1*>(dqmObject.object));

  bool isNewStyle = (obj->GetUniqueID() > 0);

  if (!isNewStyle && TPRegexp("E[BE]TimingTask/E[BE]TMT timing E[BE][+-][0-1][0-9]").MatchB(fullpath)) {
    if (obj->GetZaxis())
      obj->GetZaxis()->SetLabelSize(0.);
    canvas->Update();
    if (timingAxis) {
      delete timingAxis;
      timingAxis = nullptr;
    }
    float xup = canvas->GetUxmax();
    float x2 = canvas->PadtoX(canvas->GetX2());
    float xr = 0.05 * (canvas->GetX2() - canvas->GetX1());
    float xmax = canvas->PadtoX(xup + xr);
    if (xmax > x2)
      xmax = canvas->PadtoX(canvas->GetX2() - 0.01 * xr);
    float ymin = canvas->PadtoY(canvas->GetUymin());
    float ymax = canvas->PadtoY(canvas->GetUymax());
    timingAxis = new TGaxis(xmax, ymin, xmax, ymax, obj->GetMinimum() - 50., obj->GetMaximum() - 50., 10, "+LB");

    if (timingAxis)
      timingAxis->Draw();
  } else if (TPRegexp("E[BE]TimingTask/E[BE]TMT timing vs amplitude (summary(| EE [+-])|E[BE][+-][0-1][0-9])")
                 .MatchB(fullpath) ||
             TPRegexp("E[BE]TimingTask/E[BE]TMT timing E[BE][+] vs E[BE][-]").MatchB(fullpath) ||
             TPRegexp("E[BE]TimingTask/E[BE]TMT in-time vs BX[+-]1 amplitude(| EE [+-])").MatchB(fullpath) ||
             TPRegexp("E[BE]TriggerTowerTask/E[BE]TTT Real vs Emulated TP Et(| EE [+-])").MatchB(fullpath))
    applyDefaults = false;
  else if (TPRegexp("E[BE]SelectiveReadoutTask/E[BE]SRT TT Flags vs Et(| EE [+-])").MatchB(fullpath)) {
    applyDefaults = false;
    obj->GetXaxis()->SetNdivisions(10);
    obj->GetYaxis()->SetNdivisions(-8);
  } else if (!isNewStyle && TPRegexp("EBClusterTask/EBCLT BC (ET|energy|number|size) map").MatchB(fullpath)) {
    gStyle->SetPaintTextFormat("+03g");
    ebSMShiftedLabels->Draw("text same");

    applyDefaults = false;
  } else if (!isNewStyle && TPRegexp("EEClusterTask/EECLT BC (ET|energy|number|size) map EE [+-]").MatchB(fullpath)) {
    float factor((obj->GetXaxis()->GetXmax() - obj->GetXaxis()->GetXmin()) / 100.);
    float offset(obj->GetXaxis()->GetXmin());

    gStyle->SetPaintTextFormat("+03g");
    TH1* labels(fullpath.Contains("+") ? eepSMLabels : eemSMLabels);
    setLimits(labels, obj);
    labels->Draw("text same");
    drawEESectors('D', 0, obj, factor, offset);

    applyDefaults = false;
  } else if (TPRegexp("E[BE]ClusterTask/E[BE]CLT SC energy vs seed crystal energy").MatchB(fullpath))
    applyDefaults = false;
  else if (TPRegexp("E[BE]OccupancyTask/E[BE]OT rec hit thr occupancy correlation").MatchB(fullpath) ||
           TPRegexp("E[BE]OccupancyTask/E[BE]OT rec hit thr occupancy difference").MatchB(fullpath)) {
    obj->SetStats(true);
    gStyle->SetOptStat("ourme");
    applyDefaults = false;
  } else if (TPRegexp("E[BE]TimingTask/E[BE]TMT Timing vs BX").MatchB(fullpath) ||
             TPRegexp("E[BE]TimingTask/E[BE]TMT Timing vs Finely Binned BX").MatchB(fullpath)) {
    gStyle->SetOptStat(0);
    obj->SetMarkerStyle(kDot);
    obj->GetXaxis()->SetTitleOffset(3.);
    obj->GetYaxis()->SetRangeUser(-1.5, 0.);
    obj->GetYaxis()->SetNdivisions(15);
    gPad->SetGridy();
    applyDefaults = false;
  }
}

inline std::pair<unsigned, unsigned> EcalRenderPlugin::getPlotType(TH1 const* obj, TString const& fullpath) const {
  unsigned otype(nObjType);
  unsigned btype(nBinType);

  int nbx(obj->GetNbinsX());
  int nby(obj->GetNbinsY());

  bool isEB(fullpath.Contains("EcalBarrel"));
  bool isEE(fullpath.Contains("EcalEndcap"));

  uint32_t packedInfo(obj->GetUniqueID());

  if (packedInfo > 0) {  // new style
    otype = (packedInfo / 2) - 1;
    bool isMap = (packedInfo % 2 == 1);

    if (isMap) {
      switch (otype) {
        case kEB:
          if (nbx == 360 && nby == 170)
            btype = kCrystal;
          else if (nbx == 72 && nby == 34)
            btype = kSuperCrystal;
          break;
        case kEE:
          if (nbx == 200 && nby == 100)
            btype = kCrystal;
          else if (nbx == 40 && nby == 20)
            btype = kSuperCrystal;
          break;
        case kEEm:
        case kEEp:
          if (nbx == 100 && nby == 100)
            btype = kCrystal;
          else if (nbx == 20 && nby == 20)
            btype = kSuperCrystal;
          break;
        case kSM:
        case kEBSM:
        case kEESM:
          if (nbx == 85 && nby == 20)
            btype = kCrystal;
          else if (nbx == 17 && nby == 4)
            btype = kSuperCrystal;
          else if ((nbx == 30 || nbx == 40 || nbx == 45) && (nby == 40 || nby == 35))
            btype = kCrystal;
          else if ((nbx == 8 || nbx == 9) && nby == 8)
            btype = kSuperCrystal;
          break;
        case kSMMEM:
        case kEBSMMEM:
        case kEESMMEM:
        case kMEM:
        case kEBMEM:
        case kEEMEM:
          btype = kCrystal;
          break;
        case kEcal:
          if (nbx == 9 && nby == 6)
            btype = kDCC;
          else if (nbx == 64 && nby == 72)
            btype = kRCT;
          break;
        default:
          btype = kUser;
          break;
      }
    } else {
      switch (otype) {
        case kEB:
          if (nbx == 36)
            btype = kDCC;
          break;
        case kEE:
          if (nbx == 18)
            btype = kDCC;
          else if (nbx == 72)
            btype = kTCC;
          break;
        case kEEm:
        case kEEp:
          if (nbx == 9)
            btype = kDCC;
          else if (nbx == 36)
            btype = kTCC;
          break;
        case kSM:
        case kEBSM:
        case kEESM:
          if (nbx == 68 || nbx == 41 || nbx == 33 || nbx == 32)
            btype = kSuperCrystal;
          else if (nbx == 80)
            btype = kTriggerTower;
          break;
        case kSMMEM:
        case kEBSMMEM:
        case kEESMMEM:
        case kMEM:
        case kEBMEM:
        case kEEMEM:
          btype = kCrystal;
          break;
        case kEcal:
          if (nbx == 54)
            btype = kDCC;
          else if (nbx == 108)
            btype = kTCC;
          break;
        default:
          btype = kUser;
          break;
      }
    }
  } else {  // old style; need to guess from the name
    if (obj->InheritsFrom(TH2::Class())) {
      if (TPRegexp(" E[BE][+-][01][0-9]").MatchB(fullpath)) {
        if (fullpath.Contains("MEM") || fullpath.Contains("Mem") ||
            (fullpath.Contains("PN") && !fullpath.Contains("amplitude over PN"))) {
          otype = kSMMEM;
          btype = kCrystal;
        } else {
          otype = kSM;

          switch (nbx) {
            case 85:
              if (isEB)
                btype = kCrystal;
              break;
            case 50:
              if (isEE)
                btype = kCrystal;
              break;
            case 17:
              if (isEB)
                btype = kSuperCrystal;
              break;
            case 10:
              if (isEE)
                btype = kSuperCrystal;
              break;
            default:
              btype = kUser;
              break;
          }
        }
      } else if (isEB && nbx == 360 && nby == 170) {
        otype = kEB;
        btype = kCrystal;
      } else if (isEB && nbx == 72 && nby == 34) {
        otype = kEB;
        btype = kSuperCrystal;
      } else if (isEB && nbx == 90 && nby == 20) {
        otype = kEBMEM;
        btype = kCrystal;
      } else if (isEE && nbx == 200 && nby == 100) {
        otype = kEE;
        btype = kCrystal;
      } else if (isEE && nbx == 40 && nby == 20) {
        otype = kEE;
        btype = kSuperCrystal;
      } else if (isEE && nbx == 100 && nby == 100) {
        if (fullpath.Contains("EE -"))
          otype = kEEm;
        else if (fullpath.Contains("EE +"))
          otype = kEEp;
        btype = kCrystal;
      } else if (isEE && nbx == 20 && nby == 20) {
        if (fullpath.Contains("EE -"))
          otype = kEEm;
        else if (fullpath.Contains("EE +"))
          otype = kEEp;
        btype = kSuperCrystal;
      } else if (isEE && nbx == 45 && nby == 20) {
        otype = kEEMEM;
        btype = kCrystal;
      }
    } else if (obj->InheritsFrom(TH1::Class())) {
      if (isEB && nbx == 68) {
        otype = kEB;
        btype = kSuperCrystal;
      } else if (isEB && nbx == 36) {
        otype = kEB;
        btype = kDCC;
      } else if (isEE && nbx == 34) {
        otype = kEE;
        btype = kSuperCrystal;
      } else if (isEE && nbx == 18) {
        otype = kEE;
        btype = kDCC;
      } else if (isEB) {
        otype = kEB;
        btype = kUser;
      } else if (isEE) {
        otype = kEE;
        btype = kUser;
      }
    }
  }

  if (fullpath.Contains("Masking "))
    btype = kPseudoStrip;
  else if (fullpath.Contains("TT ") && ((isEB && btype == kSuperCrystal) || (isEE && btype == kCrystal)))
    btype = kTriggerTower;
  else if (fullpath.Contains(" eta"))
    btype = kProjEta;
  else if (fullpath.Contains(" phi"))
    btype = kProjPhi;
  else if (TString(obj->GetXaxis()->GetTitle()) == "LumiSections")
    btype = kTrend;

  return std::make_pair(otype, btype);
}

inline void EcalRenderPlugin::drawEESectors(
    char c, int iSM, TH1 const* obj, float factor /* = 1.*/, float offset /* = 0.*/) const {
  bool needsMirroring = (iSM < 0 && (c == 't' || c == 'T'));
  TObjArray* const* array(nullptr);
  switch (c) {
    case 'D':
      array = eeDCCArray;
      break;
    case 'T':
      array = needsMirroring ? eemTCCArray : eepTCCArray;
      break;
    case 't':
      array = needsMirroring ? eemTTArray : eepTTArray;
      break;
    default:
      return;
  }

  int arrayInd(0);
  int limit(-1);

  if (iSM < 0)
    iSM *= -1;

  switch (iSM) {
    case 0:  // Full EE
      arrayInd = 9;
      break;
    case 10:  // EE+ or EE-
      arrayInd = 9;
      if (c == 'D')
        limit = 180;
      break;
    case 7:
      arrayInd = needsMirroring ? 5 : 0;
      break;
    case 8:
      arrayInd = needsMirroring ? 4 : 1;
      break;
    case 9:
      arrayInd = needsMirroring ? 3 : 2;
      break;
    case 1:
      arrayInd = needsMirroring ? 2 : 3;
      break;
    case 2:
      arrayInd = needsMirroring ? 1 : 4;
      break;
    case 3:
      arrayInd = needsMirroring ? 0 : 5;
      break;
    case 4:
      arrayInd = needsMirroring ? 8 : 6;
      break;
    case 5:
      arrayInd = needsMirroring ? 7 : 7;
      break;
    case 6:
      arrayInd = needsMirroring ? 6 : 8;
      break;
    default:
      return;
  }

  int iLine(0);
  bool doScale(factor != 1. || offset != 0.);

  float xmax(obj->GetXaxis()->GetXmax());
  float xmin(obj->GetXaxis()->GetXmin());
  float ymax(obj->GetYaxis()->GetXmax());
  float ymin(obj->GetYaxis()->GetXmin());

  TObjArrayIter* itr(static_cast<TObjArrayIter*>(array[arrayInd]->MakeIterator()));
  TLine* l(nullptr);
  while ((l = static_cast<TLine*>(itr->Next()))) {
    if (iLine++ == limit)
      break;

    if (doScale) {
      float x1(l->GetX1() * factor + offset);
      float x2(l->GetX2() * factor + offset);
      float y1(l->GetY1() * factor + offset);
      float y2(l->GetY2() * factor + offset);
      if (x1 >= xmax && x2 >= xmax)
        continue;
      if (x1 <= xmin && x2 <= xmin)
        continue;
      if (y1 >= ymax && y2 >= ymax)
        continue;
      if (y1 <= ymin && y2 <= ymin)
        continue;
      l->DrawLine(x1, y1, x2, y2);
    } else {
      float x1(l->GetX1());
      float x2(l->GetX2());
      float y1(l->GetY1());
      float y2(l->GetY2());
      if (x1 >= xmax && x2 >= xmax)
        continue;
      if (x1 <= xmin && x2 <= xmin)
        continue;
      if (y1 >= ymax && y2 >= ymax)
        continue;
      if (y1 <= ymin && y2 <= ymin)
        continue;
      l->Draw();
    }

    if (iSM == 0 && c == 'T') {
      float x1((l->GetX1() + 100) * factor + offset);
      float x2((l->GetX2() + 100) * factor + offset);
      float y1(l->GetY1() * factor + offset);
      float y2(l->GetY2() * factor + offset);
      if (x1 >= xmax && x2 >= xmax)
        continue;
      if (x1 <= xmin && x2 <= xmin)
        continue;
      if (y1 >= ymax && y2 >= ymax)
        continue;
      if (y1 <= ymin && y2 <= ymin)
        continue;
      l->DrawLine(x1, y1, x2, y2);
    }
  }
  delete itr;
}

inline void EcalRenderPlugin::setLimits(TH1* labels, TH1 const* obj) {
  labels->GetXaxis()->SetLimits(obj->GetXaxis()->GetXmin(), obj->GetXaxis()->GetXmax());
  labels->GetYaxis()->SetLimits(obj->GetYaxis()->GetXmin(), obj->GetYaxis()->GetXmax());
}

static EcalRenderPlugin instance;
