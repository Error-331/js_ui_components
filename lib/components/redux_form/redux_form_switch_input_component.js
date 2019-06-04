'use strict'; // external imports

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReduxFormSwitchInputComponent = exports.ReduxFormSwitchInputComponentClass = void 0;

var React = _interopRequireWildcard(require("react"));

var _immutable = require("redux-form/immutable");

var _form_switch_input_component = require("./../form/form_switch_input_component");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Wrapper around ['FormSwitchInputComponent'](#formswitchinputcomponent) component for use inside Redux-form.
 * Component is intended to be used as a child component inside Redux-form.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation
var ReduxFormSwitchInputComponentClass =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ReduxFormSwitchInputComponentClass, _React$Component);

  function ReduxFormSwitchInputComponentClass() {
    _classCallCheck(this, ReduxFormSwitchInputComponentClass);

    return _possibleConstructorReturn(this, _getPrototypeOf(ReduxFormSwitchInputComponentClass).apply(this, arguments));
  }

  _createClass(ReduxFormSwitchInputComponentClass, [{
    key: "render",
    value: function render() {
      return React.createElement(_immutable.Field, {
        type: "checkbox",
        name: this.props.name,
        disabled: this.props.disabled,
        leftLabel: this.props.leftLabel,
        rightLabel: this.props.rightLabel,
        component: _form_switch_input_component.FormSwitchInputComponent
      });
    }
  }]);

  return ReduxFormSwitchInputComponentClass;
}(React.Component); // exports


exports.ReduxFormSwitchInputComponentClass = ReduxFormSwitchInputComponentClass;

_defineProperty(ReduxFormSwitchInputComponentClass, "displayName", 'ReduxFormSwitchInputComponent');

var ReduxFormSwitchInputComponent = ReduxFormSwitchInputComponentClass;
exports.ReduxFormSwitchInputComponent = ReduxFormSwitchInputComponent;