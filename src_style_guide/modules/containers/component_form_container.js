'use strict';

// external imports
import React, {Component} from 'react';
import {reduxForm} from 'redux-form/immutable';
import injectSheet from 'react-jss';

import {clone} from 'ramda';
import moment from 'moment';

// local imports
import {MAIN_FORM_NAME} from './../constants/redux_constants';

// styles definition
const styles = () => ({});

// constants definition
const FORM_TAG_INPUT_DEFAULT_DATA_SET_1 = [
    {label: '.NET', data: '.NET', clickable: true},
    {label: 'Android', data: 'Android', clickable: true},
    {label: 'C / C++ / Embedded', data: 'C / C++ / Embedded', clickable: true},
    {label: 'Data Sciance', data: 'Data Sciance', clickable: true},
    {label: 'DBA', data: 'DBA', clickable: true},
    {label: 'DevOps / Sysadmin', data: 'DevOps / Sysadmin', clickable: true},
    {label: 'Fronte-end / JS', data: 'Fronte-end / JS', clickable: true},
    {label: 'Gamedev / Unity / AS3', data: 'Gamedev / Unity / AS3', clickable: true},
    {label: 'Golang', data: 'Golang', clickable: true},
    {label: 'iOS', data: 'iOS', clickable: true},
    {label: 'Java', data: 'Java', clickable: true},
    {label: 'Lead', data: 'Lead', clickable: true},
    {label: 'Node.js', data: 'Node.js', clickable: true},
    {label: 'PHP', data: 'PHP', clickable: true},
    {label: 'Product Manager', data: 'Product Manager', clickable: true},
    {label: 'Product Manager (PM)', data: 'Product Manager (PM)', clickable: true},
    {label: 'Python', data: 'Python', clickable: true},
    {label: 'Rubu / Rails', data: 'Rubu / Rails', clickable: true},
    {label: 'QA Automation', data: 'QA Automation', clickable: true},
    {label: 'QA Manual', data: 'QA Manual', clickable: true},
    {label: 'Scala', data: 'Scala', clickable: true},
    {label: 'UX / Design', data: 'UX / Design', clickable: true},
    {label: 'Бизнес-аналитика (BA)', data: 'Бизнес-аналитика (BA)', clickable: true},
    {label: 'Маркетинг', data: 'Маркетинг', clickable: true},
    {label: 'Поддержка', data: 'Поддержка', clickable: true},
    {label: 'Продажи', data: 'Продажи', clickable: true},
    {label: 'Рекрутеры и HR', data: 'Рекрутеры и HR', clickable: true},
    {label: '(Другие)', data: '(Другие)', clickable: true},
];

// component definition
class ComponentFormContainer extends Component {
    // region static props
    // endregion

    // region private props
    // endregion

    // region constructor
    constructor(props: PropsTypes) {
        super(props);
        const self: any = this;


        self._onSubmit = self._onSubmit.bind(this);
    }

    // endregion

    // region business logic
    // endregion

    // region lifecycle methods
    // endregion

    // region style accessors
    // endregion

    // region label accessors
    // endregion

    // region state accessors
    // endregion

    // region prop accessors
    // endregion

    // region handlers
    _onSubmit(event) {
        event.preventDefault();
    }

    // endregion

    // region render methods
    render() {
        return null;
       /* return (
            <form onSubmit={this._onSubmit}>
                {this.props.children}
            </form>
        );*/
    }

    // endregion
}

// exports
const ComponentFormContainerConnected = ComponentFormContainer;

