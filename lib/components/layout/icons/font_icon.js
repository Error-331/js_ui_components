'use strict'; // external imports

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.weak-map");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FontIcon = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ramda = require("ramda");

var _general_constants = require("./../../../theming/constants/general_constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// styles definition
var styles = function styles(theme) {
  return {
    componentContainer: {
      boxSizing: 'border-box',
      display: 'block',
      color: theme.layoutStyles.baseIconColor,
      '&.tiny': {
        fontSize: theme.layoutStyles.tinyIconSize
      },
      '&.small': {
        fontSize: theme.layoutStyles.smallIconSize
      },
      '&.medium': {
        fontSize: theme.layoutStyles.mediumIconSize
      },
      '&.large': {
        fontSize: theme.layoutStyles.largeIconSize
      },
      '&.extraLarge': {
        fontSize: theme.layoutStyles.extraLargeIconSize
      },
      '&.accent': {
        color: theme.layoutStyles.accentIconColor
      }
    }
  };
};
/**
 * Font icon component.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation


function FontIconFunction(props) {
  var size = props.size,
      accent = props.accent,
      onClick = props.onClick,
      onMouseDown = props.onMouseDown,
      style = props.style,
      iconClassName = props.iconClassName,
      className = props.className,
      classes = props.classes;
  size = (0, _ramda.defaultTo)(_general_constants.MEDIUM_SIZE)(size);
  accent = (0, _ramda.defaultTo)(false)(accent);
  size = size === _general_constants.CUSTOM_SIZE ? '' : size;
  var combinedClassName = (0, _classnames.default)(classes.componentContainer, iconClassName, size, {
    'accent': accent
  }, className);
  return React.createElement("i", {
    onClick: onClick,
    onMouseDown: onMouseDown,
    className: combinedClassName,
    style: style
  });
}

FontIconFunction.displayName = 'FontIcon'; // exports

var FontIcon = (0, _reactJss.default)(styles)(FontIconFunction);
exports.FontIcon = FontIcon;
var _default = FontIcon;
exports.default = _default;