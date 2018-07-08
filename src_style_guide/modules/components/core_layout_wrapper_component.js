'use strict';

// external imports
import React, {Component} from 'react';
import injectSheet from 'react-jss';

// local imports

// styles definition
const styles = theme => ({
    '@global': {
        '@font-face': theme['@font-face']
    },
});

// component definition
class CoreLayoutWrapperComponent extends Component {
    render() {
        return this.props.children;
    }
}

// exports
export default injectSheet(styles)(CoreLayoutWrapperComponent);