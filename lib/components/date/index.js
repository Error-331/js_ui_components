'use strict';

// exports

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _simple_small_calender_component = require('./simple_small_calender_component');

Object.keys(_simple_small_calender_component).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _simple_small_calender_component[key];
    }
  });
});