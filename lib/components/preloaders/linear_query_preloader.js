'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinearQueryPreloader = undefined;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _linear_indeterminate_preloader = require('./linear_indeterminate_preloader');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// styles definition

// type definitions
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


// local imports
function LinearQueryPreloaderFunction(props) {
  var classes = props.classes,
      className = props.className,
      style = props.style;

  var componentClassNames = (0, _classnames2.default)(classes.componentContainer, className);

  return React.createElement(_linear_indeterminate_preloader.LinearIndeterminatePreloader, { className: componentClassNames, style: style });
}

LinearQueryPreloaderFunction.displayName = 'LinearQueryPreloader';

// exports
var LinearQueryPreloader = exports.LinearQueryPreloader = (0, _reactJss2.default)(styles)(LinearQueryPreloaderFunction);