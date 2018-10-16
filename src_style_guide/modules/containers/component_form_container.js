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
            testFormTextInputComponentWithDefaultValue6: 'Test default value 6...',
            testFormTextInputComponentWithDefaultValue7: 'Test default value 7...',
            testFormTextInputComponentWithDefaultValue8: 'Test default value 8...',
            testFormTextInputComponentWithDefaultValue9: 'Test default value 9...',
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
    },

    warn: inputValues => {
        const warnMessages = {
            reduxFormTextInputComponents: {}
        };

        if (!inputValues) {
            return warnMessages;
        }

        if (inputValues['reduxFormTextInputComponents'] || inputValues.has('reduxFormTextInputComponents')) {
            const reduxFormTextInputComponentsValues = inputValues['reduxFormTextInputComponents'] || inputValues.get('reduxFormTextInputComponents');

            if (reduxFormTextInputComponentsValues['testFormTextInputComponentWithDefaultValue8'] || reduxFormTextInputComponentsValues.has('testFormTextInputComponentWithDefaultValue8')) {
                const testFormTextInputComponentWithDefaultValue8 = reduxFormTextInputComponentsValues['testFormTextInputComponentWithDefaultValue8'] || reduxFormTextInputComponentsValues.get('testFormTextInputComponentWithDefaultValue8');

                warnMessages.reduxFormTextInputComponents.testFormTextInputComponentWithDefaultValue8 = [];

                if (testFormTextInputComponentWithDefaultValue8.includes('Test')) {
                    warnMessages.reduxFormTextInputComponents.testFormTextInputComponentWithDefaultValue8.push('Why use "test" keyword?');
                }

                if (testFormTextInputComponentWithDefaultValue8.includes('...')) {
                    warnMessages.reduxFormTextInputComponents.testFormTextInputComponentWithDefaultValue8.push('Why use ellipses at the end?');
                }
            }

            if (reduxFormTextInputComponentsValues['testFormTextInputComponentWithDefaultValue9'] || reduxFormTextInputComponentsValues.has('testFormTextInputComponentWithDefaultValue9')) {
                const testFormTextInputComponentWithDefaultValue9 = reduxFormTextInputComponentsValues['testFormTextInputComponentWithDefaultValue9'] || reduxFormTextInputComponentsValues.get('testFormTextInputComponentWithDefaultValue9');

                warnMessages.reduxFormTextInputComponents.testFormTextInputComponentWithDefaultValue9 = [];

                if (testFormTextInputComponentWithDefaultValue9.includes('Test')) {
                    warnMessages.reduxFormTextInputComponents.testFormTextInputComponentWithDefaultValue9.push('Why use "test" keyword?');
                }

                if (testFormTextInputComponentWithDefaultValue9.includes('...')) {
                    warnMessages.reduxFormTextInputComponents.testFormTextInputComponentWithDefaultValue9.push('Why use ellipses at the end?');
                }
            }
        }


        return warnMessages;
    },

    validate: inputValues => {
        const errorMessages = {
            reduxFormTextInputComponents: {}
        };

        if (!inputValues) {
            return errorMessages;
        }

        if (inputValues['reduxFormTextInputComponents'] || inputValues.has('reduxFormTextInputComponents')) {
            const reduxFormTextInputComponentsValues = inputValues['reduxFormTextInputComponents'] || inputValues.get('reduxFormTextInputComponents');

            if (reduxFormTextInputComponentsValues['testFormTextInputComponentWithDefaultValue7'] || reduxFormTextInputComponentsValues.has('testFormTextInputComponentWithDefaultValue7')) {
                const testFormTextInputComponentWithDefaultValue7 = reduxFormTextInputComponentsValues['testFormTextInputComponentWithDefaultValue7'] || reduxFormTextInputComponentsValues.get('testFormTextInputComponentWithDefaultValue7');

                errorMessages.reduxFormTextInputComponents.testFormTextInputComponentWithDefaultValue7 = [];

                if (testFormTextInputComponentWithDefaultValue7.length > 20) {
                    errorMessages.reduxFormTextInputComponents.testFormTextInputComponentWithDefaultValue7.push('Text length cannot exceed 20 symbols...');
                }

                if (testFormTextInputComponentWithDefaultValue7.includes('7')) {
                    errorMessages.reduxFormTextInputComponents.testFormTextInputComponentWithDefaultValue7.push('Text cannot contain "7" symbol...');
                }
            }

            if (reduxFormTextInputComponentsValues['testFormTextInputComponentWithDefaultValue9'] || reduxFormTextInputComponentsValues.has('testFormTextInputComponentWithDefaultValue9')) {
                const testFormTextInputComponentWithDefaultValue9 = reduxFormTextInputComponentsValues['testFormTextInputComponentWithDefaultValue9'] || reduxFormTextInputComponentsValues.get('testFormTextInputComponentWithDefaultValue9');

                errorMessages.reduxFormTextInputComponents.testFormTextInputComponentWithDefaultValue9 = [];

                if (testFormTextInputComponentWithDefaultValue9.length > 20) {
                    errorMessages.reduxFormTextInputComponents.testFormTextInputComponentWithDefaultValue9.push('Text length cannot exceed 20 symbols...');
                }

                if (testFormTextInputComponentWithDefaultValue9.includes('9')) {
                    errorMessages.reduxFormTextInputComponents.testFormTextInputComponentWithDefaultValue9.push('Text cannot contain "9" symbol...');
                }
            }
        }


        return errorMessages;
    },
})(ComponentFormContainer);

export default injectSheet(styles)(ComponentFormContainerConnected);