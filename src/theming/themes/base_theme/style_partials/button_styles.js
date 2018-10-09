'use strict';

// @flow

// external imports

// local imports
import type {FontStacksType} from './../../../../types/theming/font_stack_types';
import type {BaseStylesType} from './../../../../types/theming/base_style_types';
import type {ButtonStyleType} from './../../../../types/theming/button_style_types';

// exports
export const buttonStylesFunc = ({fontStacks, baseStyles}: {fontStacks: FontStacksType, baseStyles: BaseStylesType}): ButtonStyleType => {
    return Object.freeze({
        fontStackRegular: fontStacks.regularFontFamilyStack,
        fontStackBold: fontStacks.boldFontFamilyStack,

        regularButtonMinimumWidth: 110, // px

        captionFontSize: 14, // px
        iconFontSize: 17,

        borderSize: 2, // px

        fontColorPrimary: baseStyles.accentColorPrimary,
        fontColorSecondary: baseStyles.subSecondaryColor,
        fontColorDefaultWithBG: baseStyles.noneTransparentBGColor,
        fontColorDefaultNoBG: baseStyles.subPrimaryColor,

        borderColor: baseStyles.mainSecondaryColor,
        bgColor: baseStyles.mainSecondaryColor,
    });
};
