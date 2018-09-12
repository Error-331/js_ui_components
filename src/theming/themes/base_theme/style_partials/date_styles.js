'use strict';

// @flow

// external imports

// local imports
import type {FontStacksType} from './../../../../types/theming/font_stack_types';
import type {BaseStylesType} from './../../../../types/theming/base_style_types';
import type {DateStylesType} from './../../../../types/theming/date_style_types';

// exports
export const dateStylesFunc = ({fontStacks, baseStyles}: {fontStacks: FontStacksType, baseStyles: BaseStylesType}): DateStylesType => {
    return Object.freeze({
        fontStack: fontStacks.regularFontFamilyStack,
        regularFontSize: baseStyles.primaryFontSize,

        fontColor: baseStyles.mainPrimaryColor,
        selectionFontColor: baseStyles.noneTransparentBGColor,

        selectionBackgroundColor: baseStyles.mainQuaternaryColor,
    });
};
