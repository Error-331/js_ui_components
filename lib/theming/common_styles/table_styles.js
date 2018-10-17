'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.longTextCellStylesFunc = exports.commonHeaderCellStylesFunc = exports.commonCellStylesFunc = exports.commonCellContentStylesFunc = undefined;

var _ramda = require('ramda');

// styles definition


// local imports
var commonCellContentStylesFunc = exports.commonCellContentStylesFunc = function commonCellContentStylesFunc(theme) {
    return {
        lineHeight: '18px',

        fontFamily: theme.tableStyles.bodyFontStack,
        fontSize: theme.tableStyles.cellFontSize + 'px',

        textAlign: 'left',

        color: theme.tableStyles.cellFontColor,
        backgroundColor: theme.tableStyles.cellBGColor
    };
};var commonCellStylesFunc = exports.commonCellStylesFunc = function commonCellStylesFunc(theme) {
    return {
        borderBottom: '1px solid ' + theme.tableStyles.cellBorderColor,

        paddingTop: theme.tableStyles.cellPaddingTop + 'px',
        paddingBottom: theme.tableStyles.cellPaddingBottom + 'px',

        paddingLeft: theme.tableStyles.cellPaddingLeft + 'px',
        paddingRight: theme.tableStyles.cellPaddingRight + 'px',

        extend: commonCellContentStylesFunc(theme)
    };
};

var commonHeaderCellStylesFunc = exports.commonHeaderCellStylesFunc = function commonHeaderCellStylesFunc(theme) {
    return (0, _ramda.mergeDeepRight)(commonCellStylesFunc(theme), {
        paddingTop: '0px'
    });
};

var longTextCellStylesFunc = exports.longTextCellStylesFunc = function longTextCellStylesFunc() {
    return {
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    };
};