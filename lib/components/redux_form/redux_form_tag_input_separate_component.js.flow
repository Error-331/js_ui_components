'use strict';

// @flow

// external imports
import type {ElementType, Node} from 'react';

import React from 'react';
import {Field} from 'redux-form/immutable';

// local imports
import FormTagInputSeparateComponent from './../form/form_tag_input_separate_component'

// type definitions
type CSSStylesType = {
    [string]: mixed
};

export type PropsTypes = {
    /**
     * Custom made representation of text input component used inside current component
     */

    customTextInputComponent?: ElementType | Node,

    /**
     * Custom made representation of chip component used inside current component
     */

    customChipComponent?: ElementType | Node,

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

    className?: string,

    /**
     * Styles for component container (main outer container)
     */

    style?: CSSStylesType,
};

type StateTypes = {};

// styles definition

/**
 * Wrapper around ['FormTagInputSeparateComponent'](#/UI%20Components/Form/FormTagInputSeparateComponent) component for use inside Redux-form.
 * Component is intended to be used as a child component inside Redux-form.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function ReduxFormTagInputSeparateComponent(props: PropsTypes) {
    const renderComponentContainer = (): Node => {
        return <Field name={props.name} component={FormTagInputSeparateComponent} {...props}/>;
    };

    // endregion

    return renderComponentContainer();
}

// exports
export default ReduxFormTagInputSeparateComponent;
