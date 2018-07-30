'use strict';

//external imports

// local imports

Object.defineProperty(exports, "__esModule", {
    value: true
});


// exports
var baseStylesFunc = exports.baseStylesFunc = function baseStylesFunc(colorPalette) {
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

        headerFontSize: 18, // px
        primaryFontSize: 18, // px
        secondaryFontSize: 15, // px
        tertiaryFontSize: 12,

        iconPrimaryFontSize: 15 // px
    });
};