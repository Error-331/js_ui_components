Example vertical sliding navigation menu component: 

```jsx

const {Component} = require('react');
const {VerticalSlidingNavigationMenuComponent} = require('./vertical_sliding_navigation_menu_component');

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

class DemoComponent extends Component {
    constructor(props) {
        super(props);
        
        this._onMenuItemClick = this._onMenuItemClick.bind(this);
        this._onMenuParentItemClick = this._onMenuParentItemClick.bind(this);
        
        this.state = {
            selectedItems: []
        }
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
        return <VerticalSlidingNavigationMenuComponent 
            onMenuItemClickCallback={this._onMenuItemClick}
            onMenuParentItemClickCallback={this._onMenuParentItemClick}
            items={menuItems}
            selectedItems={this.state.selectedItems}
        />;
    }
}
 
<DemoComponent/> 
 
```

Example vertical sliding navigation menu component with custom 'back' button (icon and styles): 

```jsx

const {Component} = require('react');
const {VerticalSlidingNavigationMenuComponent} = require('./vertical_sliding_navigation_menu_component');

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

class DemoComponent extends Component {
    constructor(props) {
        super(props);
        
        this._onMenuItemClick = this._onMenuItemClick.bind(this);
        this._onMenuParentItemClick = this._onMenuParentItemClick.bind(this);
        
        this.state = {
            selectedItems: [3]
        }
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
        return <VerticalSlidingNavigationMenuComponent 
            backButtonCaption='backward'
            backButtonIconClassName='fas fa-backward'
        
            onMenuItemClickCallback={this._onMenuItemClick}
            onMenuParentItemClickCallback={this._onMenuParentItemClick}
            items={menuItems}
            selectedItems={this.state.selectedItems}
        />;
    }
}
 
<DemoComponent/> 
 
```

Example vertical sliding navigation menu component with dividers: 

```jsx

const {Component} = require('react');
const {VerticalSlidingNavigationMenuComponent} = require('./vertical_sliding_navigation_menu_component');

const menuItems = [
    { 
        iconClassName: 'fas fa-cut', 
        caption: 'cut', 
    },

    { 
        iconClassName: 'fas fa-copy', 
        caption: 'copy', 
    },
    { 
        iconClassName: 'fas fa-paste', 
        caption: 'paste' 
    }, 
    { 
        iconClassName: 'fas fa-object-group', 
        caption: 'select all' 
    },    

    null,

    { 
        iconClassName: 'fas fa-print', 
        caption: 'print'
    }, 
    { 
        iconClassName: 'fas fa-search', 
        caption: 'search'
    },
    
    null,
    
    { 
        iconClassName: 'fas fa-glasses-alt', 
        caption: 'inspect'
    }           
];

class DemoComponent extends Component {
    constructor(props) {
        super(props);
        
        this._onMenuItemClick = this._onMenuItemClick.bind(this);
        this._onMenuParentItemClick = this._onMenuParentItemClick.bind(this);
        
        this.state = {
            selectedItems: []
        }
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
        return <VerticalSlidingNavigationMenuComponent 
            onMenuItemClickCallback={this._onMenuItemClick}
            onMenuParentItemClickCallback={this._onMenuParentItemClick}
            items={menuItems}
            selectedItems={this.state.selectedItems}
        />;
    }
}
 
<DemoComponent/> 
 
```

Example vertical sliding navigation menu component with inverted colors: 

```jsx

const {Component} = require('react');
const {VerticalSlidingNavigationMenuComponent} = require('./vertical_sliding_navigation_menu_component');

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

class DemoComponent extends Component {
    constructor(props) {
        super(props);
        
        this._onMenuItemClick = this._onMenuItemClick.bind(this);
        this._onMenuParentItemClick = this._onMenuParentItemClick.bind(this);
        
        this.state = {
            selectedItems: []
        }
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
        return <VerticalSlidingNavigationMenuComponent 
            invertColor={true}
            onMenuItemClickCallback={this._onMenuItemClick}
            onMenuParentItemClickCallback={this._onMenuParentItemClick}
            items={menuItems}
            selectedItems={this.state.selectedItems}
        />;
    }
}
 
<DemoComponent/> 
 
```

Example vertical sliding navigation menu component with dividers and inverted colors: 

```jsx

const {Component} = require('react');
const {VerticalSlidingNavigationMenuComponent} = require('./vertical_sliding_navigation_menu_component');

const menuItems = [
    { 
        iconClassName: 'fas fa-cut', 
        caption: 'cut', 
    },

    { 
        iconClassName: 'fas fa-copy', 
        caption: 'copy', 
    },
    { 
        iconClassName: 'fas fa-paste', 
        caption: 'paste' 
    }, 
    { 
        iconClassName: 'fas fa-object-group', 
        caption: 'select all' 
    },    

    null,

    { 
        iconClassName: 'fas fa-print', 
        caption: 'print'
    }, 
    { 
        iconClassName: 'fas fa-search', 
        caption: 'search'
    },
    
    null,
    
    { 
        iconClassName: 'fas fa-glasses-alt', 
        caption: 'inspect'
    }           
];

class DemoComponent extends Component {
    constructor(props) {
        super(props);
        
        this._onMenuItemClick = this._onMenuItemClick.bind(this);
        this._onMenuParentItemClick = this._onMenuParentItemClick.bind(this);
        
        this.state = {
            selectedItems: []
        }
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
        return <VerticalSlidingNavigationMenuComponent 
            invertColor={true}
            onMenuItemClickCallback={this._onMenuItemClick}
            onMenuParentItemClickCallback={this._onMenuParentItemClick}
            items={menuItems}
            selectedItems={this.state.selectedItems}
        />;
    }
}
 
<DemoComponent/> 
 
```