'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import {isNil, isEmpty, ifElse, defaultTo, equals, toString, and, not, complement, addIndex, map,} from 'ramda';

// local imports
import type {ThemeType} from './../../../types/theme_types';

// type definitions
type CSSStylesType = {
    [string]: mixed
};

type InputTypes = 'text' | 'password' | 'textarea';
type GenericCallbackType = (...args?: Array<any>) => any;

export type FormTextInputVariant1Types = {
    /**
     * Input type (text or password)
     */

    type?: InputTypes,

    /**
     * Height of textarea (if type = 'textarea') input component (based on lines)
     */

    rows?: number,

    /**
     *  Unique string value used to differentiate current input component
     */

    id: string,

    /**
     *  Name of the input component
     */

    name: string,

    /**
     *  Input component value
     */

    value?: string | number,

    /**
     *  Input component initial value
     */

    initial?: null | string | number,

    /**
     * Flag that dictates whether component should be readable only (text can be readable but not editable)
     */

    readOnly?: ?boolean,

    /**
     * Flag that dictates whether component should be disabled (text can not be readable or editable)
     */

    disabled?: ?boolean,

    /**
     * Flag that indicates whether component should is active
     */

    active?: boolean,

    /**
     * Flag that indicates whether user already interacted with the component in past
     */

    touched?: boolean,

    /**
     * Flag that indicates whether components value were not edited by user at all
     */

    pristine?: null | boolean,

    /**
     * Flag that indicates whether components value were edited by user
     */

    dirty?: boolean,

    /**
     * Flag that indicates whether errors should be shown only after user interacts with input or always (e.g. even if initial value is set)
     */

    errorsIfTouched?: boolean,

    /**
     * Flag that indicates whether warnings should be shown only after user interacts with input or always (e.g. even if initial value is set)
     */

    warningsIfTouched?: boolean,

    /**
     * Error (errors) which were passed to component if there were validation errors
     */

    error?: null | string | Array<string>,

    /**
     * Warning(wornings) which were passed to component if there were validation errors
     */

    warning?: null | string | Array<string>,

    /**
     * Placeholder text used as hint for the user of how appropriate data should look like
     */

    placeholder?: ?string,

    /**
     * Input label
     */

    label?: ?string,

    /**
     * Callback function which will be called when user have entered a new value in input component
     */

    onChange?: GenericCallbackType,

    /**
     * Callback function which will be called when input component gets focus
     */

    onFocus?: GenericCallbackType,

    /**
     * Callback function which will be called when input component lost focus
     */

    onBlur?: GenericCallbackType,

    /**
     * Class name which will be added to the component container (main outer container)
     */

    componentContainerClassName?: string,

    /**
     * Styles for component container (main outer container) of the form text input component
     */

    componentContainerStyles?: CSSStylesType,

    /**
     * Class names which will be added to the icon container of the current component
     */

    iconClassNames?: ?string,

    /**
     * Alias of 'componentContainerStyles'
     */

    style?: CSSStylesType,
};

type PropsTypes =  FormTextInputVariant1Types & {
    /**
     * JSS theme object
     *
     * @ignore
     */

    theme: ThemeType,

    /**
     * JSS inner classes
     *
     * @ignore
     */

    classes: any
};

type StateTypes = {};

// styles definition
const topAdditionalPadding: number = 7;
const iconAdditionalPadding: number = 2;
const bottomBorderWidth: number = 1;

