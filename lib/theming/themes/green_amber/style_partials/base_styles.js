'use strict'; // external imports

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
    accentColorPrimary: colorPalette.materialAmber200,
    // main colors
    mainPrimaryColor: colorPalette.materialGreen900,
    mainSecondaryColor: colorPalette.materialGreen600,
    mainTertiaryColor: colorPalette.materialGreen400,
    mainQuaternaryColor: colorPalette.materialGreen300,
    primaryBGColor: colorPalette.materialGreen600
  });
  return Object.freeze(newBaseStyles);
};

exports.baseStylesFunc = baseStylesFunc;