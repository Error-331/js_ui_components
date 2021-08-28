Empty editable drop down input field without any specific parameters set:

```jsx

const {ReduxFormDropDownInputComponent} = require('./redux_form_drop_down_input_component');

<ReduxFormDropDownInputComponent
    name='testFormDropDownInputComponent1'
    options={{
        'Test option 1': 'option_1',
        'Test option 2': 'option_2',
        'Test option 3': 'option_3',
        'Test option 4': 'option_4',
    }}
/>
```

Empty readonly drop down input field without any specific parameters set:

```jsx

const {ReduxFormDropDownInputComponent} = require('./redux_form_drop_down_input_component');

<ReduxFormDropDownInputComponent
    name='testFormDropDownInputComponent2'
    
    readOnly={true}
    options={{
        'Test option 1': 'option_1',
        'Test option 2': 'option_2',
        'Test option 3': 'option_3',
        'Test option 4': 'option_4',
    }}
/>
```

Empty disabled drop down input field without any specific parameters set:

```jsx

const {ReduxFormDropDownInputComponent} = require('./redux_form_drop_down_input_component');

<ReduxFormDropDownInputComponent
    name='testFormDropDownInputComponent3'
    
    disabled={true}
    options={{
        'Test option 1': 'option_1',
        'Test option 2': 'option_2',
        'Test option 3': 'option_3',
        'Test option 4': 'option_4',
    }}
/>
```

Empty readonly and disabled drop down input field without any specific parameters set:

```jsx

const {ReduxFormDropDownInputComponent} = require('./redux_form_drop_down_input_component');

<ReduxFormDropDownInputComponent
    name='testFormDropDownInputComponent4'
    
    readOnly={true}
    disabled={true}
    
    options={{
        'Test option 1': 'option_1',
        'Test option 2': 'option_2',
        'Test option 3': 'option_3',
        'Test option 4': 'option_4',
    }}
/>
```

Editable drop down input field with default value set:

```jsx

const {ReduxFormDropDownInputComponent} = require('./redux_form_drop_down_input_component');

<ReduxFormDropDownInputComponent
    name='reduxFormDropDownInputComponents.testFromDropDownInputComponentWithDefaultValue1'
    options={{
        'Test option 1': 'option_1',
        'Test option 2': 'option_2',
        'Test option 3': 'option_3',
        'Test option 4': 'option_4',
    }}
/>
```

Readonly drop down input field with default value set:

```jsx

const {ReduxFormDropDownInputComponent} = require('./redux_form_drop_down_input_component');

<ReduxFormDropDownInputComponent
    name='reduxFormDropDownInputComponents.testFromDropDownInputComponentWithDefaultValue2'
    
    readOnly={true}
    options={{
        'Test option 1': 'option_1',
        'Test option 2': 'option_2',
        'Test option 3': 'option_3',
        'Test option 4': 'option_4',
    }}
/>
```

Disabled drop down input field with default value set:

```jsx

const {ReduxFormDropDownInputComponent} = require('./redux_form_drop_down_input_component');

<ReduxFormDropDownInputComponent
    name='reduxFormDropDownInputComponents.testFromDropDownInputComponentWithDefaultValue3'
    
    disabled={true}
    options={{
        'Test option 1': 'option_1',
        'Test option 2': 'option_2',
        'Test option 3': 'option_3',
        'Test option 4': 'option_4',
    }}
/>
```

Readonly and disabled drop down input field with default value set:

```jsx

const {ReduxFormDropDownInputComponent} = require('./redux_form_drop_down_input_component');

<ReduxFormDropDownInputComponent
    name='reduxFormDropDownInputComponents.testFromDropDownInputComponentWithDefaultValue4'
    
    readOnly={true}
    disabled={true}
    
    options={{
        'Test option 1': 'option_1',
        'Test option 2': 'option_2',
        'Test option 3': 'option_3',
        'Test option 4': 'option_4',
    }}
/>
```

Empty editable drop down input field with specified label:

