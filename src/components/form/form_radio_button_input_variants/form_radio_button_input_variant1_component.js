'use strict';

// @flow

// external imports
import type {Node} from 'react';
import type {Event} from 'redux-form/lib/types';

import React, {useContext} from 'react';
import {createUseStyles, useTheme} from 'react-jss';

import {isNil, defaultTo, ifElse, equals, always} from 'ramda';
import classNames from 'classnames';

// local imports
import type {ThemeType} from './../../../types/theme_types';
import type {RenderFunctionNoArgs} from './../../../types/common_types';
import type {ReduxFormFieldComponentInputDataPropsTypes, ReduxFormFieldComponentValueType} from './../../../types/redux_form_types';
import type {StateTypes as ThemContextType} from './../../../theming/providers';

import {MainThemeContext} from './../../../theming/providers';

// type definitions
type OnChangeHandlerType = (eventOrValue: Event | any) => void;

type CSSStylesType = {
    [string]: mixed
};

type PropsTypes = {
    /**
     * Radio button id (used with 'input' tag)
     */

    id?: string,

    /**
     * Radio button form name
     */

    name?: string,

    /**
     * Flag that dictates whether component should be disabled
     */

    disabled?: ?boolean,

    /**
     * Value that indicates possible appearance of radio button which can be 'small' or 'medium'
     */

    appearance?: 'small' | 'medium',

    /**
     * Radio button label label
     */

    label?: string,

    /**
     * Value that indicates where label should be placed on left side of the radio button or on the right
     */

    labelPosition?: 'left' | 'right',

    /**
     * Styles for component container (main outer container) of the form radio input component
     */

    style?: CSSStylesType,

    /**
     * Callback function which handles component value change
     */

    onChange?: OnChangeHandlerType,

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
const useStyles = createUseStyles(theme => ({
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

            '&:checked + $inputControlLabel > $inputControlIcon': {
                transform: 'scale(1)',
            },

            '&:checked + $inputControlLabel.disabled > $inputControlIcon': {
                backgroundColor: theme.inputStyles.disabledColor
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
            border: `2px solid ${theme.inputStyles.switchSliderActiveBodyBGColor}`,

            '& > $inputControlIcon': {
                flexBasis: 'auto',
                flexShrink: 0,
                flexGrow: 1,

                borderRadius: '50%',

                backgroundColor: theme.inputStyles.switchSliderHandleActive,

                transform: 'scale(0)',

                transition: 'all .3s ease',
                transitionProperty: 'transform, border-color'
            }
        },

        '& > $inputControlLabel.disabled': {
            borderColor: theme.inputStyles.disabledColor
        }
    },

    checkboxLabel: {},
    checkboxLeftLabel: {},
    checkboxRightLabel: {},

    inputControl: {},
    inputControlLabel: {},
    inputControlIcon: {},
}));

/**
 * Radio button input component (variant 1) styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function FormRadioButtonInputVariant1Component(props: PropsTypes) {
    // region private variables declaration
    const id: string = defaultTo('', props.id);
    const name: string = defaultTo('', props.name);
    const value: ReduxFormFieldComponentValueType = defaultTo(false, props.value);

    const label: string = defaultTo('',props.label);
    const labelPosition: string = defaultTo('left', props.labelPosition);
    const disabled: boolean = defaultTo(false, props.disabled);

    const style: CSSStylesType = defaultTo({}, props.style);
    const onChange: (eventOrValue: Event | any) => void = defaultTo(() => {}, props.onDateChange);

    // endregion

    // region style hooks declaration
    const theme: ThemeType = useTheme();
    const classes: {[string]: string} = useStyles({...props, theme});

    // endregion

    // region context hooks declaration
    const themeContext: ThemContextType = useContext(MainThemeContext);

    // endregion

    // region state hooks declaration
    // endregion

    // region effect hooks declaration
    // endregion

    // region state variables declaration
    // endregion

    // region ref hooks declaration
    // endregion

    // region callback hooks declaration
    // endregion

    // region business logic
    // endregion

    // region event handler helpers
    // endregion

    // region render helpers
    const renderInputIcon: RenderFunctionNoArgs = (): Node => {
        const {inputControlIcon} = classes;

        return <div className={inputControlIcon}>
        </div>;
    };

    const renderInputControlLabel: RenderFunctionNoArgs = (): Node => {
        const {disabled} = props;
        const {inputControlLabel} = classes;

        const className: string = classNames(
            inputControlLabel,
            {'disabled': disabled}
        );

        return <label htmlFor={id} className={className}>
            {renderInputIcon()}
        </label>;
    };

    const renderInput: RenderFunctionNoArgs = (): Node => {
        const checkedParam: ?string = value ? 'checked' : '';
        const disabledParam: ?string = disabled ? 'disabled' : undefined;

        const {inputControl} = classes;
        const className: string = classNames(
            inputControl,
            {'disabled': disabled}
        );

        return <input
            className={className}

            disabled={disabledParam}
            checked={checkedParam}

            type='radio'
            value={value}
            name={name}
            id={id}

            onChange={onChange}
        />;
    };

    const renderLabel: RenderFunctionNoArgs = () => {
        const {disabled} = props;
        const {checkboxLabel, checkboxLeftLabel, checkboxRightLabel} = classes;

        const className: string = classNames(
            checkboxLabel,
            ifElse(equals('left'), always(checkboxLeftLabel), always(checkboxRightLabel))(labelPosition),
            {'disabled': disabled}
        );

        return <div className={className}>
            {label}
        </div>;
    };

    const renderComponentContainer: RenderFunctionNoArgs = (): Node => {
        const {componentContainer} = classes;

        return (
            <div
                className={componentContainer}
                style={style}
            >
                {labelPosition === 'left' ? renderLabel() : null}
                {renderInput()}
                {renderInputControlLabel()}
                {labelPosition === 'right' ? renderLabel() : null}
            </div>
        );
    };

    // endregion

    // init
    return renderComponentContainer();
}

// exports
export default FormRadioButtonInputVariant1Component;
