'use strict'; // external imports

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormTextInputComponent = FormTextInputComponent;
exports.default = exports.FormTextInputClass = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _ramda = require("ramda");

var _dom_helpers = require("@webfuturistics/design_components/lib/helpers/general/dom_helpers");

var _form_text_input_variant1_component = require("./form_text_input_variants/form_text_input_variant1_component");

var _form_text_input_variant2_component = require("./form_text_input_variants/form_text_input_variant2_component");

var _main_theme_provider = require("./../../theming/providers/main_theme_provider");

var _dec, _class, _class2, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// styles definition
var styles = function styles(theme) {
  return {};
};
/**
 * Text input component styled according to material-UI guidelines.
 * Component is intended to be used as a parameter for ['Redux-form' Field component](#reduxformtextinputcomponent).
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation
// $FlowFixMe decorators


var FormTextInputClass = (_dec = (0, _reactJss.default)(styles), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FormTextInputClass, _React$Component);

  // region static props
  // endregion
  // region private props
  // endregion
  // region constructor
  function FormTextInputClass(props) {
    var _this;

    _classCallCheck(this, FormTextInputClass);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormTextInputClass).call(this, props));
    _this._id = void 0;
    _this._id = _this._createInputId();
    return _this;
  } // endregion
  // region lifecycle methods
  // endregion
  // region style accessors
  // endregion
  // region label accessors
  // endregion
  // region state accessors


  _createClass(FormTextInputClass, [{
    key: "_createInputId",
    value: function _createInputId() {
      var _this$_getInputData = this._getInputData(),
          name = _this$_getInputData.name;

      var randomIdNumber = (0, _dom_helpers.generateRandomIdNumber)();

      if ((0, _ramda.isNil)(name)) {
        throw new Error('Name cannot be null, cannot create input ID');
      }

      return "text_input_".concat(name, "_").concat(randomIdNumber);
    } // endregion
    // region prop accessors

  }, {
    key: "_getVariant",
    value: function _getVariant() {
      return (0, _ramda.defaultTo)(FormTextInputClass.defaultProps.variant)(this.props.variant);
    }
  }, {
    key: "_getMetaData",
    value: function _getMetaData() {
      var meta = this.props.meta;
      return (0, _ramda.isNil)(meta) ? (0, _ramda.clone)(FormTextInputClass.defaultProps.meta) : meta;
    }
  }, {
    key: "_getInputData",
    value: function _getInputData() {
      var input = this.props.input;
      return (0, _ramda.isNil)(input) ? (0, _ramda.clone)(FormTextInputClass.defaultProps.input) : input;
    } // endregion
    // region handlers
    // endregion
    // region render methods

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          customComponent = _this$props.customComponent,
          type = _this$props.type,
          onKeyPress = _this$props.onKeyPress,
          readOnly = _this$props.readOnly,
          disabled = _this$props.disabled,
          errorsIfTouched = _this$props.errorsIfTouched,
          warningsIfTouched = _this$props.warningsIfTouched,
          rows = _this$props.rows,
          placeholder = _this$props.placeholder,
          label = _this$props.label,
          componentContainerClassName = _this$props.componentContainerClassName,
          componentContainerStyles = _this$props.componentContainerStyles,
          iconClassNames = _this$props.iconClassNames,
          style = _this$props.style;

      var _this$_getInputData2 = this._getInputData(),
          value = _this$_getInputData2.value,
          name = _this$_getInputData2.name,
          onChange = _this$_getInputData2.onChange,
          onFocus = _this$_getInputData2.onFocus,
          onBlur = _this$_getInputData2.onBlur;

      var _this$_getMetaData = this._getMetaData(),
          initial = _this$_getMetaData.initial,
          active = _this$_getMetaData.active,
          touched = _this$_getMetaData.touched,
          pristine = _this$_getMetaData.pristine,
          dirty = _this$_getMetaData.dirty,
          error = _this$_getMetaData.error,
          warning = _this$_getMetaData.warning;

      var componentVariantProps = {
        type: type,
        id: this._id,
        readOnly: readOnly,
        disabled: disabled,
        active: active,
        touched: touched,
        pristine: pristine,
        dirty: dirty,
        onKeyPress: onKeyPress,
        errorsIfTouched: errorsIfTouched,
        warningsIfTouched: warningsIfTouched,
        error: error,
        warning: warning,
        placeholder: placeholder,
        label: label,
        value: value,
        initial: initial,
        name: name,
        rows: rows,
        onChange: onChange,
        onFocus: onFocus,
        onBlur: onBlur,
        onClick: function onClick() {},
        componentContainerClassName: componentContainerClassName,
        componentContainerStyles: componentContainerStyles,
        iconClassNames: iconClassNames,
        style: style
      };

      if (!(0, _ramda.isNil)(customComponent)) {
        return React.cloneElement(customComponent, componentVariantProps);
      }

      return (0, _ramda.cond)([[(0, _ramda.equals)(1), (0, _ramda.always)(React.createElement(_form_text_input_variant1_component.FormTextInputVariant1Component, componentVariantProps))], [(0, _ramda.equals)(2), (0, _ramda.always)(React.createElement(_form_text_input_variant2_component.FormTextInputVariant2Component, componentVariantProps))], [_ramda.T, (0, _ramda.always)(null)]])(this._getVariant());
    } // endregion

  }]);

  return FormTextInputClass;
}(React.Component), _class2.displayName = 'FormTextInputClass', _class2.defaultProps = {
  variant: 1
}, _temp)) || _class);
exports.FormTextInputClass = FormTextInputClass;

function FormTextInputComponent(props) {
  return React.createElement(_main_theme_provider.MainThemeContext.Consumer, null, function (windowDimensions) {
    return React.createElement(FormTextInputClass, _extends({}, props, windowDimensions));
  });
}

FormTextInputComponent.displayName = 'FormTextInputComponent'; // exports

var _default = FormTextInputComponent;
exports.default = _default;