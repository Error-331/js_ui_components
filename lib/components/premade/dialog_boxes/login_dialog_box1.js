'use strict'; // external imports

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.weak-map");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginDialogBox1Component = LoginDialogBox1Component;
exports.LoginDialogBox1Class = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _ramda = require("ramda");

var _main_theme_provider = require("./../../../theming/providers/main_theme_provider");

var _regular_card_component = require("./../../layout/structure/regular_card_component");

var _regular_card_header_component = require("./../../layout/structure/regular_card_header_component");

var _dialog_box_actions_container = require("./../../layout/alignment/dialog_box/dialog_box_actions_container");

var _redux_form_text_input_component = require("./../../redux_form/redux_form_text_input_component");

var _redux_form_drop_down_input_component = require("./../../redux_form/redux_form_drop_down_input_component");

var _regular_button_component = require("./../../buttons/regular_button_component");

var _regular_alert_component = require("./../../layout/alerts/regular_alert_component");

var _dec, _class, _class2, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
    cardContainer: {
      boxSizing: 'border-box',
      maxWidth: '510px'
    },
    controlsContainer: {
      boxSizing: 'border-box',
      display: 'grid',
      gridTemplateAreas: "\n            \"alert    \"\n            \"email    \"\n            \"password \"\n            \"selection\"\n            \"actions  \"\n        ",
      gridColumnGap: "".concat(theme.layoutStyles.formHorizontalSpacing, "px"),
      gridRowGap: "".concat(theme.layoutStyles.formVerticalSpacing, "px"),
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'repeat(auto-fit, max-content)',
      '& > $alertContainer': {
        boxSizing: 'border-box',
        gridArea: 'alert'
      },
      '& > $emailControl': {
        boxSizing: 'border-box',
        gridArea: 'email'
      },
      '& > $passwordControl': {
        boxSizing: 'border-box',
        gridArea: 'password'
      },
      '& > $selectionContainer': {
        gridArea: 'selection'
      },
      '& > $actionsContainer': {
        gridArea: 'actions'
      }
    },
    alertContainer: {},
    emailControl: {},
    passwordControl: {},
    selectionContainer: {},
    actionsContainer: {}
  };
};
/**
 * Login dialog box (variant 1).
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation
// $FlowFixMe decorators


var LoginDialogBox1Class = (_dec = (0, _reactJss.default)(styles), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LoginDialogBox1Class, _React$Component);

  function LoginDialogBox1Class() {
    _classCallCheck(this, LoginDialogBox1Class);

    return _possibleConstructorReturn(this, _getPrototypeOf(LoginDialogBox1Class).apply(this, arguments));
  }

  _createClass(LoginDialogBox1Class, [{
    key: "_getActionsContainerClassName",
    // region static props
    // endregion
    // region private props
    // endregion
    // region constructor
    // endregion
    // region business logic
    // endregion
    // region lifecycle methods
    // endregion
    // region style accessors
    value: function _getActionsContainerClassName() {
      return this.props.classes.actionsContainer;
    }
  }, {
    key: "_getSelectionContainer",
    value: function _getSelectionContainer() {
      return this.props.classes.selectionContainer;
    }
  }, {
    key: "_getPasswordInputClassName",
    value: function _getPasswordInputClassName() {
      return this.props.classes.passwordControl;
    }
  }, {
    key: "_getLoginInputIconClassName",
    value: function _getLoginInputIconClassName() {
      return (0, _ramda.defaultTo)(LoginDialogBox1Class.defaultProps.loginInputIconClassName)(this.props.loginInputIconClassName);
    }
  }, {
    key: "_getAlertContainerClassName",
    value: function _getAlertContainerClassName() {
      return this.props.classes.alertContainer;
    }
  }, {
    key: "_getLoginInputClassName",
    value: function _getLoginInputClassName() {
      return this.props.classes.emailControl;
    }
  }, {
    key: "_getControlsContainerClassName",
    value: function _getControlsContainerClassName() {
      return this.props.classes.controlsContainer;
    }
  }, {
    key: "_getCardContainerClassName",
    value: function _getCardContainerClassName() {
      return this.props.classes.cardContainer;
    } // endregion
    // region label accessors
    // endregion
    // region state accessors
    // endregion
    // region prop accessors

  }, {
    key: "_getMainButtonsGroupCount",
    value: function _getMainButtonsGroupCount() {
      var buttonsCount = 0;
      buttonsCount = this._renderLoginButton() ? buttonsCount + 1 : buttonsCount;
      buttonsCount = this._renderRegisterButton() ? buttonsCount + 1 : buttonsCount;
      return buttonsCount;
    }
  }, {
    key: "_getClickRegisterButtonCallback",
    value: function _getClickRegisterButtonCallback() {
      return (0, _ramda.defaultTo)(LoginDialogBox1Class.defaultProps.onClickRegister)(this.props.onClickRegister);
    }
  }, {
    key: "_getClickForgotPasswordButtonCallback",
    value: function _getClickForgotPasswordButtonCallback() {
      return (0, _ramda.defaultTo)(LoginDialogBox1Class.defaultProps.onClickForgotPassword)(this.props.onClickForgotPassword);
    }
  }, {
    key: "_getClickLoginButtonCallback",
    value: function _getClickLoginButtonCallback() {
      return (0, _ramda.defaultTo)(LoginDialogBox1Class.defaultProps.onClickLogin)(this.props.onClickLogin);
    }
  }, {
    key: "_getDropDownInputOptions",
    value: function _getDropDownInputOptions() {
      return (0, _ramda.defaultTo)(LoginDialogBox1Class.defaultProps.dropDownInputOptions)(this.props.dropDownInputOptions);
    }
  }, {
    key: "_showDropDownInput",
    value: function _showDropDownInput() {
      return (0, _ramda.defaultTo)(LoginDialogBox1Class.defaultProps.showDropDownInput)(this.props.showDropDownInput);
    }
  }, {
    key: "_showRegisterButton",
    value: function _showRegisterButton() {
      return (0, _ramda.defaultTo)(LoginDialogBox1Class.defaultProps.showRegisterButton)(this.props.showRegisterButton);
    }
  }, {
    key: "_showForgotPasswordButton",
    value: function _showForgotPasswordButton() {
      return (0, _ramda.defaultTo)(LoginDialogBox1Class.defaultProps.showForgotPasswordButton)(this.props.showForgotPasswordButton);
    }
  }, {
    key: "_getRegisterButtonLabel",
    value: function _getRegisterButtonLabel() {
      return (0, _ramda.defaultTo)(LoginDialogBox1Class.defaultProps.registerButtonLabel)(this.props.registerButtonLabel);
    }
  }, {
    key: "_getForgotPasswordButtonLabel",
    value: function _getForgotPasswordButtonLabel() {
      return (0, _ramda.defaultTo)(LoginDialogBox1Class.defaultProps.forgotPasswordButtonLabel)(this.props.forgotPasswordButtonLabel);
    }
  }, {
    key: "_getLoginButtonLabel",
    value: function _getLoginButtonLabel() {
      return (0, _ramda.defaultTo)(LoginDialogBox1Class.defaultProps.loginButtonLabel)(this.props.loginButtonLabel);
    }
  }, {
    key: "_getDropDownInputPlaceholder",
    value: function _getDropDownInputPlaceholder() {
      return (0, _ramda.defaultTo)(LoginDialogBox1Class.defaultProps.dropDownInputPlaceholder)(this.props.dropDownInputPlaceholder);
    }
  }, {
    key: "_getPasswordInputPlaceholder",
    value: function _getPasswordInputPlaceholder() {
      return (0, _ramda.defaultTo)(LoginDialogBox1Class.defaultProps.passwordInputPlaceholder)(this.props.passwordInputPlaceholder);
    }
  }, {
    key: "_getLoginInputPlaceholder",
    value: function _getLoginInputPlaceholder() {
      return (0, _ramda.defaultTo)(LoginDialogBox1Class.defaultProps.loginInputPlaceholder)(this.props.loginInputPlaceholder);
    }
  }, {
    key: "_getDropDownInputLabel",
    value: function _getDropDownInputLabel() {
      return (0, _ramda.defaultTo)(LoginDialogBox1Class.defaultProps.dropDownInputLabel)(this.props.dropDownInputLabel);
    }
  }, {
    key: "_getPasswordInputLabel",
    value: function _getPasswordInputLabel() {
      return (0, _ramda.defaultTo)(LoginDialogBox1Class.defaultProps.passwordInputLabel)(this.props.passwordInputLabel);
    }
  }, {
    key: "_getLoginInputLabel",
    value: function _getLoginInputLabel() {
      return (0, _ramda.defaultTo)(LoginDialogBox1Class.defaultProps.loginInputLabel)(this.props.loginInputLabel);
    }
  }, {
    key: "_getPasswordInputName",
    value: function _getPasswordInputName() {
      return this.props.passwordInputName;
    }
  }, {
    key: "_getLoginInputName",
    value: function _getLoginInputName() {
      return this.props.loginInputName;
    }
  }, {
    key: "_getDropDownInputName",
    value: function _getDropDownInputName() {
      return (0, _ramda.defaultTo)('')(this.props.dropDownInputName);
    }
  }, {
    key: "_getAlertText",
    value: function _getAlertText() {
      return (0, _ramda.defaultTo)(LoginDialogBox1Class.defaultProps.alertText)(this.props.alertText);
    }
  }, {
    key: "_getHeaderText",
    value: function _getHeaderText() {
      return (0, _ramda.defaultTo)(LoginDialogBox1Class.defaultProps.headerText)(this.props.headerText);
    } // endregion
    // region handlers
    // endregion
    // region render methods

  }, {
    key: "_renderForgotPasswordButton",
    value: function _renderForgotPasswordButton() {
      return this._showForgotPasswordButton() && React.createElement(_regular_button_component.RegularButtonComponent, {
        variant: "text",
        textType: "secondary",
        containerStyle: {},
        label: this._getForgotPasswordButtonLabel(),
        onClick: this._getClickRegisterButtonCallback()
      });
    }
  }, {
    key: "_renderRegisterButton",
    value: function _renderRegisterButton() {
      return this._showRegisterButton() && React.createElement(_regular_button_component.RegularButtonComponent, {
        variant: "outlined",
        textType: "secondary",
        label: this._getRegisterButtonLabel(),
        onClick: this._getClickForgotPasswordButtonCallback()
      });
    }
  }, {
    key: "_renderLoginButton",
    value: function _renderLoginButton() {
      return React.createElement(_regular_button_component.RegularButtonComponent, {
        label: this._getLoginButtonLabel(),
        onClick: this._getClickLoginButtonCallback()
      });
    }
  }, {
    key: "_renderActionsContainer",
    value: function _renderActionsContainer() {
      return React.createElement(_dialog_box_actions_container.DialogBoxActionsContainer, {
        mainGroupCount: this._getMainButtonsGroupCount(),
        containerClassName: this._getActionsContainerClassName()
      }, this._renderLoginButton(), this._renderRegisterButton(), this._renderForgotPasswordButton());
    }
  }, {
    key: "_renderPasswordInput",
    value: function _renderPasswordInput() {
      return React.createElement(_redux_form_text_input_component.ReduxFormTextInputComponent, {
        type: "password",
        name: this._getPasswordInputName(),
        label: this._getPasswordInputLabel(),
        placeholder: this._getPasswordInputPlaceholder(),
        componentContainerClassName: this._getPasswordInputClassName(),
        iconClassNames: "fas fa-key"
      });
    }
  }, {
    key: "_renderSelectionInput",
    value: function _renderSelectionInput() {
      if (!this._showDropDownInput()) {
        return null;
      }

      return React.createElement(_redux_form_drop_down_input_component.ReduxFormDropDownInputComponent, {
        name: this._getDropDownInputName(),
        label: this._getDropDownInputLabel(),
        placeholder: this._getDropDownInputPlaceholder(),
        options: this._getDropDownInputOptions()
      });
    }
  }, {
    key: "_renderSelectionContainer",
    value: function _renderSelectionContainer() {
      return React.createElement("div", {
        className: this._getSelectionContainer()
      }, this._renderSelectionInput());
    }
  }, {
    key: "_renderLoginInput",
    value: function _renderLoginInput() {
      return React.createElement(_redux_form_text_input_component.ReduxFormTextInputComponent, {
        name: this._getLoginInputName(),
        label: this._getLoginInputLabel(),
        placeholder: this._getLoginInputPlaceholder(),
        componentContainerClassName: this._getLoginInputClassName(),
        iconClassNames: this._getLoginInputIconClassName()
      });
    }
  }, {
    key: "_renderAlert",
    value: function _renderAlert() {
      var alertText = this._getAlertText();

      return React.createElement("div", {
        className: this._getAlertContainerClassName()
      }, (0, _ramda.isNil)(alertText) ? null : React.createElement(_regular_alert_component.RegularAlertComponent, {
        accent: true
      }, alertText));
    }
  }, {
    key: "_renderControlsContainer",
    value: function _renderControlsContainer() {
      return React.createElement("div", {
        className: this._getControlsContainerClassName()
      }, this._renderAlert(), this._renderLoginInput(), this._renderPasswordInput(), this._renderSelectionContainer(), this._renderActionsContainer());
    }
  }, {
    key: "_renderCardHeader",
    value: function _renderCardHeader() {
      return React.createElement(_regular_card_header_component.RegularCardHeaderComponent, {
        iconClassNames: "fas fa-sign-in"
      }, this._getHeaderText());
    }
  }, {
    key: "_renderCard",
    value: function _renderCard() {
      return React.createElement(_regular_card_component.RegularCardComponent, {
        header: this._renderCardHeader(),
        containerClassName: this._getCardContainerClassName()
      }, this._renderControlsContainer());
    }
  }, {
    key: "render",
    value: function render() {
      return this._renderCard();
    } // endregion

  }]);

  return LoginDialogBox1Class;
}(React.Component), _class2.displayName = 'LoginDialogBox1Class', _class2.defaultProps = {
  headerText: 'Login',
  alertText: null,
  loginInputLabel: 'Email',
  loginInputPlaceholder: 'user email...',
  loginInputIconClassName: 'fas fa-at',
  passwordInputLabel: 'Password',
  passwordInputPlaceholder: 'user password...',
  dropDownInputLabel: '',
  dropDownInputPlaceholder: '',
  dropDownInputOptions: {},
  showDropDownInput: false,
  showRegisterButton: false,
  showForgotPasswordButton: false,
  loginButtonLabel: 'Login',
  forgotPasswordButtonLabel: 'Forgot password ?',
  registerButtonLabel: 'Register',
  onClickLogin: function onClickLogin() {},
  onClickRegister: function onClickRegister() {},
  onClickForgotPassword: function onClickForgotPassword() {}
}, _temp)) || _class); // exports

exports.LoginDialogBox1Class = LoginDialogBox1Class;

function LoginDialogBox1Component(props) {
  return React.createElement(_main_theme_provider.MainThemeContext.Consumer, null, function (windowDimensions) {
    return React.createElement(LoginDialogBox1Class, _extends({}, props, windowDimensions));
  });
}

LoginDialogBox1Component.displayName = 'LoginDialogBox1Component';