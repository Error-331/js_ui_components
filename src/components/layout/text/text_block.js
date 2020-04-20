'use strict';

// @flow

// external imports
import type {Node, Element} from 'react';

import React from 'react';
import {createUseStyles, useTheme} from 'react-jss';
import classNames from 'classnames';

// local imports
import type {ThemeType} from './../../../types/theme_types';
import type {RenderFunctionNoArgsType} from './../../../types/common_types';
import {defaultTo} from "ramda";

// type definitions
type CSSStylesType = {
    [string]: mixed
};

type PropsTypes = {
    /**
     * React style object for in deep control of how text block is represented
     */

    style?: CSSStylesType,

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

const useStyles = createUseStyles(theme => ({
    componentContainer: {
        fontFamily: theme.layoutStyles.fontStack,
        fontSize: theme.layoutStyles.bodyFontSize,
        lineHeight: theme.layoutStyles.bodyFontLineHeight,

        color: theme.layoutStyles.bodyFontColor,
    }
}));

/**
 * Text block component styled according to material-UI guidelines.
 * Used to represent simple text blocks, captions, labels and etc.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function TextBlock(props: PropsTypes) {
    // region private variables declaration
    const className: string = defaultTo('')(props.className);
    const style: CSSStylesType = defaultTo({})(props.style);

    // endregion

    // region style hooks declaration
    const theme: ThemeType = useTheme();
    const classes: {[string]: string} = useStyles({...props, theme});

    // endregion

    // region context hooks declaration
    // endregion

    // region state hooks declaration
    // endregion

    // region effect hooks declaration
    // endregion

    // region state variables declaration
    // endregion

    // region ref hooks declaration
    // endregion

    // region callback hooks declaration
    // endregion

    // region custom hooks declaration
    // endregion

    // region business logic
    // endregion

    // region event handler helpers
    // endregion

    // region render helpers
    const renderComponentContainer: RenderFunctionNoArgsType = (): Node => {
        const {componentContainer} = classes;
        const componentClassNames: string = classNames(componentContainer, className);

        return <div className={componentClassNames} style={{...style}}>{props.children}</div>;
    };

    // endregion

    // init
    return renderComponentContainer();
}

// exports
export default TextBlock;