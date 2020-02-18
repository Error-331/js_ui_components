'use strict'; // external imports
// type definitions
// helper functions implementation

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.parse-int");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getComputedStylePixelVal = void 0;

var getComputedStylePixelVal = function getComputedStylePixelVal($element, propertyName) {
  var computedValue = window.getComputedStyle($element).getPropertyValue(propertyName);
  var pxPostfixPos = computedValue.indexOf('px');

  if (pxPostfixPos === -1) {
    return null;
  } else {
    return parseInt(computedValue.substr(0, pxPostfixPos));
  }
}; // exports


exports.getComputedStylePixelVal = getComputedStylePixelVal;