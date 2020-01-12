'use strict';

// @flow

// external imports
import type {Node} from 'react';
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
     * The minimum allowed value of the slider.
     */

    min?: number,

    /**
     * The maximum allowed value of the slider.
     */

    max?: number,

    /**
     * Granularity of the slider.
     */

    step?: number,

    /**
     * Number that indicates which visual variant will be used to represent the slider input
     */

    variant?: number,

    /**
     * Input name
     */

    name: string,

    /**
     * Flag that dictates whether component should be readable only (handles will be fixed in place)
     */

    readOnly?: ?boolean,

    /**
     * Flag that dictates whether component should be disabled (handles will be fixed in place and whole component will be grayed)
     */

    disabled?: ?boolean,

    /**
     * Class name which will be added to the component container (main outer container)
     */

    componentContainerClassName?: string,

    /**
     * Styles for component container (main outer container) of the slider input component
     */

    componentContainerStyles?: CSSStylesType,

    /**
     * Alias of 'componentContainerStyles'
     */

    style?: CSSStylesType,

    /**
     * Styles for slider track
     */

    trackStyle?: CSSStylesType,

    /**
     * Styles for slider track which displays how far the handle have been dragged by the user
     */

    trackProgressStyle?: CSSStylesType,

    /**
     * Styles for handle container (main outer container) of the slider input component
     */

    knobStyle?: CSSStylesType,

    /**
     * Styles for handle container (main outer container) of the slider input component which are applied when user puts mouse cursor over this container
     */

    knobHoverStyle?: CSSStylesType,

    /**
     * Styles for handle container (main outer container) of the slider input component which are applied when user drags the slider handle
     */

    activeKnobStyle?: CSSStylesType,
};

type StateTypes = {};

// styles definition

/**
 * Wrapper around ['FormSliderInputComponent'](#/UI%20Components/Form/FormSliderInputComponent) component for use inside Redux-form.
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