const styles = theme => ({
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

        padding: `${theme.inputStyles.labelActiveFontSize + topAdditionalPadding}px 0px 0px 0px`,

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

                flexBasis: `${theme.inputStyles.lineHeight}px`,
                flexShrink: '0',
                flexGrow: '0',

                margin: '0 0 0 0',

                border: 'none',
                borderBottomWidth: `${bottomBorderWidth}px`,
                borderBottomStyle: 'solid',
                borderBottomColor: theme.inputStyles.inactiveColor,
                borderRadius: '0',

                padding: '0',

                fontFamily: theme.inputStyles.fontStack,
                fontSize: `${theme.inputStyles.fontSize}px`,

                boxShadow: 'none',
                transition: 'all .3s',

                lineHeight: `${theme.inputStyles.lineHeight}px`,
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
                    overflow: 'hidden',
                },

                '&.scrollable': {
                    overflow: 'visible',
                },

                '&.focus': {
                    borderBottomColor: theme.inputStyles.activeColor,
                    color: theme.inputStyles.activeColor
                },

                '&.error': {
                    color: theme.inputStyles.attentionColor,
                    borderBottomColor: theme.inputStyles.attentionColor,
                },

                '&.readOnly': {
                    color: theme.inputStyles.readOnlyColor,
                    borderBottomColor: theme.inputStyles.readOnlyColor,
                },

                '&.disabled': {
                    borderBottomStyle: 'dotted',
                    borderBottomColor: theme.inputStyles.disabledColor,

                    color: theme.inputStyles.disabledColor,
                },
            },

            '& > $inputControlLabel': {
                position: 'absolute',

                top: `${theme.inputStyles.fontSize - theme.inputStyles.labelInactiveFontSize}px`,
                left: '0px',

                fontFamily: theme.inputStyles.fontStack,
                fontSize: `${theme.inputStyles.labelActiveFontSize}px`,

                cursor: 'text',

                transition: '.2s ease-out',

                color: theme.inputStyles.labelColor,

                '&.active': {
                    fontSize: `${theme.inputStyles.labelActiveFontSize}px`,
                    '-webkit-transform': 'translateY(-145%)',
                    transform: 'translateY(-145%)'
                },

                '&.passive': {
                    fontSize: `${theme.inputStyles.labelInactiveFontSize}px`,
                    '-webkit-transform': 'translateY(0%)',
                    transform: 'translateY(0%)'
                },

                '&.focus': {
                    color: theme.inputStyles.activeColor,
                },

                '&.error': {
                    color: theme.inputStyles.attentionColor,
                },

                '&.readOnly': {
                    color: theme.inputStyles.readOnlyColor,
                },

                '&.disabled': {
                    color: theme.inputStyles.disabledColor,
                },
            },

            '& > $inputControlLabel:first-letter': {
                textTransform: 'capitalize',
            },

            '& > $inputControlIcon': {
                position: 'absolute',

                left: `calc(100%  - ${theme.inputStyles.iconFontSize + iconAdditionalPadding}px)`,
                bottom: `${theme.inputStyles.lineHeight - theme.inputStyles.iconFontSize}px`,

                transition: 'all .3s',

                fontSize: `${theme.inputStyles.iconFontSize}px`,

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
                },
            },
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
            alignContent: 'flex-start',
        },

        '& > $errorsContainer': {
            color: theme.inputStyles.attentionColor,

            '& > $errorContainer': {
                marginTop: '2px',

                fontFamily: theme.inputStyles.fontStack,
                fontSize: theme.inputStyles.errorFontSize,
            }
        },

        '& > $warningsContainer': {
            color: theme.inputStyles.activeColor,

            '& > $warningContainer': {
                marginTop: '2px',

                fontFamily: theme.inputStyles.fontStack,
                fontSize: theme.inputStyles.errorFontSize,
            },
        },
    },

    inputContainer: {},
    inputControl: {},
    inputControlLabel: {},
    inputControlIcon: {},

    subMessagesContainer: {},

    errorsContainer: {},
    errorContainer: {},

    warningsContainer: {},
    warningContainer: {},
});

