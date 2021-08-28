Example usage of global overlay:

```jsx

const {Component} = require('react');
const {RegularButtonComponent} = require('./regular_button_component');

class DemoGlobalOverlayComponent1 extends Component {
  _onShowOverlay() {
    this.setState({
      showGlobalOverlay: true
    });
  }

  _onHideOverlay() {
    this.setState({
      showGlobalOverlay: false
    });
  }

  render() {
    return <div>
      <RegularButtonComponent onClick={this._onShowOverlay} label='show overlay'/>

      <GlobalOverlayComponent show={this.state.showGlobalOverlay}>
        <RegularButtonComponent onClick={this._onHideOverlay} label='hide overlay'/>
      </GlobalOverlayComponent>

    </div>
  }

  constructor(props) {
    super(props);

    this._onShowOverlay = this._onShowOverlay.bind(this);
    this._onHideOverlay = this._onHideOverlay.bind(this);

    this.state = {
      showGlobalOverlay: false
    }
  }
}

<DemoGlobalOverlayComponent1/>

```

Example usage of global overlay with custom opacity:

```jsx

const {Component} = require('react');
const {RegularButtonComponent} = require('../buttons/regular_button_component');

class DemoGlobalOverlayComponent1 extends Component {
  _onShowOverlay() {
    this.setState({
      showGlobalOverlay: true
    });
  }

  _onHideOverlay() {
    this.setState({
      showGlobalOverlay: false
    });
  }

  render() {
    return <div>
      <RegularButtonComponent onClick={this._onShowOverlay} label='show overlay'/>

      <GlobalOverlayComponent show={this.state.showGlobalOverlay} opacity={1}>
        <RegularButtonComponent onClick={this._onHideOverlay} label='hide overlay'/>
      </GlobalOverlayComponent>

    </div>
  }

  constructor(props) {
    super(props);

    this._onShowOverlay = this._onShowOverlay.bind(this);
    this._onHideOverlay = this._onHideOverlay.bind(this);

    this.state = {
      showGlobalOverlay: false
    }
  }
}

<DemoGlobalOverlayComponent1/>

```
