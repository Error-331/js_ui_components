Usage example (none remote):

```jsx

<ResumeCard1
    name='Charlotte'
    lastName='Massingberd'
    
    updateDate='2018-05-15T10:11:35'
    position='Senior software developer'
    specialization='Frontend'
    
    currentLocation='Los Gatos, CA, USA'
    remote={false}
    
    desiredSalary={8000}
    currency='$'
/>

```

Usage example (remote):

```jsx

<ResumeCard1
    name='Maksim'
    lastName='Gubarev'
    
    updateDate='2016-02-12T09:15:25'
    position='Senior PHP developer'
    specialization='Backend'
    
    currentLocation='Nikolaev'
    remote={true}
    
    desiredSalary={2000}
    currency='$'
/>

```

Usage example (remote with overlay buttons):

```jsx

const {RegularButtonComponent} = require('./../../buttons/regular_button_component');

<ResumeCard1
    name='Nicusor'
    lastName='Mihaili'
    
    updateDate='2014-05-02T06:02:43'
    position='Senior QA'
    specialization='QA'
    
    currentLocation='Timișoara'
    remote={true}
    
    desiredSalary={500}
    currency='$'
    
    showButtonsOverlay={true}
>
    <RegularButtonComponent shape='round' size='medium' iconClassName='fas fa-search'/>
    <RegularButtonComponent shape='round' size='medium' iconClassName='fas fa-pencil'/>
    <RegularButtonComponent shape='round' size='medium' iconClassName='fas fa-trash'/>
</ResumeCard1>

```