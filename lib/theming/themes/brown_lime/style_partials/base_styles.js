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
        accentColorPrimary: colorPalette.materialLime200,

        // main colors
        mainPrimaryColor: colorPalette.materialBrown900,
        mainSecondaryColor: colorPalette.materialBrown600,
        mainTertiaryColor: colorPalette.materialBrown400,
        mainQuaternaryColor: colorPalette.materialBrown300,

        primaryBGColor: colorPalette.materialBrown600
    });

    return Object.freeze(newBaseStyles);
};

// local imports