'use strict';

// external imports
import React, {Component} from 'react';
import {Provider as ReactReduxProvider}  from 'react-redux';
import {Form} from 'redux-form';
import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider} from 'react-jss';

import Wrapper from 'react-styleguidist/lib/rsg-components/Wrapper/Wrapper';

// local imports
import store from './../store';

import {baseTheme} from './../../../src/theming/themes/base_theme';
import {deepOrangeTealTheme} from './../../../src/theming/themes/deep_orange_teal_theme';
import {purpleIndigoTheme} from './../../../src/theming/themes/purple_indigo_theme';

import CoreLayoutWrapperComponent from './../components/core_layout_wrapper_component';

// Component implementation
class ComponentWrapperContainer extends Component {
    render() {
        return (
            <ReactReduxProvider store={store}>
                <ThemeProvider theme={deepOrangeTealTheme}>
                    <BrowserRouter>
                        <Wrapper {...this.props}>
                            <CoreLayoutWrapperComponent>
                                {this.props.children}
                            </CoreLayoutWrapperComponent>
                        </Wrapper>
                    </BrowserRouter>
                </ThemeProvider>
            </ReactReduxProvider>
        );
    }
}

// exports
export default ComponentWrapperContainer;