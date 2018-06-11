'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';

// local imports
import type SimpleFlexGridColumnType from './simple_flex_grid_column';

// type definitions
type PropsTypes = {
    /**
     * JSS inner classes
     *
     * @ignore
     */

    classes: any,

    /**
     * Child column nodes (with optional sub-nodes)
     */

    children?: React.ChildrenArray<React.Element<SimpleFlexGridColumnType>>,
};

// styles definition
const styles = theme => ({
    componentContainer: {
        display: 'flex',

        flexBasis: '100%',
        flexDirection: 'row',
        flexWrap: 'nowrap',

        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
    }
});

// component implementation
function SimpleFlexGridRow(props: PropsTypes) {
    return <div className={props.classes.componentContainer}>
        {props.children}
    </div>
}

// exports
export default injectSheet(styles)(SimpleFlexGridRow);