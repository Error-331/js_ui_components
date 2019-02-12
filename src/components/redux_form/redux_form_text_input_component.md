Empty editable text input field without any specific parameters set:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                       <ReduxFormTextInputComponent
                           name='testFormTextInputComponent1'
                       />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                       <ReduxFormTextInputComponent
                           variant={2}
                           name='testFormTextInputComponent1'
                       />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles)(TestContainerComponent);

<TestContainer/>

```

Empty editable text input field with specific icon:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormTextInputComponent
                        name='testFormTextInputComponent2'
 
                        iconClassNames='fas fa-user'
                    />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ReduxFormTextInputComponent
                        variant={2}
                        name='testFormTextInputComponent2'
                           
                        iconClassNames='fas fa-user'
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles)(TestContainerComponent);

<TestContainer/>

```

Empty readonly text input field with specific icon:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormTextInputComponent
                        name='testFormTextInputComponent3'

                        readOnly={true}
                        iconClassNames='fas fa-user'
                    />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ReduxFormTextInputComponent
                        variant={2}
                        name='testFormTextInputComponent3'

                        readOnly={true}
                        iconClassNames='fas fa-user'
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles)(TestContainerComponent);

<TestContainer/>

```

Empty disabled text input field with specific icon:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormTextInputComponent
                        name='testFormTextInputComponent4'

                        disabled={true}
                        iconClassNames='fas fa-user'
                    />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ReduxFormTextInputComponent
                        variant={2}
                        name='testFormTextInputComponent4'

                        disabled={true}
                        iconClassNames='fas fa-user'
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles)(TestContainerComponent);

<TestContainer/>

```

Empty readonly and disabled text input field with specific icon:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormTextInputComponent
                        name='testFormTextInputComponent5'

                        readOnly={true}
                        disabled={true}

                        iconClassNames='fas fa-user'
                    />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ReduxFormTextInputComponent
                        variant={2}
                        name='testFormTextInputComponent5'

                        readOnly={true}
                        disabled={true}

                        iconClassNames='fas fa-user'
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles)(TestContainerComponent);

<TestContainer/>

```

Editable text input field with default value set:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormTextInputComponent
                        name='reduxFormTextInputComponents.testFormTextInputComponentWithDefaultValue1'
                    />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ReduxFormTextInputComponent
                        variant={2}
                        name='reduxFormTextInputComponents.testFormTextInputComponentWithDefaultValue1'
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles)(TestContainerComponent);

<TestContainer/>

```

Editable text input field with default value and specific icon set:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormTextInputComponent
                        name='reduxFormTextInputComponents.testFormTextInputComponentWithDefaultValue2'
                        
                        iconClassNames='fas fa-bus'
                    />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ReduxFormTextInputComponent
                        variant={2}
                        name='reduxFormTextInputComponents.testFormTextInputComponentWithDefaultValue2'
                        
                        iconClassNames='fas fa-bus'
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles)(TestContainerComponent);

<TestContainer/>

```

Readonly text input field with default value and specific icon:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormTextInputComponent
                        name='reduxFormTextInputComponents.testFormTextInputComponentWithDefaultValue3'

                        readOnly={true}
                        iconClassNames='fas fa-bus'
                    />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ReduxFormTextInputComponent
                        variant={2}
                        name='reduxFormTextInputComponents.testFormTextInputComponentWithDefaultValue3'

                        readOnly={true}
                        iconClassNames='fas fa-bus'
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles)(TestContainerComponent);

<TestContainer/>

```

Disabled text input field with default value and specific icon:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormTextInputComponent
                        name='reduxFormTextInputComponents.testFormTextInputComponentWithDefaultValue4'

                        disabled={true}
                        iconClassNames='fas fa-bus'
                    />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ReduxFormTextInputComponent
                        variant={2}
                        name='reduxFormTextInputComponents.testFormTextInputComponentWithDefaultValue4'

                        disabled={true}
                        iconClassNames='fas fa-bus'
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles)(TestContainerComponent);

<TestContainer/>

