Example of generated Redux form:

```jsx

const {ReduxFormGeneratorComponent} = require('./redux_form_generator_component');

const dropDownOptions = {
  'Option1': 1,
  'Option2': 2,
  'Option2': 3,
};

const testItems1 = [
    [
        {type: 'text', name: 'input1', props: {label: 'First name'}}, 
        {type: 'text', span: 2, name: 'input2', props: {label: 'Last name'}}
    ],
    [
        {type: 'text', span: 3, name: 'input3', props: {label: 'Note'}}
    ],
    [
        {type: 'checkbox', span: 1, name: 'input4', props: {label: 'Employed', labelPosition: 'right'}}, 
        {type: 'dropdown', span: 2, name: 'input5', props: {label: 'Role', options: dropDownOptions}}
    ],
    [
        {type: 'date', span: 3, name: 'input6', props: {label: 'Date of birth'}}
    ]
];

<ReduxFormGeneratorComponent items={testItems1}/>

```