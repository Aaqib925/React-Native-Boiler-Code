import { normalizeFont, normalizeWidth } from "../Utils/fontUtil";

// FontFamily throughout the applications
export const fontFamily = {
    "Primary": {
        "Medium": "Poppins-Medium",
        "Regular": "Poppins-Regular",
        "Light": "Poppins-Light",
        "SemiBold": "Poppins-SemiBold"
    }
}
// Standard Colors throughout the application must be used from here.

export const primaryColor = "#5b009e";
export const secondaryColor = "#5697AF"
export const secondaryColorWithOptacity = '#EEF4F7'
export const inActiveColor = "#707070";
export const greyedSchemeColor = "#00000050";
export const errorColor = "red";


// Standard Font Sizes throughout the application must be used from here

export const fontH1 = normalizeFont(24);
export const fontH2 = normalizeFont(18);
export const fontH2V2 = normalizeFont(15);
export const fontH2V3 = normalizeFont(13)
export const fontH3 = normalizeFont(12);
export const fontH3V3 = normalizeFont(10);
export const fontH4 = normalizeFont(8);
export const fontSmallSize = normalizeFont(6);


// Generalized styles shall be listed here.
export const mainContainer = {
    flex: 1,
    padding: normalizeWidth(10),
    justifyContent: 'center',
    alignItems: 'center'
}

export const quoteStyles = {
    fontFamily: fontFamily.Primary.Regular,
    fontSize: fontH2
}