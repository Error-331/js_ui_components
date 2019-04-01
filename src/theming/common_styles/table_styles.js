'use strict';

// @flow

// external imports
import {mergeDeepRight} from 'ramda';

// local imports
import type {ThemeType, CSSStylesType} from './../../types/theme_types';

// styles definition
export const commonCellContentStylesFunc = (theme: ThemeType): CSSStylesType => ({
    lineHeight: `${theme.tableStyles.cellLineHeight}px`,

    fontFamily: theme.tableStyles.bodyFontStack,
    fontSize: `${theme.tableStyles.cellFontSize}px`,

    textAlign: 'left',

    color: theme.tableStyles.cellFontColor,
    backgroundColor: theme.tableStyles.cellBGColor
});

export const commonCellStylesFunc = (theme: ThemeType): CSSStylesType => ({
    borderBottom: `1px solid ${theme.tableStyles.cellBorderColor}`,

    paddingLeft: `${theme.tableStyles.cellPaddingLeft}px`,
    paddingRight: `${theme.tableStyles.cellPaddingRight}px`,

    extend: commonCellContentStylesFunc(theme)
});

export const commonVerticalTableCellStylesFunc = (theme: ThemeType): CSSStylesType => ({
    paddingTop: `${theme.tableStyles.cellPaddingTop}px`,
    paddingBottom: `${theme.tableStyles.cellPaddingBottom}px`,

    extend: commonCellStylesFunc(theme)
});

export const commonHorizontalTableCellStylesFunc = (theme: ThemeType): CSSStylesType => ({
    height: `${theme.tableStyles.cellLineHeight + theme.tableStyles.cellPaddingTop + theme.tableStyles.cellPaddingBottom}px`,

    extend: commonCellStylesFunc(theme)
});

export const commonHeaderCellStylesFunc = (theme: ThemeType): CSSStylesType => {
    return mergeDeepRight(commonCellStylesFunc(theme), {
        paddingTop: '0px',
    });
};

export const commonFooterCellStylesFunc = (theme: ThemeType): CSSStylesType => {
    return {
        extend: commonHeaderCellStylesFunc(theme),

        borderTop: `1px solid ${theme.tableStyles.cellBorderColor}`,
        borderBottom: `0px none`,
    };
};

export const longTextCellStylesFunc = (): CSSStylesType => ({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
});