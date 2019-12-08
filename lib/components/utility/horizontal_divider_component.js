'use strict'; // external imports

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.weak-map");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.HorizontalDivider = void 0;

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
      width: '100%',
      padding: '10px 10px 10px 10px',
      '& > $bodyContainer': {
        boxSizing: 'border-box',
        height: '2px',
        lineHeight: '2px',
        backgroundColor: theme.baseStyles.subTertiaryColor
      }
    },
    bodyContainer: {}
  };
};
/**
 * Horizontal divider.
 * Displays simple horizontal line.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation


function HorizontalDividerFunction(props) {
  var classes = props.classes,
      componentContainerClassName = props.componentContainerClassName,
      bodyContainerClassName = props.bodyContainerClassName,
      style = props.style,
      bodyStyle = props.bodyStyle;
  var componentContainer = classes.componentContainer,
      bodyContainer = classes.bodyContainer;
  var componentContainerClassNames = (0, _classnames.default)(componentContainer, componentContainerClassName);
  var bodyContainerClassNames = (0, _classnames.default)(bodyContainer, bodyContainerClassName);
  return React.createElement("div", {
    className: componentContainerClassNames,
    style: style
  }, React.createElement("div", {
    className: bodyContainerClassNames,
    style: bodyStyle
  }));
}

HorizontalDividerFunction.displayName = 'HorizontalDivider'; // exports

var HorizontalDivider = (0, _reactJss.default)(styles)(HorizontalDividerFunction);
exports.HorizontalDivider = HorizontalDivider;
var _default = HorizontalDivider;
exports.default = _default;