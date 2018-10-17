'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ControlledTableComponent = exports.ControlledTableComponentClass = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

// local imports


var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ramda = require('ramda');

var _ = require('./');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
var ControlledTableComponentClass = exports.ControlledTableComponentClass = (_temp = _class = function (_React$Component) {
  _inherits(ControlledTableComponentClass, _React$Component);

  function ControlledTableComponentClass() {
    _classCallCheck(this, ControlledTableComponentClass);

    return _possibleConstructorReturn(this, (ControlledTableComponentClass.__proto__ || Object.getPrototypeOf(ControlledTableComponentClass)).apply(this, arguments));
  }

  _createClass(ControlledTableComponentClass, [{
    key: 'render',


    // endregion

    // region constructor
    // endregion

    // region lifecycle methods
    // endregion

    // region style accessors
    // endregion

    // region label accessors
    // endregion

    // region state accessors
    // endregion

    // region prop accessors
    // endregion

    // region handlers
    // endregion

    // region render methods

    // region static props
    value: function render() {
      return React.createElement(_.RegularTableComponent, this.props);
    }

    // endregion

  }]);

  return ControlledTableComponentClass;
}(React.Component), _class.displayName = 'ControlledTableComponent', _class.defaultProps = {}, _temp);

// exports

var ControlledTableComponent = exports.ControlledTableComponent = (0, _reactJss2.default)(styles)(ControlledTableComponentClass);