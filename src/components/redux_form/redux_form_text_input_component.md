Empty editable text input field without any specific parameters set:

```jsx

<ReduxFormTextInputComponent
    name='testFormTextInputComponent1'
/>
```

Empty editable text input field with specific icon:

```jsx

<ReduxFormTextInputComponent
    name='testFormTextInputComponent2'

    iconClassNames='fas fa-user'
/>
```

Empty readonly text input field with specific icon:

```jsx

<ReduxFormTextInputComponent
    name='testFormTextInputComponent3'

    readOnly={true}
    iconClassNames='fas fa-user'
/>
```

Empty disabled text input field with specific icon:

```jsx

<ReduxFormTextInputComponent
    name='testFormTextInputComponent4'

    disabled={true}
    iconClassNames='fas fa-user'
/>
```

Empty readonly and disabled text input field with specific icon:

```jsx

<ReduxFormTextInputComponent
    name='testFormTextInputComponent5'

    readOnly={true}
    disabled={true}

    iconClassNames='fas fa-user'
/>
```

Editable text input field with default value set:

```jsx

<ReduxFormTextInputComponent
    name='reduxFormTextInputComponents.testFormTextInputComponentWithDefaultValue1'
/>
```

Editable text input field with default value and specific icon set:

```jsx

<ReduxFormTextInputComponent
    name='reduxFormTextInputComponents.testFormTextInputComponentWithDefaultValue2'

    iconClassNames='fas fa-bus'
/>
```

Readonly text input field with default value and specific icon:

```jsx

<ReduxFormTextInputComponent
    name='reduxFormTextInputComponents.testFormTextInputComponentWithDefaultValue3'

    readOnly={true}
    iconClassNames='fas fa-bus'
/>
```

Disabled text input field with default value and specific icon:

```jsx

<ReduxFormTextInputComponent
    name='reduxFormTextInputComponents.testFormTextInputComponentWithDefaultValue4'

    disabled={true}
    iconClassNames='fas fa-bus'
/>
```

Readonly and disabled text input field with default value and specific icon:

```jsx

<ReduxFormTextInputComponent
    name='reduxFormTextInputComponents.testFormTextInputComponentWithDefaultValue5'

    readOnly={true}
    disabled={true}

    iconClassNames='fas fa-bus'
/>
```

Empty editable text input field with specified label:

```jsx

<ReduxFormTextInputComponent
    name='testFormTextInputComponent6'

    label='Test label'
/>
```

Empty editable text input field with specified label and icon:

```jsx

<ReduxFormTextInputComponent
    name='testFormTextInputComponent7'

    label='Test label'
    iconClassNames='fas fa-edit'
/>
```

Empty readonly text input field with specified label and icon:

```jsx

<ReduxFormTextInputComponent
    name='testFormTextInputComponent8'

    readOnly={true}

    label='Test label'
    iconClassNames='fas fa-edit'
/>
```

Empty disabled text input field with specified label and icon:

```jsx

<ReduxFormTextInputComponent
    name='testFormTextInputComponent9'

    disabled={true}

    label='Test label'
    iconClassNames='fas fa-edit'
/>
```

Empty readonly and disabled text input field with specified label and icon:

```jsx

<ReduxFormTextInputComponent
    name='testFormTextInputComponent10'

    disabled={true}

    label='Test label'
    iconClassNames='fas fa-edit'
/>
```

Empty editable text input field with placeholder text:

```jsx

<ReduxFormTextInputComponent
    name='testFormTextInputComponent11'

    placeholder='Test placeholder text...'
/>
```

Empty editable text input field with specified label and placeholder text:

```jsx

<ReduxFormTextInputComponent
    name='testFormTextInputComponent12'

    label='Test label'
    placeholder='Test placeholder text...'
/>
```

Empty editable text input field with specified label, placeholder text and icon:

```jsx

<ReduxFormTextInputComponent
    name='testFormTextInputComponent13'

    label='Test label'
    placeholder='Test placeholder text...'
    iconClassNames='fas fa-meh'
/>
```

Empty readonly text input field with specified label, placeholder text and icon:

```jsx

<ReduxFormTextInputComponent
    name='testFormTextInputComponent14'

    readOnly={true}

    label='Test label'
    placeholder='Test placeholder text...'
    iconClassNames='fas fa-meh'
/>
```

Empty disabled text input field with specified label, placeholder text and icon:

```jsx

<ReduxFormTextInputComponent
    name='testFormTextInputComponent15'

    disabled={true}

    label='Test label'
    placeholder='Test placeholder text...'
    iconClassNames='fas fa-meh'
/>
```

Empty readonly and disabled text input field with specified label, placeholder text and icon:

```jsx

<ReduxFormTextInputComponent
    name='testFormTextInputComponent16'

    readOnly={true}
    disabled={true}

    label='Test label'
    placeholder='Test placeholder text...'
    iconClassNames='fas fa-meh'
/>
```


Editable text input field with specified label, placeholder text, icon and default value:

```jsx

<ReduxFormTextInputComponent
    name='reduxFormTextInputComponents.testFormTextInputComponentWithDefaultValue6'

    label='Test label'
    placeholder='Test placeholder text...'
    iconClassNames='fas fa-dumbbell'
/>
```

Editable text input with errors shown (note that 'errorsIfTouched' flag is set to true):

```jsx

<ReduxFormTextInputComponent
    name='reduxFormTextInputComponents.testFormTextInputComponentWithDefaultValue7'

    errorsIfTouched={false}
    warningsIfTouched={false}

    label='Test label'
    placeholder='Test placeholder text...'
    iconClassNames='fas fa-dumbbell'
/>
```

Editable text input with warnings shown (note that 'warningsIfTouched' flag is set to true):

```jsx

<ReduxFormTextInputComponent
    name='reduxFormTextInputComponents.testFormTextInputComponentWithDefaultValue8'

    errorsIfTouched={false}
    warningsIfTouched={false}

    label='Test label'
    placeholder='Test placeholder text...'
    iconClassNames='fas fa-dumbbell'
/>
```

Editable text input with errors and warnings shown (note that 'errorsIfTouched' and 'warningsIfTouched' flags are both set to true):

```jsx

<ReduxFormTextInputComponent
    name='reduxFormTextInputComponents.testFormTextInputComponentWithDefaultValue9'

    errorsIfTouched={false}
    warningsIfTouched={false}

    label='Test label'
    placeholder='Test placeholder text...'
    iconClassNames='fas fa-dumbbell'
/>
```