```

Readonly and disabled text input field with default value and specific icon:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormTextInputComponent
                        name='reduxFormTextInputComponents.testFormTextInputComponentWithDefaultValue5'

                        readOnly={true}
                        disabled={true}

                        iconClassNames='fas fa-bus'
                    />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ReduxFormTextInputComponent
                        variant={2}
                        name='reduxFormTextInputComponents.testFormTextInputComponentWithDefaultValue5'

                        readOnly={true}
                        disabled={true}

                        iconClassNames='fas fa-bus'
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles)(TestContainerComponent);

<TestContainer/>

```

Empty editable text input field with specified label:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormTextInputComponent
                        name='testFormTextInputComponent6'

                        label='Test label'
                    />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ReduxFormTextInputComponent
                        variant={2}
                        name='testFormTextInputComponent6'

                        label='Test label'
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles)(TestContainerComponent);

<TestContainer/>

```

Empty editable text input field with specified label and icon:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormTextInputComponent
                        name='testFormTextInputComponent7'

                        label='Test label'
                        iconClassNames='fas fa-edit'
                    />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ReduxFormTextInputComponent
                        variant={2}
                        name='testFormTextInputComponent7'

                        label='Test label'
                        iconClassNames='fas fa-edit'
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles)(TestContainerComponent);

<TestContainer/>

```

Empty readonly text input field with specified label and icon:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormTextInputComponent
                        name='testFormTextInputComponent8'

                        readOnly={true}

                        label='Test label'
                        iconClassNames='fas fa-edit'
                    />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ReduxFormTextInputComponent
                        variant={2}
                        name='testFormTextInputComponent8'

                        readOnly={true}

                        label='Test label'
                        iconClassNames='fas fa-edit'
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles)(TestContainerComponent);

<TestContainer/>

```

Empty disabled text input field with specified label and icon:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormTextInputComponent
                        name='testFormTextInputComponent9'

                        disabled={true}

                        label='Test label'
                        iconClassNames='fas fa-edit'
                    />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ReduxFormTextInputComponent
                        variant={2}
                        name='testFormTextInputComponent9'

                        disabled={true}

                        label='Test label'
                        iconClassNames='fas fa-edit'
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles)(TestContainerComponent);

<TestContainer/>

```

Empty readonly and disabled text input field with specified label and icon:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormTextInputComponent
                        name='testFormTextInputComponent10'

                        disabled={true}

                        label='Test label'
                        iconClassNames='fas fa-edit'
                    />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ReduxFormTextInputComponent
                        variant={2}
                        name='testFormTextInputComponent10'

                        disabled={true}

                        label='Test label'
                        iconClassNames='fas fa-edit'
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles)(TestContainerComponent);

<TestContainer/>

```

Empty editable text input field with placeholder text:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormTextInputComponent
                        name='testFormTextInputComponent11'

                        placeholder='Test placeholder text...'
                    />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ReduxFormTextInputComponent
                        variant={2}
                        name='testFormTextInputComponent11'

                        placeholder='Test placeholder text...'
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles)(TestContainerComponent);

<TestContainer/>

```

Empty editable text input field with specified label and placeholder text:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormTextInputComponent
                        name='testFormTextInputComponent12'

                        label='Test label'
                        placeholder='Test placeholder text...'
                    />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ReduxFormTextInputComponent
                        variant={2}
                        name='testFormTextInputComponent12'

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

Empty editable text input field with specified label, placeholder text and icon:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormTextInputComponent
                        name='testFormTextInputComponent13'

                        label='Test label'
                        placeholder='Test placeholder text...'
                        iconClassNames='fas fa-meh'
                    />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ReduxFormTextInputComponent
                        variant={2}
                        name='testFormTextInputComponent13'

                        label='Test label'
                        placeholder='Test placeholder text...'
                        iconClassNames='fas fa-meh'
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles)(TestContainerComponent);

<TestContainer/>

```

Empty readonly text input field with specified label, placeholder text and icon:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormTextInputComponent
                        name='testFormTextInputComponent14'

                        readOnly={true}

                        label='Test label'
                        placeholder='Test placeholder text...'
                        iconClassNames='fas fa-meh'
                    />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ReduxFormTextInputComponent
                        variant={2}
                        name='testFormTextInputComponent14'

                        readOnly={true}

                        label='Test label'
                        placeholder='Test placeholder text...'
                        iconClassNames='fas fa-meh'
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles)(TestContainerComponent);

<TestContainer/>

```

