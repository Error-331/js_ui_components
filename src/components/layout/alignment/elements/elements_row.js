'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import {defaultTo} from 'ramda';

// local imports

// type definitions
type AlignmentType = 'left' | 'right' | 'center';

type PropsTypes = {
    /**
     * Specifies how elements will be align
     */

    alignment?: AlignmentType,

    /**
     * Specifies whether elements should be wrapped into multiple lines if there is not enough space (defaults to false)
     */

    wrap?: boolean,

    /**
     * React style object for in deep control of how elements row is represented
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
}

type StateTypes = {};

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

        '&.left': {
            justifyContent: 'flex-start',
        },

        '&.left > div': {
            marginRight: `${theme.layoutStyles.horizontalSpacing}px`,
        },

        '&.left > button': {
            marginRight: `${theme.layoutStyles.horizontalSpacing}px`,
        },

        '&.left > div:last-child': {
            marginRight: '0px',
        },

        '&.left > div:last-child': {
            marginRight: '0px',
        },

        '&.right': {
            justifyContent: 'flex-end',
        },

        '&.right > div': {
            marginLeft: `${theme.layoutStyles.horizontalSpacing}px`,
        },

        '&.right > button': {
            marginLeft: `${theme.layoutStyles.horizontalSpacing}px`,
        },

        '&.right > div:first-child': {
            marginLeft: '0px',
        },

        '&.right > button:first-child': {
            marginLeft: '0px',
        },

        '&.center': {
            justifyContent: 'center',
        },

        '&.center > div': {
            marginRight: `${theme.layoutStyles.horizontalSpacing}px`,
        },

        '&.center > button': {
            marginRight: `${theme.layoutStyles.horizontalSpacing}px`,
        },

        '&.center > div:last-child': {
            marginRight: '0px',
        },

        '&.center > button:last-child': {
            marginRight: '0px',
        },
    }
});

/**
 * Elements row component.
 * Used to align rows of elements (for example: align buttons at the bottom of the dialog box or at tools panel).
 * Best used with [RegularButtonComponent](#regularbuttoncomponent)
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
export function ElementsRowFunction(props: PropsTypes): React.Node {
    let {alignment, wrap, classes, style} = props;

    alignment = defaultTo('left')(alignment);
    wrap = defaultTo(false)(wrap);

    const containerClasses: string = classNames(
        classes.componentContainer,
        alignment
    );

    const flexWrap: string = wrap ? 'wrap': 'nowrap';

    return <div className={containerClasses} style={{flexWrap, ...style}}>
        {props.children}
    </div>
}

ElementsRowFunction.displayName = 'ElementsRow';

// exports
export const ElementsRow = injectSheet(styles)(ElementsRowFunction);