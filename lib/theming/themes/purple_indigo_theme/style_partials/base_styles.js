'use strict'; // external imports

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.baseStylesFunc = void 0;

var _ramda = require("ramda");

var _base_theme = require("./../../base_theme");

// exports
var baseStylesFunc = function baseStylesFunc(colorPalette) {
  var newBaseStyles = (0, _ramda.mergeDeepRight)((0, _base_theme.baseStylesFunc)(colorPalette), {
    // accent colors
    accentColorPrimary: colorPalette.materialIndigoA200,
    // main colors
    mainPrimaryColor: colorPalette.materialPurple900,
    mainSecondaryColor: colorPalette.materialPurple600,
    mainTertiaryColor: colorPalette.materialPurple400,
    mainQuaternaryColor: colorPalette.materialPurple300,
    primaryBGColor: colorPalette.materialPurple600
  });
  return Object.freeze(newBaseStyles);
};

exports.baseStylesFunc = baseStylesFunc;