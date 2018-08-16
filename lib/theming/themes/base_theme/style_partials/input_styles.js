'use strict';

// external imports

// local imports

Object.defineProperty(exports, "__esModule", {
    value: true
});


// implementation
var checkboxControlLabelWidth = 20; // px
var checkboxControlLabelHeight = 20; // px

var checkboxControlLabelHorizontalSpacing = 4; // px

var checkMarkWidth = checkboxControlLabelWidth - 2 * checkboxControlLabelHorizontalSpacing; // px
var checkMarkHeight = checkMarkWidth / 2; // px

var checkboxControlLabelVerticalSpacing = checkboxControlLabelHeight / 2 - checkMarkWidth / 4 - checkboxControlLabelHeight / 10;

var checkMarkWidthPercentage = checkMarkWidth * 100 / checkboxControlLabelWidth; // %
var checkMarkHeightPercentage = checkMarkHeight * 100 / checkboxControlLabelHeight; // %

var checkMarkTopOffsetPercentage = checkboxControlLabelVerticalSpacing * 100 / checkboxControlLabelHeight; // %
var checkMarkLeftOffsetPercentage = checkboxControlLabelHorizontalSpacing * 100 / checkboxControlLabelWidth; // %

// exports
var inputStylesFunc = exports.inputStylesFunc = function inputStylesFunc(_ref) {
    var fontStacks = _ref.fontStacks,
        baseStyles = _ref.baseStyles;

    return Object.freeze({
        checkboxControlLabelWidth: checkboxControlLabelWidth,
        checkboxControlLabelHeight: checkboxControlLabelHeight,

        checkboxControlLabelHorizontalSpacing: checkboxControlLabelHorizontalSpacing,

        checkMarkWidth: checkMarkWidth,
        checkMarkHeight: checkMarkHeight,

        checkboxControlLabelVerticalSpacing: checkboxControlLabelVerticalSpacing,

        checkMarkWidthPercentage: checkMarkWidthPercentage,
        checkMarkHeightPercentage: checkMarkHeightPercentage,

        checkMarkTopOffsetPercentage: checkMarkTopOffsetPercentage,
        checkMarkLeftOffsetPercentage: checkMarkLeftOffsetPercentage,

        checkMarkLineWidth: 2, //px

        fontStack: fontStacks.regularFontFamilyStack,

        fontSize: baseStyles.secondaryFontSize, // px
        labelActiveFontSize: baseStyles.tertiaryFontSize, // px
        labelInactiveFontSize: baseStyles.secondaryFontSize, // px
        iconFontSize: baseStyles.iconPrimaryFontSize, // px

        bgColor: baseStyles.transparentBGColor,
        selectedBGColor: baseStyles.disabledColor,

        attentionColor: baseStyles.accentColorPrimary,
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