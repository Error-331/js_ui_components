'use strict'; // external imports

require("core-js/modules/es.object.define-property");

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
    // red
    materialRed200: '#ef9a9a',
    // blue grey
    materialBlueGrey300: '#90a4ae',
    materialBlueGrey400: '#78909c',
    materialBlueGrey600: '#546e7a',
    materialBlueGrey900: '#263238'
  });
  return Object.freeze(newColorPalette);
};

exports.colorPaletteFunc = colorPaletteFunc;