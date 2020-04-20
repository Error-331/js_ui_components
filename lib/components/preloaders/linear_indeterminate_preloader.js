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
exports.default = exports.LinearIndeterminatePreloader = exports.LINEAR_INDETERMINATE_PRELOADER_SUB_BAR_KEYFRAMES_STYLE_NAME = exports.LINEAR_INDETERMINATE_PRELOADER_MAIN_BAR_KEYFRAMES_STYLE_NAME = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// constants definition
var LINEAR_INDETERMINATE_PRELOADER_MAIN_BAR_KEYFRAMES_STYLE_NAME = 'linear_indeterminate_preloader_main_bar_keyframes';
exports.LINEAR_INDETERMINATE_PRELOADER_MAIN_BAR_KEYFRAMES_STYLE_NAME = LINEAR_INDETERMINATE_PRELOADER_MAIN_BAR_KEYFRAMES_STYLE_NAME;
var LINEAR_INDETERMINATE_PRELOADER_SUB_BAR_KEYFRAMES_STYLE_NAME = 'linear_indeterminate_preloader_sub_bar_keyframes'; // styles definition

exports.LINEAR_INDETERMINATE_PRELOADER_SUB_BAR_KEYFRAMES_STYLE_NAME = LINEAR_INDETERMINATE_PRELOADER_SUB_BAR_KEYFRAMES_STYLE_NAME;

var barStylesFunc = function barStylesFunc(theme) {
  return {
    position: 'absolute',
    width: 'auto',
    height: '100%',
    left: 0,
    bottom: 0,
    top: 0,
    willChange: 'left, right',
    transformOrigin: 'left',
    transitionProperty: 'transform',
    transitionDuration: '0.2s',
    transitionTimingFunction: 'linear',
    transitionDelay: '0s',
    animationDuration: '2.1s',
    animationIterationCount: 'infinite',
    backgroundColor: theme.baseStyles.mainPrimaryColor
  };
};

var styles = function styles(theme) {
  return {
    componentContainer: {
      boxSizing: 'border-box',
      position: 'relative',
      overflow: 'hidden',
      height: '4px',
      backgroundColor: theme.baseStyles.mainQuaternaryColor,
      '& > $mainBar': {
        extend: barStylesFunc(theme),
        animationName: LINEAR_INDETERMINATE_PRELOADER_MAIN_BAR_KEYFRAMES_STYLE_NAME,
        animationTimingFunction: 'cubic-bezier(0.65, 0.815, 0.735, 0.395)'
      },
      '& > $subBar': {
        extend: barStylesFunc(theme),
        animationName: LINEAR_INDETERMINATE_PRELOADER_SUB_BAR_KEYFRAMES_STYLE_NAME,
        animationTimingFunction: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
        animationDelay: '1.15s'
      }
    },
    mainBar: {},
    subBar: {}
  };
};
/**
 * Linear indeterminate preloader.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation


function LinearIndeterminatePreloaderFunction(props) {
  var classes = props.classes,
      className = props.className,
      style = props.style,
      theme = props.theme;
  var mainBar = classes.mainBar,
      subBar = classes.subBar;
  theme.styleSheetRegister.addGlobalStyles(_defineProperty({}, "@keyframes ".concat(LINEAR_INDETERMINATE_PRELOADER_MAIN_BAR_KEYFRAMES_STYLE_NAME), {
    '0%': {
      left: '-35%',
      right: '100%'
    },
    '60%': {
      left: '100%',
      right: '-90%'
    },
    '100%': {
      left: '100%',
      right: '-90%'
    }
  }), "@keyframes ".concat(LINEAR_INDETERMINATE_PRELOADER_MAIN_BAR_KEYFRAMES_STYLE_NAME));
  theme.styleSheetRegister.addGlobalStyles(_defineProperty({}, "@keyframes ".concat(LINEAR_INDETERMINATE_PRELOADER_SUB_BAR_KEYFRAMES_STYLE_NAME), {
    '0%': {
      left: '-200%',
      right: '100%'
    },
    '60%': {
      left: '107%',
      right: '-8%'
    },
    '100%': {
      left: '107%',
      right: '-8%'
    }
  }), "@keyframes ".concat(LINEAR_INDETERMINATE_PRELOADER_SUB_BAR_KEYFRAMES_STYLE_NAME));
  var componentClassNames = (0, _classnames.default)(classes.componentContainer, className);
  return React.createElement("div", {
    className: componentClassNames,
    style: style
  }, React.createElement("div", {
    className: mainBar
  }), React.createElement("div", {
    className: subBar
  }));
}

LinearIndeterminatePreloaderFunction.displayName = 'LinearIndeterminatePreloader'; // exports

var LinearIndeterminatePreloader = (0, _reactJss.default)(styles, {
  injectTheme: true
})(LinearIndeterminatePreloaderFunction);
exports.LinearIndeterminatePreloader = LinearIndeterminatePreloader;
var _default = LinearIndeterminatePreloader;
exports.default = _default;