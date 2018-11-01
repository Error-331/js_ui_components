'use strict';

// exports

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typewriter_visual_effect = require('./typewriter_visual_effect');

Object.keys(_typewriter_visual_effect).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _typewriter_visual_effect[key];
    }
  });
});