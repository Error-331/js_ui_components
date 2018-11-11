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
    
    <DialogBoxActionsContainer containerStyle={buttonsContainerStyles}>
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
    
    <DialogBoxActionsContainer containerStyle={buttonsContainerStyles}>
        <RegularButtonComponent label='Save'/>
        <RegularButtonComponent label='Cancel' variant='outlined'/>
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
    
    <DialogBoxActionsContainer containerStyle={buttonsContainerStyles}>
        <RegularButtonComponent label='Save'/>
        <RegularButtonComponent label='Cancel' variant='outlined'/>
    </DialogBoxActionsContainer>

</RegularCardComponent>

```

Mock-up of 'user control panel':

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
Mock-up of 'front page' variant 1:

```jsx

const {Component} = require('react');
const injectSheet = require('react-jss').default;

const {
    RegularCardComponent,
    RegularPanelComponent,
    DialogBoxActionsContainer,

    ElementsColumn,

    InlineHeader,
    InlineTextBlock,

    InlineImageIcon,
    InlineSVGIcon,
} = require('./../../../src/components/layout');

const {RegularButtonComponent} = require('./../../../src/components/buttons');
const {TypewriterVisualEffect} = require('./../../../src/components/visual_effects');

const {SlideVisualEffect} = require('./../../../src/components/visual_effects');

const styles = theme => ({
    componentContainer: {
        boxSizing: 'border-box',
        display: 'grid',

        height: '943px',

        gridTemplateAreas: `
            "title       title    title    title       "
            "header      header   header   header      "
            "paddingLeft employee employer paddingRight"
        `,

        gridColumnGap: '25px',
        gridRowGap: '15px',

        gridTemplateColumns: '1fr minMax(200px, 400px) minMax(200px, 400px) 1fr',
        gridTemplateRows: 'max-content 250px 1fr',

        '& > $titleContainer': {
            boxSizing: 'border-box',
            gridArea: 'title',

            display: 'flex',

            flexDirection: 'row',
            flexWrap: 'nowrap',

            justifyContent: 'flex-start',
            alignItems: 'center',
            alignContent: 'flex-start',

            '& > $logoContainer': {
                boxSizing: 'border-box',

                flexBasis: 'auto',
                flexGrow: 0,
                flexShrink: 1,
            },

            '& > $titleCaptionContainer': {
                boxSizing: 'border-box',

                flexBasis: 'auto',
                flexGrow: 0,
                flexShrink: 1,

                marginLeft: '10px',

                color: 'inherit',

                '& > $titleAccentContainer': {
                    color: theme.baseStyles.accentColorPrimary,
                }
            }
        },

        '& > $headerContainer': {
            boxSizing: 'border-box',
            gridArea: 'header',

            justifySelf: 'center',
            alignSelf: 'center',
        },

        '& > $paddingLeftContainer': {
            boxSizing: 'border-box',

            gridArea: 'paddingLeft',
        },

        '& > $paddingRightContainer': {
            boxSizing: 'border-box',

            gridArea: 'paddingRight',
        },

        '& > $employeeContainer': {
            boxSizing: 'border-box',

            gridArea: 'employee',
            alignSelf: 'start',
        },

        '& > $employerContainer': {
            boxSizing: 'border-box',

            gridArea: 'employer',
            alignSelf: 'start',
        },

        '& $employmentCardContainer': {
        },

        '& $employmentCardBodyContainer': {
            boxSizing: 'border-box',
            position: 'relative',
            overflow: 'hidden',

            display: 'flex',

            flexBasis: 'auto',
            flexShrink: '1',
            flexGrow: '0',

            flexDirection: 'column',
            flexWrap: 'nowrap',

            justifyContent: 'flex-start',
            alignItems: 'center',
            alignContent: 'flex-start',

            padding: '20px 20px 22px 22px',

            '& > $employmentCardHeaderContainer': {
                marginTop: '40px',
                color: theme.baseStyles.mainSecondaryColor,
            },

            '& > $employmentCardControlsContainer': {
                backgroundColor: theme.baseStyles.mainQuaternaryColor,
            }
        }
    },

    titleContainer: {},
    logoContainer: {},
    titleCaptionContainer: {},
    titleAccentContainer: {},

    headerContainer: {},
    paddingLeftContainer: {},
    paddingRightContainer: {},

    employeeContainer: {},
    employerContainer: {},

    employmentCardContainer: {},
    employmentCardBodyContainer: {},
    employmentCardHeaderContainer: {},
    employmentCardControlsContainer: {},
});

