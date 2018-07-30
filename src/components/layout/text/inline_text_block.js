'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

// local imports

// type definitions
type PropsTypes = {
    /**
     * React style object for in deep control of how text block is represented
     */

    style?: {[string]: mixed},

    /**
     * Name of the class which will be applied to text block along with default one
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

    children?: React.ChildrenArray<any>,
};

const styles = theme => ({
    componentContainer: {
        fontFamily: theme.layoutStyles.fontStack,
        fontSize: theme.layoutStyles.bodyFontSize,

        color: theme.layoutStyles.bodyFontColor,
    }
});

/**
 * Inline text block component styled according to material-UI guidelines.
 * Used to represent simple text blocks, captions, labels and etc.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function InlineTextBlock(props: PropsTypes) {
    const {classes, children, className, style} = props;
    const componentClassNames: string = classNames(classes.componentContainer, className);

    return <span className={componentClassNames} style={{...style}}>
        {children}
    </span>;
}

// exports
export default injectSheet(styles)(InlineTextBlock);