Example usage of modal component with some custom content:

```jsx

const {Component} = require('react');

const {ModalComponent} = require('./modal_component');
const {RegularButtonComponent} = require('./../buttons/regular_button_component');
const {RegularCardHeaderComponent, InlineTextBlock, InlineHeader} = require('./../layout');
const {ElementsRow} = require('./../layout/alignment/elements/elements_row');

class DemoGlobalModalComponent1 extends Component {
    _onShowModal() {
        this.setState({
            showModal: true
        });
    }
    
    _onHideModal() {
        this.setState({
            showModal: false
        });
    }

    render() {
        const modalHeader = <RegularCardHeaderComponent>Test modal 1</RegularCardHeaderComponent>;
        const modalFooter = <ElementsRow style={{marginTop: '5px'}} alignment='right'>
            <RegularButtonComponent onClick={this._onHideModal} label='hide modal'/>
        </ElementsRow>;
    
        return <div>
            <RegularButtonComponent onClick={this._onShowModal} label='show modal'/>
        
            <ModalComponent 
                show={this.state.showModal}
                
                header={modalHeader}
                footer={modalFooter}
            >
            
                <InlineHeader level={5}>
                    Test header 1
                </InlineHeader>
               
                <InlineTextBlock>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sollicitudin vitae nisl eget bibendum. Nunc tristique est a dolor interdum, eu faucibus
                    nunc mollis. Morbi gravida libero ac aliquam rhoncus. Donec diam magna, interdum a urna a, rutrum auctor dui. Mauris id molestie dolor, eu
                    consectetur elit. Donec id nisl vitae ex scelerisque suscipit.
                </InlineTextBlock>
            </ModalComponent>
           
        </div>;
    }
    
    constructor(props) {
        super(props);
        
        this._onShowModal = this._onShowModal.bind(this);
        this._onHideModal = this._onHideModal.bind(this);
        
        this.state = {
            showModal: false
        }
    }
}

<DemoGlobalModalComponent1/>

```