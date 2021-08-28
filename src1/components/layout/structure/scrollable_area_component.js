'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';

import classNames from 'classnames';
import {isNil} from 'ramda';

// local imports
import type {ThemeType} from '../../../../src/types/theme_types';

// type definitions
type PropsTypes = {
    /**
     * Number of text rows that will be shown in scrollable area (if not specified - all rows will be shown)
     */

    rowsCount?: number,

    /**
     * React style object for in deep control of how scrollable area is represented
     */

    style?: {[string]: mixed},

    /**
     * Name of the class which will be applied to scrollable area along with default one
     */

    className?: string,

    /**
     * Child node (with optional sub-nodes)
     */

    children?: React.Node,

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
}

type StateTypes = {};

// constants definition
const SCROLLABLE_AREA_BORDER_SIZE: number = 1; // px
const SCROLLABLE_AREA_LINE_HEIGHT_SPACING: number = 2; // px

// styles definition
const styles = theme => ({
    componentContainer: {
        boxSizing: 'border-box',

        overflowX: 'hidden',
        overflowY: 'scroll',

        borderRadius: `${theme.layoutStyles.commonBorderRadius}px`,
        border: `${SCROLLABLE_AREA_BORDER_SIZE}px solid ${theme.baseStyles.subQuaternaryColor}`,

        padding: `${theme.layoutStyles.topSpacing}px 
                  ${theme.layoutStyles.rightSpacing}px 
                  ${theme.layoutStyles.bottomSpacing}px 
                  ${theme.layoutStyles.leftSpacing}px
        `,

        fontFamily: theme.layoutStyles.fontStack,
        fontSize: `${theme.layoutStyles.bodyFontSize}px`,
        lineHeight: `${theme.layoutStyles.bodyFontSize + SCROLLABLE_AREA_LINE_HEIGHT_SPACING}px`,

        '&::-webkit-scrollbar-corner': {
            borderRadius: `${theme.layoutStyles.commonBorderRadius}px`,
        },
    },
});

/**
 * Scrollable area.
 * Simple scrollable area that can be filled with any elements.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function ScrollableAreaFunction(props: PropsTypes) {
    const {rowsCount, style, className, classes, theme, children} = props;
    const composedClassName: string = classNames(classes.componentContainer, className);

    let composedStyles = {};

    if (isNil(rowsCount)) {
        composedStyles = {height: 'auto'};
    } else {
        const spacing: number = theme.layoutStyles.topSpacing + SCROLLABLE_AREA_BORDER_SIZE * 2;
        const lineHeight: number = theme.layoutStyles.bodyFontSize + SCROLLABLE_AREA_LINE_HEIGHT_SPACING;
        const height: number = rowsCount * lineHeight + spacing;

        composedStyles = {height: `${height}px`};
    }

    composedStyles = Object.assign(composedStyles, style);

    return <div style={composedStyles} className={composedClassName}>
        {children}
    </div>;
}

ScrollableAreaFunction.displayName = 'ScrollableAreaComponent';

// exports
export const ScrollableAreaComponent = injectSheet(styles, {injectTheme: true})(ScrollableAreaFunction);
export default ScrollableAreaComponent;
