'use strict';

// local imports
import fontStacks from './font_stacks';
import baseStyles from './base_styles';

// exports
export default ({fontStacks, baseStyles}) => {
    return Object.freeze({
        fontStack: fontStacks.regularFontFamilyStack,
        headerFontStack: fontStacks.regularFontFamilyStack,
        bodyFontStack: fontStacks.regularFontFamilyStack,

        fontSize: baseStyles.secondaryFontSize,
        headerFontSize:  baseStyles.headerFontSize,
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