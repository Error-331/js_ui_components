'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

// local imports

// type definitions
type StyleType = {
    [string]: mixed
};

type PropsTypes = {
    /**
     * Class name for sidebar container outer div
     */

    className?: string,

    /**
     * Styles for sidebar container outer div
     */

    style?: StyleType,

    /**
     * Content for sidebar
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

        padding: `${theme.layoutStyles.topSpacing}px 
                  ${theme.layoutStyles.rightSpacing}px 
                  ${theme.layoutStyles.bottomSpacing}px 
                  ${theme.layoutStyles.leftSpacing}px
        `,

        backgroundColor: theme.layoutStyles.headerBGColor,

        fontFamily: theme.layoutStyles.bodyFontStack,
        fontSize: theme.layoutStyles.bodyFontSize,

        color: theme.layoutStyles.headerFontColor,
    },
});

/**
 * Regular sidebar component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function RegularSidebarFunction(props: PropsTypes) {
    const {className, style, children, classes} = props;

    const combinedClassName: string = classNames(
        classes.componentContainer,
        className
    );

    return <div className={combinedClassName} style={style}>
        {children}
    </div>;
}

RegularSidebarFunction.displayName = 'RegularSidebarComponent';

// exports
export const RegularSidebarComponent = injectSheet(styles)(RegularSidebarFunction);
export default RegularSidebarComponent;