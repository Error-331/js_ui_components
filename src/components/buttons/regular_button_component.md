Enabled button variants with default text color and without icon:

```jsx

const demoContainerStyles = {
    display: 'flex', 
    
    flexDirection: 'row',
    flexWrap: 'nowrap',
                            
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'flex-start',
};

const componentContainerStyles = {
    marginRight: '10px'
};

<div style={demoContainerStyles}>
    <RegularButtonComponent containerStyles={componentContainerStyles} label='Contained'/>
    <RegularButtonComponent containerStyles={componentContainerStyles} variant='outlined' label='Outlined'/>
    <RegularButtonComponent variant='text' label='Text'/>
</div>

```

Enabled button variants with secondary text color and without icon:

```jsx

const demoContainerStyles = {
    display: 'flex', 
    
    flexDirection: 'row',
    flexWrap: 'nowrap',
                            
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'flex-start',
};

const componentContainerStyles = {
    marginRight: '10px'
};

<div style={demoContainerStyles}>
    <RegularButtonComponent containerStyles={componentContainerStyles} textType='secondary' label='Contained'/>
    <RegularButtonComponent containerStyles={componentContainerStyles} textType='secondary' variant='outlined' label='Outlined'/>
    <RegularButtonComponent textType='secondary' variant='text' label='Text'/>
</div>

```

Enabled button variants with primary text color and without icon:

```jsx

const demoContainerStyles = {
    display: 'flex', 
    
    flexDirection: 'row',
    flexWrap: 'nowrap',
                            
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'flex-start',
};

const componentContainerStyles = {
    marginRight: '10px'
};

<div style={demoContainerStyles}>
    <RegularButtonComponent containerStyles={componentContainerStyles} textType='primary' label='Contained'/>
    <RegularButtonComponent containerStyles={componentContainerStyles} textType='primary' variant='outlined' label='Outlined'/>
    <RegularButtonComponent textType='primary' variant='text' label='Text'/>
</div>
```
Enabled button variants with default text color and icon located to the left of caption:

```jsx

const demoContainerStyles = {
    display: 'flex', 
    
    flexDirection: 'row',
    flexWrap: 'nowrap',
                            
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'flex-start',
};

const componentContainerStyles = {
    marginRight: '10px'
};

<div style={demoContainerStyles}>
    <RegularButtonComponent containerStyles={componentContainerStyles} iconClassName='fas fa-chess-rook-alt' labelPosition='left' label='Contained'/>
    <RegularButtonComponent containerStyles={componentContainerStyles} iconClassName='fas fa-chess-rook-alt' labelPosition='left' variant='outlined' label='Outlined'/>
    <RegularButtonComponent variant='text' iconClassName='fas fa-chess-rook-alt' labelPosition='left' label='Text'/>
</div>

```

Enabled button variants with secondary text color and icon located to the left of caption:

```jsx

const demoContainerStyles = {
    display: 'flex', 
    
    flexDirection: 'row',
    flexWrap: 'nowrap',
                            
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'flex-start',
};

const componentContainerStyles = {
    marginRight: '10px'
};

<div style={demoContainerStyles}>
    <RegularButtonComponent containerStyles={componentContainerStyles} textType='secondary' iconClassName='fas fa-chess-rook-alt' labelPosition='left' label='Contained'/>
    <RegularButtonComponent containerStyles={componentContainerStyles} textType='secondary' iconClassName='fas fa-chess-rook-alt' labelPosition='left' variant='outlined' label='Outlined'/>
    <RegularButtonComponent textType='secondary' variant='text' iconClassName='fas fa-chess-rook-alt' labelPosition='left' label='Text'/>
</div>

```

Enabled button variants with secondary text color and icon located to the left of caption:

```jsx

const demoContainerStyles = {
    display: 'flex', 
    
    flexDirection: 'row',
    flexWrap: 'nowrap',
                            
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'flex-start',
};

const componentContainerStyles = {
    marginRight: '10px'
};

<div style={demoContainerStyles}>
    <RegularButtonComponent containerStyles={componentContainerStyles} textType='primary' iconClassName='fas fa-chess-rook-alt' labelPosition='left' label='Contained'/>
    <RegularButtonComponent containerStyles={componentContainerStyles} textType='primary' iconClassName='fas fa-chess-rook-alt' labelPosition='left' variant='outlined' label='Outlined'/>
    <RegularButtonComponent textType='primary' variant='text' iconClassName='fas fa-chess-rook-alt' labelPosition='left' label='Text'/>
</div>

```

Enabled button variants with default text color and icon located to the right of caption:

```jsx

const demoContainerStyles = {
    display: 'flex', 
    
    flexDirection: 'row',
    flexWrap: 'nowrap',
                            
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'flex-start',
};

const componentContainerStyles = {
    marginRight: '10px'
};

<div style={demoContainerStyles}>
    <RegularButtonComponent containerStyles={componentContainerStyles} iconClassName='fas fa-heartbeat' labelPosition='right' label='Contained'/>
    <RegularButtonComponent containerStyles={componentContainerStyles} iconClassName='fas fa-heartbeat' labelPosition='right' variant='outlined' label='Outlined'/>
    <RegularButtonComponent variant='text' iconClassName='fas fa-heartbeat' labelPosition='right' label='Text'/>
</div>

```

Enabled button variants with secondary text color and icon located to the right of caption:

```jsx

const demoContainerStyles = {
    display: 'flex', 
    
    flexDirection: 'row',
    flexWrap: 'nowrap',
                            
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'flex-start',
};

const componentContainerStyles = {
    marginRight: '10px'
};

<div style={demoContainerStyles}>
    <RegularButtonComponent containerStyles={componentContainerStyles} textType='secondary' iconClassName='fas fa-heartbeat' labelPosition='right' label='Contained'/>
    <RegularButtonComponent containerStyles={componentContainerStyles} textType='secondary' iconClassName='fas fa-heartbeat' labelPosition='right' variant='outlined' label='Outlined'/>
    <RegularButtonComponent textType='secondary' variant='text' iconClassName='fas fa-heartbeat' labelPosition='right' label='Text'/>
</div>

```

Enabled button variants with secondary text color and icon located to the right of caption:

```jsx

const demoContainerStyles = {
    display: 'flex', 
    
    flexDirection: 'row',
    flexWrap: 'nowrap',
                            
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'flex-start',
};

const componentContainerStyles = {
    marginRight: '10px'
};

<div style={demoContainerStyles}>
    <RegularButtonComponent containerStyles={componentContainerStyles} textType='primary' iconClassName='fas fa-heartbeat' labelPosition='right' label='Contained'/>
    <RegularButtonComponent containerStyles={componentContainerStyles} textType='primary' iconClassName='fas fa-heartbeat' labelPosition='right' variant='outlined' label='Outlined'/>
    <RegularButtonComponent textType='primary' variant='text' iconClassName='fas fa-heartbeat' labelPosition='right' label='Text'/>
</div>

```