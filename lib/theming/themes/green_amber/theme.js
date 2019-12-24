'use strict'; // external imports

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.greenAmber = void 0;

var _ramda = require("ramda");

var baseTheme = _interopRequireWildcard(require("./../base_theme"));

var _style_partials = require("./style_partials");

var _theme_helpers = require("./../../helpers/theme_helpers");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// local imports
// exports
var greenAmber = (0, _theme_helpers.extendTheme)(baseTheme.fontFacesFunc, baseTheme.fontStacksFunc, _style_partials.colorPaletteFunc, baseTheme.materialDepthLevelsFunc, _style_partials.baseStylesFunc);
exports.greenAmber = greenAmber;