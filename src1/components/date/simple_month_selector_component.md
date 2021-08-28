Example usage of month selector:

```jsx

const {SimpleMonthSelectorComponent} = require('./simple_month_selector_component');

<SimpleMonthSelectorComponent/>

```

Example usage of month selector (with custom date set):

```jsx

const moment = require('moment');
const {SimpleMonthSelectorComponent} = require('./simple_month_selector_component');

<SimpleMonthSelectorComponent initialDate={moment('2015-05-07')}/>

```

Example usage of month selector represented in more compact way:

```jsx

const {SimpleFlexGridContainer} = require('./simple_flex_grid_container');
const {SimpleFlexGridRow} = require('./simple_flex_grid_row');
const {SimpleFlexGridColumn} = require('./simple_flex_grid_column');

const {SimpleMonthSelectorComponent} = require('./simple_month_selector_component');

<SimpleFlexGridContainer>
  <SimpleFlexGridRow xAlign='center'>
    <SimpleFlexGridColumn size={'175px'}>
      <SimpleMonthSelectorComponent/>
    </SimpleFlexGridColumn>
  </SimpleFlexGridRow>
</SimpleFlexGridContainer>


```
