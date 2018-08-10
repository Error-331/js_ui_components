Editable checkbox with no labels set:

```jsx

const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');

<SimpleFlexGridContainer>
    <SimpleFlexGridRow>
        <SimpleFlexGridColumn>
            <ReduxFormCheckboxInputComponent
                name='testFormCheckboxInputComponent1'
            />
        </SimpleFlexGridColumn>
        
        <SimpleFlexGridColumn style={{marginLeft: '5px'}}>
            <ReduxFormCheckboxInputComponent
                variant={2}
                name='testFormCheckboxInputComponentVariant2_1'/>
        </SimpleFlexGridColumn>
    </SimpleFlexGridRow>
</SimpleFlexGridContainer>

```

Disabled checkbox with no labels set:

```jsx

<ReduxFormCheckboxInputComponent
    name='testFormCheckboxInputComponent2'
    disabled={true}
/>
```

Editable checkbox with default value set but no labels:

```jsx

<ReduxFormCheckboxInputComponent
    name='reduxFormCheckboxInputComponents.testFormCheckboxInputComponentWithDefaultValue1'
/>
```

Disabled checkbox with default value set but no labels:

```jsx

<ReduxFormCheckboxInputComponent
    name='reduxFormCheckboxInputComponents.testFormCheckboxInputComponentWithDefaultValue2'
    disabled={true}
/>
```

Editable checkbox with label (left):

```jsx

<ReduxFormCheckboxInputComponent
    name='testFormCheckboxInputComponent3'

    labelPosition='left'
    label='test label'
/>
```

Editable checkbox with label (right):

```jsx

<ReduxFormCheckboxInputComponent
    name='testFormCheckboxInputComponent4'

    labelPosition='right'
    label='test label'
/>
```

Editable checkbox with label (right) set as well as default value:

```jsx

<ReduxFormCheckboxInputComponent
    name='reduxFormCheckboxInputComponents.testFormCheckboxInputComponentWithDefaultValue3'

    labelPosition='right'
    label='test label'
/>
```

Disabled checkbox with label (right) set:

```jsx

<ReduxFormCheckboxInputComponent
    name='testFormCheckboxInputComponent5'

    disabled={true}

    labelPosition='right'
    label='test label'
/>
```

Disabled checkbox with label (right) set as well as default value:

```jsx

<ReduxFormCheckboxInputComponent
    name='reduxFormCheckboxInputComponents.testFormCheckboxInputComponentWithDefaultValue4'

    disabled={true}

    labelPosition='right'
    label='test label'
/>
```