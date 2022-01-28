'use strict';

// external imports
import { Styles as JSSStyles } from 'jss';
import { mergeDeepRight } from 'ramda';

// local imports
import { ThemeType } from './../../types/theme_types';

// styles definition
const commonCellContentStylesFunc = (theme: ThemeType): JSSStyles => ({
    lineHeight: `${theme.tableStyles.cellLineHeight}px`,

    fontFamily: theme.tableStyles.bodyFontStack,
    fontSize: `${theme.tableStyles.cellFontSize}px`,

    textAlign: 'left',

    color: theme.tableStyles.cellFontColor,
    backgroundColor: theme.tableStyles.cellBGColor
});

const commonCellStylesFunc = (theme: ThemeType): JSSStyles => ({
    borderBottom: `1px solid ${theme.tableStyles.cellBorderColor}`,

    paddingLeft: `${theme.tableStyles.cellPaddingLeft}px`,
    paddingRight: `${theme.tableStyles.cellPaddingRight}px`,

    extend: commonCellContentStylesFunc(theme)
});

const commonVerticalTableCellStylesFunc = (theme: ThemeType): JSSStyles => ({
    paddingTop: `${theme.tableStyles.cellPaddingTop}px`,
    paddingBottom: `${theme.tableStyles.cellPaddingBottom}px`,

    extend: commonCellStylesFunc(theme)
});

const commonHorizontalTableCellStylesFunc = (theme: ThemeType): JSSStyles => ({
    height: `${theme.tableStyles.cellLineHeight + theme.tableStyles.cellPaddingTop + theme.tableStyles.cellPaddingBottom}px`,

    extend: commonCellStylesFunc(theme)
});

const commonHeaderCellStylesFunc = (theme: ThemeType): JSSStyles => {
    return mergeDeepRight(commonCellStylesFunc(theme), {
        paddingTop: '0px',
    });
};

const commonFooterCellStylesFunc = (theme: ThemeType): JSSStyles => {
    return {
        extend: commonHeaderCellStylesFunc(theme),

        borderTop: `1px solid ${theme.tableStyles.cellBorderColor}`,
        borderBottom: `0px none`,
    };
};

const longTextCellStylesFunc = (): JSSStyles => ({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
});

// exports
export {
    commonCellContentStylesFunc,
    commonCellStylesFunc,
    commonVerticalTableCellStylesFunc,
    commonHorizontalTableCellStylesFunc,
    commonHeaderCellStylesFunc,
    commonFooterCellStylesFunc,
    longTextCellStylesFunc,
}
