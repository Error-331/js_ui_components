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
        accentColorPrimary: colorPalette.materialRed200,

        // main colors
        mainPrimaryColor: colorPalette.materialBlueGrey900,
        mainSecondaryColor: colorPalette.materialBlueGrey600,
        mainTertiaryColor: colorPalette.materialBlueGrey400,
        mainQuaternaryColor: colorPalette.materialBlueGrey300,

        primaryBGColor: colorPalette.materialBlueGrey600
    });

    return Object.freeze(newBaseStyles);
};

// local imports