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
        // teal
        materialTeal500: '#009688',

        // deep orange
        materialDeepOrange300: '#ff8a65',
        materialDeepOrange400: '#ff7043',
        materialDeepOrange600: '#f4511e',
        materialDeepOrange900: '#bf360c'
    });

    return Object.freeze(newColorPalette);
};

// local imports