'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';

import classNames from 'classnames';

// local imports
import type {ThemeType} from '../../../src/types/theme_types';

// type definitions
type PropsTypes = {
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
export const LINEAR_INDETERMINATE_PRELOADER_MAIN_BAR_KEYFRAMES_STYLE_NAME: string = 'linear_indeterminate_preloader_main_bar_keyframes';
export const LINEAR_INDETERMINATE_PRELOADER_SUB_BAR_KEYFRAMES_STYLE_NAME: string = 'linear_indeterminate_preloader_sub_bar_keyframes';

// styles definition
const barStylesFunc = (theme: ThemeType) => ({
    position: 'absolute',

    width: 'auto',
    height: '100%',

    left: 0,

    bottom: 0,
    top: 0,

    willChange: 'left, right',
    transformOrigin: 'left',

    transitionProperty: 'transform',
    transitionDuration: '0.2s',
    transitionTimingFunction: 'linear',
    transitionDelay: '0s',

    animationDuration: '2.1s',
    animationIterationCount: 'infinite',

    backgroundColor: theme.baseStyles.mainPrimaryColor,
});

const styles = theme => ({
    componentContainer: {
        boxSizing: 'border-box',
        position: 'relative',
        overflow: 'hidden',

        height: '4px',

        backgroundColor: theme.baseStyles.mainQuaternaryColor,

        '& > $mainBar': {
            extend: barStylesFunc(theme),

            animationName: LINEAR_INDETERMINATE_PRELOADER_MAIN_BAR_KEYFRAMES_STYLE_NAME,
            animationTimingFunction: 'cubic-bezier(0.65, 0.815, 0.735, 0.395)',
        },

        '& > $subBar': {
            extend: barStylesFunc(theme),

            animationName: LINEAR_INDETERMINATE_PRELOADER_SUB_BAR_KEYFRAMES_STYLE_NAME,
            animationTimingFunction: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
            animationDelay: '1.15s',
        },
    },

    mainBar: {},
    subBar: {}
});

/**
 * Linear indeterminate preloader.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function LinearIndeterminatePreloaderFunction(props: PropsTypes) {
    const {classes, className, style, theme} = props;
    const {mainBar, subBar} = classes;

    theme.styleSheetRegister.addGlobalStyles({
        [`@keyframes ${LINEAR_INDETERMINATE_PRELOADER_MAIN_BAR_KEYFRAMES_STYLE_NAME}`]: {
            '0%': {
                left: '-35%',
                right: '100%',
            },

            '60%': {
                left: '100%',
                right: '-90%',
            },

            '100%': {
                left: '100%',
                right: '-90%',
            }
        }
    }, `@keyframes ${LINEAR_INDETERMINATE_PRELOADER_MAIN_BAR_KEYFRAMES_STYLE_NAME}`);

    theme.styleSheetRegister.addGlobalStyles({
        [`@keyframes ${LINEAR_INDETERMINATE_PRELOADER_SUB_BAR_KEYFRAMES_STYLE_NAME}`]: {
            '0%': {
                left: '-200%',
                right: '100%',
            },

            '60%': {
                left: '107%',
                right: '-8%',
            },

            '100%': {
                left: '107%',
                right: '-8%'
            }
        }
    }, `@keyframes ${LINEAR_INDETERMINATE_PRELOADER_SUB_BAR_KEYFRAMES_STYLE_NAME}`);

    const componentClassNames: string = classNames(classes.componentContainer, className);

    return <div className={componentClassNames} style={style}>
        <div className={mainBar}/>
        <div className={subBar}/>
    </div>;
}

LinearIndeterminatePreloaderFunction.displayName = 'LinearIndeterminatePreloader';

// exports
export const LinearIndeterminatePreloader = injectSheet(styles, {injectTheme: true})(LinearIndeterminatePreloaderFunction);
export default LinearIndeterminatePreloader;
