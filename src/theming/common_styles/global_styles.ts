'use strict';

// external imports
import { Styles as JSSStyles } from 'jss';

// local imports
import { FontFacesListType } from './../../types/theming/font_face_types';
import { ThemeType } from './../../types/theme_types';

// styles definition
const globalStylesFunc = (theme: ThemeType): { [key: string]: JSSStyles | FontFacesListType } => ({
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

// exports
export { globalStylesFunc };
