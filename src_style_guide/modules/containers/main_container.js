'use strict';

// external imports
import React, {Component} from 'react';
import {Provider as ReactReduxProvider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

// local imports
import store from './../store';
import StyleGuideContainer from './style_guide_container';
import {MainThemeProvider} from './../../../src/theming';

// Component implementation
class MainContainer extends Component {
    render() {
        return <ReactReduxProvider store={store}>
            <MainThemeProvider>
                <StyleGuideContainer>
                    <BrowserRouter>
                        {this.props.children}
                    </BrowserRouter>
                </StyleGuideContainer>
            </MainThemeProvider>
        </ReactReduxProvider>;
    }
}

// exports
export default MainContainer;