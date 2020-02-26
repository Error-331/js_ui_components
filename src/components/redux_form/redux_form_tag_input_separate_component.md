tt1

```jsx

<ReduxFormTagInputSeparateComponent
    name='testFormTagInputSeparateComponent1'
/>


```

tt2

```jsx

<ReduxFormTagInputSeparateComponent
    name='reduxTagInputSeparateComponents.testFromTagInputSeparateComponentWithDefaultValue1'
/>


```

tt3

```jsx

const injectSheet = require('react-jss').default;

const {FormTextInputVariant1Class} = require('./../form/form_text_input_variants/form_text_input_variant1_component');

const styles = theme => ({
    componentContainer: {
        boxSizing: 'border-box',

        position: 'relative',
        display: 'flex',

        flexBasis: 'auto',
        flexShrink: 1,
        flexGrow: 0,

        flexDirection: 'column',
        flexWrap: 'nowrap',

        justifyContent: 'flex-start',
        alignItems: 'stretch',
        alignContent: 'flex-start',

        '& > $inputContainer': {
            boxSizing: 'border-box',
            position: 'relative',
            
            '& > $inputControl': {
                boxSizing: 'border-box',
                overflow: 'hidden',
            
                width: '100%',
            
                margin: '0 0 0 0',

                border: '1px solid #C2C2C2',

                padding: '12px 17px 12px 17px',

                fontFamily: theme.inputStyles.fontStack,
                fontSize: `12px`,

                boxShadow: 'none',

                color: 'black',

                '&::-webkit-input-placeholder': {
                    color: 'grey',
                },

                '&::-moz-placeholder': {
                    color: 'grey',
                },

                '&::-ms-input-placeholder': {
                    color: 'grey',
                },

                '&.error': {
                    color: 'black',
                    borderColor: 'red',
                },

            },
                        
            '& > $inputControlLabel': {
                position: 'absolute',

                top: `${theme.inputStyles.fontSize - theme.inputStyles.labelInactiveFontSize}px`,
                left: '0px',

                fontFamily: theme.inputStyles.fontStack,

                cursor: 'text',
                transition: '.2s ease-out',

                fontSize: `11px`,
                '-webkit-transform': 'translateY(-120%)',
                transform: 'translateY(-120%)',

                color: 'black',

                '&.error': {
                    color: 'red',
                },
            },

            '& > $inputControlLabel:first-letter': {
                textTransform: 'capitalize',
            },
            
            '& > $inputControlIcon': {
                position: 'absolute',
                top: '12px',
                left: '12px',

                color: 'gray',
                fontSize: '16px',

                '&.error': {
                    color: 'red'
                },
            },                  
        },
             
        '& > $subMessagesContainer': {
            boxSizing: 'border-box',
            display: 'flex',

            flexBasis: 'auto',
            flexShrink: '1',
            flexGrow: '0',

            flexDirection: 'column',
            flexWrap: 'nowrap',

            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            alignContent: 'flex-start',
        },

        '& > $errorsContainer': {
            marginTop: '2px',
            color: theme.inputStyles.attentionColor,

            '& > $errorContainer': {
                marginTop: '2px',

                fontFamily: theme.inputStyles.fontStack,
                fontSize: theme.inputStyles.errorFontSize,
                
                color: 'red',
            }
        },

        '& > $warningsContainer': {
            color: 'blue',

            '& > $warningContainer': {
                marginTop: '2px',

                fontFamily: theme.inputStyles.fontStack,
                fontSize: theme.inputStyles.errorFontSize,
            },
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
});

const FormTextInputCustomComponent = injectSheet(styles)(FormTextInputVariant1Class);

<ReduxFormTagInputSeparateComponent
    customTextInputComponent={FormTextInputCustomComponent}
    name='testFormTagInputSeparateComponent2'
/>


```
