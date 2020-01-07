'use strict';

// @flow

// external imports
import * as React from 'react';
import {Field} from 'redux-form/immutable';

// local imports
import {FormRadioButtonInputComponent} from './../form/form_radio_button_input_component';

// type definitions
export type PropsTypes = {
    /**
     * Input name
     */

    name: string,

    /**
     * Radio button value
     */

    value: string,

    /**
     * Flag that dictates whether component should be disabled
     */

    disabled?: ?boolean,

    /**
     * Value that indicates possible appearance of radio button which can be 'small' or 'medium'
     */

    appearance?: 'small' | 'medium',

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
 * Wrapper around ['FormRadioButtonInputComponent'](#formradiobuttoninputcomponent) component for use inside Redux-form.
 * Component is intended to be used as a child component inside Redux-form.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
class ReduxFormRadioButtonInputClass extends React.Component<PropsTypes, StateTypes> {
    static displayName = 'ReduxFormRadioButtonInputClass';

    render(): React.Node {
        return <Field
            type='radio'
            name={this.props.name}
            value={this.props.value}
            disabled={this.props.disabled}

            label={this.props.label}
            labelPosition={this.props.labelPosition}

            component={FormRadioButtonInputComponent}
        />;
    }
}

const ReduxFormRadioButtonInputComponent = ReduxFormRadioButtonInputClass;

// exports
export {ReduxFormRadioButtonInputClass, ReduxFormRadioButtonInputComponent};
export default ReduxFormRadioButtonInputComponent;