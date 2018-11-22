'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';
import {defaultTo} from 'ramda';

import classNames from 'classnames';

// local imports
import type {ThemeType} from './../../types/theme_types';

import {FontIcon} from './../layout/icons/font_icon';


// type definitions
export type FontIconSizeType = 'tiny' | 'small' | 'medium' | 'large' | 'extraLarge';

type PropsTypes = {
    /**
     * Icon size
     */

    size?: FontIconSizeType,

    /**
     * Icon class name (example 'fas fa-coffee'), default is 'fas fa-sync'
     */

    iconClassName?: string,

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
export const ROTATING_FONT_ICON_PRELOADER_MAIN_KEYFRAMES_STYLE_NAME: string = 'rotating_font_icon_preloader_main_keyframes';

// styles definition
const styles = theme => ({
    componentContainer: {
        animationName: ROTATING_FONT_ICON_PRELOADER_MAIN_KEYFRAMES_STYLE_NAME,
        animationDuration: '1s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    }
});

/**
 * Rotating font icon preloader.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function RotatingFontIconPreloaderFunction(props: PropsTypes) {
    const {size, style, className, classes, theme} = props;

    theme.styleSheetRegister.addGlobalStyles({
        [`@keyframes ${ROTATING_FONT_ICON_PRELOADER_MAIN_KEYFRAMES_STYLE_NAME}`]: {
            'from': {
                transform: 'rotate(0deg)'
            },

            'to': {
                transform: 'rotate(360deg)'
            }
        }
    }, `@keyframes ${ROTATING_FONT_ICON_PRELOADER_MAIN_KEYFRAMES_STYLE_NAME}`);

    let {iconClassName} = props;
    iconClassName = defaultTo('fas fa-sync')(iconClassName);

    const componentClassNames: string = classNames(classes.componentContainer, className);

    return <FontIcon
        size={size}
        iconClassName={iconClassName}
        className={componentClassNames}
        style={style}
    />;
}

RotatingFontIconPreloaderFunction.displayName = 'RotatingFontIconPreloader';

// exports
export const RotatingFontIconPreloader = injectSheet(styles)(RotatingFontIconPreloaderFunction);