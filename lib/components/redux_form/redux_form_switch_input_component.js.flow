'use strict';

// @flow

// external imports
import * as React from 'react';
import {Field} from 'redux-form/immutable';

// local imports
import FormSwitchInputComponent from './../form/form_switch_input_component';

// type definitions
type PropsTypes = {
    /**
     * Input name
     */

    name: string,

    /**
     * Flag that dictates whether component should be disabled
     */

    disabled?: ?boolean,

    /**
     * Label that will placed on the left side of the switch
     */

    leftLabel?: string,

    /**
     * Label that will placed on the right side of the switch
     */

    rightLabel?: string
};

type StateTypes = {};

/**
 * Wrapper around ['FormSwitchInputComponent'](#formswitchinputcomponent) component for use inside Redux-form.
 * Component is intended to be used as a child component inside Redux-form.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
class ReduxFormSwitchInputComponent extends React.Component<PropsTypes, StateTypes> {
    static displayName = 'ReduxFormSwitchInputComponent';

    render(): React.Node {
        return <Field
            type='checkbox'
            name={this.props.name}
            disabled={this.props.disabled}

            leftLabel={this.props.leftLabel}
            rightLabel={this.props.rightLabel}

            component={FormSwitchInputComponent}
        />;
    }
}

// exports
export default ReduxFormSwitchInputComponent;