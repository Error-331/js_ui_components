'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineTextBlock = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// local imports

// type definitions
var styles = function styles(theme) {
  return {
    componentContainer: {
      fontFamily: theme.layoutStyles.fontStack,
      fontSize: theme.layoutStyles.bodyFontSize,

      color: theme.layoutStyles.bodyFontColor
    }
  };
};

/**
 * Inline text block component styled according to material-UI guidelines.
 * Used to represent simple text blocks, captions, labels and etc.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function InlineTextBlockFunction(props) {
  var classes = props.classes,
      children = props.children,
      className = props.className,
      style = props.style;

  var componentClassNames = (0, _classnames2.default)(classes.componentContainer, className);

  return React.createElement(
    'span',
    { className: componentClassNames, style: _extends({}, style) },
    children
  );
}

InlineTextBlockFunction.displayName = 'InlineTextBlock';

// exports
var InlineTextBlock = exports.InlineTextBlock = (0, _reactJss2.default)(styles)(InlineTextBlockFunction);