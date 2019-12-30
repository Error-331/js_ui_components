Editable checkbox with no labels set:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormCheckboxInputComponent} = require('./redux_form_checkbox_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

return <SimpleFlexGridContainer>
    <SimpleFlexGridRow>
        <SimpleFlexGridColumn style={{padding: '5px 5px 5px 5px'}}>
            <ReduxFormCheckboxInputComponent
                name='testFormCheckboxInputComponent1'
            />
        </SimpleFlexGridColumn>
       
        <SimpleFlexGridColumn style={{marginLeft: '5px', padding: '5px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}}>
            <ReduxFormCheckboxInputComponent
                variant={2}
                name='testFormCheckboxInputComponent1'/>
        </SimpleFlexGridColumn>       
        
        <SimpleFlexGridColumn style={{marginLeft: '5px', padding: '5px 5px 5px 5px'}}>
            <ReduxFormCheckboxInputComponent
                variant={3}
                name='testFormCheckboxInputComponent1'/>
        </SimpleFlexGridColumn>
    </SimpleFlexGridRow>
</SimpleFlexGridContainer>

}

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Disabled checkbox with no labels set:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormCheckboxInputComponent} = require('./redux_form_checkbox_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

return <SimpleFlexGridContainer>
    <SimpleFlexGridRow>
        <SimpleFlexGridColumn style={{padding: '5px 5px 5px 5px'}}>
            <ReduxFormCheckboxInputComponent
                name='testFormCheckboxInputComponent2'
                disabled={true}
            />
        </SimpleFlexGridColumn>

        <SimpleFlexGridColumn style={{marginLeft: '5px', padding: '5px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}}>
            <ReduxFormCheckboxInputComponent
                variant={2}

                name='testFormCheckboxInputComponent2'
                disabled={true}
            />
        </SimpleFlexGridColumn>
                
        <SimpleFlexGridColumn style={{marginLeft: '5px', padding: '5px 5px 5px 5px'}}>
            <ReduxFormCheckboxInputComponent
                variant={3}

                name='testFormCheckboxInputComponent2'
                disabled={true}
            />
        </SimpleFlexGridColumn>
    </SimpleFlexGridRow>
</SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Editable checkbox with default value set but no labels:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormCheckboxInputComponent} = require('./redux_form_checkbox_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

return <SimpleFlexGridContainer>
    <SimpleFlexGridRow>
        <SimpleFlexGridColumn style={{padding: '5px 5px 5px 5px'}}>
            <ReduxFormCheckboxInputComponent
                name='reduxFormCheckboxInputComponents.testFormCheckboxInputComponentWithDefaultValue1'
            />
        </SimpleFlexGridColumn>
 
        <SimpleFlexGridColumn style={{marginLeft: '5px', padding: '5px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}}>
            <ReduxFormCheckboxInputComponent
                variant={2}
                name='reduxFormCheckboxInputComponents.testFormCheckboxInputComponentWithDefaultValue1'
            />    
        </SimpleFlexGridColumn>
                
        <SimpleFlexGridColumn style={{marginLeft: '5px', padding: '5px 5px 5px 5px'}}>
            <ReduxFormCheckboxInputComponent
                variant={3}
                name='reduxFormCheckboxInputComponents.testFormCheckboxInputComponentWithDefaultValue1'
            />
        </SimpleFlexGridColumn>
    </SimpleFlexGridRow>
</SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Disabled checkbox with default value set but no labels:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormCheckboxInputComponent} = require('./redux_form_checkbox_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

return <SimpleFlexGridContainer>
    <SimpleFlexGridRow>
        <SimpleFlexGridColumn style={{padding: '5px 5px 5px 5px'}}>
            <ReduxFormCheckboxInputComponent
                name='reduxFormCheckboxInputComponents.testFormCheckboxInputComponentWithDefaultValue2'
                disabled={true}
            />
        </SimpleFlexGridColumn>
 
        <SimpleFlexGridColumn style={{marginLeft: '5px', padding: '5px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}}>
            <ReduxFormCheckboxInputComponent
                variant={2}

                name='reduxFormCheckboxInputComponents.testFormCheckboxInputComponentWithDefaultValue2'
                disabled={true}
            /> 
        </SimpleFlexGridColumn>        
        
        <SimpleFlexGridColumn style={{marginLeft: '5px', padding: '5px 5px 5px 5px'}}>
            <ReduxFormCheckboxInputComponent
                variant={3}

                name='reduxFormCheckboxInputComponents.testFormCheckboxInputComponentWithDefaultValue2'
                disabled={true}
            />
        </SimpleFlexGridColumn>
    </SimpleFlexGridRow>
</SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Editable checkbox with label (left):

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormCheckboxInputComponent} = require('./redux_form_checkbox_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

return <SimpleFlexGridContainer>
    <SimpleFlexGridRow>
        <SimpleFlexGridColumn style={{padding: '5px 5px 5px 5px'}}>
            <ReduxFormCheckboxInputComponent
                name='testFormCheckboxInputComponent3'

                labelPosition='left'
                label='test label'
            />
        </SimpleFlexGridColumn>
   
        <SimpleFlexGridColumn style={{marginLeft: '5px', padding: '5px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}}>
            <ReduxFormCheckboxInputComponent
                variant={2}

                name='testFormCheckboxInputComponent3'

                labelPosition='left'
                label='test label'
            />   
        </SimpleFlexGridColumn>              
        
        <SimpleFlexGridColumn style={{marginLeft: '5px', padding: '5px 5px 5px 5px'}}>
            <ReduxFormCheckboxInputComponent
                variant={3}

                name='testFormCheckboxInputComponent3'

                labelPosition='left'
                label='test label'
            />
        </SimpleFlexGridColumn>
    </SimpleFlexGridRow>
</SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Editable checkbox with label (right):

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormCheckboxInputComponent} = require('./redux_form_checkbox_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

return <SimpleFlexGridContainer>
    <SimpleFlexGridRow>
        <SimpleFlexGridColumn style={{padding: '5px 5px 5px 5px'}}>
            <ReduxFormCheckboxInputComponent
                name='testFormCheckboxInputComponent4'

                labelPosition='right'
                label='test label'
            />
        </SimpleFlexGridColumn>

        <SimpleFlexGridColumn style={{marginLeft: '5px', padding: '5px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}}>
            <ReduxFormCheckboxInputComponent
                variant={2}

                name='testFormCheckboxInputComponent4'

                labelPosition='right'
                label='test label'
            />
        </SimpleFlexGridColumn>            
        
        <SimpleFlexGridColumn style={{marginLeft: '5px', padding: '5px 5px 5px 5px'}}>
            <ReduxFormCheckboxInputComponent
                variant={3}

                name='testFormCheckboxInputComponent4'

                labelPosition='right'
                label='test label'
            />
        </SimpleFlexGridColumn>
    </SimpleFlexGridRow>
</SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Editable checkbox with label (right) set as well as default value:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormCheckboxInputComponent} = require('./redux_form_checkbox_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

return <SimpleFlexGridContainer>
    <SimpleFlexGridRow>
        <SimpleFlexGridColumn style={{padding: '5px 5px 5px 5px'}}>
            <ReduxFormCheckboxInputComponent
                name='reduxFormCheckboxInputComponents.testFormCheckboxInputComponentWithDefaultValue3'

                labelPosition='right'
                label='test label'
            />
        </SimpleFlexGridColumn>
 
        <SimpleFlexGridColumn style={{marginLeft: '5px', padding: '5px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}}>
            <ReduxFormCheckboxInputComponent
                variant={2}

                name='reduxFormCheckboxInputComponents.testFormCheckboxInputComponentWithDefaultValue3'

                labelPosition='right'
                label='test label'
            /> 
        </SimpleFlexGridColumn>            
        
        <SimpleFlexGridColumn style={{marginLeft: '5px', padding: '5px 5px 5px 5px'}}>
            <ReduxFormCheckboxInputComponent
                variant={3}

                name='reduxFormCheckboxInputComponents.testFormCheckboxInputComponentWithDefaultValue3'

                labelPosition='right'
                label='test label'
            />
        </SimpleFlexGridColumn>
    </SimpleFlexGridRow>
</SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Disabled checkbox with label (right) set:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormCheckboxInputComponent} = require('./redux_form_checkbox_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

return <SimpleFlexGridContainer>
    <SimpleFlexGridRow>
        <SimpleFlexGridColumn style={{padding: '5px 5px 5px 5px'}}>
            <ReduxFormCheckboxInputComponent
                name='testFormCheckboxInputComponent5'

                disabled={true}

                labelPosition='right'
                label='test label'
            />
        </SimpleFlexGridColumn>
 
        <SimpleFlexGridColumn style={{marginLeft: '5px', padding: '5px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}}>
            <ReduxFormCheckboxInputComponent
                variant={2}
            
                name='testFormCheckboxInputComponent5'

                disabled={true}

                labelPosition='right'
                label='test label'
            /> 
        </SimpleFlexGridColumn>            
        
        <SimpleFlexGridColumn style={{marginLeft: '5px', padding: '5px 5px 5px 5px'}}>
            <ReduxFormCheckboxInputComponent
                variant={3}
            
                name='testFormCheckboxInputComponent5'

                disabled={true}

                labelPosition='right'
                label='test label'
            />
        </SimpleFlexGridColumn>
    </SimpleFlexGridRow>
</SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Disabled checkbox with label (right) set as well as default value:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');
const {ReduxFormCheckboxInputComponent} = require('./redux_form_checkbox_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

return <SimpleFlexGridContainer>
    <SimpleFlexGridRow>
        <SimpleFlexGridColumn style={{padding: '5px 5px 5px 5px'}}>
            <ReduxFormCheckboxInputComponent
                name='reduxFormCheckboxInputComponents.testFormCheckboxInputComponentWithDefaultValue4'

                disabled={true}

                labelPosition='right'
                label='test label'
            />
        </SimpleFlexGridColumn>
 
        <SimpleFlexGridColumn style={{marginLeft: '5px', padding: '5px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}}>
            <ReduxFormCheckboxInputComponent
                variant={2}
            
                name='reduxFormCheckboxInputComponents.testFormCheckboxInputComponentWithDefaultValue4'

                disabled={true}

                labelPosition='right'
                label='test label'
            /> 
        </SimpleFlexGridColumn>            
        
        <SimpleFlexGridColumn style={{marginLeft: '5px', padding: '5px 5px 5px 5px'}}>
            <ReduxFormCheckboxInputComponent
                variant={3}
            
                name='reduxFormCheckboxInputComponents.testFormCheckboxInputComponentWithDefaultValue4'

                disabled={true}

                labelPosition='right'
                label='test label'
            />
        </SimpleFlexGridColumn>
    </SimpleFlexGridRow>
</SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```
