Test:

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
        name='demo1.name'
        placeholder='user name...'
        label='Name'
    
        componentContainerStyles={nameControlStyles}
        iconClassNames='fas fa-user'
    />
    
    <ReduxFormTextInputComponent
        name='demo1.password'
        type='password'
        placeholder='user password...'
        label='Password'
        
        componentContainerStyles={passwordControlStyles}
        iconClassNames='fas fa-key'
    />
    
    <ReduxFormTextInputComponent
        name='demo1.email'
        placeholder='user email...'
        label='Email'
        
        componentContainerStyles={emailControlStyles}
        iconClassNames='fas fa-at'
    />    
    
    <ReduxFormCheckboxInputComponent
        name='demo1.isActive'
        labelPosition='right'
        label='is active'
        
        componentContainerStyles={isActiveControlStyles}
    />       
    
    <div style={buttonsContainerStyles}>
        <RegularButtonComponent label='Cancel' variant='outlined' containerStyles={cancelButtonStyles}/>
        <RegularButtonComponent label='Save' containerStyles={saveButtonStyles}/>
    </div>

</RegularCardComponent>

```