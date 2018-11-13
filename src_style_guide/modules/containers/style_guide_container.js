'use strict';

// external imports
import React, {Component} from 'react';
import {connect}  from 'react-redux';
import {ThemeProvider} from 'react-jss';

// local imports
import {
    baseTheme,
    deepOrangeTealTheme,
    purpleIndigoTheme,
    blueGreyRed,
    greenAmber,
    brownLime,
    cyanGreenTheme
} from './../../../src';

import StyleGuideThemeValueSelector from './../selectors/style_guide_theme_value_selector';

// wrapper implementation
class StyleGuideContainer extends Component {
    _getSelectedTheme() {
        const {selectedTheme = 'base'} = this.props;
        return selectedTheme;
    }

    _getTheme() {
        switch(this._getSelectedTheme()) {
            case 'base':
                return baseTheme;
            case 'deepOrangeTeal':
                return deepOrangeTealTheme;
            case 'purpleIndigo':
                return purpleIndigoTheme;
            case 'blueGreyRed':
                return blueGreyRed;
            case 'greenAmber':
                return greenAmber;
            case 'brownLime':
                return brownLime;
            case 'cyanGreen':
                return cyanGreenTheme;
        }
    }

    render() {
        return <ThemeProvider theme={this._getTheme()}>
            {this.props.children}
        </ThemeProvider>;
    }
}

const mapStateToProps = (state) => ({
     selectedTheme: StyleGuideThemeValueSelector(state)
});

const mapDispatchToProps = () => ({
});

// exports
export default connect(mapStateToProps, mapDispatchToProps)(StyleGuideContainer);