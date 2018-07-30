The only allowed direct child type for this component is [Simple Flex Grid Row](#simpleflexgridrow).
Example usage of simple flex grid container:

```jsx

const injectSheet = require('react-jss').default;

const SimpleFlexGridRow = require('./simple_flex_grid_row').default;
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
                <SimpleFlexGridColumn full={true} style={{border: '1px solid black', padding: '5px'}}>
                    <InlineTextBlock className={classes.testInlineBlock}>Element 1</InlineTextBlock>
                </SimpleFlexGridColumn>
        
                <SimpleFlexGridColumn style={{border: '1px solid black', padding: '5px'}}>
                    <InlineTextBlock className={classes.testInlineBlock}>Element 2</InlineTextBlock>
                </SimpleFlexGridColumn>
            </SimpleFlexGridRow>
        </SimpleFlexGridContainer>
    </div>;
}

const TestContainer = injectSheet(styles)(TestContainerComponent);

<TestContainer/>

```