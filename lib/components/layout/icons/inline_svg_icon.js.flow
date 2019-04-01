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
     * SVG container width
     */

    svgWidth?: number | string,

    /**
     * SVG container height
     */

    svgHeight?: number | string,

    /**
     * SVG viewbox
     */

    svgViewBox?: string,

    /**
     * Outer container class name
     */

    containerClassName?: string,

    /**
     * SVG container class name
     */

    svgContainerClassName?: string,

    /**
     * Outer container style object
     */

    containerStyle?: {[string]: mixed},

    /**
     * SVG container class name
     */

    svgContainerStyle?: {[string]: mixed},

    /**
     * Content for SVG component
     */

    children?: React.Node,

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
        '&.tiny': {
            minHeight: `${theme.layoutStyles.tinyIconSize}px`,

            '& > $svgContainer': {
                height: `${theme.layoutStyles.tinyIconSize}px`,
            }
        },

        '&.small': {
            minHeight: `${theme.layoutStyles.smallIconSize}px`,

            '& > $svgContainer': {
                height: `${theme.layoutStyles.smallIconSize}px`,
            }
        },

        '&.medium': {
            minHeight: `${theme.layoutStyles.mediumIconSize}px`,

            '& > $svgContainer': {
                height: `${theme.layoutStyles.mediumIconSize}px`,
            }
        },

        '&.large': {
            minHeight: `${theme.layoutStyles.largeIconSize}px`,

            '& > $svgContainer': {
                height: `${theme.layoutStyles.largeIconSize}px`,
            }
        },

        '&.extraLarge': {
            minHeight: `${theme.layoutStyles.extraLargeIconSize}px`,

            '& > $svgContainer': {
                height: `${theme.layoutStyles.extraLargeIconSize}px`,
            }
        },

        '& > $svgContainer': {
            '& path': {
                fill: 'none',

                stroke: theme.layoutStyles.baseIconColor,
                strokeWidth: '2.5',
                strokeLinecap: 'butt',
                strokeLinejoin: 'miter',
                strokeMiterlimit: 10,
                strokeDasharray: 'none',
                strokeOpacity: 1,
            }
        },
    },

    svgContainer: {}
});

/**
 * SVG inline icon component.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function InlineSVGIconFunction(props: PropsTypes) {
    const {containerClassName, classes, containerStyle} = props;
    const size: string = defaultTo(MEDIUM_SIZE)(props.size);

    const combinedContainerClassName: string = classNames(
        classes.componentContainer,
        size,
        containerClassName
    );

    const {svgWidth, svgHeight, svgViewBox, svgContainerClassName, svgContainerStyle, children} = props;

    const combinedSvgContainerClassName: string = classNames(
        classes.svgContainer,
        svgContainerClassName,
    );

    return <div
        className={combinedContainerClassName}
        style={containerStyle}
    >
        <svg
        width={svgWidth}
        height={svgHeight}

        viewBox={svgViewBox}

        className={combinedSvgContainerClassName}
        style={svgContainerStyle}
    >
        {children}
        </svg>
    </div>;
}

InlineSVGIconFunction.displayName = 'InlineSVGIcon';

// exports
export const InlineSVGIcon = injectSheet(styles)(InlineSVGIconFunction);