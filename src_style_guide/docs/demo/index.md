Mock-up of 'user edit' dialog body:

```jsx

const {RegularCardComponent, RegularCardHeaderComponent, DialogBoxActionsContainer} = require('./../../../src/components/layout');
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
    gridArea: 'buttons',
};

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
    
    <DialogBoxActionsContainer style={buttonsContainerStyles}>
        <RegularButtonComponent label='Save'/>
        <RegularButtonComponent label='Cancel' variant='outlined'/>
    </DialogBoxActionsContainer>

</RegularCardComponent>

```

Mock-up of 'template edit' dialog body:

```jsx

const {RegularCardComponent, RegularCardHeaderComponent, DialogBoxActionsContainer} = require('./../../../src/components/layout');
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
    gridArea: 'buttons',
};

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
        iconClassNames='fas fa-window-alt'
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
        label='Directory name'
        
        componentContainerStyles={directoryControlStyles}
        iconClassNames='fas fa-folder'
    />
    
    <ReduxFormCheckboxInputComponent
        name='edit.template.isArchived'
        labelPosition='right'
        label='archived'
                
        componentContainerStyles={isArchivedControlStyles}
    />  
    
    <DialogBoxActionsContainer style={buttonsContainerStyles}>
        <RegularButtonComponent label='Cancel' variant='outlined'/>
        <RegularButtonComponent label='Save'/>
    </DialogBoxActionsContainer>

</RegularCardComponent>

```

Mock-up of 'domain edit' dialog body:

```jsx

const {RegularCardComponent, RegularCardHeaderComponent, DialogBoxActionsContainer} = require('./../../../src/components/layout');
const {
    ReduxFormTextInputComponent, 
    ReduxFormCheckboxInputComponent,
    ReduxFormDateInputComponent,
    ReduxFormDropDownInputComponent,
} = require('./../../../src/components/redux_form');

const {RegularButtonComponent} = require('./../../../src/components/buttons/regular_button_component');

const timeZonesJSON = require('./../../modules/resources/time_zones.json');

const cardContainerStyles = {
    boxSizing: 'border-box',
    maxWidth: '550px',
};

const controlsContainerStyles = {
    boxSizing: 'border-box',
    display: 'grid',
   
    gridTemplateAreas: `
        "full-name              full-name                   full-name"
        "date-of-purchase-local date-of-purchase-utc-offset date-of-purchase-utc-offset"
        "is-active              is-active                   is-active"
        "buttons                buttons                     buttons"
    `,
            
    gridColumnGap: '25px', 
    gridRowGap: '15px',
                    
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: 'repeat(auto-fit, max-content)',
};

const fullNameControlStyles = {
    boxSizing: 'border-box', 
                                        
    gridArea: 'full-name', 
}

const dateOfPurchaseLocalStyles = {
    boxSizing: 'border-box', 
                                        
    gridArea: 'date-of-purchase-local', 
}

const dateOfPurchaseUTCOffsetStyles = {
    boxSizing: 'border-box', 
                                        
    gridArea: 'date-of-purchase-utc-offset', 
}

const isActiveControlStyles = {
    boxSizing: 'border-box', 
                                        
    gridArea: 'is-active', 
    alignSelf: 'end'
}

const buttonsContainerStyles = {                                                                                                    
    gridArea: 'buttons',
};

const headerComponent = <RegularCardHeaderComponent iconClassNames="fas fa-globe">Edit domain data</RegularCardHeaderComponent>;

<RegularCardComponent
    header={headerComponent}
 
    containerStyles={cardContainerStyles} 
    bodyStyles={controlsContainerStyles}
>
    <ReduxFormTextInputComponent
        name='edit.domain.fullname'
        placeholder='domain name...'
        label='Name'
    
        componentContainerStyles={fullNameControlStyles}
        iconClassNames='fas fa-globe'
    />
    
    <ReduxFormDateInputComponent
        name='edit.domain.dateOfPurchaseLocal'
        placeholder='date of purchase...'
        label='Date of purchase (local)'
                
        componentContainerStyles={dateOfPurchaseLocalStyles}
    />      
    
    <ReduxFormDropDownInputComponent
        name='edit.domain.dateOfPurchaseUTCOffset'
        placeholder='UTC offset...'
        label='Date of purchase UTC offset'
        
        options={timeZonesJSON}
                
        componentContainerStyles={dateOfPurchaseUTCOffsetStyles}
    />    
    
    <ReduxFormCheckboxInputComponent
        name='edit.domain.isActive'
        labelPosition='right'
        label='active'
            
        componentContainerStyles={isActiveControlStyles}
    />         
    
    <DialogBoxActionsContainer style={buttonsContainerStyles}>
        <RegularButtonComponent label='Cancel' variant='outlined'/>
        <RegularButtonComponent label='Save'/>
    </DialogBoxActionsContainer>

</RegularCardComponent>

```

