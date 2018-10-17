'use strict';

// exports

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cards = require('./cards');

Object.keys(_cards).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _cards[key];
    }
  });
});