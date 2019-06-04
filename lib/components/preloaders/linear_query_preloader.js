'use strict'; // external imports

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinearQueryPreloader = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _classnames = _interopRequireDefault(require("classnames"));

var _linear_indeterminate_preloader = require("./linear_indeterminate_preloader");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// local imports
// styles definition
var styles = function styles(theme) {
  return {
    componentContainer: {
      transform: 'rotate(180deg)'
    }
  };
};
/**
 * Linear query preloader.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation


function LinearQueryPreloaderFunction(props) {
  var classes = props.classes,
      className = props.className,
      style = props.style;
  var componentClassNames = (0, _classnames.default)(classes.componentContainer, className);
  return React.createElement(_linear_indeterminate_preloader.LinearIndeterminatePreloader, {
    className: componentClassNames,
    style: style
  });
}

LinearQueryPreloaderFunction.displayName = 'LinearQueryPreloader'; // exports

var LinearQueryPreloader = (0, _reactJss.default)(styles)(LinearQueryPreloaderFunction);
exports.LinearQueryPreloader = LinearQueryPreloader;