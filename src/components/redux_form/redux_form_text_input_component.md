Empty editable text input field without any specific parameters set:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormTextInputComponent} = require('./redux_form_text_input_component');

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

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Empty editable text input field with specific icon:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormTextInputComponent} = require('./redux_form_text_input_component');

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

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Empty readonly text input field with specific icon:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormTextInputComponent} = require('./redux_form_text_input_component');

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

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Empty disabled text input field with specific icon:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormTextInputComponent} = require('./redux_form_text_input_component');

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

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Empty readonly and disabled text input field with specific icon:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormTextInputComponent} = require('./redux_form_text_input_component');

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

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Editable text input field with default value set:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormTextInputComponent} = require('./redux_form_text_input_component');

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

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Editable text input field with default value and specific icon set:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormTextInputComponent} = require('./redux_form_text_input_component');

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

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Readonly text input field with default value and specific icon:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormTextInputComponent} = require('./redux_form_text_input_component');

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

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Disabled text input field with default value and specific icon:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormTextInputComponent} = require('./redux_form_text_input_component');

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

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Readonly and disabled text input field with default value and specific icon:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormTextInputComponent} = require('./redux_form_text_input_component');

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

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Empty editable text input field with specified label:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormTextInputComponent} = require('./redux_form_text_input_component');

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

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Empty editable text input field with specified label and icon:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormTextInputComponent} = require('./redux_form_text_input_component');

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

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Empty readonly text input field with specified label and icon:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormTextInputComponent} = require('./redux_form_text_input_component');

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

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Empty disabled text input field with specified label and icon:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormTextInputComponent} = require('./redux_form_text_input_component');

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

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Empty readonly and disabled text input field with specified label and icon:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormTextInputComponent} = require('./redux_form_text_input_component');

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

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Empty editable text input field with placeholder text:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormTextInputComponent} = require('./redux_form_text_input_component');

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

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Empty editable text input field with specified label and placeholder text:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormTextInputComponent} = require('./redux_form_text_input_component');

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

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Empty editable text input field with specified label, placeholder text and icon:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormTextInputComponent} = require('./redux_form_text_input_component');

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

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Empty readonly text input field with specified label, placeholder text and icon:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormTextInputComponent} = require('./redux_form_text_input_component');

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

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Empty disabled text input field with specified label, placeholder text and icon:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormTextInputComponent} = require('./redux_form_text_input_component');

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

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Empty readonly and disabled text input field with specified label, placeholder text and icon:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormTextInputComponent} = require('./redux_form_text_input_component');

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

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Editable text input field with specified label, placeholder text, icon and default value:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormTextInputComponent} = require('./redux_form_text_input_component');

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

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Editable text input with errors shown (note that 'errorsIfTouched' flag is set to true):

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormTextInputComponent} = require('./redux_form_text_input_component');

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

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Editable text input with warnings shown (note that 'warningsIfTouched' flag is set to true):

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormTextInputComponent} = require('./redux_form_text_input_component');

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

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Editable text input with errors and warnings shown (note that 'errorsIfTouched' and 'warningsIfTouched' flags are both set to true):

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormTextInputComponent} = require('./redux_form_text_input_component');

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

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Empty editable text area input field without specific icon:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormTextInputComponent} = require('./redux_form_text_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormTextInputComponent
                        name='testFormTextAreaInputComponent1'
                        type='textarea'
                    />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ReduxFormTextInputComponent
                        variant={2}
                        name='testFormTextAreaInputComponent1'
                        type='textarea'
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Empty editable text area input field with specific icon:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormTextInputComponent} = require('./redux_form_text_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormTextInputComponent
                        name='testFormTextAreaInputComponent2'
                        type='textarea'
 
                        iconClassNames='fas fa-user'
                    />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ReduxFormTextInputComponent
                        variant={2}
                        name='testFormTextAreaInputComponent2'
                        type='textarea'
                           
                        iconClassNames='fas fa-user'
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Empty readonly text area input field with specific icon:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormTextInputComponent} = require('./redux_form_text_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormTextInputComponent
                        name='testFormTextAreaInputComponent3'
                        type='textarea'

                        readOnly={true}
                        iconClassNames='fas fa-user'
                    />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ReduxFormTextInputComponent
                        variant={2}
                        name='testFormTextAreaInputComponent3'
                        type='textarea'

                        readOnly={true}
                        iconClassNames='fas fa-user'
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Empty disabled text area input field with specific icon:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormTextInputComponent} = require('./redux_form_text_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormTextInputComponent
                        name='testFormTextAreaInputComponent4'
                        type='textarea'

                        disabled={true}
                        iconClassNames='fas fa-user'
                    />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ReduxFormTextInputComponent
                        variant={2}
                        name='testFormTextAreaInputComponent4'
                        type='textarea'

                        disabled={true}
                        iconClassNames='fas fa-user'
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Empty readonly and disabled text area input field with specific icon:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormTextInputComponent} = require('./redux_form_text_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormTextInputComponent
                        name='testFormTextAreaInputComponent5'
                        type='textarea'

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
                        name='testFormTextAreaInputComponent5'
                        type='textarea'

                        readOnly={true}
                        disabled={true}

                        iconClassNames='fas fa-user'
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Editable text area input field with default value set:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormTextInputComponent} = require('./redux_form_text_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormTextInputComponent
                        name='reduxFormTextInputComponents.testFormTextAreaInputComponentWithDefaultValue1'
                        type='textarea'
                    />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ReduxFormTextInputComponent
                        variant={2}
                        name='reduxFormTextInputComponents.testFormTextInputAreaComponentWithDefaultValue1'
                        type='textarea'
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Editable text area input field with default value and specific icon set:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormTextInputComponent} = require('./redux_form_text_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormTextInputComponent
                        name='reduxFormTextInputComponents.testFormTextAreaInputComponentWithDefaultValue2'
                        type='textarea'
                        
                        iconClassNames='fas fa-bus'
                    />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ReduxFormTextInputComponent
                        variant={2}
                        name='reduxFormTextInputComponents.testFormTextAreaInputComponentWithDefaultValue2'
                        type='textarea'
                        
                        iconClassNames='fas fa-bus'
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Readonly text area input field with default value and specific icon:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormTextInputComponent} = require('./redux_form_text_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormTextInputComponent
                        name='reduxFormTextAreaInputComponents.testFormTextInputComponentWithDefaultValue3'
                        type='textarea'

                        readOnly={true}
                        iconClassNames='fas fa-bus'
                    />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ReduxFormTextInputComponent
                        variant={2}
                        name='reduxFormTextAreaInputComponents.testFormTextInputComponentWithDefaultValue3'
                        type='textarea'

                        readOnly={true}
                        iconClassNames='fas fa-bus'
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Disabled text area input field with default value and specific icon:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormTextInputComponent} = require('./redux_form_text_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormTextInputComponent
                        name='reduxFormTextAreaInputComponents.testFormTextInputComponentWithDefaultValue4'
                        type='textarea'

                        disabled={true}
                        iconClassNames='fas fa-bus'
                    />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ReduxFormTextInputComponent
                        variant={2}
                        name='reduxFormTextAreaInputComponents.testFormTextInputComponentWithDefaultValue4'
                        type='textarea'

                        disabled={true}
                        iconClassNames='fas fa-bus'
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Readonly and disabled text area input field with default value and specific icon:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormTextInputComponent} = require('./redux_form_text_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormTextInputComponent
                        name='reduxFormTextAreaInputComponents.testFormTextInputComponentWithDefaultValue5'
                        type='textarea'

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
                        name='reduxFormTextAreaInputComponents.testFormTextInputComponentWithDefaultValue5'
                        type='textarea'

                        readOnly={true}
                        disabled={true}

                        iconClassNames='fas fa-bus'
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Empty editable text area input field with specified label:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormTextInputComponent} = require('./redux_form_text_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormTextInputComponent
                        name='testFormTextAreaInputComponent6'
                        type='textarea'

                        label='Test label'
                    />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ReduxFormTextInputComponent
                        variant={2}
                        name='testFormTextAreaInputComponent6'
                        type='textarea'

                        label='Test label'
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Empty editable text area input field with specified label and icon:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormTextInputComponent} = require('./redux_form_text_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormTextInputComponent
                        name='testFormTextAreaInputComponent7'
                        type='textarea'

                        label='Test label'
                        iconClassNames='fas fa-edit'
                    />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ReduxFormTextInputComponent
                        variant={2}
                        name='testFormTextAreaInputComponent7'
                        type='textarea'

                        label='Test label'
                        iconClassNames='fas fa-edit'
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Empty readonly text area input field with specified label and icon:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormTextInputComponent} = require('./redux_form_text_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormTextInputComponent
                        name='testFormTextAreaInputComponent8'
                        type='textarea'

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
                        name='testFormTextAreaInputComponent8'
                        type='textarea'

                        readOnly={true}

                        label='Test label'
                        iconClassNames='fas fa-edit'
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Empty disabled text area input field with specified label and icon:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormTextInputComponent} = require('./redux_form_text_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormTextInputComponent
                        name='testFormTextAreaInputComponent9'
                        type='textarea'

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
                        name='testFormTextAreaInputComponent9'
                        type='textarea'

                        disabled={true}

                        label='Test label'
                        iconClassNames='fas fa-edit'
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Empty readonly and disabled text area input field with specified label and icon:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormTextInputComponent} = require('./redux_form_text_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormTextInputComponent
                        name='testFormTextAreaInputComponent10'
                        type='textarea'

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
                        name='testFormTextAreaInputComponent10'
                        type='textarea'

                        disabled={true}

                        label='Test label'
                        iconClassNames='fas fa-edit'
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Empty editable text area input field with placeholder text:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormTextInputComponent} = require('./redux_form_text_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormTextInputComponent
                        name='testFormTextAreaInputComponent11'
                        type='textarea'

                        placeholder='Test placeholder text...'
                    />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ReduxFormTextInputComponent
                        variant={2}
                        name='testFormTextAreaInputComponent11'
                        type='textarea'

                        placeholder='Test placeholder text...'
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Empty editable text area input field with specified label and placeholder text:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormTextInputComponent} = require('./redux_form_text_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormTextInputComponent
                        name='testFormTextAreaInputComponent12'
                        type='textarea'

                        label='Test label'
                        placeholder='Test placeholder text...'
                    />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ReduxFormTextInputComponent
                        variant={2}
                        name='testFormTextAreaInputComponent12'
                        type='textarea'

                        label='Test label'
                        placeholder='Test placeholder text...'
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Empty editable text area input field with specified label, placeholder text and icon:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormTextInputComponent} = require('./redux_form_text_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormTextInputComponent
                        name='testFormTextAreaInputComponent13'
                        type='textarea'

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
                        name='testFormTextAreaInputComponent13'
                        type='textarea'

                        label='Test label'
                        placeholder='Test placeholder text...'
                        iconClassNames='fas fa-meh'
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Empty readonly text area input field with specified label, placeholder text and icon:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormTextInputComponent} = require('./redux_form_text_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormTextInputComponent
                        name='testFormTextAreaInputComponent14'
                        type='textarea'

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
                        name='testFormTextAreaInputComponent14'
                        type='textarea'

                        readOnly={true}

                        label='Test label'
                        placeholder='Test placeholder text...'
                        iconClassNames='fas fa-meh'
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Empty disabled text area input field with specified label, placeholder text and icon:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormTextInputComponent} = require('./redux_form_text_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormTextInputComponent
                        name='testFormTextAreaInputComponent15'
                        type='textarea'

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
                        name='testFormTextAreaInputComponent15'
                        type='textarea'

                        disabled={true}

                        label='Test label'
                        placeholder='Test placeholder text...'
                        iconClassNames='fas fa-meh'
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Empty readonly and disabled text area input field with specified label, placeholder text and icon:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormTextInputComponent} = require('./redux_form_text_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormTextInputComponent
                        name='testFormTextAreaInputComponent16'
                        type='textarea'

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
                        name='testFormTextAreaInputComponent16'
                        type='textarea'

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

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Editable text area input field with specified label, placeholder text, icon and default value:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormTextInputComponent} = require('./redux_form_text_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormTextInputComponent
                        name='reduxFormTextInputComponents.testFormTextAreaInputComponentWithDefaultValue6'
                        type='textarea'

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
                        name='reduxFormTextInputComponents.testFormTextAreaInputComponentWithDefaultValue6'
                        type='textarea'

                        label='Test label'
                        placeholder='Test placeholder text...'
                        iconClassNames='fas fa-dumbbell'
                    />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Editable text area input with errors shown (note that 'errorsIfTouched' flag is set to true):

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormTextInputComponent} = require('./redux_form_text_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormTextInputComponent
                        name='reduxFormTextInputComponents.testFormTextAreaInputComponentWithDefaultValue7'
                        type='textarea'

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
                        name='reduxFormTextInputComponents.testFormTextAreaInputComponentWithDefaultValue7'
                        type='textarea'

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

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Editable text area input with warnings shown (note that 'warningsIfTouched' flag is set to true):

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormTextInputComponent} = require('./redux_form_text_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormTextInputComponent
                        name='reduxFormTextInputComponents.testFormTextAreaInputComponentWithDefaultValue8'
                        type='textarea'

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
                        name='reduxFormTextInputComponents.testFormTextAreaInputComponentWithDefaultValue8'
                        type='textarea'

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

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Editable text area input with errors and warnings shown (note that 'errorsIfTouched' and 'warningsIfTouched' flags are both set to true):

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormTextInputComponent} = require('./redux_form_text_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormTextInputComponent
                        name='reduxFormTextInputComponents.testFormTextAreaInputComponentWithDefaultValue9'
                        type='textarea'

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
                        name='reduxFormTextInputComponents.testFormTextAreaInputComponentWithDefaultValue9'
                        type='textarea'

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

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

User styled (variant 1) editable text input with errors and warnings shown (note that 'errorsIfTouched' and 'warningsIfTouched' flags are both set to true):

```jsx

const injectSheet = require('react-jss').default;
const {mergeDeepRight} = require('ramda');

const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormTextInputComponent} = require('./redux_form_text_input_component');
const {FormTextInputVariant1Class, styles} = require('./../form/form_text_input_variants/form_text_input_variant1_component');

const newStyles = theme => {
    return mergeDeepRight(
        styles(theme),
        {
            componentContainer: {
                padding: '0px',
        
                '& > $inputContainer': {
                    boxSizing: 'border-box',
                    position: 'relative',
                    
                    display: 'block',
                    
                    '& > $inputControl': {
                        overflow: 'hidden',
                        display: 'block',
                    
                        width: '100%',
                    
                        margin: '0 0 0 0',
                        border: '1px solid #C2C2C2',
                        borderBottomColor: '#C2C2C2',
                        padding: '12px 17px 12px 36px',
        
                        fontFamily: theme.inputStyles.fontStack,
                        fontSize: `12px`,
                        lineHeight: `12px`,
        
                        boxShadow: 'none',
                        color: 'black',
        
                        '&::-webkit-input-placeholder': {color: 'grey'},
                        '&::-moz-placeholder': {color: 'grey'},
                        '&::-ms-input-placeholder': {color: 'grey'},
                        
                        '&.focus': {
                            borderBottomColor: '#C2C2C2',
                            color: 'black',
                        },
        
                        '&.error': {
                            color: 'black',
                            borderColor: 'red',
                        },
        
                        '&.readOnly': {
                            borderBottomColor: '#C2C2C2',
                            color: 'grey',
                        },
        
                        '&.disabled': {
                            borderBottomStyle: '#C2C2C2',
                            color: 'grey',
                        },                        
                    },
                                
                    '& > $inputControlLabel': {
                        fontSize: `11px`,
                        '-webkit-transform': 'translateY(-120%)',
                        transform: 'translateY(-120%)',
        
                        color: 'black',
        
                        '&.focus': {color: 'black'},
                        '&.error': {color: 'red'},
                        '&.readOnly': {color: 'grey'},
                        '&.disabled': {color: 'grey'},        
                    },    
                    
                    '& > $inputControlIcon': {
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
        
                        color: 'gray',
                        fontSize: '16px',

                        '&.focus': {color: 'grey'},
                        '&.error': {color: 'red'},
                        '&.readOnly': {color: 'gray'},
                        '&.disabled': {color: 'gray'},                       
                    },                  
                },
                             
                '& > $errorsContainer': {
                    marginTop: '2px',
        
                    '& > $errorContainer': {
                        marginTop: '2px',
                        
                        color: 'red',
                    }
                },
        
                '& > $warningsContainer': {
                    color: 'blue',
                },
            },
        
            inputContainer: {},
            inputControl: {},
            inputControlLabel: {},
            inputControlIcon: {},
        
            subMessagesContainer: {},
        
            errorsContainer: {},
            errorContainer: {},
        
            warningsContainer: {},
            warningContainer: {},
        }
    )
};

const FormTextInputCustomComponent = injectSheet(newStyles)(FormTextInputVariant1Class);

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormTextInputComponent
                        customComponent={<FormTextInputCustomComponent/>}
                        name='reduxFormTextInputComponents.testFormTextInputComponentWithDefaultValue10'    
                        
                        errorsIfTouched={false}
                        warningsIfTouched={false}  

                        label='Test label'
                        placeholder='Test placeholder text...'
                        iconClassNames='fal fa-search'
                    />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>                      
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

User styled (variant 2) editable text input:

```jsx

const injectSheet = require('react-jss').default;

const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormTextInputComponent} = require('./redux_form_text_input_component');
const {FormTextInputVariant1Class} = require('./../form/form_text_input_variants/form_text_input_variant1_component');
const {RegularButtonComponent} = require('./../buttons/regular_button_component');

