'use strict';

// exports

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regular_table_component = require('./regular_table_component');

Object.keys(_regular_table_component).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _regular_table_component[key];
    }
  });
});