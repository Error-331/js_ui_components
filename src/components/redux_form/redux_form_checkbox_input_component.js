'use strict';

// @flow

// external imports
import * as React from 'react';
import {Field} from 'redux-form/immutable';

// local imports
import {FormCheckboxInputComponent} from '../form/form_checkbox_input_component';

// type definitions
type CSSStylesType = {
    [string]: mixed
};

export type PropsTypes = {
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

    labelPosition?: 'left' | 'right',

    /**
     * Styles for component container (main outer container) of the form text input component
     */

    componentContainerStyles?: CSSStylesType,

    /**
     * Alias of 'componentContainerStyles'
     */

    style?: CSSStylesType,
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
class ReduxFormCheckboxInputClass extends React.Component<PropsTypes, StateTypes> {
    static displayName = 'ReduxFormCheckboxInputClass';

    render(): React.Node {
        return <Field
            variant={this.props.variant}
            type='checkbox'
            name={this.props.name}
            disabled={this.props.disabled}

            label={this.props.label}
            labelPosition={this.props.labelPosition}

            componentContainerStyles={this.props.componentContainerStyles}
            style={this.props.style}

            component={FormCheckboxInputComponent}
        />;
    }
}

const ReduxFormCheckboxInputComponent = ReduxFormCheckboxInputClass;

// exports
export {ReduxFormCheckboxInputClass, ReduxFormCheckboxInputComponent};
export default ReduxFormCheckboxInputComponent;