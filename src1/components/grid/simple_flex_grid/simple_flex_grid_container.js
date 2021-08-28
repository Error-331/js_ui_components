'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';

import classNames from 'classnames';

// local imports
import type {SimpleFlexGridRow} from './simple_flex_grid_row';

// type definitions
type PropsTypes = {
    /**
     * Flag that indicates whether the container should stretch vertically
     */

    stretch?: boolean,

    /**
     * React style object for in deep control of how container is represented
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
     * Child node (with optional sub-nodes)
     */

    children?: React.ChildrenArray<React.Element<SimpleFlexGridRow>>,
};

// styles definition
const styles = theme => ({
    componentContainer: {
        boxSizing: 'border-box',
        display: 'flex',

        flexBasis: 'auto',
        flexGrow: 0,
        flexShrink: 1,

        flexDirection: 'column',
        flexWrap: 'wrap',

        justifyContent: 'flex-start',
        alignItems: 'stretch',
        alignContent: 'stretch',

        '&.verticalStretch': {
            height: '100%'
        }
    }
});

// component implementation
function SimpleFlexGridContainerFunction(props: PropsTypes) {
    const {stretch, style, className, classes, children} = props;
    const componentClassNames: string = classNames(classes.componentContainer, {verticalStretch: stretch}, className);

    return <div className={componentClassNames} style={{...style}}>
        {children}
    </div>;
}

SimpleFlexGridContainerFunction.displayName = 'SimpleFlexGridContainer';

// exports
export const SimpleFlexGridContainer = injectSheet(styles)(SimpleFlexGridContainerFunction);
export default SimpleFlexGridContainer;