```jsx

const {ReduxFormDropDownInputComponent} = require('./redux_form_drop_down_input_component');

<ReduxFormDropDownInputComponent
    name='testFormDropDownInputComponent5'
    label='Test label'
    
    options={{
        'Test option 1': 'option_1',
        'Test option 2': 'option_2',
        'Test option 3': 'option_3',
        'Test option 4': 'option_4',
    }}
/>
```

Empty readonly drop down input field with specified label:

```jsx

const {ReduxFormDropDownInputComponent} = require('./redux_form_drop_down_input_component');

<ReduxFormDropDownInputComponent
    name='testFormDropDownInputComponent6'
    label='Test label'
    
    readOnly={true}
    
    options={{
        'Test option 1': 'option_1',
        'Test option 2': 'option_2',
        'Test option 3': 'option_3',
        'Test option 4': 'option_4',
    }}
/>
```

Empty disabled drop down input field with specified label:

```jsx

const {ReduxFormDropDownInputComponent} = require('./redux_form_drop_down_input_component');

<ReduxFormDropDownInputComponent
    name='testFormDropDownInputComponent7'
    label='Test label'
    
    disabled={true}
    
    options={{
        'Test option 1': 'option_1',
        'Test option 2': 'option_2',
        'Test option 3': 'option_3',
        'Test option 4': 'option_4',
    }}
/>
```

Empty readonly and disabled drop down input field with specified label:

```jsx

const {ReduxFormDropDownInputComponent} = require('./redux_form_drop_down_input_component');

<ReduxFormDropDownInputComponent
    name='testFormDropDownInputComponent8'
    label='Test label'
    
    disabled={true}
    
    options={{
        'Test option 1': 'option_1',
        'Test option 2': 'option_2',
        'Test option 3': 'option_3',
        'Test option 4': 'option_4',
    }}
/>
```

Empty editable drop down input field with placeholder text:

```jsx

const {ReduxFormDropDownInputComponent} = require('./redux_form_drop_down_input_component');

<ReduxFormDropDownInputComponent
    name='testFormDropDownInputComponent9'
    placeholder='Test placeholder text...'
    
    options={{
        'Test option 1': 'option_1',
        'Test option 2': 'option_2',
        'Test option 3': 'option_3',
        'Test option 4': 'option_4',
    }}
/>
```

Empty editable drop down input field with specified label and placeholder text:

```jsx

const {ReduxFormDropDownInputComponent} = require('./redux_form_drop_down_input_component');

<ReduxFormDropDownInputComponent
    name='testFormDropDownInputComponent10'
    
    label='Test label'
    placeholder='Test placeholder text...'
    
    options={{
        'Test option 1': 'option_1',
        'Test option 2': 'option_2',
        'Test option 3': 'option_3',
        'Test option 4': 'option_4',
    }}
/>
```

Empty readonly drop down input field with specified label and placeholder text:

```jsx

const {ReduxFormDropDownInputComponent} = require('./redux_form_drop_down_input_component');

<ReduxFormDropDownInputComponent
    name='testFormDropDownInputComponent11'
    
    readOnly={true}
    
    label='Test label'
    placeholder='Test placeholder text...'
    
    options={{
        'Test option 1': 'option_1',
        'Test option 2': 'option_2',
        'Test option 3': 'option_3',
        'Test option 4': 'option_4',
    }}
/>
```

Empty disabled drop down input field with specified label and placeholder text:

```jsx

const {ReduxFormDropDownInputComponent} = require('./redux_form_drop_down_input_component');

<ReduxFormDropDownInputComponent
    name='testFormDropDownInputComponent12'
    
    disabled={true}
    
    label='Test label'
    placeholder='Test placeholder text...'
    
    options={{
        'Test option 1': 'option_1',
        'Test option 2': 'option_2',
        'Test option 3': 'option_3',
        'Test option 4': 'option_4',
    }}
/>

```

Editable drop down input field with specified label, placeholder text and default value:

