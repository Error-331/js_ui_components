'use strict';

// exports

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alignment = require('./alignment');

Object.keys(_alignment).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _alignment[key];
    }
  });
});

var _structure = require('./structure');

Object.keys(_structure).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _structure[key];
    }
  });
});