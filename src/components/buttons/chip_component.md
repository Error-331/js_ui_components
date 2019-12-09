Different variations of chip components (clickable and none-clickable):

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

Different variations of chip components (clickable and none-clickable) with enabled right icon:

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

Different variations of chip components (clickable and none-clickable) with enabled right icon (aligned to the left):

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

Different variations of disabled chip components (clickable and none-clickable) with enabled right icon (aligned to the left):

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
    <ChipComponent 
     containerStyle={componentContainerStyle} 
     disabled={true} 
     label='Contained' 
     labelPosition='right' 
     rightIconClassName='fas fa-times-circle'
    />
    <ChipComponent 
     containerStyle={componentContainerStyle} 
     disabled={true} 
     label='Basic' 
     variant='basic' 
     labelPosition='right' 
     rightIconClassName='fas fa-times-circle'
    />
    <ChipComponent 
     containerStyle={componentContainerStyle} 
     disabled={true} 
     variant='outlined' 
     label='Outlined' 
     labelPosition='right' 
     rightIconClassName='fas fa-times-circle'
    />
    
    <ChipComponent 
     containerStyle={componentContainerStyle} 
     disabled={true} 
     clickable={true} 
     label='Contained clickable' 
     labelPosition='right' 
     rightIconClassName='fas fa-times-circle'
    />
    <ChipComponent 
     containerStyle={componentContainerStyle} 
     disabled={true} 
     clickable={true} 
     label='Basic' 
     labelPosition='right' 
     variant='basic' 
     rightIconClassName='fas fa-times-circle'
    />
    <ChipComponent 
     containerStyle={componentContainerStyle} 
     disabled={true} 
     clickable={true} 
     variant='outlined' 
     label='Outlined clickable' 
     labelPosition='right' 
     rightIconClassName='fas fa-times-circle'
    />
</div>

```

Different variations of chip components (none-clickable) with enabled right icon (clickable):

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
    <ChipComponent 
     containerStyle={componentContainerStyle} 
     label='Contained' 
     rightIconClassName='fas fa-times-circle' 
     rightIconClickable={true} 
     onRightIconClick={() => {alert('button icon 1');}}
    />
    <ChipComponent 
     containerStyle={componentContainerStyle} 
     label='Basic' 
     rightIconClassName='fas fa-times-circle' 
     variant='basic' 
     rightIconClickable={true} 
     onRightIconClick={() => {alert('button icon 2');}}
    />
    <ChipComponent 
     containerStyle={componentContainerStyle} 
     variant='outlined' 
     rightIconClassName='fas fa-times-circle' 
     label='Outlined' 
     rightIconClickable={true} 
     onRightIconClick={() => {alert('button icon 3');}}
    />
</div>

```

Different variations of chip components (clickable) with enabled right icon (clickable):

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
    <ChipComponent 
     containerStyle={componentContainerStyle} 
     label='Contained' 
     rightIconClassName='fas fa-times-circle' 
     clickable={true} 
     rightIconClickable={true} 
     onClick={() => {alert('button 1');}} 
     onRightIconClick={() => {alert('button icon 1');}}
    />
    <ChipComponent 
     containerStyle={componentContainerStyle} 
     label='Basic' 
     rightIconClassName='fas fa-times-circle' 
     variant='basic' 
     clickable={true} 
     rightIconClickable={true} 
     onClick={() => {alert('button 2');}} 
     onRightIconClick={() => {alert('button icon 2');}}
    />
    <ChipComponent 
     containerStyle={componentContainerStyle} 
     variant='outlined' 
     rightIconClassName='fas fa-times-circle' 
     label='Outlined' 
     clickable={true} 
     rightIconClickable={true} 
     onClick={() => {alert('button 3');}} 
     onRightIconClick={() => {alert('button icon 3');}}
    />
</div>

```

Chip component (clickable) and custom styling:

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
    marginRight: '10px',
    borderRadius: '2px',
    
    boxShadow: 'none',
    backgroundColor: '#F5F8FB',
};

const componentHoverStyle = {
    backgroundColor: '#dddfe2',
};

const labelStyle = {
    fontSize: '12px',
    
    color: '#5D94C6',
};

<div style={demoContainerStyle}>
    <ChipComponent 
     variant='contained'
    
     containerStyle={componentContainerStyle} 
     hoverStyle={componentHoverStyle}
     labelStyle={labelStyle}
     
     label='.NET' 
     clickable={true}
    />

    <ChipComponent 
     variant='contained'
    
     containerStyle={componentContainerStyle} 
     hoverStyle={componentHoverStyle}
     labelStyle={labelStyle}
     
     label='Android' 
     clickable={true}
    />
    
    <ChipComponent 
     variant='contained'
    
     containerStyle={componentContainerStyle} 
     hoverStyle={componentHoverStyle}
     labelStyle={labelStyle}
     
     label='C / C++ / Embedded' 
     clickable={true}
    />    
</div>

```

Chip component (clickable) with enabled right icon (clickable) and custom styling:

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
    marginRight: '10px',
    borderRadius: '4px',
    
    boxShadow: 'none',
    backgroundColor: '#2DAD6A',
};

const componentHoverStyle = {
    backgroundColor: '#248a55',
};

const labelStyle = {
    fontSize: '12px',
    
    color: '#ffffff',
};

const rightIconStyle = {
    fontSize: '10px',
};

<div style={demoContainerStyle}>
    <ChipComponent 
     variant='contained'
     rightIconClassName='fal fa-times'
    
     containerStyle={componentContainerStyle} 
     hoverStyle={componentHoverStyle}
     labelStyle={labelStyle}
     rightIconStyle={rightIconStyle}
     
     label='C#' 
     
     clickable={true}
     rightIconClickable={true} 

     onRightIconClick={() => {alert('button icon 1');}}
    />

    <ChipComponent 
     variant='contained'
     rightIconClassName='fal fa-times'
    
     containerStyle={componentContainerStyle} 
     hoverStyle={componentHoverStyle}
     labelStyle={labelStyle}
     rightIconStyle={rightIconStyle}
     
     label='javascript' 
     
     clickable={true}
     rightIconClickable={true} 

     onRightIconClick={() => {alert('button icon 2');}}     
    />
    
    <ChipComponent 
     variant='contained'
     rightIconClassName='fal fa-times'
    
     containerStyle={componentContainerStyle} 
     hoverStyle={componentHoverStyle}
     labelStyle={labelStyle}
     rightIconStyle={rightIconStyle}
     
     label='php' 
     
     clickable={true}
     rightIconClickable={true} 

     onRightIconClick={() => {alert('button icon 3');}}     
     
    />    
</div>

```