'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';
import {defaultTo, mergeDeepRight} from 'ramda';
import classNames from 'classnames';
import type {ThemeType} from "../../../types/theme_types";

// local imports

// type definitions
type PropsTypes = {
    fontSize?: number,

    /**
     * React style object for in deep control of how text block is represented
     */

    style?: {[string]: mixed},

    /**
     * Name of the class which will be applied to text block along with default one
     */

    className?: string,

    /**
     * JSS theme object
     *
     * @ignore
     */

    theme: ThemeType,

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

// styles definition
const styles = theme => ({
    componentContainer: {
        fontFamily: theme.layoutStyles.fontStack,

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
function InlineTextBlockFunction(props: PropsTypes) {
    const {classes, theme, children, className} = props;
    const componentClassNames: string = classNames(classes.componentContainer, className);

    let {style, fontSize} = props;
    style = defaultTo({})(fontSize);
    fontSize = defaultTo(theme.layoutStyles.bodyFontSize)(fontSize);

    style = mergeDeepRight({}, style, {fontSize});

    return <span className={componentClassNames} style={{...style}}>{children}</span>;
}

InlineTextBlockFunction.displayName = 'InlineTextBlock';

// exports
export const InlineTextBlock = injectSheet(styles)(InlineTextBlockFunction);
export default InlineTextBlock;