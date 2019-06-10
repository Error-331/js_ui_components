Test documentation:

```jsx

const {Link} = require('react-router-dom');
const {VerticalNavigationMenuComponent} = require('./vertical_navigation_menu_component');

const data = [
            {name: 'Menu item 1', iconClassNames: 'fas fa-poo'},
            {element: <Link to="/#">Menu item 2</Link>, iconClassNames: 'fas fa-fighter-jet'},
            {name: 'Menu item 3', iconClassNames: 'fas fa-microchip'},
            {
                name: 'Menu item 4',
                children: [
                    {name: 'Menu item 4-1', iconClassNames: 'fas fa-chess-rook-alt'},
                    {name: 'Menu item 4-2', iconClassNames: 'fas fa-chess-bishop-alt', children: [
                            
                        ]
                    },                 
                    {name: 'Menu item 4-3', iconClassNames: 'fas fa-badge-check'},
                    {name: 'Menu item 4-4', iconClassNames: 'fas fa-boxing-glove'},
                    {
                        name: 'Menu item 4-5', 
                        iconClassNames: 'fas fa-cubes',
                        children: [
                            {name: 'Menu item 4-2-1', iconClassNames: 'fas fa-field-hockey'},
                            {name: 'Menu item 4-2-2', iconClassNames: 'fas fa-film-alt'},
                            {name: 'Menu item 4-2-3', iconClassNames: 'fas fa-gamepad'},
                            {name: 'Menu item 4-2-4', iconClassNames: 'fas fa-industry-alt'},
                        ]
                    },
                    {name: 'Menu item 4-6', iconClassNames: 'fas fa-dumbbell'},
                ]
            },
            {name: 'Menu item 5', iconClassNames: 'fas fa-american-sign-language-interpreting'},
            {name: 'Menu item 6', iconClassNames: 'fas fa-heartbeat'},
          ];


<div style={{display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'flex-start', alignItems: 'flex-start', alignContent: 'flex-start'}}>
    <VerticalNavigationMenuComponent title='Navigation' data={data}/>
    
    <div style={{flexBasis: 'auto', flexShrink: '1', flexGrow: '1', padding: '5px'}}>
        Test content...
    </div>
</div>

```