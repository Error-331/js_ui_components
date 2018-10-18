'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';

import {defaultTo} from 'ramda';

// local imports
import {MainThemeContext} from './../../../theming';

import {RegularCardComponent, RegularCardHeaderComponent, DialogBoxActionsContainer}from './../../layout';
import {ReduxFormTextInputComponent} from './../../redux_form';

import {RegularButtonComponent} from './../../buttons';

// type definitions
type ClickCallbackType = (event: SyntheticEvent<HTMLButtonElement>) => void;

type PropsTypes = {
    /**
     * Dialog box header text
     */

    headerText?: string,

    /**
     * Login input form name
     */

    loginInputName: string,

    /**
     * Password input form name
     */

    passwordInputName: string,

    /**
     * Login input label
     */

    loginInputLabel?: string,

    /**
     * Login input placeholder text
     */

    loginInputPlaceholder?: string,

    /**
     * Login input icon class name
     */

    loginInputIconClassName?: string,

    /**
     * Password input label
     */

    passwordInputLabel?: string,

    /**
     * Login input placeholder text
     */

    passwordInputPlaceholder?: string,

    /**
     * Login button label
     */

    loginButtonLabel?: string,

    /**
     * 'Forgot password' button label
     */

    forgotPasswordButtonLabel?: string,

    /**
     * 'Register' button label
     */

    registerButtonLabel?: string,

    /**
     * Flag that indicates whether to show (or not to show) 'register' button
     */

    showRegisterButton?: boolean,

    /**
     * Flag that indicates whether to show (or not to show) 'forgot password' button
     */

    showForgotPasswordButton?: boolean,

    /**
     * Callback function which will be called when user will click on 'login' button
     */

    onClickLogin?: ClickCallbackType,

    /**
     * Callback function which will be called when user will click on 'register' button
     */

    onClickRegister?: ClickCallbackType,

    /**
     * Callback function which will be called when user will click on 'forgot password' button
     */

    onClickForgotPassword?: ClickCallbackType,

    /**
     * JSS inner classes
     *
     * @ignore
     */

    classes: any
};

type StateTypes = {};

// styles definition
const styles = theme => ({
    cardContainer: {
        boxSizing: 'border-box',
        minWidth: '510px',
    },

    controlsContainer: {
        boxSizing: 'border-box',
        display: 'grid',

        gridTemplateAreas: `
            "email   "
            "password"
            "buttons "
        `,

        gridColumnGap: `${theme.layoutStyles.componentHorizontalSpacing}px`,
        gridRowGap: `${theme.layoutStyles.componentVerticalSpacing}px`,

        gridTemplateColumns: '1fr',
        gridTemplateRows: 'repeat(auto-fit, max-content)',

        '& > $emailControl': {
            boxSizing: 'border-box',

            gridArea: 'email',
        },

        '& > $passwordControl': {
            boxSizing: 'border-box',

            gridArea: 'password',
        },

        '& > $actionsContainer': {
            gridArea: 'buttons',
        },
    },

    emailControl: {},
    passwordControl: {},
    actionsContainer: {},
});

