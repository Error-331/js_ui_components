Example of generated Redux form:

```jsx

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
        {type: 'radio', name: 'input6', props: {value: 'male', label: 'Male', labelPosition: 'right'}},
        {type: 'date', hspan: 2, name: 'input7', props: {label: 'Date of birth'}}
    ],
    [
        {type: 'radio', hspan: 3, name: 'input6', props: {value: 'female', label: 'Female', labelPosition: 'right'}},
    ],
    [
        {type: 'slider', hspan: 3, name: 'input8', props: {min: 0, max: 100, step: 5}},
    ],
];

<ReduxFormGeneratorComponent items={testItems1}/>

```
