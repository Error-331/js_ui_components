Empty editable date field without any specific parameters set:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormDateInputComponent} = require('./redux_form_date_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormDateInputComponent
                        name='testFormDateInputComponent1'
                    />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ReduxFormDateInputComponent
                        variant={2}
                        name='testFormDateInputComponent1'
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles)(TestContainerComponent);

<TestContainer/>

```

Empty readonly date input field without any specific parameters set:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormDateInputComponent} = require('./redux_form_date_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormDateInputComponent
                        name='testFormDateInputComponent2'
                        readOnly={true}
                    />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ReduxFormDateInputComponent
                        variant={2}
                        name='testFormDateInputComponent2'
                        readOnly={true}
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles)(TestContainerComponent);

<TestContainer/>

```

Empty disabled date input field without any specific parameters set:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormDateInputComponent} = require('./redux_form_date_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormDateInputComponent
                        name='testFormDateInputComponent3' 
                        disabled={true}
                    />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ReduxFormDateInputComponent
                        variant={2}
                        name='testFormDateInputComponent3' 
                        disabled={true}
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles)(TestContainerComponent);

<TestContainer/>

```

Empty readonly and disabled date input field without any specific parameters set:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormDateInputComponent} = require('./redux_form_date_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormDateInputComponent
                        name='testFormDateInputComponent4'
    
                        readOnly={true}
                        disabled={true}
                    />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ReduxFormDateInputComponent
                        variant={2}
                        name='testFormDateInputComponent4'
    
                        readOnly={true}
                        disabled={true}
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles)(TestContainerComponent);

<TestContainer/>

```

Editable date input field with default value set:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormDateInputComponent} = require('./redux_form_date_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormDateInputComponent
                        name='reduxFormDateInputComponents.testFromDateInputComponentWithDefaultValue1'
                    />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ReduxFormDateInputComponent
                        variant={2}
                         name='reduxFormDateInputComponents.testFromDateInputComponentWithDefaultValue1'
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles)(TestContainerComponent);

<TestContainer/>

```

Readonly date input field with default value set:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormDateInputComponent} = require('./redux_form_date_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormDateInputComponent
                        name='reduxFormDateInputComponents.testFromDateInputComponentWithDefaultValue2'
                        readOnly={true}
                    />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ReduxFormDateInputComponent
                        variant={2}
                        name='reduxFormDateInputComponents.testFromDateInputComponentWithDefaultValue2'
                        readOnly={true}
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles)(TestContainerComponent);

<TestContainer/>

```

Disabled date input field with default value set:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormDateInputComponent} = require('./redux_form_date_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormDateInputComponent
                        name='reduxFormDateInputComponents.testFromDateInputComponentWithDefaultValue3' 
                        disabled={true}
                    />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ReduxFormDateInputComponent
                        variant={2}
                        name='reduxFormDateInputComponents.testFromDateInputComponentWithDefaultValue3' 
                        disabled={true}
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles)(TestContainerComponent);

<TestContainer/>

```

Readonly and disabled date input field with default value set:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormDateInputComponent} = require('./redux_form_date_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormDateInputComponent
                        name='reduxFormDateInputComponents.testFromDateInputComponentWithDefaultValue4' 
    
                        readOnly={true}
                        disabled={true}
                    />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ReduxFormDateInputComponent
                        variant={2}
                        name='reduxFormDateInputComponents.testFromDateInputComponentWithDefaultValue4' 
    
                        readOnly={true}
                        disabled={true}
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles)(TestContainerComponent);

<TestContainer/>

```

Empty editable date input field with specified label:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormDateInputComponent} = require('./redux_form_date_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormDateInputComponent
                        name='testFormDateInputComponent5'
                        label='Test label'
                    />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ReduxFormDateInputComponent
                        variant={2}
                        name='testFormDateInputComponent5'
                        label='Test label'
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles)(TestContainerComponent);

