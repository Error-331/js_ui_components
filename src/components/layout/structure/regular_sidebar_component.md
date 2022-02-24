Test:

```jsx

const {ReduxFormGeneratorComponent} = require('./redux_form_generator_component');

const specializationOptions = {
  'HR': 1,
  'QA': 2,
  'Developer': 3,
};

const companyOptions = {
  'WeAreBrainless': 1,
  'Beta Software': 2,
  'DataFart': 3,
};

const testItems1 = [
  [{type: 'text', name: 'salary_from', props: {label: 'Salary from', variant: 2}}],
  [{type: 'text', name: 'salary_to', props: {label: 'Salary to', variant: 2}}],
  [{
    type: 'dropdown',
    name: 'specialization_id',
    props: {label: 'Specialization', variant: 2, options: specializationOptions}
  }],
  [{type: 'dropdown', name: 'company_id', props: {label: 'Company', variant: 2, options: companyOptions}}],
  [{type: 'checkbox', name: 'employed', props: {label: 'Is employed', labelPosition: 'right', variant: 2}}],
  [{type: 'checkbox', name: 'status', props: {label: 'Is active', labelPosition: 'right', variant: 2}}],
  [{type: 'date', name: 'date_created', props: {label: 'Creation date', variant: 2}}]
];

<RegularSidebarComponent style={{maxWidth: '230px'}}>
  <ReduxFormGeneratorComponent items={testItems1}/>
</RegularSidebarComponent>

```
