'use strict';

// exports

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regular_card_component = require('./regular_card_component');

Object.keys(_regular_card_component).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _regular_card_component[key];
    }
  });
});

var _regular_card_header_component = require('./regular_card_header_component');

Object.keys(_regular_card_header_component).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _regular_card_header_component[key];
    }
  });
});