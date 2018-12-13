'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.extendTheme = undefined;

var _ramda = require('ramda');

var _theme = require('./../themes/base_theme/theme');

var _font_faces = require('./../common_styles/font_faces');

var _base_theme = require('./../themes/base_theme');

var extendTheme = exports.extendTheme = function extendTheme() {
    var newFontFacesFunc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _base_theme.fontFacesFunc;
    var newFontStacksFunc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _base_theme.fontStacksFunc;
    var newColorPaletteFunc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _base_theme.colorPaletteFunc;
    var newMaterialDepthLevelsFunc = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _base_theme.materialDepthLevelsFunc;
    var newBaseStylesFunc = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _base_theme.baseStylesFunc;

    var fontFaces = newFontFacesFunc(_font_faces.fontFaces);
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

    var layoutStyles = (0, _base_theme.layoutStylesFunc)(newBaseThemePartials);
    var inputStyles = (0, _base_theme.inputStylesFunc)(newBaseThemePartials);
    var buttonStyles = (0, _base_theme.buttonStylesFunc)(newBaseThemePartials);
    var tableStyles = (0, _base_theme.tableStylesFunc)(newBaseThemePartials);
    var windowStyles = (0, _base_theme.windowStylesFunc)(newBaseThemePartials);
    var dateStyles = (0, _base_theme.dateStylesFunc)(newBaseThemePartials);
    var navigationStyles = (0, _base_theme.navigationStylesFunc)(newBaseThemePartials);
    var scrollBarStyles = (0, _base_theme.scrollBarStylesFunc)(newBaseThemePartials);

    var newAdditionalThemePartials = Object.freeze({
        layoutStyles: layoutStyles,
        inputStyles: inputStyles,
        buttonStyles: buttonStyles,
        tableStyles: tableStyles,
        windowStyles: windowStyles,
        dateStyles: dateStyles,
        navigationStyles: navigationStyles,
        scrollBarStyles: scrollBarStyles
    });

    var newTheme = (0, _ramda.mergeAll)([_theme.baseTheme, newBaseThemePartials, newAdditionalThemePartials]);

    return Object.freeze(newTheme);
};

// local imports