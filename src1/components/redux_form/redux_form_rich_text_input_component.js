'use strict';

// @flow

// external imports
import type {Node} from 'react';

import React from 'react';
import {Field} from 'redux-form/immutable';

// local imports
import FormRichTextInputComponent from '../form/form_rich_text_input_component'

// type definitions
type CSSStylesType = {
    [string]: mixed
};

export type PropsTypes = {
    /**
     * Number that indicates which visual variant will be used to represent the rich text input
     */

    variant?: number,

    /**
     * Input name
     */

    name: string,

    /**
     * Flag that dictates whether component should be readable only
     */

    readOnly?: ?boolean,

    /**
     * Flag that dictates whether component should be disabled
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
function ReduxFormRichTextInputComponent(props: PropsTypes) {
    const renderComponentContainer = (): Node => {
        return <Field name={props.name} component={FormRichTextInputComponent} {...props}/>;
    };

    // endregion

    return renderComponentContainer();
}

// exports
export default ReduxFormRichTextInputComponent;
