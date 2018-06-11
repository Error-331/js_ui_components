'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';

// local imports

// type definitions
type PropsTypes = {
    /**
     * React style object for in deep control of how column is represented
     */

    style?: {[string]: mixed},

    /**
     * JSS inner classes
     *
     * @ignore
     */

    classes: any,

    /**
     * Child node (with optional sub-nodes)
     */

    children?: React.ChildrenArray<any>,
};

const styles = theme => ({
    componentContainer: {
        boxSizing: 'border-box',

        flexBasis: 'auto',
        flexGrow: 0,
        flexShrink: 1,
    }
});

// component implementation
function InlineTextBlock(props: PropsTypes) {

}

// exports
export default injectSheet(styles)(InlineTextBlock);