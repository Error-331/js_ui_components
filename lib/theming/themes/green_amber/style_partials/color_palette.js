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
    // amber
    materialAmber200: '#ffe082',
    // green
    materialGreen300: '#81c784',
    materialGreen400: '#66bb6a',
    materialGreen600: '#43a047',
    materialGreen900: '#1b5e20'
  });
  return Object.freeze(newColorPalette);
};

exports.colorPaletteFunc = colorPaletteFunc;