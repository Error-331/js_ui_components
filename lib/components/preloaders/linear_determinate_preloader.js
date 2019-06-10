'use strict'; // external imports

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LinearDeterminatePreloader = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _ramda = require("ramda");

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// styles definition
var styles = function styles(theme) {
  return {
    componentContainer: {
      boxSizing: 'border-box',
      position: 'relative',
      overflow: 'hidden',
      height: '4px',
      backgroundColor: theme.baseStyles.mainQuaternaryColor,
      '& > $mainBar': {
        position: 'absolute',
        height: '100%',
        width: '100%',
        transitionProperty: 'transform',
        transitionDuration: '0.4s',
        transitionTimingFunction: 'linear',
        transitionDelay: '0s',
        transformOrigin: 'left',
        backgroundColor: theme.baseStyles.mainPrimaryColor
      }
    },
    mainBar: {}
  };
};
/**
 * Linear determinate preloader.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation


function LinearDeterminatePreloaderFunction(props) {
  var value = props.value;
  value = (0, _ramda.cond)([[(0, _ramda.gt)(_ramda.__, 100), (0, _ramda.always)(100)], [(0, _ramda.lt)(_ramda.__, 0), (0, _ramda.always)(0)], [_ramda.T, _ramda.identity]])(value);
  var transformValue = value / 100;
  var mainBarStyle = {
    transform: "scaleX(".concat(transformValue, ")")
  };
  var classes = props.classes,
      className = props.className,
      style = props.style;
  var mainBar = classes.mainBar;
  var componentClassNames = (0, _classnames.default)(classes.componentContainer, className);
  return React.createElement("div", {
    className: componentClassNames,
    style: style
  }, React.createElement("div", {
    className: mainBar,
    style: mainBarStyle
  }));
}

LinearDeterminatePreloaderFunction.displayName = 'LinearDeterminatePreloader'; // exports

var LinearDeterminatePreloader = (0, _reactJss.default)(styles)(LinearDeterminatePreloaderFunction);
exports.LinearDeterminatePreloader = LinearDeterminatePreloader;
var _default = LinearDeterminatePreloader;
exports.default = _default;