/*const ComponentFormContainerConnected = reduxForm({
    form: MAIN_FORM_NAME,

    initialValues: clone({
        reduxFormTextInputComponents: {
            testFormTextInputComponentWithDefaultValue1: 'Test (text) default value 1...',
            testFormTextInputComponentWithDefaultValue2: 'Test (text) default value 2...',
            testFormTextInputComponentWithDefaultValue3: 'Test (text) default value 3...',
            testFormTextInputComponentWithDefaultValue4: 'Test (text) default value 4...',
            testFormTextInputComponentWithDefaultValue5: 'Test (text) default value 5...',
            testFormTextInputComponentWithDefaultValue6: 'Test (text) default value 6...',
            testFormTextInputComponentWithDefaultValue7: 'Test (text) default value 7...',
            testFormTextInputComponentWithDefaultValue8: 'Test (text) default value 8...',
            testFormTextInputComponentWithDefaultValue9: 'Test (text) default value 9...',
            testFormTextInputComponentWithDefaultValue10: 'Test (text) default value 10...',

            testFormTextAreaInputComponentWithDefaultValue1: 'Test (text area) default value 1...',
            testFormTextAreaInputComponentWithDefaultValue2: 'Test (text area) default value 2...',
            testFormTextAreaInputComponentWithDefaultValue3: 'Test (text area) default value 3...',
            testFormTextAreaInputComponentWithDefaultValue4: 'Test (text area) default value 4...',
            testFormTextAreaInputComponentWithDefaultValue5: 'Test (text area) default value 5...',
            testFormTextAreaInputComponentWithDefaultValue6: 'Test (text area) default value 6...',
            testFormTextAreaInputComponentWithDefaultValue7: 'Test (text area) default value 7...',
            testFormTextAreaInputComponentWithDefaultValue8: 'Test (text area) default value 8...',
            testFormTextAreaInputComponentWithDefaultValue9: 'Test (text area) default value 9...',
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
            testFromRadioButtonInputComponentWithDefaultValue5: 'testVal1',
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
        },

        reduxSliderInputComponents: {
            testFromSliderInputComponentWithDefaultValue1: {handle1: 10, handle2: 50},
            testFromSliderInputComponentWithDefaultValue2: {handle1: 30, handle2: 45},
            testFromSliderInputComponentWithDefaultValue3: {handle1: 35, handle2: 40},
            testFromSliderInputComponentWithDefaultValue4: {handle1: 20, handle2: 80},
        },

        reduxTagInputSeparateComponents: {
            testFromTagInputSeparateComponentWithDefaultValue1: clone(FORM_TAG_INPUT_DEFAULT_DATA_SET_1),
        },

        login: {
          email: '',
          password: '',
        },
    }),

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

            if (reduxFormTextInputComponentsValues['testFormTextInputComponentWithDefaultValue10'] || reduxFormTextInputComponentsValues.has('testFormTextInputComponentWithDefaultValue10')) {
                const testFormTextInputComponentWithDefaultValue10 = reduxFormTextInputComponentsValues['testFormTextInputComponentWithDefaultValue10'] || reduxFormTextInputComponentsValues.get('testFormTextInputComponentWithDefaultValue10');

                warnMessages.reduxFormTextInputComponents.testFormTextInputComponentWithDefaultValue10 = [];

                if (testFormTextInputComponentWithDefaultValue10.includes('Test')) {
                    warnMessages.reduxFormTextInputComponents.testFormTextInputComponentWithDefaultValue10.push('Why use "test" keyword?');
                }

                if (testFormTextInputComponentWithDefaultValue10.includes('...')) {
                    warnMessages.reduxFormTextInputComponents.testFormTextInputComponentWithDefaultValue10.push('Why use ellipses at the end?');
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

            if (reduxFormTextInputComponentsValues['testFormTextInputComponentWithDefaultValue10'] || reduxFormTextInputComponentsValues.has('testFormTextInputComponentWithDefaultValue10')) {
                const testFormTextInputComponentWithDefaultValue10 = reduxFormTextInputComponentsValues['testFormTextInputComponentWithDefaultValue10'] || reduxFormTextInputComponentsValues.get('testFormTextInputComponentWithDefaultValue10');

                errorMessages.reduxFormTextInputComponents.testFormTextInputComponentWithDefaultValue10 = [];

                if (testFormTextInputComponentWithDefaultValue10.length > 20) {
                    errorMessages.reduxFormTextInputComponents.testFormTextInputComponentWithDefaultValue10.push('Text length cannot exceed 20 symbols...');
                }

                if (testFormTextInputComponentWithDefaultValue10.includes('10')) {
                    errorMessages.reduxFormTextInputComponents.testFormTextInputComponentWithDefaultValue10.push('Text cannot contain "10" symbol...');
                }
            }
        }


        return errorMessages;
    },
})(ComponentFormContainer);*/

export default injectSheet(styles)(ComponentFormContainerConnected);
