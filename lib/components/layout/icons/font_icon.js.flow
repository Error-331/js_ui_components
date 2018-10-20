'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import {defaultTo} from 'ramda';

// local imports

// type definitions
export type FontIconSizeType = 'tiny' | 'small' | 'medium' | 'large' | 'extraLarge';

type PropsTypes = {
    /**
     * Icon size
     */

    size?: FontIconSizeType,

    /**
     * React style object for in deep control of how icon is represented
     */

    style?: {[string]: mixed},

    /**
     * Icon class name (example)
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

        color: theme.layoutStyles.iconColor,

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
    }
});

// constants definition
export const TINY_ICON_SIZE = 'tiny';
export const SMALL_ICON_SIZE = 'small';
export const MEDIUM_ICON_SIZE = 'medium';
export const LARGE_ICON_SIZE = 'large';
export const EXTRA_LARGE_ICON_SIZE = 'extraLarge';

/**
 * Font icon component.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function FontIconFunction(props: PropsTypes) {
    let {size, style, iconClassName, className, classes} = props;
    size = defaultTo(MEDIUM_ICON_SIZE)(size);

    const combinedClassName = classNames(
        classes.componentContainer,
        iconClassName,
        size,
        className
    );

    return <i className={combinedClassName} style={style}/>;
}

FontIconFunction.displayName = 'FontIcon';

// exports
export const FontIcon = injectSheet(styles)(FontIconFunction);