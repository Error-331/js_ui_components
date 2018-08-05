The only allowed direct child type for this component is [Simple Flex Grid Row](#simpleflexgridrow).
Example usage of simple flex grid container:

```jsx

const injectSheet = require('react-jss').default;

const {SimpleFlexGridContainer} = require('./simple_flex_grid_container');
const {SimpleFlexGridRow} = require('./simple_flex_grid_row');
const {SimpleFlexGridColumn} = require('./simple_flex_grid_column');
const {InlineTextBlock} = require('./../../layout/text/inline_text_block');

const styles = theme => ({
    testContainer: {
        backgroundColor: theme.layoutStyles.headerBGColor,
        
        '& $testInlineBlock': {
            color: theme.layoutStyles.headerFontColor
        }
    },
    
    testInlineBlock: {},
});


function TestContainerComponent(props) {
    const {classes} = props;

    return <div className={classes.testContainer}>
        <SimpleFlexGridContainer>
            <SimpleFlexGridRow>
                <SimpleFlexGridColumn full={true} style={{border: '1px solid black', padding: '5px'}}>
                    <InlineTextBlock className={classes.testInlineBlock}>Column 1</InlineTextBlock>
                </SimpleFlexGridColumn>
        
                <SimpleFlexGridColumn style={{border: '1px solid black', padding: '5px'}}>
                    <InlineTextBlock className={classes.testInlineBlock}>Column 2</InlineTextBlock>
                </SimpleFlexGridColumn>
            </SimpleFlexGridRow>
        </SimpleFlexGridContainer>
    </div>;
}

const TestContainer = injectSheet(styles)(TestContainerComponent);

<TestContainer/>

```

Example usage of simple flex grid container that is stretched vertically:


```jsx

const injectSheet = require('react-jss').default;

const {SimpleFlexGridContainer} = require('./simple_flex_grid_container');
const {SimpleFlexGridRow} = require('./simple_flex_grid_row');
const {SimpleFlexGridColumn} = require('./simple_flex_grid_column');
const {InlineTextBlock} = require('./../../layout/text/inline_text_block');

const styles = theme => ({
    testContainer: {
        height: '100px',
        backgroundColor: theme.layoutStyles.headerBGColor,
        
        '& $stretchedContainer': {
            backgroundColor: theme.baseStyles.accentColorPrimary,
        },
        
        '& $testInlineBlock': {
            color: theme.layoutStyles.headerFontColor
        }
    },
    
    stretchedContainer: {},
    testInlineBlock: {},
});


function TestContainerComponent(props) {
    const {classes} = props;

    return <div className={classes.testContainer}>
        <SimpleFlexGridContainer stretch={true} className={classes.stretchedContainer}>
            <SimpleFlexGridRow>
                <SimpleFlexGridColumn full={true} style={{border: '1px solid black', padding: '5px'}}>
                    <InlineTextBlock className={classes.testInlineBlock}>Column 1</InlineTextBlock>
                </SimpleFlexGridColumn>
        
                <SimpleFlexGridColumn style={{border: '1px solid black', padding: '5px'}}>
                    <InlineTextBlock className={classes.testInlineBlock}>Column 2</InlineTextBlock>
                </SimpleFlexGridColumn>
            </SimpleFlexGridRow>
        </SimpleFlexGridContainer>
    </div>;
}

const TestContainer = injectSheet(styles)(TestContainerComponent);

<TestContainer/>

```