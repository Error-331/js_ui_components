The only allowed direct child type for this component is [Simple Flex Grid Row](#simpleflexgridrow).
Example usage of simple flex grid container:

```jsx

const SimpleFlexGridRow = require('./simple_flex_grid_row').default;
const SimpleFlexGridColumn = require('./simple_flex_grid_column').default;

<SimpleFlexGridContainer>
    <SimpleFlexGridRow>
        <SimpleFlexGridColumn full={true} style={{border: '1px solid black', padding: '5px', backgroundColor: '#039be5'}}>
            Element 1
        </SimpleFlexGridColumn>
        
        <SimpleFlexGridColumn style={{border: '1px solid black', padding: '5px', backgroundColor: '#039be5'}}>
            Element 2
        </SimpleFlexGridColumn>
    </SimpleFlexGridRow>
</SimpleFlexGridContainer>

```