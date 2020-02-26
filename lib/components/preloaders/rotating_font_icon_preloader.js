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
exports.default = exports.RotatingFontIconPreloader = exports.ROTATING_FONT_ICON_PRELOADER_MAIN_KEYFRAMES_STYLE_NAME = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _ramda = require("ramda");

var _classnames = _interopRequireDefault(require("classnames"));

var _font_icon = require("./../layout/icons/font_icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// constants definition
var ROTATING_FONT_ICON_PRELOADER_MAIN_KEYFRAMES_STYLE_NAME = 'rotating_font_icon_preloader_main_keyframes'; // styles definition

exports.ROTATING_FONT_ICON_PRELOADER_MAIN_KEYFRAMES_STYLE_NAME = ROTATING_FONT_ICON_PRELOADER_MAIN_KEYFRAMES_STYLE_NAME;

var styles = function styles(theme) {
  return {
    componentContainer: {
      animationName: ROTATING_FONT_ICON_PRELOADER_MAIN_KEYFRAMES_STYLE_NAME,
      animationDuration: '1s',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
    }
  };
};
/**
 * Rotating font icon preloader.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation


function RotatingFontIconPreloaderFunction(props) {
  var size = props.size,
      style = props.style,
      className = props.className,
      classes = props.classes,
      theme = props.theme;
  theme.styleSheetRegister.addGlobalStyles(_defineProperty({}, "@keyframes ".concat(ROTATING_FONT_ICON_PRELOADER_MAIN_KEYFRAMES_STYLE_NAME), {
    'from': {
      transform: 'rotate(0deg)'
    },
    'to': {
      transform: 'rotate(360deg)'
    }
  }), "@keyframes ".concat(ROTATING_FONT_ICON_PRELOADER_MAIN_KEYFRAMES_STYLE_NAME));
  var iconClassName = props.iconClassName;
  iconClassName = (0, _ramda.defaultTo)('fas fa-sync')(iconClassName);
  var componentClassNames = (0, _classnames.default)(classes.componentContainer, className);
  return React.createElement(_font_icon.FontIcon, {
    size: size,
    iconClassName: iconClassName,
    className: componentClassNames,
    style: style
  });
}

RotatingFontIconPreloaderFunction.displayName = 'RotatingFontIconPreloader'; // exports

var RotatingFontIconPreloader = (0, _reactJss.default)(styles, {
  injectTheme: true
})(RotatingFontIconPreloaderFunction);
exports.RotatingFontIconPreloader = RotatingFontIconPreloader;
var _default = RotatingFontIconPreloader;
exports.default = _default;