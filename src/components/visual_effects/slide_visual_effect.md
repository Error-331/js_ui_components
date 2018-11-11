Examples of possible slide effect transitions:

```jsx

const {Component} = require('react');
const injectSheet = require('react-jss').default;

const {SlideVisualEffect} = require('./slide_visual_effect');
const {ElementsColumn} = require('./../layout');
const {RegularButtonComponent} = require('./../buttons');

const styles = theme => ({
    componentContainer: {
        overflow: 'hidden',
        position: 'relative', 
    
        width: '150px', 
        height: '300px', 
        
        backgroundColor: theme.baseStyles.mainQuaternaryColor,
    }
});

class TestContainerComponent extends Component {
    constructor(props) {
        super(props);
        
        this._intervalId = null;
        
        this.state = {
            showSlider: false
        }
    }
    
    componentDidMount() {
        this._intervalId  = setInterval(() => this.setState({
            showSlider: !this.state.showSlider
        }), 3000);
    }
    
    componentWillUnmount() {
        clearInterval(this._intervalId );
    }

    render() {
        const {showSlider} = this.state;
    
        return <div className={this.props.classes.componentContainer}>
            <SlideVisualEffect direction={this.props.direction} show={showSlider}>
                <ElementsColumn alignment='center'>
                    <RegularButtonComponent label='login'/>
                    <RegularButtonComponent label='register'/>
                    <RegularButtonComponent label='report'/>
                </ElementsColumn>                            
            </SlideVisualEffect>
        </div>
    }
}

const TestContainer = injectSheet(styles)(TestContainerComponent);

const testOuterContainerStyle = {
    boxSizing: 'border-box',
    display: 'grid',

    gridTemplateColumns: 'repeat(4, 1fr)',
    gridAutoRows: 'max-content',

    justifyItems: 'center',
    alignItems: 'center'
};

<div style={testOuterContainerStyle}>
    <TestContainer direction='BottomToTop'/>
    <TestContainer direction='LeftToRight'/>
    <TestContainer direction='RightToLeft'/>
    <TestContainer direction='TopToBottom'/>
</div>

```