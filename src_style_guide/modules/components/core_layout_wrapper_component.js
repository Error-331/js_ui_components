'use strict';

// external imports
import React, {Component} from 'react';
import {Form} from 'redux-form';
import {reduxForm} from 'redux-form/immutable';
import injectSheet from 'react-jss';

// local imports

// styles definition
const styles = theme => ({
    '@global': {
        '@font-face': theme['@font-face']
    },
});

// component definition
class CoreLayoutWrapperComponent extends Component {
    render() {
        return (
            <Form onSubmit={() => {}}>
                {this.props.children}
            </Form>
        );
    }
}

// exports
const CoreLayoutWrapperComponentConnected = reduxForm({
    form: 'loginForm',

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
            testFromDropDownInputComponentWithDefaultValue1: 'option_3',
            testFromDropDownInputComponentWithDefaultValue2: 'option_2',
            testFromDropDownInputComponentWithDefaultValue3: 'option_4',
            testFromDropDownInputComponentWithDefaultValue4: 'option_1',
            testFromDropDownInputComponentWithDefaultValue5: 'option_3',
        }
    }
})(CoreLayoutWrapperComponent);

export default injectSheet(styles)(CoreLayoutWrapperComponentConnected);