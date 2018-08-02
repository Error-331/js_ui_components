'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleFlexGridColumn = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
      boxSizing: 'border-box',

      flexBasis: 'auto',
      flexGrow: 0,
      flexShrink: 1
    }
  };
};

// component implementation
function SimpleFlexGridColumnFunction(props) {
  var size = props.size,
      full = props.full,
      classes = props.classes,
      style = props.style,
      className = props.className,
      children = props.children;


  var flexBasis = (0, _ramda.is)(String, size) ? size : (0, _ramda.toString)(size) + '%';
  var flexGrow = full === true ? 1 : 0;

  var componentClassNames = (0, _classnames2.default)(classes.componentContainer, className);

  return React.createElement(
    'div',
    { className: componentClassNames, style: _extends({ flexBasis: flexBasis, flexGrow: flexGrow }, style) },
    children
  );
}

SimpleFlexGridColumnFunction.displayName = 'SimpleFlexGridColumn';

// exports
var SimpleFlexGridColumn = exports.SimpleFlexGridColumn = (0, _reactJss2.default)(styles)(SimpleFlexGridColumnFunction);