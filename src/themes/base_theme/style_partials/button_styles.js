'use strict';

// local imports
import fontStacks from './font_stacks';
import baseStyles from './base_styles';

// exports
export default Object.freeze({
    fontStack: fontStacks.regularFontFamilyStack,

    captionFontSize: 14, // px
    iconFontSize: 17,

    fontColor: baseStyles.primaryColor,
    bgColor: baseStyles.tertiaryColor,
});