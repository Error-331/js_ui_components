Example usage of modal dialog box (closable):

```jsx

const {Component} = require('react');

const {RegularButtonComponent} = require('./../buttons/regular_button_component');
const {ModalDialogBoxComponent} = require('./modal_dialog_box_component');

const {InlineHeader} = require('./../layout');
const InlineTextBlock = require('./../layout/text/inline_text_block').default;

class DemoGlobalModalDialogBoxComponent1 extends Component {
    _onSwitchLoading() {
        this.setState({
            isLoading: !this.state.isLoading,
        });    
    }

    _onShowModalDialogBox() {
        this.setState({
            showModalDialogBox: true,
        });
    }
    
    _onHideModalDialogBox() {
        this.setState({
            showModalDialogBox: false,
            isLoading: false,
        });
    }
   
    render() {    
        const buttons = [{label: 'load', onClick: this._onSwitchLoading}, {variant: 'outlined', label: 'cancel', onClick: this._onHideModalDialogBox}];
    
        return <div>
            <RegularButtonComponent onClick={this._onShowModalDialogBox} label='show modal dialog box'/>
        
            <ModalDialogBoxComponent 
                closable={true}
                show={this.state.showModalDialogBox}
                loading={this.state.isLoading}
            
                title={'Test dialog box 1'} 
                buttons={buttons}
                
                onClose={this._onHideModalDialogBox}
                
                bodyOuterStyles={{width: '500px'}}
                >
                    <InlineHeader level={5}>
                        Test header 1
                    </InlineHeader>
               
                    <InlineTextBlock>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sollicitudin vitae nisl eget bibendum. Nunc tristique est a dolor interdum, eu faucibus
                        nunc mollis. Morbi gravida libero ac aliquam rhoncus. Donec diam magna, interdum a urna a, rutrum auctor dui. Mauris id molestie dolor, eu
                        consectetur elit. Donec id nisl vitae ex scelerisque suscipit.
                    </InlineTextBlock>
            </ModalDialogBoxComponent>    
        </div>;
    }
    
    constructor(props) {
        super(props);
        
        this._onShowModalDialogBox = this._onShowModalDialogBox.bind(this);
        this._onHideModalDialogBox = this._onHideModalDialogBox.bind(this);
        this._onSwitchLoading = this._onSwitchLoading.bind(this);
        
        this.state = {
            showModalDialogBox: false,
            isLoading: false,
        }
    }
}

<DemoGlobalModalDialogBoxComponent1/>

```