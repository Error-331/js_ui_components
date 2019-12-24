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
        {type: 'text', hspan: 2, name: 'input2', props: {label: 'Last name'}}
    ],
    [
        {type: 'text', hspan: 3, name: 'input3', props: {label: 'Note'}}
    ],
    [
        {type: 'textarea', hspan: 3, name: 'textreainput1', props: {label: 'Description', rows: 5}}, 
    ],    
    [
        {type: 'checkbox', hspan: 1, name: 'input4', props: {label: 'Employed', labelPosition: 'right'}}, 
        {type: 'dropdown', hspan: 2, name: 'input5', props: {label: 'Role', options: dropDownOptions}}
    ],
    [
        {type: 'date', hspan: 3, name: 'input6', props: {label: 'Date of birth'}}
    ]
];

<ReduxFormGeneratorComponent items={testItems1}/>

```
