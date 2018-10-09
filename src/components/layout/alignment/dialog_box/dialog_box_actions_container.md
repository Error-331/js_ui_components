Dialog box actions container default behaviour:

```jsx

const {RegularButtonComponent} = require('./../../../buttons/regular_button_component');

    <DialogBoxActionsContainer>
        <RegularButtonComponent label='Save' iconClassName='fas fa-save'/>
        <RegularButtonComponent label='Cancel' iconClassName='fas fa-ban' variant='outlined'/>
    </DialogBoxActionsContainer>
```

Dialog box actions container with reversed buttons order:

```jsx

const {RegularButtonComponent} = require('./../../../buttons/regular_button_component');

    <DialogBoxActionsContainer direction='ltr'>
        <RegularButtonComponent label='Save' iconClassName='fas fa-save'/>
        <RegularButtonComponent label='Cancel' iconClassName='fas fa-ban' variant='outlined'/>
    </DialogBoxActionsContainer>
```