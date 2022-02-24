'use strict';

// external imports
import * as React from 'react';
import injectSheet, {createUseStyles, useTheme} from 'react-jss';
import classNames from 'classnames';

import { defaultTo } from 'ramda';

// local imports
import { ThemeType } from '../../../../src/types/theme_types';

import { MEDIUM_SIZE } from '../../../../src/theming/constants/general_constants';
import {RenderFunctionNoArgsType} from "../../../types/common_types";
import {Classes} from "jss";
import {useContext} from "react";
import {MainThemeContext} from "../../../theming/providers/main_theme_provider";

// type definitions
type FontIconSizeType = 'tiny' | 'small' | 'medium' | 'large' | 'extraLarge';

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

    containerStyle?: React.CSSProperties,

    /**
     * SVG container class name
     */

    svgContainerStyle?: React.CSSProperties,

    /**
     * Content for SVG component
     */

    children?: React.ReactElement | null,
};

// styles definition
const useStyles = createUseStyles((theme: ThemeType) => {
    return {
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
    };
});

/**
 * SVG inline icon component.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function InlineSVGIcon(props: PropsTypes) {
    // region private variables declaration
    const svgWidth: string | number = defaultTo(0)(props.svgWidth);
    const svgHeight: string | number = defaultTo(0)(props.svgHeight);

    const svgViewBox: string = defaultTo(`0 0 ${svgWidth} ${svgHeight}`)(props.svgViewBox);
    const svgContainerClassName: string = defaultTo('')(props.svgContainerClassName);

    const containerClassName: string = defaultTo('')(props.containerClassName);
    const size: string = defaultTo(MEDIUM_SIZE)(props.size);

    // endregion

    // region style hooks declaration
    const theme: ThemeType = useTheme();
    const classes: Classes = useStyles({...props, theme});

    // endregion

    // region context hooks declaration
    const mainThemeContext = useContext(MainThemeContext);

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
    const renderComponentContainer: RenderFunctionNoArgsType = (): React.ReactElement | null => {
        const { componentContainer, svgContainer } = classes;

        const combinedContainerClassName: string = classNames(
            componentContainer,
            size,
            containerClassName
        );


        const combinedSvgContainerClassName: string = classNames(
            svgContainer,
            svgContainerClassName,
        );

        return <div
            className={combinedContainerClassName}
            style={props.containerStyle}
        >
            <svg
                width={svgWidth}
                height={svgHeight}

                viewBox={svgViewBox}

                className={combinedSvgContainerClassName}
                style={props.svgContainerStyle}
            >
                {props.children}
            </svg>
        </div>;
    };

    // endregion

    // init
    return renderComponentContainer();
}

InlineSVGIcon.displayName = 'InlineSVGIcon';

// exports
export default InlineSVGIcon;
export {
    FontIconSizeType,
    PropsTypes,
}
