'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import {isNil, isEmpty, is, complement, clone, toString} from 'ramda';
import {generateRandomIdNumber} from '@webfuturistics/design_components';

import type {FieldProps} from 'redux-form';

// local imports
import type {ReduxFormFieldComponentMetaDataPropsTypes, ReduxFormFieldComponentInputDataPropsTypes} from './../../types/redux_form_types';

// type definitions
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
     * Placeholder text used as hint for the user of how appropriate data should look like
     */

    placeholder?: ?string,

    /**
     * Input label
     */

    label?: ?string,

    /**
     * Class names which will be added to the icon container of the current component
     */

    iconClassNames?: ?string,

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
    classes: any
};

type StateTypes = {};

// styles definition
const topAdditionalPadding = 7;
const iconAdditionalPadding = 2;

const styles = theme => ({
    componentOuterContainer: {
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

        padding: `${theme.inputStyles.inputCommonLabelActiveFontSize + topAdditionalPadding}px 0px 0px 0px`,

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

                flexBasis: `${theme.inputStyles.inputCommonFontSize}px`,
                flexShrink: '0',
                flexGrow: '0',

                margin: '0 0 0 0',

                border: 'none',
                borderBottom: `1px solid ${theme.inputStyles.inputCommonInactiveColor}`,
                borderRadius: '0',

                padding: '0',

                fontFamily: theme.inputStyles.inputCommonFontFamily,
                fontSize: `${theme.inputStyles.inputCommonFontSize}px`,

                boxShadow: 'none',

                transition: 'all .3s',

                lineHeight: 'normal',

                backgroundColor: theme.inputStyles.inputCommonBGColor,
                color: theme.inputStyles.inputCommonInactiveColor,

                '&:-webkit-autofill': {
                    '-webkit-box-shadow': '0 0 0 1000px transparent inset !important'
                },

                '&::-webkit-input-placeholder': {
                    color: theme.inputStyles.inputCommonDisabledColor
                },

                '&::-moz-placeholder': {
                    color: theme.inputStyles.inputCommonDisabledColor
                },

                '&::-ms-input-placeholder': {
                    color: theme.inputStyles.inputCommonDisabledColor
                },

                '&.focus': {
                    borderColor: theme.inputStyles.inputCommonActiveColor,
                    color: theme.inputStyles.inputCommonActiveColor
                },

                '&.readOnly': {
                    color: theme.inputStyles.inputCommonReadOnlyColor,
                    borderBottom: `1px solid ${theme.inputStyles.inputCommonReadOnlyColor}`
                },

                '&.disabled': {
                    color: theme.inputStyles.inputCommonDisabledColor,
                    borderBottom: `1px dotted ${theme.inputStyles.inputCommonDisabledColor}`
                },
            },

            '& > $inputControlLabel': {
                position: 'absolute',

                top: `${theme.inputStyles.inputCommonFontSize - theme.inputStyles.inputCommonLabelInactiveFontSize}px`,
                left: '0px',

                fontFamily: theme.inputStyles.inputCommonFontFamily,
                fontSize: `${theme.inputStyles.inputCommonLabelActiveFontSize}px`,

                cursor: 'text',
                color: theme.inputStyles.inputCommonLabelColor,

                transition: '.2s ease-out',

                '&.active': {
                    fontSize: `${theme.inputStyles.inputCommonLabelActiveFontSize}px`,
                    '-webkit-transform': 'translateY(-145%)',
                    transform: 'translateY(-145%)'
                },

                '&.passive': {
                    fontSize: `${theme.inputStyles.inputCommonLabelInactiveFontSize}px`,
                    '-webkit-transform': 'translateY(0%)',
                    transform: 'translateY(0%)'
                },

                '&.focus': {
                    color: theme.inputStyles.inputCommonActiveColor
                },

                '&.readOnly': {
                    color: theme.inputStyles.inputCommonReadOnlyColor
                },

                '&.disabled': {
                    color: theme.inputStyles.inputCommonDisabledColor,
                },
            },

            '& > $inputControlLabel:first-letter': {
                textTransform: 'capitalize',
            },

            '& > i': {
                position: 'absolute',

                left: `calc(100%  - ${theme.inputStyles.inputCommonIconFontSize + iconAdditionalPadding}px)`,
                top: `${theme.inputStyles.inputCommonFontSize - theme.inputStyles.inputCommonIconFontSize}px`,

                transition: 'all .3s',

                fontSize: `${theme.inputStyles.inputCommonIconFontSize}px`,
                color: theme.inputStyles.inputCommonInactiveColor,

                '&.focus': {
                    color: theme.inputStyles.inputCommonActiveColor
                },

                '&.readOnly': {
                    color: theme.inputStyles.inputCommonReadOnlyColor
                },

                '&.disabled': {
                    color: theme.inputStyles.inputCommonDisabledColor
                },
            }
        }
    },

    inputContainer: {},
    inputControl: {},
    inputControlLabel: {}
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
class FormTextInputComponent extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'FormTextInputComponent';

    static defaultProps = {
        type: 'text',

        readOnly: false,
        disabled: false,

        placeholder: '',
        label: '',

        iconClassNames: '',

        meta: {
            initial: '',

            active: false,
            pristine: true,
            dirty: false
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
    _getComponentOuterContainerClasses(): string {
        return this.props.classes.componentOuterContainer;
    }

    _getInputClasses(): string {
        const hasFocus: boolean = this._isInputHasFocus();
        const {readOnly, disabled}: {readOnly: ?boolean, disabled: ?boolean} = this.props;

        return classNames(
            this.props.classes.inputControl,
            {'focus': hasFocus},
            {'readOnly': readOnly},
            {'disabled': disabled}
        );
    }

    _getLabelClasses(): string {
        const isActive: boolean = this._isInputActive();
        const hasFocus: boolean = this._isInputHasFocus();
        const {readOnly, disabled}: {readOnly: ?boolean, disabled: ?boolean} = this.props;

        return classNames(
            this.props.classes.inputControlLabel,
            {'active': isActive},
            {'passive': !isActive},
            {'focus': hasFocus},
            {'readOnly': readOnly},
            {'disabled': disabled}
        );
    }

    _getIconClasses(): string {
        const hasFocus: boolean = this._isInputHasFocus();
        const {readOnly, disabled}: {readOnly: ?boolean, disabled: ?boolean} = this.props;

        return classNames(
            this.props.iconClassNames,
            {'focus': hasFocus},
            {'readOnly': readOnly},
            {'disabled': disabled}
        );
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
        const {active}: {active: boolean} = this._getMetaData();
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
        return isNil(meta) ? clone(FormTextInputComponent.defaultProps.meta) : meta;
    }

    _getInputData(): ReduxFormFieldComponentInputDataPropsTypes {
        const {input}: {input: ?ReduxFormFieldComponentInputDataPropsTypes} = this.props;
        return isNil(input) ? clone(FormTextInputComponent.defaultProps.input) : input;
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
        </label>
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
        />
    }

    _renderInputContainer(): React.Node {
        return  <div className={this.props.classes.inputContainer}>
            {this._renderInput()}
            {this._renderLabel()}
            {this._renderIcon()}
        </div>
    }

    render(): React.Node {
        return (
            <div className={this._getComponentOuterContainerClasses()}>
                {this._renderInputContainer()}
            </div>
        );
    }

    // endregion
}

// exports
export default injectSheet(styles)(FormTextInputComponent);