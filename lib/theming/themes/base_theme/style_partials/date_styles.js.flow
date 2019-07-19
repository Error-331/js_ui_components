'use strict';

// @flow

// external imports

// local imports
import type {BaseStylesType} from './../../../../types/theming/base_style_types';
import type {DateStylesType} from './../../../../types/theming/date_style_types';

// exports
export const dateStylesFunc = ({baseStyles}: {baseStyles: BaseStylesType}): DateStylesType => {
    return Object.freeze({
        calendarCompactMaxWidth: 500, // px

        fontStack: baseStyles.regularFontStack,
        regularFontSize: baseStyles.primaryFontSize, // px

        fontColor: baseStyles.mainPrimaryColor,
        selectionFontColor: baseStyles.noneTransparentBGColor,

        selectionBackgroundColor: baseStyles.mainQuaternaryColor,
    });
};
