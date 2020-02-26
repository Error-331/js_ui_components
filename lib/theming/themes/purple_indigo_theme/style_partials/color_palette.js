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

exports.colorPaletteFunc = colorPaletteFunc;