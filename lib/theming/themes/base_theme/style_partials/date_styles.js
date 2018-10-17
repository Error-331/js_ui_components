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
        calendarCompactMaxWidth: 500, // px

        fontStack: fontStacks.regularFontFamilyStack,
        regularFontSize: baseStyles.primaryFontSize, // px

        fontColor: baseStyles.mainPrimaryColor,
        selectionFontColor: baseStyles.noneTransparentBGColor,

        selectionBackgroundColor: baseStyles.mainQuaternaryColor
    });
};