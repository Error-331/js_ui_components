'use strict';

// local imports
import fontStacks from './font_stacks';
import baseStyles from './base_styles';

// exports
export default Object.freeze({
    layoutHeaderCommonFontFamily: fontStacks.regularFontFamilyStack,
    layoutBodyCommonFontFamily: fontStacks.regularFontFamilyStack,
    layoutCommonFontFamily: fontStacks.regularFontFamilyStack,

    layoutTitleCommonFontSize:  baseStyles.commonTitleFontSize,
    layoutBodyCommonFontSize: baseStyles.commonSecondaryFontSize,
    layoutCommonFontSize: baseStyles.commonSecondaryFontSize,

    layoutHeaderCommonBorderRadius: 2, // px

    layoutCommonHorizontalSpacing: 5, // px
    layoutCommonVerticalSpacing: 5, // px

    layoutHeaderCommonColor: baseStyles.primaryColor,
    layoutBodyFontColor: baseStyles.primaryTextColor,

    layoutHeaderCommonBackgroundColor: baseStyles.commonPrimaryBGColor,
    layoutBodyCommonBackgroundColor: baseStyles.commonNoneTransparentBGColor
});