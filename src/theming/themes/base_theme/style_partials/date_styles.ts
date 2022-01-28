'use strict';

// external imports

// local imports
import { BaseStylesType } from './../../../../types/theming/base_style_types';
import { DateStylesType } from './../../../../types/theming/date_style_types';

// implementation
const dateStylesFunc = ({baseStyles}: {baseStyles: BaseStylesType}): DateStylesType => {
    return Object.freeze({
        calendarCompactMaxWidth: 500, // px

        fontStack: baseStyles.regularFontStack,
        regularFontSize: baseStyles.primaryFontSize, // px

        fontColor: baseStyles.mainPrimaryColor,
        selectionFontColor: baseStyles.noneTransparentBGColor,

        selectionBackgroundColor: baseStyles.mainQuaternaryColor,
    });
};

// exports
export default dateStylesFunc;
