Mock-up of 'log in' dialog body:

```jsx

const {RegularCardComponent, RegularCardHeaderComponent} = require('./../../../src/components/layout');
const {ReduxFormTextInputComponent} = require('./../../../src/components/redux_form');

const {RegularButtonComponent} = require('./../../../src/components/buttons/regular_button_component');

const cardContainerStyles = {
    boxSizing: 'border-box',
    maxWidth: '500px',
};

const controlsContainerStyles = {
    boxSizing: 'border-box',
    display: 'grid',
   
    gridTemplateAreas: `
        "email   "
        "password"
        "buttons "
    `,
            
    gridColumnGap: '25px', 
    gridRowGap: '15px',
                    
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'repeat(auto-fit, max-content)',
};

const emailControlStyles = {
    boxSizing: 'border-box', 
                                        
    gridArea: 'email', 
}

const passwordControlStyles = {
    boxSizing: 'border-box', 
                                        
    gridArea: 'password', 
}

const buttonsContainerStyles = {
    boxSizing: 'border-box', 
                                                                                                    
    gridArea: 'buttons',
    display: 'grid',
    
    gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
    gridAutoRows: 'max-content',
    gridColumnGap: '25px',
};

const loginButtonStyles = {
    gridColumn: '4 / 5',
}

const headerComponent = <RegularCardHeaderComponent iconClassNames="fas fa-sign-in">Login</RegularCardHeaderComponent>;

<RegularCardComponent
    header={headerComponent}
 
    containerStyles={cardContainerStyles} 
    bodyStyles={controlsContainerStyles}
>
        
    <ReduxFormTextInputComponent
        name='login.email'
        placeholder='user email...'
        label='Email'
        
        componentContainerStyles={emailControlStyles}
        iconClassNames='fas fa-at'
    />    
    
    <ReduxFormTextInputComponent
        name='login.password'
        type='password'
        placeholder='user password...'
        label='Password'
            
        componentContainerStyles={passwordControlStyles}
        iconClassNames='fas fa-key'
    />
         
    <div style={buttonsContainerStyles}>
        <RegularButtonComponent label='Login' containerStyles={loginButtonStyles}/>
    </div>

</RegularCardComponent>

```

Mock-up of 'user edit' dialog body:

```jsx

const {RegularCardComponent, RegularCardHeaderComponent} = require('./../../../src/components/layout');
const {ReduxFormTextInputComponent, ReduxFormCheckboxInputComponent} = require('./../../../src/components/redux_form');

const {RegularButtonComponent} = require('./../../../src/components/buttons/regular_button_component');

const cardContainerStyles = {
    boxSizing: 'border-box',
    maxWidth: '615px',
};

const controlsContainerStyles = {
    boxSizing: 'border-box',
    display: 'grid',
   
    gridTemplateAreas: `
        "name      password"
        "email     .       "
        "is-active .       "
        "buttons   buttons "
    `,
            
    gridColumnGap: '25px', 
    gridRowGap: '15px',
                    
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: 'repeat(auto-fit, max-content)',
};

const nameControlStyles = {
    boxSizing: 'border-box', 
                                        
    gridArea: 'name', 
}

const passwordControlStyles = {
    boxSizing: 'border-box', 
                                                            
    gridArea: 'password',
};

const emailControlStyles = {
    boxSizing: 'border-box', 
                                                                                
    gridArea: 'email',
};

const isActiveControlStyles = {
    boxSizing: 'border-box', 
                                                                                                    
    gridArea: 'is-active',
};

const buttonsContainerStyles = {
    boxSizing: 'border-box', 
                                                                                                    
    gridArea: 'buttons',
    display: 'grid',
    
    gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
    gridAutoRows: 'max-content',
    gridColumnGap: '25px',
};

const cancelButtonStyles = {
    gridColumn: '3 / 4',
}

const saveButtonStyles = {
    gridColumn: '4 / 5',
}

const headerComponent = <RegularCardHeaderComponent iconClassNames="fas fa-id-card">Edit user data</RegularCardHeaderComponent>;

<RegularCardComponent
    header={headerComponent}
 
    containerStyles={cardContainerStyles} 
    bodyStyles={controlsContainerStyles}
>

    <ReduxFormTextInputComponent
        name='edit.user.name'
        placeholder='user name...'
        label='Name'
    
        componentContainerStyles={nameControlStyles}
        iconClassNames='fas fa-user'
    />
    
    <ReduxFormTextInputComponent
        name='edit.user.password'
        type='password'
        placeholder='user password...'
        label='Password'
        
        componentContainerStyles={passwordControlStyles}
        iconClassNames='fas fa-key'
    />
    
    <ReduxFormTextInputComponent
        name='edit.user.email'
        placeholder='user email...'
        label='Email'
        
        componentContainerStyles={emailControlStyles}
        iconClassNames='fas fa-at'
    />    
    
    <ReduxFormCheckboxInputComponent
        name='edit.user.isActive'
        labelPosition='right'
        label='active'
        
        componentContainerStyles={isActiveControlStyles}
    />       
    
    <div style={buttonsContainerStyles}>
        <RegularButtonComponent label='Cancel' variant='outlined' containerStyles={cancelButtonStyles}/>
        <RegularButtonComponent label='Save' containerStyles={saveButtonStyles}/>
    </div>

</RegularCardComponent>

```

