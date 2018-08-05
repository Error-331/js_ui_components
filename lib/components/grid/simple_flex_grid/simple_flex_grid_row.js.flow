'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';

import classNames from 'classnames';

// local imports
import type {SimpleFlexGridColumn} from './simple_flex_grid_column';

// type definitions
type PropsTypes = {
    /**
     * Flag that indicates whether the row should occupy the remaining space of parent container
     */

    full?: boolean,

    /**
     * React style object for in deep control of how row is represented
     */

    style?: {[string]: mixed},

    /**
     * Name of the class which will be applied to component along with default one
     */

    className?: string,

    /**
     * JSS inner classes
     *
     * @ignore
     */

    classes: any,

    /**
     * Child column nodes (with optional sub-nodes)
     */

    children?: React.ChildrenArray<React.Element<SimpleFlexGridColumn>>,
};

// styles definition
const styles = theme => ({
    componentContainer: {
        boxSizing: 'border-box',
        display: 'flex',

        flexBasis: 'auto',
        flexGrow: 0,
        flexShrink: 1,

        flexDirection: 'row',
        flexWrap: 'nowrap',

        justifyContent: 'flex-start',
        alignItems: 'stretch',
        alignContent: 'flex-start',
    }
});

// component implementation
function SimpleFlexGridRowFunction(props: PropsTypes) {
    const {full, style, className, classes, children} = props;
    const componentClassNames: string = classNames(classes.componentContainer, className);

    const flexGrow: number = full === true ? 1 : 0;

    return <div className={componentClassNames} style={{flexGrow, ...style}}>
        {children}
    </div>;
}

SimpleFlexGridRowFunction.displayName = 'SimpleFlexGridRow';

// exports
export const SimpleFlexGridRow = injectSheet(styles)(SimpleFlexGridRowFunction);