'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import {always, equals, isNil, defaultTo, ifElse, clone} from 'ramda';
import {generateRandomIdNumber} from '@webfuturistics/design_components';

import type {FieldProps} from 'redux-form';

// local imports
import type {ReduxFormFieldComponentMetaDataPropsTypes, ReduxFormFieldComponentInputDataPropsTypes} from './../../types/redux_form_types';

// type definitions
type PropsTypes = FieldProps & {
    /**
     * Flag that dictates whether component should be disabled
     */

    disabled?: ?boolean,

    /**
     * Value that indicates possible appearance of radio button which can be 'small' or 'medium'
     */

    appearance?: 'small' | 'medium',

    /**
     * Checkbox label
     */

    label?: string,

    /**
     * Value that indicates where label should be placed on left side of the checkbox or on the right
     */

    labelPosition?: 'left' | 'right',

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

            fontFamily: theme.inputStyles.inputCommonFontFamily,
            fontSize: theme.inputStyles.inputCommonFontSize,

            color: theme.inputStyles.inputCommonLabelColor,

            '&.disabled': {
                color: theme.inputStyles.inputCommonDisabledColor
            }
        },

        '& > $checkboxLeftLabel': {
            paddingRight: `${theme.inputStyles.inputSwitchLabelOffset}px`,
        },

        '& > $checkboxRightLabel': {
            paddingLeft: `${theme.inputStyles.inputSwitchLabelOffset}px`,
        },

        '& > $inputControl': {
            display: 'none',

            '&:checked + $inputControlLabel > $inputControlIcon': {
                transform: 'scale(1)',
            },

            '&:checked + $inputControlLabel.disabled > $inputControlIcon': {
                backgroundColor: theme.inputStyles.inputCommonDisabledColor
            },
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
            border: `2px solid ${theme.inputStyles.inputSwitchCommonSliderBodyBGColorActive}`,

            '& > $inputControlIcon': {
                flexBasis: 'auto',
                flexShrink: 0,
                flexGrow: 1,

                borderRadius: '50%',

                backgroundColor: theme.inputStyles.inputSwitchCommonSliderHandleActive,

                transform: 'scale(0)',

                transition: 'all .3s ease',
                transitionProperty: 'transform, border-color'
            }
        },

        '& > $inputControlLabel.disabled': {
            borderColor: theme.inputStyles.inputCommonDisabledColor
        }
    },

    checkboxLabel: {},
    checkboxLeftLabel: {},
    checkboxRightLabel: {},

    inputControl: {},
    inputControlLabel: {},
    inputControlIcon: {},
});

/**
 * Radio button input component styled according to material-UI guidelines.
 * Component is intended to be used as a parameter for ['Redux-form' Field component](#reduxformradiobuttoninputcomponent).
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
class FormRadioButtonInputComponent extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'FormRadioButtonInputComponent';

    static defaultProps = {
        disabled: false,

        leftLabel: '',
        rightLabel: '',

        input: {
            name: '',
            value: '',

            onChange: () => {},
            onFocus: () => {},
            onBlur: () => {}
        },

        classes: {}
    };

    _id: ?string = null;

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
    _getLabelClasses(): string {
        const {disabled, labelPosition, classes: {checkboxLabel, checkboxLeftLabel, checkboxRightLabel}} = this.props;

        return classNames(
            checkboxLabel,
            ifElse(equals('left'), always(checkboxLeftLabel), always(checkboxRightLabel))(labelPosition),
            {'disabled': disabled}
        );
    }

    _getInputClasses(): string {
        const {disabled}: {disabled: ?boolean} = this.props;

        return classNames(
            this.props.classes.inputControl,
            {'disabled': disabled}
        );
    }

    _getInputControlLabelClasses(): string {
        const {disabled}: {disabled: ?boolean} = this.props;

        return classNames(
            this.props.classes.inputControlLabel,
            {'disabled': disabled}
        );
    }

    // endregion

    // region label accessors
    // endregion

    // region state accessors
    _createInputId(): string {
        const {name} = this._getInputData();
        const randomIdNumber: number = generateRandomIdNumber();

        if (isNil(name)) {
            throw new Error('Name cannot be null, cannot create input ID');
        }

        return `radio_button_input_${name}_${randomIdNumber}`;
    }

    // endregion

    // region prop accessors
    _isChecked(): boolean {
        const {checked}: ReduxFormFieldComponentInputDataPropsTypes = this._getInputData();
        return defaultTo(false)(checked);
    }

    _getInputData(): ReduxFormFieldComponentInputDataPropsTypes {
        const {input} = this.props;
        return isNil(input) ? clone(FormRadioButtonInputComponent.defaultProps.input) : input;
    }

    // endregion

    // region handlers
    // endregion

    // region render methods
    _renderLabel(): ?React.Node {
        const {labelPosition, label} = this.props;

        if (isNil(labelPosition) || isNil(label)) {
            return null;
        }

        return <div className={this._getLabelClasses()}>
            {label}
        </div>;
    }

    _renderInputIcon(): React.Node {
        return <div className={this.props.classes.inputControlIcon}>
        </div>;
    }

    _renderInputControlLabel(): React.Node {
        return <label htmlFor={this._id} className={this._getInputControlLabelClasses()}>
            {this._renderInputIcon()}
        </label>;
    }

    _renderInput(): React.Node {
        const {disabled}: {disabled: ?boolean} = this.props;
        const {value, name, onChange}: ReduxFormFieldComponentInputDataPropsTypes = this._getInputData();

        const checkedParam: ?string = this._isChecked() ? 'checked' : '';
        const disabledParam: ?string = disabled ? 'disabled' : undefined;

        return <input
            className={this._getInputClasses()}

            disabled={disabledParam}
            checked={checkedParam}

            type='radio'
            value={value}
            name={name}
            id={this._id}

            onChange={onChange}
        />;
    }

    _renderInputContainer(): React.Node {
        const {labelPosition} = this.props;

        return (
            <div className={this.props.classes.componentContainer}>
                {labelPosition === 'left' ? this._renderLabel() : null}
                {this._renderInput()}
                {this._renderInputControlLabel()}
                {labelPosition === 'right' ? this._renderLabel() : null}
            </div>
        );
    }

    render(): React.Node {
        return this._renderInputContainer();
    }

    // endregion
}

// exports
export default injectSheet(styles)(FormRadioButtonInputComponent);