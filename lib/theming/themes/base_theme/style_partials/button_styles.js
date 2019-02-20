'use strict';

// external imports

// local imports

Object.defineProperty(exports, "__esModule", {
    value: true
});


// exports
var buttonStylesFunc = exports.buttonStylesFunc = function buttonStylesFunc(_ref) {
    var fontStacks = _ref.fontStacks,
        baseStyles = _ref.baseStyles;

    return Object.freeze({
        fontStackRegular: fontStacks.regularFontFamilyStack,
        fontStackBold: fontStacks.boldFontFamilyStack,

        // TODO: deprecated
        regularButtonMinimumWidth: 110, // px

        tinyRegularButtonMinimumWidth: 55, // px
        smallRegularButtonMinimumWidth: 110, // px
        mediumRegularButtonMinimumWidth: 220, // px
        largeRegularButtonMinimumWidth: 440, // px
        extraLargeRegularButtonMinimumWidth: 880, // px

        // TODO: deprecated
        captionFontSize: 14, // px
        // TODO: deprecated
        iconFontSize: 17,

        tinyCaptionFontSize: 9, // px
        smallCaptionFontSize: 14, // px
        mediumCaptionFontSize: 28, // px
        largeCaptionFontSize: 56, // px
        extraLargeCaptionFontSize: 112, // px

        borderSize: 2, // px

        fontColorPrimary: baseStyles.accentColorPrimary,
        fontColorSecondary: baseStyles.subSecondaryColor,
        fontColorDefaultWithBG: baseStyles.noneTransparentBGColor,
        fontColorDefaultNoBG: baseStyles.subPrimaryColor,

        borderColor: baseStyles.mainSecondaryColor,
        bgColor: baseStyles.mainSecondaryColor,
        disabledBgColor: baseStyles.disabledColor
    });
};