'use strict';

// external imports
import React, {Component} from 'react';
import injectSheet from 'react-jss';

// local imports
import { globalStylesFunc } from '../../../src/theming/common_styles/global_styles';

// styles definition
const styles = theme => ({
    '@global': globalStylesFunc(theme),
});

// component definition
class CoreLayoutWrapperComponent extends Component {
    render() {
        return this.props.children;
    }
}

// exports
export default injectSheet(styles)(CoreLayoutWrapperComponent);
