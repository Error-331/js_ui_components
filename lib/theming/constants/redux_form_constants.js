'use strict'; // external imports

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_REDUX_FORM_FIELD_COMPONENT_INPUT_DATA_PROPS = exports.onFocus = exports.onDragStart = exports.onDrop = exports.onChange = exports.onBlur = exports.checked = exports.value = exports.name = void 0;

var _ramda = require("ramda");

// constants definition
var name = '';
exports.name = name;
var value = '';
exports.value = value;
var checked = false;
exports.checked = checked;

var onBlur = function onBlur() {};

exports.onBlur = onBlur;

var onChange = function onChange() {};

exports.onChange = onChange;

var onDrop = function onDrop() {};

exports.onDrop = onDrop;

var onDragStart = function onDragStart() {};

exports.onDragStart = onDragStart;

var onFocus = function onFocus() {};

exports.onFocus = onFocus;
var DEFAULT_REDUX_FORM_FIELD_COMPONENT_INPUT_DATA_PROPS = (0, _ramda.clone)({
  name: name,
  value: value,
  checked: checked,
  onBlur: onBlur,
  onChange: onChange,
  onDrop: onDrop,
  onDragStart: onDragStart,
  onFocus: onFocus
});
exports.DEFAULT_REDUX_FORM_FIELD_COMPONENT_INPUT_DATA_PROPS = DEFAULT_REDUX_FORM_FIELD_COMPONENT_INPUT_DATA_PROPS;