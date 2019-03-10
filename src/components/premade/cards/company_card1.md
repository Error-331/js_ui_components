Usage example (without overlay buttons):

```jsx

const {CompanyCard1} = require('./company_card1');

<CompanyCard1
    name='FEETBOOT'
    phone='+380688256335'
    creationDate='2017-02-01T12:01:27'
    
    showButtonsOverlay={false}
/>

```

Usage example (with overlay buttons):

```jsx

const {CompanyCard1} = require('./company_card1');
const {RegularButtonComponent} = require('./../../buttons/regular_button_component');

<CompanyCard1
    name='IT Frukt'
    phone='(640) 888-2451'
    creationDate='2018-05-15T10:11:35'
    
    showButtonsOverlay={true}
>
    <RegularButtonComponent shape='round' size='medium' iconClassName='fas fa-search'/>
    <RegularButtonComponent shape='round' size='medium' iconClassName='fas fa-pencil'/>
    <RegularButtonComponent shape='round' size='medium' iconClassName='fas fa-trash'/>
</CompanyCard1>

```