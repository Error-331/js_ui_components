'use strict';

// exports

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regular_alert_component = require('./regular_alert_component');

Object.keys(_regular_alert_component).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _regular_alert_component[key];
    }
  });
});

var _snack_bar_component = require('./snack_bar_component');

Object.keys(_snack_bar_component).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _snack_bar_component[key];
    }
  });
});