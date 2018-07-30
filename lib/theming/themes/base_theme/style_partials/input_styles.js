'use strict';

// external imports

// local imports

Object.defineProperty(exports, "__esModule", {
    value: true
});


// exports
var inputStylesFunc = exports.inputStylesFunc = function inputStylesFunc(_ref) {
    var fontStacks = _ref.fontStacks,
        baseStyles = _ref.baseStyles;

    return Object.freeze({
        fontStack: fontStacks.regularFontFamilyStack,

        fontSize: baseStyles.secondaryFontSize, // px
        labelActiveFontSize: baseStyles.tertiaryFontSize, // px
        labelInactiveFontSize: baseStyles.secondaryFontSize, // px
        iconFontSize: baseStyles.iconPrimaryFontSize, // px

        bgColor: baseStyles.transparentBGColor,
        selectedBGColor: baseStyles.disabledColor,

        hoverColor: baseStyles.accentColorPrimary,
        activeColor: baseStyles.mainPrimaryColor,
        inactiveColor: baseStyles.mainSecondaryColor,
        labelColor: baseStyles.mainTertiaryColor,
        readOnlyColor: baseStyles.mainTertiaryColor,
        disabledColor: baseStyles.disabledColor,

        switchSliderInactiveBodyBGColor: baseStyles.utilityBGColor,
        switchSliderActiveBodyBGColor: baseStyles.mainTertiaryColor,

        switchSliderHandleInactive: baseStyles.noneTransparentBGColor,
        switchSliderHandleActive: baseStyles.mainPrimaryColor,

        switchLabelOffset: 5 // px
    });
};