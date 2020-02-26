'use strict'; // external imports

require("core-js/modules/es.object.assign");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _immutable = require("redux-form/immutable");

var _form_rich_text_input_component = _interopRequireDefault(require("./../form/form_rich_text_input_component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// styles definition

/**
 * Wrapper around ['FormSliderInputComponent'](#/UI%20Components/Form/FormSliderInputComponent) component for use inside Redux-form.
 * Component is intended to be used as a child component inside Redux-form.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation
function ReduxFormRichTextInputComponent(props) {
  var renderComponentContainer = function renderComponentContainer() {
    return _react.default.createElement(_immutable.Field, _extends({
      name: props.name,
      component: _form_rich_text_input_component.default
    }, props));
  }; // endregion


  return renderComponentContainer();
} // exports


var _default = ReduxFormRichTextInputComponent;
exports.default = _default;