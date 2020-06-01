'use strict'; // external imports

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.seal");

require("core-js/modules/es.parse-int");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fontSizeUtilities = void 0;

var _ramda = require("ramda");

// exports
var fontSizeUtilities = Object.seal({
  parseFontSizePX: function parseFontSizePX(fontSizePX) {
    return (0, _ramda.pipe)(_ramda.toLower, (0, _ramda.ifElse)(function (fontSizePX) {
      return (0, _ramda.gt)((0, _ramda.indexOf)('px', fontSizePX), -1);
    }, (0, _ramda.pipe)((0, _ramda.indexOf)('px'), function (pxPos) {
      return fontSizePX.substring(0, pxPos);
    }, (0, _ramda.ifElse)(function (fontSize) {
      return (0, _ramda.gt)((0, _ramda.length)(fontSize), 0);
    }, function (fontSize) {
      return parseInt(fontSize);
    }, (0, _ramda.always)(null))), (0, _ramda.always)(null)))(fontSizePX);
  }
});
exports.fontSizeUtilities = fontSizeUtilities;