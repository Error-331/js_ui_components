Usage example:

```jsx 

const {Component} = require('react');

class LinearBufferPreloaderDemo1 extends Component {

    constructor(props) {
        super(props);
        
        this._intervalId = null;
        
        this.state = {
            progressValue: 0,
            bufferProgressValue: 0,
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
        const {progressValue, bufferProgressValue} = this.state;
        
        if (progressValue === 100) {
            this.setState({progressValue: 0, bufferProgressValue: 10});
        } else {
            const randomDelta = Math.random() * 10;
            const increment = progressValue + randomDelta;
            
            const randomBufferDelta = Math.random() * 10;
            const bufferIncrement = bufferProgressValue + randomBufferDelta + 1;
   
            this.setState({
                progressValue: Math.min(increment, 100),
                bufferProgressValue: Math.min(bufferIncrement, 100),
            });
        }
    };

    render() {
        return <LinearBufferPreloader value={this.state.progressValue} valueBuffer={this.state.bufferProgressValue}/>;
    }
}

<LinearBufferPreloaderDemo1/>

```