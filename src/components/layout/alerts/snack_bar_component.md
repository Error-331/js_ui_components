Test

```jsx

const {Component} = require('react');

const {RegularButtonComponent} = require('./../../buttons/regular_button_component');
const {SnackBarComponent} = require('./snack_bar_component');

class DemoSnackBarComponent1 extends Component {
    _onAddAlert() {
        const demoItems = this.state.demoItems.slice();
    
        demoItems.push({caption: 'Test alert 1 caption...', iconClassName: 'fas fa-battery-slash', type: 'regular'});
        this.setState({demoItems});
    }

    render() {
        return <div>
            <SnackBarComponent items={this.state.demoItems}/>
            <RegularButtonComponent label='Add alert' onClick={this._onAddAlert}/>
        </div>;
    }
    
    constructor(props) {
        super(props);
        
        this._onAddAlert = this._onAddAlert.bind(this);
        
        this.state = {
            demoItems: [
                {caption: 'Test alert 1 caption...', iconClassName: 'fas fa-battery-slash', type: 'regular'}
            ]
        }
    }
}

<DemoSnackBarComponent1/>

```