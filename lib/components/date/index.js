'use strict'; // exports

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.object.keys");

require("core-js/modules/web.dom-collections.for-each");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _simple_month_selector_component = require("./simple_month_selector_component");

Object.keys(_simple_month_selector_component).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _simple_month_selector_component[key];
    }
  });
});

var _simple_calender_component = require("./simple_calender_component");

Object.keys(_simple_calender_component).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _simple_calender_component[key];
    }
  });
});