```jsx

const {ReduxFormDropDownInputComponent} = require('./redux_form_drop_down_input_component');

<ReduxFormDropDownInputComponent
    name='reduxFormDropDownInputComponents.testFromDropDownInputComponentWithDefaultValue5'
    
    label='Test label'
    placeholder='Test placeholder text...'
    
    options={{
        'Test option 1': 'option_1',
        'Test option 2': 'option_2',
        'Test option 3': 'option_3',
        'Test option 4': 'option_4',
    }}
/>

```

User styled (variant 1) editable down input field with specified label and placeholder:

```jsx

const injectSheet = require('react-jss').default;
const {mergeDeepRight} = require('ramda');

const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./index');
const {ReduxFormTextInputComponent} = require('./redux_form_text_input_component');
const {ReduxFormDropDownInputComponent} = require('./redux_form_drop_down_input_component');

const {FormTextInputVariant1Class, styles} = require('./form_text_input_variant1_component');

const newStyles = theme => {
  return mergeDeepRight(
    styles(theme),
    {
      componentContainer: {
        padding: '0px',

        '& > $inputContainer': {
          boxSizing: 'border-box',
          position: 'relative',

          display: 'block',

          '& > $inputControl': {
            overflow: 'hidden',
            display: 'block',

            width: '100%',

            margin: '0 0 0 0',
            border: '1px solid #C2C2C2',
            borderBottomColor: '#C2C2C2',
            padding: '12px 17px 12px 17px',

            fontFamily: theme.inputStyles.fontStack,
            fontSize: `12px`,
            lineHeight: `12px`,

            boxShadow: 'none',
            color: 'black',

            '&::-webkit-input-placeholder': {color: 'grey'},
            '&::-moz-placeholder': {color: 'grey'},
            '&::-ms-input-placeholder': {color: 'grey'},

            '&.focus': {
              borderBottomColor: '#C2C2C2',
              color: 'black',
            },

            '&.error': {
              color: 'black',
              borderColor: 'red',
            },

            '&.readOnly': {
              borderBottomColor: '#C2C2C2',
              color: 'grey',
            },

            '&.disabled': {
              borderBottomStyle: '#C2C2C2',
              color: 'grey',
            },
          },

          '& > $inputControlLabel': {
            fontSize: `11px`,
            '-webkit-transform': 'translateY(-120%)',
            transform: 'translateY(-120%)',

            color: 'black',

            '&.focus': {color: 'black'},
            '&.error': {color: 'red'},
            '&.readOnly': {color: 'grey'},
            '&.disabled': {color: 'grey'},
          },

          '& > $inputControlIcon': {
            position: 'absolute',
            top: '7px',
            right: '17px',
            left: 'inherit',


            color: '#2DAD69',
            fontSize: '28px',

            '&.focus': {color: 'grey'},
            '&.error': {color: 'red'},
            '&.readOnly': {color: 'gray'},
            '&.disabled': {color: 'gray'},
          },
        },

        '& > $errorsContainer': {
          marginTop: '2px',

          '& > $errorContainer': {
            marginTop: '2px',

            color: 'red',
          }
        },

        '& > $warningsContainer': {
          color: 'blue',
        },
      },

      inputContainer: {},
      inputControl: {},
      inputControlLabel: {},
      inputControlIcon: {},

      subMessagesContainer: {},

      errorsContainer: {},
      errorContainer: {},

      warningsContainer: {},
      warningContainer: {},
    }
  )
};

const FormTextInputCustomComponent = injectSheet(newStyles)(FormTextInputVariant1Class);

function TestContainerComponent(props) {
  const {classes, theme} = props;

  return <SimpleFlexGridContainer>
    <SimpleFlexGridRow>
      <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
        <ReduxFormDropDownInputComponent
          textInputCustomComponent={<FormTextInputCustomComponent/>}

          iconClassName='fal fa-chevron-down'
          name='testFormDropDownInputComponent12'

          label='Test label'
          placeholder='Test placeholder text...'

          options={{
            'Test option 1': 'option_1',
            'Test option 2': 'option_2',
            'Test option 3': 'option_3',
            'Test option 4': 'option_4',
          }}
        />
      </SimpleFlexGridColumn>
    </SimpleFlexGridRow>
  </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles)(TestContainerComponent);

<TestContainer/>

```

