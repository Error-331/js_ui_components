'use strict'; // external imports
// local imports

require("core-js/modules/es.array.concat");

require("core-js/modules/es.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.globalStylesFunc = void 0;

// styles definition
var globalStylesFunc = function globalStylesFunc(theme) {
  return {
    '@font-face': theme['@font-face'],
    '::-webkit-scrollbar': {
      width: "".concat(theme.scrollBarStyles.scrollBarWidth, "px"),
      height: "".concat(theme.scrollBarStyles.scrollBarHeight, "px")
    },
    '::-webkit-scrollbar-track': {
      backgroundColor: theme.scrollBarStyles.scrollBarTrackBackgroundColor
    },
    '::-webkit-scrollbar-thumb': {
      border: "".concat(theme.scrollBarStyles.scrollBarThumbBorderWidth, "px ").concat(theme.scrollBarStyles.scrollBarThumbBorderStyle, " ").concat(theme.scrollBarStyles.scrollBarThumbBorderColor),
      borderRadius: "".concat(theme.scrollBarStyles.scrollBarThumbBorderRadius, "px"),
      backgroundColor: theme.scrollBarStyles.scrollBarThumbBackgroundColor
    },
    '::-webkit-scrollbar-button': {
      display: 'none'
    }
  };
};

exports.globalStylesFunc = globalStylesFunc;