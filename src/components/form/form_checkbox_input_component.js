'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import {always, equals, isNil, ifElse, clone} from 'ramda';
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
const checkboxControlLabelWidth = 20; // px
const checkboxControlLabelHeight = 20; // px

const checkboxControlLabelHorizontalSpacing = 4; // px

const checkMarkWidth = checkboxControlLabelWidth - (2 * checkboxControlLabelHorizontalSpacing); // px
const checkMarkHeight = checkMarkWidth / 2; // px

const checkboxControlLabelVerticalSpacing = (checkboxControlLabelHeight / 2) - (checkMarkWidth / 4) - (checkboxControlLabelHeight / 10);

const checkMarkWidthPercentage = (checkMarkWidth * 100) / checkboxControlLabelWidth; // %
const checkMarkHeightPercentage = (checkMarkHeight * 100) / checkboxControlLabelHeight; // %

const checkMarkTopOffsetPercentage = (checkboxControlLabelVerticalSpacing * 100) / checkboxControlLabelHeight; // %
const checkMarkLeftOffsetPercentage = (checkboxControlLabelHorizontalSpacing * 100) / checkboxControlLabelWidth; // %

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

        '& > $checkboxLabel': {
            boxSizing: 'border-box',

            flexBasis: 'auto',
            flexShrink: 1,
            flexGrow: 0,

            fontFamily: theme.inputStyles.fontStack,
            fontSize: theme.inputStyles.inputCommonFontSize,

            color: theme.inputStyles.inputCommonLabelColor,

            '&.disabled': {
                color: theme.inputStyles.disabledColor
            }
        },

        '& > $checkboxLeftLabel': {
            paddingRight: `${theme.inputStyles.switchLabelOffset}px`,
        },

        '& > $checkboxRightLabel': {
            paddingLeft: `${theme.inputStyles.switchLabelOffset}px`,
        },

        '& > $inputControl': {
            display: 'none',

            '&:checked + $inputControlLabel > $checkMarkBackgroundContainer': {
                borderColor: theme.inputStyles.switchSliderActiveBodyBGColor,
                background: theme.inputStyles.switchSliderActiveBodyBGColor
            },

            '&:checked + $inputControlLabel > $checkMarkContainer': {
                visibility: 'visible'
            },

            '&:checked + $inputControlLabel > $checkMarkBackgroundContainer.disabled': {
                borderColor: theme.inputStyles.disabledColor,
                background: theme.inputStyles.disabledColor
            }
        },

        '& > $inputControlLabel': {
            position: 'relative',
            boxSizing: 'border-box',
            display: 'flex',

            width: `${checkboxControlLabelWidth}px`,
            height: `${checkboxControlLabelHeight}px`,

            '& > $checkMarkBackgroundContainer': {
                position: 'absolute',
                boxSizing: 'border-box',

                width: '100%',
                height: '100%',

                border: `2px solid ${theme.inputStyles.switchSliderInactiveBodyBGColor}`,
                borderRadius: '2px',

                backGroundColor: 'white',
                transition: 'borderColor 0.3s, background 0.3s'
            },

            '& > $checkMarkContainer': {
                position: 'absolute',
                boxSizing: 'border-box',
                visibility: 'hidden',

                top: `${checkMarkTopOffsetPercentage}%`,
                left: `${checkMarkLeftOffsetPercentage}%`,

                width: `${checkMarkWidthPercentage}%`,
                height: `${checkMarkHeightPercentage}%`,

                border: `2px solid ${theme.inputStyles.switchSliderHandleActive}`,
                borderTopStyle: 'none',
                borderRightStyle: 'none',

                transform: 'rotate(-45deg)',

                '&.disabled': {
                    borderColor: theme.inputStyles.switchSliderHandleInactive
                }
            },
        }
    },

    checkboxLabel: {},
    checkboxLeftLabel: {},
    checkboxRightLabel: {},

    inputControl: {},
    inputControlLabel: {},

    checkMarkBackgroundContainer: {},
    checkMarkContainer: {},
});

/**
 * Checkbox input component styled according to material-UI guidelines.
 * Component is intended to be used as a parameter for ['Redux-form' Field component](#reduxformcheckboxinputcomponent).
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
class FormCheckboxInputComponent extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'FormCheckboxInputComponent';

    static defaultProps = {
        disabled: false,

        leftLabel: '',
        rightLabel: '',

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
    _getCheckMarkContainer(): string {
        const {disabled}: {disabled: ?boolean} = this.props;

        return classNames(
            this.props.classes.checkMarkContainer,
            {'disabled': disabled}
        );
    }

    _getCheckMarkBackgroundContainerClasses(): string {
        const {disabled}: {disabled: ?boolean} = this.props;

        return classNames(
            this.props.classes.checkMarkBackgroundContainer,
            {'disabled': disabled}
        );
    }

    _getLabelClasses(): string {
        const {disabled, labelPosition, classes: {checkboxLeftLabel, checkboxRightLabel}} = this.props;

        return classNames(
            this.props.classes.checkboxLabel,
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
        return isNil(checked) ? false : checked;
    }

    _getInputData(): ReduxFormFieldComponentInputDataPropsTypes {
        const {input}: {input: ?ReduxFormFieldComponentInputDataPropsTypes} = this.props;
        return isNil(input) ? clone(FormCheckboxInputComponent.defaultProps.input) : input;
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

    _renderCheckMarkContainer(): React.Node {
        return <div className={this._getCheckMarkContainer()}>
        </div>;
    }

    _renderCheckMarkBackgroundContainer(): React.Node {
        return <div className={this._getCheckMarkBackgroundContainerClasses()}>
        </div>;
    }

    _renderCheckbox(): React.Node {
        return <label htmlFor={this._id} className={this.props.classes.inputControlLabel}>
            {this._renderCheckMarkBackgroundContainer()}
            {this._renderCheckMarkContainer()}
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

            type='checkbox'
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
                {this._renderCheckbox()}
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
export default injectSheet(styles)(FormCheckboxInputComponent);