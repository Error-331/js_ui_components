Usage example (without overlay buttons):

```jsx

const {CompanyCard1} = require('./company_card1');

<CompanyCard1
    name='FEETBOOT'
    phone='+380688256335'
    showButtonsOverlay={false}
    creationDate='2017-02-01T12:01:27'
/>

```

Usage example (with overlay buttons):

```jsx

const {CompanyCard1} = require('./company_card1');
const {RegularButtonComponent} = require('./../../buttons/regular_button_component');

const buttonItems = [
    [
        {elm: RegularButtonComponent, props: {shape: 'round', size: 'medium', iconClassName: 'fas fa-search'}},
        {elm: RegularButtonComponent, props: {shape: 'round', size: 'medium', iconClassName: 'fas fa-pencil'}},
        {elm: RegularButtonComponent, props: {shape: 'round', size: 'medium', iconClassName: 'fas fa-trash'}},
    ]
];

<CompanyCard1
    name='IT Frukt'
    phone='(640) 888-2451'
    showButtonsOverlay={true}
    creationDate='2018-05-15T10:11:35'
    overlayButtonItems={buttonItems}
/>

```