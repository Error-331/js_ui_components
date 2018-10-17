'use strict';

// external imports

// local imports

Object.defineProperty(exports, "__esModule", {
    value: true
});


// exports
var navigationStylesFunc = exports.navigationStylesFunc = function navigationStylesFunc(_ref) {
    var fontStacks = _ref.fontStacks,
        baseStyles = _ref.baseStyles;

    return Object.freeze({
        verticalNavigationMaxWidth: 280, // px

        fontStack: fontStacks.regularFontFamilyStack,

        iconFontSize: baseStyles.primaryFontSize, // px
        captionFontSize: baseStyles.secondaryFontSize, // px

        bodyBGColor1: baseStyles.primaryBGColor,
        bodyHoverColor1: baseStyles.mainQuaternaryColor,

        fontColor1: baseStyles.noneTransparentBGColor
    });
};