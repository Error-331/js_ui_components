'use strict';

// external imports

// local imports
import { BaseStylesType } from './../../../../types/theming/base_style_types';
import { ScrollBarStylesType } from './../../../../types/theming/scroll_bar_style_types';

// implementation
const scrollBarStylesFunc = ({baseStyles}: {baseStyles: BaseStylesType}): ScrollBarStylesType => {
    return Object.freeze({
        scrollBarWidth: 11, // px
        scrollBarHeight: 11, // px

        scrollBarThumbBorderWidth: 3, // px
        scrollBarThumbBorderStyle: 'solid',
        scrollBarThumbBorderRadius: 5, // px

        scrollBarThumbBorderColor: baseStyles.noneTransparentBGColor,
        scrollBarThumbBackgroundColor: baseStyles.mainPrimaryColor,
        scrollBarTrackBackgroundColor: 'transparent',
    });
};

// exports
export default scrollBarStylesFunc;