const topAdditionalPadding = 7;
const iconAdditionalPadding = 2;

const styles = theme => ({
    componentContainer: {
        boxSizing: 'border-box',

        position: 'relative',
        display: 'flex',

        flexBasis: 'auto',
        flexShrink: 1,
        flexGrow: 0,

        flexDirection: 'column',
        flexWrap: 'nowrap',

        justifyContent: 'flex-start',
        alignItems: 'stretch',
        alignContent: 'flex-start',

        '& > $inputContainer': {
            boxSizing: 'border-box',
            position: 'relative',
            
            '& > $inputControl': {
                boxSizing: 'border-box',
                overflow: 'hidden',
            
                width: '100%',
            
                margin: '0 0 0 0',

                border: '1px solid #2CAD6A',

                padding: '12px 17px 12px 17px',

                fontFamily: theme.inputStyles.fontStack,
                fontSize: `12px`,

                boxShadow: 'none',

                color: 'black',

                '&::-webkit-input-placeholder': {
                    color: 'grey',
                },

                '&::-moz-placeholder': {
                    color: 'grey',
                },

                '&::-ms-input-placeholder': {
                    color: 'grey',
                },

                '&.error': {
                    color: 'black',
                    borderColor: 'red',
                },
            },                                    
        },
             
        '& > $subMessagesContainer': {
            boxSizing: 'border-box',
            display: 'flex',

            flexBasis: 'auto',
            flexShrink: '1',
            flexGrow: '0',

            flexDirection: 'column',
            flexWrap: 'nowrap',

            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            alignContent: 'flex-start',
        },

        '& > $errorsContainer': {
            marginTop: '2px',
            color: theme.inputStyles.attentionColor,

            '& > $errorContainer': {
                marginTop: '2px',

                fontFamily: theme.inputStyles.fontStack,
                fontSize: theme.inputStyles.errorFontSize,
                
                color: 'red',
            }
        },

        '& > $warningsContainer': {
            color: 'blue',

            '& > $warningContainer': {
                marginTop: '2px',

                fontFamily: theme.inputStyles.fontStack,
                fontSize: theme.inputStyles.errorFontSize,
            },
        },
    },

    inputContainer: {},
    inputControl: {},

    subMessagesContainer: {},

    errorsContainer: {},
    errorContainer: {},

    warningsContainer: {},
    warningContainer: {},
});

