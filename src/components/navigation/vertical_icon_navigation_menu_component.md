Test documentation:

```jsx

const {VerticalIconNavigationMenuComponent} = require('./vertical_icon_navigation_menu_component');

const testContainerStyle = {
    height: '400px',
};

<div style={testContainerStyle}>
    <VerticalIconNavigationMenuComponent bottomItemsCount={3}>
        <i className='fas fa-home'/>
        <i className='fas fa-table'/>
        <i className='fas fa-analytics'/>
        
        <i className='fas fa-bell'/>
        <i className='fas fa-wifi'/>
        <i className='fas fa-user'/>  
    </VerticalIconNavigationMenuComponent>
</div>

```