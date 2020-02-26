'use strict'; // external imports

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormCheckboxInputComponent = FormCheckboxInputComponent;
exports.default = exports.FormCheckboxInputClass = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ramda = require("ramda");

var _dom_helpers = require("@webfuturistics/design_components/lib/helpers/general/dom_helpers");

var _form_checkbox_variant1_component = require("./form_checkbox_variants/form_checkbox_variant1_component");

var _form_checkbox_variant2_component = require("./form_checkbox_variants/form_checkbox_variant2_component");

var _form_checkbox_variant3_component = require("./form_checkbox_variants/form_checkbox_variant3_component");

var _main_theme_provider = require("./../../theming/providers/main_theme_provider");

var _dec, _class, _class2, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  return {
    componentContainer: {
      boxSizing: 'border-box',
      display: 'flex',
      flexBasis: 'auto',
      flexGrow: 0,
      flexShrink: 1,
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'flex-start',
      alignItems: 'center',
      alignContent: 'flex-start',
      '& > $checkboxLabel': {
        boxSizing: 'border-box',
        flexBasis: 'auto',
        flexShrink: 1,
        flexGrow: 0,
        fontFamily: theme.inputStyles.fontStack,
        fontSize: theme.inputStyles.fontSize,
        '&.disabled': {
          color: theme.inputStyles.disabledColor
        }
      },
      '& > $checkboxLabelVariant1': {
        color: theme.inputStyles.labelColor
      },
      '& > $checkboxLabelVariant2': {
        color: theme.inputStyles.alternateInputColor
      },
      '& > $checkboxLeftLabel': {
        paddingRight: "".concat(theme.inputStyles.switchLabelOffset, "px")
      },
      '& > $checkboxRightLabel': {
        paddingLeft: "".concat(theme.inputStyles.switchLabelOffset, "px")
      },
      '& > $inputControl': {
        display: 'none'
      }
    },
    checkboxLabel: {},
    checkboxLabelVariant1: {},
    checkboxLabelVariant2: {},
    checkboxLeftLabel: {},
    checkboxRightLabel: {},
    inputControl: {}
  };
};
/**
 * Checkbox input component styled according to material-UI guidelines.
 * Component is intended to be used as a parameter for ['Redux-form' Field component](#reduxformcheckboxinputcomponent).
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation
// $FlowFixMe decorators


var FormCheckboxInputClass = (_dec = (0, _reactJss.default)(styles), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FormCheckboxInputClass, _React$Component);

  // region static props
  // endregion
  // region constructor
  function FormCheckboxInputClass(props) {
    var _this;

    _classCallCheck(this, FormCheckboxInputClass);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormCheckboxInputClass).call(this, props));
    _this._id = null;
    _this._id = _this._createInputId();
    return _this;
  } // endregion
  // region lifecycle methods
  // endregion
  // region style accessors


  _createClass(FormCheckboxInputClass, [{
    key: "_getLabelClasses",
    value: function _getLabelClasses() {
      var _this$props = this.props,
          disabled = _this$props.disabled,
          labelPosition = _this$props.labelPosition,
          _this$props$classes = _this$props.classes,
          checkboxLeftLabel = _this$props$classes.checkboxLeftLabel,
          checkboxRightLabel = _this$props$classes.checkboxRightLabel;
      var variantClassName = (0, _ramda.cond)([[(0, _ramda.equals)(1), (0, _ramda.always)(this.props.classes.checkboxLabelVariant1)], [(0, _ramda.equals)(2), (0, _ramda.always)(this.props.classes.checkboxLabelVariant2)], [_ramda.T, (0, _ramda.always)(this.props.classes.checkboxLabelVariant1)]])(this._getVariant());
      return (0, _classnames.default)(this.props.classes.checkboxLabel, variantClassName, (0, _ramda.ifElse)((0, _ramda.equals)('left'), (0, _ramda.always)(checkboxLeftLabel), (0, _ramda.always)(checkboxRightLabel))(labelPosition), {
        'disabled': disabled
      });
    }
  }, {
    key: "_getInputClasses",
    value: function _getInputClasses() {
      var disabled = this.props.disabled;
      return (0, _classnames.default)(this.props.classes.inputControl, {
        'disabled': disabled
      });
    }
  }, {
    key: "_getComponentContainerStyles",
    value: function _getComponentContainerStyles() {
      var componentContainerStyles = (0, _ramda.defaultTo)({})(this.props.componentContainerStyles);
      var style = (0, _ramda.defaultTo)({})(this.props.style);
      return Object.assign({}, componentContainerStyles, style);
    } // endregion
    // region label accessors
    // endregion
    // region state accessors

  }, {
    key: "_createInputId",
    value: function _createInputId() {
      var _this$_getInputData = this._getInputData(),
          name = _this$_getInputData.name;

      var randomIdNumber = (0, _dom_helpers.generateRandomIdNumber)();

      if ((0, _ramda.isNil)(name)) {
        throw new Error('Name cannot be null, cannot create input ID');
      }

      return "radio_button_input_".concat(name, "_").concat(randomIdNumber);
    } // endregion
    // region prop accessors

  }, {
    key: "_getVariant",
    value: function _getVariant() {
      return (0, _ramda.defaultTo)(FormCheckboxInputClass.defaultProps.variant)(this.props.variant);
    }
  }, {
    key: "_isChecked",
    value: function _isChecked() {
      var _this$_getInputData2 = this._getInputData(),
          checked = _this$_getInputData2.checked;

      return (0, _ramda.isNil)(checked) ? false : checked;
    }
  }, {
    key: "_getInputData",
    value: function _getInputData() {
      var input = this.props.input;
      return (0, _ramda.isNil)(input) ? (0, _ramda.clone)(FormCheckboxInputClass.defaultProps.input) : input;
    } // endregion
    // region handlers
    // endregion
    // region render methods

  }, {
    key: "_renderLabel",
    value: function _renderLabel() {
      var _this$props2 = this.props,
          labelPosition = _this$props2.labelPosition,
          label = _this$props2.label;

      if ((0, _ramda.isNil)(labelPosition) || (0, _ramda.isNil)(label)) {
        return null;
      }

      return React.createElement("div", {
        className: this._getLabelClasses()
      }, label);
    }
  }, {
    key: "_renderCheckbox",
    value: function _renderCheckbox() {
      var _this2 = this;

      return (0, _ramda.cond)([[(0, _ramda.equals)(1), function () {
        return React.createElement(_form_checkbox_variant1_component.FormCheckboxVariant1Component, {
          disabled: _this2.props.disabled,
          htmlFor: _this2._id
        });
      }], [(0, _ramda.equals)(2), function () {
        return React.createElement(_form_checkbox_variant2_component.FormCheckboxVariant2Component, {
          disabled: _this2.props.disabled,
          htmlFor: _this2._id
        });
      }], [(0, _ramda.equals)(3), function () {
        return React.createElement(_form_checkbox_variant3_component.FormCheckboxVariant3Component, {
          disabled: _this2.props.disabled,
          htmlFor: _this2._id
        });
      }]])(this._getVariant());
    }
  }, {
    key: "_renderInput",
    value: function _renderInput() {
      var disabled = this.props.disabled;

      var _this$_getInputData3 = this._getInputData(),
          value = _this$_getInputData3.value,
          name = _this$_getInputData3.name,
          onChange = _this$_getInputData3.onChange;

      var checkedParam = this._isChecked() ? 'checked' : '';
      var disabledParam = disabled ? 'disabled' : undefined;
      return React.createElement("input", {
        className: this._getInputClasses(),
        disabled: disabledParam,
        checked: checkedParam,
        type: "checkbox",
        value: value,
        name: name,
        id: this._id,
        onChange: onChange
      });
    }
  }, {
    key: "_renderInputContainer",
    value: function _renderInputContainer() {
      var labelPosition = this.props.labelPosition;
      return React.createElement("div", {
        className: this.props.classes.componentContainer,
        style: this._getComponentContainerStyles()
      }, labelPosition === 'left' ? this._renderLabel() : null, this._renderInput(), this._renderCheckbox(), labelPosition === 'right' ? this._renderLabel() : null);
    }
  }, {
    key: "render",
    value: function render() {
      return this._renderInputContainer();
    } // endregion

  }]);

  return FormCheckboxInputClass;
}(React.Component), _class2.displayName = 'FormCheckboxInputClass', _class2.defaultProps = {
  variant: 1,
  disabled: false,
  leftLabel: '',
  rightLabel: '',
  input: _defineProperty({
    name: '',
    value: '',
    onChange: function onChange() {},
    onFocus: function onFocus() {},
    onBlur: function onBlur() {},
    onDrop: function onDrop() {},
    onDragStart: function onDragStart() {}
  }, "onFocus", function onFocus() {}),
  classes: {}
}, _temp)) || _class);
exports.FormCheckboxInputClass = FormCheckboxInputClass;

function FormCheckboxInputComponent(props) {
  return React.createElement(_main_theme_provider.MainThemeContext.Consumer, null, function (windowDimensions) {
    return React.createElement(FormCheckboxInputClass, _extends({}, props, windowDimensions));
  });
}

FormCheckboxInputComponent.displayName = 'FormCheckboxInputComponent'; // exports

var _default = FormCheckboxInputComponent;
exports.default = _default;