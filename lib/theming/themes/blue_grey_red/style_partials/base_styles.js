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
var baseStylesFunc = function baseStylesFunc(colorPalette, fontStacks) {
  var newBaseStyles = (0, _ramda.mergeDeepRight)((0, _base_theme.baseStylesFunc)(colorPalette, fontStacks), {
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

exports.baseStylesFunc = baseStylesFunc;