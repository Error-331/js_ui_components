'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _ramda = require('ramda');

var _elements_row = require('./elements_row');

var _elements_row2 = _interopRequireDefault(_elements_row);

var _elements_column = require('./elements_column');

var _elements_column2 = _interopRequireDefault(_elements_column);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// styles definition


// type definitions


// local imports
var styles = function styles(theme) {
  return {};
};

/**
 * Elements group component.
 * Helps to layout columns (or rows) of elements (especially different buttons and checkboxes).
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function ElementsGroup(props) {
  var direction = props.direction,
      alignment = props.alignment;

  direction = (0, _ramda.defaultTo)('column')(direction);

  // TODO: can do better with ternary operator or if Else() but react-docgen do not understand them
  if (direction === 'column') {
    return React.createElement(
      _elements_column2.default,
      { alignment: alignment },
      props.children
    );
  } else {
    return React.createElement(
      _elements_row2.default,
      { alignment: alignment },
      props.children
    );
  }
}

// exports
exports.default = (0, _reactJss2.default)(styles)(ElementsGroup);