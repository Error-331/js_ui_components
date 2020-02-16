'use strict';

// @flow

// external imports
import type {Node} from 'react';
import type {Event} from 'redux-form/lib/types';

import React, {useContext} from 'react';

import {defaultTo, ifElse, equals, always} from 'ramda';
import classNames from 'classnames';

// local imports
import type {BaseRadioButtonInputPropsTypes} from './../../../types/form/form_radio_button_types';
import type {RenderFunctionNoArgs} from './../../../types/common_types';
import type {ReduxFormFieldComponentValueType} from './../../../types/redux_form_types';
import type {StateTypes as ThemContextType} from './../../../theming/providers';

import {MainThemeContext} from './../../../theming/providers';

// type definitions
type CSSStylesType = {
    [string]: mixed
};

type ClassesType = {
    [string]: string
};

type PropsTypes = BaseRadioButtonInputPropsTypes & {
    /**
     * Component classes
     */

    classes?: ClassesType,
};

type StateTypes = {};

// styles definition

/**
 * Component which includes base functionality to represent form radio button component.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function FormRadioButtonInputBaseComponent(props: PropsTypes) {
    // region private variables declaration
    const id: string = defaultTo('', props.id);
    const name: string = defaultTo('', props.name);
    const value: ReduxFormFieldComponentValueType = defaultTo(false, props.value);
    const checked: boolean = defaultTo(false, props.checked);

    const appearance: string = defaultTo('medium', props.appearance);

    const readOnly: boolean = defaultTo(false, props.readOnly);
    const disabled: boolean = defaultTo(false, props.disabled);

    const label: string = defaultTo('',props.label);
    const labelPosition: string | null = defaultTo(null, props.labelPosition);

    const classes: ClassesType = defaultTo([], props.classes);
    const className: string = defaultTo('', props.className);
    const style: CSSStylesType = defaultTo({}, props.style);
    const onChange: (eventOrValue: Event | any) => void = defaultTo(() => {}, props.onChange);

    // endregion

    // region style hooks declaration
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
            {'disabled': disabled},
            {'readonly': readOnly},
        );

        return <label htmlFor={id} className={className}>
            {renderInputIcon()}
        </label>;
    };

    const renderInput: RenderFunctionNoArgs = (): Node => {
        const checkedParam: ?string = checked ? 'checked' : '';
        const disabledParam: ?string = disabled ? 'disabled' : undefined;

        const {inputControl} = classes;
        const className: string = classNames(
            inputControl,
            {'disabled': disabled},
        );

        return <input
            className={className}

            disabled={disabledParam}
            checked={checkedParam}

            type='radio'
            value={value}
            name={name}
            id={id}

            onChange={readOnly? null : onChange}
        />;
    };

    const renderLabel: RenderFunctionNoArgs = () => {
        const {disabled} = props;
        const {radioButtonLabel, radioButtonLeftLabel, radioButtonRightLabel} = classes;

        const className: string = classNames(
            radioButtonLabel,
            ifElse(equals('left'), always(radioButtonLeftLabel), always(radioButtonRightLabel))(labelPosition),
            {'disabled': disabled},
        );

        return <div className={className}>
            {label}
        </div>;
    };

    const renderComponentContainer: RenderFunctionNoArgs = (): Node => {
        const {componentContainer} = classes;

        const containerClassName: string = classNames(componentContainer, className);

        return (
            <div
                className={containerClassName}
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
export default FormRadioButtonInputBaseComponent;