Test:

```jsx

const {Component} = require('react');

const {VerticalIconNavigationMenuComponent, VerticalSlidingNavigationMenuComponent} = require('./../../../src/components/navigation');
const {RegularCardComponent, RegularCardHeaderComponent} = require('./../../../src/components/layout');

const menuItems = [
    { 
        iconClassName: 'fas fa-ad', 
        caption: 'advertisement campaigns', 
        children: [
            {
                iconClassName: 'fas fa-boxes', 
                caption: 'campaign types', 
            },
            
            {
                iconClassName: 'fas fa-list-alt', 
                caption: 'campaign list', 
            }
        ]
    },
    { 
        iconClassName: 'fas fa-window-alt', 
        caption: 'templates' 
    }, 
    { 
        iconClassName: 'fas fa-globe', 
        caption: 'own domains' 
    }, 
    { 
        iconClassName: 'fas fa-wrench', 
        caption: 'utilities',
        children: [
            {
                iconClassName: 'fas fa-atlas', 
                caption: 'country codes',
            },
            
            {
                iconClassName: 'fas fa-clock', 
                caption: 'time zones',
            },
        ]
    }, 
];

class NavigationDemoComponent1 extends Component {
    constructor(props) {
        super(props);
        
        this._onMenuItemClick = this._onMenuItemClick.bind(this);
        this._onMenuParentItemClick = this._onMenuParentItemClick.bind(this);
        
        this.state = {
            selectedItems: []
        }
    }
    
    _getComponentContainerStyle() {
        return {
            boxSizing: 'border-box',
            display: 'grid',
            
            gridTemplateColumns: 'max-content max-content 1fr',
            gridAutoRows: '500px',
            
            gridColumnGap: '0px'
        };
    }
    
    _getCardContainerStyles() {
        return {
            marginLeft: '8px'
        };
    }
    
    _onMenuItemClick(index) {
        const selectedItems = this.state.selectedItems.slice();
        selectedItems.push(index);

        this.setState({
            selectedItems
        });
    }
    
    _onMenuParentItemClick(index) {
        const selectedItems = this.state.selectedItems.slice();
        selectedItems.pop();

        this.setState({
            selectedItems
        });    
    }
   
    render() {
        const headerComponent = <RegularCardHeaderComponent iconClassNames="fas fa-id-card">Edit</RegularCardHeaderComponent>;
    
        return <div style={this._getComponentContainerStyle()}>
            <VerticalIconNavigationMenuComponent bottomItemsCount={3}>
                <i className='fas fa-home'/>
                <i className='fas fa-analytics'/>
                <i className='fas fa-file-user'/>
                <i className='fas fa-money-check'/>
                        
                <i className='fas fa-bell'/>
                <i className='fas fa-wifi'/>
                <i className='fas fa-user'/>  
            </VerticalIconNavigationMenuComponent>
        
            <VerticalSlidingNavigationMenuComponent         
                onMenuItemClickCallback={this._onMenuItemClick}
                onMenuParentItemClickCallback={this._onMenuParentItemClick}
                items={menuItems}
                selectedItems={this.state.selectedItems}
            />
            
            <RegularCardComponent 
                header={headerComponent}
                
                containerStyles={this._getCardContainerStyles()}
            >
            </RegularCardComponent>
        </div>;
    }
}

<NavigationDemoComponent1/>

```
