'use strict'; // external imports
// local imports

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.navigationStylesFunc = void 0;

// exports
var navigationStylesFunc = function navigationStylesFunc(_ref) {
  var baseStyles = _ref.baseStyles;
  return Object.freeze({
    verticalNavigationMaxWidth: 280,
    // px
    fontStack: baseStyles.regularFontStack,
    iconFontSize: baseStyles.primaryFontSize,
    // px
    captionFontSize: baseStyles.secondaryFontSize,
    // px
    bodyBGColor1: baseStyles.primaryBGColor,
    bodyBGColor2: baseStyles.noneTransparentBGColor,
    bodyHoverColor1: baseStyles.mainQuaternaryColor,
    fontColor1: baseStyles.noneTransparentBGColor,
    fontColor2: baseStyles.subPrimaryColor
  });
};

exports.navigationStylesFunc = navigationStylesFunc;