'use strict'; // external imports

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.weak-map");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactJss = require("react-jss");

var _ramda = require("ramda");

var _modal_dialog_box_component = _interopRequireDefault(require("./../../window/modal_dialog_box_component"));

var _form_text_input_component = _interopRequireDefault(require("./../form_text_input_component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// styles definition
var useStyles = (0, _reactJss.createUseStyles)(function (theme) {
  return {
    componentContainer: {}
  };
});
/**
 * URL edit dialog box styled according to material-UI guidelines.
 * Component should be used as part of ['ReduxFormRichTextInputComponent' Field component](#/UI%20Components/Redux%20form/ReduxFormRichTextInputComponent).
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation

function LinkEditDialogBoxComponent(props) {
  // region private variables declaration
  var shouldShow = (0, _ramda.defaultTo)(false)(props.show);
  var inputName = (0, _ramda.defaultTo)('')(props.name);
  var url = (0, _ramda.defaultTo)(null)(props.url);
  var dialogBoxTitle = (0, _ramda.isNil)(url) || (0, _ramda.isEmpty)(url) ? 'Enter link' : 'Edit link';
  var onClickSave = (0, _ramda.defaultTo)(function () {})(props.onClickSave);
  var onClickCancel = (0, _ramda.defaultTo)(function () {})(props.onClickCancel);
  var dialogBoxButtons = [{
    label: 'save',
    onClick: function onClick(event) {
      return onClickSave(textInputValue, event);
    }
  }, {
    variant: 'outlined',
    label: 'cancel',
    onClick: onClickCancel
  }]; // endregion
  // region style hooks declaration

  var theme = (0, _reactJss.useTheme)();
  var classes = useStyles(_objectSpread({}, props, {
    theme: theme
  })); // endregion
  // region context hooks declaration
  // endregion
  // region state hooks declaration

  var _useState = (0, _react.useState)(url),
      _useState2 = _slicedToArray(_useState, 2),
      textInputValue = _useState2[0],
      setTextInputValue = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      componentActive = _useState4[0],
      setComponentActive = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      componentTouched = _useState6[0],
      setComponentTouched = _useState6[1]; // endregion
  // region effect hooks declaration
  // endregion
  // region state variables declaration
  // endregion
  // region ref hooks declaration
  // endregion
  // region callback hooks declaration
  // endregion
  // region custom hooks declaration
  // endregion
  // region business logic
  // endregion
  // region event handler helpers


  var onComponentContainerFocus = function onComponentContainerFocus(event) {
    setComponentActive(true);
  };

  var onComponentContainerBlur = function onComponentContainerBlur(event) {
    if (componentTouched === false) {
      setComponentTouched(true);
    }

    setComponentActive(false);
  };

  var onTextInputChange = function onTextInputChange(event) {
    event.preventDefault();
    var value = (0, _ramda.pathOr)(textInputValue, ['target', 'value'], event);
    setTextInputValue(value);
  }; // endregion
  // region render helpers


  var renderTextInput = function renderTextInput() {
    var name = inputName;
    var initial = url;
    var value = textInputValue;
    var pristine = (0, _ramda.equals)(value, initial);
    var dirty = !pristine;
    var textInputMetaProps = {
      initial: initial,
      pristine: pristine,
      dirty: dirty,
      active: componentActive,
      touched: componentTouched,
      error: null,
      warning: null
    };
    var textInputProps = {
      checked: false,
      name: "rich_text_link_edit_".concat(name),
      value: textInputValue,
      onChange: onTextInputChange,
      onBlur: function onBlur() {},
      onDrop: function onDrop() {},
      onDragStart: function onDragStart() {},
      onFocus: function onFocus() {}
    };
    return _react.default.createElement(_form_text_input_component.default, {
      type: "text",
      readOnly: false,
      disabled: false,
      label: null,
      placeholder: "http://...",
      iconClassNames: "fas fa-link",
      meta: textInputMetaProps,
      input: textInputProps
    });
  };

  var renderTextInputContainer = function renderTextInputContainer() {
    return _react.default.createElement("div", {
      onBlur: onComponentContainerBlur,
      onFocus: onComponentContainerFocus
    }, renderTextInput());
  };

  var renderDialogBox = function renderDialogBox() {
    return _react.default.createElement(_modal_dialog_box_component.default, {
      closable: true,
      closeOnOverlayClick: false,
      show: shouldShow,
      loading: false,
      title: dialogBoxTitle,
      buttons: dialogBoxButtons,
      onClose: onClickCancel,
      bodyOuterStyles: {
        width: '500px'
      }
    }, renderTextInputContainer());
  }; // endregion
  // init


  return renderDialogBox();
} // exports


var _default = LinkEditDialogBoxComponent;
exports.default = _default;