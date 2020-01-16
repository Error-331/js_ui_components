'use strict'; // external imports
// local imports

require("core-js/modules/es.object.seal");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fontFamilyUtilities = void 0;

var _general_constants = require("./../constants/general_constants");

// exports
var fontFamilyUtilities = Object.seal({
  getFontFamilyByType: function getFontFamilyByType(theme, fontFamilyType) {
    switch (fontFamilyType) {
      case _general_constants.THIN_FONT:
        {
          return theme.baseStyles.thinFontStack;
        }

      case _general_constants.LIGHT_FONT:
        {
          return theme.baseStyles.lightFontStack;
        }

      case _general_constants.REGULAR_FONT:
        {
          return theme.baseStyles.regularFontStack;
        }

      case _general_constants.BOLD_FONT:
        {
          return theme.baseStyles.boldFontStack;
        }

      default:
        {
          return theme.baseStyles.regularFontStack;
        }
    }
  }
});
exports.fontFamilyUtilities = fontFamilyUtilities;