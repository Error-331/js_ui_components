'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';

import {isNil, defaultTo, reverse} from 'ramda';

// local imports

// type definitions
type PropsTypes = {
    direction?: 'ltr' | 'rtl',

    /**
     * Radio buttons
     */

    children?: React.ChildrenArray<void | null | string | number | React.Element<any>>,

    /**
     * JSS inner classes
     *
     * @ignore
     */

    classes: any
};

type StateTypes = {};

// styles definition
const styles = theme => ({
    componentContainer: {
        boxSizing: 'border-box',

        gridArea: 'buttons',
        display: 'grid',

        gridTemplateColumns: `repeat(auto-fill, minmax(max-content, ${theme.buttonStyles.regularButtonMinimumWidth}px))`,
        gridAutoRows: 'max-content',
        gridColumnGap: `${theme.layoutStyles.componentHorizontalSpacing}px`,

        '& > *': {
            direction: LEFT_TO_RIGHT_DIRECTION
        }
    }
});

// constants definition
export const RIGHT_TO_LEFT_DIRECTION: string = 'rtl';
export const LEFT_TO_RIGHT_DIRECTION: string = 'ltr';

/**
 * Dialog box actions container.
 * Helps to layout buttons (actions) on the bottom of the regular dialog box.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
export function DialogBoxActionsContainerFunction(props: PropsTypes): React.Node {
    let {children, direction, classes} = props;

    if (isNil(children)) {
        return null;
    }

    direction = defaultTo(RIGHT_TO_LEFT_DIRECTION)(direction);

    let childrenArray: Array<React.Node> =  React.Children.toArray(children);
    childrenArray = direction !== RIGHT_TO_LEFT_DIRECTION ? reverse(childrenArray) : childrenArray;

    return <div className={classes.componentContainer} style={{direction}}>
        {childrenArray}
    </div>;
}

DialogBoxActionsContainerFunction.displayName = 'DialogBoxActionsContainer';

// exports
export const DialogBoxActionsContainer = injectSheet(styles)(DialogBoxActionsContainerFunction);