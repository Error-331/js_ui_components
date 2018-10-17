'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import {isNil, isEmpty, is, and, not, defaultTo, complement, addIndex, clone, toString, map} from 'ramda';
import {generateRandomIdNumber} from '@webfuturistics/design_components';

import type {FieldProps} from 'redux-form';

// local imports
import type {ReduxFormFieldComponentMetaDataPropsTypes, ReduxFormFieldComponentInputDataPropsTypes} from './../../types/redux_form_types';

import {MainThemeContext} from './../../theming';

// type definitions
type CSSStylesType = {
    [string]: mixed
};

type InputTypes = 'text' | 'password';

export type FormTextInputTypes = {

    /**
     * Input type (text or password)
     */

    type?: InputTypes,

    /**
     * Flag that dictates whether component should be readable only (text can be readable but not editable)
     */

    readOnly?: ?boolean,

    /**
     * Flag that dictates whether component should be disabled (text can not be readable or editable)
     */

    disabled?: ?boolean,

    /**
     * Flag that dictates whether errors should be shown only after user interacts with input or always (e.g. even if initial value is set)
     */

    errorsIfTouched?: boolean,

    /**
     * Flag that dictates whether warnings should be shown only after user interacts with input or always (e.g. even if initial value is set)
     */

    warningsIfTouched?: boolean,

    /**
     * Placeholder text used as hint for the user of how appropriate data should look like
     */

    placeholder?: ?string,

    /**
     * Input label
     */

    label?: ?string,

    /**
     * Class names which will be added to the component container (main outer container)
     */

    componentContainerClassNames?: string,

    /**
     * Class names which will be added to the icon container of the current component
     */

    iconClassNames?: ?string,

    /**
     * Styles for component container (main outer container) of the form text input component
     */

    componentContainerStyles?: CSSStylesType,

    /**
     * 'Redux-form' field-component metadata
     *
     * @ignore
     */

    meta?: ?ReduxFormFieldComponentMetaDataPropsTypes,

    /**
     * 'Redux-form' field-component data
     *
     * @ignore
     */

    input?: ?ReduxFormFieldComponentInputDataPropsTypes,
};

type PropsTypes = FieldProps & FormTextInputTypes & {
    /**
     * JSS inner classes
     *
     * @ignore
     */

    classes: any
};

type StateTypes = {};

