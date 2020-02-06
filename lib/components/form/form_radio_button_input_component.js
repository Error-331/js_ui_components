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
exports.FormRadioButtonInputComponent = FormRadioButtonInputComponent;
exports.default = exports.FormRadioButtonInputClass = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ramda = require("ramda");

var _dom_helpers = require("@webfuturistics/design_components/lib/helpers/general/dom_helpers");

var _main_theme_provider = require("./../../theming/providers/main_theme_provider");

var _dec, _class, _class2, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
      cursor: 'pointer',
      '& > $checkboxLabel': {
        boxSizing: 'border-box',
        flexBasis: 'auto',
        flexShrink: 1,
        flexGrow: 0,
        fontFamily: theme.inputStyles.fontStack,
        fontSize: theme.inputStyles.fontSize,
        color: theme.inputStyles.labelColor,
        '&.disabled': {
          color: theme.inputStyles.disabledColor
        }
      },
      '& > $checkboxLeftLabel': {
        paddingRight: "".concat(theme.inputStyles.switchLabelOffset, "px")
      },
      '& > $checkboxRightLabel': {
        paddingLeft: "".concat(theme.inputStyles.switchLabelOffset, "px")
      },
      '& > $inputControl': {
        display: 'none',
        '&:checked + $inputControlLabel > $inputControlIcon': {
          transform: 'scale(1)'
        },
        '&:checked + $inputControlLabel.disabled > $inputControlIcon': {
          backgroundColor: theme.inputStyles.disabledColor
        }
      },
      '& > $inputControlLabel': {
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'stretch',
        alignContent: 'flex-start',
        width: '20px',
        height: '20px',
        padding: '3px',
        borderRadius: '50%',
        border: "2px solid ".concat(theme.inputStyles.switchSliderActiveBodyBGColor),
        '& > $inputControlIcon': {
          flexBasis: 'auto',
          flexShrink: 0,
          flexGrow: 1,
          borderRadius: '50%',
          backgroundColor: theme.inputStyles.switchSliderHandleActive,
          transform: 'scale(0)',
          transition: 'all .3s ease',
          transitionProperty: 'transform, border-color'
        }
      },
      '& > $inputControlLabel.disabled': {
        borderColor: theme.inputStyles.disabledColor
      }
    },
    checkboxLabel: {},
    checkboxLeftLabel: {},
    checkboxRightLabel: {},
    inputControl: {},
    inputControlLabel: {},
    inputControlIcon: {}
  };
};
/**
 * Radio button input component styled according to material-UI guidelines.
 * Component is intended to be used as a parameter for ['Redux-form' Field component](#reduxformradiobuttoninputcomponent).
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation
// $FlowFixMe decorators


var FormRadioButtonInputClass = (_dec = (0, _reactJss.default)(styles), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FormRadioButtonInputClass, _React$Component);

  // region static props
  // endregion
  // region constructor
  function FormRadioButtonInputClass(props) {
    var _this;

    _classCallCheck(this, FormRadioButtonInputClass);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormRadioButtonInputClass).call(this, props));
    _this._id = null;
    _this._id = _this._createInputId();
    return _this;
  } // endregion
  // region lifecycle methods
  // endregion
  // region style accessors


  _createClass(FormRadioButtonInputClass, [{
    key: "_getComponentContainerStyles",
    value: function _getComponentContainerStyles() {
      var componentContainerStyles = (0, _ramda.defaultTo)({})(this.props.componentContainerStyles);
      var style = (0, _ramda.defaultTo)({})(this.props.style);
      return Object.assign({}, componentContainerStyles, style);
    }
  }, {
    key: "_getLabelClasses",
    value: function _getLabelClasses() {
      var _this$props = this.props,
          disabled = _this$props.disabled,
          labelPosition = _this$props.labelPosition,
          _this$props$classes = _this$props.classes,
          checkboxLabel = _this$props$classes.checkboxLabel,
          checkboxLeftLabel = _this$props$classes.checkboxLeftLabel,
          checkboxRightLabel = _this$props$classes.checkboxRightLabel;
      return (0, _classnames.default)(checkboxLabel, (0, _ramda.ifElse)((0, _ramda.equals)('left'), (0, _ramda.always)(checkboxLeftLabel), (0, _ramda.always)(checkboxRightLabel))(labelPosition), {
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
    key: "_getInputControlLabelClasses",
    value: function _getInputControlLabelClasses() {
      var disabled = this.props.disabled;
      return (0, _classnames.default)(this.props.classes.inputControlLabel, {
        'disabled': disabled
      });
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
    key: "_isChecked",
    value: function _isChecked() {
      var _this$_getInputData2 = this._getInputData(),
          checked = _this$_getInputData2.checked;

      return (0, _ramda.defaultTo)(false)(checked);
    }
  }, {
    key: "_getInputData",
    value: function _getInputData() {
      var input = this.props.input;
      return (0, _ramda.isNil)(input) ? (0, _ramda.clone)(FormRadioButtonInputClass.defaultProps.input) : input;
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
    key: "_renderInputIcon",
    value: function _renderInputIcon() {
      return React.createElement("div", {
        className: this.props.classes.inputControlIcon
      });
    }
  }, {
    key: "_renderInputControlLabel",
    value: function _renderInputControlLabel() {
      return React.createElement("label", {
        htmlFor: this._id,
        className: this._getInputControlLabelClasses()
      }, this._renderInputIcon());
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
        type: "radio",
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
      }, labelPosition === 'left' ? this._renderLabel() : null, this._renderInput(), this._renderInputControlLabel(), labelPosition === 'right' ? this._renderLabel() : null);
    }
  }, {
    key: "render",
    value: function render() {
      return this._renderInputContainer();
    } // endregion

  }]);

  return FormRadioButtonInputClass;
}(React.Component), _class2.displayName = 'FormRadioButtonInputComponent', _class2.defaultProps = {
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
exports.FormRadioButtonInputClass = FormRadioButtonInputClass;

function FormRadioButtonInputComponent(props) {
  return React.createElement(_main_theme_provider.MainThemeContext.Consumer, null, function (windowDimensions) {
    return React.createElement(FormRadioButtonInputClass, _extends({}, props, windowDimensions));
  });
}

FormRadioButtonInputComponent.displayName = 'FormRadioButtonInputComponent'; // exports

var _default = FormRadioButtonInputComponent;
exports.default = _default;