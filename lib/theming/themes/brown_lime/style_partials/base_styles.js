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
    accentColorPrimary: colorPalette.materialLime200,
    // main colors
    mainPrimaryColor: colorPalette.materialBrown900,
    mainSecondaryColor: colorPalette.materialBrown600,
    mainTertiaryColor: colorPalette.materialBrown400,
    mainQuaternaryColor: colorPalette.materialBrown300,
    primaryBGColor: colorPalette.materialBrown600
  });
  return Object.freeze(newBaseStyles);
};

exports.baseStylesFunc = baseStylesFunc;