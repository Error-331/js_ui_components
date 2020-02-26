'use strict'; // exports

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.object.keys");

require("core-js/modules/web.dom-collections.for-each");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typewriter_visual_effect = require("./typewriter_visual_effect");

Object.keys(_typewriter_visual_effect).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _typewriter_visual_effect[key];
    }
  });
});

var _slide_visual_effect = require("./slide_visual_effect");

Object.keys(_slide_visual_effect).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _slide_visual_effect[key];
    }
  });
});