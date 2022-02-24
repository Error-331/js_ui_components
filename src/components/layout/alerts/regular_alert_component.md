Example usage of regular alert component:

```jsx

const {RegularAlertComponent} = require('./regular_alert_component');

<RegularAlertComponent>
    Test alert text 1...
</RegularAlertComponent>

```

Example usage of regular alert component with accent and custom icon:

```jsx

const {RegularAlertComponent} = require('./regular_alert_component');

<RegularAlertComponent accent={true} iconClassName='fas fa-exclamation-square'>
    Test alert text 2...
</RegularAlertComponent>

```