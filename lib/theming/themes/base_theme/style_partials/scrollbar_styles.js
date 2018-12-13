'use strict';

// external imports

// local imports

Object.defineProperty(exports, "__esModule", {
    value: true
});


// exports
var scrollBarStylesFunc = exports.scrollBarStylesFunc = function scrollBarStylesFunc(_ref) {
    var baseStyles = _ref.baseStyles;

    return Object.freeze({
        scrollBarWidth: 11, // px
        scrollBarHeight: 11, // px

        scrollBarThumbBorderWidth: 3, // px
        scrollBarThumbBorderStyle: 'solid',
        scrollBarThumbBorderRadius: 5, // px

        scrollBarThumbBorderColor: baseStyles.noneTransparentBGColor,
        scrollBarThumbBackgroundColor: baseStyles.mainPrimaryColor,
        scrollBarTrackBackgroundColor: baseStyles.noneTransparentBGColor
    });
};