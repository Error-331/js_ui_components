'use strict';

// external imports
import React, { useContext } from 'react';
import { Classes } from 'jss';
import { createUseStyles, useTheme } from 'react-jss';

import classNames from 'classnames';
import { T, isNil, equals, lt, gt, defaultTo, cond, always, mergeDeepRight } from 'ramda';

// local imports
import { RenderFunctionNoArgsType } from './../../../types/common_types';
import { ThemeType } from './../../../types/theme_types';

import { REGULAR_FONT } from './../../..//theming/constants/general_constants';
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

    children?: React.ReactElement | null,
};

// styles definition
const useStyles = createUseStyles((theme: ThemeType) => {
    return {
      componentContainer: {
        boxSizing: 'border-box',

        marginTop: theme.layoutStyles.sectionVerticalSpacing,
        marginBottom: theme.layoutStyles.sectionVerticalSpacing,

        fontFamily: theme.layoutStyles.fontStack,
        fontWeight: 'normal',
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
 * Block header component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
const defaultStyleObject: React.CSSProperties = {};

function BlockHeader(props: PropsTypes): React.ReactElement | null {
    // region private variables declaration
    const className: string = defaultTo('')(props.className);
    const style: React.CSSProperties = defaultTo(defaultStyleObject)(props.style);
    const fontFamilyType = defaultTo(REGULAR_FONT)(props.fontFamilyType);

    const userLevel: number = defaultTo(1)(props.level);

    const level: number = cond([
        [isNil, always(1)],
        [(level: number) => lt(level, 0), always(1)],
        [(level: number) => gt(level, 6), always(6)],
        [T, (level: number) => level],
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
      const componentClassNames: string = classNames(componentContainer, `level${level}`, className);

      const newStyle: React.CSSProperties = mergeDeepRight({
        fontFamily: theme.fontFamilyUtilities.getFontFamilyByType(theme, fontFamilyType),
      }, style);

      return cond([
        [equals(1), always(<h1 className={componentClassNames} style={newStyle}>{props.children}</h1>)],
        [equals(2), always(<h2 className={componentClassNames} style={newStyle}>{props.children}</h2>)],
        [equals(3), always(<h3 className={componentClassNames} style={newStyle}>{props.children}</h3>)],
        [equals(4), always(<h4 className={componentClassNames} style={newStyle}>{props.children}</h4>)],
        [equals(5), always(<h5 className={componentClassNames} style={newStyle}>{props.children}</h5>)],
        [equals(6), always(<h6 className={componentClassNames} style={newStyle}>{props.children}</h6>)],
      ])(level);
    };

    // endregion

    // init
    return renderComponentContainer();
}

BlockHeader.displayName = 'BlockHeader';

// exports
export default BlockHeader;
export {
  FontFamilyType,
  PropsTypes,
}
