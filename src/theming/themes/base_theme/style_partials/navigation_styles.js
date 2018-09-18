'use strict';

// @flow

// external imports

// local imports
import type {BaseStylesType} from './../../../../types/theming/base_style_types';
import type {LayoutStylesType} from './../../../../types/theming/';

// exports
export const navigationStylesFunc = ({baseStyles}: {baseStyles: BaseStylesType}): LayoutStylesType => {
    return Object.freeze({
        primaryFontSize: baseStyles.primaryFontSize, // px

        bodyBGColor1: baseStyles.primaryBGColor,
        bodyHoverColor1: baseStyles.mainQuaternaryColor,

        fontColor1: baseStyles.noneTransparentBGColor,
    });
};