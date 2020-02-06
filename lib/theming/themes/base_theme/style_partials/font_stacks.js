'use strict'; //external imports
// local imports

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fontStacksFunc = void 0;

// exports
var fontStacksFunc = function fontStacksFunc() {
  return Object.freeze({
    thinFontFamilyStack: '"Roboto-Thin", "Helvetica Neue", Helvetica, Arial, sans-serif',
    lightFontFamilyStack: '"Roboto-Light", "Helvetica Neue", Helvetica, Arial, sans-serif',
    regularFontFamilyStack: '"Roboto-Regular", "Helvetica Neue", Helvetica, Arial, sans-serif',
    boldFontFamilyStack: '"Roboto-Bold", "Helvetica Neue", Helvetica, Arial, sans-serif'
  });
};

exports.fontStacksFunc = fontStacksFunc;