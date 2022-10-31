from layouts.layout_manager import LayoutScope, adapt_and_register
dqmitems={}

def pixellumilayout(i, p, *rows): i["PixelLumi/Layouts/" + p] = rows

pixellumilayout(dqmitems, "01_PXLumi_AlcaLumiZeroBias",
                ["PixelLumi/PixelLumiDqmZeroBias/totalPixelLumiByLS"],
                ["PixelLumi/PixelLumiDqmZeroBias/PXLumiByBXsum"])

pixellumilayout(dqmitems, "02_HFLumi_RunTimeLogger",
                ["PixelLumi/HF/totalHFDeliveredLumiByLS"],
                ["PixelLumi/HF/totalHFRecordedLumiByLS"],
                ["PixelLumi/HF/HFRecordedToDeliveredRatioByLS"])

pixellumilayout(dqmitems, "03_Ratio_HFtoPX",
                ["PixelLumi/PixelLumiDqmZeroBias/HFDeliveredToPXByLS"],
                ["PixelLumi/PixelLumiDqmZeroBias/HFRecordedToPXByLS"])

adapt_and_register(dqmitems, scope=LayoutScope.ONLINE)
