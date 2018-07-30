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
        accentColorPrimary: colorPalette.materialTeal500,

        // main colors
        mainPrimaryColor: colorPalette.materialDeepOrange900,
        mainSecondaryColor: colorPalette.materialDeepOrange600,
        mainTertiaryColor: colorPalette.materialDeepOrange400,
        mainQuaternaryColor: colorPalette.materialDeepOrange300,

        primaryBGColor: colorPalette.materialDeepOrange600
    });

    return Object.freeze(newBaseStyles);
};

// local imports