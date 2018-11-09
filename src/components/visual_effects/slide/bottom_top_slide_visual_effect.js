'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';

import classNames from 'classnames';
import {defaultTo} from 'ramda';

// local imports

// type definitions
type CSSStylesType = {
    [string]: mixed
};

type PropsTypes = {
    /**
     * React style object for in deep control of how component is represented
     */

    style?: CSSStylesType,

    /**
     * Name of the class which will be applied to component along with default one
     */

    className?: string,

    /**
     * Flag indicates whether sliding part should be shown (begin sliding effect)
     */

    show?: boolean,

    /**
     * Duration of sliding
     */

    duration?: string,

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

// styles definition
const styles = theme => ({
    componentContainer: {
        position: 'absolute',

        left: '0px',

        width: '100%',
        height: '100%',

        backgroundColor: theme.baseStyles.mainSecondaryColor,

        transitionDelay: '0s',
        transitionProperty: 'top',
        transitionTimingFunction: 'ease-in-out',

        zIndex: '2',
    }
});

/**
 * Slider (bottom to top) visual effect.
 * Parent component should have 'position' set to 'absolute' or 'relative'.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function BottomTopSlideVisualEffectFunction(props: PropsTypes) {
    let {show, duration, style, className, classes, children} = props;
    const {componentContainer} = classes;

    show = defaultTo(false)(show);
    duration = defaultTo('2s')(duration);

    const composedClassName: string = classNames(componentContainer, className);

    const topStyle: CSSStylesType = show ? {top: '0%'} : {top: '100%'};
    const transitionStyle: CSSStylesType = {transitionDuration: duration};
    const composedStyle: CSSStylesType = Object.assign({}, topStyle, transitionStyle, style);

    return <div className={composedClassName} style={composedStyle}>
        {children}
    </div>;
}

BottomTopSlideVisualEffectFunction.displayName = 'BottomTopSlideVisualEffect';

// exports
export const BottomTopSlideVisualEffect = injectSheet(styles)(BottomTopSlideVisualEffectFunction);