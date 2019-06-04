'use strict'; // external imports
// local imports

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tableStylesFunc = void 0;

// exports
var tableStylesFunc = function tableStylesFunc(_ref) {
  var fontStacks = _ref.fontStacks,
      baseStyles = _ref.baseStyles;
  return Object.freeze({
    bodyFontStack: fontStacks.regularFontFamilyStack,
    headerFontStack: fontStacks.boldFontFamilyStack,
    cellFontSize: baseStyles.secondaryFontSize,
    // px
    cellLineHeight: baseStyles.primaryFontSize,
    // px
    headerCellFontColor: baseStyles.mainQuaternaryColor,
    cellFontColor: baseStyles.mainPrimaryColor,
    cellBGColor: baseStyles.transparentBGColor,
    cellHoverBGColor: baseStyles.mainQuaternaryColor,
    cellBorderColor: baseStyles.mainQuaternaryColor,
    cellPaddingTop: 12,
    // px
    cellPaddingBottom: 12,
    // px
    cellPaddingLeft: 5,
    // px
    cellPaddingRight: 5 // px

  });
};

exports.tableStylesFunc = tableStylesFunc;