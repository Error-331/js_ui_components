Usage example (none remote):

```jsx

const {ResumeCard1} = require('./resume_card1');

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

const {ResumeCard1} = require('./resume_card1');

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