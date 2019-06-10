Examples of possible slide effect transitions:

```jsx

const {Component} = require('react');
const injectSheet = require('react-jss').default;

const {ElementsColumn} = require('./../layout');
const {RegularButtonComponent} = require('./../buttons');
const {SlideVisualEffect} = require('./slide_visual_effect');

const styles = theme => ({
    componentContainer: {
        boxSizing: 'border-box',
    
        overflow: 'hidden',
        position: 'relative', 
       
        width: 'auto',
        height: '300px',      
        
        backgroundColor: theme.baseStyles.mainSecondaryColor,
    }
});

class TestContainerComponent extends Component {
    constructor(props) {
        super(props);
        
        this._intervalId = null;
        this.onComponentContainerWidthChange = this.onComponentContainerWidthChange.bind(this);
        
        this.state = {
            showSlider: false,
            slideContainerWidth: 'auto',
        }
    }
    
    onComponentContainerWidthChange(slideContainerWidth) {
        this.setState({slideContainerWidth: slideContainerWidth});
    }
    
    componentDidMount() {
        this._intervalId  = setInterval(() => this.setState({
            showSlider: !this.state.showSlider
        }), 3000);
    }
    
    componentWillUnmount() {
        clearInterval(this._intervalId );
    }
    
    getContainerStyle() {
        return {
            width: `${this.state.slideContainerWidth}px`
        }
    }

    render() {
        const {showSlider} = this.state;
    
        return <div className={this.props.classes.componentContainer} style={this.getContainerStyle()}>
            <SlideVisualEffect onComponentContainerWidthChange={this.onComponentContainerWidthChange} direction={this.props.direction} show={showSlider}>
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