Example of generated Redux form:

```jsx

const ReduxFormGeneratorComponent = require('./redux_form_generator_component').default;

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
    [
        {type: 'tag_separate', hspan: 2, name: 'input9'},
        
        {
            type: 'radio_row', childrenProps: [
                {name: 'input10', value: 'it', label: 'IT', labelPosition: 'right'},
                {name: 'input10', value: 'none-it', label: 'None-IT', labelPosition: 'right'}
            ]
        }
    ],    
    
    [
        {
            type: 'radio_column', hspan: 2, childrenProps: [
                {name: 'input11', value: 'hr', label: 'HR', labelPosition: 'right'},
                {name: 'input11', value: 'qa', label: 'QA', labelPosition: 'right'},
                {name: 'input11', value: 'Junior Software Developer', label: 'Junior Software Developer', labelPosition: 'right'},
                {name: 'input11', value: 'Middle Software Developer', label: 'Middle Software Developer', labelPosition: 'right'},
                {name: 'input11', value: 'Senior Software Developer', label: 'Senior Software Developer', labelPosition: 'right'},
            ]
        }
    ],     
];

<ReduxFormGeneratorComponent items={testItems1}/>

```
