'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineImageIcon = undefined;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ramda = require('ramda');

var _general_constants = require('./../../../theming/constants/general_constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// styles definition


// type definitions
var styles = function styles(theme) {
  return {
    componentContainer: {}
  };
};

/**
 * Inline image icon component.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation


// local imports
function InlineImageIconFunction(props) {
  var src = props.src,
      className = props.className,
      classes = props.classes,
      theme = props.theme,
      style = props.style;

  var size = (0, _ramda.defaultTo)(_general_constants.MEDIUM_SIZE)(props.size);

  var height = theme.layoutStyles[size + 'IconSize'];

  var combinedContainerClassName = (0, _classnames2.default)(classes.componentContainer, className);

  return React.createElement('img', {
    src: src,

    height: height + 'px',
    border: 0,

    className: combinedContainerClassName,
    style: style
  });
}

InlineImageIconFunction.displayName = 'InlineImageIcon';

// exports
var InlineImageIcon = exports.InlineImageIcon = (0, _reactJss2.default)(styles)(InlineImageIconFunction);