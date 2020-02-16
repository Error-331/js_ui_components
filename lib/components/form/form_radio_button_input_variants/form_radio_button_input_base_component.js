'use strict'; // external imports

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.weak-map");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ramda = require("ramda");

var _classnames = _interopRequireDefault(require("classnames"));

var _providers = require("./../../../theming/providers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// styles definition

/**
 * Component which includes base functionality to represent form radio button component.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation
function FormRadioButtonInputBaseComponent(props) {
  // region private variables declaration
  var id = (0, _ramda.defaultTo)('', props.id);
  var name = (0, _ramda.defaultTo)('', props.name);
  var value = (0, _ramda.defaultTo)(false, props.value);
  var checked = (0, _ramda.defaultTo)(false, props.checked);
  var appearance = (0, _ramda.defaultTo)('medium', props.appearance);
  var readOnly = (0, _ramda.defaultTo)(false, props.readOnly);
  var disabled = (0, _ramda.defaultTo)(false, props.disabled);
  var label = (0, _ramda.defaultTo)('', props.label);
  var labelPosition = (0, _ramda.defaultTo)(null, props.labelPosition);
  var classes = (0, _ramda.defaultTo)([], props.classes);
  var className = (0, _ramda.defaultTo)('', props.className);
  var style = (0, _ramda.defaultTo)({}, props.style);
  var onChange = (0, _ramda.defaultTo)(function () {}, props.onChange); // endregion
  // region style hooks declaration
  // endregion
  // region context hooks declaration

  var themeContext = (0, _react.useContext)(_providers.MainThemeContext); // endregion
  // region state hooks declaration
  // endregion
  // region effect hooks declaration
  // endregion
  // region state variables declaration
  // endregion
  // region ref hooks declaration
  // endregion
  // region callback hooks declaration
  // endregion
  // region business logic
  // endregion
  // region event handler helpers
  // endregion
  // region render helpers

  var renderInputIcon = function renderInputIcon() {
    var inputControlIcon = classes.inputControlIcon;
    return _react.default.createElement("div", {
      className: inputControlIcon
    });
  };

  var renderInputControlLabel = function renderInputControlLabel() {
    var disabled = props.disabled;
    var inputControlLabel = classes.inputControlLabel;
    var className = (0, _classnames.default)(inputControlLabel, {
      'disabled': disabled
    }, {
      'readonly': readOnly
    });
    return _react.default.createElement("label", {
      htmlFor: id,
      className: className
    }, renderInputIcon());
  };

  var renderInput = function renderInput() {
    var checkedParam = checked ? 'checked' : '';
    var disabledParam = disabled ? 'disabled' : undefined;
    var inputControl = classes.inputControl;
    var className = (0, _classnames.default)(inputControl, {
      'disabled': disabled
    });
    return _react.default.createElement("input", {
      className: className,
      disabled: disabledParam,
      checked: checkedParam,
      type: "radio",
      value: value,
      name: name,
      id: id,
      onChange: readOnly ? null : onChange
    });
  };

  var renderLabel = function renderLabel() {
    var disabled = props.disabled;
    var radioButtonLabel = classes.radioButtonLabel,
        radioButtonLeftLabel = classes.radioButtonLeftLabel,
        radioButtonRightLabel = classes.radioButtonRightLabel;
    var className = (0, _classnames.default)(radioButtonLabel, (0, _ramda.ifElse)((0, _ramda.equals)('left'), (0, _ramda.always)(radioButtonLeftLabel), (0, _ramda.always)(radioButtonRightLabel))(labelPosition), {
      'disabled': disabled
    });
    return _react.default.createElement("div", {
      className: className
    }, label);
  };

  var renderComponentContainer = function renderComponentContainer() {
    var componentContainer = classes.componentContainer;
    var containerClassName = (0, _classnames.default)(componentContainer, className);
    return _react.default.createElement("div", {
      className: containerClassName,
      style: style
    }, labelPosition === 'left' ? renderLabel() : null, renderInput(), renderInputControlLabel(), labelPosition === 'right' ? renderLabel() : null);
  }; // endregion
  // init


  return renderComponentContainer();
} // exports


var _default = FormRadioButtonInputBaseComponent;
exports.default = _default;