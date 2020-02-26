'use strict'; // exports

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.object.keys");

require("core-js/modules/web.dom-collections.for-each");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _font_faces = require("./font_faces");

Object.keys(_font_faces).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _font_faces[key];
    }
  });
});

var _table_styles = require("./table_styles");

Object.keys(_table_styles).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _table_styles[key];
    }
  });
});