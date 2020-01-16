'use strict'; // external imports

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colorPaletteFunc = void 0;

var _ramda = require("ramda");

var _base_theme = require("./../../base_theme");

// exports
var colorPaletteFunc = function colorPaletteFunc() {
  var newColorPalette = (0, _ramda.mergeDeepRight)((0, _base_theme.colorPaletteFunc)(), {
    // green
    materialGreen200: '#a5d6a7',
    // cyan
    materialCyan300: '#4dd0e1',
    materialCyan400: '#26c6da',
    materialCyan600: '#00acc1',
    materialCyan900: '#006064'
  });
  return Object.freeze(newColorPalette);
};

exports.colorPaletteFunc = colorPaletteFunc;