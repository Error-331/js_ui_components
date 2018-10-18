'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReduxFormDateInputComponent = exports.ReduxFormDateInputComponentClass = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

// local imports


var _react = require('react');

var React = _interopRequireWildcard(_react);

var _immutable = require('redux-form/immutable');

var _form_date_input_component = require('../form/form_date_input_component');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Wrapper around ['FormDateInputComponent'](#formdateinputcomponent) component for use inside Redux-form.
 * Component is intended to be used as a child component inside Redux-form.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation


// type definitions
var ReduxFormDateInputComponentClass = exports.ReduxFormDateInputComponentClass = (_temp = _class = function (_React$Component) {
  _inherits(ReduxFormDateInputComponentClass, _React$Component);

  function ReduxFormDateInputComponentClass() {
    _classCallCheck(this, ReduxFormDateInputComponentClass);

    return _possibleConstructorReturn(this, (ReduxFormDateInputComponentClass.__proto__ || Object.getPrototypeOf(ReduxFormDateInputComponentClass)).apply(this, arguments));
  }

  _createClass(ReduxFormDateInputComponentClass, [{
    key: 'render',
    value: function render() {
      return React.createElement(_immutable.Field, _extends({ type: 'select', component: _form_date_input_component.FormDateInputComponent }, this.props));
    }
  }]);

  return ReduxFormDateInputComponentClass;
}(React.Component), _class.displayName = 'ReduxFormDateInputComponent', _temp);

// exports

var ReduxFormDateInputComponent = exports.ReduxFormDateInputComponent = ReduxFormDateInputComponentClass;