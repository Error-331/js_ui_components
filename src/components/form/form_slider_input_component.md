Test: 

```jsx

const {Component} = require('react');
const {FormSliderInputComponent} = require('./form_slider_input_component');

class DemoComponent extends Component {
    constructor(props) {
        super(props);
       
        
        this.state = {
            itemsCount: 0
        }
    }
    
    componentDidMount() {
        setInterval(() => {
        
            this.setState({
                itemsCount: this.state.itemsCount + 1
            });
        
        }, 3000);
    
    }
    
    _renderTest() {
        const c = [];
    
        for (let i = 0; i < this.state.itemsCount; i++) {
            c.push(<div key={`i_${i}`}>{i}</div>)
        }
        
        return c;
    }
   
    render() {
        return <div>
         {this._renderTest()}

        </div>;
    }
}
 
<div>
 <DemoComponent/>
 <FormSliderInputComponent/>
</div> 



```
