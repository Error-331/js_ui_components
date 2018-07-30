'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.blueGreyRed = undefined;

var _ramda = require('ramda');

var _base_theme = require('./../base_theme');

var baseTheme = _interopRequireWildcard(_base_theme);

var _style_partials = require('./style_partials');

var _theme_helpers = require('./../../helpers/theme_helpers');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// exports
var blueGreyRed = exports.blueGreyRed = (0, _theme_helpers.extendTheme)(baseTheme.fontFacesFunc, baseTheme.fontStacksFunc, _style_partials.colorPaletteFunc, baseTheme.materialDepthLevelsFunc, _style_partials.baseStylesFunc);

// local imports