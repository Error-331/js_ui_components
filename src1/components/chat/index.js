'use strict';

// external imports
import React, {Component} from 'react';
import injectSheet from 'react-jss';

// local imports

// styles definition
const styles = theme => ({
    componentContainer: {
        boxSizing: 'border-box',

        display: 'flex',

        flexBasis: 'auto',
        flexShrink: '1',
        flexGrow: '0',

        flexDirection: 'column',
        flexWrap: 'nowrap',

        justifyContent: 'flex-start',
        alignItems: 'stretch',
        alignContent: 'flex-start',

        '& > $componentHeaderContainer': {
            boxSizing: 'border-box',

            flexBasis: 'auto',
            flexShrink: '1',
            flexGrow: '0',
        }
    },

    componentHeaderContainer: {}
});

// component implementation
class ChatComponent extends Component {
    render() {
        return (
            <div className={this.props.classes.componentContainer}>
            </div>
        );
    }
}

// exports
export default injectSheet(styles)(ChatComponent);