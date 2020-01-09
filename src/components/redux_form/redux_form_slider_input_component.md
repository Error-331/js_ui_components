Test:

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

Test:

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