/**
 * Login dialog box (variant 1).
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation

// $FlowFixMe decorators
@injectSheet(styles)
export class LoginDialogBox1Class extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'LoginDialogBox1Class';

    static defaultProps = {
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

        onClickLogin: () => {},
        onClickRegister: () => {},
        onClickForgotPassword: () => {},
    };

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
    _getActionsContainerClassName(): string {
        return this.props.classes.actionsContainer;
    }

    _getPasswordInputClassName(): string {
        return this.props.classes.passwordControl;
    }

    _getLoginInputIconClassName(): string {
        return defaultTo(LoginDialogBox1Class.defaultProps.loginInputIconClassName)(this.props.loginInputIconClassName);
    }

    _getLoginInputClassName(): string {
        return this.props.classes.emailControl;
    }

    _getControlsContainerClassName(): string {
        return this.props.classes.controlsContainer;
    }

    _getCardContainerClassName(): string {
        return this.props.classes.cardContainer;
    }

    // endregion

    // region label accessors
    // endregion

    // region state accessors
    // endregion

    // region prop accessors
    _getMainButtonsGroupCount(): number {
        let buttonsCount: number = 0;

        buttonsCount = this._renderLoginButton() ? buttonsCount + 1 : buttonsCount;
        buttonsCount = this._renderRegisterButton() ? buttonsCount + 1 : buttonsCount;

        return buttonsCount;
    }

    _getClickRegisterButtonCallback(): ClickCallbackType {
        return defaultTo(LoginDialogBox1Class.defaultProps.onClickRegister)(this.props.onClickRegister);
    }

    _getClickForgotPasswordButtonCallback(): ClickCallbackType {
        return defaultTo(LoginDialogBox1Class.defaultProps.onClickForgotPassword)(this.props.onClickForgotPassword);
    }

    _getClickLoginButtonCallback(): ClickCallbackType {
        return defaultTo(LoginDialogBox1Class.defaultProps.onClickLogin)(this.props.onClickLogin);
    }

    _showRegisterButton(): boolean {
        return defaultTo(LoginDialogBox1Class.defaultProps.showRegisterButton)(this.props.showRegisterButton);
    }

    _showForgotPasswordButton(): boolean {
        return defaultTo(LoginDialogBox1Class.defaultProps.showForgotPasswordButton)(this.props.showForgotPasswordButton);
    }

    _getRegisterButtonLabel(): string {
        return defaultTo(LoginDialogBox1Class.defaultProps.registerButtonLabel)(this.props.registerButtonLabel);
    }

    _getForgotPasswordButtonLabel(): string {
        return defaultTo(LoginDialogBox1Class.defaultProps.forgotPasswordButtonLabel)(this.props.forgotPasswordButtonLabel);
    }

    _getLoginButtonLabel(): string {
        return defaultTo(LoginDialogBox1Class.defaultProps.loginButtonLabel)(this.props.loginButtonLabel);
    }

    _getPasswordInputPlaceholder(): string {
        return defaultTo(LoginDialogBox1Class.defaultProps.passwordInputPlaceholder)(this.props.passwordInputPlaceholder);
    }

    _getLoginInputPlaceholder(): string {
        return defaultTo(LoginDialogBox1Class.defaultProps.loginInputPlaceholder)(this.props.loginInputPlaceholder);
    }

    _getPasswordInputLabel(): string {
        return defaultTo(LoginDialogBox1Class.defaultProps.passwordInputLabel)(this.props.passwordInputLabel);
    }

    _getLoginInputLabel(): string {
        return defaultTo(LoginDialogBox1Class.defaultProps.loginInputLabel)(this.props.loginInputLabel);
    }

    _getPasswordInputName(): string {
        return this.props.passwordInputName;
    }

    _getLoginInputName(): string {
        return this.props.loginInputName
    }

    _getHeaderText(): string {
        return defaultTo(LoginDialogBox1Class.defaultProps.headerText)(this.props.headerCaption);
    }

    // endregion

    // region handlers
    // endregion

    // region render methods
    _renderForgotPasswordButton(): React.Node {
        return this._showForgotPasswordButton() &&
            <RegularButtonComponent
                variant='text'
                textType='secondary'
                containerStyles={{}}
                label={this._getForgotPasswordButtonLabel()}
                onClick={this._getClickRegisterButtonCallback()}
            />
    }

    _renderRegisterButton(): React.Node {
        return this._showRegisterButton() &&
            <RegularButtonComponent
                variant='outlined'
                textType='secondary'
                label={this._getRegisterButtonLabel()}
                onClick={this._getClickForgotPasswordButtonCallback()}
            />
    }

    _renderLoginButton(): React.Node {
        return <RegularButtonComponent
            label={this._getLoginButtonLabel()}
            onClick={this._getClickLoginButtonCallback()}
        />;
    }

    _renderActionsContainer(): React.Node {

        return <DialogBoxActionsContainer
            mainGroupCount={this._getMainButtonsGroupCount()}
            containerClassName={this._getActionsContainerClassName()}
        >
            {this._renderLoginButton()}
            {this._renderRegisterButton()}
            {this._renderForgotPasswordButton()}
        </DialogBoxActionsContainer>;
    }

    _renderPasswordInput(): React.Node {
        return <ReduxFormTextInputComponent
            type='password'
            name={this._getPasswordInputName()}
            label={this._getPasswordInputLabel()}
            placeholder={this._getPasswordInputPlaceholder()}

            componentContainerClassName={this._getPasswordInputClassName()}
            iconClassNames='fas fa-key'
        />;
    }

    _renderLoginInput(): React.Node {
        return <ReduxFormTextInputComponent
            name={this._getLoginInputName()}
            label={this._getLoginInputLabel()}
            placeholder={this._getLoginInputPlaceholder()}

            componentContainerClassName={this._getLoginInputClassName()}
            iconClassNames={this._getLoginInputIconClassName()}
        />;
    }

    _renderControlsContainer(): React.Node {
        return <div className={this._getControlsContainerClassName()}>
            {this._renderLoginInput()}
            {this._renderPasswordInput()}
            {this._renderActionsContainer()}
        </div>;
    }

    _renderCardHeader(): React.Node {
        return <RegularCardHeaderComponent iconClassNames='fas fa-sign-in'>
            {this._getHeaderText()}
        </RegularCardHeaderComponent>;
    }

    _renderCard(): React.Node {
        return (
            <RegularCardComponent
                header={this._renderCardHeader()}
                containerClassName={this._getCardContainerClassName()}

            >
                {this._renderControlsContainer()}
            </RegularCardComponent>
        );
    }

    render() {
        return this._renderCard();
    }

    // endregion

}

// exports
export function LoginDialogBox1Component(props: PropsTypes) {
    return (
        <MainThemeContext.Consumer>
            {windowDimensions => <LoginDialogBox1Class {...props} {...windowDimensions} />}
        </MainThemeContext.Consumer>
    );
}

LoginDialogBox1Component.displayName = 'LoginDialogBox1Component';