Example of Snackbar component:

```jsx

const {Component} = require('react');
const {generateRandomIdNumber} = require('@webfuturistics/design_components');

const {RegularButtonComponent} = require('./regular_button_component');
const {SnackBarComponent} = require('./snack_bar_component');

class DemoSnackBarComponent1 extends Component {
  _onAddAlert() {
    const icons = [
      'fas fa-battery-slash',
      'fas fa-battery-full',
      'fas fa-battery-three-quarters',
      'fas fa-battery-quarter',
      'fas fa-battery-empty'
    ];

    const iconId = Math.floor((Math.random() * 5));
    const iconClassName = icons[iconId];

    const captions = [
      'Test alert caption...',
      'Test alert text... long text...',
      'Very long alert text with many words...',
    ];

    const captionId = Math.floor((Math.random() * 3));
    const caption = captions[captionId];

    const demoItems = this.state.demoItems.slice();
    demoItems.push({
      id: `alert_${generateRandomIdNumber()}`,
      caption,
      iconClassName,
      type: iconId === 4 ? 'error' : 'regular'
    });

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
      demoItems: []
    }
  }
}

<DemoSnackBarComponent1/>

```