// styles definition
const topAdditionalPadding = 7;
const iconAdditionalPadding = 2;

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
            flexShrink: '1',
            flexGrow: '0',

            flexDirection: 'column',
            flexWrap: 'nowrap',

            justifyContent: 'flex-start',
            alignItems: 'stretch',
            alignContent: 'flex-start',

            '& > $inputControl': {
                boxSizing: 'border-box',

                flexBasis: `${theme.inputStyles.fontSize}px`,
                flexShrink: '0',
                flexGrow: '0',

                margin: '0 0 0 0',

                border: 'none',
                borderBottom: `1px solid ${theme.inputStyles.inactiveColor}`,
                borderRadius: '0',

                padding: '0',

                fontFamily: theme.inputStyles.fontStack,
                fontSize: `${theme.inputStyles.fontSize}px`,

                boxShadow: 'none',

                transition: 'all .3s',

                lineHeight: 'normal',

                backgroundColor: theme.inputStyles.bgColor,
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

                '&.focus': {
                    borderColor: theme.inputStyles.activeColor,
                    color: theme.inputStyles.activeColor
                },

                '&.error': {
                    color: theme.inputStyles.attentionColor,
                    borderBottom: `1px solid ${theme.inputStyles.attentionColor}`
                },

                '&.readOnly': {
                    color: theme.inputStyles.readOnlyColor,
                    borderBottom: `1px solid ${theme.inputStyles.readOnlyColor}`
                },

                '&.disabled': {
                    color: theme.inputStyles.disabledColor,
                    borderBottom: `1px dotted ${theme.inputStyles.disabledColor}`
                },
            },

            '& > $inputControlLabel': {
                position: 'absolute',

                top: `${theme.inputStyles.fontSize - theme.inputStyles.labelInactiveFontSize}px`,
                left: '0px',

                fontFamily: theme.inputStyles.fontStack,
                fontSize: `${theme.inputStyles.labelActiveFontSize}px`,

                cursor: 'text',
                color: theme.inputStyles.labelColor,

                transition: '.2s ease-out',

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

            '& > i': {
                position: 'absolute',

                left: `calc(100%  - ${theme.inputStyles.iconFontSize + iconAdditionalPadding}px)`,
                top: `${theme.inputStyles.fontSize - theme.inputStyles.iconFontSize}px`,

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
            alignContent: 'flex-start',
        },

        '& > $errorsContainer': {
            '& > $errorContainer': {
                marginTop: '2px',

                fontFamily: theme.inputStyles.fontStack,
                fontSize: theme.inputStyles.errorFontSize,

                color: theme.inputStyles.attentionColor,
            }
        },

        '& > $warningsContainer': {
            '& > $warningContainer': {
                marginTop: '2px',

                fontFamily: theme.inputStyles.fontStack,
                fontSize: theme.inputStyles.errorFontSize,

                color: theme.inputStyles.activeColor,
            }
        },
    },

    inputContainer: {},
    inputControl: {},
    inputControlLabel: {},

    subMessagesContainer: {},

    errorsContainer: {},
    errorContainer: {},

    warningsContainer: {},
    warningContainer: {},
});

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
@injectSheet(styles)
export class FormTextInputClass extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'FormTextInputClass';

    static defaultProps = {
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
            error: null,
        },

        input: {
            name: '',
            value: '',

            onChange: () => {},
            onFocus: () => {},
            onBlur: () => {},
            onDrop: () => {},
            onDragStart: () => {},
            onFocus: () => {},
        },

        classes: {}
    };

    _id: string;

    // endregion

    // region constructor
    constructor(props: PropsTypes): void {
        super(props);

        this._id = this._createInputId();
    }

    // endregion

    // region lifecycle methods
    // endregion

    // region style accessors
    _getComponentContainerClasses(): string {
        const userComponentContainerClassNames: string = defaultTo('')(this.props.componentContainerClassNames);
        return classNames(this.props.classes.componentContainer, userComponentContainerClassNames);
    }

    _getInputClasses(): string {
        const hasFocus: boolean = this._isInputHasFocus();
        const {readOnly, disabled}: {readOnly: ?boolean, disabled: ?boolean} = this.props;

        return classNames(
            this.props.classes.inputControl,
            {'focus': hasFocus},
            {'error': this._hasErrors()},
            {'readOnly': readOnly},
            {'disabled': disabled},
        );
    }

    _getLabelClasses(): string {
        const isActive: boolean = this._isInputActive();
        const hasFocus: boolean = this._isInputHasFocus();
        const hasErrors: boolean = this._hasErrors();
        const {readOnly, disabled}: {readOnly: ?boolean, disabled: ?boolean} = this.props;

        return classNames(
            this.props.classes.inputControlLabel,
            {'active': isActive},
            {'passive': !isActive},
            {'focus': hasFocus},
            {'error': hasErrors},
            {'readOnly': readOnly},
            {'disabled': disabled}
        );
    }

    _getIconClasses(): string {
        const hasFocus: boolean = this._isInputHasFocus();
        const hasErrors: boolean = this._hasErrors();
        const {readOnly, disabled}: {readOnly: ?boolean, disabled: ?boolean} = this.props;

        return classNames(
            this.props.iconClassNames,
            {'focus': hasFocus},
            {'error': hasErrors},
            {'readOnly': readOnly},
            {'disabled': disabled}
        );
    }

    _getComponentContainerStyles(): CSSStylesType {
        return defaultTo({})(this.props.componentContainerStyles);
    }

    _getErrorsContainerClassName(): string {
        return this.props.classes.errorsContainer;
    }

    _getErrorContainerClassName(): string {
        return classNames(
            this.props.classes.subMessagesContainer,
            this.props.classes.errorContainer
        );
    }

    _getWarningsContainerClassName(): string {
        return classNames(
            this.props.classes.subMessagesContainer,
            this.props.classes.warningsContainer
        );
    }

    _getWarningContainerClassName(): string {
        return this.props.classes.warningContainer;
    }

    // endregion

    // region label accessors
    _getLabel(): ?string {
        return this.props.label;
    }

    // endregion

    // region state accessors
    _createInputId(): string {
        const {name} = this._getInputData();
        const randomIdNumber: number = generateRandomIdNumber();

        if (isNil(name)) {
            throw new Error('Name cannot be null, cannot create input ID');
        }

        return `text_input_${name}_${randomIdNumber}`;
    }

    // endregion

    // region prop accessors
    _isInputHasFocus(): boolean {
        const {active} = this._getMetaData();
        return active && this._isInputEditable();
    }

    _isInputActive(): boolean {
        return this._isInputHasValue() || this._isInputHasFocus();
    }

    _isInputEditable(): boolean {
        const {readOnly, disabled}: {readOnly: ?boolean, disabled: ?boolean} = this.props;
        return !(readOnly || disabled);
    }

    _isInputHasValue(): boolean {
        const {initial, pristine, dirty}: ReduxFormFieldComponentMetaDataPropsTypes = this._getMetaData();
        const {value} = this._getInputData();
        const {placeholder} = this.props;

        const preparedInitial: string = is(Number, initial) ? toString(initial) : initial;
        const preparedValue: string = is(Number, value) ? toString(value) : value;

        const isInitialValueEmpty: boolean = isNil(initial) || isEmpty(preparedInitial);
        const isValueEmpty: boolean = isNil(value) || isEmpty(preparedValue);

        const hasRealValue = (pristine && !isInitialValueEmpty) || (dirty && !isValueEmpty);
        const hasPlaceholder = complement(isEmpty)(placeholder);

        return hasRealValue || hasPlaceholder;
    }

    _getMetaData(): ReduxFormFieldComponentMetaDataPropsTypes {
        const {meta}: {meta: ?ReduxFormFieldComponentMetaDataPropsTypes} = this.props;
        return isNil(meta) ? clone(FormTextInputClass.defaultProps.meta) : meta;
    }

    _getInputData(): ReduxFormFieldComponentInputDataPropsTypes {
        const {input}: {input: ?ReduxFormFieldComponentInputDataPropsTypes} = this.props;
        return isNil(input) ? clone(FormTextInputClass.defaultProps.input) : input;
    }

    _getErrorsIfTouched(): boolean {
        return defaultTo(FormTextInputClass.defaultProps.errorsIfTouched)(this.props.errorsIfTouched);
    }

    _getWarningsIfTouched(): boolean {
        return defaultTo(FormTextInputClass.defaultProps.warningsIfTouched)(this.props.warningsIfTouched);
    }

    _hasErrors(): boolean {
        const {touched, error} = this._getMetaData();
        const errorsIfTouched: boolean = this._getErrorsIfTouched();

        if (and(errorsIfTouched, not(touched))) {
            return false;
        }

        return and(complement(isNil)(error), complement(isEmpty)(error));
    }

    _hasWarnings(): boolean {
        const {touched, warning} = this._getMetaData();
        const warningsIfTouched: boolean = this._getWarningsIfTouched();

        if (and(warningsIfTouched, not(touched))) {
            return false;
        }

        return complement(isNil)(warning);
    }

    _getWarning(): string | Array<string> | null {
        const {warning} = this._getMetaData();

        if (isNil(warning)) {
            return null;
        }

        return warning;
    }

    _getError(): string | Array<string> | null {
        const {error} = this._getMetaData();

        if (isNil(error)) {
            return null;
        }

        return error;
    }

    // endregion

    // region handlers
    // endregion

    // region render methods
    _renderIcon(): ?React.Node  {
        if (isNil(this.props.iconClassNames)) {
            return;
        }

        const iconClassNames: string = this._getIconClasses();
        return this.props.iconClassNames ? <i className={iconClassNames}/> : undefined;
    }

    _renderLabel(): React.Node {
        return <label
            className={this._getLabelClasses()}
            htmlFor={this._id}
        >
            {this._getLabel()}
        </label>;
    }

    _renderInput(): React.Node {
        const {type, readOnly, disabled, placeholder}: {type?: InputTypes, readOnly: ?boolean, disabled: ?boolean, placeholder: ?string} = this.props;
        const {value, name, onChange, onFocus, onBlur}: ReduxFormFieldComponentInputDataPropsTypes = this._getInputData();

        const readOnlyParam: ?string = readOnly ? 'readonly' : undefined;
        const disabledParam: ?string = disabled ? 'disabled' : undefined;

        return <input
            className={this._getInputClasses()}

            type={type}
            value={value}
            placeholder={placeholder}
            name={name}
            id={this._id}

            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}

            readOnly={readOnlyParam}
            disabled={disabledParam}
        />;
    }

    _renderInputContainer(): React.Node {
        return  <div className={this.props.classes.inputContainer}>
            {this._renderInput()}
            {this._renderLabel()}
            {this._renderIcon()}
        </div>;
    }

    _renderWarnings(): React.Node {
        return null;
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

        if (isNil(errors) || !this._hasErrors()) {
            return null;
        } else if (typeof errors === 'string') {
            errors = [errors];
        }

        return (<div className={this._getErrorsContainerClassName()}>
            {this._renderErrors(errors)}
        </div>);
    }

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

        if (isNil(warnings) || !this._hasWarnings()) {
            return null;
        } else if (typeof warnings === 'string') {
            warnings = [warnings];
        }

        return (<div className={this._getWarningsContainerClassName()}>
            {this._renderWarnings(warnings)}
        </div>);
    }

    render(): React.Node {
        return (
            <div className={this._getComponentContainerClasses()} style={this._getComponentContainerStyles()}>
                {this._renderInputContainer()}
                {this._renderErrorsContainer()}
                {this._renderWarningsContainer()}
            </div>
        );
    }

    // endregion
}

// exports
export function FormTextInputComponent(props: PropsTypes) {
    return (
        <MainThemeContext.Consumer>
            {windowDimensions => <FormTextInputClass {...props} {...windowDimensions} />}
        </MainThemeContext.Consumer>
    );
}


FormTextInputComponent.displayName = 'FormTextInputComponent';