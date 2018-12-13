'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.baseTheme = exports.additionalThemePartials = exports.baseThemePartials = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// local imports


var _ramda = require('ramda');

var _font_faces = require('./../../common_styles/font_faces');

var _ = require('./');

var _color_utilities = require('./../../business_logic/color_utilities');

var _style_values_register = require('./../../business_logic/style_values_register');

var _style_sheet_register = require('./../../business_logic/style_sheet_register');

// base theme partials preparation
var fontFaces = (0, _.fontFacesFunc)(_font_faces.fontFaces);
var fontStacks = (0, _.fontStacksFunc)();

var colorPalette = (0, _.colorPaletteFunc)();
var materialDepthLevels = (0, _.materialDepthLevelsFunc)();

var baseStyles = (0, _.baseStylesFunc)(colorPalette);

var baseThemePartials = exports.baseThemePartials = Object.freeze({
    '@font-face': fontFaces,
    fontStacks: fontStacks,

    colorPalette: colorPalette,
    materialDepthLevels: materialDepthLevels,

    baseStyles: baseStyles
});

// additional theme partials preparation
var layoutStyles = (0, _.layoutStylesFunc)(baseThemePartials);
var inputStyles = (0, _.inputStylesFunc)(baseThemePartials);
var buttonStyles = (0, _.buttonStylesFunc)(baseThemePartials);
var tableStyles = (0, _.tableStylesFunc)(baseThemePartials);
var windowStyles = (0, _.windowStylesFunc)(baseThemePartials);
var dateStyles = (0, _.dateStylesFunc)(baseThemePartials);
var navigationStyles = (0, _.navigationStylesFunc)(baseThemePartials);
var scrollBarStyles = (0, _.scrollBarStylesFunc)(baseThemePartials);

var additionalThemePartials = exports.additionalThemePartials = Object.freeze({
    layoutStyles: layoutStyles,
    inputStyles: inputStyles,
    buttonStyles: buttonStyles,
    tableStyles: tableStyles,
    windowStyles: windowStyles,
    dateStyles: dateStyles,
    navigationStyles: navigationStyles,
    scrollBarStyles: scrollBarStyles
});

// exports
var baseTheme = exports.baseTheme = Object.freeze(_extends({
    colorUtilities: _color_utilities.colorUtilities,
    styleValuesRegister: _style_values_register.styleValuesRegister,
    styleSheetRegister: _style_sheet_register.styleSheetRegister

}, (0, _ramda.clone)(baseThemePartials), (0, _ramda.clone)(additionalThemePartials)));