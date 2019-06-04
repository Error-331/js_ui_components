'use strict'; // external imports
// local imports

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.windowStylesFunc = void 0;

// exports
var windowStylesFunc = function windowStylesFunc(_ref) {
  var baseStyles = _ref.baseStyles;
  return Object.freeze({
    overlayOpacity: 0.5,
    overlayColor: baseStyles.mainQuaternaryColor
  });
};

exports.windowStylesFunc = windowStylesFunc;