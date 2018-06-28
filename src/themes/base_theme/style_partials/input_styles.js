'use strict';

// local imports
import fontStacks from './font_stacks';
import coloPalette from './color_palette';
import baseStyles from './base_styles';

// exports
export default Object.freeze({
    fontStack: fontStacks.regularFontFamilyStack,

    fontSize: baseStyles.commonSecondaryFontSize, // px
    labelActiveFontSize: baseStyles.commonTertiaryFontSize, // px
    labelInactiveFontSize: baseStyles.commonSecondaryFontSize, // px
    iconFontSize: baseStyles.commonIconPrimaryFontSize, // px

    bgColor: baseStyles.commonTransparentBGColor,
    selectedBGColor: baseStyles.commonDisabledColor,

    hoverColor: baseStyles.primaryColor,
    activeColor: baseStyles.secondaryColor,
    inactiveColor: baseStyles.tertiaryColor,
    labelColor: baseStyles.quaternaryColor,
    readOnlyColor: baseStyles.quaternaryColor,
    disabledColor: baseStyles.commonDisabledColor,

    switchSliderInactiveBodyBGColor: baseStyles.commonUtilityBGColor,
    switchSliderActiveBodyBGColor: baseStyles.quaternaryColor,

    switchSliderHandleInactive: coloPalette.materialWhite,
    switchSliderHandleActive: baseStyles.secondaryColor,

    switchLabelOffset: 5, // px
});