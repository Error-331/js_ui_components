'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import {isNil, clone} from 'ramda';
import {generateRandomIdNumber} from '@webfuturistics/design_components';

import type {FieldProps} from 'redux-form';

// local imports
import type {
    ReduxFormFieldComponentMetaDataPropsTypes,
    ReduxFormFieldComponentInputDataPropsTypes
} from './../../types/redux_form_types';

// type definitions
type PropsTypes = FieldProps & {
    /**
     * Flag that dictates whether component should be disabled
     */

    disabled?: ?boolean,

    /**
     * Label that will placed on the left side of the switch
     */

    leftLabel?: string,

    /**
     * Label that will placed on the right side of the switch
     */

    rightLabel?: string,

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
const switchSliderBodyWidth = 36; // px
const switchSliderBodyHeight = 14; // px

const switchSliderHandlerWidth = 20; // px
const switchSliderHandlerHeight = 20; // px

const switchSliderHandlerTop = (switchSliderHandlerHeight - switchSliderBodyHeight) / 2;
const switchSliderHandlerRight = switchSliderBodyWidth - switchSliderHandlerWidth;

const switchSliderBodyDisabledClasses = (theme) => ({
    backgroundColor: theme.inputStyles.disabledColor
});

const switchSliderHandleDisabledClasses = (theme) => ({
    backgroundColor: theme.inputStyles.switchSliderHandleInactive
});

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

        '& > $switchLabel': {
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

        '& > $switchLeftLabel': {
            paddingRight: `${theme.inputStyles.switchLabelOffset}px`,
        },

        '& > $switchRightLabel': {
            paddingLeft: `${theme.inputStyles.switchLabelOffset}px`,
        },

        '& > $inputControl': {
            display: 'none',

            '&:checked + $inputControlLabel > $switchSliderBodyContainer': {
                backgroundColor: theme.inputStyles.switchSliderActiveBodyBGColor
            },

            '&:checked + $inputControlLabel > $switchSliderHandleContainer': {
                transform: `translate(${switchSliderHandlerRight}px, -${switchSliderHandlerTop}px)`,
                backgroundColor: theme.inputStyles.switchSliderHandleActive,
            },

            '&:checked + $inputControlLabel > $switchSliderBodyContainer.disabled': switchSliderBodyDisabledClasses(theme),
            '&:checked + $inputControlLabel > $switchSliderHandleContainer.disabled': switchSliderHandleDisabledClasses(theme)
        },

        '& > $inputControlLabel': {
            boxSizing: 'border-box',
            position: 'relative',

            flexBasis: 'auto',
            flexGrow: 0,
            flexShrink: 1,

            backgroundColor: theme.inputStyles.bgColor,

            '& > $switchSliderBodyContainer': {
                boxSizing: 'border-box',

                width: `${switchSliderBodyWidth}px`,
                height: `${switchSliderBodyHeight}px`,

                borderRadius: '15px',

                backgroundColor: theme.inputStyles.switchSliderInactiveBodyBGColor,

                '&.disabled': switchSliderBodyDisabledClasses(theme)
            },

            '& > $switchSliderHandleContainer': {
                position: 'absolute',

                left: '0px',
                top: '0px',

                width: `${switchSliderHandlerWidth}px`,
                height: `${switchSliderHandlerHeight}px`,

                borderRadius: '50%',

                backgroundColor: theme.inputStyles.switchSliderHandleInactive,
                boxShadow: '0 3px 1px -2px rgba(0, 0, 0, 0.14), 0 2px 2px 0 rgba(0, 0, 0, 0.098), 0 1px 5px 0 rgba(0, 0, 0, 0.084)',

                transform: `translate(0px, -${switchSliderHandlerTop}px)`,
                transition: 'all 0.3s ease',

                '&.disabled': switchSliderHandleDisabledClasses(theme)
            }
        }
    },

    switchLabel: {},
    switchLeftLabel: {},
    switchRightLabel: {},

    inputControl: {},

    inputControlLabel: {},

    switchSliderBodyContainer: {},
    switchSliderHandleContainer: {}
});

/**
 * Switch input component styled according to material-UI guidelines.
 * Component is intended to be used as a parameter for ['Redux-form' Field component](#reduxformswitchinputcomponent).
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
class FormSwitchInputComponent extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'FormSwitchInputComponent';

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
    _getLeftLabelClasses(): string {
        const {disabled}: {disabled: ?boolean} = this.props;

        return classNames(
            this.props.classes.switchLabel,
            this.props.classes.switchLeftLabel,
            {'disabled': disabled}
        );
    }

    _getRightLabelClasses(): string {
        const {disabled}: {disabled: ?boolean} = this.props;

        return classNames(
            this.props.classes.switchLabel,
            this.props.classes.switchRightLabel,
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

    _getSliderBodyClasses(): string {
        const {disabled}: {disabled: ?boolean} = this.props;

        return classNames(
            this.props.classes.switchSliderBodyContainer,
            {'disabled': disabled}
        );
    }

    _getSliderHandleClasses(): string {
        const {disabled}: {disabled: ?boolean} = this.props;

        return classNames(
            this.props.classes.switchSliderHandleContainer,
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

        return `switch_input_${name}_${randomIdNumber}`;
    }

    // endregion

    // region prop accessors
    _isChecked(): boolean {
        const {checked}: ReduxFormFieldComponentInputDataPropsTypes = this._getInputData();

        return isNil(checked) ? false : checked;
    }

    _getInputData(): ReduxFormFieldComponentInputDataPropsTypes {
        const {input}: {input: ?ReduxFormFieldComponentInputDataPropsTypes} = this.props;
        return isNil(input) ? clone(FormSwitchInputComponent.defaultProps.input) : input;
    }

    // endregion

    // region handlers
    // endregion

    // region render methods
    _renderLeftLabel(): React.Node {
        return <div className={this._getLeftLabelClasses()}>
            {this.props.leftLabel}
        </div>;
    }

    _renderRightLabel(): React.Node {
        return <div className={this._getRightLabelClasses()}>
            {this.props.rightLabel}
        </div>;
    }

    _renderSwitch(): React.Node {
        return <label htmlFor={this._id} className={this.props.classes.inputControlLabel}>
            <div className={this._getSliderBodyClasses()}>
            </div>

            <div className={this._getSliderHandleClasses()}>
            </div>
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
        return (
            <div className={this.props.classes.componentContainer}>
                {this._renderLeftLabel()}
                {this._renderInput()}
                {this._renderSwitch()}
                {this._renderRightLabel()}
            </div>
        );
    }

    render(): React.Node {
        return this._renderInputContainer();
    }

    // endregion
}

// exports
export default injectSheet(styles)(FormSwitchInputComponent);