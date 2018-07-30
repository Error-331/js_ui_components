'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.baseStylesFunc = undefined;

var _ramda = require('ramda');

var _base_theme = require('./../../base_theme');

// exports
var baseStylesFunc = exports.baseStylesFunc = function baseStylesFunc(colorPalette) {
    var newBaseStyles = (0, _ramda.mergeDeepRight)((0, _base_theme.baseStylesFunc)(colorPalette), {
        // accent colors
        accentColorPrimary: colorPalette.materialAmber200,

        // main colors
        mainPrimaryColor: colorPalette.materialGreen900,
        mainSecondaryColor: colorPalette.materialGreen600,
        mainTertiaryColor: colorPalette.materialGreen400,
        mainQuaternaryColor: colorPalette.materialGreen300,

        primaryBGColor: colorPalette.materialGreen600
    });

    return Object.freeze(newBaseStyles);
};

// local imports