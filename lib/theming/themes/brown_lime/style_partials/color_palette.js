'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.colorPaletteFunc = undefined;

var _ramda = require('ramda');

var _base_theme = require('./../../base_theme');

// exports
var colorPaletteFunc = exports.colorPaletteFunc = function colorPaletteFunc() {
    var newColorPalette = (0, _ramda.mergeDeepRight)((0, _base_theme.colorPaletteFunc)(), {
        // lime
        materialLime200: '#e6ee9c',

        // brown
        materialBrown300: '#a1887f',
        materialBrown400: '#8d6e63',
        materialBrown600: '#6d4c41',
        materialBrown900: '#3e2723'
    });

    return Object.freeze(newColorPalette);
};

// local imports