The only allowed direct child type for this component is [Simple Flex Grid Column](#simpleflexgridcolumn).
Example usage of simple flex grid row with two columns inside it:

```jsx

const SimpleFlexGridContainer = require('./simple_flex_grid_container').default;
const SimpleFlexGridColumn = require('./simple_flex_grid_column').default;

<SimpleFlexGridContainer>
    <SimpleFlexGridRow>
        <SimpleFlexGridColumn size={50} style={{border: '1px solid black', padding: '5px',  backgroundColor: '#039be5'}}>
            Column 1
        </SimpleFlexGridColumn>
        
        <SimpleFlexGridColumn size={50} style={{border: '1px solid black', padding: '5px', backgroundColor: '#039be5'}}>
            Column 2
        </SimpleFlexGridColumn>
    </SimpleFlexGridRow>
</SimpleFlexGridContainer>

```
