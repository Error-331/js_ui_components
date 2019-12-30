'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';

import classNames from 'classnames';
import {__, always, cond, gt, identity, lt, T} from "ramda";

// local imports
import type {ThemeType} from './../../types/theme_types';
import {LINEAR_INDETERMINATE_PRELOADER_MAIN_BAR_KEYFRAMES_STYLE_NAME} from "./linear_indeterminate_preloader";

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
     * The value of the sub progress indicator (between 0 and 100)
     */

    valueBuffer?: number,

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

    /**
     * JSS theme object
     *
     * @ignore
     */

    theme: ThemeType,
};

// constants definition
export const LINEAR_BUFFER_PRELOADER_GRADIENT_BAR_KEYFRAMES_STYLE_NAME: string = 'linear_buffer_preloader_gradient_bar_keyframes_style_name';

// styles definition
const barStylesFunc = (theme: ThemeType) => ({
    position: 'absolute',

    height: '100%',
    width: '100%',
});

const progressBarStylesFunc = (theme: ThemeType) => ({
    transitionProperty: 'transform',
    transitionDuration: '0.4s',
    transitionTimingFunction: 'linear',
    transitionDelay: '0s',

    transformOrigin: 'left',
});

const styles = theme => ({
    componentContainer: {
        boxSizing: 'border-box',
        position: 'relative',
        overflow: 'hidden',

        height: '4px',

        backgroundColor: theme.baseStyles.transparentBGColor,

        '& > $mainBar': {
            extend: [barStylesFunc(theme), progressBarStylesFunc(theme)],

            backgroundColor: theme.baseStyles.mainPrimaryColor,
            zIndex: 3,
        },

        '& > $subBar': {
            extend: [barStylesFunc(theme), progressBarStylesFunc(theme)],

            backgroundColor: theme.baseStyles.mainSecondaryColor,
            zIndex: 2,
        },

        '& > $gradientBar': {
            extend: barStylesFunc(theme),

            animationName: LINEAR_BUFFER_PRELOADER_GRADIENT_BAR_KEYFRAMES_STYLE_NAME,
            animationDuration: '3s',
            animationTimingFunction: 'linear',
            animationDelay: '0s',
            animationIterationCount: 'infinite',
            animationDirection: 'normal',
            animationFillMode: 'none',
            animationPlayState: 'running',

            backgroundSize: '10px 10px',
            backgroundPosition: '0px -23px',
            backgroundImage: `radial-gradient(${theme.baseStyles.mainPrimaryColor} 0%, ${theme.baseStyles.mainSecondaryColor} 16%,  transparent 42%)`,

            zIndex: 1,
        },
    },

    mainBar: {},
    subBar: {},
    gradientBar: {},
});

// business logic implementation
const normalizeValue =  cond([
    [gt(__, 100), always(100)],
    [lt(__, 0), always(0)],
    [T, identity]
]);

/**
 * Linear buffer preloader.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function LinearBufferPreloaderFunction(props: PropsTypes) {
    let {value, valueBuffer} = props;

    value = normalizeValue(value);
    valueBuffer = normalizeValue(valueBuffer);

    const transformValue: number = value / 100;
    const transformValueBuffer: number = valueBuffer / 100;

    const mainBarStyle: CSSStylesType = {transform: `scaleX(${transformValue})`};
    const subBarStyle: CSSStylesType = {transform: `scaleX(${transformValueBuffer})`};

    const {classes, className, style, theme} = props;
    const {mainBar, subBar, gradientBar} = classes;

    const componentClassNames: string = classNames(classes.componentContainer, className);

    theme.styleSheetRegister.addGlobalStyles({
        [`@keyframes ${LINEAR_BUFFER_PRELOADER_GRADIENT_BAR_KEYFRAMES_STYLE_NAME}`]: {
            '0%': {
                opacity: 1,
                backgroundPosition: '0px -23px',
            },

            '50%': {
                opacity: 0,
                backgroundPosition: '0px -23px',
            },

            '100%': {
                opacity: 1,
                backgroundPosition: '-200px -23px',
            }
        }
    }, `@keyframes ${LINEAR_BUFFER_PRELOADER_GRADIENT_BAR_KEYFRAMES_STYLE_NAME}`);

    return <div className={componentClassNames} style={style}>
        <div className={mainBar} style={mainBarStyle}/>
        <div className={subBar} style={subBarStyle}/>
        <div className={gradientBar}/>
    </div>;
}

LinearBufferPreloaderFunction.displayName = 'LinearBufferPreloader';

// exports
export const LinearBufferPreloader = injectSheet(styles, {injectTheme: true})(LinearBufferPreloaderFunction);
export default LinearBufferPreloader;
