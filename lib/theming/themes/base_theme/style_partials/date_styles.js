'use strict'; // external imports
// local imports

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dateStylesFunc = void 0;

// exports
var dateStylesFunc = function dateStylesFunc(_ref) {
  var baseStyles = _ref.baseStyles;
  return Object.freeze({
    calendarCompactMaxWidth: 500,
    // px
    fontStack: baseStyles.regularFontStack,
    regularFontSize: baseStyles.primaryFontSize,
    // px
    fontColor: baseStyles.mainPrimaryColor,
    selectionFontColor: baseStyles.noneTransparentBGColor,
    selectionBackgroundColor: baseStyles.mainQuaternaryColor
  });
};

exports.dateStylesFunc = dateStylesFunc;