'use strict';

// exports

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _global_overlay_component = require('./global_overlay_component');

Object.keys(_global_overlay_component).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _global_overlay_component[key];
    }
  });
});

var _modal_component = require('./modal_component');

Object.keys(_modal_component).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _modal_component[key];
    }
  });
});