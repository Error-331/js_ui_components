'use strict';

// exports

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _font_icon = require('./font_icon');

Object.keys(_font_icon).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _font_icon[key];
    }
  });
});

var _inline_svg_icon = require('./inline_svg_icon');

Object.keys(_inline_svg_icon).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _inline_svg_icon[key];
    }
  });
});