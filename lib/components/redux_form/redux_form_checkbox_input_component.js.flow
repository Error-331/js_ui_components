'use strict';

// @flow

// external imports
import * as React from 'react';
import {Field} from 'redux-form/immutable';

// local imports
import {FormCheckboxInputComponent} from '../form/form_checkbox_input_component';

// type definitions
type PropsTypes = {
    /**
     * Number that indicates which visual variant will be used to represent the checkbox
     */

    variant?: number,

    /**
     * Input name
     */

    name: string,

    /**
     * Flag that dictates whether component should be disabled
     */

    disabled?: ?boolean,

    /**
     * Checkbox label
     */

    label?: string,

    /**
     * Value that indicates where label should be placed on left side of the checkbox or on the right
     */

    labelPosition?: 'left' | 'right'
};

type StateTypes = {};

/**
 * Wrapper around ['FormCheckboxInputComponent'](#formswitchcheckboxcomponent) component for use inside Redux-form.
 * Component is intended to be used as a child component inside Redux-form.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
export class ReduxFormCheckboxInputComponentClass extends React.Component<PropsTypes, StateTypes> {
    static displayName = 'ReduxFormCheckboxInputComponent';

    render(): React.Node {
        return <Field
            variant={this.props.variant}
            type='checkbox'
            name={this.props.name}
            disabled={this.props.disabled}

            label={this.props.label}
            labelPosition={this.props.labelPosition}

            component={FormCheckboxInputComponent}
        />;
    }
}

// exports
export const ReduxFormCheckboxInputComponent = ReduxFormCheckboxInputComponentClass;