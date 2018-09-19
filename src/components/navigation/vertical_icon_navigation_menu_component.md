Example vertical navigation menus with different icons:

```jsx

const {VerticalIconNavigationMenuComponent} = require('./vertical_icon_navigation_menu_component');

const testContainerStyle = {
    display: 'flex',
    
    flexDirection: 'row',
    flexWrap: 'nowrap',
    
    justifyContent: 'space-between',
    alignItems: 'stretch',
    alignContent: 'flex-start',

    height: '450px',
};

<div style={testContainerStyle}>
    <VerticalIconNavigationMenuComponent bottomItemsCount={3}>
        <i className='fas fa-home'/>
        <i className='fas fa-analytics'/>
        <i className='fas fa-table'/>
      
        <i className='fas fa-bell'/>
        <i className='fas fa-wifi'/>
        <i className='fas fa-user'/>  
    </VerticalIconNavigationMenuComponent>
    
    <VerticalIconNavigationMenuComponent bottomItemsCount={3}>
        <i className='fas fa-home'/>
        <i className='fas fa-analytics'/>
        <i className='fas fa-file-user'/>
        <i className='fas fa-money-check'/>
            
        <i className='fas fa-bell'/>
        <i className='fas fa-wifi'/>
        <i className='fas fa-user'/>  
    </VerticalIconNavigationMenuComponent>

    
    <VerticalIconNavigationMenuComponent bottomItemsCount={3}>
        <i className='fas fa-home'/>
        <i className='fas fa-analytics'/>
        <i className='fas fa-business-time'/>
            
        <i className='fas fa-bell'/>
        <i className='fas fa-wifi'/>
        <i className='fas fa-user'/>  
    </VerticalIconNavigationMenuComponent>
</div>

```