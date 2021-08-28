'use strict';

// external imports
import React, {Component} from 'react';
import Wrapper from 'react-styleguidist/lib/client/rsg-components/Wrapper/Wrapper';

// local imports
import MainContainer from './main_container';
//import ComponentFormContainer from './component_form_container';

// Component implementation
class ComponentWrapperContainer extends Component {
    render() {
        return (
            <MainContainer>
                <Wrapper {...this.props}>
                    {this.props.children}
                    {/*<ComponentFormContainer>
                        {this.props.children}
                    </ComponentFormContainer>*/}
                </Wrapper>
            </MainContainer>
        );
    }
}

// exports
export default ComponentWrapperContainer;
