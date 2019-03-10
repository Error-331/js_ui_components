Usage example 1:

```jsx

<VacancyCard1 
    logoSrc='/assets/images/logos/logo10.svg' 
    date='2017-03-21T09:12:42' 
    company='Buintellias' 
    title='Middle/Senior Java Developer, PN Backend Services, HERE' 
    location='Kiev, Kharkiv' 
    salaryMin={3000}
    salaryMax={3500} 
    currency='$'
/>

```

Usage example 2:

```jsx

<VacancyCard1 
    date="2018-01-12T10:00:00" 
    company='Logoless' 
    title='Junior Java Developrer' 
    remote={true} 
    salaryMax={1500} 
    currency='hr'
/>

```

Usage example (with overlay buttons):

```jsx

const {RegularButtonComponent} = require('./../../buttons/regular_button_component');

<VacancyCard1 
    logoSrc='/assets/images/logos/logo8.svg' 
    date="2012-10-03T02:24:38" 
    company='Xatrix' 
    title='Senior QA' 
    location='Kiev, Odessa, Lviv' 
    remote={true} 
    salaryMax={2000} 
    currency='$'
    
    showButtonsOverlay={true}
>

    <RegularButtonComponent shape='round' size='medium' iconClassName='fas fa-search'/>
    <RegularButtonComponent shape='round' size='medium' iconClassName='fas fa-pencil'/>
    <RegularButtonComponent shape='round' size='medium' iconClassName='fas fa-trash'/>
</VacancyCard1>

```