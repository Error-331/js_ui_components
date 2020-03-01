Empty editable tag input field without any specific parameters set:

```jsx

<ReduxFormTagInputSeparateComponent
    name='testFormTagInputSeparateComponent1'
/>


```

Editable tag input field with predefined tags list:

```jsx

<ReduxFormTagInputSeparateComponent
    name='reduxTagInputSeparateComponents.testFromTagInputSeparateComponentWithDefaultValue1'
/>


```

Empty editable tag input field with custom styling:

```jsx

const injectSheet = require('react-jss').default;
const {mergeDeepRight} = require('ramda');

const formTextInputVariant1Component = require('./../form/form_text_input_variants/form_text_input_variant1_component');
const chipVariant1Component = require('./../buttons/chip_variants/chip_variant1_component');

const newTextInputStyles = theme => {
    return mergeDeepRight(
        formTextInputVariant1Component.styles(theme),
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
                        padding: '12px 17px 12px 36px',
        
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
                        left: '12px',
        
                        color: 'gray',
                        fontSize: '16px',

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

const newChipStyles = theme => {
    return mergeDeepRight(
        chipVariant1Component.styles(theme),
        {
            componentContainer: {
                borderRadius: '4px',

                boxShadow: 'none',
    
                '&.contained': {
                    backgroundColor: '#2DAD6A',

                    '&.clickable': {
                        '&:hover': {
                            backgroundColor: '#248a55',
                        },
                    },
                    
                    '& > $iconContainer': {
                        fontSize: '10px',
                        
                        '&.default': {    
                        },
                    },
     
                    '& > $labelContainer': {
                        '&.default': {
                            color: '#ffffff',
                        }
                    }
                }
            },

            labelContainer: {},
            iconContainer: {},
        }
    )
}

const FormTextInputCustomComponent = injectSheet(newTextInputStyles)(formTextInputVariant1Component.FormTextInputVariant1Class);
const ChipCustomComponent = injectSheet(newChipStyles)(chipVariant1Component.ChipVariant1Component);

<ReduxFormTagInputSeparateComponent
    customTextInputComponent={FormTextInputCustomComponent}
    customChipComponent={ChipCustomComponent}
    name='testFormTagInputSeparateComponent2'
/>


```

Empty editable tag input field with specific label and placeholder:

```jsx

<ReduxFormTagInputSeparateComponent
    name='testFormTagInputSeparateComponent3'
    
    label='Test label'
    placeholder='Test placeholder text...'    
/>


```
