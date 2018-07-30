'use strict';

// external imports

// local imports

Object.defineProperty(exports, "__esModule", {
    value: true
});


// exports
var layoutStylesFunc = exports.layoutStylesFunc = function layoutStylesFunc(_ref) {
    var fontStacks = _ref.fontStacks,
        baseStyles = _ref.baseStyles;

    return Object.freeze({
        fontStack: fontStacks.regularFontFamilyStack,
        headerFontStack: fontStacks.regularFontFamilyStack,
        bodyFontStack: fontStacks.regularFontFamilyStack,

        headerFontSize: baseStyles.headerFontSize,
        bodyFontSize: baseStyles.secondaryFontSize,

        headerBorderRadius: 2, // px

        horizontalSpacing: 5, // px
        verticalSpacing: 5, // px

        headerFontColor: baseStyles.noneTransparentBGColor,
        bodyFontColor: baseStyles.subPrimaryColor,

        headerBGColor: baseStyles.primaryBGColor,
        bodyBGColor: baseStyles.noneTransparentBGColor
    });
};