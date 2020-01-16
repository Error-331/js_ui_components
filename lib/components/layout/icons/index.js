'use strict'; // exports

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.object.keys");

require("core-js/modules/web.dom-collections.for-each");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _font_icon = require("./font_icon");

Object.keys(_font_icon).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _font_icon[key];
    }
  });
});

var _inline_svg_icon = require("./inline_svg_icon");

Object.keys(_inline_svg_icon).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _inline_svg_icon[key];
    }
  });
});

var _inline_image_icon = require("./inline_image_icon");

Object.keys(_inline_image_icon).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _inline_image_icon[key];
    }
  });
});