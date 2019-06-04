'use strict'; // external imports
// local imports

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.materialDepthLevelsFunc = void 0;

// exports
var materialDepthLevelsFunc = function materialDepthLevelsFunc() {
  return Object.freeze({
    materialDepth1BoxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    materialDepth2BoxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    materialDepth3BoxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    materialDepth4BoxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    materialDepth5BoxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)'
  });
};

exports.materialDepthLevelsFunc = materialDepthLevelsFunc;