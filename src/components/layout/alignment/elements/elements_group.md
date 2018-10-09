A number of radio buttons aligned to the left and arranged into column:

```jsx

const {ElementsGroup} = require('./elements_group');
const {ReduxFormRadioButtonInputComponent} = require('./../../../redux_form/redux_form_radio_button_input_component');

<ElementsGroup direction='column' alignment='left'>

    <ReduxFormRadioButtonInputComponent
        name='testFormRadioButtonInputComponentInGroup1'
        value='testVal1'
        
        label='test label'
        labelPosition='right'
    />

    <ReduxFormRadioButtonInputComponent
        name='testFormRadioButtonInputComponentInGroup1'
        value='testVal2'
        
        label='test label'
        labelPosition='right'
    />

</ElementsGroup>

```

A number of radio buttons aligned to the right and arranged into column:

```jsx

const {ElementsGroup} = require('./elements_group');
const {ReduxFormRadioButtonInputComponent} = require('./../../../redux_form/redux_form_radio_button_input_component');

<ElementsGroup direction='column' alignment='right'>

    <ReduxFormRadioButtonInputComponent
        name='testFormRadioButtonInputComponentInGroup2'
        value='testVal1'
        
        label='test label'
        labelPosition='right'
    />

    <ReduxFormRadioButtonInputComponent
        name='testFormRadioButtonInputComponentInGroup2'
        value='testVal2'
        
        label='test label'
        labelPosition='right'
    />

</ElementsGroup>

```

A number of radio buttons aligned to the center and arranged into column:

```jsx

const {ElementsGroup} = require('./elements_group');
const {ReduxFormRadioButtonInputComponent} = require('./../../../redux_form/redux_form_radio_button_input_component');

<ElementsGroup direction='column' alignment='center'>

    <ReduxFormRadioButtonInputComponent
        name='testFormRadioButtonInputComponentInGroup3'
        value='testVal1'
        
        label='test label'
        labelPosition='right'
    />

    <ReduxFormRadioButtonInputComponent
        name='testFormRadioButtonInputComponentInGroup3'
        value='testVal2'
        
        label='test label'
        labelPosition='right'
    />

</ElementsGroup>

```

A number of radio buttons aligned to the left and arranged into row:

```jsx

const {ElementsGroup} = require('./elements_group');
const {ReduxFormRadioButtonInputComponent} = require('./../../../redux_form/redux_form_radio_button_input_component');

<ElementsGroup direction='row' alignment='left'>

    <ReduxFormRadioButtonInputComponent
        name='testFormRadioButtonInputComponentInGroup4'
        value='testVal1'
        
        label='test label'
        labelPosition='right'
    />

    <ReduxFormRadioButtonInputComponent
        name='testFormRadioButtonInputComponentInGroup4'
        value='testVal2'
        
        label='test label'
        labelPosition='right'
    />

</ElementsGroup>

```

A number of radio buttons aligned to the right and arranged into row:

```jsx

const {ElementsGroup} = require('./elements_group');
const {ReduxFormRadioButtonInputComponent} = require('./../../../redux_form/redux_form_radio_button_input_component');

<ElementsGroup direction='row' alignment='right'>

    <ReduxFormRadioButtonInputComponent
        name='testFormRadioButtonInputComponentInGroup5'
        value='testVal1'
        
        label='test label'
        labelPosition='right'
    />

    <ReduxFormRadioButtonInputComponent
        name='testFormRadioButtonInputComponentInGroup5'
        value='testVal2'
        
        label='test label'
        labelPosition='right'
    />

</ElementsGroup>

```

A number of radio buttons aligned to the center and arranged into row:

```jsx

const {ElementsGroup} = require('./elements_group');
const {ReduxFormRadioButtonInputComponent} = require('./../../../redux_form/redux_form_radio_button_input_component');

<ElementsGroup direction='row' alignment='center'>

    <ReduxFormRadioButtonInputComponent
        name='testFormRadioButtonInputComponentInGroup6'
        value='testVal1'
        
        label='test label'
        labelPosition='right'
    />

    <ReduxFormRadioButtonInputComponent
        name='testFormRadioButtonInputComponentInGroup6'
        value='testVal2'
        
        label='test label'
        labelPosition='right'
    />

</ElementsGroup>

```