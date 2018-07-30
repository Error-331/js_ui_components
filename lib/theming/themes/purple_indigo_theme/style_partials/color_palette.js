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
        // indigo
        materialIndigoA200: '#536dfe',

        // purple
        materialPurple300: '#ba68c8',
        materialPurple400: '#ab47bc',
        materialPurple600: '#8e24aa',
        materialPurple900: '#4a148c'
    });

    return Object.freeze(newColorPalette);
};

// local imports