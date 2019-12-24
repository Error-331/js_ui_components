'use strict'; // external imports

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.function.name");

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
exports.default = exports.FormTextInputVariant1Component = exports.FormTextInputVariant1Class = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ramda = require("ramda");

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

// styles definition
var topAdditionalPadding = 7;
var iconAdditionalPadding = 2;
var bottomBorderWidth = 1;

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
        flexShrink: 1,
        flexGrow: 0,
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        alignContent: 'flex-start',
        '& > $inputControl': {
          boxSizing: 'border-box',
          flexBasis: "".concat(theme.inputStyles.lineHeight, "px"),
          flexShrink: '0',
          flexGrow: '0',
          margin: '0 0 0 0',
          border: 'none',
          borderBottomWidth: "".concat(bottomBorderWidth, "px"),
          borderBottomStyle: 'solid',
          borderBottomColor: theme.inputStyles.inactiveColor,
          borderRadius: '0',
          padding: '0',
          fontFamily: theme.inputStyles.fontStack,
          fontSize: "".concat(theme.inputStyles.fontSize, "px"),
          boxShadow: 'none',
          transition: 'all .3s',
          lineHeight: "".concat(theme.inputStyles.lineHeight, "px"),
          backgroundColor: theme.inputStyles.bgColor,
          resize: 'none',
          color: theme.inputStyles.inactiveColor,
          '&:-webkit-autofill': {
            '-webkit-box-shadow': '0 0 0 1000px transparent inset !important'
          },
          '&::-webkit-input-placeholder': {
            color: theme.inputStyles.disabledColor
          },
          '&::-moz-placeholder': {
            color: theme.inputStyles.disabledColor
          },
          '&::-ms-input-placeholder': {
            color: theme.inputStyles.disabledColor
          },
          '&.noneScrollable': {
            overflow: 'hidden'
          },
          '&.scrollable': {
            overflow: 'visible'
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
        '& > $inputControlLabel': {
          position: 'absolute',
          top: "".concat(theme.inputStyles.fontSize - theme.inputStyles.labelInactiveFontSize, "px"),
          left: '0px',
          fontFamily: theme.inputStyles.fontStack,
          fontSize: "".concat(theme.inputStyles.labelActiveFontSize, "px"),
          cursor: 'text',
          transition: '.2s ease-out',
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
        '& > $inputControlLabel:first-letter': {
          textTransform: 'capitalize'
        },
        '& > $inputControlIcon': {
          position: 'absolute',
          left: "calc(100%  - ".concat(theme.inputStyles.iconFontSize + iconAdditionalPadding, "px)"),
          bottom: "".concat(theme.inputStyles.lineHeight - theme.inputStyles.iconFontSize, "px"),
          transition: 'all .3s',
          fontSize: "".concat(theme.inputStyles.iconFontSize, "px"),
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
        color: theme.inputStyles.activeColor,
        '& > $warningContainer': {
          marginTop: '2px',
          fontFamily: theme.inputStyles.fontStack,
          fontSize: theme.inputStyles.errorFontSize
        }
      }
    },
    inputContainer: {},
    inputControl: {},
    inputControlLabel: {},
    inputControlIcon: {},
    subMessagesContainer: {},
    errorsContainer: {},
    errorContainer: {},
    warningsContainer: {},
    warningContainer: {}
  };
};
/**
 * Text input component (variant 1) styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation


var FormTextInputVariant1Class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FormTextInputVariant1Class, _React$Component);

  // region static props
  // endregion
  // region private props
  // endregion
  // region constructor
  function FormTextInputVariant1Class(props) {
    var _this;

    _classCallCheck(this, FormTextInputVariant1Class);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormTextInputVariant1Class).call(this, props));

    var self = _assertThisInitialized(_this);

    self._renderTextAreaInput = self._renderTextAreaInput.bind(_assertThisInitialized(_this));
    self._renderTextInput = self._renderTextInput.bind(_assertThisInitialized(_this));
    return _this;
  } // endregion
  // region lifecycle methods
  // endregion
  // region style accessors


  _createClass(FormTextInputVariant1Class, [{
    key: "_getComponentContainerStyles",
    value: function _getComponentContainerStyles() {
      var componentContainerStyles = (0, _ramda.defaultTo)(FormTextInputVariant1Class.defaultProps.componentContainerStyles)(this.props.componentContainerStyles);
      var style = (0, _ramda.defaultTo)(FormTextInputVariant1Class.defaultProps.style)(this.props.style);
      return Object.assign({}, componentContainerStyles, style);
    }
  }, {
    key: "_getWarningContainerClassName",
    value: function _getWarningContainerClassName() {
      return this.props.classes.warningContainer;
    }
  }, {
    key: "_getWarningsContainerClassName",
    value: function _getWarningsContainerClassName() {
      return (0, _classnames.default)(this.props.classes.subMessagesContainer, this.props.classes.warningsContainer);
    }
  }, {
    key: "_getErrorContainerClassName",
    value: function _getErrorContainerClassName() {
      return (0, _classnames.default)(this.props.classes.subMessagesContainer, this.props.classes.errorContainer);
    }
  }, {
    key: "_getErrorsContainerClassName",
    value: function _getErrorsContainerClassName() {
      return this.props.classes.errorsContainer;
    }
  }, {
    key: "_getIconClassNames",
    value: function _getIconClassNames() {
      var hasFocus = this._isInputHasFocus();

      var hasErrors = this._hasErrors();

      return (0, _classnames.default)(this._getIconClassName(), this.props.classes.inputControlIcon, {
        'focus': hasFocus
      }, {
        'error': hasErrors
      }, {
        'readOnly': this._isReadOnly()
      }, {
        'disabled': this._isDisabled()
      });
    }
  }, {
    key: "_getLabelClasses",
    value: function _getLabelClasses() {
      var isActive = this._isInputActive();

      var hasFocus = this._isInputHasFocus();

      var hasErrors = this._hasErrors();

      return (0, _classnames.default)(this._inputControlLabelClassName(), {
        'active': isActive
      }, {
        'passive': !isActive
      }, {
        'focus': hasFocus
      }, {
        'error': hasErrors
      }, {
        'readOnly': this._isReadOnly()
      }, {
        'disabled': this._isDisabled()
      });
    }
  }, {
    key: "_getInputClasses",
    value: function _getInputClasses() {
      var hasFocus = this._isInputHasFocus();

      var isTextArea = this._isTextArea();

      return (0, _classnames.default)(this._getInputControlClassName(), {
        'scrollable': isTextArea
      }, {
        'noneScrollable': !isTextArea
      }, {
        'focus': hasFocus
      }, {
        'error': this._hasErrors()
      }, {
        'readOnly': this._isReadOnly()
      }, {
        'disabled': this._isDisabled()
      });
    }
  }, {
    key: "_inputControlLabelClassName",
    value: function _inputControlLabelClassName() {
      return this.props.classes.inputControlLabel;
    }
  }, {
    key: "_getInputControlClassName",
    value: function _getInputControlClassName() {
      return this.props.classes.inputControl;
    }
  }, {
    key: "_getInputContainerClassName",
    value: function _getInputContainerClassName() {
      return this.props.classes.inputContainer;
    }
  }, {
    key: "_getComponentContainerClasses",
    value: function _getComponentContainerClasses() {
      var userComponentContainerClassName = (0, _ramda.defaultTo)(FormTextInputVariant1Class.defaultProps.componentContainerClassName)(this.props.componentContainerClassName);
      return (0, _classnames.default)(this.props.classes.componentContainer, userComponentContainerClassName);
    } // endregion
    // region label accessors
    // endregion
    // region state accessors
    // endregion
    // region prop accessors

  }, {
    key: "_hasWarnings",
    value: function _hasWarnings() {
      var errorsIfTouched = this._getWarningsIfTouched();

      if ((0, _ramda.and)(errorsIfTouched, (0, _ramda.not)(this._isTouched()))) {
        return false;
      }

      return (0, _ramda.and)((0, _ramda.complement)(_ramda.isNil)(this._getWarning()), (0, _ramda.complement)(_ramda.isEmpty)(this._getWarning()));
    }
  }, {
    key: "_hasErrors",
    value: function _hasErrors() {
      var errorsIfTouched = this._getErrorsIfTouched();

      if ((0, _ramda.and)(errorsIfTouched, (0, _ramda.not)(this._isTouched()))) {
        return false;
      }

      return (0, _ramda.and)((0, _ramda.complement)(_ramda.isNil)(this._getError()), (0, _ramda.complement)(_ramda.isEmpty)(this._getError()));
    }
  }, {
    key: "_isInputHasValue",
    value: function _isInputHasValue() {
      var value = this._getValue();

      var initial = this._getInitial();

      var placeholder = this._getPlaceholder();

      var isInitialValueEmpty = (0, _ramda.isEmpty)(initial);
      var isValueEmpty = (0, _ramda.isEmpty)(value);
      var hasRealValue = this._isPristine() && !isInitialValueEmpty || this._isDirty() && !isValueEmpty;
      var hasPlaceholder = (0, _ramda.complement)(_ramda.isEmpty)(placeholder);
      return hasRealValue || hasPlaceholder;
    }
  }, {
    key: "_isInputEditable",
    value: function _isInputEditable() {
      return !(this._isReadOnly() || this._isDisabled());
    }
  }, {
    key: "_isInputHasFocus",
    value: function _isInputHasFocus() {
      return this._isActive() && this._isInputEditable();
    }
  }, {
    key: "_getIconClassName",
    value: function _getIconClassName() {
      return (0, _ramda.defaultTo)(FormTextInputVariant1Class.defaultProps.iconClassNames)(this.props.iconClassNames);
    }
  }, {
    key: "_getOnBlurCallback",
    value: function _getOnBlurCallback() {
      return (0, _ramda.defaultTo)(FormTextInputVariant1Class.defaultProps.onBlur)(this.props.onBlur);
    }
  }, {
    key: "_getOnFocusCallback",
    value: function _getOnFocusCallback() {
      return (0, _ramda.defaultTo)(FormTextInputVariant1Class.defaultProps.onFocus)(this.props.onFocus);
    }
  }, {
    key: "_getOnChangeCallback",
    value: function _getOnChangeCallback() {
      return (0, _ramda.defaultTo)(FormTextInputVariant1Class.defaultProps.onChange)(this.props.onChange);
    }
  }, {
    key: "_getLabel",
    value: function _getLabel() {
      return (0, _ramda.defaultTo)(FormTextInputVariant1Class.defaultProps.label)(this.props.label);
    }
  }, {
    key: "_getPlaceholder",
    value: function _getPlaceholder() {
      var placeholder = (0, _ramda.defaultTo)(FormTextInputVariant1Class.defaultProps.placeholder)(this.props.placeholder);

      if (typeof placeholder !== 'string') {
        return (0, _ramda.toString)(placeholder);
      }

      return placeholder;
    }
  }, {
    key: "_getWarning",
    value: function _getWarning() {
      return (0, _ramda.defaultTo)(FormTextInputVariant1Class.defaultProps.warning)(this.props.warning);
    }
  }, {
    key: "_getError",
    value: function _getError() {
      return (0, _ramda.defaultTo)(FormTextInputVariant1Class.defaultProps.error)(this.props.error);
    }
  }, {
    key: "_getErrorsIfTouched",
    value: function _getErrorsIfTouched() {
      return (0, _ramda.defaultTo)(FormTextInputVariant1Class.defaultProps.errorsIfTouched)(this.props.errorsIfTouched);
    }
  }, {
    key: "_getWarningsIfTouched",
    value: function _getWarningsIfTouched() {
      return (0, _ramda.defaultTo)(FormTextInputVariant1Class.defaultProps.warningsIfTouched)(this.props.warningsIfTouched);
    }
  }, {
    key: "_isDirty",
    value: function _isDirty() {
      return (0, _ramda.defaultTo)(FormTextInputVariant1Class.defaultProps.dirty)(this.props.dirty);
    }
  }, {
    key: "_isPristine",
    value: function _isPristine() {
      return (0, _ramda.defaultTo)(FormTextInputVariant1Class.defaultProps.pristine)(this.props.pristine);
    }
  }, {
    key: "_isTouched",
    value: function _isTouched() {
      return (0, _ramda.defaultTo)(FormTextInputVariant1Class.defaultProps.touched)(this.props.touched);
    }
  }, {
    key: "_isInputActive",
    value: function _isInputActive() {
      return this._isInputHasValue() || this._isInputHasFocus();
    }
  }, {
    key: "_isActive",
    value: function _isActive() {
      return (0, _ramda.defaultTo)(FormTextInputVariant1Class.defaultProps.active)(this.props.active);
    }
  }, {
    key: "_isDisabled",
    value: function _isDisabled() {
      return (0, _ramda.defaultTo)(FormTextInputVariant1Class.defaultProps.disabled)(this.props.disabled);
    }
  }, {
    key: "_isReadOnly",
    value: function _isReadOnly() {
      return (0, _ramda.defaultTo)(FormTextInputVariant1Class.defaultProps.readOnly)(this.props.readOnly);
    }
  }, {
    key: "_isTextArea",
    value: function _isTextArea() {
      return (0, _ramda.equals)('textarea', this._getTextInputType());
    }
  }, {
    key: "_getInitial",
    value: function _getInitial() {
      var initialValue = (0, _ramda.defaultTo)(FormTextInputVariant1Class.defaultProps.initial)(this.props.initial);

      if (typeof initialValue !== 'string') {
        return (0, _ramda.toString)(initialValue);
      }

      return initialValue;
    }
  }, {
    key: "_getValue",
    value: function _getValue() {
      var inputValue = (0, _ramda.defaultTo)(FormTextInputVariant1Class.defaultProps.value)(this.props.value);

      if (typeof inputValue !== 'string') {
        return (0, _ramda.toString)(inputValue);
      }

      return inputValue;
    }
  }, {
    key: "_getName",
    value: function _getName() {
      return this.props.name;
    }
  }, {
    key: "_getId",
    value: function _getId() {
      return this.props.id;
    }
  }, {
    key: "_getTextInputType",
    value: function _getTextInputType() {
      return (0, _ramda.defaultTo)(FormTextInputVariant1Class.defaultProps.type)(this.props.type);
    } // endregion
    // region handlers
    // endregion
    // region render methods

  }, {
    key: "_renderWarnings",
    value: function _renderWarnings(warnings) {
      var _this2 = this;

      return (0, _ramda.addIndex)(_ramda.map)(function (error, index) {
        return React.createElement("div", {
          key: "warning_".concat(index),
          className: _this2._getWarningContainerClassName()
        }, error);
      }, warnings);
    }
  }, {
    key: "_renderWarningsContainer",
    value: function _renderWarningsContainer() {
      var warnings = this._getWarning();

      if (warnings === null || (0, _ramda.isNil)(warnings) || !this._hasWarnings()) {
        return null;
      } else if (typeof warnings === 'string') {
        warnings = [warnings];
      }

      return React.createElement("div", {
        className: this._getWarningsContainerClassName()
      }, this._renderWarnings(warnings));
    }
  }, {
    key: "_renderErrors",
    value: function _renderErrors(errors) {
      var _this3 = this;

      return (0, _ramda.addIndex)(_ramda.map)(function (error, index) {
        return React.createElement("div", {
          key: "error_".concat(index),
          className: _this3._getErrorContainerClassName()
        }, error);
      }, errors);
    }
  }, {
    key: "_renderErrorsContainer",
    value: function _renderErrorsContainer() {
      var errors = this._getError();

      if (errors === null || (0, _ramda.isNil)(errors) || !this._hasErrors()) {
        return null;
      } else if (typeof errors === 'string') {
        errors = [errors];
      }

      return React.createElement("div", {
        className: this._getErrorsContainerClassName()
      }, this._renderErrors(errors));
    }
  }, {
    key: "_renderIcon",
    value: function _renderIcon() {
      var iconClassName = this._getIconClassName();

      if ((0, _ramda.isEmpty)(iconClassName)) {
        return;
      }

      return iconClassName ? React.createElement("i", {
        className: this._getIconClassNames()
      }) : undefined;
    }
  }, {
    key: "_renderLabel",
    value: function _renderLabel() {
      return React.createElement("label", {
        className: this._getLabelClasses(),
        htmlFor: this._getId()
      }, this._getLabel());
    }
  }, {
    key: "_renderTextInput",
    value: function _renderTextInput() {
      var readOnlyParam = this._isReadOnly() ? 'readonly' : undefined;
      var disabledParam = this._isDisabled() ? 'disabled' : undefined;
      return React.createElement("input", {
        className: this._getInputClasses(),
        type: this._getTextInputType(),
        value: this._getValue(),
        placeholder: this._getPlaceholder(),
        name: this._getName(),
        id: this._getId(),
        onChange: this._getOnChangeCallback(),
        onFocus: this._getOnFocusCallback(),
        onBlur: this._getOnBlurCallback(),
        readOnly: readOnlyParam,
        disabled: disabledParam
      });
    }
  }, {
    key: "_renderTextAreaInput",
    value: function _renderTextAreaInput() {
      var readOnlyParam = this._isReadOnly() ? 'readonly' : undefined;
      var disabledParam = this._isDisabled() ? 'disabled' : undefined;

      var inputValue = this._getValue();

      var rows = this.props.rows;
      var numberOfLines = (0, _ramda.isNil)(rows) ? inputValue.replace(/^\s*[\r\n]/gm, '').split(/\r|\r\n|\n/).length : rows;
      var flexBasis = numberOfLines * this.props.theme.inputStyles.lineHeight + bottomBorderWidth;
      return React.createElement("textarea", {
        rows: numberOfLines,
        className: this._getInputClasses(),
        value: inputValue,
        placeholder: this._getPlaceholder(),
        name: this._getName(),
        id: this._getId(),
        onChange: this._getOnChangeCallback(),
        onFocus: this._getOnFocusCallback(),
        onBlur: this._getOnBlurCallback(),
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
      return (0, _ramda.ifElse)((0, _ramda.equals)(true), this._renderTextAreaInput, this._renderTextInput)(this._isTextArea());
    }
  }, {
    key: "_renderInputContainer",
    value: function _renderInputContainer() {
      return React.createElement("div", {
        className: this._getInputContainerClassName()
      }, this._renderInput(), this._renderLabel(), this._renderIcon());
    }
  }, {
    key: "_renderComponentContainer",
    value: function _renderComponentContainer() {
      return React.createElement("div", {
        className: this._getComponentContainerClasses(),
        style: this._getComponentContainerStyles()
      }, this._renderInputContainer(), this._renderErrorsContainer(), this._renderWarningsContainer());
    }
  }, {
    key: "render",
    value: function render() {
      return this._renderComponentContainer();
    } // endregion

  }]);

  return FormTextInputVariant1Class;
}(React.Component);

exports.FormTextInputVariant1Class = FormTextInputVariant1Class;
FormTextInputVariant1Class.displayName = 'FormTextInputVariant1Class';
FormTextInputVariant1Class.defaultProps = {
  type: 'text',
  value: '',
  initial: '',
  readOnly: false,
  disabled: false,
  active: false,
  touched: false,
  pristine: true,
  dirty: false,
  errorsIfTouched: true,
  warningsIfTouched: true,
  error: null,
  warning: null,
  placeholder: '',
  label: '',
  onChange: function onChange() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  componentContainerClassName: '',
  iconClassNames: '',
  componentContainerStyles: {},
  style: {},
  classes: {}
};
var FormTextInputVariant1Component = (0, _reactJss.default)(styles)(FormTextInputVariant1Class);
exports.FormTextInputVariant1Component = FormTextInputVariant1Component;
FormTextInputVariant1Component.displayName = 'FormTextInputVariant1Component'; // exports

var _default = FormTextInputVariant1Component;
exports.default = _default;