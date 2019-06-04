'use strict'; // external imports
// local imports

require("core-js/modules/es.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fontFacesFunc = void 0;

// exports
var fontFacesFunc = function fontFacesFunc(fontFaces) {
  return [fontFaces.RobotoRegular, fontFaces.RobotoBold];
};

exports.fontFacesFunc = fontFacesFunc;