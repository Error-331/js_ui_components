'use strict'; // external imports

require("core-js/modules/es.symbol");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.keys");

require("core-js/modules/web.dom-collections.for-each");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.baseTheme = exports.additionalThemePartials = exports.baseThemePartials = void 0;

var _ramda = require("ramda");

var _font_faces = require("./../../common_styles/font_faces");

var _style_partials = require("./style_partials");

var _color_utilities = require("./../../business_logic/color_utilities");

var _style_values_register = require("./../../business_logic/style_values_register");

var _style_sheet_register = require("./../../business_logic/style_sheet_register");

var _font_family_utilities = require("./../../business_logic/font_family_utilities");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(Object(source)); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// base theme partials preparation
var fontFaces = (0, _style_partials.fontFacesFunc)(_font_faces.fontFaces);
var fontStacks = (0, _style_partials.fontStacksFunc)();
var colorPalette = (0, _style_partials.colorPaletteFunc)();
var materialDepthLevels = (0, _style_partials.materialDepthLevelsFunc)();
var baseStyles = (0, _style_partials.baseStylesFunc)(colorPalette, fontStacks);
var baseThemePartials = Object.freeze({
  '@font-face': fontFaces,
  fontStacks: fontStacks,
  colorPalette: colorPalette,
  materialDepthLevels: materialDepthLevels,
  baseStyles: baseStyles
}); // additional theme partials preparation

exports.baseThemePartials = baseThemePartials;
var layoutStyles = (0, _style_partials.layoutStylesFunc)(baseThemePartials);
var inputStyles = (0, _style_partials.inputStylesFunc)(baseThemePartials);
var buttonStyles = (0, _style_partials.buttonStylesFunc)(baseThemePartials);
var tableStyles = (0, _style_partials.tableStylesFunc)(baseThemePartials);
var windowStyles = (0, _style_partials.windowStylesFunc)(baseThemePartials);
var dateStyles = (0, _style_partials.dateStylesFunc)(baseThemePartials);
var navigationStyles = (0, _style_partials.navigationStylesFunc)(baseThemePartials);
var scrollBarStyles = (0, _style_partials.scrollBarStylesFunc)(baseThemePartials);
var additionalThemePartials = Object.freeze({
  layoutStyles: layoutStyles,
  inputStyles: inputStyles,
  buttonStyles: buttonStyles,
  tableStyles: tableStyles,
  windowStyles: windowStyles,
  dateStyles: dateStyles,
  navigationStyles: navigationStyles,
  scrollBarStyles: scrollBarStyles
}); // exports

exports.additionalThemePartials = additionalThemePartials;
var baseTheme = Object.freeze(_objectSpread({
  colorUtilities: _color_utilities.colorUtilities,
  styleValuesRegister: _style_values_register.styleValuesRegister,
  styleSheetRegister: _style_sheet_register.styleSheetRegister,
  fontFamilyUtilities: _font_family_utilities.fontFamilyUtilities
}, (0, _ramda.clone)(baseThemePartials), (0, _ramda.clone)(additionalThemePartials)));
exports.baseTheme = baseTheme;