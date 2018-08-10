'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RControlledTableComponent = exports.ControlledTableComponentClass = undefined;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ramda = require('ramda');

var _regular_table_component = require('./regular_table_component');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// local imports


// styles definition


// type definitions
var styles = function styles(theme) {
  return {};
};

/**
 * Controlled table component to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation

var ControlledTableComponentClass = exports.ControlledTableComponentClass = function (_React$Component) {
  _inherits(ControlledTableComponentClass, _React$Component);

  function ControlledTableComponentClass() {
    _classCallCheck(this, ControlledTableComponentClass);

    return _possibleConstructorReturn(this, (ControlledTableComponentClass.__proto__ || Object.getPrototypeOf(ControlledTableComponentClass)).apply(this, arguments));
  }

  return ControlledTableComponentClass;
}(React.Component);

// exports


ControlledTableComponentClass.displayName = 'ControlledTableComponent';
ControlledTableComponentClass.defaultProps = (0, _ramda.mergeDeepRight)(_regular_table_component.RegularTableComponentClass.defaultProps, {});
var RControlledTableComponent = exports.RControlledTableComponent = (0, _reactJss2.default)(styles)(ControlledTableComponentClass);