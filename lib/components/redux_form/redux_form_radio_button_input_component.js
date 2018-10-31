'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReduxFormRadioButtonInputComponent = exports.ReduxFormRadioButtonInputComponentClass = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

// local imports


var _react = require('react');

var React = _interopRequireWildcard(_react);

var _immutable = require('redux-form/immutable');

var _form_radio_button_input_component = require('./../form/form_radio_button_input_component');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Wrapper around ['FormRadioButtonInputComponent'](#formradiobuttoninputcomponent) component for use inside Redux-form.
 * Component is intended to be used as a child component inside Redux-form.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation


// type definitions
var ReduxFormRadioButtonInputComponentClass = exports.ReduxFormRadioButtonInputComponentClass = (_temp = _class = function (_React$Component) {
  _inherits(ReduxFormRadioButtonInputComponentClass, _React$Component);

  function ReduxFormRadioButtonInputComponentClass() {
    _classCallCheck(this, ReduxFormRadioButtonInputComponentClass);

    return _possibleConstructorReturn(this, (ReduxFormRadioButtonInputComponentClass.__proto__ || Object.getPrototypeOf(ReduxFormRadioButtonInputComponentClass)).apply(this, arguments));
  }

  _createClass(ReduxFormRadioButtonInputComponentClass, [{
    key: 'render',
    value: function render() {
      return React.createElement(_immutable.Field, {
        type: 'radio',
        name: this.props.name,
        value: this.props.value,
        disabled: this.props.disabled,

        label: this.props.label,
        labelPosition: this.props.labelPosition,

        component: _form_radio_button_input_component.FormRadioButtonInputComponent
      });
    }
  }]);

  return ReduxFormRadioButtonInputComponentClass;
}(React.Component), _class.displayName = 'ReduxFormRadioButtonInputComponent', _temp);

// exports

var ReduxFormRadioButtonInputComponent = exports.ReduxFormRadioButtonInputComponent = ReduxFormRadioButtonInputComponentClass;