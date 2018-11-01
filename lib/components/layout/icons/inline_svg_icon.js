'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineSVGIcon = undefined;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ramda = require('ramda');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// styles definition


// local imports

// type definitions
var styles = function styles(theme) {
  return {
    componentContainer: {
      '& path': {
        fill: 'none',

        stroke: 'green',
        strokeWidth: '2.5',
        strokeLinecap: 'butt',
        strokeLinejoin: 'miter',
        strokeMiterlimit: 10,
        strokeDasharray: 'none',
        strokeOpacity: 1
      }
    }
  };
};

/**
 * SVG inline icon component.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function InlineSVGIconFunction(props) {
  var className = props.className,
      classes = props.classes,
      style = props.style,
      children = props.children;


  var combinedClassName = (0, _classnames2.default)(classes.componentContainer, className);

  return React.createElement(
    'svg',
    {
      width: props.width,
      height: props.height,

      viewBox: props.viewBox,

      className: combinedClassName,
      style: style
    },
    children
  );
}

InlineSVGIconFunction.displayName = 'InlineSVGIcon';

// exports
var InlineSVGIcon = exports.InlineSVGIcon = (0, _reactJss2.default)(styles)(InlineSVGIconFunction);