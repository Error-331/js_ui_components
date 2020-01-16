'use strict'; // external imports

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.weak-map");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.RegularSidebarComponent = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// styles definition
var styles = function styles(theme) {
  return {
    componentContainer: {
      boxSizing: 'border-box',
      padding: "".concat(theme.layoutStyles.topSpacing, "px \n                  ").concat(theme.layoutStyles.rightSpacing, "px \n                  ").concat(theme.layoutStyles.bottomSpacing, "px \n                  ").concat(theme.layoutStyles.leftSpacing, "px\n        "),
      backgroundColor: theme.layoutStyles.headerBGColor,
      fontFamily: theme.layoutStyles.bodyFontStack,
      fontSize: theme.layoutStyles.bodyFontSize,
      color: theme.layoutStyles.headerFontColor
    }
  };
};
/**
 * Regular sidebar component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation


function RegularSidebarFunction(props) {
  var className = props.className,
      style = props.style,
      children = props.children,
      classes = props.classes;
  var combinedClassName = (0, _classnames.default)(classes.componentContainer, className);
  return React.createElement("div", {
    className: combinedClassName,
    style: style
  }, children);
}

RegularSidebarFunction.displayName = 'RegularSidebarComponent'; // exports

var RegularSidebarComponent = (0, _reactJss.default)(styles)(RegularSidebarFunction);
exports.RegularSidebarComponent = RegularSidebarComponent;
var _default = RegularSidebarComponent;
exports.default = _default;