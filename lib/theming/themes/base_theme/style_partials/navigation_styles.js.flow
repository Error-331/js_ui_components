'use strict';

// @flow

// external imports

// local imports
import type {BaseStylesType} from './../../../../types/theming/base_style_types';
import type {NavigationStylesType} from './../../../../types/theming';

// exports
export const navigationStylesFunc = ({baseStyles}: {baseStyles: BaseStylesType}): NavigationStylesType => {
    return Object.freeze({
        verticalNavigationMaxWidth: 280, // px

        fontStack: baseStyles.regularFontStack,

        iconFontSize: baseStyles.primaryFontSize, // px
        captionFontSize: baseStyles.secondaryFontSize, // px

        bodyBGColor1: baseStyles.primaryBGColor,
        bodyHoverColor1: baseStyles.mainQuaternaryColor,

        fontColor1: baseStyles.noneTransparentBGColor,
        fontColor2: baseStyles.subPrimaryColor,
    });
};