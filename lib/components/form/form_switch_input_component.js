'use strict'; // external imports

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

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
exports.FormSwitchInputComponent = exports.FormSwitchInputComponentClass = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ramda = require("ramda");

var _dom_helpers = require("@webfuturistics/design_components/lib/helpers/general/dom_helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// styles definition
var switchSliderBodyWidth = 36; // px

var switchSliderBodyHeight = 14; // px

var switchSliderHandlerWidth = 20; // px

var switchSliderHandlerHeight = 20; // px

var switchSliderHandlerTop = (switchSliderHandlerHeight - switchSliderBodyHeight) / 2;
var switchSliderHandlerRight = switchSliderBodyWidth - switchSliderHandlerWidth;

var switchSliderBodyDisabledClasses = function switchSliderBodyDisabledClasses(theme) {
  return {
    backgroundColor: theme.inputStyles.disabledColor
  };
};

var switchSliderHandleDisabledClasses = function switchSliderHandleDisabledClasses(theme) {
  return {
    backgroundColor: theme.inputStyles.switchSliderHandleInactive
  };
};

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
      '& > $switchLabel': {
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
      '& > $switchLeftLabel': {
        paddingRight: "".concat(theme.inputStyles.switchLabelOffset, "px")
      },
      '& > $switchRightLabel': {
        paddingLeft: "".concat(theme.inputStyles.switchLabelOffset, "px")
      },
      '& > $inputControl': {
        display: 'none',
        '&:checked + $inputControlLabel > $switchSliderBodyContainer': {
          backgroundColor: theme.inputStyles.switchSliderActiveBodyBGColor
        },
        '&:checked + $inputControlLabel > $switchSliderHandleContainer': {
          transform: "translate(".concat(switchSliderHandlerRight, "px, -").concat(switchSliderHandlerTop, "px)"),
          backgroundColor: theme.inputStyles.switchSliderHandleActive
        },
        '&:checked + $inputControlLabel > $switchSliderBodyContainer.disabled': switchSliderBodyDisabledClasses(theme),
        '&:checked + $inputControlLabel > $switchSliderHandleContainer.disabled': switchSliderHandleDisabledClasses(theme)
      },
      '& > $inputControlLabel': {
        boxSizing: 'border-box',
        position: 'relative',
        flexBasis: 'auto',
        flexGrow: 0,
        flexShrink: 1,
        backgroundColor: theme.inputStyles.bgColor,
        '& > $switchSliderBodyContainer': {
          boxSizing: 'border-box',
          width: "".concat(switchSliderBodyWidth, "px"),
          height: "".concat(switchSliderBodyHeight, "px"),
          borderRadius: '15px',
          backgroundColor: theme.inputStyles.switchSliderInactiveBodyBGColor,
          '&.disabled': switchSliderBodyDisabledClasses(theme)
        },
        '& > $switchSliderHandleContainer': {
          position: 'absolute',
          left: '0px',
          top: '0px',
          width: "".concat(switchSliderHandlerWidth, "px"),
          height: "".concat(switchSliderHandlerHeight, "px"),
          borderRadius: '50%',
          backgroundColor: theme.inputStyles.switchSliderHandleInactive,
          boxShadow: '0 3px 1px -2px rgba(0, 0, 0, 0.14), 0 2px 2px 0 rgba(0, 0, 0, 0.098), 0 1px 5px 0 rgba(0, 0, 0, 0.084)',
          transform: "translate(0px, -".concat(switchSliderHandlerTop, "px)"),
          transition: 'all 0.3s ease',
          '&.disabled': switchSliderHandleDisabledClasses(theme)
        }
      }
    },
    switchLabel: {},
    switchLeftLabel: {},
    switchRightLabel: {},
    inputControl: {},
    inputControlLabel: {},
    switchSliderBodyContainer: {},
    switchSliderHandleContainer: {}
  };
};
/**
 * Switch input component styled according to material-UI guidelines.
 * Component is intended to be used as a parameter for ['Redux-form' Field component](#reduxformswitchinputcomponent).
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation


var FormSwitchInputComponentClass =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FormSwitchInputComponentClass, _React$Component);

  // region static props
  // endregion
  // region constructor
  function FormSwitchInputComponentClass(props) {
    var _this;

    _classCallCheck(this, FormSwitchInputComponentClass);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormSwitchInputComponentClass).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "_id", null);

    _this._id = _this._createInputId();
    return _this;
  } // endregion
  // region lifecycle methods
  // endregion
  // region style accessors


  _createClass(FormSwitchInputComponentClass, [{
    key: "_getLeftLabelClasses",
    value: function _getLeftLabelClasses() {
      var disabled = this.props.disabled;
      return (0, _classnames.default)(this.props.classes.switchLabel, this.props.classes.switchLeftLabel, {
        'disabled': disabled
      });
    }
  }, {
    key: "_getRightLabelClasses",
    value: function _getRightLabelClasses() {
      var disabled = this.props.disabled;
      return (0, _classnames.default)(this.props.classes.switchLabel, this.props.classes.switchRightLabel, {
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
    key: "_getSliderBodyClasses",
    value: function _getSliderBodyClasses() {
      var disabled = this.props.disabled;
      return (0, _classnames.default)(this.props.classes.switchSliderBodyContainer, {
        'disabled': disabled
      });
    }
  }, {
    key: "_getSliderHandleClasses",
    value: function _getSliderHandleClasses() {
      var disabled = this.props.disabled;
      return (0, _classnames.default)(this.props.classes.switchSliderHandleContainer, {
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

      return "switch_input_".concat(name, "_").concat(randomIdNumber);
    } // endregion
    // region prop accessors

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
      return (0, _ramda.isNil)(input) ? (0, _ramda.clone)(FormSwitchInputComponentClass.defaultProps.input) : input;
    } // endregion
    // region handlers
    // endregion
    // region render methods

  }, {
    key: "_renderLeftLabel",
    value: function _renderLeftLabel() {
      return React.createElement("div", {
        className: this._getLeftLabelClasses()
      }, this.props.leftLabel);
    }
  }, {
    key: "_renderRightLabel",
    value: function _renderRightLabel() {
      return React.createElement("div", {
        className: this._getRightLabelClasses()
      }, this.props.rightLabel);
    }
  }, {
    key: "_renderSwitch",
    value: function _renderSwitch() {
      return React.createElement("label", {
        htmlFor: this._id,
        className: this.props.classes.inputControlLabel
      }, React.createElement("div", {
        className: this._getSliderBodyClasses()
      }), React.createElement("div", {
        className: this._getSliderHandleClasses()
      }));
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
      return React.createElement("div", {
        className: this.props.classes.componentContainer
      }, this._renderLeftLabel(), this._renderInput(), this._renderSwitch(), this._renderRightLabel());
    }
  }, {
    key: "render",
    value: function render() {
      return this._renderInputContainer();
    } // endregion

  }]);

  return FormSwitchInputComponentClass;
}(React.Component); // exports


exports.FormSwitchInputComponentClass = FormSwitchInputComponentClass;

_defineProperty(FormSwitchInputComponentClass, "displayName", 'FormSwitchInputComponent');

_defineProperty(FormSwitchInputComponentClass, "defaultProps", {
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
});

var FormSwitchInputComponent = (0, _reactJss.default)(styles)(FormSwitchInputComponentClass);
exports.FormSwitchInputComponent = FormSwitchInputComponent;