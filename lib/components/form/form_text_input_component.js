'use strict'; // external imports

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.function.name");

require("core-js/modules/es.number.constructor");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.replace");

require("core-js/modules/es.string.split");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormTextInputComponent = FormTextInputComponent;
exports.default = exports.FormTextInputClass = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ramda = require("ramda");

var _dom_helpers = require("@webfuturistics/design_components/lib/helpers/general/dom_helpers");

var _main_theme_provider = require("./../../theming/providers/main_theme_provider");

var _dec, _class, _class2, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// styles definition
var topAdditionalPadding = 7;
var iconAdditionalPadding = 2;

var styles = function styles(theme) {
  return {
    componentContainer: {
      boxSizing: 'border-box',
      position: 'relative',
      display: 'flex',
      flexBasis: 'auto',
      flexShrink: 1,
      flexGrow: 0,
      flexDirection: 'column',
      flexWrap: 'nowrap',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      alignContent: 'flex-start',
      padding: "".concat(theme.inputStyles.labelActiveFontSize + topAdditionalPadding, "px 0px 0px 0px"),
      '& > $inputContainer': {
        boxSizing: 'border-box',
        position: 'relative',
        display: 'flex',
        flexBasis: 'auto',
        flexShrink: '1',
        flexGrow: '0',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        alignContent: 'flex-start',
        '& > $inputControl': {
          boxSizing: 'border-box',
          overflow: 'hidden',
          flexBasis: "".concat(theme.inputStyles.lineHeight, "px"),
          flexShrink: '0',
          flexGrow: '0',
          margin: '0 0 0 0',
          border: 'none',
          borderBottomWidth: '1px',
          borderBottomStyle: 'solid',
          borderRadius: '0',
          padding: '0',
          fontFamily: theme.inputStyles.fontStack,
          fontSize: "".concat(theme.inputStyles.fontSize, "px"),
          boxShadow: 'none',
          transition: 'all .3s',
          lineHeight: "".concat(theme.inputStyles.lineHeight, "px"),
          backgroundColor: theme.inputStyles.bgColor,
          resize: 'none',
          '&:-webkit-autofill': {
            '-webkit-box-shadow': '0 0 0 1000px transparent inset !important'
          }
        },
        '& > $inputControlVariant1': {
          borderBottomColor: theme.inputStyles.inactiveColor,
          color: theme.inputStyles.inactiveColor,
          '&::-webkit-input-placeholder': {
            color: theme.inputStyles.disabledColor
          },
          '&::-moz-placeholder': {
            color: theme.inputStyles.disabledColor
          },
          '&::-ms-input-placeholder': {
            color: theme.inputStyles.disabledColor
          },
          '&.focus': {
            borderBottomColor: theme.inputStyles.activeColor,
            color: theme.inputStyles.activeColor
          },
          '&.error': {
            color: theme.inputStyles.attentionColor,
            borderBottomColor: theme.inputStyles.attentionColor
          },
          '&.readOnly': {
            color: theme.inputStyles.readOnlyColor,
            borderBottomColor: theme.inputStyles.readOnlyColor
          },
          '&.disabled': {
            borderBottomStyle: 'dotted',
            borderBottomColor: theme.inputStyles.disabledColor,
            color: theme.inputStyles.disabledColor
          }
        },
        '& > $inputControlVariant2': {
          borderBottomColor: theme.inputStyles.alternateInputColor,
          color: theme.inputStyles.alternateInputColor,
          '&::-webkit-input-placeholder': {
            color: theme.inputStyles.alternateInputColor
          },
          '&::-moz-placeholder': {
            color: theme.inputStyles.alternateInputColor
          },
          '&::-ms-input-placeholder': {
            color: theme.inputStyles.alternateInputColor
          },
          '&:focus': {
            outline: 'none',
            borderBottomColor: theme.inputStyles.alternateInputColor,
            color: theme.inputStyles.alternateInputColor
          },
          '&.error': {
            color: theme.inputStyles.attentionColor,
            borderBottomColor: theme.inputStyles.attentionColor
          },
          '&.readOnly': {
            color: theme.inputStyles.alternateInputColor,
            borderBottomColor: theme.inputStyles.alternateInputColor
          },
          '&.disabled': {
            borderBottomStyle: 'dotted',
            borderBottomColor: theme.inputStyles.alternateInputColor,
            color: theme.inputStyles.alternateInputColor
          }
        },
        '& > $inputControlLabel': {
          position: 'absolute',
          top: "".concat(theme.inputStyles.fontSize - theme.inputStyles.labelInactiveFontSize, "px"),
          left: '0px',
          fontFamily: theme.inputStyles.fontStack,
          fontSize: "".concat(theme.inputStyles.labelActiveFontSize, "px"),
          cursor: 'text',
          transition: '.2s ease-out',
          '&.active': {
            fontSize: "".concat(theme.inputStyles.labelActiveFontSize, "px"),
            '-webkit-transform': 'translateY(-145%)',
            transform: 'translateY(-145%)'
          },
          '&.passive': {
            fontSize: "".concat(theme.inputStyles.labelInactiveFontSize, "px"),
            '-webkit-transform': 'translateY(0%)',
            transform: 'translateY(0%)'
          }
        },
        '& > $inputControlLabelVariant1': {
          color: theme.inputStyles.labelColor,
          '&.active': {
            fontSize: "".concat(theme.inputStyles.labelActiveFontSize, "px"),
            '-webkit-transform': 'translateY(-145%)',
            transform: 'translateY(-145%)'
          },
          '&.passive': {
            fontSize: "".concat(theme.inputStyles.labelInactiveFontSize, "px"),
            '-webkit-transform': 'translateY(0%)',
            transform: 'translateY(0%)'
          },
          '&.focus': {
            color: theme.inputStyles.activeColor
          },
          '&.error': {
            color: theme.inputStyles.attentionColor
          },
          '&.readOnly': {
            color: theme.inputStyles.readOnlyColor
          },
          '&.disabled': {
            color: theme.inputStyles.disabledColor
          }
        },
        '& > $inputControlLabelVariant2': {
          color: theme.inputStyles.alternateInputColor,
          '&.focus': {
            color: theme.inputStyles.alternateInputColor
          },
          '&.error': {
            color: theme.inputStyles.attentionColor
          },
          '&.readOnly': {
            color: theme.inputStyles.alternateInputColor
          },
          '&.disabled': {
            color: theme.inputStyles.alternateInputColor
          }
        },
        '& > $inputControlLabel:first-letter': {
          textTransform: 'capitalize'
        },
        '& > $inputControlIcon': {
          position: 'absolute',
          left: "calc(100%  - ".concat(theme.inputStyles.iconFontSize + iconAdditionalPadding, "px)"),
          bottom: "".concat(theme.inputStyles.lineHeight - theme.inputStyles.iconFontSize, "px"),
          transition: 'all .3s',
          fontSize: "".concat(theme.inputStyles.iconFontSize, "px")
        },
        '& > $inputControlIconVariant1': {
          color: theme.inputStyles.inactiveColor,
          '&.focus': {
            color: theme.inputStyles.activeColor
          },
          '&.error': {
            color: theme.inputStyles.attentionColor
          },
          '&.readOnly': {
            color: theme.inputStyles.readOnlyColor
          },
          '&.disabled': {
            color: theme.inputStyles.disabledColor
          }
        },
        '& > $inputControlIconVariant2': {
          color: theme.inputStyles.alternateInputColor,
          '&.focus': {
            color: theme.inputStyles.alternateInputColor
          },
          '&.error': {
            color: theme.inputStyles.attentionColor
          },
          '&.readOnly': {
            color: theme.inputStyles.alternateInputColor
          },
          '&.disabled': {
            color: theme.inputStyles.alternateInputColor
          }
        }
      },
      '& > $subMessagesContainer': {
        boxSizing: 'border-box',
        display: 'flex',
        flexBasis: 'auto',
        flexShrink: '1',
        flexGrow: '0',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignContent: 'flex-start'
      },
      '& > $errorsContainer': {
        color: theme.inputStyles.attentionColor,
        '& > $errorContainer': {
          marginTop: '2px',
          fontFamily: theme.inputStyles.fontStack,
          fontSize: theme.inputStyles.errorFontSize
        }
      },
      '& > $warningsContainer': {
        '& > $warningContainer': {
          marginTop: '2px',
          fontFamily: theme.inputStyles.fontStack,
          fontSize: theme.inputStyles.errorFontSize
        }
      },
      '& > $warningsContainerVariant1': {
        color: theme.inputStyles.activeColor
      },
      '& > $warningsContainerVariant2': {
        color: theme.inputStyles.alternateInputColor
      }
    },
    inputContainer: {},
    inputControl: {},
    inputControlVariant1: {},
    inputControlVariant2: {},
    inputControlLabel: {},
    inputControlLabelVariant1: {},
    inputControlLabelVariant2: {},
    inputControlIcon: {},
    inputControlIconVariant1: {},
    inputControlIconVariant2: {},
    subMessagesContainer: {},
    errorsContainer: {},
    errorContainer: {},
    warningsContainer: {},
    warningContainer: {},
    warningsContainerVariant1: {},
    warningsContainerVariant2: {}
  };
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

    var self = _assertThisInitialized(_this);

    _this._id = _this._createInputId();
    self._renderTextAreaInput = self._renderTextAreaInput.bind(_assertThisInitialized(_this));
    self._renderTextInput = self._renderTextInput.bind(_assertThisInitialized(_this));
    return _this;
  } // endregion
  // region lifecycle methods
  // endregion
  // region style accessors


  _createClass(FormTextInputClass, [{
    key: "_getComponentContainerClasses",
    value: function _getComponentContainerClasses() {
      var userComponentContainerClassName = (0, _ramda.defaultTo)('')(this.props.componentContainerClassName);
      return (0, _classnames.default)(this.props.classes.componentContainer, userComponentContainerClassName);
    }
  }, {
    key: "_getInputClasses",
    value: function _getInputClasses() {
      var hasFocus = this._isInputHasFocus();

      var _this$props = this.props,
          readOnly = _this$props.readOnly,
          disabled = _this$props.disabled;
      var variantClassName = (0, _ramda.cond)([[(0, _ramda.equals)(1), (0, _ramda.always)(this.props.classes.inputControlVariant1)], [(0, _ramda.equals)(2), (0, _ramda.always)(this.props.classes.inputControlVariant2)], [_ramda.T, (0, _ramda.always)(this.props.classes.inputControlVariant1)]])(this._getVariant());
      return (0, _classnames.default)(this.props.classes.inputControl, variantClassName, {
        'focus': hasFocus
      }, {
        'error': this._hasErrors()
      }, {
        'readOnly': readOnly
      }, {
        'disabled': disabled
      });
    }
  }, {
    key: "_getLabelClasses",
    value: function _getLabelClasses() {
      var isActive = this._isInputActive();

      var hasFocus = this._isInputHasFocus();

      var hasErrors = this._hasErrors();

      var _this$props2 = this.props,
          readOnly = _this$props2.readOnly,
          disabled = _this$props2.disabled;
      var variantClassName = (0, _ramda.cond)([[(0, _ramda.equals)(1), (0, _ramda.always)(this.props.classes.inputControlLabelVariant1)], [(0, _ramda.equals)(2), (0, _ramda.always)(this.props.classes.inputControlLabelVariant2)], [_ramda.T, (0, _ramda.always)(this.props.classes.inputControlVariant1)]])(this._getVariant());
      return (0, _classnames.default)(this.props.classes.inputControlLabel, variantClassName, {
        'active': isActive
      }, {
        'passive': !isActive
      }, {
        'focus': hasFocus
      }, {
        'error': hasErrors
      }, {
        'readOnly': readOnly
      }, {
        'disabled': disabled
      });
    }
  }, {
    key: "_getIconClasses",
    value: function _getIconClasses() {
      var hasFocus = this._isInputHasFocus();

      var hasErrors = this._hasErrors();

      var _this$props3 = this.props,
          readOnly = _this$props3.readOnly,
          disabled = _this$props3.disabled;
      var variantClassName = (0, _ramda.cond)([[(0, _ramda.equals)(1), (0, _ramda.always)(this.props.classes.inputControlIconVariant1)], [(0, _ramda.equals)(2), (0, _ramda.always)(this.props.classes.inputControlIconVariant2)], [_ramda.T, (0, _ramda.always)(this.props.classes.inputControlVariant1)]])(this._getVariant());
      return (0, _classnames.default)(this.props.iconClassNames, this.props.classes.inputControlIcon, variantClassName, {
        'focus': hasFocus
      }, {
        'error': hasErrors
      }, {
        'readOnly': readOnly
      }, {
        'disabled': disabled
      });
    }
  }, {
    key: "_getComponentContainerStyles",
    value: function _getComponentContainerStyles() {
      var componentContainerStyles = (0, _ramda.defaultTo)({})(this.props.componentContainerStyles);
      var style = (0, _ramda.defaultTo)({})(this.props.style);
      return Object.assign({}, componentContainerStyles, style);
    }
  }, {
    key: "_getErrorsContainerClassName",
    value: function _getErrorsContainerClassName() {
      return this.props.classes.errorsContainer;
    }
  }, {
    key: "_getErrorContainerClassName",
    value: function _getErrorContainerClassName() {
      return (0, _classnames.default)(this.props.classes.subMessagesContainer, this.props.classes.errorContainer);
    }
  }, {
    key: "_getWarningsContainerClassName",
    value: function _getWarningsContainerClassName() {
      var variantClassName = (0, _ramda.cond)([[(0, _ramda.equals)(1), (0, _ramda.always)(this.props.classes.warningsContainerVariant1)], [(0, _ramda.equals)(2), (0, _ramda.always)(this.props.classes.warningsContainerVariant2)], [_ramda.T, (0, _ramda.always)(this.props.classes.inputControlVariant1)]])(this._getVariant());
      return (0, _classnames.default)(this.props.classes.subMessagesContainer, this.props.classes.warningsContainer, variantClassName);
    }
  }, {
    key: "_getWarningContainerClassName",
    value: function _getWarningContainerClassName() {
      return this.props.classes.warningContainer;
    } // endregion
    // region label accessors

  }, {
    key: "_getLabel",
    value: function _getLabel() {
      return this.props.label;
    } // endregion
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

      return "text_input_".concat(name, "_").concat(randomIdNumber);
    } // endregion
    // region prop accessors

  }, {
    key: "_getVariant",
    value: function _getVariant() {
      return (0, _ramda.defaultTo)(FormTextInputClass.defaultProps.variant)(this.props.variant);
    }
  }, {
    key: "_isInputHasFocus",
    value: function _isInputHasFocus() {
      var _this$_getMetaData = this._getMetaData(),
          active = _this$_getMetaData.active;

      return active && this._isInputEditable();
    }
  }, {
    key: "_isInputActive",
    value: function _isInputActive() {
      return this._isInputHasValue() || this._isInputHasFocus();
    }
  }, {
    key: "_isInputEditable",
    value: function _isInputEditable() {
      var _this$props4 = this.props,
          readOnly = _this$props4.readOnly,
          disabled = _this$props4.disabled;
      return !(readOnly || disabled);
    }
  }, {
    key: "_isInputHasValue",
    value: function _isInputHasValue() {
      var _this$_getMetaData2 = this._getMetaData(),
          initial = _this$_getMetaData2.initial,
          pristine = _this$_getMetaData2.pristine,
          dirty = _this$_getMetaData2.dirty;

      var _this$_getInputData2 = this._getInputData(),
          value = _this$_getInputData2.value;

      var placeholder = this.props.placeholder;
      var preparedInitial = (0, _ramda.is)(Number, initial) ? (0, _ramda.toString)(initial) : initial;
      var preparedValue = (0, _ramda.is)(Number, value) ? (0, _ramda.toString)(value) : value;
      var isInitialValueEmpty = (0, _ramda.isNil)(initial) || (0, _ramda.isEmpty)(preparedInitial);
      var isValueEmpty = (0, _ramda.isNil)(value) || (0, _ramda.isEmpty)(preparedValue);
      var hasRealValue = pristine && !isInitialValueEmpty || dirty && !isValueEmpty;
      var hasPlaceholder = (0, _ramda.complement)(_ramda.isEmpty)(placeholder);
      return hasRealValue || hasPlaceholder;
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
    }
  }, {
    key: "_getErrorsIfTouched",
    value: function _getErrorsIfTouched() {
      return (0, _ramda.defaultTo)(FormTextInputClass.defaultProps.errorsIfTouched)(this.props.errorsIfTouched);
    }
  }, {
    key: "_getWarningsIfTouched",
    value: function _getWarningsIfTouched() {
      return (0, _ramda.defaultTo)(FormTextInputClass.defaultProps.warningsIfTouched)(this.props.warningsIfTouched);
    }
  }, {
    key: "_hasErrors",
    value: function _hasErrors() {
      var _this$_getMetaData3 = this._getMetaData(),
          touched = _this$_getMetaData3.touched,
          error = _this$_getMetaData3.error;

      var errorsIfTouched = this._getErrorsIfTouched();

      if ((0, _ramda.and)(errorsIfTouched, (0, _ramda.not)(touched))) {
        return false;
      }

      return (0, _ramda.and)((0, _ramda.complement)(_ramda.isNil)(error), (0, _ramda.complement)(_ramda.isEmpty)(error));
    }
  }, {
    key: "_hasWarnings",
    value: function _hasWarnings() {
      var _this$_getMetaData4 = this._getMetaData(),
          touched = _this$_getMetaData4.touched,
          warning = _this$_getMetaData4.warning;

      var warningsIfTouched = this._getWarningsIfTouched();

      if ((0, _ramda.and)(warningsIfTouched, (0, _ramda.not)(touched))) {
        return false;
      }

      return (0, _ramda.complement)(_ramda.isNil)(warning);
    }
  }, {
    key: "_getWarning",
    value: function _getWarning() {
      var _this$_getMetaData5 = this._getMetaData(),
          warning = _this$_getMetaData5.warning;

      if ((0, _ramda.isNil)(warning)) {
        return null;
      }

      return warning;
    }
  }, {
    key: "_getError",
    value: function _getError() {
      var _this$_getMetaData6 = this._getMetaData(),
          error = _this$_getMetaData6.error;

      if ((0, _ramda.isNil)(error)) {
        return null;
      }

      return error;
    } // endregion
    // region handlers
    // endregion
    // region render methods

  }, {
    key: "_renderIcon",
    value: function _renderIcon() {
      if ((0, _ramda.isNil)(this.props.iconClassNames)) {
        return;
      }

      var iconClassNames = this._getIconClasses();

      return this.props.iconClassNames ? React.createElement("i", {
        className: iconClassNames
      }) : undefined;
    }
  }, {
    key: "_renderLabel",
    value: function _renderLabel() {
      return React.createElement("label", {
        className: this._getLabelClasses(),
        htmlFor: this._id
      }, this._getLabel());
    }
  }, {
    key: "_renderTextInput",
    value: function _renderTextInput() {
      var _this$props5 = this.props,
          type = _this$props5.type,
          readOnly = _this$props5.readOnly,
          disabled = _this$props5.disabled,
          placeholder = _this$props5.placeholder;

      var _this$_getInputData3 = this._getInputData(),
          value = _this$_getInputData3.value,
          name = _this$_getInputData3.name,
          onChange = _this$_getInputData3.onChange,
          onFocus = _this$_getInputData3.onFocus,
          onBlur = _this$_getInputData3.onBlur;

      var readOnlyParam = readOnly ? 'readonly' : undefined;
      var disabledParam = disabled ? 'disabled' : undefined;
      return React.createElement("input", {
        className: this._getInputClasses(),
        type: type,
        value: value,
        placeholder: placeholder,
        name: name,
        id: this._id,
        onChange: onChange,
        onFocus: onFocus,
        onBlur: onBlur,
        readOnly: readOnlyParam,
        disabled: disabledParam
      });
    }
  }, {
    key: "_renderTextAreaInput",
    value: function _renderTextAreaInput() {
      var _this$props6 = this.props,
          readOnly = _this$props6.readOnly,
          disabled = _this$props6.disabled,
          placeholder = _this$props6.placeholder;

      var _this$_getInputData4 = this._getInputData(),
          value = _this$_getInputData4.value,
          name = _this$_getInputData4.name,
          onChange = _this$_getInputData4.onChange,
          onFocus = _this$_getInputData4.onFocus,
          onBlur = _this$_getInputData4.onBlur;

      var readOnlyParam = readOnly ? 'readonly' : undefined;
      var disabledParam = disabled ? 'disabled' : undefined;
      var numberOfLines = value.replace(/^\s*[\r\n]/gm, '').split(/\r|\r\n|\n/).length;
      var flexBasis = numberOfLines * this.props.theme.inputStyles.lineHeight;
      return React.createElement("textarea", {
        className: this._getInputClasses(),
        value: value,
        placeholder: placeholder,
        name: name,
        id: this._id,
        onChange: onChange,
        onFocus: onFocus,
        onBlur: onBlur,
        style: {
          flexBasis: "".concat(flexBasis, "px")
        },
        readOnly: readOnlyParam,
        disabled: disabledParam
      });
    }
  }, {
    key: "_renderInput",
    value: function _renderInput() {
      var type = this.props.type;
      return (0, _ramda.ifElse)((0, _ramda.equals)('textarea'), this._renderTextAreaInput, this._renderTextInput)(type);
    }
  }, {
    key: "_renderInputContainer",
    value: function _renderInputContainer() {
      return React.createElement("div", {
        className: this.props.classes.inputContainer
      }, this._renderInput(), this._renderLabel(), this._renderIcon());
    }
  }, {
    key: "_renderWarnings",
    value: function _renderWarnings() {
      return null;
    }
  }, {
    key: "_renderErrors",
    value: function _renderErrors(errors) {
      var _this2 = this;

      return (0, _ramda.addIndex)(_ramda.map)(function (error, index) {
        return React.createElement("div", {
          key: "error_".concat(index),
          className: _this2._getErrorContainerClassName()
        }, error);
      }, errors);
    }
  }, {
    key: "_renderErrorsContainer",
    value: function _renderErrorsContainer() {
      var errors = this._getError();

      if ((0, _ramda.isNil)(errors) || !this._hasErrors()) {
        return null;
      } else if (typeof errors === 'string') {
        errors = [errors];
      }

      return React.createElement("div", {
        className: this._getErrorsContainerClassName()
      }, this._renderErrors(errors));
    }
  }, {
    key: "_renderWarnings",
    value: function _renderWarnings(warnings) {
      var _this3 = this;

      return (0, _ramda.addIndex)(_ramda.map)(function (error, index) {
        return React.createElement("div", {
          key: "warning_".concat(index),
          className: _this3._getWarningContainerClassName()
        }, error);
      }, warnings);
    }
  }, {
    key: "_renderWarningsContainer",
    value: function _renderWarningsContainer() {
      var warnings = this._getWarning();

      if ((0, _ramda.isNil)(warnings) || !this._hasWarnings()) {
        return null;
      } else if (typeof warnings === 'string') {
        warnings = [warnings];
      }

      return React.createElement("div", {
        className: this._getWarningsContainerClassName()
      }, this._renderWarnings(warnings));
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: this._getComponentContainerClasses(),
        style: this._getComponentContainerStyles()
      }, this._renderInputContainer(), this._renderErrorsContainer(), this._renderWarningsContainer());
    } // endregion

  }]);

  return FormTextInputClass;
}(React.Component), _class2.displayName = 'FormTextInputClass', _class2.defaultProps = {
  variant: 1,
  type: 'text',
  readOnly: false,
  disabled: false,
  errorsIfTouched: true,
  warningsIfTouched: true,
  placeholder: '',
  label: '',
  iconClassNames: '',
  meta: {
    initial: '',
    active: false,
    pristine: true,
    dirty: false,
    touched: false,
    error: null
  },
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
}, _temp)) || _class); // exports

exports.FormTextInputClass = FormTextInputClass;

function FormTextInputComponent(props) {
  return React.createElement(_main_theme_provider.MainThemeContext.Consumer, null, function (windowDimensions) {
    return React.createElement(FormTextInputClass, _extends({}, props, windowDimensions));
  });
}

FormTextInputComponent.displayName = 'FormTextInputComponent';
var _default = FormTextInputComponent;
exports.default = _default;