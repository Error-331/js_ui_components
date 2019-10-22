Example of vertical tab navigation component with selected tab:

```jsx

const {VerticalTabNavigationMenuComponent} = require('./vertical_tab_navigation_menu_component');

const tabsData = [
    {label: 'Short tab 1'},
    {label: 'Looooong tab 2'},
    {label: 'Very Loooooooooong tab 3'},
    {label: 'tab 4'},
];

<VerticalTabNavigationMenuComponent selectedTabIndex={1} tabs={tabsData}/>

```
