'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.longTextCellStylesFunc = exports.commonFooterCellStylesFunc = exports.commonHeaderCellStylesFunc = exports.commonHorizontalTableCellStylesFunc = exports.commonVerticalTableCellStylesFunc = exports.commonCellStylesFunc = exports.commonCellContentStylesFunc = undefined;

var _ramda = require('ramda');

// styles definition


// local imports
var commonCellContentStylesFunc = exports.commonCellContentStylesFunc = function commonCellContentStylesFunc(theme) {
    return {
        lineHeight: theme.tableStyles.cellLineHeight + 'px',

        fontFamily: theme.tableStyles.bodyFontStack,
        fontSize: theme.tableStyles.cellFontSize + 'px',

        textAlign: 'left',

        color: theme.tableStyles.cellFontColor,
        backgroundColor: theme.tableStyles.cellBGColor
    };
};var commonCellStylesFunc = exports.commonCellStylesFunc = function commonCellStylesFunc(theme) {
    return {
        borderBottom: '1px solid ' + theme.tableStyles.cellBorderColor,

        paddingLeft: theme.tableStyles.cellPaddingLeft + 'px',
        paddingRight: theme.tableStyles.cellPaddingRight + 'px',

        extend: commonCellContentStylesFunc(theme)
    };
};

var commonVerticalTableCellStylesFunc = exports.commonVerticalTableCellStylesFunc = function commonVerticalTableCellStylesFunc(theme) {
    return {
        paddingTop: theme.tableStyles.cellPaddingTop + 'px',
        paddingBottom: theme.tableStyles.cellPaddingBottom + 'px',

        extend: commonCellStylesFunc(theme)
    };
};

var commonHorizontalTableCellStylesFunc = exports.commonHorizontalTableCellStylesFunc = function commonHorizontalTableCellStylesFunc(theme) {
    return {
        height: theme.tableStyles.cellLineHeight + theme.tableStyles.cellPaddingTop + theme.tableStyles.cellPaddingBottom + 'px',

        extend: commonCellStylesFunc(theme)
    };
};

var commonHeaderCellStylesFunc = exports.commonHeaderCellStylesFunc = function commonHeaderCellStylesFunc(theme) {
    return (0, _ramda.mergeDeepRight)(commonCellStylesFunc(theme), {
        paddingTop: '0px'
    });
};

var commonFooterCellStylesFunc = exports.commonFooterCellStylesFunc = function commonFooterCellStylesFunc(theme) {
    return {
        extend: commonHeaderCellStylesFunc(theme),

        borderTop: '1px solid ' + theme.tableStyles.cellBorderColor,
        borderBottom: '0px none'
    };
};

var longTextCellStylesFunc = exports.longTextCellStylesFunc = function longTextCellStylesFunc() {
    return {
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    };
};