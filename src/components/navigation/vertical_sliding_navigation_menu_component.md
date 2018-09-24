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

class DemoComponent1 extends Component {
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
 
<DemoComponent1/> 
 
```