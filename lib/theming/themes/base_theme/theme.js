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

var _font_faces2 = _interopRequireDefault(_font_faces);

var _ = require('./');

var _color_utilities = require('./../../business_logic/color_utilities');

var _color_utilities2 = _interopRequireDefault(_color_utilities);

var _style_values_register = require('./../../business_logic/style_values_register');

var _style_values_register2 = _interopRequireDefault(_style_values_register);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// base theme partials preparation
var fontFaces = (0, _.fontFacesFunc)(_font_faces2.default);
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

var additionalThemePartials = exports.additionalThemePartials = Object.freeze({
    layoutStyles: layoutStyles,
    inputStyles: inputStyles,
    buttonStyles: buttonStyles,
    tableStyles: tableStyles,
    windowStyles: windowStyles
});

// exports
var baseTheme = exports.baseTheme = Object.freeze(_extends({
    colorUtilities: _color_utilities2.default,
    styleValuesRegister: _style_values_register2.default

}, (0, _ramda.clone)(baseThemePartials), (0, _ramda.clone)(additionalThemePartials)));