'use strict'; // external imports

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.weak-map");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ElementsColumn = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ramda = require("ramda");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(Object(source)); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// styles definition
var styles = function styles(theme) {
  return {
    componentContainer: {
      boxSizing: 'border-box',
      display: 'flex',
      flexBasis: 'auto',
      flexGrow: 0,
      flexShrink: 1,
      flexDirection: 'column',
      flexWrap: 'nowrap',
      justifyContent: 'flex-start',
      alignItems: 'center',
      alignContent: 'flex-start',
      '&.left': {
        alignItems: 'flex-start'
      },
      '&.left > div': {
        marginTop: "".concat(theme.layoutStyles.sectionVerticalSpacing, "px")
      },
      '&.left > button': {
        marginTop: "".concat(theme.layoutStyles.sectionVerticalSpacing, "px")
      },
      '&.left > div:first-child': {
        marginTop: '0px'
      },
      '&.left > button:first-child': {
        marginTop: '0px'
      },
      '&.right': {
        alignItems: 'flex-end'
      },
      '&.right > div': {
        marginTop: "".concat(theme.layoutStyles.sectionVerticalSpacing, "px")
      },
      '&.right > button': {
        marginTop: "".concat(theme.layoutStyles.sectionVerticalSpacing, "px")
      },
      '&.right > div:first-child': {
        marginTop: '0px'
      },
      '&.right > button:first-child': {
        marginTop: '0px'
      },
      '&.center': {
        alignItems: 'center'
      },
      '&.center > div': {
        marginTop: "".concat(theme.layoutStyles.sectionVerticalSpacing, "px")
      },
      '&.center > button': {
        marginTop: "".concat(theme.layoutStyles.sectionVerticalSpacing, "px")
      },
      '&.center > div:first-child': {
        marginTop: '0px'
      },
      '&.center > button:first-child': {
        marginTop: '0px'
      }
    }
  };
};
/**
 * Elements column component.
 * Used to align columns of elements.
 * Best used with [RegularButtonComponent](#regularbuttoncomponent)
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation


function ElementsColumnFunction(props) {
  var alignment = props.alignment,
      className = props.className,
      classes = props.classes,
      style = props.style;
  alignment = (0, _ramda.defaultTo)('left')(alignment);
  var containerClasses = (0, _classnames.default)(classes.componentContainer, alignment, className);
  return React.createElement("div", {
    className: containerClasses,
    style: _objectSpread({}, style)
  }, props.children);
}

ElementsColumnFunction.displayName = 'ElementsColumn'; // exports

var ElementsColumn = (0, _reactJss.default)(styles)(ElementsColumnFunction);
exports.ElementsColumn = ElementsColumn;
var _default = ElementsColumn;
exports.default = _default;