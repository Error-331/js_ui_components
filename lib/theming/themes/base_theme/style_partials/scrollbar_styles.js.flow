'use strict';

// @flow

// external imports

// local imports
import type {BaseStylesType} from './../../../../types/theming/base_style_types';
import type {ScrollBarStylesType} from './../../../../types/theming/scroll_bar_style_types';

// exports
export const scrollBarStylesFunc = ({baseStyles}: {baseStyles: BaseStylesType}): ScrollBarStylesType => {
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