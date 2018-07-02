'use strict';

// external imports
import React, {Component} from 'react';
import {Provider as ReactReduxProvider}  from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider} from 'react-jss';

// local imports
import store from './modules/store';

//import baseTheme from './../src/theming/themes/base_theme';
//import deepOrangeTealTheme from './../src/theming/themes/deep_orange_teal_theme';
import purpleIndigoTheme from './../src/theming/themes/purple_indigo_theme';

import CoreLayoutWrapperComponent from './modules/components/core_layout_wrapper_component';

// wrapper implementation
class ComponentsWrapper extends Component {
    render() {
        return (
            <ReactReduxProvider store={store}>
                <ThemeProvider theme={purpleIndigoTheme}>
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