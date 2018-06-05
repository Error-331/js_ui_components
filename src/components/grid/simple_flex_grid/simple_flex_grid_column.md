Example usage of simple flex grid columns (two flex columns of different size):

```jsx

const SimpleFlexGridContainer = require('./simple_flex_grid_container').default;
const SimpleFlexGridRow = require('./simple_flex_grid_row').default;

<SimpleFlexGridContainer>
    <SimpleFlexGridRow>
        <SimpleFlexGridColumn size={30} style={{border: '1px solid black', padding: '5px',  backgroundColor: '#039be5'}}>
            Column 1
        </SimpleFlexGridColumn>
    
        <SimpleFlexGridColumn size={70} style={{border: '1px solid black', padding: '5px', backgroundColor: '#039be5'}}>
           Column 2
        </SimpleFlexGridColumn>
    </SimpleFlexGridRow>
</SimpleFlexGridContainer>

```

Example usage of simple flex grid columns (three flex columns of different size with one of which is set to 'auto'):

```jsx

const SimpleFlexGridContainer = require('./simple_flex_grid_container').default;
const SimpleFlexGridRow = require('./simple_flex_grid_row').default;

<SimpleFlexGridContainer>
    <SimpleFlexGridRow>
        <SimpleFlexGridColumn size={30} style={{border: '1px solid black', padding: '5px', backgroundColor: '#039be5'}}>
            Column 1
        </SimpleFlexGridColumn>
        
        <SimpleFlexGridColumn size={'auto'} style={{border: '1px solid black', padding: '5px', backgroundColor: '#039be5'}}>
            Column 2 (auto)
        </SimpleFlexGridColumn>
    
        <SimpleFlexGridColumn size={30} style={{border: '1px solid black', padding: '5px', backgroundColor: '#039be5'}}>
            Column 3
        </SimpleFlexGridColumn>
    </SimpleFlexGridRow>
</SimpleFlexGridContainer>

```

Example usage of simple flex grid columns (three flex columns of different size with one of them occupies remaining space of the row container):

```jsx

const SimpleFlexGridContainer = require('./simple_flex_grid_container').default;
const SimpleFlexGridRow = require('./simple_flex_grid_row').default;

<SimpleFlexGridContainer>
    <SimpleFlexGridRow>
        <SimpleFlexGridColumn size={20} style={{border: '1px solid black', padding: '5px', backgroundColor: '#039be5'}}>
            Column 1
        </SimpleFlexGridColumn>
        
        <SimpleFlexGridColumn size={20} style={{border: '1px solid black', padding: '5px', backgroundColor: '#039be5'}}>
            Column 2 
        </SimpleFlexGridColumn>
    
        <SimpleFlexGridColumn size={'auto'} full={true} style={{border: '1px solid black', padding: '5px', backgroundColor: '#039be5'}}>
            Column 3 (auto-full)
        </SimpleFlexGridColumn>
    </SimpleFlexGridRow>
</SimpleFlexGridContainer>

```

Example usage of simple flex grid columns arranged in two rows:

```jsx

const SimpleFlexGridContainer = require('./simple_flex_grid_container').default;
const SimpleFlexGridRow = require('./simple_flex_grid_row').default;

<SimpleFlexGridContainer>
    <SimpleFlexGridRow>
        <SimpleFlexGridColumn size={20} style={{border: '1px solid black', padding: '5px', backgroundColor: '#039be5'}}>
            Column 1
        </SimpleFlexGridColumn>
        
        <SimpleFlexGridColumn size={20} style={{border: '1px solid black', padding: '5px', backgroundColor: '#039be5'}}>
            Column 2 
        </SimpleFlexGridColumn>
    
        <SimpleFlexGridColumn size={60} full={true} style={{border: '1px solid black', padding: '5px', backgroundColor: '#039be5'}}>
            Column 3 
        </SimpleFlexGridColumn>    
    </SimpleFlexGridRow>
        
    <SimpleFlexGridRow>
        <SimpleFlexGridColumn size={60} style={{border: '1px solid black', padding: '5px', backgroundColor: '#039be5'}}>
            Column 1
        </SimpleFlexGridColumn>
                
        <SimpleFlexGridColumn size={20} style={{border: '1px solid black', padding: '5px', backgroundColor: '#039be5'}}>
            Column 2 
        </SimpleFlexGridColumn>
            
        <SimpleFlexGridColumn size={20} full={true} style={{border: '1px solid black', padding: '5px', backgroundColor: '#039be5'}}>
            Column 3 
        </SimpleFlexGridColumn>
    </SimpleFlexGridRow>
</SimpleFlexGridContainer>

```