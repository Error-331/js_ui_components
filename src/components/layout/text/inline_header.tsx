'use strict';

// external imports
import React, { useContext } from 'react';
import {Classes} from 'jss';
import { createUseStyles, useTheme } from 'react-jss';

import classNames from 'classnames';
import { isNil, T, lt, gt, defaultTo, cond, always, mergeDeepRight } from 'ramda';

// local imports
import { RenderFunctionNoArgsType } from './../../../types/common_types';
import { ThemeType } from './../../../types/theme_types';

import { REGULAR_FONT } from './../../../theming/constants/general_constants';
import { MainThemeContext } from './../../../theming/providers/main_theme_provider';

// type definitions
type FontFamilyType = 'thin' | 'light' | 'regular' | 'bold';

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

    style?: React.CSSProperties,

    /**
     * Name of the class which will be applied to header along with default one
     */

    className?: string,

    /**
     * Child node (with optional sub-nodes)
     */

    children: React.ReactElement | null,
};

// styles definition
const useStyles = createUseStyles((theme: ThemeType) => {
    return {
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
    };
});

/**
 * Inline header component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
const defaultStyleObject: React.CSSProperties = {};

function InlineHeader(props: PropsTypes): React.ReactElement | null {
    // region private variables declaration
    const className: string = defaultTo('')(props.className);
    const style: React.CSSProperties = defaultTo(defaultStyleObject)(props.style);
    const fontFamilyType = defaultTo(REGULAR_FONT)(props.fontFamilyType);

    const userLevel: number = defaultTo(1)(props.level);

    const levelClassName: string = cond([
        [isNil, always('level1')],
        [(level: number) => lt(level, 0), always('level1')],
        [(level: number) => gt(level, 6), always('level6')],
        [T, (level: number) => `level${level}`],
    ])(userLevel);

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
        const { componentContainer } = classes;
        const componentClassNames: string = classNames(componentContainer, levelClassName, className);

        const newStyle: React.CSSProperties = mergeDeepRight({
            fontFamily: theme.fontFamilyUtilities.getFontFamilyByType(theme, fontFamilyType),
        }, style);

        return <span className={componentClassNames} style={newStyle}>{props.children}</span>;
    };

    // endregion

    // init
    return renderComponentContainer();
}

InlineHeader.displayName = 'InlineHeader';

// exports
export default InlineHeader;
export {
    FontFamilyType,
    PropsTypes
}
