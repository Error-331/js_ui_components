'use strict'; // external imports

require("core-js/modules/es.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.longTextCellStylesFunc = exports.commonFooterCellStylesFunc = exports.commonHeaderCellStylesFunc = exports.commonHorizontalTableCellStylesFunc = exports.commonVerticalTableCellStylesFunc = exports.commonCellStylesFunc = exports.commonCellContentStylesFunc = void 0;

var _ramda = require("ramda");

// styles definition
var commonCellContentStylesFunc = function commonCellContentStylesFunc(theme) {
  return {
    lineHeight: "".concat(theme.tableStyles.cellLineHeight, "px"),
    fontFamily: theme.tableStyles.bodyFontStack,
    fontSize: "".concat(theme.tableStyles.cellFontSize, "px"),
    textAlign: 'left',
    color: theme.tableStyles.cellFontColor,
    backgroundColor: theme.tableStyles.cellBGColor
  };
};

exports.commonCellContentStylesFunc = commonCellContentStylesFunc;

var commonCellStylesFunc = function commonCellStylesFunc(theme) {
  return {
    borderBottom: "1px solid ".concat(theme.tableStyles.cellBorderColor),
    paddingLeft: "".concat(theme.tableStyles.cellPaddingLeft, "px"),
    paddingRight: "".concat(theme.tableStyles.cellPaddingRight, "px"),
    extend: commonCellContentStylesFunc(theme)
  };
};

exports.commonCellStylesFunc = commonCellStylesFunc;

var commonVerticalTableCellStylesFunc = function commonVerticalTableCellStylesFunc(theme) {
  return {
    paddingTop: "".concat(theme.tableStyles.cellPaddingTop, "px"),
    paddingBottom: "".concat(theme.tableStyles.cellPaddingBottom, "px"),
    extend: commonCellStylesFunc(theme)
  };
};

exports.commonVerticalTableCellStylesFunc = commonVerticalTableCellStylesFunc;

var commonHorizontalTableCellStylesFunc = function commonHorizontalTableCellStylesFunc(theme) {
  return {
    height: "".concat(theme.tableStyles.cellLineHeight + theme.tableStyles.cellPaddingTop + theme.tableStyles.cellPaddingBottom, "px"),
    extend: commonCellStylesFunc(theme)
  };
};

exports.commonHorizontalTableCellStylesFunc = commonHorizontalTableCellStylesFunc;

var commonHeaderCellStylesFunc = function commonHeaderCellStylesFunc(theme) {
  return (0, _ramda.mergeDeepRight)(commonCellStylesFunc(theme), {
    paddingTop: '0px'
  });
};

exports.commonHeaderCellStylesFunc = commonHeaderCellStylesFunc;

var commonFooterCellStylesFunc = function commonFooterCellStylesFunc(theme) {
  return {
    extend: commonHeaderCellStylesFunc(theme),
    borderTop: "1px solid ".concat(theme.tableStyles.cellBorderColor),
    borderBottom: "0px none"
  };
};

exports.commonFooterCellStylesFunc = commonFooterCellStylesFunc;

var longTextCellStylesFunc = function longTextCellStylesFunc() {
  return {
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  };
};

exports.longTextCellStylesFunc = longTextCellStylesFunc;