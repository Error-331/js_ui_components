'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LoginDialogBox1Class = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

// local imports


exports.LoginDialogBox1Component = LoginDialogBox1Component;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _ramda = require('ramda');

var _theming = require('./../../../theming');

var _layout = require('./../../layout');

var _redux_form = require('./../../redux_form');

var _buttons = require('./../../buttons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// styles definition


// type definitions
var styles = function styles(theme) {
    return {
        cardContainer: {
            boxSizing: 'border-box',
            minWidth: '510px'
        },

        controlsContainer: {
            boxSizing: 'border-box',
            display: 'grid',

            gridTemplateAreas: '\n            "email   "\n            "password"\n            "buttons "\n        ',

            gridColumnGap: theme.layoutStyles.componentHorizontalSpacing + 'px',
            gridRowGap: theme.layoutStyles.componentVerticalSpacing + 'px',

            gridTemplateColumns: '1fr',
            gridTemplateRows: 'repeat(auto-fit, max-content)',

            '& > $emailControl': {
                boxSizing: 'border-box',

                gridArea: 'email'
            },

            '& > $passwordControl': {
                boxSizing: 'border-box',

                gridArea: 'password'
            },

            '& > $actionsContainer': {
                gridArea: 'buttons'
            }
        },

        emailControl: {},
        passwordControl: {},
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
var LoginDialogBox1Class = exports.LoginDialogBox1Class = (_dec = (0, _reactJss2.default)(styles), _dec(_class = (_temp = _class2 = function (_React$Component) {
    _inherits(LoginDialogBox1Class, _React$Component);

    function LoginDialogBox1Class() {
        _classCallCheck(this, LoginDialogBox1Class);

        return _possibleConstructorReturn(this, (LoginDialogBox1Class.__proto__ || Object.getPrototypeOf(LoginDialogBox1Class)).apply(this, arguments));
    }

    _createClass(LoginDialogBox1Class, [{
        key: '_getActionsContainerClassName',


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

        // region static props
        value: function _getActionsContainerClassName() {
            return this.props.classes.actionsContainer;
        }
    }, {
        key: '_getPasswordInputClassName',
        value: function _getPasswordInputClassName() {
            return this.props.classes.passwordControl;
        }
    }, {
        key: '_getLoginInputIconClassName',
        value: function _getLoginInputIconClassName() {
            return (0, _ramda.defaultTo)(LoginDialogBox1Class.defaultProps.loginInputIconClassName)(this.props.loginInputIconClassName);
        }
    }, {
        key: '_getLoginInputClassName',
        value: function _getLoginInputClassName() {
            return this.props.classes.emailControl;
        }
    }, {
        key: '_getControlsContainerClassName',
        value: function _getControlsContainerClassName() {
            return this.props.classes.controlsContainer;
        }
    }, {
        key: '_getCardContainerClassName',
        value: function _getCardContainerClassName() {
            return this.props.classes.cardContainer;
        }

        // endregion

        // region label accessors
        // endregion

        // region state accessors
        // endregion

        // region prop accessors

    }, {
        key: '_getMainButtonsGroupCount',
        value: function _getMainButtonsGroupCount() {
            var buttonsCount = 0;

            buttonsCount = this._renderLoginButton() ? buttonsCount + 1 : buttonsCount;
            buttonsCount = this._renderRegisterButton() ? buttonsCount + 1 : buttonsCount;

            return buttonsCount;
        }
    }, {
        key: '_getClickRegisterButtonCallback',
        value: function _getClickRegisterButtonCallback() {
            return (0, _ramda.defaultTo)(LoginDialogBox1Class.defaultProps.onClickRegister)(this.props.onClickRegister);
        }
    }, {
        key: '_getClickForgotPasswordButtonCallback',
        value: function _getClickForgotPasswordButtonCallback() {
            return (0, _ramda.defaultTo)(LoginDialogBox1Class.defaultProps.onClickForgotPassword)(this.props.onClickForgotPassword);
        }
    }, {
        key: '_getClickLoginButtonCallback',
        value: function _getClickLoginButtonCallback() {
            return (0, _ramda.defaultTo)(LoginDialogBox1Class.defaultProps.onClickLogin)(this.props.onClickLogin);
        }
    }, {
        key: '_showRegisterButton',
        value: function _showRegisterButton() {
            return (0, _ramda.defaultTo)(LoginDialogBox1Class.defaultProps.showRegisterButton)(this.props.showRegisterButton);
        }
    }, {
        key: '_showForgotPasswordButton',
        value: function _showForgotPasswordButton() {
            return (0, _ramda.defaultTo)(LoginDialogBox1Class.defaultProps.showForgotPasswordButton)(this.props.showForgotPasswordButton);
        }
    }, {
        key: '_getRegisterButtonLabel',
        value: function _getRegisterButtonLabel() {
            return (0, _ramda.defaultTo)(LoginDialogBox1Class.defaultProps.registerButtonLabel)(this.props.registerButtonLabel);
        }
    }, {
        key: '_getForgotPasswordButtonLabel',
        value: function _getForgotPasswordButtonLabel() {
            return (0, _ramda.defaultTo)(LoginDialogBox1Class.defaultProps.forgotPasswordButtonLabel)(this.props.forgotPasswordButtonLabel);
        }
    }, {
        key: '_getLoginButtonLabel',
        value: function _getLoginButtonLabel() {
            return (0, _ramda.defaultTo)(LoginDialogBox1Class.defaultProps.loginButtonLabel)(this.props.loginButtonLabel);
        }
    }, {
        key: '_getPasswordInputPlaceholder',
        value: function _getPasswordInputPlaceholder() {
            return (0, _ramda.defaultTo)(LoginDialogBox1Class.defaultProps.passwordInputPlaceholder)(this.props.passwordInputPlaceholder);
        }
    }, {
        key: '_getLoginInputPlaceholder',
        value: function _getLoginInputPlaceholder() {
            return (0, _ramda.defaultTo)(LoginDialogBox1Class.defaultProps.loginInputPlaceholder)(this.props.loginInputPlaceholder);
        }
    }, {
        key: '_getPasswordInputLabel',
        value: function _getPasswordInputLabel() {
            return (0, _ramda.defaultTo)(LoginDialogBox1Class.defaultProps.passwordInputLabel)(this.props.passwordInputLabel);
        }
    }, {
        key: '_getLoginInputLabel',
        value: function _getLoginInputLabel() {
            return (0, _ramda.defaultTo)(LoginDialogBox1Class.defaultProps.loginInputLabel)(this.props.loginInputLabel);
        }
    }, {
        key: '_getPasswordInputName',
        value: function _getPasswordInputName() {
            return this.props.passwordInputName;
        }
    }, {
        key: '_getLoginInputName',
        value: function _getLoginInputName() {
            return this.props.loginInputName;
        }
    }, {
        key: '_getHeaderText',
        value: function _getHeaderText() {
            return (0, _ramda.defaultTo)(LoginDialogBox1Class.defaultProps.headerText)(this.props.headerCaption);
        }

        // endregion

        // region handlers
        // endregion

        // region render methods

    }, {
        key: '_renderForgotPasswordButton',
        value: function _renderForgotPasswordButton() {
            return this._showForgotPasswordButton() && React.createElement(_buttons.RegularButtonComponent, {
                variant: 'text',
                textType: 'secondary',
                containerStyles: {},
                label: this._getForgotPasswordButtonLabel(),
                onClick: this._getClickRegisterButtonCallback()
            });
        }
    }, {
        key: '_renderRegisterButton',
        value: function _renderRegisterButton() {
            return this._showRegisterButton() && React.createElement(_buttons.RegularButtonComponent, {
                variant: 'outlined',
                textType: 'secondary',
                label: this._getRegisterButtonLabel(),
                onClick: this._getClickForgotPasswordButtonCallback()
            });
        }
    }, {
        key: '_renderLoginButton',
        value: function _renderLoginButton() {
            return React.createElement(_buttons.RegularButtonComponent, {
                label: this._getLoginButtonLabel(),
                onClick: this._getClickLoginButtonCallback()
            });
        }
    }, {
        key: '_renderActionsContainer',
        value: function _renderActionsContainer() {

            return React.createElement(
                _layout.DialogBoxActionsContainer,
                {
                    mainGroupCount: this._getMainButtonsGroupCount(),
                    containerClassName: this._getActionsContainerClassName()
                },
                this._renderLoginButton(),
                this._renderRegisterButton(),
                this._renderForgotPasswordButton()
            );
        }
    }, {
        key: '_renderPasswordInput',
        value: function _renderPasswordInput() {
            return React.createElement(_redux_form.ReduxFormTextInputComponent, {
                type: 'password',
                name: this._getPasswordInputName(),
                label: this._getPasswordInputLabel(),
                placeholder: this._getPasswordInputPlaceholder(),

                componentContainerClassName: this._getPasswordInputClassName(),
                iconClassNames: 'fas fa-key'
            });
        }
    }, {
        key: '_renderLoginInput',
        value: function _renderLoginInput() {
            return React.createElement(_redux_form.ReduxFormTextInputComponent, {
                name: this._getLoginInputName(),
                label: this._getLoginInputLabel(),
                placeholder: this._getLoginInputPlaceholder(),

                componentContainerClassName: this._getLoginInputClassName(),
                iconClassNames: this._getLoginInputIconClassName()
            });
        }
    }, {
        key: '_renderControlsContainer',
        value: function _renderControlsContainer() {
            return React.createElement(
                'div',
                { className: this._getControlsContainerClassName() },
                this._renderLoginInput(),
                this._renderPasswordInput(),
                this._renderActionsContainer()
            );
        }
    }, {
        key: '_renderCardHeader',
        value: function _renderCardHeader() {
            return React.createElement(
                _layout.RegularCardHeaderComponent,
                { iconClassNames: 'fas fa-sign-in' },
                this._getHeaderText()
            );
        }
    }, {
        key: '_renderCard',
        value: function _renderCard() {
            return React.createElement(
                _layout.RegularCardComponent,
                {
                    header: this._renderCardHeader(),
                    containerClassName: this._getCardContainerClassName()

                },
                this._renderControlsContainer()
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return this._renderCard();
        }

        // endregion

    }]);

    return LoginDialogBox1Class;
}(React.Component), _class2.displayName = 'LoginDialogBox1Class', _class2.defaultProps = {
    headerText: 'Login',

    loginInputLabel: 'Email',
    loginInputPlaceholder: 'user email...',
    loginInputIconClassName: 'fas fa-at',

    passwordInputLabel: 'Password',
    passwordInputPlaceholder: 'user password...',

    showRegisterButton: false,
    showForgotPasswordButton: false,

    loginButtonLabel: 'Login',
    forgotPasswordButtonLabel: 'Forgot password ?',
    registerButtonLabel: 'Register',

    onClickLogin: function onClickLogin() {},
    onClickRegister: function onClickRegister() {},
    onClickForgotPassword: function onClickForgotPassword() {}
}, _temp)) || _class);

// exports

function LoginDialogBox1Component(props) {
    return React.createElement(
        _theming.MainThemeContext.Consumer,
        null,
        function (windowDimensions) {
            return React.createElement(LoginDialogBox1Class, _extends({}, props, windowDimensions));
        }
    );
}

LoginDialogBox1Component.displayName = 'LoginDialogBox1Component';