'use strict';

// @flow

// external imports
import type {ElementType, Node} from 'react';
import type {FieldProps} from 'redux-form';

import React from 'react';
import {Field} from 'redux-form/immutable';

// local imports
import FormSliderInputComponent from './../form/form_slider_input_component'

// type definitions
type CSSStylesType = {
    [string]: mixed
};

export type PropsTypes = {
    /**
     * Number that indicates which visual variant will be used to represent the text input
     */

    variant?: number,

    /**
     * Custom made representation of current component
     */

    customComponent?: ElementType | Node,

    /**
     * Input name
     */

    name: string,

    /**
     * Flag that dictates whether component should be readable only (text can be readable but not editable)
     */

    readOnly?: ?boolean,

    /**
     * Flag that dictates whether component should be disabled (text can not be readable or editable)
     */

    disabled?: ?boolean,

    /**
     * The minimum allowed value of the slider.
     */

    min?: number,

    /**
     * The maximum allowed value of the slider.
     */

    max?: number,

    /**
     * Class name which will be added to the component container (main outer container)
     */

    componentContainerClassName?: string,
};

type StateTypes = {};

// styles definition

/**
 * Wrapper around ['FormSliderInputComponent'](#formslierinputcomponent) component for use inside Redux-form.
 * Component is intended to be used as a child component inside Redux-form.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function ReduxFormSliderInputComponent(props: PropsTypes) {
    const renderComponentContainer = (): Node => {
        return <Field name={props.name} component={FormSliderInputComponent} {...props}/>;
    };

    // endregion

    return renderComponentContainer();
}

// exports
export default ReduxFormSliderInputComponent;