<TestContainer/>

```

Empty readonly date input field with specified label:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormDateInputComponent} = require('./redux_form_date_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormDateInputComponent
                        name='testFormDateInputComponent6'
                        label='Test label'
    
                        readOnly={true}
                    />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ReduxFormDateInputComponent
                        variant={2}
                        name='testFormDateInputComponent6'
                        label='Test label'
    
                        readOnly={true}
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles)(TestContainerComponent);

<TestContainer/>

```

Empty disabled date input field with specified label:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormDateInputComponent} = require('./redux_form_date_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormDateInputComponent
                        name='testFormDateInputComponent7'
                        label='Test label'
    
                        disabled={true}
                    />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ReduxFormDateInputComponent
                        variant={2}
                        name='testFormDateInputComponent7'
                        label='Test label'
    
                        disabled={true}
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles)(TestContainerComponent);

<TestContainer/>

```

Empty readonly and disabled date input field with specified label:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormDateInputComponent} = require('./redux_form_date_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormDateInputComponent
                        name='testFormDateInputComponent8'
                        label='Test label'
    
                        disabled={true}
                    />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ReduxFormDateInputComponent
                        variant={2}
                        name='testFormDateInputComponent8'
                        label='Test label'
    
                        disabled={true}
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles)(TestContainerComponent);

<TestContainer/>

```

Empty editable date input field with placeholder text:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormDateInputComponent} = require('./redux_form_date_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormDateInputComponent
                        name='testFormDateInputComponent9'
                        placeholder='Test placeholder text...'
                    />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ReduxFormDateInputComponent
                        variant={2}
                        name='testFormDateInputComponent9'
                        placeholder='Test placeholder text...'
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles)(TestContainerComponent);

<TestContainer/>

```

Empty editable date input field with specified label and placeholder text:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormDateInputComponent} = require('./redux_form_date_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormDateInputComponent
                        name='testFormDateInputComponent10'
    
                        label='Test label'
                        placeholder='Test placeholder text...'
                    />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ReduxFormDateInputComponent
                        variant={2}
                        name='testFormDateInputComponent10'
    
                        label='Test label'
                        placeholder='Test placeholder text...'
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles)(TestContainerComponent);

<TestContainer/>

```

Empty readonly date input field with specified label and placeholder text:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormDateInputComponent} = require('./redux_form_date_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormDateInputComponent
                        name='testFormDateInputComponent11'
    
                        readOnly={true}
    
                        label='Test label'
                        placeholder='Test placeholder text...'
                    />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ReduxFormDateInputComponent
                        variant={2}
                        name='testFormDateInputComponent11'
    
                        readOnly={true}
    
                        label='Test label'
                        placeholder='Test placeholder text...'
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles)(TestContainerComponent);

<TestContainer/>

```

Empty disabled date input field with specified label and placeholder text:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormDateInputComponent} = require('./redux_form_date_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormDateInputComponent
                        name='testFormDateInputComponent12'
    
                        disabled={true}
    
                        label='Test label'
                        placeholder='Test placeholder text...'
                    />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ReduxFormDateInputComponent
                        variant={2}
                        name='testFormDateInputComponent12'
    
                        disabled={true}
    
                        label='Test label'
                        placeholder='Test placeholder text...'
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles)(TestContainerComponent);

<TestContainer/>

```

Editable date input field with specified label, placeholder text and default value:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormDateInputComponent} = require('./redux_form_date_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormDateInputComponent
                        name='reduxFormDateInputComponents.testFromDateInputComponentWithDefaultValue5'
    
                        label='Test label'
                        placeholder='Test placeholder text...'
                    />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ReduxFormDateInputComponent
                        variant={2}
                        name='reduxFormDateInputComponents.testFromDateInputComponentWithDefaultValue5'
    
                        label='Test label'
                        placeholder='Test placeholder text...'
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles)(TestContainerComponent);

<TestContainer/>

```