class TestContainerComponent extends Component {
    constructor(props) {
        super(props);

        const self = this;

        self._onEmployerCardMouseOver = self._onEmployerCardMouseOver.bind(this);
        self._onEmployeeCardMouseOver = self._onEmployeeCardMouseOver.bind(this);

        self._onEmployerCardMouseLeave = self._onEmployerCardMouseLeave.bind(this);
        self._onEmployeeCardMouseLeave = self._onEmployeeCardMouseLeave.bind(this);

        this.state = {
            showEmployerControls: false,
            showEmployeeControls: false,
        }
    }

    _onEmployeeCardMouseLeave() {
        this.setState({
            showEmployeeControls: false
        });
    }

    _onEmployerCardMouseLeave() {
        this.setState({
            showEmployerControls: false
        });
    }

    _onEmployeeCardMouseOver() {
        this.setState({
            showEmployeeControls: true
        });
    }

    _onEmployerCardMouseOver() {
        this.setState({
            showEmployerControls: true
        });
    }

    render() {
        const {showEmployerControls, showEmployeeControls} = this.state;
        const {classes} = this.props;
        const {
            componentContainer,

            logoContainer,
            titleContainer,
            titleCaptionContainer,
            titleAccentContainer,

            headerContainer,

            paddingLeftContainer,
            paddingRightContainer,

            employeeContainer,
            employerContainer,
            employmentCardContainer,
            employmentCardBodyContainer,
            employmentCardHeaderContainer,
            employmentCardControlsContainer
        } = classes;

        const typewriterTexts = [
            'Looking for a good Job?',
            'Looking for best employees?',
            'Looking for awesome vacancy?',
            'Looking for skillful workers?',
            'Looking for an amazing project?',
        ];

        return <div className={componentContainer}>
            <RegularPanelComponent className={titleContainer}>
                <InlineImageIcon size='large' src='/assets/images/logos/logo3.svg' className={logoContainer} />
                <InlineHeader level={2} className={titleCaptionContainer}>
                    Job<span className={titleAccentContainer}>Dealer</span>
                </InlineHeader>
            </RegularPanelComponent>

            <div className={headerContainer}>
                <TypewriterVisualEffect
                    text={typewriterTexts}
                    loopCount={Infinity}
                    level={3}
                />
            </div>

            <div className={paddingLeftContainer}></div>

            <div className={employeeContainer}>
                <RegularCardComponent
                    onMouseOverContainer={this._onEmployerCardMouseOver}
                    onMouseLeaveContainer={this._onEmployerCardMouseLeave}

                    popOnHover={true}
                    maxPopLevel={3}

                    containerClassName={employmentCardContainer}
                    bodyClassName={employmentCardBodyContainer}
                >
                    <InlineSVGIcon svgViewBox="0 0 60 60" size='extraLarge'>
                        <g transform="translate(0,-992.36216)">
                            <path d="m 40,1037.3622 0,-5 c 0,-4.1289 -6.52625,-6.25 -10,-6.25 -3.47375,0 -10,2.1211 -10,6.25 l 0,5" />
                            <path d="m 30,1022.3622 c 2.91375,0 5,-2.0412 5,-5 l 0,-2.5 c 0,-2.9587 -2.08625,-5 -5,-5 -2.91375,0 -5,2.0413 -5,5 l 0,2.5 c 0,2.9588 2.08625,5 5,5 z" />
                            <path d="m 52.5,1022.3622 c 0,12.4263 -10.07375,22.5 -22.5,22.5 -12.42625,0 -22.5,-10.0737 -22.5,-22.5 0,-12.4262 10.07375,-22.5 22.5,-22.5 12.42625,0 22.5,10.0738 22.5,22.5 z" />
                            <path d="m 0,1022.3622 12.5,0" />
                            <path d="m 47.5,1022.3622 12.5,0" />
                            <path d="m 30,992.3622 0,12.5" />
                            <path d="m 30,1039.8622 0,12.5" />
                        </g>
                    </InlineSVGIcon>

                    <InlineHeader className={employmentCardHeaderContainer} level={4}>Employers</InlineHeader>

                    <SlideVisualEffect duration='0.4s' show={showEmployerControls} className={employmentCardControlsContainer}>
                        <ElementsColumn alignment='center'>
                            <RegularButtonComponent label='login'/>
                            <RegularButtonComponent label='register'/>
                        </ElementsColumn>
                    </SlideVisualEffect>
                </RegularCardComponent>
            </div>

            <div className={employerContainer}>
                <RegularCardComponent

                    onMouseOverContainer={this._onEmployeeCardMouseOver}
                    onMouseLeaveContainer={this._onEmployeeCardMouseLeave}

                    popOnHover={true}
                    maxPopLevel={3}

                    containerClassName={employmentCardContainer}
                    bodyClassName={employmentCardBodyContainer}
                >
                    <InlineSVGIcon svgViewBox="0 0 59 58" size='extraLarge'>
                        <g transform="translate(0,-993.61216)">
                            <path d="m 51.232447,1003.6122 7.5,0 0,-3.75 c 0,-2.76125 -2.23875,-5 -5,-5" />
                            <path d="m 48.732447,999.8622 c 0,-2.76125 2.23875,-5 5,-5 l -42.5,0 c -2.7612501,0 -5.0000001,2.23875 -5.0000001,5 l 0,46.25 c 0,2.7613 -2.23875,5 -5,5 l 42.5000001,0 c 2.76125,0 5,-2.2387 5,-5 l 0,-46.25 z" />
                            <path d="m 31.232447,1012.3622 8.75,0" />
                            <path d="m 31.232447,1006.1122 8.75,0" />
                            <path d="m 13.732447,1022.3622 26.25,0" />
                            <path d="m 13.732447,1028.6122 26.25,0" />
                            <path d="m 13.732447,1034.8622 17.5,0" />
                            <path d="m 27.482447,1017.3622 0,-2.5 c 0,-1.63 -3.44,-3.75 -6.25,-3.75 -2.81,0 -6.25,2.12 -6.25,3.75 l 0,2.5" />
                            <path d="m 21.232447,1002.3622 c -1.93875,0 -3.75,1.4113 -3.75,3.15 l 0,2.4488 c 0,1.74 1.81125,3.1512 3.75,3.1512 1.93875,0 3.75,-1.4112 3.75,-3.1512 l 0,-2.4488 c 0,-1.7387 -1.81125,-3.15 -3.75,-3.15 z" />
                        </g>
                    </InlineSVGIcon>

                    <InlineHeader className={employmentCardHeaderContainer} level={4}>Candidates</InlineHeader>

                    <SlideVisualEffect duration='0.4s' show={showEmployeeControls} className={employmentCardControlsContainer}>
                        <ElementsColumn alignment='center'>
                            <RegularButtonComponent label='login'/>
                            <RegularButtonComponent label='register'/>
                        </ElementsColumn>
                    </SlideVisualEffect>
                </RegularCardComponent>
            </div>

            <div className={paddingRightContainer}></div>

        </div>;
    }
}

const TestContainer = injectSheet(styles)(TestContainerComponent);

<TestContainer/>

```