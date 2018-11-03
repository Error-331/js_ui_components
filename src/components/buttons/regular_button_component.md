Enabled button variants with default text color and without icon:

```jsx

const {RegularButtonComponent} = require('./regular_button_component');

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

const {RegularButtonComponent} = require('./regular_button_component');

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

const {RegularButtonComponent} = require('./regular_button_component');

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

const {RegularButtonComponent} = require('./regular_button_component');

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

const {RegularButtonComponent} = require('./regular_button_component');

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

const {RegularButtonComponent} = require('./regular_button_component');

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

const {RegularButtonComponent} = require('./regular_button_component');

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

const {RegularButtonComponent} = require('./regular_button_component');

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

const {RegularButtonComponent} = require('./regular_button_component');

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

Example of buttons of different sizes:

```jsx

const {RegularButtonComponent} = require('./regular_button_component');

const buttonsStyle = {
    boxSizing: 'border-box',
    display: 'grid',
   
    gridTemplateAreas: `
        "sButton1 sButton2 sButton3"
        "mButton  mButton  mButton"
        "lButton  lButton  lButton"
    `,
            
    gridColumnGap: '20px', 
    gridRowGap: '10px',
                    
    gridTemplateColumns: 'max-content  max-content  max-content',
    gridTemplateRows: 'repeat(auto-fit, max-content)',
    
    justifyItems: 'start'
};

const sButtonStyle1 = {gridArea: 'sButton1'};
const sButtonStyle2 = {gridArea: 'sButton2'};
const sButtonStyle3 = {gridArea: 'sButton3'};

const mButtonStyle = {gridArea: 'mButton'};
const lButtonStyle = {gridArea: 'lButton'};

<div style={buttonsStyle}>
    <div style={sButtonStyle1}>
        <RegularButtonComponent size='tiny' label='CONTAINED' iconClassName='fas fa-cookie' />
    </div>
    
    <div style={sButtonStyle2}>
        <RegularButtonComponent size='small' label='CONTAINED' iconClassName='fas fa-cookie' />
    </div>    
    
    <div style={sButtonStyle3}>
        <RegularButtonComponent size='medium' label='CONTAINED' iconClassName='fas fa-cookie' />
    </div>        

    <div style={mButtonStyle}>
        <RegularButtonComponent size='large' label='CONTAINED' iconClassName='fas fa-cookie' />
    </div>         
        
    <div style={lButtonStyle}>
       <RegularButtonComponent size='extraLarge' label='CONTAINED' iconClassName='fas fa-cookie' /> 
    </div>               
            
</div>


```