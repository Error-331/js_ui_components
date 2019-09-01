Example of none-flexible horizontal tab navigation component:

```jsx

const {HorizontalTabNavigationComponent} = require('./horizontal_tab_navigation_component');

const tabsData = [
    {label: 'Short tab 1'},
    {label: 'Looooong tab 2'},
    {label: 'Very Loooooooooong tab 3'},
    {label: 'tab 4'},
];

<HorizontalTabNavigationComponent tabSpacing={20} selectedTabIndex={2} tabs={tabsData}/>

```

Example of flexible horizontal tab navigation component with custom styles:

```jsx

const {Component} = require('react');
const injectSheet = require('react-jss').default;

const {HorizontalTabNavigationComponent} = require('./horizontal_tab_navigation_component');

const styles = theme => ({
    componentContainer: {
        boxSizing: 'border-box',
        display: 'flex',
                  
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'flesx-start',
        alignContent: 'flex-start',
                    
        '& > $spacerContainer': {
            flexBasis: '20%',
            flexGrow: 0,
            flexShring: 0,
        },
        
        '& > $navigationContainer': {
            flexBasis: 'auto',
            flexGrow: 0,
            flexShring: 0,
        },        
                                      
    },
    
    spacerContainer: {},
    navigationContainer: {},
});

class TestContainerComponent extends Component {
    render() {
    
        const tabsData = [
            {label: 'Short tab 1'},
            {label: 'Looooong tab 2'},
            {label: 'Very Loooooooooong tab 3'},
            {label: 'tab 4'},
        ];
        
        const selectionBarStyle = {
            backgroundColor: '#2CAD6A',
        };

        const tabLabelContainerStyle = {
            textTransform: 'capitalize',
        }
    
        return <div className={this.props.classes.componentContainer}>
            <div className={this.props.classes.spacerContainer}>
            </div>

            <HorizontalTabNavigationComponent 
                flexible={true}
                componentContainerClassName={this.props.classes.navigationContainer}
                
                selectionBarStyle={selectionBarStyle}
                tabLabelContainerStyle={tabLabelContainerStyle}
                
                tabSpacing={20}
                selectedTabIndex={3} 
                tabs={tabsData}
            />

                
            <div className={this.props.classes.spacerContainer}>
            </div>
        </div>;
    }
}

const TestContainer = injectSheet(styles)(TestContainerComponent);


<TestContainer/>

```

Example of flexible horizontal tab navigation component with custom styles and router 'Link' components as tabs:

```jsx

const {Component} = require('react');
const injectSheet = require('react-jss').default;

const {Link} = require('react-router-dom');

const {HorizontalTabNavigationComponent} = require('./horizontal_tab_navigation_component');

const styles = theme => ({
    componentContainer: {
        boxSizing: 'border-box',
        display: 'flex',
                  
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
                    
        '& > $spacerContainer': {
            flexBasis: '20%',
            flexGrow: 0,
            flexShring: 0,
        },
        
        '& > $navigationContainer': {
            flexBasis: 'auto',
            flexGrow: 0,
            flexShring: 0,
        },        
                                      
    },
    
    spacerContainer: {},
    navigationContainer: {},
});

class TestContainerComponent extends Component {
    render() {
    
        const tabsData = [
            {label: <Link to='#'>Short tab 1</Link>},
            {label: <Link to='#'>Looooong tab 2</Link>},
            {label: <Link to='#'>Very Loooooooooong tab 3</Link>},
            {label: <Link to='#'>tab 4</Link>},
        ];
        
        const selectionBarStyle = {
            backgroundColor: '#2CAD6A',
        };
        
        const tabLabelContainerStyle = {
            textTransform: 'capitalize',
        }
    
        return <div className={this.props.classes.componentContainer}>
            <div className={this.props.classes.spacerContainer}>
            </div>

            <HorizontalTabNavigationComponent 
                flexible={true}
                componentContainerClassName={this.props.classes.navigationContainer}
                
                selectionBarStyle={selectionBarStyle}
                tabLabelContainerStyle={tabLabelContainerStyle}
                
                tabSpacing={20}
                selectedTabIndex={null} 
                tabs={tabsData}
            />

                
            <div className={this.props.classes.spacerContainer}>
            </div>
        </div>;
    }
}

const TestContainer = injectSheet(styles)(TestContainerComponent);


<TestContainer/>

```