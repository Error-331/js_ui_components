'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import {T, isNil, equals, lt, gt, defaultTo, cond, identity, always, mergeDeepRight} from 'ramda';

// local imports
import type {ThemeType} from './../../../types/theme_types';

import {REGULAR_FONT} from './../../../theming/constants/general_constants';

// type definitions
export type FontFamilyType = 'thin' | 'light' | 'regular' | 'bold';

export type PropsTypes = {
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
});

/**
 * Block header component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function BlockHeaderFunction(props: PropsTypes) {
  let {level} = props;
  level = cond([
    [isNil, always(1)],
    [level => lt(level, 0), always(1)],
    [level => gt(level, 6), always(6)],
    [T, identity],
  ])(level);

  const {classes, theme, children, className} = props;
  const componentClassNames: string = classNames(classes.componentContainer, `level${level}`, className);

  let {style, fontFamilyType} = props;

  fontFamilyType = defaultTo(REGULAR_FONT)(fontFamilyType);
  style = defaultTo({})(style);

  style = mergeDeepRight({
    fontFamily: theme.fontFamilyUtilities.getFontFamilyByType(theme, fontFamilyType),
  }, style);

  return cond([
    [equals(1), always(<h1 className={componentClassNames} style={style}>{children}</h1>)],
    [equals(2), always(<h2 className={componentClassNames} style={style}>{children}</h2>)],
    [equals(3), always(<h3 className={componentClassNames} style={style}>{children}</h3>)],
    [equals(4), always(<h4 className={componentClassNames} style={style}>{children}</h4>)],
    [equals(5), always(<h5 className={componentClassNames} style={style}>{children}</h5>)],
    [equals(6), always(<h6 className={componentClassNames} style={style}>{children}</h6>)],
  ])(level);
}

BlockHeaderFunction.displayName = 'BlockHeader';

// exports
export const BlockHeader = injectSheet(styles, {injectTheme: true})(BlockHeaderFunction);
export default BlockHeader;
