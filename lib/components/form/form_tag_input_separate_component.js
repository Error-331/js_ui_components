'use strict'; // external imports

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.find-index");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.replace");

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

var _immutable = require("immutable");

var _form_text_input_component = _interopRequireDefault(require("./../form/form_text_input_component"));

var _chip_collection_component = _interopRequireDefault(require("./../collections/chip_collection_component"));

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
    componentContainer: {
      boxSizing: 'border-box',
      display: 'flex',
      flexBasis: 'auto',
      flexGrow: 0,
      flexShrink: 1,
      flexDirection: 'column',
      flexWrap: 'nowrap',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      alignContent: 'flex-start',
      '& > $textInputContainer': {
        boxSizing: 'border-box',
        flexBasis: 'auto',
        flexShrink: 1,
        flexGrow: 0
      },
      '& > $tagsCollectionContainer': {
        boxSizing: 'border-box',
        flexBasis: 'auto',
        flexShrink: 1,
        flexGrow: 0,
        marginTop: "".concat(theme.layoutStyles.sectionVerticalSpacing, "px")
      }
    },
    textInputContainer: {},
    tagsCollectionContainer: {}
  };
});
/**
 * Tag input component (with separate tag display section) styled according to material-UI guidelines.
 * Component is intended to be used as a parameter for ['Redux-form' Field component](#/UI%20Components/Redux%20form/ReduxFormTagInputSeparateComponent).
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation

function FormTagInputSeparateComponent(props) {
  // region private variables declaration
  var variant = (0, _ramda.defaultTo)(1, props.variant);
  var readOnly = (0, _ramda.defaultTo)(false, props.readOnly);
  var disabled = (0, _ramda.defaultTo)(false, props.disabled);
  var customTextInputComponent = (0, _ramda.defaultTo)(null, props.customTextInputComponent);
  var metaProps = (0, _ramda.defaultTo)({}, props.meta);
  var inputProps = (0, _ramda.defaultTo)({}, props.input); // endregion
  // region style hooks declaration

  var theme = (0, _reactJss.useTheme)();
  var classes = useStyles(_objectSpread({}, props, {
    theme: theme
  })); // endregion
  // region context hooks declaration
  // endregion
  // region state hooks declaration

  var _useState = (0, _react.useState)(''),
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


  var findTagIndexByData = function findTagIndexByData(currentTagData) {
    var value = (0, _ramda.pathOr)([], ['value'], inputProps);

    if (_immutable.List.isList(value)) {
      return value.findIndex(function (listValue) {
        var data = listValue.get('data');
        return !(0, _ramda.isNil)(data) && data === currentTagData;
      });
    } else {
      return (0, _ramda.findIndex)((0, _ramda.propEq)('data', currentTagData))(value);
    }
  };

  var addTagFromTextInput = function addTagFromTextInput() {
    if ((0, _ramda.isNil)(textInputValue) || textInputValue === '') {
      return false;
    }

    var onChange = (0, _ramda.pathOr)(function () {}, ['onChange'], inputProps);
    var value = (0, _ramda.pathOr)([], ['value'], inputProps);
    value = (0, _ramda.is)(Object, value) ? value : [];
    value = _immutable.List.isList(value) ? value : (0, _ramda.clone)(value);
    var newValue = {
      data: textInputValue,
      clickable: false,
      // TODO: better sanitization
      label: (0, _ramda.replace)(',', '', textInputValue),
      labelPosition: 'left',
      rightIconClassName: 'fas fa-times-circle'
    };
    var valueNotExist = findTagIndexByData(textInputValue) === -1;

    if (_immutable.List.isList(value)) {
      if (valueNotExist) {
        onChange(value.push((0, _immutable.Map)(newValue)));
        return true;
      }
    } else {
      if (valueNotExist) {
        value.push(newValue);
        onChange(value);
        return true;
      }
    }

    return false;
  }; // endregion
  // region event handler helpers


  var onClickTagCloseButton = function onClickTagCloseButton(event, currentTagData) {
    var onChange = (0, _ramda.pathOr)(function () {}, ['onChange'], inputProps);
    var value = (0, _ramda.pathOr)([], ['value'], inputProps);
    var tagIndex = findTagIndexByData(currentTagData);

    if (_immutable.List.isList(value)) {
      onChange(value.delete(tagIndex));
    } else {
      onChange((0, _ramda.remove)(tagIndex, 1, value));
    }
  };

  var onComponentContainerFocus = function onComponentContainerFocus(event) {
    setComponentActive(true);
  };

  var onComponentContainerBlur = function onComponentContainerBlur(event) {
    if (componentTouched === false) {
      setComponentTouched(true);
    }

    setComponentActive(false);
  };

  var onKeyPressTextInput = function onKeyPressTextInput(event) {
    if (event.key === 'Enter' || event.keyCode === 13 || event.key === ',' || event.keyCode === 188) {
      event.preventDefault();

      if (addTagFromTextInput()) {
        setTextInputValue('');
      }
    }
  };

  var onTextInputChange = function onTextInputChange(event) {
    event.preventDefault();
    var value = (0, _ramda.pathOr)(textInputValue, ['target', 'value'], event);
    setTextInputValue(value);
  }; // endregion
  // region render helpers


  var renderTagsCollection = function renderTagsCollection() {
    var value = (0, _ramda.pathOr)([], ['value'], inputProps);

    if (_immutable.List.isList(value)) {
      value = (0, _ramda.map)(function (tagData) {
        return tagData.toObject();
      }, value.toArray());
    }

    value = (0, _ramda.map)(function (tagData) {
      tagData.clickable = false;
      tagData.rightIconClickable = true;
      tagData.rightIconClassName = 'fas fa-times-circle';
      tagData.onRightIconClick = onClickTagCloseButton;
      return tagData;
    }, value);
    return _react.default.createElement(_chip_collection_component.default, {
      data: value
    });
  };

  var renderTagsCollectionContainer = function renderTagsCollectionContainer() {
    var tagsCollectionContainer = classes.tagsCollectionContainer;
    return _react.default.createElement("div", {
      className: tagsCollectionContainer
    }, renderTagsCollection());
  };

  var renderTextInput = function renderTextInput() {
    var initial = (0, _ramda.pathOr)(false, ['initial'], metaProps);
    var name = (0, _ramda.pathOr)(false, ['name'], inputProps);
    var value = (0, _ramda.pathOr)(false, ['value'], inputProps);
    var pristine = false;

    if (_immutable.List.isList(value)) {
      pristine = value.equals(initial);
    } else {
      pristine = (0, _ramda.equals)(value, initial);
    }

    var dirty = !pristine;
    var textInputMetaProps = {
      initial: null,
      pristine: pristine,
      dirty: dirty,
      active: componentActive,
      touched: componentTouched,
      error: null,
      warning: null
    };
    var textInputProps = {
      checked: false,
      name: "tags_".concat(name),
      value: textInputValue,
      onChange: onTextInputChange,
      onBlur: function onBlur() {},
      onDrop: function onDrop() {},
      onDragStart: function onDragStart() {},
      onFocus: function onFocus() {}
    };
    return _react.default.createElement(_form_text_input_component.default, _defineProperty({
      customComponent: props.customTextInputComponent,
      variant: variant,
      type: "text",
      readOnly: readOnly,
      disabled: disabled,
      label: null,
      placeholder: null,
      iconClassNames: null,
      meta: textInputMetaProps,
      input: textInputProps,
      onKeyPress: onKeyPressTextInput
    }, "customComponent", customTextInputComponent));
  };

  var renderTextInputContainer = function renderTextInputContainer() {
    var textInputContainer = classes.textInputContainer;
    return _react.default.createElement("div", {
      className: textInputContainer
    }, renderTextInput());
  };

  var renderComponentContainer = function renderComponentContainer() {
    var componentContainer = classes.componentContainer;
    var onDrop = (0, _ramda.pathOr)(function () {}, ['onDrop'], inputProps);
    var onDragStart = (0, _ramda.pathOr)(function () {}, ['onDragStart'], inputProps);
    return _react.default.createElement("div", {
      onBlur: onComponentContainerBlur,
      onFocus: onComponentContainerFocus,
      onDrop: onDrop,
      onDragStart: onDragStart,
      className: componentContainer
    }, renderTextInputContainer(), renderTagsCollectionContainer());
  }; // endregion


  return renderComponentContainer();
} // exports


var _default = FormTagInputSeparateComponent;
exports.default = _default;