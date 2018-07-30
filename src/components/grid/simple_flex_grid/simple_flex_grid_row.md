The only allowed direct child type for this component is [Simple Flex Grid Column](#simpleflexgridcolumn).
Example usage of simple flex grid row with two columns inside it:

```jsx

const injectSheet = require('react-jss').default;

const SimpleFlexGridContainer = require('./simple_flex_grid_container').default;
const SimpleFlexGridColumn = require('./simple_flex_grid_column').default;
const InlineTextBlock = require('./../../layout/text/inline_text_block').default;

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
                <SimpleFlexGridColumn size={50} style={{border: '1px solid black', padding: '5px'}}>
                    <InlineTextBlock className={classes.testInlineBlock}>Column 1</InlineTextBlock>
                </SimpleFlexGridColumn>
        
                <SimpleFlexGridColumn size={50} style={{border: '1px solid black', padding: '5px'}}>
                    <InlineTextBlock className={classes.testInlineBlock}>Column 2</InlineTextBlock>
                </SimpleFlexGridColumn>
            </SimpleFlexGridRow>
        </SimpleFlexGridContainer>
    </div>;
}

const TestContainer = injectSheet(styles)(TestContainerComponent);

<TestContainer/>

```
