'use strict';

// @flow

// external imports

// local imports
import type {ThemeType} from './../../types/theme_types';

// styles definition
export const globalStylesFunc = (theme: ThemeType): { [string]: mixed } => ({
    '@font-face': theme['@font-face'],

    '::-webkit-scrollbar': {
        width: `${theme.scrollBarStyles.scrollBarWidth}px`,
        height: `${theme.scrollBarStyles.scrollBarHeight}px`,
    },

    '::-webkit-scrollbar-track': {
        backgroundColor: theme.scrollBarStyles.scrollBarTrackBackgroundColor,
    },

    '::-webkit-scrollbar-thumb': {
        border: `${theme.scrollBarStyles.scrollBarThumbBorderWidth}px ${theme.scrollBarStyles.scrollBarThumbBorderStyle} ${theme.scrollBarStyles.scrollBarThumbBorderColor}`,
        borderRadius: `${theme.scrollBarStyles.scrollBarThumbBorderRadius}px`,

        backgroundColor: theme.scrollBarStyles.scrollBarThumbBackgroundColor,
    },

    '::-webkit-scrollbar-button': {
        display: 'none'
    }
});