Mock-up of 'template edit' dialog body:

```jsx

const {RegularCardComponent, RegularCardHeaderComponent} = require('./../../../src/components/layout');
const {ReduxFormTextInputComponent, ReduxFormCheckboxInputComponent} = require('./../../../src/components/redux_form');

const {RegularButtonComponent} = require('./../../../src/components/buttons/regular_button_component');

const cardContainerStyles = {
    boxSizing: 'border-box',
    maxWidth: '400px',
};

const controlsContainerStyles = {
    boxSizing: 'border-box',
    display: 'grid',
   
    gridTemplateAreas: `
        "name      is-active"
        "directory is-archived"
        "buttons   buttons "
    `,
            
    gridColumnGap: '25px', 
    gridRowGap: '15px',
                    
    gridTemplateColumns: '1fr max-content',
    gridTemplateRows: 'repeat(auto-fit, max-content)',
};

const nameControlStyles = {
    boxSizing: 'border-box', 
                                        
    gridArea: 'name', 
}

const isActiveControlStyles = {
    boxSizing: 'border-box', 
                                        
    gridArea: 'is-active', 
    alignSelf: 'end'
}

const directoryControlStyles = {
    boxSizing: 'border-box', 
                                        
    gridArea: 'directory', 
}

const isArchivedControlStyles = {
    boxSizing: 'border-box', 
                                        
    gridArea: 'is-archived', 
    alignSelf: 'end'
}

const buttonsContainerStyles = {
    boxSizing: 'border-box', 
                                                                                                    
    gridArea: 'buttons',
    display: 'grid',
    
    gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
    gridAutoRows: 'max-content',
    gridColumnGap: '25px',
};

const cancelButtonStyles = {
    gridColumn: '2 / 3',
}

const saveButtonStyles = {
    gridColumn: '3 / 4',
}

const headerComponent = <RegularCardHeaderComponent iconClassNames="fas fa-window-alt">Edit template data</RegularCardHeaderComponent>;

<RegularCardComponent
    header={headerComponent}
 
    containerStyles={cardContainerStyles} 
    bodyStyles={controlsContainerStyles}
>

    <ReduxFormTextInputComponent
        name='edit.template.name'
        placeholder='template name...'
        label='Name'
    
        componentContainerStyles={nameControlStyles}
        iconClassNames='fas fa-user'
    />
    
    <ReduxFormCheckboxInputComponent
        name='edit.template.isActive'
        labelPosition='right'
        label='active'
            
        componentContainerStyles={isActiveControlStyles}
    />   
         
    <ReduxFormTextInputComponent
        name='edit.template.directory.name'
        placeholder='template directory name...'
        label='Name'
        
        componentContainerStyles={directoryControlStyles}
        iconClassNames='fas fa-user'
    />
    
    <ReduxFormCheckboxInputComponent
        name='edit.template.isArchived'
        labelPosition='right'
        label='archived'
                
        componentContainerStyles={isArchivedControlStyles}
    />  
    
    <div style={buttonsContainerStyles}>
        <RegularButtonComponent label='Cancel' variant='outlined' containerStyles={cancelButtonStyles}/>
        <RegularButtonComponent label='Save' containerStyles={saveButtonStyles}/>
    </div>

</RegularCardComponent>

```
