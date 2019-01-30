Usage example:

```jsx 

const {Component} = require('react');

class LinearDeterminatePreloaderDemo1 extends Component {

    constructor(props) {
        super(props);
        
        this._intervalId = null;
        
        this.state = {
            progressValue: 0
        }
        
        this._onChangeProgress = this._onChangeProgress.bind(this);
    }  

    componentDidMount() {
        this._intervalId = setInterval(this._onChangeProgress, 500);
    }

    componentWillUnmount() {
        clearInterval(this._intervalId);
    }

    _onChangeProgress() {
        const {progressValue} = this.state;
        
        if (progressValue === 100) {
            this.setState({progressValue: 0});
        } else {
            const randomDelta = Math.random() * 10;
            const increment = progressValue + randomDelta;
            
            this.setState({progressValue: Math.min(increment, 100)});
        }
    };

    render() {
        return <LinearDeterminatePreloader value={this.state.progressValue}/>;
    }
}

<LinearDeterminatePreloaderDemo1/>

```