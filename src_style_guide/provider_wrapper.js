'use strict';

// external imports
import React, {Component} from 'react';
import {Provider as ReactReduxProvider}  from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider} from 'react-jss';

// local imports
import store from './modules/store';

import baseTheme from './../src/themes/base_theme';
import CoreLayoutWrapperComponent from './modules/components/core_layout_wrapper_component';

// wrapper implementation
class ComponentsWrapper extends Component {
    render() {
        return (
            <ReactReduxProvider store={store}>
                <ThemeProvider theme={baseTheme}>
                    <BrowserRouter>
                        <CoreLayoutWrapperComponent>
                            {this.props.children}
                        </CoreLayoutWrapperComponent>
                    </BrowserRouter>
                </ThemeProvider>
            </ReactReduxProvider>
        );
    }
}

// exports
export default ComponentsWrapper;