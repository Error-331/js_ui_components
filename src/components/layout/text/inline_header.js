'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import {isNil, T, lt, gt, defaultTo, cond, always, mergeDeepRight} from 'ramda';

// local imports
import type {ThemeType} from './../../../types/theme_types';

import {REGULAR_FONT} from './../../../theming/constants/general_constants';

// type definitions
export type FontFamilyType = 'thin' | 'light' | 'regular' | 'bold';

type PropsTypes = {
    /**
     * Header level (effects font size)
     */

    level?: number,

    /**
     * Font family type ('thin', 'light', 'regular', 'bold')
     */

    fontFamilyType?: FontFamilyType,

    /**
     * React style object for in deep control of how header is represented
     */

    style?: {[string]: mixed},

    /**
     * Name of the class which will be applied to header along with default one
     */

    className?: string,

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

    /**
     * Child node (with optional sub-nodes)
     */

    children?: React.ChildrenArray<any>,
};

// styles definition
const styles = theme => ({
    componentContainer: {
        fontFamily: theme.layoutStyles.fontStack,
        color: theme.layoutStyles.bodyFontColor,

        '&.level1': {
            fontSize: theme.layoutStyles.inlineHeaderLevel1FontSize,
        },

        '&.level2': {
            fontSize: theme.layoutStyles.inlineHeaderLevel2FontSize,
        },

        '&.level3': {
            fontSize: theme.layoutStyles.inlineHeaderLevel3FontSize,
        },

        '&.level4': {
            fontSize: theme.layoutStyles.inlineHeaderLevel4FontSize,
        },

        '&.level5': {
            fontSize: theme.layoutStyles.inlineHeaderLevel5FontSize,
        },

        '&.level6': {
            fontSize: theme.layoutStyles.inlineHeaderLevel6FontSize,
        }
    }
});

/**
 * Inline header component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function InlineHeaderFunction(props: PropsTypes) {
    const {level, classes, theme, children, className} = props;
    const userLevel: number = defaultTo(1)(level);

    const levelClassName: string = cond([
        [isNil, always('level1')],
        [level => lt(level, 0), always('level1')],
        [level => gt(level, 6), always('level6')],
        [T, level => `level${level}`],
    ])(userLevel);

    const componentClassNames: string = classNames(classes.componentContainer, levelClassName, className);

    let {style, fontFamilyType} = props;

    fontFamilyType = defaultTo(REGULAR_FONT)(fontFamilyType);
    style = defaultTo({})(style);

    style = mergeDeepRight({
        fontFamily: theme.fontFamilyUtilities.getFontFamilyByType(theme, fontFamilyType),
    }, style);

    return <span className={componentClassNames} style={style}>{children}</span>;
}

InlineHeaderFunction.displayName = 'InlineHeader';

// exports
export const InlineHeader = injectSheet(styles, {injectTheme: true})(InlineHeaderFunction);
export default InlineHeader;
