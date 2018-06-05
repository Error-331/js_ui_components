'use strict';

// local imports
import fontStacks from './font_stacks';
import coloPalette from './color_palette';
import baseStyles from './base_styles';

// exports
export default Object.freeze({
    inputCommonFontFamily: fontStacks.regularFontFamilyStack,

    inputCommonFontSize: baseStyles.commonSecondaryFontSize, // px
    inputCommonLabelActiveFontSize: baseStyles.commonTertiaryFontSize, // px
    inputCommonLabelInactiveFontSize: baseStyles.commonSecondaryFontSize, // px
    inputCommonIconFontSize: baseStyles.commonIconPrimaryFontSize, // px

    inputCommonBGColor: baseStyles.commonTransparentBGColor,
    inputSelectedBGColor: baseStyles.commonDisabledColor,

    inputCommonHoverColor: baseStyles.commonPrimaryTextColor,
    inputCommonActiveColor: baseStyles.commonSecondaryTextColor,
    inputCommonInactiveColor: baseStyles.commonTertiaryTextColor,
    inputCommonLabelColor: baseStyles.commonQuaternaryTextColor,
    inputCommonReadOnlyColor: baseStyles.commonQuaternaryTextColor,
    inputCommonDisabledColor: baseStyles.commonDisabledColor,

    inputSwitchCommonSliderBodyBGColorInactive: baseStyles.commonUtilityBGColor,
    inputSwitchCommonSliderBodyBGColorActive: baseStyles.commonQuaternaryTextColor,

    inputSwitchCommonSliderHandleInactive: coloPalette.materialWhite,
    inputSwitchCommonSliderHandleActive: baseStyles.commonSecondaryTextColor,

    inputSwitchLabelOffset: 5, // px
});