'use strict'; //external imports
// local imports

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.baseStylesFunc = void 0;

// exports
var baseStylesFunc = function baseStylesFunc(colorPalette, fontStacks) {
  return Object.freeze({
    // accent colors
    accentColorPrimary: colorPalette.materialRed800,
    // main colors
    mainPrimaryColor: colorPalette.materialLightBlue900,
    mainSecondaryColor: colorPalette.materialLightBlue600,
    mainTertiaryColor: colorPalette.materialLightBlue400,
    mainQuaternaryColor: colorPalette.materialLightBlue300,
    // sub colors
    subPrimaryColor: colorPalette.materialGrey900,
    subSecondaryColor: colorPalette.materialGrey600,
    subTertiaryColor: colorPalette.materialGrey400,
    subQuaternaryColor: colorPalette.materialGrey300,
    hoverColor: colorPalette.materialBlack,
    disabledColor: colorPalette.materialGrey400,
    applicationBGColor: colorPalette.materialLime50,
    primaryBGColor: colorPalette.materialLightBlue600,
    transparentBGColor: colorPalette.materialTransparent,
    utilityBGColor: colorPalette.materialGrey600,
    noneTransparentBGColor: colorPalette.materialWhite,
    // font size
    inlineHeaderLevel1FontSize: 68,
    // px
    inlineHeaderLevel2FontSize: 58,
    // px
    inlineHeaderLevel3FontSize: 48,
    // px
    inlineHeaderLevel4FontSize: 38,
    // px
    inlineHeaderLevel5FontSize: 28,
    // px
    inlineHeaderLevel6FontSize: 18,
    // px
    primaryFontSize: 18,
    // px
    secondaryFontSize: 15,
    // px
    tertiaryFontSize: 12,
    iconPrimaryFontSize: 15,
    // px
    // font family
    thinFontStack: fontStacks.thinFontFamilyStack,
    lightFontStack: fontStacks.lightFontFamilyStack,
    regularFontStack: fontStacks.regularFontFamilyStack,
    boldFontStack: fontStacks.boldFontFamilyStack
  });
};

exports.baseStylesFunc = baseStylesFunc;