const FormTextInputCustomComponent = injectSheet(styles, {injectTheme: true})(FormTextInputVariant1Class);

const regularButtonContainerStyles = {
    height: '100%',
    maxWidth: '120px',
    
    borderRadius: '0px',
    boxShadow: 'unset',
    backgroundColor: '#2CAD6A',
};

const regularButtonCaptionStyle = {
    textTransform: 'capitalize',
    fontSize: '12px'
};

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 0px 5px 5px'}} full={true}>
                    <ReduxFormTextInputComponent
                        customComponent={<FormTextInputCustomComponent/>}
                        name='testFormTextAreaInputComponent17'    
                        
                        errorsIfTouched={false}
                        warningsIfTouched={false}  
   
                        placeholder='Test placeholder text...'
                    />
                   </SimpleFlexGridColumn>    
                   
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 0px'}} full={true}>
                    <RegularButtonComponent 
                        label='subscribe' 
                        containerStyles={regularButtonContainerStyles}
                        captionStyle={regularButtonCaptionStyle}
                    />
                   </SimpleFlexGridColumn>                    
                   
                      
               </SimpleFlexGridRow>                      
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

User styled (variant 1) editable text area input with fixed number of rows:

```jsx

const injectSheet = require('react-jss').default;

const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormTextInputComponent} = require('./redux_form_text_input_component');
const {FormTextInputVariant1Class} = require('./../form/form_text_input_variants/form_text_input_variant1_component');

const topAdditionalPadding = 7;
const iconAdditionalPadding = 2;

const styles = theme => ({
    componentContainer: {
        boxSizing: 'border-box',

        position: 'relative',
        display: 'flex',

        flexBasis: 'auto',
        flexShrink: 1,
        flexGrow: 0,

        flexDirection: 'column',
        flexWrap: 'nowrap',

        justifyContent: 'flex-start',
        alignItems: 'stretch',
        alignContent: 'flex-start',

        '& > $inputContainer': {
            boxSizing: 'border-box',
            position: 'relative',
            
            '& > $inputControl': {
                boxSizing: 'border-box',
                overflow: 'hidden',
                resize: 'none',
            
                width: '100%',
            
                margin: '0 0 0 0',

                border: '1px solid #C2C2C2',

                padding: '12px 17px 12px 17px',

                fontFamily: theme.inputStyles.fontStack,
                fontSize: `12px`,

                boxShadow: 'none',

                color: 'black',

                '&::-webkit-input-placeholder': {
                    color: 'grey',
                },

                '&::-moz-placeholder': {
                    color: 'grey',
                },

                '&::-ms-input-placeholder': {
                    color: 'grey',
                },

                '&.error': {
                    color: 'black',
                    borderColor: 'red',
                },

            },
                        
            '& > $inputControlLabel': {
                position: 'absolute',

                top: `${theme.inputStyles.fontSize - theme.inputStyles.labelInactiveFontSize}px`,
                left: '0px',

                fontFamily: theme.inputStyles.fontStack,

                cursor: 'text',
                transition: '.2s ease-out',

                fontSize: `11px`,
                '-webkit-transform': 'translateY(-120%)',
                transform: 'translateY(-120%)',

                color: 'black',

                '&.error': {
                    color: 'red',
                },
            },

            '& > $inputControlLabel:first-letter': {
                textTransform: 'capitalize',
            },
            
            '& > $inputControlIcon': {
                position: 'absolute',
                top: '12px',
                left: '12px',

                color: 'gray',
                fontSize: '16px',

                '&.error': {
                    color: 'red'
                },
            },                  
        },
             
        '& > $subMessagesContainer': {
            boxSizing: 'border-box',
            display: 'flex',

            flexBasis: 'auto',
            flexShrink: '1',
            flexGrow: '0',

            flexDirection: 'column',
            flexWrap: 'nowrap',

            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            alignContent: 'flex-start',
        },

        '& > $errorsContainer': {
            marginTop: '2px',
            color: theme.inputStyles.attentionColor,

            '& > $errorContainer': {
                marginTop: '2px',

                fontFamily: theme.inputStyles.fontStack,
                fontSize: theme.inputStyles.errorFontSize,
                
                color: 'red',
            }
        },

        '& > $warningsContainer': {
            color: 'blue',

            '& > $warningContainer': {
                marginTop: '2px',

                fontFamily: theme.inputStyles.fontStack,
                fontSize: theme.inputStyles.errorFontSize,
            },
        },
    },

    inputContainer: {},
    inputControl: {},
    inputControlLabel: {},
    inputControlIcon: {},

    subMessagesContainer: {},

    errorsContainer: {},
    errorContainer: {},

    warningsContainer: {},
    warningContainer: {},
});

const FormTextInputCustomComponent = injectSheet(styles, {injectTheme: true})(FormTextInputVariant1Class);

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ReduxFormTextInputComponent
                        type='textarea'
                        rows={10}
                    
                        customComponent={<FormTextInputCustomComponent/>}
                        name='testFormTextAreaInputComponent18'    
                        
                        errorsIfTouched={false}
                        warningsIfTouched={false}  

                        label='Test label'
                        placeholder='Test placeholder text...'
     
                    />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>                      
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```
