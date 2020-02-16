Editable radio buttons (medium) without labels:

```jsx

const injectSheet = require('react-jss').default;
const {ElementsGroup} = require('./../layout/alignment/elements/elements_group');
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');

const {ReduxFormRadioButtonInputComponent} = require('./redux_form_radio_button_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
            <SimpleFlexGridRow>
                <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ElementsGroup>
                        <ReduxFormRadioButtonInputComponent
                            variant={1}
    
                            name='testFormRadioButtonInputComponent1'
                            value='testVal1'
                        />

                        <ReduxFormRadioButtonInputComponent
                            variant={1} 
    
                            name='testFormRadioButtonInputComponent1'
                            value='testVal2'
                        />

                    </ElementsGroup>
                </SimpleFlexGridColumn>          
            </SimpleFlexGridRow>
               
            <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ElementsGroup>
                        <ReduxFormRadioButtonInputComponent
                            variant={2}
    
                            name='testFormRadioButtonInputComponent1'
                            value='testVal3'
                        />

                        <ReduxFormRadioButtonInputComponent
                            variant={2}
    
                            name='testFormRadioButtonInputComponent1'
                            value='testVal4'
                        />
                    </ElementsGroup>
                </SimpleFlexGridColumn>
            </SimpleFlexGridRow>               
    </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Readonly radio buttons (medium) without labels:

```jsx

const injectSheet = require('react-jss').default;
const {ElementsGroup} = require('./../layout/alignment/elements/elements_group');
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');

