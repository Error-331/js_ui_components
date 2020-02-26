'use strict'; // external imports
// local imports

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buttonStylesFunc = void 0;

// exports
var buttonStylesFunc = function buttonStylesFunc(_ref) {
  var baseStyles = _ref.baseStyles;
  return Object.freeze({
    fontStackRegular: baseStyles.regularFontStack,
    fontStackBold: baseStyles.boldFontStack,
    // TODO: deprecated
    regularButtonMinimumWidth: 110,
    // px
    tinyRegularButtonMinimumWidth: 55,
    // px
    smallRegularButtonMinimumWidth: 110,
    // px
    mediumRegularButtonMinimumWidth: 220,
    // px
    largeRegularButtonMinimumWidth: 440,
    // px
    extraLargeRegularButtonMinimumWidth: 880,
    // px
    // TODO: deprecated
    captionFontSize: 14,
    // px
    // TODO: deprecated
    iconFontSize: 17,
    tinyCaptionFontSize: 9,
    // px
    smallCaptionFontSize: 14,
    // px
    mediumCaptionFontSize: 28,
    // px
    largeCaptionFontSize: 56,
    // px
    extraLargeCaptionFontSize: 112,
    // px
    borderSize: 2,
    // px
    fontColorPrimary: baseStyles.accentColorPrimary,
    fontColorSecondary: baseStyles.subSecondaryColor,
    fontColorDefaultWithBG: baseStyles.noneTransparentBGColor,
    fontColorDefaultNoBG: baseStyles.subPrimaryColor,
    borderColor: baseStyles.mainSecondaryColor,
    bgColor: baseStyles.mainSecondaryColor,
    disabledBgColor: baseStyles.disabledColor
  });
};

exports.buttonStylesFunc = buttonStylesFunc;