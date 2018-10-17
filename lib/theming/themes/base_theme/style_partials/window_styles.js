'use strict';

// external imports

// local imports

Object.defineProperty(exports, "__esModule", {
    value: true
});


// exports
var windowStylesFunc = exports.windowStylesFunc = function windowStylesFunc(_ref) {
    var baseStyles = _ref.baseStyles;

    return Object.freeze({
        overlayOpacity: 0.5,
        overlayColor: baseStyles.mainQuaternaryColor
    });
};