A number of buttons aligned to the left:

```jsx

const RegularButtonComponent = require('./../../buttons/regular_button_component').default;

<ElementsRow alignment='left'>
    <RegularButtonComponent label='button 1'/>
    <RegularButtonComponent label='button 2'/>
    <RegularButtonComponent label='button 3'/>
</ElementsRow>

```

A number of buttons aligned to the center:

```jsx

const RegularButtonComponent = require('./../../buttons/regular_button_component').default;

<ElementsRow alignment='center'>
    <RegularButtonComponent label='button 1'/>
    <RegularButtonComponent label='button 2'/>
    <RegularButtonComponent label='button 3'/>
</ElementsRow>

```

A number of buttons aligned to the right:

```jsx

const RegularButtonComponent = require('./../../buttons/regular_button_component').default;

<ElementsRow alignment='right'>
    <RegularButtonComponent label='button 1'/>
    <RegularButtonComponent label='button 2'/>
    <RegularButtonComponent label='button 3'/>
</ElementsRow>

```

Line of right-aligned buttons with hyphenation enabled:

```jsx

const RegularButtonComponent = require('./../../buttons/regular_button_component').default;

<ElementsRow wrap={true} alignment='right' style={{width: '120px'}}>
    <RegularButtonComponent label='button 1'/>
    <RegularButtonComponent label='button 2'/>
    <RegularButtonComponent label='button 3'/>
</ElementsRow>

```