'use strict'; // external imports

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.weak-map");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ScrollableAreaComponent = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ramda = require("ramda");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// constants definition
var SCROLLABLE_AREA_BORDER_SIZE = 1; // px

var SCROLLABLE_AREA_LINE_HEIGHT_SPACING = 2; // px
// styles definition

var styles = function styles(theme) {
  return {
    componentContainer: {
      boxSizing: 'border-box',
      overflowX: 'hidden',
      overflowY: 'scroll',
      borderRadius: "".concat(theme.layoutStyles.commonBorderRadius, "px"),
      border: "".concat(SCROLLABLE_AREA_BORDER_SIZE, "px solid ").concat(theme.baseStyles.subQuaternaryColor),
      padding: "".concat(theme.layoutStyles.topSpacing, "px \n                  ").concat(theme.layoutStyles.rightSpacing, "px \n                  ").concat(theme.layoutStyles.bottomSpacing, "px \n                  ").concat(theme.layoutStyles.leftSpacing, "px\n        "),
      fontFamily: theme.layoutStyles.fontStack,
      fontSize: "".concat(theme.layoutStyles.bodyFontSize, "px"),
      lineHeight: "".concat(theme.layoutStyles.bodyFontSize + SCROLLABLE_AREA_LINE_HEIGHT_SPACING, "px"),
      '&::-webkit-scrollbar-corner': {
        borderRadius: "".concat(theme.layoutStyles.commonBorderRadius, "px")
      }
    }
  };
};
/**
 * Scrollable area.
 * Simple scrollable area that can be filled with any elements.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation


function ScrollableAreaFunction(props) {
  var rowsCount = props.rowsCount,
      style = props.style,
      className = props.className,
      classes = props.classes,
      theme = props.theme,
      children = props.children;
  var composedClassName = (0, _classnames.default)(classes.componentContainer, className);
  var composedStyles = {};

  if ((0, _ramda.isNil)(rowsCount)) {
    composedStyles = {
      height: 'auto'
    };
  } else {
    var spacing = theme.layoutStyles.topSpacing + SCROLLABLE_AREA_BORDER_SIZE * 2;
    var lineHeight = theme.layoutStyles.bodyFontSize + SCROLLABLE_AREA_LINE_HEIGHT_SPACING;
    var height = rowsCount * lineHeight + spacing;
    composedStyles = {
      height: "".concat(height, "px")
    };
  }

  composedStyles = Object.assign(composedStyles, style);
  return React.createElement("div", {
    style: composedStyles,
    className: composedClassName
  }, children);
}

ScrollableAreaFunction.displayName = 'ScrollableAreaComponent'; // exports

var ScrollableAreaComponent = (0, _reactJss.default)(styles, {
  injectTheme: true
})(ScrollableAreaFunction);
exports.ScrollableAreaComponent = ScrollableAreaComponent;
var _default = ScrollableAreaComponent;
exports.default = _default;