/**
 * Text input component (variant 1) styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
class FormTextInputVariant1Class extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'FormTextInputVariant1Class';

    static defaultProps = {
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

        onChange: () => {},
        onFocus: () => {},
        onBlur: () => {},

        componentContainerClassName: '',
        iconClassNames: '',

        componentContainerStyles: {},

        style: {},
        classes: {}
    };


    // endregion

    // region private props
    // endregion

    // region constructor
    constructor(props: PropsTypes): void {
        super(props);
        const self: any = this;

        self._renderTextAreaInput = self._renderTextAreaInput.bind(this);
        self._renderTextInput = self._renderTextInput.bind(this);
    }

    // endregion

    // region lifecycle methods
    // endregion

    // region style accessors
    _getComponentContainerStyles(): CSSStylesType {
        const componentContainerStyles: CSSStylesType = defaultTo(FormTextInputVariant1Class.defaultProps.componentContainerStyles)
        (this.props.componentContainerStyles);

        const style: CSSStylesType = defaultTo(FormTextInputVariant1Class.defaultProps.style)
        (this.props.style);

        return Object.assign({}, componentContainerStyles, style);
    }

    _getWarningContainerClassName(): string {
        return this.props.classes.warningContainer;
    }

    _getWarningsContainerClassName(): string {
        return classNames(
            this.props.classes.subMessagesContainer,
            this.props.classes.warningsContainer,
        );
    }

    _getErrorContainerClassName(): string {
        return classNames(
            this.props.classes.subMessagesContainer,
            this.props.classes.errorContainer
        );
    }

    _getErrorsContainerClassName(): string {
        return this.props.classes.errorsContainer;
    }

    _getIconClassNames(): string {
        const hasFocus: boolean = this._isInputHasFocus();
        const hasErrors: boolean = this._hasErrors();

        return classNames(
            this._getIconClassName(),
            this.props.classes.inputControlIcon,
            {'focus': hasFocus},
            {'error': hasErrors},
            {'readOnly': this._isReadOnly()},
            {'disabled': this._isDisabled()}
        );
    }

    _getLabelClasses(): string {
        const isActive: boolean = this._isInputActive();
        const hasFocus: boolean = this._isInputHasFocus();
        const hasErrors: boolean = this._hasErrors();

        return classNames(
            this._inputControlLabelClassName(),
            {'active': isActive},
            {'passive': !isActive},
            {'focus': hasFocus},
            {'error': hasErrors},
            {'readOnly': this._isReadOnly()},
            {'disabled': this._isDisabled()}
        );
    }

    _getInputClasses(): string {
        const hasFocus: boolean = this._isInputHasFocus();
        const isTextArea: boolean = this._isTextArea();

        return classNames(
            this._getInputControlClassName(),
            {'scrollable': isTextArea},
            {'noneScrollable': !isTextArea},
            {'focus': hasFocus},
            {'error': this._hasErrors()},
            {'readOnly': this._isReadOnly()},
            {'disabled': this._isDisabled()},
        );
    }

    _inputControlLabelClassName(): string {
        return this.props.classes.inputControlLabel;
    }

    _getInputControlClassName(): string {
        return this.props.classes.inputControl;
    }

    _getInputContainerClassName(): string {
        return this.props.classes.inputContainer;
    }

    _getComponentContainerClasses(): string {
        const userComponentContainerClassName: string = defaultTo(FormTextInputVariant1Class.defaultProps.componentContainerClassName)
        (this.props.componentContainerClassName);

        return classNames(this.props.classes.componentContainer, userComponentContainerClassName);
    }

    // endregion

    // region label accessors
    // endregion

    // region state accessors
    // endregion

    // region prop accessors
    _hasWarnings(): boolean {
        const errorsIfTouched: boolean =  this._getWarningsIfTouched();

        if (and(errorsIfTouched, not(this._isTouched()))) {
            return false;
        }

        return and(complement(isNil)(this._getWarning()), complement(isEmpty)(this._getWarning()));
    }

    _hasErrors(): boolean {
        const errorsIfTouched: boolean = this._getErrorsIfTouched();

        if (and(errorsIfTouched, not(this._isTouched()))) {
            return false;
        }

        return and(complement(isNil)(this._getError()), complement(isEmpty)(this._getError()));
    }

    _isInputHasValue(): boolean {
        const value: string = this._getValue();
        const initial: string = this._getInitial();
        const placeholder: string = this._getPlaceholder();


        const isInitialValueEmpty: boolean = isEmpty(initial);
        const isValueEmpty: boolean = isEmpty(value);

        const hasRealValue = (this._isPristine() && !isInitialValueEmpty) || (this._isDirty() && !isValueEmpty);
        const hasPlaceholder = complement(isEmpty)(placeholder);

        return hasRealValue || hasPlaceholder;
    }

    _isInputEditable(): boolean {
        return !(this._isReadOnly() || this._isDisabled());
    }

    _isInputHasFocus(): boolean {
        return this._isActive() && this._isInputEditable();
    }

    _getIconClassName(): string {
        return defaultTo(FormTextInputVariant1Class.defaultProps. iconClassNames)
        (this.props. iconClassNames);
    }

    _getOnBlurCallback(): GenericCallbackType {
        return defaultTo(FormTextInputVariant1Class.defaultProps.onBlur)
        (this.props.onBlur);
    }

    _getOnFocusCallback(): GenericCallbackType {
        return defaultTo(FormTextInputVariant1Class.defaultProps.onFocus)
        (this.props.onFocus);
    }

    _getOnChangeCallback(): GenericCallbackType {
        return defaultTo(FormTextInputVariant1Class.defaultProps.onChange)
        (this.props.onChange);
    }

    _getLabel(): string {
        return defaultTo(FormTextInputVariant1Class.defaultProps.label)
        (this.props.label);
    }

    _getPlaceholder(): string {
        const placeholder: string = defaultTo(FormTextInputVariant1Class.defaultProps.placeholder)
        (this.props.placeholder);

        if (typeof placeholder !== 'string') {
            return toString(placeholder);
        }

        return placeholder;
    }

    _getWarning(): string | Array<string> | null {
        return defaultTo(FormTextInputVariant1Class.defaultProps.warning)
        (this.props.warning);
    }

    _getError(): null | string | Array<string> {
        return defaultTo(FormTextInputVariant1Class.defaultProps.error)
        (this.props.error);
    }

    _getErrorsIfTouched(): boolean {
        return defaultTo(FormTextInputVariant1Class.defaultProps.errorsIfTouched)
        (this.props.errorsIfTouched);
    }

    _getWarningsIfTouched(): boolean {
        return defaultTo(FormTextInputVariant1Class.defaultProps.warningsIfTouched)
        (this.props.warningsIfTouched);
    }

    _isDirty(): boolean {
        return defaultTo(FormTextInputVariant1Class.defaultProps.dirty)
        (this.props.dirty);
    }

    _isPristine(): boolean {
        return defaultTo(FormTextInputVariant1Class.defaultProps.pristine)
        (this.props.pristine);
    }

    _isTouched(): boolean {
        return defaultTo(FormTextInputVariant1Class.defaultProps.touched)
        (this.props.touched);
    }

    _isInputActive(): boolean {
        return this._isInputHasValue() || this._isInputHasFocus();
    }

    _isActive(): boolean {
        return defaultTo(FormTextInputVariant1Class.defaultProps.active)
        (this.props.active);
    }

    _isDisabled(): boolean {
        return defaultTo(FormTextInputVariant1Class.defaultProps.disabled)
        (this.props.disabled);
    }

    _isReadOnly(): boolean {
        return defaultTo(FormTextInputVariant1Class.defaultProps.readOnly)
        (this.props.readOnly);
    }

    _isTextArea(): boolean {
        return equals('textarea', this._getTextInputType())
    }

    _getInitial(): string {
        const initialValue: string = defaultTo(FormTextInputVariant1Class.defaultProps.initial)
        (this.props.initial);

        if (typeof initialValue !== 'string') {
            return toString(initialValue);
        }

        return initialValue;
    }


    _getValue(): string {
        const inputValue: string = defaultTo(FormTextInputVariant1Class.defaultProps.value)
        (this.props.value);

        if (typeof inputValue !== 'string') {
            return toString(inputValue);
        }

        return inputValue;
    }

    _getName(): string {
        return this.props.name;
    }

    _getId(): string {
        return this.props.id;
    }

    _getTextInputType(): InputTypes {
        return defaultTo(FormTextInputVariant1Class.defaultProps.type)
        (this.props.type);
    }

    // endregion

    // region handlers
    // endregion

    // region render methods
    _renderWarnings(warnings: Array<string>): React.Node {
        return addIndex(map)(
            (error: string, index: number) => <div
                key={`warning_${index}`}
                className={this._getWarningContainerClassName()}
            >{error}</div>,
            warnings
        );
    }

    _renderWarningsContainer(): React.Node {
        let warnings: string | Array<string> | null = this._getWarning();

        if (warnings === null || isNil(warnings) || !this._hasWarnings()) {
            return null;
        } else if (typeof warnings === 'string') {
            warnings = [warnings];
        }

        return (<div className={this._getWarningsContainerClassName()}>
            {this._renderWarnings(warnings)}
        </div>);
    }

    _renderErrors(errors: Array<string>): React.Node {
        return addIndex(map)(
            (error: string, index: number) => <div
                key={`error_${index}`}
                className={this._getErrorContainerClassName()}
            >{error}</div>,
            errors
        );
    }

    _renderErrorsContainer(): React.Node {
        let errors: string | Array<string> | null = this._getError();

        if (errors === null || isNil(errors) || !this._hasErrors()) {
            return null;
        } else if (typeof errors === 'string') {
            errors = [errors];
        }

        return (<div className={this._getErrorsContainerClassName()}>
            {this._renderErrors(errors)}
        </div>);
    }

    _renderIcon(): ?React.Node  {
        const iconClassName: string = this._getIconClassName();

        if (isEmpty(iconClassName)) {
            return;
        }

        return iconClassName ? <i className={this._getIconClassNames()}/> : undefined;
    }

    _renderLabel(): React.Node {
        return <label
            className={this._getLabelClasses()}
            htmlFor={this._getId()}
        >
            {this._getLabel()}
        </label>;
    }

    _renderTextInput(): React.Node {
        const readOnlyParam: ?string = this._isReadOnly() ? 'readonly' : undefined;
        const disabledParam: ?string = this._isDisabled() ? 'disabled' : undefined;

        return <input
            className={this._getInputClasses()}
            type={this._getTextInputType()}
            value={this._getValue()}
            placeholder={this._getPlaceholder()}
            name={this._getName()}
            id={this._getId()}

            onChange={this._getOnChangeCallback()}
            onFocus={this._getOnFocusCallback()}
            onBlur={this._getOnBlurCallback()}

            readOnly={readOnlyParam}
            disabled={disabledParam}
        />;
    }

    _renderTextAreaInput(): React.Node {
        const readOnlyParam: ?string = this._isReadOnly() ? 'readonly' : undefined;
        const disabledParam: ?string = this._isDisabled() ? 'disabled' : undefined;

        const inputValue: string = this._getValue();
        const {rows} = this.props;

        const numberOfLines: number = isNil(rows) ? inputValue.replace(/^\s*[\r\n]/gm, '').split(/\r|\r\n|\n/).length : rows;
        const flexBasis: number = (numberOfLines * this.props.theme.inputStyles.lineHeight) + bottomBorderWidth;

        return <textarea
            rows={numberOfLines}
            className={this._getInputClasses()}

            value={inputValue}
            placeholder={this._getPlaceholder()}
            name={this._getName()}
            id={this._getId()}

            onChange={this._getOnChangeCallback()}
            onFocus={this._getOnFocusCallback()}
            onBlur={this._getOnBlurCallback()}

            style={{
                flexBasis: `${flexBasis}px`
            }}

            readOnly={readOnlyParam}
            disabled={disabledParam}
        />;
    }

    _renderInput(): React.Node {
        return ifElse(
            equals(true),
            this._renderTextAreaInput,
            this._renderTextInput
        )(this._isTextArea());
    }

    _renderInputContainer(): React.Node {
        return  <div className={this._getInputContainerClassName()}>
            {this._renderInput()}
            {this._renderLabel()}
            {this._renderIcon()}
        </div>;
    }

    _renderComponentContainer(): React.Node {
        return (
            <div
                className={this._getComponentContainerClasses()}
                style={this._getComponentContainerStyles()}
            >
                {this._renderInputContainer()}
                {this._renderErrorsContainer()}
                {this._renderWarningsContainer()}
            </div>
        );
    }

    render(): React.Node {
        return this._renderComponentContainer();
    }

    // endregion
}

const FormTextInputVariant1Component = injectSheet(styles, {injectTheme: true})(FormTextInputVariant1Class);
FormTextInputVariant1Component.displayName = 'FormTextInputVariant1Component';

// exports
export {FormTextInputVariant1Class, FormTextInputVariant1Component}
export default FormTextInputVariant1Component;
