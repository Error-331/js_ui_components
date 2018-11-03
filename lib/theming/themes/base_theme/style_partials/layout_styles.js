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

        inlineHeaderLevel1FontSize: baseStyles.inlineHeaderLevel1FontSize,
        inlineHeaderLevel2FontSize: baseStyles.inlineHeaderLevel2FontSize,
        inlineHeaderLevel3FontSize: baseStyles.inlineHeaderLevel3FontSize,
        inlineHeaderLevel4FontSize: baseStyles.inlineHeaderLevel4FontSize,
        inlineHeaderLevel5FontSize: baseStyles.inlineHeaderLevel5FontSize,
        inlineHeaderLevel6FontSize: baseStyles.inlineHeaderLevel6FontSize,

        tinyIconSize: 12, // px
        smallIconSize: 17, // px
        mediumIconSize: 34, // px
        largeIconSize: 68, // px
        extraLargeIconSize: 136, // px

        headerFontSize: baseStyles.inlineHeaderLevel6FontSize,
        bodyFontSize: baseStyles.secondaryFontSize,

        headerBorderRadius: 2, // px

        horizontalSpacing: 5, // px
        verticalSpacing: 5, // px

        topSpacing: 8, // px
        bottomSpacing: 10, // px

        rightSpacing: 8, // px
        leftSpacing: 10, // px

        sectionHorizontalSpacing: 12, // px
        sectionVerticalSpacing: 12, // px

        componentHorizontalSpacing: 25, // px
        componentVerticalSpacing: 15, // px

        headerFontColor: baseStyles.noneTransparentBGColor,
        bodyFontColor: baseStyles.subPrimaryColor,

        headerBGColor: baseStyles.primaryBGColor,
        bodyBGColor: baseStyles.noneTransparentBGColor,

        iconColor: baseStyles.mainSecondaryColor
    });
};