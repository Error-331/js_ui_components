'use strict';

// exports

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _base_styles = require('./base_styles');

Object.keys(_base_styles).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _base_styles[key];
    }
  });
});

var _color_palette = require('./color_palette');

Object.keys(_color_palette).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _color_palette[key];
    }
  });
});