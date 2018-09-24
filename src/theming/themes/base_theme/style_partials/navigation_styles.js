'use strict';

// @flow

// external imports

// local imports
import type {BaseStylesType} from './../../../../types/theming/base_style_types';
import type {FontStacksType} from './../../../../types/theming/font_stack_types';
import type {LayoutStylesType} from './../../../../types/theming';

// exports
export const navigationStylesFunc = ({fontStacks, baseStyles}: {fontStacks: FontStacksType, baseStyles: BaseStylesType}): LayoutStylesType => {
    return Object.freeze({
        verticalNavigationMaxWidth: 280, // px

        fontStack: fontStacks.regularFontFamilyStack,

        iconFontSize: baseStyles.primaryFontSize, // px
        captionFontSize: baseStyles.secondaryFontSize, // px

        bodyBGColor1: baseStyles.primaryBGColor,
        bodyHoverColor1: baseStyles.mainQuaternaryColor,

        fontColor1: baseStyles.noneTransparentBGColor,
    });
};