'use strict';

// local imports
import fontStacks from './font_stacks';
import commonStyles from './base_styles';

// exports
export default Object.freeze({
    layoutHeaderCommonFontFamily: fontStacks.regularFontFamilyStack,
    layoutBodyCommonFontFamily: fontStacks.regularFontFamilyStack,

    layoutTitleCommonFontSize:  commonStyles.commonTitleFontSize,
    layoutBodyCommonFontSize: commonStyles.commonSecondaryFontSize,

    layoutHeaderCommonBorderRadius: 2, // px

    layoutCommonHorizontalSpacing: 5, // px
    layoutCommonVerticalSpacing: 5, // px

    layoutHeaderCommonColor: commonStyles.commonPrimaryTextColor,
    layoutHeaderCommonBackgroundColor: commonStyles.commonPrimaryBGColor,
    layoutBodyCommonBackgroundColor: commonStyles.commonNoneTransparentBGColor
});