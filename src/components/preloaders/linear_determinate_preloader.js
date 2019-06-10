'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';

import {__, T, cond, gt, lt, identity, always} from 'ramda';
import classNames from 'classnames';

// local imports

// type definitions
export type CSSStylesType = {
    [string]: mixed
};

type PropsTypes = {
    /**
     * The value of the progress indicator (between 0 and 100)
     */

    value: number,

    /**
     * React style object for in deep control of preloader is represented
     */

    style?: {[string]: mixed},

    /**
     * Name of the class which will be applied to component along with default one
     */

    className?: string,

    /**
     * JSS inner classes
     *
     * @ignore
     */

    classes: any,
};

// styles definition
const styles = theme => ({
    componentContainer: {
        boxSizing: 'border-box',
        position: 'relative',
        overflow: 'hidden',

        height: '4px',

        backgroundColor: theme.baseStyles.mainQuaternaryColor,

        '& > $mainBar': {
            position: 'absolute',

            height: '100%',
            width: '100%',

            transitionProperty: 'transform',
            transitionDuration: '0.4s',
            transitionTimingFunction: 'linear',
            transitionDelay: '0s',

            transformOrigin: 'left',
            backgroundColor: theme.baseStyles.mainPrimaryColor,
        },
    },

    mainBar: {},
});

/**
 * Linear determinate preloader.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function LinearDeterminatePreloaderFunction(props: PropsTypes) {
    let {value} = props;

    value = cond([
        [gt(__, 100), always(100)],
        [lt(__, 0), always(0)],
        [T, identity]
    ])(value);

    const transformValue: number = value / 100;
    const mainBarStyle: CSSStylesType = {transform: `scaleX(${transformValue})`};

    const {classes, className, style} = props;
    const {mainBar} = classes;

    const componentClassNames: string = classNames(classes.componentContainer, className);

    return <div className={componentClassNames} style={style}>
        <div className={mainBar} style={mainBarStyle}/>
    </div>;
}

LinearDeterminatePreloaderFunction.displayName = 'LinearDeterminatePreloader';

// exports
export const LinearDeterminatePreloader = injectSheet(styles)(LinearDeterminatePreloaderFunction);
export default LinearDeterminatePreloader;