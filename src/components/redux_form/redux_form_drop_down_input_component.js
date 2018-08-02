'use strict';

// @flow

// external imports
import * as React from 'react';
import {Field} from 'redux-form/immutable';

// local imports
import {FormDropDownInputComponent} from '../form/form_drop_down_input_component';

// type definitions
type PropsTypes = {
    /**
     * Input name
     */

    name: string,

    /**
     * List of possible options
     */

    options: {
        [string]: string | number
    },

    /**
     * Flag that dictates whether component should be readable only
     */

    readOnly?: ?boolean,

    /**
     * Flag that dictates whether component should be disabled
     */

    disabled?: ?boolean,

    /**
     * Placeholder text used as hint for the user of how appropriate data should look like
     */

    placeholder?: ?string,

    /**
     * Input label
     */

    label?: ?string,
};

type StateTypes = {};

/**
 * Wrapper around ['FormDropDownInputComponent'](#formdropdowninputcomponent) component for use inside Redux-form.
 * Component is intended to be used as a child component inside Redux-form.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
export class ReduxFormDropDownInputComponentClass extends React.Component<PropsTypes, StateTypes> {
    static displayName = 'ReduxFormDropDownInputComponent';

    render(): React.Node {
        return <Field type='select' component={(props) => <FormDropDownInputComponent {...props}/>} {...this.props}/>;
    }
}

// exports
export const ReduxFormDropDownInputComponent = ReduxFormDropDownInputComponentClass;