'use strict';

// @flow

// external imports
import * as React from 'react';
import {Field} from 'redux-form/immutable';

// local imports
import {FormTextInputComponent} from './../form/form_text_input_component';
import {StyleType} from "../buttons/regular_button_component";

// type definitions
type CSSStylesType = {
    [string]: mixed
};

type InputTypes = 'text' | 'password';

export type PropsTypes = {
    /**
     * Input name
     */

    name: string,

    /**
     * Input type (text or password)
     */

    type?: InputTypes,

    /**
     * Flag that dictates whether component should be readable only (text can be readable but not editable)
     */

    readOnly?: ?boolean,

    /**
     * Flag that dictates whether component should be disabled (text can not be readable or editable)
     */

    disabled?: ?boolean,

    /**
     * Flag that dictates whether errors should be shown only after user interacts with input or always (e.g. even if initial value is set)
     */

    errorsIfTouched?: boolean,

    /**
     * Flag that dictates whether warnings should be shown only after user interacts with input or always (e.g. even if initial value is set)
     */

    warningsIfTouched?: boolean,

    /**
     * Input label
     */

    label?: ?string,

    /**
     * Placeholder text used as hint for the user of how appropriate data should look like
     */

    placeholder?: ?string,

    /**
     * Class name which will be added to the component container (main outer container)
     */

    componentContainerClassName?: string,

    /**
     * Class names which will be added to the icon container of the current component
     */

    iconClassNames?: ?string,

    /**
     * Styles for component container (main outer container) of the form text input component
     */

    componentContainerStyles?: CSSStylesType,

    /**
     * Alias of 'componentContainerStyles'
     */

    style?: StyleType,
};

type StateTypes = {};

/**
 * Wrapper around ['FormTextInputComponent'](#formtextinputcomponent) component for use inside Redux-form.
 * Component is intended to be used as a child component inside Redux-form.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
export class ReduxFormTextInputComponentClass extends React.Component<PropsTypes, StateTypes> {
    static displayName = 'ReduxFormTextInputComponent';

    render(): React.Node {
        return <Field name={this.props.name} component={FormTextInputComponent} {...this.props}/>;
    }
}

// exports
export const ReduxFormTextInputComponent = ReduxFormTextInputComponentClass;