'use strict'; // external imports

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.assign");

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

var _testUtils = require("react-dom/test-utils");

var _ramda = require("ramda");

var _dom_helpers = require("@webfuturistics/design_components/lib/helpers/general/dom_helpers");

var _redux_form_constants = require("./../../theming/constants/redux_form_constants");

var _form_radio_button_input_variant1_component = _interopRequireDefault(require("./form_radio_button_input_variants/form_radio_button_input_variant1_component"));

var _form_radio_button_input_variant2_component = _interopRequireDefault(require("./form_radio_button_input_variants/form_radio_button_input_variant2_component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// styles definition

/**
 * Radio button input component styled according to material-UI guidelines.
 * Component is intended to be used as a parameter for ['Redux-form' Field component](#reduxformradiobuttoninputcomponent).
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation
function FormRadioButtonInputComponent(props) {
  // region private variables declaration
  var variant = (0, _ramda.defaultTo)(1, props.variant);
  var customComponent = (0, _ramda.defaultTo)(null, props.customComponent);
  var inputData = (0, _ramda.defaultTo)(_redux_form_constants.DEFAULT_REDUX_FORM_FIELD_COMPONENT_INPUT_DATA_PROPS, props.input);
  var className = (0, _ramda.defaultTo)('', props.className);
  var componentContainerStyles = (0, _ramda.defaultTo)({})(props.componentContainerStyles);
  var style = Object.assign({}, componentContainerStyles, (0, _ramda.defaultTo)({})(props.style)); // endregion
  // region style hooks declaration
  // endregion
  // region context hooks declaration
  // endregion
  // region state hooks declaration

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      id = _useState2[0],
      setId = _useState2[1]; // endregion
  // region effect hooks declaration


  (0, _react.useEffect)(function () {
    return setId(createInputId);
  }, []); // endregion
  // region state variables declaration
  // endregion
  // region ref hooks declaration
  // endregion
  // region callback hooks declaration
  // endregion
  // region business logic

  var createInputId = function createInputId() {
    var name = inputData.name;
    var randomIdNumber = (0, _dom_helpers.generateRandomIdNumber)();

    if ((0, _ramda.isNil)(name)) {
      throw new Error('Name cannot be null, cannot create input ID');
    }

    return "radio_button_input_".concat(name, "_").concat(randomIdNumber);
  }; // endregion
  // region event handler helpers
  // endregion
  // region render helpers


  var renderComponentVariant = function renderComponentVariant(componentVariantProps) {
    switch (variant) {
      case 1:
        return _react.default.createElement(_form_radio_button_input_variant1_component.default, componentVariantProps);

      case 2:
        return _react.default.createElement(_form_radio_button_input_variant2_component.default, componentVariantProps);

      default:
        return null;
    }
  };

  var renderCustomComponent = function renderCustomComponent(componentVariantProps) {
    return (0, _ramda.ifElse)(_testUtils.isElement, function (elm) {
      return _react.default.cloneElement(elm, _objectSpread({}, elm.props, componentVariantProps));
    }, function (elm) {
      return _react.default.createElement(elm, _objectSpread({}, componentVariantProps));
    })(customComponent);
  };

  var render = function render() {
    var name = inputData.name,
        value = inputData.value,
        checked = inputData.checked,
        onChange = inputData.onChange;
    var readOnly = props.readOnly,
        disabled = props.disabled,
        labelPosition = props.labelPosition,
        label = props.label;
    var componentVariantProps = {
      id: id,
      name: name,
      value: value,
      checked: checked,
      readOnly: readOnly,
      disabled: disabled,
      labelPosition: labelPosition,
      label: label,
      onChange: onChange,
      className: className,
      style: style
    };

    if (!(0, _ramda.isNil)(customComponent)) {
      return renderCustomComponent(componentVariantProps);
    } else {
      return renderComponentVariant(componentVariantProps);
    }
  }; // endregion
  // init


  return render();
}

FormRadioButtonInputComponent.displayName = 'FormRadioButtonInputComponent'; // exports

var _default = FormRadioButtonInputComponent;
exports.default = _default;