'use strict';

// external imports
import React, {Component} from 'react';
import {Provider as ReactReduxProvider}  from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider} from 'react-jss';

import StyleGuideRenderer from 'react-styleguidist/lib/rsg-components/StyleGuide/StyleGuideRenderer';

// local imports
import store from './modules/store';

import {baseTheme} from './../src/theming/themes/base_theme';
import {deepOrangeTealTheme} from './../src/theming/themes/deep_orange_teal_theme';
import {purpleIndigoTheme} from './../src/theming/themes/purple_indigo_theme';

import CoreLayoutWrapperComponent from './modules/components/core_layout_wrapper_component';

import FormDropDownInputComponent from './../src/components/redux_form/redux_form_drop_down_input_component';

// wrapper implementation
class ComponentsWrapper extends Component {
    render() {
        return (

            <ReactReduxProvider store={store}>
                <ThemeProvider theme={deepOrangeTealTheme}>
                    <BrowserRouter>
                        <StyleGuideRenderer {...this.props}>
                            <CoreLayoutWrapperComponent>
                                <FormDropDownInputComponent name='test1'/>
                                {this.props.children}
                            </CoreLayoutWrapperComponent>
                        </StyleGuideRenderer>
                    </BrowserRouter>
                </ThemeProvider>
            </ReactReduxProvider>

        );
    }
}

// exports
export default ComponentsWrapper;