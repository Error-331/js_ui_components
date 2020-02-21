'use strict';

// @flow

// external imports
import type {ElementType, Node} from 'react';
import type {fieldPropTypes} from 'redux-form';

import React, {useState, useEffect} from 'react';
import {isElement} from 'react-dom/test-utils';

import {isNil, defaultTo, ifElse} from 'ramda';
import {generateRandomIdNumber} from '@webfuturistics/design_components/lib/helpers/general/dom_helpers';

// local imports
import type {RenderFunctionNoArgsType} from './../../types/common_types';
import type {ReduxFormFieldComponentMetaDataPropsTypes, ReduxFormFieldComponentInputDataPropsTypes} from './../../types/redux_form_types';

import {DEFAULT_REDUX_FORM_FIELD_COMPONENT_INPUT_DATA_PROPS} from './../../theming/constants/redux_form_constants';

import FormRadioButtonInputVariant1Component from './form_radio_button_input_variants/form_radio_button_input_variant1_component';
import FormRadioButtonInputVariant2Component from './form_radio_button_input_variants/form_radio_button_input_variant2_component';

// type definitions
type CSSStylesType = {
    [string]: mixed
};

type PropsTypes = fieldPropTypes & {
    /**
     * Number that indicates which visual variant will be used to represent the radio button
     */

    variant?: number,

    /**
     * Custom made representation of current component
     */

    customComponent?: ElementType | Node,

    /**
     * Flag that dictates whether component should be readable only (none selectable)
     */

    readOnly?: ?boolean,

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
     * Class name which will be applied to outermost container of current component
     */

    className?: string,

    /**
     * Styles for component container (main outer container) of the form radio input component
     */

    componentContainerStyles?: CSSStylesType,

    /**
     * Alias of 'componentContainerStyles'
     */

    style?: CSSStylesType,

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

/**
 * Radio button input component styled according to material-UI guidelines.
 * Component is intended to be used as a parameter for ['Redux-form' Field component](#reduxformradiobuttoninputcomponent).
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function FormRadioButtonInputComponent(props: PropsTypes) {
    // region private variables declaration
    const variant: number = defaultTo(1, props.variant);
    const customComponent: ElementType | Node | null = defaultTo(null, props.customComponent);

    const inputData: ReduxFormFieldComponentInputDataPropsTypes =
        defaultTo(DEFAULT_REDUX_FORM_FIELD_COMPONENT_INPUT_DATA_PROPS, props.input);

    const className: string = defaultTo('', props.className);

    const componentContainerStyles: CSSStylesType = defaultTo({})(props.componentContainerStyles);
    const style: CSSStylesType = Object.assign({}, componentContainerStyles, defaultTo({})(props.style));

    // endregion

    // region style hooks declaration
    // endregion

    // region context hooks declaration
    // endregion

    // region state hooks declaration
    const [id, setId] = useState(null);

    // endregion

    // region effect hooks declaration
    useEffect(() => setId(createInputId), []);

    // endregion

    // region state variables declaration
    // endregion

    // region ref hooks declaration
    // endregion

    // region callback hooks declaration
    // endregion

    // region business logic
    const createInputId: () => string = (): string => {
        const {name} = inputData;
        const randomIdNumber: number = generateRandomIdNumber();

        if (isNil(name)) {
            throw new Error('Name cannot be null, cannot create input ID');
        }

        return `radio_button_input_${name}_${randomIdNumber}`;
    };

    // endregion

    // region event handler helpers
    // endregion

    // region render helpers
    const renderComponentVariant: (componentVariantProps: {[any]: [any]}) => Node = (componentVariantProps: {[any]: [any]}): Node => {
        switch (variant) {
            case 1:
                return <FormRadioButtonInputVariant1Component {...componentVariantProps}/>;
            case 2:
                return <FormRadioButtonInputVariant2Component {...componentVariantProps}/>;
            default:
                return null;
        }
    };

    const renderCustomComponent: (componentVariantProps: {[any]: [any]}) => Node = (componentVariantProps: {[any]: [any]}): Node => {
        return ifElse(
            isElement,
            (elm) => {
                return React.cloneElement(
                    elm,
                    {
                        ...elm.props,
                        ...componentVariantProps,
                    }
                );
            },
            (elm) => {
                return React.createElement(elm, {...componentVariantProps});
            }
        )(customComponent);
    };

    const render: RenderFunctionNoArgsType = (): Node => {
        const {name, value, checked, onChange} = inputData;
        const {readOnly, disabled, labelPosition, label} = props;

        const componentVariantProps: {[any]: [any]} = {
            id,

            name,
            value,
            checked,

            readOnly,
            disabled,

            labelPosition,
            label,

            onChange,

            className,
            style,
        };

        if (!isNil(customComponent)) {
            return renderCustomComponent(componentVariantProps);
        } else {
            return renderComponentVariant(componentVariantProps);
        }
    };

    // endregion

    // init
    return render();
}

FormRadioButtonInputComponent.displayName = 'FormRadioButtonInputComponent';

// exports
export default FormRadioButtonInputComponent;
