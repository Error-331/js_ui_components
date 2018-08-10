'use strict';

// external imports

// local imports

Object.defineProperty(exports, "__esModule", {
    value: true
});


// exports
var dateStylesFunc = exports.dateStylesFunc = function dateStylesFunc(_ref) {
    var fontStacks = _ref.fontStacks,
        baseStyles = _ref.baseStyles;

    return Object.freeze({
        fontStack: fontStacks.regularFontFamilyStack,
        regularFontSize: baseStyles.primaryFontSize
    });
};