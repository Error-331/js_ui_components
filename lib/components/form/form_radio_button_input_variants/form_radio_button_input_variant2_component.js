'use strict'; // external imports

require("core-js/modules/es.symbol");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.keys");

require("core-js/modules/web.dom-collections.for-each");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

var _ramda = require("ramda");

var _form_radio_button_input_base_component = _interopRequireDefault(require("./form_radio_button_input_base_component"));

var _form_radio_button_input_variant1_component = require("./form_radio_button_input_variant1_component");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(Object(source)); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// styles definition
var useStyles = (0, _reactJss.createUseStyles)(function (theme) {
  return (0, _ramda.mergeDeepRight)((0, _form_radio_button_input_variant1_component.stylesFunc)(theme), {
    componentContainer: {
      '& > $radioButtonLabel': {
        color: theme.inputStyles.alternateInputColor
      },
      '& > $inputControlLabel': {
        border: "2px solid ".concat(theme.inputStyles.alternateInputColor),
        '& > $inputControlIcon': {
          backgroundColor: theme.inputStyles.alternateInputColor
        }
      }
    },
    radioButtonLabel: {},
    inputControlLabel: {},
    inputControlIcon: {}
  });
});
/**
 * Radio button input component (variant 2) styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation

function FormRadioButtonInputVariant2Component(props) {
  // region private variables declaration
  // endregion
  // region style hooks declaration
  var theme = (0, _reactJss.useTheme)();
  var classes = useStyles(_objectSpread({}, props, {
    theme: theme
  })); // endregion
  // region context hooks declaration
  // endregion
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

  var render = function render() {
    return _react.default.createElement(_form_radio_button_input_base_component.default, _extends({}, props, {
      classes: classes
    }));
  }; // endregion
  // init


  return render();
} // exports


var _default = FormRadioButtonInputVariant2Component;
exports.default = _default;