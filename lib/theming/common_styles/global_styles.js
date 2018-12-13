'use strict';

// external imports

// local imports

Object.defineProperty(exports, "__esModule", {
    value: true
});


// styles definition
var globalStylesFunc = exports.globalStylesFunc = function globalStylesFunc(theme) {
    return {
        '@font-face': theme['@font-face'],

        '::-webkit-scrollbar': {
            width: theme.scrollBarStyles.scrollBarWidth + 'px',
            height: theme.scrollBarStyles.scrollBarHeight + 'px'
        },

        '::-webkit-scrollbar-track': {
            backgroundColor: theme.scrollBarStyles.scrollBarTrackBackgroundColor
        },

        '::-webkit-scrollbar-thumb': {
            border: theme.scrollBarStyles.scrollBarThumbBorderWidth + 'px ' + theme.scrollBarStyles.scrollBarThumbBorderStyle + ' ' + theme.scrollBarStyles.scrollBarThumbBorderColor,
            borderRadius: theme.scrollBarStyles.scrollBarThumbBorderRadius + 'px',

            backgroundColor: theme.scrollBarStyles.scrollBarThumbBackgroundColor
        },

        '::-webkit-scrollbar-button': {
            display: 'none'
        }
    };
};