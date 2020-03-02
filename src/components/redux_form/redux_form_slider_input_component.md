Two variants of slider input component with single handle:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                       <ReduxFormSliderInputComponent
                           name='testFormSliderInputComponent1'
                       />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '15px 5px 15px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                       <ReduxFormSliderInputComponent
                           variant={2}
                           name='testFormSliderInputComponent1'
                       />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Two variants of slider input component with multiple handles:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                       <ReduxFormSliderInputComponent
                           name='reduxSliderInputComponents.testFromSliderInputComponentWithDefaultValue1'
                       />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '15px 5px 15px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                       <ReduxFormSliderInputComponent
                           variant={2}
                           name='reduxSliderInputComponents.testFromSliderInputComponentWithDefaultValue1'
                       />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Two variants of slider input component with multiple handles in readonly mode:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                       <ReduxFormSliderInputComponent
                           readOnly={true}
                           name='reduxSliderInputComponents.testFromSliderInputComponentWithDefaultValue2'
                       />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '15px 5px 15px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                       <ReduxFormSliderInputComponent
                           readOnly={true}
                           variant={2}
                           name='reduxSliderInputComponents.testFromSliderInputComponentWithDefaultValue2'
                       />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Two variants of slider input component with multiple handles in disabled mode:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');

const styles = theme => ({});

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                       <ReduxFormSliderInputComponent
                           disabled={true}
                           name='reduxSliderInputComponents.testFromSliderInputComponentWithDefaultValue3'
                       />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>
               
               <SimpleFlexGridRow style={{marginTop: '10px'}}>                 
                   <SimpleFlexGridColumn style={{padding: '15px 5px 15px 5px', backgroundColor: theme.layoutStyles.headerBGColor}} full={true}>                
                       <ReduxFormSliderInputComponent
                           disabled={true}
                           variant={2}
                           name='reduxSliderInputComponents.testFromSliderInputComponentWithDefaultValue3'
                       />
                   </SimpleFlexGridColumn>
               </SimpleFlexGridRow>               
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```

Slider input component with multiple handles and custom styling:

```jsx

const injectSheet = require('react-jss').default;
const {SimpleFlexGridContainer, SimpleFlexGridRow, SimpleFlexGridColumn} = require('./../grid/simple_flex_grid');

const styles = theme => ({});
const trackStyle = {backgroundColor: '#D5D5D5'};
const trackProgressStyle = {backgroundColor: '#2DAD6A'};

const knobStyle = {width: '20px', height: '20px', backgroundColor: '#2DAD6A'};
const knobHoverStyle = {boxShadow: 'none'};
const activeKnobStyle = {boxShadow: 'none'};

function TestContainerComponent(props) {
    const {classes, theme} = props;

    return <SimpleFlexGridContainer>               
               <SimpleFlexGridRow>
                   <SimpleFlexGridColumn style={{padding: '10px 5px 5px 5px'}} full={true}>
                       <ReduxFormSliderInputComponent
                           name='reduxSliderInputComponents.testFromSliderInputComponentWithDefaultValue4'
                           
                           step={10}
                           min={0}
                           max={100}
                           
                           trackStyle={trackStyle}
                           trackProgressStyle={trackProgressStyle}
                           
                           knobStyle={knobStyle}
                           knobHoverStyle={knobHoverStyle}
                           activeKnobStyle={activeKnobStyle}
                       />
                   </SimpleFlexGridColumn>          
               </SimpleFlexGridRow>            
           </SimpleFlexGridContainer>;
}

const TestContainer = injectSheet(styles, {injectTheme: true})(TestContainerComponent);

<TestContainer/>

```
