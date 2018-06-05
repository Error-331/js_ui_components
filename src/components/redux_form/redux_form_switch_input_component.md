Editable switch with no labels set:

```jsx

<ReduxFormSwitchInputComponent
    name='testFormSwitchInputComponent1'
/>
```

Disabled switch with no labels set:

```jsx

<ReduxFormSwitchInputComponent
    name='testFormSwitchInputComponent2'
    disabled={true}
/>
```

Editable switch with default value set but no labels:

```jsx

<ReduxFormSwitchInputComponent
    name='reduxFormSwitchInputComponents.testFormSwitchInputComponentWithDefaultValue1'
/>
```

Disabled switch with default value set but no labels:

```jsx

<ReduxFormSwitchInputComponent
    name='reduxFormSwitchInputComponents.testFormSwitchInputComponentWithDefaultValue2'
    disabled={true}
/>
```

Editable switch with both labels set:

```jsx

<ReduxFormSwitchInputComponent
    name='testFormSwitchInputComponent3'

    leftLabel='off'
    rightLabel='on'
/>
```

Editable switch with both labels set as well as default value:

```jsx

<ReduxFormSwitchInputComponent
    name='reduxFormSwitchInputComponents.testFormSwitchInputComponentWithDefaultValue3'

    leftLabel='off'
    rightLabel='on'
/>
```

Disabled switch with both labels set:

```jsx

<ReduxFormSwitchInputComponent
    name='testFormSwitchInputComponent4'

    disabled={true}

    leftLabel='off'
    rightLabel='on'
/>
```

Disabled switch with both labels set as well as default value:

```jsx

<ReduxFormSwitchInputComponent
    name='reduxFormSwitchInputComponents.testFormSwitchInputComponentWithDefaultValue4'

    disabled={true}

    leftLabel='off'
    rightLabel='on'
/>
```