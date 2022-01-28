'use strict';

// external imports

// local imports
import { BaseStylesType } from './../../../../types/theming/base_style_types';
import { NavigationStylesType } from './../../../../types/theming';

// implementation
const navigationStylesFunc = ({baseStyles}: {baseStyles: BaseStylesType}): NavigationStylesType => {
    return Object.freeze({
        verticalNavigationMaxWidth: 280, // px

        fontStack: baseStyles.regularFontStack,

        iconFontSize: baseStyles.primaryFontSize, // px
        captionFontSize: baseStyles.secondaryFontSize, // px

        bodyBGColor1: baseStyles.primaryBGColor,
        bodyBGColor2: baseStyles.noneTransparentBGColor,

        bodyHoverColor1: baseStyles.mainQuaternaryColor,

        fontColor1: baseStyles.noneTransparentBGColor,
        fontColor2: baseStyles.subPrimaryColor,
    });
};

// exports
export default navigationStylesFunc;
