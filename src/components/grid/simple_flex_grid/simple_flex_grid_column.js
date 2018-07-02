'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';
import {is, toString} from 'ramda';

// local imports

// type definitions
type PropsTypes = {
    /**
     * React style object for in deep control of how column is represented
     */

    style?: {[string]: mixed},

    /**
     * Size of the column in percent
     */

    size: number | 'auto',

    /**
     * Flag that indicates whether the column should occupy the remaining space of parent container
     */

    full?: boolean,

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

// styles definition
const styles = theme => ({
    componentContainer: {
        boxSizing: 'border-box',

        flexBasis: 'auto',
        flexGrow: 0,
        flexShrink: 1,
    }
});

// component implementation
function SimpleFlexGridColumn(props: PropsTypes) {
    const {size, full, classes, style, children} = props;

    const flexBasis: string = is(String, size) ? size : `${toString(size)}%`;
    const flexGrow: number = full === true ? 1 : 0;

    return <div className={classes.componentContainer} style={{flexBasis, flexGrow, ...style}}>
        {children}
    </div>;
}

// exports
export default injectSheet(styles)(SimpleFlexGridColumn);