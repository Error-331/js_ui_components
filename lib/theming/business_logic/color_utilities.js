'use strict'; // https://github.com/PimpTrizkit/PJs/wiki/12.-Shade,-Blend-and-Convert-a-Web-Color-(pSBC.js)
// https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors/13542669#13542669
// https://stackoverflow.com/questions/21646738/convert-hex-to-rgba
// external imports

require("core-js/modules/es.array.join");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.seal");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.parse-int");

require("core-js/modules/es.regexp.to-string");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colorUtilities = void 0;

var _ramda = require("ramda");

// exports
var colorUtilities = Object.seal({
  hexToRGBArray: function hexToRGBArray(hexValue) {
    return [parseInt(hexValue.slice(1, 3), 16), parseInt(hexValue.slice(3, 5), 16), parseInt(hexValue.slice(5, 7), 16)];
  },
  toRGBAStyleString: function toRGBAStyleString(red, green, blue, alpha) {
    return (0, _ramda.ifElse)(_ramda.isNil, (0, _ramda.always)("rgba(".concat((0, _ramda.join)(',', [red, green, blue]), ")")), (0, _ramda.always)("rgba(".concat((0, _ramda.join)(',', [red, green, blue, alpha]), ")")))(alpha);
  },
  shadeColorFast: function shadeColorFast(hexColorString, shadingPercent) {
    var hexColor = parseInt(hexColorString.slice(1), 16);
    var rangeCap = shadingPercent < 0 ? 0 : 255;
    var padding = shadingPercent < 0 ? shadingPercent * -1 : shadingPercent;
    var red = hexColor >> 16;
    var green = hexColor >> 8 & 0x00FF;
    var blue = hexColor & 0x0000FF;
    var shadedRed = (Math.round((rangeCap - red) * padding) + red) * 0x10000;
    var shadedGreen = (Math.round((rangeCap - green) * padding) + green) * 0x100;
    var shadedBlue = Math.round((rangeCap - blue) * padding) + blue;
    var shadedColorHex = 0x1000000 + shadedRed + shadedGreen + shadedBlue;
    return "#".concat(shadedColorHex.toString(16).slice(1));
  }
});
exports.colorUtilities = colorUtilities;