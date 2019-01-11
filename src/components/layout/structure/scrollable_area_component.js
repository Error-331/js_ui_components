'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';

import classNames from 'classnames';
import {isNil, defaultTo} from 'ramda';

// local imports

// type definitions
type PropsTypes = {
    /**
     * React style object for in deep control of how scrollable area is represented
     */

    style?: {[string]: mixed},

    /**
     * Name of the class which will be applied to scrollable area along with default one
     */

    className?: string,

    /**
     * Child node (with optional sub-nodes)
     */

    children?: React.Node,

    /**
     * JSS inner classes
     *
     * @ignore
     */

    classes: any
}

type StateTypes = {};

// styles definition
const styles = theme => ({
    componentContainer: {
        boxSizing: 'border-box',
        overflow: 'scroll',

        borderRadius: `${theme.layoutStyles.commonBorderRadius}px`,
        border: `1px solid ${theme.baseStyles.subQuaternaryColor}`,

        padding: `${theme.layoutStyles.topSpacing}px 
                  ${theme.layoutStyles.rightSpacing}px 
                  ${theme.layoutStyles.bottomSpacing}px 
                  ${theme.layoutStyles.bottomSpacing}px
        `,

        fontFamily: theme.layoutStyles.fontStack,
        fontSize: theme.layoutStyles.bodyFontSize,

        '&::-webkit-scrollbar-corner': {
            borderRadius: `${theme.layoutStyles.commonBorderRadius}px`,
        },
    },
});

/**
 * Scrollable area.
 * Simple scrollable area that can be filled with any elements.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function ScrollableAreaFunction(props: PropsTypes) {
    const {style, className, classes, children} = props;
    const composedClassName: string = classNames(classes.componentContainer, className);

    return <div style={style} className={composedClassName}>
        {children}
    </div>;
}

ScrollableAreaFunction.displayName = 'ScrollableAreaComponent';

// exports
export const ScrollableAreaComponent = injectSheet(styles)(ScrollableAreaFunction);