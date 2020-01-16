'use strict'; // exports

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.object.keys");

require("core-js/modules/web.dom-collections.for-each");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chip_collection_component = require("./chip_collection_component");

Object.keys(_chip_collection_component).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _chip_collection_component[key];
    }
  });
});