const {ReduxFormRadioButtonInputComponent} = require('./redux_form_radio_button_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
            <SimpleFlexGridRow>
                <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ElementsGroup>
                        <ReduxFormRadioButtonInputComponent
                            variant={1}
    
                            name='testFormRadioButtonInputComponent2'
                            value='testVal1'
                            
                            readOnly={true}
                        />

                        <ReduxFormRadioButtonInputComponent
                            variant={1} 
    
                            name='testFormRadioButtonInputComponent2'
                            value='testVal2'
                            
                            readOnly={true}
                        />

                    </ElementsGroup>
                </SimpleFlexGridColumn>          
            </SimpleFlexGridRow>
               
            <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ElementsGroup>
                        <ReduxFormRadioButtonInputComponent
                            variant={2}
    
                            name='testFormRadioButtonInputComponent2'
                            value='testVal3'
                            
                            readOnly={true}
                        />

                        <ReduxFormRadioButtonInputComponent
                            variant={2}
    
                            name='testFormRadioButtonInputComponent2'
                            value='testVal4'
                            
                            readOnly={true}
                        />
                    </ElementsGroup>
                </SimpleFlexGridColumn>
            </SimpleFlexGridRow>               
    </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Disabled radio buttons (medium) without labels:

```jsx

const injectSheet = require('react-jss').default;
const {ElementsGroup} = require('./../layout/alignment/elements/elements_group');
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');

const {ReduxFormRadioButtonInputComponent} = require('./redux_form_radio_button_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
            <SimpleFlexGridRow>
                <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ElementsGroup>
                        <ReduxFormRadioButtonInputComponent
                            variant={1}
    
                            name='testFormRadioButtonInputComponent3'
                            value='testVal1'
                            
                            disabled={true}
                        />

                        <ReduxFormRadioButtonInputComponent
                            variant={1} 
    
                            name='testFormRadioButtonInputComponent3'
                            value='testVal2'
                            
                            disabled={true}
                        />

                    </ElementsGroup>
                </SimpleFlexGridColumn>          
            </SimpleFlexGridRow>
               
            <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ElementsGroup>
                        <ReduxFormRadioButtonInputComponent
                            variant={2}
    
                            name='testFormRadioButtonInputComponent3'
                            value='testVal3'
                            
                            disabled={true}
                        />

                        <ReduxFormRadioButtonInputComponent
                            variant={2}
    
                            name='testFormRadioButtonInputComponent3'
                            value='testVal4'
                            
                            disabled={true}
                        />
                    </ElementsGroup>
                </SimpleFlexGridColumn>
            </SimpleFlexGridRow>               
    </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Editable radio buttons (medium) with default value set but no labels:

```jsx

const injectSheet = require('react-jss').default;
const {ElementsGroup} = require('./../layout/alignment/elements/elements_group');
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');

const {ReduxFormRadioButtonInputComponent} = require('./redux_form_radio_button_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
            <SimpleFlexGridRow>
                <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ElementsGroup>
                        <ReduxFormRadioButtonInputComponent
                            variant={1}
    
                            name='reduxFormRadioButtonInputComponents.testFromRadioButtonInputComponentWithDefaultValue1'
                            value='testVal1'
                        />

                        <ReduxFormRadioButtonInputComponent
                            variant={1} 
    
                            name='reduxFormRadioButtonInputComponents.testFromRadioButtonInputComponentWithDefaultValue1'
                            value='testVal2'
                        />

                    </ElementsGroup>
                </SimpleFlexGridColumn>          
            </SimpleFlexGridRow>
               
            <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ElementsGroup>
                        <ReduxFormRadioButtonInputComponent
                            variant={2}
    
                            name='reduxFormRadioButtonInputComponents.testFromRadioButtonInputComponentWithDefaultValue1'
                            value='testVal3'
                        />

                        <ReduxFormRadioButtonInputComponent
                            variant={2}
    
                            name='reduxFormRadioButtonInputComponents.testFromRadioButtonInputComponentWithDefaultValue1'
                            value='testVal4'
                        />
                    </ElementsGroup>
                </SimpleFlexGridColumn>
            </SimpleFlexGridRow>               
    </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Readonly radio buttons (medium) with default value set but no labels:

```jsx

const injectSheet = require('react-jss').default;
const {ElementsGroup} = require('./../layout/alignment/elements/elements_group');
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');

const {ReduxFormRadioButtonInputComponent} = require('./redux_form_radio_button_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
            <SimpleFlexGridRow>
                <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ElementsGroup>
                        <ReduxFormRadioButtonInputComponent
                            variant={1}
    
                            name='reduxFormRadioButtonInputComponents.testFromRadioButtonInputComponentWithDefaultValue2'
                            value='testVal1'
                            
                            readOnly={true}
                        />

                        <ReduxFormRadioButtonInputComponent
                            variant={1} 
    
                            name='reduxFormRadioButtonInputComponents.testFromRadioButtonInputComponentWithDefaultValue2'
                            value='testVal2'
                            
                            readOnly={true}
                        />

                    </ElementsGroup>
                </SimpleFlexGridColumn>          
            </SimpleFlexGridRow>
               
            <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ElementsGroup>
                        <ReduxFormRadioButtonInputComponent
                            variant={2}
    
                            name='reduxFormRadioButtonInputComponents.testFromRadioButtonInputComponentWithDefaultValue2'
                            value='testVal3'
                            
                            readOnly={true}
                        />

                        <ReduxFormRadioButtonInputComponent
                            variant={2}
    
                            name='reduxFormRadioButtonInputComponents.testFromRadioButtonInputComponentWithDefaultValue2'
                            value='testVal4'
                            
                            readOnly={true}
                        />
                    </ElementsGroup>
                </SimpleFlexGridColumn>
            </SimpleFlexGridRow>               
    </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Disabled radio buttons (medium) with default value set but no labels:

```jsx

const injectSheet = require('react-jss').default;
const {ElementsGroup} = require('./../layout/alignment/elements/elements_group');
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');

const {ReduxFormRadioButtonInputComponent} = require('./redux_form_radio_button_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
            <SimpleFlexGridRow>
                <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ElementsGroup>
                        <ReduxFormRadioButtonInputComponent
                            variant={1}
    
                            name='reduxFormRadioButtonInputComponents.testFromRadioButtonInputComponentWithDefaultValue3'
                            value='testVal1'
                            
                            disabled={true}
                        />

                        <ReduxFormRadioButtonInputComponent
                            variant={1} 
    
                            name='reduxFormRadioButtonInputComponents.testFromRadioButtonInputComponentWithDefaultValue3'
                            value='testVal2'
                            
                            disabled={true}
                        />

                    </ElementsGroup>
                </SimpleFlexGridColumn>          
            </SimpleFlexGridRow>
               
            <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ElementsGroup>
                        <ReduxFormRadioButtonInputComponent
                            variant={2}
    
                            name='reduxFormRadioButtonInputComponents.testFromRadioButtonInputComponentWithDefaultValue3'
                            value='testVal3'
                            
                            disabled={true}
                        />

                        <ReduxFormRadioButtonInputComponent
                            variant={2}
    
                            name='reduxFormRadioButtonInputComponents.testFromRadioButtonInputComponentWithDefaultValue3'
                            value='testVal4'
                            
                            disabled={true}
                        />
                    </ElementsGroup>
                </SimpleFlexGridColumn>
            </SimpleFlexGridRow>               
    </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Editable radio buttons (medium) with labels (left):

```jsx

const injectSheet = require('react-jss').default;
const {ElementsGroup} = require('./../layout/alignment/elements/elements_group');
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');

const {ReduxFormRadioButtonInputComponent} = require('./redux_form_radio_button_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
            <SimpleFlexGridRow>
                <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ElementsGroup>
                        <ReduxFormRadioButtonInputComponent
                            variant={1}
    
                            name='testFormRadioButtonInputComponent4'
                            value='testVal1'
                            
                            label='test label'
                            labelPosition='left'
                        />

                        <ReduxFormRadioButtonInputComponent
                            variant={1} 
    
                            name='testFormRadioButtonInputComponent4'
                            value='testVal2'
                            
                            label='test label'
                            labelPosition='left'
                        />

                    </ElementsGroup>
                </SimpleFlexGridColumn>          
            </SimpleFlexGridRow>
               
            <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ElementsGroup>
                        <ReduxFormRadioButtonInputComponent
                            variant={2}
    
                            name='testFormRadioButtonInputComponent4'
                            value='testVal3'
                            
                            label='test label'
                            labelPosition='left'
                        />

                        <ReduxFormRadioButtonInputComponent
                            variant={2}
    
                            name='testFormRadioButtonInputComponent4'
                            value='testVal4'
                            
                            label='test label'
                            labelPosition='left'
                        />
                    </ElementsGroup>
                </SimpleFlexGridColumn>
            </SimpleFlexGridRow>               
    </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>


```

Editable radio buttons (medium) with labels (right):

```jsx

const injectSheet = require('react-jss').default;
const {ElementsGroup} = require('./../layout/alignment/elements/elements_group');
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');

const {ReduxFormRadioButtonInputComponent} = require('./redux_form_radio_button_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
            <SimpleFlexGridRow>
                <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ElementsGroup>
                        <ReduxFormRadioButtonInputComponent
                            variant={1}
    
                            name='testFormRadioButtonInputComponent5'
                            value='testVal1'
                            
                            label='test label'
                            labelPosition='right'
                        />

                        <ReduxFormRadioButtonInputComponent
                            variant={1} 
    
                            name='testFormRadioButtonInputComponent5'
                            value='testVal2'
                            
                            label='test label'
                            labelPosition='right'
                        />

                    </ElementsGroup>
                </SimpleFlexGridColumn>          
            </SimpleFlexGridRow>
               
            <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ElementsGroup>
                        <ReduxFormRadioButtonInputComponent
                            variant={2}
    
                            name='testFormRadioButtonInputComponent5'
                            value='testVal3'
                            
                            label='test label'
                            labelPosition='right'
                        />

                        <ReduxFormRadioButtonInputComponent
                            variant={2}
    
                            name='testFormRadioButtonInputComponent5'
                            value='testVal4'
                            
                            label='test label'
                            labelPosition='right'
                        />
                    </ElementsGroup>
                </SimpleFlexGridColumn>
            </SimpleFlexGridRow>               
    </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Editable radio buttons (medium) with labels (right) set as well as default value:

```jsx


const injectSheet = require('react-jss').default;
const {ElementsGroup} = require('./../layout/alignment/elements/elements_group');
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');

const {ReduxFormRadioButtonInputComponent} = require('./redux_form_radio_button_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
            <SimpleFlexGridRow>
                <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ElementsGroup>
                        <ReduxFormRadioButtonInputComponent
                            variant={1}
    
                            name='reduxFormRadioButtonInputComponents.testFromRadioButtonInputComponentWithDefaultValue4'
                            value='testVal1'
                            
                            label='test label'
                            labelPosition='right'
                        />

                        <ReduxFormRadioButtonInputComponent
                            variant={1} 
    
                            name='reduxFormRadioButtonInputComponents.testFromRadioButtonInputComponentWithDefaultValue4'
                            value='testVal2'
                            
                            label='test label'
                            labelPosition='right'
                        />

                    </ElementsGroup>
                </SimpleFlexGridColumn>          
            </SimpleFlexGridRow>
               
            <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ElementsGroup>
                        <ReduxFormRadioButtonInputComponent
                            variant={2}
    
                            name='reduxFormRadioButtonInputComponents.testFromRadioButtonInputComponentWithDefaultValue4'
                            value='testVal3'
                            
                            label='test label'
                            labelPosition='right'
                        />

                        <ReduxFormRadioButtonInputComponent
                            variant={2}
    
                            name='reduxFormRadioButtonInputComponents.testFromRadioButtonInputComponentWithDefaultValue4'
                            value='testVal4'
                            
                            label='test label'
                            labelPosition='right'
                        />
                    </ElementsGroup>
                </SimpleFlexGridColumn>
            </SimpleFlexGridRow>               
    </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Disabled radio buttons (medium) with labels (right) set:

```jsx

const injectSheet = require('react-jss').default;
const {ElementsGroup} = require('./../layout/alignment/elements/elements_group');
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');

const {ReduxFormRadioButtonInputComponent} = require('./redux_form_radio_button_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
            <SimpleFlexGridRow>
                <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ElementsGroup>
                        <ReduxFormRadioButtonInputComponent
                            variant={1}
    
                            name='testFormRadioButtonInputComponent6'
                            value='testVal1'
                            
                            disabled={true}
                            
                            label='test label'
                            labelPosition='right'
                        />

                        <ReduxFormRadioButtonInputComponent
                            variant={1} 
    
                            name='testFormRadioButtonInputComponent6'
                            value='testVal2'
                            
                            disabled={true}
                            
                            label='test label'
                            labelPosition='right'
                        />

                    </ElementsGroup>
                </SimpleFlexGridColumn>          
            </SimpleFlexGridRow>
               
            <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ElementsGroup>
                        <ReduxFormRadioButtonInputComponent
                            variant={2}
    
                            name='testFormRadioButtonInputComponent6'
                            value='testVal3'
                            
                            disabled={true}
                            
                            label='test label'
                            labelPosition='right'
                        />

                        <ReduxFormRadioButtonInputComponent
                            variant={2}
    
                            name='testFormRadioButtonInputComponent6'
                            value='testVal4'
                            
                            disabled={true}
                            
                            label='test label'
                            labelPosition='right'
                        />
                    </ElementsGroup>
                </SimpleFlexGridColumn>
            </SimpleFlexGridRow>               
    </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Disabled radio buttons (medium) with labels (right) set as well as default value:

```jsx

const injectSheet = require('react-jss').default;
const {ElementsGroup} = require('./../layout/alignment/elements/elements_group');
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');

const {ReduxFormRadioButtonInputComponent} = require('./redux_form_radio_button_input_component');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
            <SimpleFlexGridRow>
                <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                    <ElementsGroup>
                        <ReduxFormRadioButtonInputComponent
                            variant={1}
    
                            name='reduxFormRadioButtonInputComponents.testFromRadioButtonInputComponentWithDefaultValue5'
                            value='testVal1'
                            
                            disabled={true}
                            
                            label='test label'
                            labelPosition='right'
                        />

                        <ReduxFormRadioButtonInputComponent
                            variant={1} 
    
                            name='reduxFormRadioButtonInputComponents.testFromRadioButtonInputComponentWithDefaultValue5'
                            value='testVal2'
                            
                            disabled={true}
                            
                            label='test label'
                            labelPosition='right'
                        />

                    </ElementsGroup>
                </SimpleFlexGridColumn>          
            </SimpleFlexGridRow>
               
            <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                    <ElementsGroup>
                        <ReduxFormRadioButtonInputComponent
                            variant={2}
    
                            name='reduxFormRadioButtonInputComponents.testFromRadioButtonInputComponentWithDefaultValue5'
                            value='testVal3'
                            
                            disabled={true}
                            
                            label='test label'
                            labelPosition='right'
                        />

                        <ReduxFormRadioButtonInputComponent
                            variant={2}
    
                            name='reduxFormRadioButtonInputComponents.testFromRadioButtonInputComponentWithDefaultValue5'
                            value='testVal4'
                            
                            disabled={true}
                            
                            label='test label'
                            labelPosition='right'
                        />
                    </ElementsGroup>
                </SimpleFlexGridColumn>
            </SimpleFlexGridRow>               
    </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Radio buttons (medium) with labels (right) set and custom styling:

```jsx

import {mergeDeepRight} from 'ramda';
import {createUseStyles, useTheme} from 'react-jss';

import FormRadioButtonInputBaseComponent from './../form/form_radio_button_input_variants/form_radio_button_input_base_component';
import {stylesFunc} from './../form/form_radio_button_input_variants/form_radio_button_input_variant1_component';

const {ElementsGroup} = require('./../layout/alignment/elements/elements_group');
const {ReduxFormRadioButtonInputComponent} = require('./redux_form_radio_button_input_component');

const useStyles = createUseStyles(theme => {
    return mergeDeepRight(
        stylesFunc(theme),
        {
            componentContainer: {

                '& > $radioButtonLabel': {
                    fontSize: '11px',
                
                    color: 'black',
                },
                
                '& > $inputControl': {

                    '&:checked + $inputControlLabel > $inputControlIcon': {
                        transform: 'scale(1.5)',
                    },
                },                

                '& > $inputControlLabel': {
                    width: '15px',
                    height: '15px',
                
                    border: `2px solid #2DAD6A`,

                    '& > $inputControlIcon': {
                        transform: 'scale(0)',
                        backgroundColor: '#2DAD6A',
                    }
                },
            },

            radioButtonLabel: {},

            inputControl: {},
            inputControlLabel: {},
            inputControlIcon: {},
        }
    )
});

function FormRadioButtonInputCustomComponent(props) {
    const theme = useTheme();
    const classes = useStyles({...props, theme});

    const render = () => {
        return <FormRadioButtonInputBaseComponent {...props} classes={classes}/>
    };

    return render();
}

<ElementsGroup>
    <ReduxFormRadioButtonInputComponent
        customComponent={FormRadioButtonInputCustomComponent}
    
        name='testFormRadioButtonInputComponent7'
        value='testVal1'
        
        label='test label'
        labelPosition='right'        
    />

    <ReduxFormRadioButtonInputComponent
        customComponent={FormRadioButtonInputCustomComponent}
    
        name='testFormRadioButtonInputComponent7'
        value='testVal2'
        
        label='test label'
        labelPosition='right'
    />
</ElementsGroup>

```