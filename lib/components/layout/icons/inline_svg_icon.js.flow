'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import {defaultTo} from 'ramda';

// local imports

// type definitions
type PropsTypes = {
    /**
     * SVG container width
     */

    width?: number | string,

    /**
     * SVG container height
     */

    height?: number | string,

    /**
     * SVG viewbox
     */

    viewBox?: string,

    /**
     * React style object for in deep control of how icon is represented
     */

    style?: {[string]: mixed},

    /**
     * Icon class name (example)
     */

    className?: string,

    /**
     * Content for SVG component
     */

    children?: React.Node,

    /**
     * JSS inner classes
     *
     * @ignore
     */

    classes: any,
};

// styles definition
const styles = theme => ({
    componentContainer: {
        '& path': {
            fill: 'none',

            stroke: 'green',
            strokeWidth: '2.5',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeMiterlimit: 10,
            strokeDasharray: 'none',
            strokeOpacity: 1,
        }
    }
});

/**
 * SVG inline icon component.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function InlineSVGIconFunction(props: PropsTypes) {
    const {className, classes, style, children} = props;

    const combinedClassName: string = classNames(
        classes.componentContainer,
        className
    );

    return <svg
        width={props.width}
        height={props.height}

        viewBox={props.viewBox}

        className={combinedClassName}
        style={style}
    >
        {children}
    </svg>;
}

InlineSVGIconFunction.displayName = 'InlineSVGIcon';

// exports
export const InlineSVGIcon = injectSheet(styles)(InlineSVGIconFunction);