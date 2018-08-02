Example usage of simple flex grid columns (two flex columns of different size):

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
                <SimpleFlexGridColumn size={30} style={{border: '1px solid black', padding: '5px'}}>
                    <InlineTextBlock className={classes.testInlineBlock}>Column 1</InlineTextBlock>
                </SimpleFlexGridColumn>
            
                <SimpleFlexGridColumn size={70} style={{border: '1px solid black', padding: '5px'}}>
                   <InlineTextBlock className={classes.testInlineBlock}>Column 2</InlineTextBlock>
                </SimpleFlexGridColumn>
            </SimpleFlexGridRow>
        </SimpleFlexGridContainer>
    </div>;
}

const TestContainer = injectSheet(styles)(TestContainerComponent);

<TestContainer/>

```

Example usage of simple flex grid columns (three flex columns of different size with one of which is set to 'auto'):

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
                <SimpleFlexGridColumn size={30} style={{border: '1px solid black', padding: '5px'}}>
                    <InlineTextBlock className={classes.testInlineBlock}>Column 1</InlineTextBlock>
                </SimpleFlexGridColumn>
        
                <SimpleFlexGridColumn size={'auto'} style={{border: '1px solid black', padding: '5px'}}>
                    <InlineTextBlock className={classes.testInlineBlock}>Column 2 (auto)</InlineTextBlock>
                </SimpleFlexGridColumn>
    
                <SimpleFlexGridColumn size={30} style={{border: '1px solid black', padding: '5px'}}>
                    <InlineTextBlock className={classes.testInlineBlock}>Column 3</InlineTextBlock>
                </SimpleFlexGridColumn>
            </SimpleFlexGridRow>
        </SimpleFlexGridContainer>
    </div>;
}

const TestContainer = injectSheet(styles)(TestContainerComponent);

<TestContainer/>

```

Example usage of simple flex grid columns (three flex columns of different size with one of them occupies remaining space of the row container):

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
                <SimpleFlexGridColumn size={20} style={{border: '1px solid black', padding: '5px'}}>
                    <InlineTextBlock className={classes.testInlineBlock}>Column 1</InlineTextBlock>
                </SimpleFlexGridColumn>
        
                <SimpleFlexGridColumn size={20} style={{border: '1px solid black', padding: '5px'}}>
                    <InlineTextBlock className={classes.testInlineBlock}>Column 2</InlineTextBlock>
                </SimpleFlexGridColumn>
    
                <SimpleFlexGridColumn size={'auto'} full={true} style={{border: '1px solid black', padding: '5px'}}>
                    <InlineTextBlock className={classes.testInlineBlock}>Column 3 (auto-full)</InlineTextBlock>
                </SimpleFlexGridColumn>
            </SimpleFlexGridRow>
        </SimpleFlexGridContainer>
    </div>;
}

const TestContainer = injectSheet(styles)(TestContainerComponent);

<TestContainer/>

```

Example usage of simple flex grid columns arranged in two rows:

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
                <SimpleFlexGridColumn size={20} style={{border: '1px solid black', padding: '5px'}}>
                    <InlineTextBlock className={classes.testInlineBlock}>Column 1</InlineTextBlock>
                </SimpleFlexGridColumn>
        
                <SimpleFlexGridColumn size={20} style={{border: '1px solid black', padding: '5px'}}>
                    <InlineTextBlock className={classes.testInlineBlock}>Column 2</InlineTextBlock> 
                </SimpleFlexGridColumn>
    
                <SimpleFlexGridColumn size={60} full={true} style={{border: '1px solid black', padding: '5px'}}>
                    <InlineTextBlock className={classes.testInlineBlock}>Column 3</InlineTextBlock> 
                </SimpleFlexGridColumn>    
            </SimpleFlexGridRow>
        
            <SimpleFlexGridRow>
                <SimpleFlexGridColumn size={60} style={{border: '1px solid black', padding: '5px'}}>
                    <InlineTextBlock className={classes.testInlineBlock}>Column 1</InlineTextBlock>
                </SimpleFlexGridColumn>
                
                <SimpleFlexGridColumn size={20} style={{border: '1px solid black', padding: '5px'}}>
                    <InlineTextBlock className={classes.testInlineBlock}>Column 2</InlineTextBlock>
                </SimpleFlexGridColumn>
            
                <SimpleFlexGridColumn size={20} full={true} style={{border: '1px solid black', padding: '5px'}}>
                    <InlineTextBlock className={classes.testInlineBlock}>Column 3</InlineTextBlock>
                </SimpleFlexGridColumn>
            </SimpleFlexGridRow>
        </SimpleFlexGridContainer>
    </div>;
}

const TestContainer = injectSheet(styles)(TestContainerComponent);

<TestContainer/>

```