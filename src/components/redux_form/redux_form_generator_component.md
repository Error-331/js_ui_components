Example of generated redux form:

```jsx

const {ReduxFormGeneratorComponent} = require('./redux_form_generator_component');

const testItems1 = [
    [{type: 'text', name: 'c1', options: {label: 'text1'}}, {type: 'text', name: 'c2', options: {label: 'text2'}}],
    [{type: 'text', span: 2, name: 'c3', options: {label: 'text3'}}],
    [{type: 'checkbox', span: 1, name: 'c4', options: {label: 'check4'}}],
];

<ReduxFormGeneratorComponent items={testItems1}/>

```