'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import {defaultTo} from 'ramda';

// local imports

// type definitions
type StyleType = {
    [string]: mixed
};

type PropsTypes = {
    /**
     * Class name for panel container outer div
     */

    className?: string,

    /**
     * Styles for panel container outer div
     */

    style?: StyleType,

    /**
     * Content for panel
     */

    children?: React.ChildrenArray<any>,

    /**
     * JSS inner classes
     *
     * @ignore
     */

    classes: any
};


// styles definition
const styles = theme => ({
    componentContainer: {
        boxSizing: 'border-box',

        borderRadius: theme.layoutStyles.headerBorderRadius,
        backgroundColor: theme.layoutStyles.headerBGColor,

        fontFamily: theme.layoutStyles.headerFontStack,
        fontSize: `${theme.layoutStyles.headerFontSize}px`,

        color: theme.layoutStyles.headerFontColor,
    },
});

/**
 * Regular panel component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function RegularPanelFunction(props: PropsTypes) {
    const {className, style, children, classes} = props;

    const combinedClassName: string = classNames(
        classes.componentContainer,
        className
    );

    return <div className={combinedClassName} style={style}>
        {children}
    </div>;
}

RegularPanelFunction.displayName = 'RegularPanelComponent';

// exports
export const RegularPanelComponent = injectSheet(styles)(RegularPanelFunction);