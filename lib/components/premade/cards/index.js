'use strict';

// exports

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vacancy_card = require('./vacancy_card1');

Object.keys(_vacancy_card).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _vacancy_card[key];
    }
  });
});