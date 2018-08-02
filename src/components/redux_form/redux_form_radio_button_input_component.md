Editable radio buttons (medium) without labels:

```jsx

const {ElementsGroup} = require('./../layout/alignment/elements_group');

<ElementsGroup>

    <ReduxFormRadioButtonInputComponent
        name='testFormRadioButtonInputComponent1'
        value='testVal1'
/>

    <ReduxFormRadioButtonInputComponent
        name='testFormRadioButtonInputComponent1'
        value='testVal2'
    />

</ElementsGroup>

```

Disabled radio buttons (medium) without labels:

```jsx

const {ElementsGroup} = require('./../layout/alignment/elements_group');

<ElementsGroup>

    <ReduxFormRadioButtonInputComponent
        name='testFormRadioButtonInputComponent2'
        value='testVal1'
        
        disabled={true}
/>

    <ReduxFormRadioButtonInputComponent
        name='testFormRadioButtonInputComponent2'
        value='testVal2'
        
        disabled={true}
    />

</ElementsGroup>

```

Editable radio buttons (medium) with default value set but no labels:

```jsx

const {ElementsGroup} = require('./../layout/alignment/elements_group');

<ElementsGroup>

    <ReduxFormRadioButtonInputComponent
        name='reduxFormRadioButtonInputComponents.testFromRadioButtonInputComponentWithDefaultValue1'
        value='testVal1'
    />

    <ReduxFormRadioButtonInputComponent
        name='reduxFormRadioButtonInputComponents.testFromRadioButtonInputComponentWithDefaultValue1'
        value='testVal2' 
    />

</ElementsGroup>

```

Disabled radio buttons (medium) with default value set but no labels:

```jsx

const {ElementsGroup} = require('./../layout/alignment/elements_group');

<ElementsGroup>

    <ReduxFormRadioButtonInputComponent
        name='reduxFormRadioButtonInputComponents.testFromRadioButtonInputComponentWithDefaultValue2'
        value='testVal1'
        
        disabled={true}
    />

    <ReduxFormRadioButtonInputComponent
        name='reduxFormRadioButtonInputComponents.testFromRadioButtonInputComponentWithDefaultValue2'
        value='testVal2' 
        
        disabled={true}
    />

</ElementsGroup>

```

Editable radio buttons (medium) with labels (left):

```jsx

const {ElementsGroup} = require('./../layout/alignment/elements_group');

<ElementsGroup>

    <ReduxFormRadioButtonInputComponent
        name='testFormRadioButtonInputComponent3'
        value='testVal1'
        
        label='test label'
        labelPosition='left'
    />

    <ReduxFormRadioButtonInputComponent
        name='testFormRadioButtonInputComponent3'
        value='testVal2' 
     
        label='test label'
        labelPosition='left'
    />

</ElementsGroup>

```

Editable radio buttons (medium) with labels (right):

```jsx

const {ElementsGroup} = require('./../layout/alignment/elements_group');

<ElementsGroup>

    <ReduxFormRadioButtonInputComponent
        name='testFormRadioButtonInputComponent4'
        value='testVal1'
        
        label='test label'
        labelPosition='right'
    />

    <ReduxFormRadioButtonInputComponent
        name='testFormRadioButtonInputComponent4'
        value='testVal2' 
     
        label='test label'
        labelPosition='right'
    />

</ElementsGroup>

```

Editable radio buttons (medium) with labels (right) set as well as default value:

```jsx

const {ElementsGroup} = require('./../layout/alignment/elements_group');

<ElementsGroup>

    <ReduxFormRadioButtonInputComponent
        name='reduxFormRadioButtonInputComponents.testFromRadioButtonInputComponentWithDefaultValue3'
        value='testVal1'
        
        label='test label'
        labelPosition='right'
    />

    <ReduxFormRadioButtonInputComponent
        name='reduxFormRadioButtonInputComponents.testFromRadioButtonInputComponentWithDefaultValue3'
        value='testVal2' 
     
        label='test label'
        labelPosition='right'
    />

</ElementsGroup>

```

Disabled radio buttons (medium) with labels (right) set:

```jsx

const {ElementsGroup} = require('./../layout/alignment/elements_group');

<ElementsGroup>

    <ReduxFormRadioButtonInputComponent
        name='reduxFormRadioButtonInputComponents5'
        value='testVal1'
        
        disabled={true}
        
        label='test label'
        labelPosition='right'
    />

    <ReduxFormRadioButtonInputComponent
        name='reduxFormRadioButtonInputComponents5'
        value='testVal2' 
        
        disabled={true}
     
        label='test label'
        labelPosition='right'
    />

</ElementsGroup>

```

Disabled radio buttons (medium) with labels (right) set as well as default value:

```jsx

const {ElementsGroup} = require('./../layout/alignment/elements_group');

<ElementsGroup>

    <ReduxFormRadioButtonInputComponent
        name='reduxFormRadioButtonInputComponents.testFromRadioButtonInputComponentWithDefaultValue4'
        value='testVal1'
        
        disabled={true}
        
        label='test label'
        labelPosition='right'
    />

    <ReduxFormRadioButtonInputComponent
        name='reduxFormRadioButtonInputComponents.testFromRadioButtonInputComponentWithDefaultValue4'
        value='testVal2' 
        
        disabled={true}
     
        label='test label'
        labelPosition='right'
    />

</ElementsGroup>

```