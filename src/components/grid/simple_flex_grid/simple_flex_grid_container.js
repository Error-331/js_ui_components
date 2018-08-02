'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';

// local imports
import type {SimpleFlexGridRow} from './simple_flex_grid_row';

// type definitions
type PropsTypes = {
    /**
     * JSS inner classes
     *
     * @ignore
     */

    classes: any,

    /**
     * Child node (with optional sub-nodes)
     */

    children?: React.ChildrenArray<React.Element<SimpleFlexGridRow>>,
};

// styles definition
const styles = theme => ({
    componentContainer: {
        display: 'flex',

        flexBasis: 'auto',
        flexDirection: 'row',
        flexWrap: 'wrap',

        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
    }
});

// component implementation
function SimpleFlexGridContainerFunction(props: PropsTypes) {
    return <div className={props.classes.componentContainer}>
        {props.children}
    </div>;
}

SimpleFlexGridContainerFunction.displayName = 'SimpleFlexGridContainer';

// exports
export const SimpleFlexGridContainer = injectSheet(styles)(SimpleFlexGridContainerFunction);
