'use strict';

// external imports
import React, {Component} from 'react';
import {Form} from 'redux-form';
import {reduxForm} from 'redux-form/immutable';
import injectSheet from 'react-jss';
import moment from 'moment';

// local imports
import {MAIN_FORM_NAME} from './../constants/redux_constants';

// styles definition
const styles = () => ({});

// component definition
class ComponentFormContainer extends Component {
    render() {
        return (
            <Form onSubmit={() => {}}>
                {this.props.children}
            </Form>
        );
    }
}

// exports
const ComponentFormContainerConnected = reduxForm({
    form: MAIN_FORM_NAME,

    initialValues: {
        reduxFormTextInputComponents: {
            testFormTextInputComponentWithDefaultValue1: 'Test default value 1...',
            testFormTextInputComponentWithDefaultValue2: 'Test default value 2...',
            testFormTextInputComponentWithDefaultValue3: 'Test default value 3...',
            testFormTextInputComponentWithDefaultValue4: 'Test default value 4...',
            testFormTextInputComponentWithDefaultValue5: 'Test default value 5...',
            testFormTextInputComponentWithDefaultValue6: 'Test default value 6...'
        },

        reduxFormSwitchInputComponents: {
            testFormSwitchInputComponentWithDefaultValue1: true,
            testFormSwitchInputComponentWithDefaultValue2: true,
            testFormSwitchInputComponentWithDefaultValue3: true,
            testFormSwitchInputComponentWithDefaultValue4: true
        },

        reduxFormCheckboxInputComponents: {
            testFormCheckboxInputComponentWithDefaultValue1: true,
            testFormCheckboxInputComponentWithDefaultValue2: true,
            testFormCheckboxInputComponentWithDefaultValue3: true,
            testFormCheckboxInputComponentWithDefaultValue4: true
        },

        reduxFormRadioButtonInputComponents: {
            testFromRadioButtonInputComponentWithDefaultValue1: 'testVal1',
            testFromRadioButtonInputComponentWithDefaultValue2: 'testVal2',
            testFromRadioButtonInputComponentWithDefaultValue3: 'testVal1',
            testFromRadioButtonInputComponentWithDefaultValue4: 'testVal2',
        },

        reduxFormDropDownInputComponents: {
            themeSelectorValue: 'base',

            testFromDropDownInputComponentWithDefaultValue1: 'option_3',
            testFromDropDownInputComponentWithDefaultValue2: 'option_2',
            testFromDropDownInputComponentWithDefaultValue3: 'option_4',
            testFromDropDownInputComponentWithDefaultValue4: 'option_1',
            testFromDropDownInputComponentWithDefaultValue5: 'option_3',
        },

        reduxFormDateInputComponents: {
            testFromDateInputComponentWithDefaultValue1: moment('2013-02-08 09:30:26'),
            testFromDateInputComponentWithDefaultValue2: moment('2014-02-08 09:30:26'),
            testFromDateInputComponentWithDefaultValue3: moment('2015-02-08 09:30:26'),
            testFromDateInputComponentWithDefaultValue4: moment('2016-02-08 09:30:26'),
            testFromDateInputComponentWithDefaultValue5: moment('2017-02-08 09:30:26'),
        }
    }
})(ComponentFormContainer);

export default injectSheet(styles)(ComponentFormContainerConnected);