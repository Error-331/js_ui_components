Example usage of modal component with some custom content:

```jsx

const {Component} = require('react');

const RegularButtonComponent = require('./../buttons/regular_button_component').default;
const RegularCardHeaderComponent = require('./../layout/structure/regular_card_header_component').default;

const ElementsRow = require('./../layout/alignment/elements_row').default;

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
        const modalHeader = <RegularCardHeaderComponent title='Test modal 1' />;
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
            
                <h3>
                    Test header 1
                </h3>
            
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sollicitudin vitae nisl eget bibendum. Nunc tristique est a dolor interdum, eu faucibus
                    nunc mollis. Morbi gravida libero ac aliquam rhoncus. Donec diam magna, interdum a urna a, rutrum auctor dui. Mauris id molestie dolor, eu
                    consectetur elit. Donec id nisl vitae ex scelerisque suscipit.
                </div>
            </ModalComponent>
           
        </div>
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