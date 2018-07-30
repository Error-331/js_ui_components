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

        captionFontSize: 14, // px
        iconFontSize: 17,

        borderSize: 2, // px

        fontColorPrimary: baseStyles.accentColorPrimary,
        fontColorSecondary: baseStyles.subSecondaryColor,
        fontColorDefaultWithBG: baseStyles.noneTransparentBGColor,
        fontColorDefaultNoBG: baseStyles.subPrimaryColor,

        borderColor: baseStyles.mainSecondaryColor,
        bgColor: baseStyles.mainSecondaryColor
    });
};