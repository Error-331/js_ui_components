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
        {type: 'text', name: 'input1', options: {label: 'First name'}}, 
        {type: 'text', span: 2, name: 'input2', options: {label: 'Last name'}}
    ],
    [
        {type: 'text', span: 3, name: 'input3', options: {label: 'Note'}}
    ],
    [
        {type: 'checkbox', span: 1, name: 'input4', options: {label: 'Employed', labelPosition: 'right'}}, 
        {type: 'dropdown', span: 2, name: 'input5', options: {label: 'Role', options: dropDownOptions}}
    ],
    [
        {type: 'date', span: 3, name: 'input6', options: {label: 'Date of birth'}}
    ]
];

<ReduxFormGeneratorComponent items={testItems1}/>

```