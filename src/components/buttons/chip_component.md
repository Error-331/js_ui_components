Test:

```jsx

const demoContainerStyle = {
    display: 'flex', 
    
    flexDirection: 'row',
    flexWrap: 'nowrap',
                            
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'flex-start',
};

const componentContainerStyle = {
    marginRight: '10px'
};

<div style={demoContainerStyle}>
    <ChipComponent containerStyle={componentContainerStyle} label='Contained'/>
     <ChipComponent containerStyle={componentContainerStyle} label='Basic' variant='basic'/>
    <ChipComponent containerStyle={componentContainerStyle} variant='outlined' label='Outlined'/>
    
    <ChipComponent containerStyle={componentContainerStyle} clickable={true} label='Contained clickable'/>
    <ChipComponent containerStyle={componentContainerStyle} label='Basic' variant='basic' clickable={true}/>
    <ChipComponent containerStyle={componentContainerStyle} clickable={true} variant='outlined' label='Outlined clickable'/>
</div>

```

Test:

```jsx

const demoContainerStyle = {
    display: 'flex', 
    
    flexDirection: 'row',
    flexWrap: 'nowrap',
                            
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'flex-start',
};

const componentContainerStyle = {
    marginRight: '10px'
};

<div style={demoContainerStyle}>

    <ChipComponent containerStyle={componentContainerStyle} label='Contained' rightIconClassName='fas fa-times-circle'/>
    <ChipComponent containerStyle={componentContainerStyle} label='Basic' variant='basic' rightIconClassName='fas fa-times-circle'/>
    <ChipComponent containerStyle={componentContainerStyle} variant='outlined' label='Outlined' rightIconClassName='fas fa-times-circle'/>
    
    <ChipComponent containerStyle={componentContainerStyle} clickable={true} label='Contained clickable' rightIconClassName='fas fa-times-circle'/>
    <ChipComponent containerStyle={componentContainerStyle} clickable={true} label='Basic' variant='basic' rightIconClassName='fas fa-times-circle'/>
    <ChipComponent containerStyle={componentContainerStyle} clickable={true} variant='outlined' label='Outlined clickable' rightIconClassName='fas fa-times-circle'/>
</div>

```

Test:

```jsx

const demoContainerStyle = {
    display: 'flex', 
    
    flexDirection: 'row',
    flexWrap: 'nowrap',
                            
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'flex-start',
};

const componentContainerStyle = {
    marginRight: '10px'
};

<div style={demoContainerStyle}>

    <ChipComponent containerStyle={componentContainerStyle} label='Contained' labelPosition='right' rightIconClassName='fas fa-times-circle'/>
    <ChipComponent containerStyle={componentContainerStyle} label='Basic' variant='basic' labelPosition='right' rightIconClassName='fas fa-times-circle'/>
    <ChipComponent containerStyle={componentContainerStyle} variant='outlined' label='Outlined' labelPosition='right' rightIconClassName='fas fa-times-circle'/>
    
    <ChipComponent containerStyle={componentContainerStyle} clickable={true} label='Contained clickable' labelPosition='right' rightIconClassName='fas fa-times-circle'/>
    <ChipComponent containerStyle={componentContainerStyle} clickable={true} label='Basic' labelPosition='right' variant='basic' rightIconClassName='fas fa-times-circle'/>
    <ChipComponent containerStyle={componentContainerStyle} clickable={true} variant='outlined' label='Outlined clickable' labelPosition='right' rightIconClassName='fas fa-times-circle'/>
</div>

```

Test:

```jsx

const demoContainerStyle = {
    display: 'flex', 
    
    flexDirection: 'row',
    flexWrap: 'nowrap',
                            
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'flex-start',
};

const componentContainerStyle = {
    marginRight: '10px'
};

<div style={demoContainerStyle}>

    <ChipComponent containerStyle={componentContainerStyle} disabled={true} label='Contained' labelPosition='right' rightIconClassName='fas fa-times-circle'/>
    <ChipComponent containerStyle={componentContainerStyle} disabled={true} label='Basic' variant='basic' labelPosition='right' rightIconClassName='fas fa-times-circle'/>
    <ChipComponent containerStyle={componentContainerStyle} disabled={true} variant='outlined' label='Outlined' labelPosition='right' rightIconClassName='fas fa-times-circle'/>
    
    <ChipComponent containerStyle={componentContainerStyle} disabled={true} clickable={true} label='Contained clickable' labelPosition='right' rightIconClassName='fas fa-times-circle'/>
    <ChipComponent containerStyle={componentContainerStyle} disabled={true} clickable={true} label='Basic' labelPosition='right' variant='basic' rightIconClassName='fas fa-times-circle'/>
    <ChipComponent containerStyle={componentContainerStyle} disabled={true} clickable={true} variant='outlined' label='Outlined clickable' labelPosition='right' rightIconClassName='fas fa-times-circle'/>
</div>

```
