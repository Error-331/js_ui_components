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

        flexDirection: 'column',
        flexWrap: 'nowrap',

        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'flex-start',

        '&.left': {
            alignItems: 'flex-start',
        },

        '&.left > div': {
            marginTop: `${theme.layoutStyles.layoutCommonVerticalSpacing}px`,
        },

        '&.left > button': {
            marginTop: `${theme.layoutStyles.layoutCommonVerticalSpacing}px`,
        },

        '&.left > div:irst-child': {
            marginTop: '0px',
        },

        '&.left > div:first-child': {
            marginTop: '0px',
        },

        '&.right': {
            alignItems: 'flex-end',
        },

        '&.right > div': {
            marginTop: `${theme.layoutStyles.layoutCommonVerticalSpacing}px`,
        },

        '&.right > button': {
            marginTop: `${theme.layoutStyles.layoutCommonVerticalSpacing}px`,
        },

        '&.right > div:first-child': {
            marginTop: '0px',
        },

        '&.right > button:first-child': {
            marginTop: '0px',
        },

        '&.center': {
            alignItems: 'center',
        },

        '&.center > div': {
            marginTop: `${theme.layoutStyles.layoutCommonVerticalSpacing}px`,
        },

        '&.center > button': {
            marginTop: `${theme.layoutStyles.layoutCommonVerticalSpacing}px`,
        },

        '&.center > div:irst-child': {
            marginTop: '0px',
        },

        '&.center > button:irst-child': {
            marginTop: '0px',
        },
    }
});

/**
 * Elements column component.
 * Used to align columns of elements.
 * Best used with [RegularButtonComponent](#regularbuttoncomponent)
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function ElementsColumn(props: PropsTypes): React.Node {
    let {alignment, classes, style} = props;

    alignment = defaultTo('left')(alignment);

    const containerClasses: string = classNames(
        classes.componentContainer,
        alignment
    );

    return <div className={containerClasses} style={{...style}}>
        {props.children}
    </div>;
}

// exports
export default injectSheet(styles)(ElementsColumn);