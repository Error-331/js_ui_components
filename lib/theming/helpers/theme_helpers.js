'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.extendTheme = undefined;

var _ramda = require('ramda');

var _base_theme = require('../themes/base_theme/');

var _font_faces = require('./../common_styles/font_faces');

var _font_faces2 = _interopRequireDefault(_font_faces);

var _base_theme2 = require('./../themes/base_theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var extendTheme = exports.extendTheme = function extendTheme() {
    var newFontFacesFunc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _base_theme2.fontFacesFunc;
    var newFontStacksFunc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _base_theme2.fontStacksFunc;
    var newColorPaletteFunc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _base_theme2.colorPaletteFunc;
    var newMaterialDepthLevelsFunc = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _base_theme2.materialDepthLevelsFunc;
    var newBaseStylesFunc = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _base_theme2.baseStylesFunc;

    var fontFaces = newFontFacesFunc(_font_faces2.default);
    var fontStacks = newFontStacksFunc();
    var colorPalette = newColorPaletteFunc();
    var materialDepthLevels = newMaterialDepthLevelsFunc();
    var baseStyles = newBaseStylesFunc(colorPalette);

    var newBaseThemePartials = Object.freeze({
        '@font-face': fontFaces,
        fontStacks: fontStacks,

        colorPalette: colorPalette,
        materialDepthLevels: materialDepthLevels,

        baseStyles: baseStyles
    });

    var layoutStyles = (0, _base_theme2.layoutStylesFunc)(newBaseThemePartials);
    var inputStyles = (0, _base_theme2.inputStylesFunc)(newBaseThemePartials);
    var buttonStyles = (0, _base_theme2.buttonStylesFunc)(newBaseThemePartials);
    var tableStyles = (0, _base_theme2.tableStylesFunc)(newBaseThemePartials);
    var windowStyles = (0, _base_theme2.windowStylesFunc)(newBaseThemePartials);

    var newAdditionalThemePartials = Object.freeze({
        layoutStyles: layoutStyles,
        inputStyles: inputStyles,
        buttonStyles: buttonStyles,
        tableStyles: tableStyles,
        windowStyles: windowStyles
    });

    var newTheme = (0, _ramda.mergeAll)([_base_theme.baseTheme, newBaseThemePartials, newAdditionalThemePartials]);

    return Object.freeze(newTheme);
};

// local imports