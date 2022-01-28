'use strict';

// external imports

// local imports
import { BaseStylesType } from './../../../../types/theming/base_style_types';
import { InputStylesType } from './../../../../types/theming/input_style_types';

// implementation
const checkboxControlLabelWidth: number = 20; // px
const checkboxControlLabelHeight: number = 20; // px

const checkboxControlLabelHorizontalSpacing: number = 4; // px

const checkMarkWidth: number = checkboxControlLabelWidth - (2 * checkboxControlLabelHorizontalSpacing); // px
const checkMarkHeight: number = checkMarkWidth / 2; // px

const checkboxControlLabelVerticalSpacing: number = (checkboxControlLabelHeight / 2) - (checkMarkWidth / 4) - (checkboxControlLabelHeight / 10);

const checkMarkWidthPercentage: number = (checkMarkWidth * 100) / checkboxControlLabelWidth; // %
const checkMarkHeightPercentage: number = (checkMarkHeight * 100) / checkboxControlLabelHeight; // %

const checkMarkTopOffsetPercentage: number = (checkboxControlLabelVerticalSpacing * 100) / checkboxControlLabelHeight; // %
const checkMarkLeftOffsetPercentage: number = (checkboxControlLabelHorizontalSpacing * 100) / checkboxControlLabelWidth; // %

// implementation
const inputStylesFunc = ({baseStyles}: {baseStyles: BaseStylesType}): InputStylesType => {
    return Object.freeze({
        checkboxControlLabelWidth,
        checkboxControlLabelHeight,

        checkboxControlLabelHorizontalSpacing,

        checkMarkWidth,
        checkMarkHeight,

        checkboxControlLabelVerticalSpacing,

        checkMarkWidthPercentage,
        checkMarkHeightPercentage,

        checkMarkTopOffsetPercentage,
        checkMarkLeftOffsetPercentage,

        checkMarkLineWidth: 2, //px

        fontStack: baseStyles.regularFontStack,

        fontSize: baseStyles.secondaryFontSize, // px
        labelActiveFontSize: baseStyles.tertiaryFontSize, // px
        labelInactiveFontSize: baseStyles.secondaryFontSize, // px
        errorFontSize: baseStyles.tertiaryFontSize, // px
        iconFontSize: baseStyles.iconPrimaryFontSize, // px

        lineHeight: baseStyles.secondaryFontSize + 4, // px

        bgColor: baseStyles.transparentBGColor,
        selectedBGColor: baseStyles.disabledColor,

        attentionColor: baseStyles.accentColorPrimary,
        hoverColor: baseStyles.accentColorPrimary,
        activeColor: baseStyles.mainPrimaryColor,
        inactiveColor: baseStyles.mainSecondaryColor,
        labelColor: baseStyles.mainTertiaryColor,
        readOnlyColor: baseStyles.mainTertiaryColor,
        disabledColor: baseStyles.disabledColor,
        alternateInputColor: baseStyles.noneTransparentBGColor,

        switchSliderInactiveBodyBGColor: baseStyles.utilityBGColor,
        switchSliderActiveBodyBGColor: baseStyles.mainTertiaryColor,

        switchSliderHandleInactive: baseStyles.noneTransparentBGColor,
        switchSliderHandleActive: baseStyles.mainPrimaryColor,

        switchLabelOffset: 5, // px
    });
};

// exports
export default inputStylesFunc;
