'use strict'; // exports

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.keys");

require("core-js/modules/web.dom-collections.for-each");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _form_checkbox_variant1_component = require("./form_checkbox_variant1_component");

Object.keys(_form_checkbox_variant1_component).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _form_checkbox_variant1_component[key];
    }
  });
});

var _form_checkbox_variant2_component = require("./form_checkbox_variant2_component");

Object.keys(_form_checkbox_variant2_component).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _form_checkbox_variant2_component[key];
    }
  });
});

var _form_checkbox_variant3_component = require("./form_checkbox_variant3_component");

Object.keys(_form_checkbox_variant3_component).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _form_checkbox_variant3_component[key];
    }
  });
});