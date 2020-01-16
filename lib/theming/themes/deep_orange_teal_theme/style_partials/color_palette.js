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

exports.colorPaletteFunc = colorPaletteFunc;