User styled (variant 1) editable down input field with specified label and placeholder:

```jsx

const injectSheet = require('react-jss').default;
const {mergeDeepRight} = require('ramda');

const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('../grid/simple_flex_grid');
const {ReduxFormTextInputComponent} = require('./redux_form_text_input_component');
const {ReduxFormDropDownInputComponent} = require('./redux_form_drop_down_input_component');

const {
  FormTextInputVariant1Class,
  styles
} = require('../form/form_text_input_variants/form_text_input_variant1_component');

const newStyles = theme => {
  return mergeDeepRight(
    styles(theme),
    {
      componentContainer: {
        padding: '0px',

        '& > $inputContainer': {
          boxSizing: 'border-box',
          position: 'relative',

          display: 'block',

          '& > $inputControl': {
            overflow: 'hidden',
            display: 'block',

            width: '100%',

            margin: '0 0 0 0',
            border: '1px solid #C2C2C2',
            borderBottomColor: '#C2C2C2',
            padding: '12px 17px 12px 17px',

            fontFamily: theme.inputStyles.fontStack,
            fontSize: `12px`,
            lineHeight: `12px`,

            boxShadow: 'none',
            color: 'black',

            '&::-webkit-input-placeholder': {color: 'grey'},
            '&::-moz-placeholder': {color: 'grey'},
            '&::-ms-input-placeholder': {color: 'grey'},

            '&.focus': {
              borderBottomColor: '#C2C2C2',
              color: 'black',
            },

            '&.error': {
              color: 'black',
              borderColor: 'red',
            },

            '&.readOnly': {
              borderBottomColor: '#C2C2C2',
              color: 'grey',
            },

            '&.disabled': {
              borderBottomStyle: '#C2C2C2',
              color: 'grey',
            },
          },

          '& > $inputControlLabel': {
            fontSize: `11px`,
            '-webkit-transform': 'translateY(-120%)',
            transform: 'translateY(-120%)',

            color: 'black',

            '&.focus': {color: 'black'},
            '&.error': {color: 'red'},
            '&.readOnly': {color: 'grey'},
            '&.disabled': {color: 'grey'},
          },

          '& > $inputControlIcon': {
            position: 'absolute',

            top: '12px',
            right: '10px',
            left: 'inherit',


            color: '#2DAD69',
            fontSize: '17px',

            '&.focus': {color: 'grey'},
            '&.error': {color: 'red'},
            '&.readOnly': {color: 'gray'},
            '&.disabled': {color: 'gray'},
          },
        },

        '& > $errorsContainer': {
          marginTop: '2px',

          '& > $errorContainer': {
            marginTop: '2px',

            color: 'red',
          }
        },

        '& > $warningsContainer': {
          color: 'blue',
        },
      },

      inputContainer: {},
      inputControl: {},
      inputControlLabel: {},
      inputControlIcon: {},

      subMessagesContainer: {},

      errorsContainer: {},
      errorContainer: {},

      warningsContainer: {},
      warningContainer: {},
    }
  )
};

const FormTextInputCustomComponent = injectSheet(newStyles, {injectTheme: true})(FormTextInputVariant1Class);

function TestContainerComponent(props) {
  const {classes, theme} = props;

  return <SimpleFlexGridContainer>
    <SimpleFlexGridRow>
      <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
        <ReduxFormDropDownInputComponent
          textInputCustomComponent={<FormTextInputCustomComponent/>}

          iconClassName='fal fa-chevron-down'
          name='testFormDropDownInputComponent13'

          label='Test label'
          placeholder='Test placeholder text...'

          options={{
            'Test option 1': 'option_1',
            'Test option 2': 'option_2',
            'Test option 3': 'option_3',
            'Test option 4': 'option_4',
          }}
        />
      </SimpleFlexGridColumn>
    </SimpleFlexGridRow>
  </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles)(TestContainerComponent);

<TestContainer/>

```
