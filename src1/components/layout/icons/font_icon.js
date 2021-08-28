'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import {defaultTo} from 'ramda';

// local imports
import type {CombinedEventType} from '../../../../src/types/dom_types';

import {MEDIUM_SIZE, CUSTOM_SIZE} from '../../../../src/theming/constants/general_constants';

// type definitions
export type FontIconSizeType = 'tiny' | 'small' | 'medium' | 'large' | 'extraLarge' | 'custom';
export type ClickCallbackType = (event: CombinedEventType) => void;

type PropsTypes = {
    /**
     * Icon size
     */

    size?: FontIconSizeType,

    /**
     * Flag that indicates whether to show icon using accent color
     */

    accent?: boolean,

    /**
     * Callback function which will be called once user clicks on icon
     */

    onClick?: ClickCallbackType,

    /**
     * Callback function which will be called once user press mouse key while pointing cursor over icon
     */

    onMouseDown?: ClickCallbackType,

    /**
     * React style object for in deep control of how icon is represented
     */

    style?: {[string]: mixed},

    /**
     * Icon class name (example 'fas fa-coffee')
     */

    iconClassName: string,

    /**
     * Name of the class which will be applied to icon along with default one and class that represent icon
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
        display: 'block',

        color: theme.layoutStyles.baseIconColor,

        '&.tiny': {
            fontSize: theme.layoutStyles.tinyIconSize,
        },

        '&.small': {
            fontSize: theme.layoutStyles.smallIconSize,
        },

        '&.medium': {
            fontSize: theme.layoutStyles.mediumIconSize,
        },

        '&.large': {
            fontSize: theme.layoutStyles.largeIconSize,
        },

        '&.extraLarge': {
            fontSize: theme.layoutStyles.extraLargeIconSize,
        },

        '&.accent': {
            color: theme.layoutStyles.accentIconColor,
        }
    }
});

/**
 * Font icon component.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function FontIconFunction(props: PropsTypes) {
    let {size, accent, onClick, onMouseDown, style, iconClassName, className, classes} = props;
    size = defaultTo(MEDIUM_SIZE)(size);
    accent = defaultTo(false)(accent);

    size = size === CUSTOM_SIZE ? '' : size;

    const combinedClassName: string = classNames(
        classes.componentContainer,
        iconClassName,
        size,
        {'accent': accent},
        className
    );

    return <i
        onClick={onClick}
        onMouseDown={onMouseDown}
        className={combinedClassName}
        style={style}
    />;
}

FontIconFunction.displayName = 'FontIcon';

// exports
export const FontIcon = injectSheet(styles)(FontIconFunction);
export default FontIcon;
