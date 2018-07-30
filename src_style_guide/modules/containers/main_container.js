'use strict';

// external imports
import React, {Component} from 'react';
import {Provider as ReactReduxProvider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

// local imports
import store from './../store';
import StyleGuideContainer from './style_guide_container';

// Component implementation
class MainContainer extends Component {
    render() {
        return <ReactReduxProvider store={store}>
            <StyleGuideContainer>
                <BrowserRouter>
                    {this.props.children}
                </BrowserRouter>
            </StyleGuideContainer>
        </ReactReduxProvider>;
    }
}

// exports
export default MainContainer;