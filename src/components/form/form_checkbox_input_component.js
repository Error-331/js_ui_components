'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import {always, defaultTo, equals, isNil, ifElse, cond, clone} from 'ramda';
import {generateRandomIdNumber} from '@webfuturistics/design_components';

import type {FieldProps} from 'redux-form';

// local imports
import type {ReduxFormFieldComponentMetaDataPropsTypes, ReduxFormFieldComponentInputDataPropsTypes} from './../../types/redux_form_types';

import {FormCheckboxVariant1Component} from './form_checkbox_variants/form_checkbox_variant1_component';
import {FormCheckboxVariant2Component} from './form_checkbox_variants/form_checkbox_variant2_component';

import {MainThemeContext} from './../../theming/providers/main_theme_provider';

// type definitions
type CSSStylesType = {
    [string]: mixed
};

type PropsTypes = FieldProps & {
    /**
     * Number that indicates which visual variant will be used to represent the checkbox
     */

    variant?: number,

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
     * Styles for component container (main outer container) of the form checkbox input component
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

        '& > $checkboxLabel': {
            boxSizing: 'border-box',

            flexBasis: 'auto',
            flexShrink: 1,
            flexGrow: 0,

            fontFamily: theme.inputStyles.fontStack,
            fontSize: theme.inputStyles.fontSize,

            color: theme.inputStyles.labelColor,

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
        },

    },

    checkboxLabel: {},
    checkboxLeftLabel: {},
    checkboxRightLabel: {},

    inputControl: {},
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

// $FlowFixMe decorators
@injectSheet(styles)
export class FormCheckboxInputClass extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'FormCheckboxInputClass';

    static defaultProps = {
        variant: 1,
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

    _getComponentContainerStyles(): CSSStylesType {
        return defaultTo({})(this.props.componentContainerStyles);
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
    _getVariant(): number {
        return defaultTo(FormCheckboxInputClass.defaultProps.variant)(this.props.variant);
    }

    _isChecked(): boolean {
        const {checked}: ReduxFormFieldComponentInputDataPropsTypes = this._getInputData();
        return isNil(checked) ? false : checked;
    }

    _getInputData(): ReduxFormFieldComponentInputDataPropsTypes {
        const {input}: {input: ?ReduxFormFieldComponentInputDataPropsTypes} = this.props;
        return isNil(input) ? clone(FormCheckboxInputClass.defaultProps.input) : input;
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

    _renderCheckbox(): React.Node {
        return cond([
            [equals(1), () =>  <FormCheckboxVariant1Component disabled={this.props.disabled} htmlFor={this._id}/>],
            [equals(2), () =>  <FormCheckboxVariant2Component disabled={this.props.disabled} htmlFor={this._id}/>],
        ])(this._getVariant());
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
            <div
                className={this.props.classes.componentContainer}
                style={this._getComponentContainerStyles()}
            >
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
export function FormCheckboxInputComponent(props: PropsTypes) {
    return (
        <MainThemeContext.Consumer>
            {windowDimensions => <FormCheckboxInputClass {...props} {...windowDimensions} />}
        </MainThemeContext.Consumer>
    );
}


FormCheckboxInputComponent.displayName = 'FormCheckboxInputComponent';