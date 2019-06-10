'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import {defaultTo} from 'ramda';

// local imports
import type {ThemeType} from './../../../types/theme_types';

import {MEDIUM_SIZE} from './../../../theming/constants/general_constants';

// type definitions
export type FontIconSizeType = 'tiny' | 'small' | 'medium' | 'large' | 'extraLarge';

type PropsTypes = {
    /**
     * Icon size
     */

    size?: FontIconSizeType,

    /**
     * Path to image file
     */

    src?: string,

    /**
     * Icon container class name
     */

    className?: string,

    /**
     * Icon container style object
     */

    style?: {[string]: mixed},

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
};

// styles definition
const styles = theme => ({
    componentContainer: {
    },
});

/**
 * Inline image icon component.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function InlineImageIconFunction(props: PropsTypes) {
    const {src, className, classes, theme, style} = props;
    const size: string = defaultTo(MEDIUM_SIZE)(props.size);

    const height: number = theme.layoutStyles[`${size}IconSize`];

    const combinedContainerClassName: string = classNames(
        classes.componentContainer,

        className
    );

    return <img
            src={src}

            height={`${height}px`}
            border={0}

            className={combinedContainerClassName}
            style={style}
        />;
}

InlineImageIconFunction.displayName = 'InlineImageIcon';

// exports
export const InlineImageIcon = injectSheet(styles)(InlineImageIconFunction);
export default InlineImageIcon;