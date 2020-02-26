'use strict'; // external imports

require("core-js/modules/es.symbol");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.keys");

require("core-js/modules/web.dom-collections.for-each");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.stylesFunc = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

var _form_radio_button_input_base_component = _interopRequireDefault(require("./form_radio_button_input_base_component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// styles definition
var stylesFunc = function stylesFunc(theme) {
  return {
    componentContainer: {
      boxSizing: 'border-box',
      display: 'flex',
      flexBasis: 'auto',
      flexGrow: 0,
      flexShrink: 1,
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'flex-start',
      alignItems: 'center',
      alignContent: 'flex-start',
      '& > $radioButtonLabel': {
        boxSizing: 'border-box',
        flexBasis: 'auto',
        flexShrink: 1,
        flexGrow: 0,
        fontFamily: theme.inputStyles.fontStack,
        fontSize: theme.inputStyles.fontSize,
        color: theme.inputStyles.labelColor,
        '&.disabled': {
          color: theme.inputStyles.disabledColor
        }
      },
      '& > $radioButtonLeftLabel': {
        paddingRight: "".concat(theme.inputStyles.switchLabelOffset, "px")
      },
      '& > $radioButtonRightLabel': {
        paddingLeft: "".concat(theme.inputStyles.switchLabelOffset, "px")
      },
      '& > $inputControl': {
        display: 'none',
        '&:checked + $inputControlLabel > $inputControlIcon': {
          transform: 'scale(1)'
        },
        '&:checked + $inputControlLabel.disabled > $inputControlIcon': {
          backgroundColor: theme.inputStyles.disabledColor
        }
      },
      '& > $inputControlLabel': {
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'stretch',
        alignContent: 'flex-start',
        width: '20px',
        height: '20px',
        padding: '3px',
        borderRadius: '50%',
        border: "2px solid ".concat(theme.inputStyles.switchSliderActiveBodyBGColor),
        cursor: 'pointer',
        '& > $inputControlIcon': {
          flexBasis: 'auto',
          flexShrink: 0,
          flexGrow: 1,
          borderRadius: '50%',
          backgroundColor: theme.inputStyles.switchSliderHandleActive,
          transform: 'scale(0)',
          transition: 'all .3s ease',
          transitionProperty: 'transform, border-color'
        }
      },
      '& > $inputControlLabel.readonly': {
        cursor: 'initial'
      },
      '& > $inputControlLabel.disabled': {
        borderColor: theme.inputStyles.disabledColor,
        cursor: 'initial'
      }
    },
    radioButtonLabel: {},
    radioButtonLeftLabel: {},
    radioButtonRightLabel: {},
    inputControl: {},
    inputControlLabel: {},
    inputControlIcon: {}
  };
};

exports.stylesFunc = stylesFunc;
var useStyles = (0, _reactJss.createUseStyles)(stylesFunc);
/**
 * Radio button input component (variant 1) styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation

function FormRadioButtonInputVariant1Component(props) {
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


var _default = FormRadioButtonInputVariant1Component;
exports.default = _default;