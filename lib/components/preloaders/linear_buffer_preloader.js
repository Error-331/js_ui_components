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
exports.default = exports.LinearBufferPreloader = exports.LINEAR_BUFFER_PRELOADER_GRADIENT_BAR_KEYFRAMES_STYLE_NAME = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ramda = require("ramda");

var _linear_indeterminate_preloader = require("./linear_indeterminate_preloader");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// constants definition
var LINEAR_BUFFER_PRELOADER_GRADIENT_BAR_KEYFRAMES_STYLE_NAME = 'linear_buffer_preloader_gradient_bar_keyframes_style_name'; // styles definition

exports.LINEAR_BUFFER_PRELOADER_GRADIENT_BAR_KEYFRAMES_STYLE_NAME = LINEAR_BUFFER_PRELOADER_GRADIENT_BAR_KEYFRAMES_STYLE_NAME;

var barStylesFunc = function barStylesFunc(theme) {
  return {
    position: 'absolute',
    height: '100%',
    width: '100%'
  };
};

var progressBarStylesFunc = function progressBarStylesFunc(theme) {
  return {
    transitionProperty: 'transform',
    transitionDuration: '0.4s',
    transitionTimingFunction: 'linear',
    transitionDelay: '0s',
    transformOrigin: 'left'
  };
};

var styles = function styles(theme) {
  return {
    componentContainer: {
      boxSizing: 'border-box',
      position: 'relative',
      overflow: 'hidden',
      height: '4px',
      backgroundColor: theme.baseStyles.transparentBGColor,
      '& > $mainBar': {
        extend: [barStylesFunc(theme), progressBarStylesFunc(theme)],
        backgroundColor: theme.baseStyles.mainPrimaryColor,
        zIndex: 3
      },
      '& > $subBar': {
        extend: [barStylesFunc(theme), progressBarStylesFunc(theme)],
        backgroundColor: theme.baseStyles.mainSecondaryColor,
        zIndex: 2
      },
      '& > $gradientBar': {
        extend: barStylesFunc(theme),
        animationName: LINEAR_BUFFER_PRELOADER_GRADIENT_BAR_KEYFRAMES_STYLE_NAME,
        animationDuration: '3s',
        animationTimingFunction: 'linear',
        animationDelay: '0s',
        animationIterationCount: 'infinite',
        animationDirection: 'normal',
        animationFillMode: 'none',
        animationPlayState: 'running',
        backgroundSize: '10px 10px',
        backgroundPosition: '0px -23px',
        backgroundImage: "radial-gradient(".concat(theme.baseStyles.mainPrimaryColor, " 0%, ").concat(theme.baseStyles.mainSecondaryColor, " 16%,  transparent 42%)"),
        zIndex: 1
      }
    },
    mainBar: {},
    subBar: {},
    gradientBar: {}
  };
}; // business logic implementation


var normalizeValue = (0, _ramda.cond)([[(0, _ramda.gt)(_ramda.__, 100), (0, _ramda.always)(100)], [(0, _ramda.lt)(_ramda.__, 0), (0, _ramda.always)(0)], [_ramda.T, _ramda.identity]]);
/**
 * Linear buffer preloader.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation

function LinearBufferPreloaderFunction(props) {
  var value = props.value,
      valueBuffer = props.valueBuffer;
  value = normalizeValue(value);
  valueBuffer = normalizeValue(valueBuffer);
  var transformValue = value / 100;
  var transformValueBuffer = valueBuffer / 100;
  var mainBarStyle = {
    transform: "scaleX(".concat(transformValue, ")")
  };
  var subBarStyle = {
    transform: "scaleX(".concat(transformValueBuffer, ")")
  };
  var classes = props.classes,
      className = props.className,
      style = props.style,
      theme = props.theme;
  var mainBar = classes.mainBar,
      subBar = classes.subBar,
      gradientBar = classes.gradientBar;
  var componentClassNames = (0, _classnames.default)(classes.componentContainer, className);
  theme.styleSheetRegister.addGlobalStyles(_defineProperty({}, "@keyframes ".concat(LINEAR_BUFFER_PRELOADER_GRADIENT_BAR_KEYFRAMES_STYLE_NAME), {
    '0%': {
      opacity: 1,
      backgroundPosition: '0px -23px'
    },
    '50%': {
      opacity: 0,
      backgroundPosition: '0px -23px'
    },
    '100%': {
      opacity: 1,
      backgroundPosition: '-200px -23px'
    }
  }), "@keyframes ".concat(LINEAR_BUFFER_PRELOADER_GRADIENT_BAR_KEYFRAMES_STYLE_NAME));
  return React.createElement("div", {
    className: componentClassNames,
    style: style
  }, React.createElement("div", {
    className: mainBar,
    style: mainBarStyle
  }), React.createElement("div", {
    className: subBar,
    style: subBarStyle
  }), React.createElement("div", {
    className: gradientBar
  }));
}

LinearBufferPreloaderFunction.displayName = 'LinearBufferPreloader'; // exports

var LinearBufferPreloader = (0, _reactJss.default)(styles, {
  injectTheme: true
})(LinearBufferPreloaderFunction);
exports.LinearBufferPreloader = LinearBufferPreloader;
var _default = LinearBufferPreloader;
exports.default = _default;