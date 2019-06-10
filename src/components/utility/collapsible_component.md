Example usage of the component using minimal parameters set:

```jsx

const {Component} = require('react');
const {RegularButtonComponent} = require('./../buttons/regular_button_component');
const {InlineTextBlock} = require('./../layout/text/inline_text_block');
const {CollapsibleComponent} = require('./collapsible_component');

class DemoCollapsibleComponent1 extends Component {
    _onSwitchCollapsible() {
        this.setState({
            openCollapsible: !this.state.openCollapsible
        });
    }

    render() {
        return <div>
            <RegularButtonComponent onClick={this._onSwitchCollapsible} label='switch collapsible'/>
            
            <div style={{border: '1px solid black', padding: '5px', marginTop: '10px'}}>        
                <CollapsibleComponent open={this.state.openCollapsible}>
                    <InlineTextBlock>
                        Test text row 1...
                        <br/>
                        Test text row 2...
                        <br/>
                        Even more text data...
                        <br/>
                        A little bit more text...
                    </InlineTextBlock>
                </CollapsibleComponent>
            </div>
        </div>
    }
    
    constructor(props) {
        super(props);
        
        this._onSwitchCollapsible = this._onSwitchCollapsible.bind(this);
        
        this.state = {
            openCollapsible: false
        }
    }
}

<DemoCollapsibleComponent1/>

```