Empty disabled text input field with specified label, placeholder text and icon:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormTextInputComponent
                        name='testFormTextInputComponent15'

                        disabled={true}

                        label='Test label'
                        placeholder='Test placeholder text...'
                        iconClassNames='fas fa-meh'
                    />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ReduxFormTextInputComponent
                        variant={2}
                        name='testFormTextInputComponent15'

                        disabled={true}

                        label='Test label'
                        placeholder='Test placeholder text...'
                        iconClassNames='fas fa-meh'
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles)(TestContainerComponent);

<TestContainer/>

```

Empty readonly and disabled text input field with specified label, placeholder text and icon:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormTextInputComponent
                        name='testFormTextInputComponent16'

                        readOnly={true}
                        disabled={true}

                        label='Test label'
                        placeholder='Test placeholder text...'
                        iconClassNames='fas fa-meh'
                    />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ReduxFormTextInputComponent
                        variant={2}
                        name='testFormTextInputComponent16'

                        readOnly={true}
                        disabled={true}

                        label='Test label'
                        placeholder='Test placeholder text...'
                        iconClassNames='fas fa-meh'
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles)(TestContainerComponent);

<TestContainer/>

```

Editable text input field with specified label, placeholder text, icon and default value:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormTextInputComponent
                        name='reduxFormTextInputComponents.testFormTextInputComponentWithDefaultValue6'

                        label='Test label'
                        placeholder='Test placeholder text...'
                        iconClassNames='fas fa-dumbbell'
                    />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ReduxFormTextInputComponent
                        variant={2}
                        name='reduxFormTextInputComponents.testFormTextInputComponentWithDefaultValue6'

                        label='Test label'
                        placeholder='Test placeholder text...'
                        iconClassNames='fas fa-dumbbell'
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles)(TestContainerComponent);

<TestContainer/>

```

Editable text input with errors shown (note that 'errorsIfTouched' flag is set to true):

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormTextInputComponent
                        name='reduxFormTextInputComponents.testFormTextInputComponentWithDefaultValue7'

                        errorsIfTouched={false}
                        warningsIfTouched={false}

                        label='Test label'
                        placeholder='Test placeholder text...'
                        iconClassNames='fas fa-dumbbell'
                    />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ReduxFormTextInputComponent
                        variant={2}
                        name='reduxFormTextInputComponents.testFormTextInputComponentWithDefaultValue7'

                        errorsIfTouched={false}
                        warningsIfTouched={false}

                        label='Test label'
                        placeholder='Test placeholder text...'
                        iconClassNames='fas fa-dumbbell'
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles)(TestContainerComponent);

<TestContainer/>

```

Editable text input with warnings shown (note that 'warningsIfTouched' flag is set to true):

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormTextInputComponent
                        name='reduxFormTextInputComponents.testFormTextInputComponentWithDefaultValue8'

                        errorsIfTouched={false}
                        warningsIfTouched={false}

                        label='Test label'
                        placeholder='Test placeholder text...'
                        iconClassNames='fas fa-dumbbell'
                    />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ReduxFormTextInputComponent
                        variant={2}
                        name='reduxFormTextInputComponents.testFormTextInputComponentWithDefaultValue8'

                        errorsIfTouched={false}
                        warningsIfTouched={false}

                        label='Test label'
                        placeholder='Test placeholder text...'
                        iconClassNames='fas fa-dumbbell'
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles)(TestContainerComponent);

<TestContainer/>

```

Editable text input with errors and warnings shown (note that 'errorsIfTouched' and 'warningsIfTouched' flags are both set to true):

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormTextInputComponent
                        name='reduxFormTextInputComponents.testFormTextInputComponentWithDefaultValue9'

                        errorsIfTouched={false}
                        warningsIfTouched={false}

                        label='Test label'
                        placeholder='Test placeholder text...'
                        iconClassNames='fas fa-dumbbell'
                    />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ReduxFormTextInputComponent
                        variant={2}
                        name='reduxFormTextInputComponents.testFormTextInputComponentWithDefaultValue9'

                        errorsIfTouched={false}
                        warningsIfTouched={false}

                        label='Test label'
                        placeholder='Test placeholder text...'
                        iconClassNames='fas fa-dumbbell'
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles)(TestContainerComponent);

<TestContainer/>

```
