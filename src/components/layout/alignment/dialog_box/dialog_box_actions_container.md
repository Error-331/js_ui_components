Dialog box actions container default behaviour:

```jsx

const {DialogBoxActionsContainer} = require('./');
const {RegularButtonComponent} = require('./../../../buttons/regular_button_component');

<DialogBoxActionsContainer>
    <RegularButtonComponent label='Save' iconClassName='fas fa-save'/>
    <RegularButtonComponent label='Cancel' iconClassName='fas fa-ban' variant='outlined'/>
</DialogBoxActionsContainer>
    
```

Dialog box actions container with reversed buttons order:

```jsx

const {DialogBoxActionsContainer} = require('./');
const {RegularButtonComponent} = require('./../../../buttons/regular_button_component');

<DialogBoxActionsContainer direction='ltr'>
    <RegularButtonComponent label='Save' iconClassName='fas fa-save'/>
    <RegularButtonComponent label='Cancel' iconClassName='fas fa-ban' variant='outlined'/>
</DialogBoxActionsContainer>
    
```

Dialog box actions container default behaviour with elements divided into groups:

```jsx

const {DialogBoxActionsContainer} = require('./');
const {RegularButtonComponent} = require('./../../../buttons/regular_button_component');

<DialogBoxActionsContainer mainGroupCount={2}>
    <RegularButtonComponent label='Save' iconClassName='fas fa-save'/>
    <RegularButtonComponent label='Cancel' iconClassName='fas fa-ban' variant='outlined'/>
    
    <RegularButtonComponent label='Forgot password?' variant='text' textType='secondary'/>
    <RegularButtonComponent label='Register' variant='outlined' textType='secondary' />
</DialogBoxActionsContainer>
    
```

Dialog box actions container with reverse order of elements divided into groups:

```jsx

const {DialogBoxActionsContainer} = require('./');
const {RegularButtonComponent} = require('./../../../buttons/regular_button_component');

<DialogBoxActionsContainer mainGroupCount={2} direction='ltr'>
    <RegularButtonComponent label='Save' iconClassName='fas fa-save'/>
    <RegularButtonComponent label='Cancel' iconClassName='fas fa-ban' variant='outlined'/>
    
    <RegularButtonComponent label='Forgot password?' variant='text' textType='secondary'/>
    <RegularButtonComponent label='Register' variant='outlined' textType='secondary' />
</DialogBoxActionsContainer>
    