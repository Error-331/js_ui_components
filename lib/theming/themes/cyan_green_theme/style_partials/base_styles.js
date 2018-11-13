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
        accentColorPrimary: colorPalette.materialGreen200,

        // main colors
        mainPrimaryColor: colorPalette.materialCyan900,
        mainSecondaryColor: colorPalette.materialCyan600,
        mainTertiaryColor: colorPalette.materialCyan400,
        mainQuaternaryColor: colorPalette.materialCyan300,

        primaryBGColor: colorPalette.materialCyan600
    });

    return Object.freeze(newBaseStyles);
};

// local imports