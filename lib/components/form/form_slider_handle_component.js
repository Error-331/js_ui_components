'use strict'; // external imports

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.define-property");

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

var _classnames = _interopRequireDefault(require("classnames"));

var _providers = require("./../../theming/providers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(Object(source)); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// styles definition
var useStyles = (0, _reactJss.createUseStyles)(function (theme) {
  return {
    componentContainer: {
      position: 'absolute',
      display: 'flex',
      flexBasis: 'auto',
      flexShrink: 1,
      flexGrow: 0,
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'flex-start',
      alignItems: 'center',
      alignContent: 'flex-start',
      width: 'auto',
      height: 'auto',
      cursor: 'pointer',
      '& > $handleKnob': {
        position: 'relative',
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        transition: 'box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        backgroundColor: theme.inputStyles.inactiveColor,
        '&:hover': {
          boxShadow: "0px 0px 0px 8px ".concat((0, _ramda.apply)(theme.colorUtilities.toRGBAStyleString, [].concat(_toConsumableArray(theme.colorUtilities.hexToRGBArray(theme.inputStyles.inactiveColor)), [0.2])))
        },
        '&.active': {
          boxShadow: "0px 0px 0px 12px ".concat((0, _ramda.apply)(theme.colorUtilities.toRGBAStyleString, [].concat(_toConsumableArray(theme.colorUtilities.hexToRGBArray(theme.inputStyles.inactiveColor)), [0.2])))
        }
      },
      '&.variant1': {
        '& > $handleKnob': {
          backgroundColor: theme.inputStyles.inactiveColor,
          '&:hover': {
            boxShadow: "0px 0px 0px 8px ".concat((0, _ramda.apply)(theme.colorUtilities.toRGBAStyleString, [].concat(_toConsumableArray(theme.colorUtilities.hexToRGBArray(theme.inputStyles.inactiveColor)), [0.2])))
          },
          '&.active': {
            boxShadow: "0px 0px 0px 12px ".concat((0, _ramda.apply)(theme.colorUtilities.toRGBAStyleString, [].concat(_toConsumableArray(theme.colorUtilities.hexToRGBArray(theme.inputStyles.inactiveColor)), [0.2])))
          }
        }
      },
      '&.variant2': {
        '& > $handleKnob': {
          backgroundColor: theme.inputStyles.alternateInputColor,
          '&:hover': {
            boxShadow: "0px 0px 0px 8px ".concat((0, _ramda.apply)(theme.colorUtilities.toRGBAStyleString, [].concat(_toConsumableArray(theme.colorUtilities.hexToRGBArray(theme.inputStyles.alternateInputColor)), [0.2])))
          },
          '&.active': {
            boxShadow: "0px 0px 0px 12px ".concat((0, _ramda.apply)(theme.colorUtilities.toRGBAStyleString, [].concat(_toConsumableArray(theme.colorUtilities.hexToRGBArray(theme.inputStyles.alternateInputColor)), [0.2])))
          }
        }
      }
    },
    handleKnob: {}
  };
});
/**
 * Slider handle (knob) component styled according to material-UI guidelines.
 * Component is intended to be used as part of ['Redux-form' slider input component](#/UI%20Components/Redux%20form/ReduxFormSliderInputComponent) or [form slider input component](#/UI%20Components/Form/FormSliderInputComponent).
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation

function FormSliderHandleComponent(props) {
  // region private variables declaration
  var handleVariant = (0, _ramda.defaultTo)(1, props.variant);
  var active = (0, _ramda.defaultTo)(false)(props.active);
  var style = (0, _ramda.defaultTo)({})(props.style);
  var knobStyle = (0, _ramda.defaultTo)({})(props.knobStyle);
  var knobHoverStyle = (0, _ramda.defaultTo)({})(props.knobHoverStyle);
  var activeKnobStyle = (0, _ramda.defaultTo)({}, props.activeKnobStyle); // endregion
  // region style hooks declaration

  var theme = (0, _reactJss.useTheme)();
  var classes = useStyles(_objectSpread({}, props, {
    theme: theme
  })); // endregion
  // region context hooks declaration

  var themeContext = (0, _react.useContext)(_providers.MainThemeContext); // endregion
  // region state hooks declaration

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      componentContainerWidth = _useState2[0],
      setComponentContainerWidth = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isOver = _useState4[0],
      setIsOver = _useState4[1]; // endregion
  // region state variables declaration


  var handlePositionXByContainerWidth = (0, _ramda.ifElse)((0, _ramda.any)(_ramda.isNil), (0, _ramda.always)(0), function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        handlePositionX = _ref2[0],
        handleContainerWidth = _ref2[1];

    return (0, _ramda.subtract)(handlePositionX, (0, _ramda.divide)(handleContainerWidth, 2));
  })([props.value, componentContainerWidth]); // endregion
  // region callback hooks declaration

  var componentContainerRef = (0, _react.useCallback)(function ($node) {
    if (!(0, _ramda.isNil)($node)) {
      var _$node$getBoundingCli = $node.getBoundingClientRect(),
          width = _$node$getBoundingCli.width;

      setComponentContainerWidth(width);
    }
  }, [themeContext.windowDimensions.innerWidth]); // endregion
  // region business logic
  // endregion
  // region event handler helpers

  var handleMouseOverHandler = function handleMouseOverHandler() {
    return setIsOver(true);
  };

  var handleMouseLeaveHandler = function handleMouseLeaveHandler() {
    return setIsOver(false);
  }; // endregion
  // region render helpers


  var renderHandleKnob = function renderHandleKnob() {
    var handleKnob = classes.handleKnob;
    var className = (0, _classnames.default)(handleKnob, {
      active: active
    });
    var style = (0, _ramda.pipe)((0, _ramda.mergeRight)(_ramda.__, knobStyle), isOver ? (0, _ramda.mergeRight)(_ramda.__, knobHoverStyle) : _ramda.identity, active ? (0, _ramda.mergeRight)(_ramda.__, activeKnobStyle) : _ramda.identity)({});
    return _react.default.createElement("div", {
      className: className,
      style: style
    });
  };

  var renderComponentContainer = function renderComponentContainer() {
    var componentContainer = classes.componentContainer;
    var className = (0, _classnames.default)(componentContainer, {
      variant1: (0, _ramda.equals)(handleVariant, 1),
      variant2: (0, _ramda.equals)(handleVariant, 2)
    });
    var preparedStyle = (0, _ramda.mergeRight)({
      left: "".concat(handlePositionXByContainerWidth, "px")
    }, style);
    return _react.default.createElement("div", {
      ref: componentContainerRef,
      onMouseOver: handleMouseOverHandler,
      onMouseLeave: handleMouseLeaveHandler,
      className: className,
      style: preparedStyle
    }, renderHandleKnob());
  }; // endregion
  // init render


  return renderComponentContainer();
} // exports


var _default = FormSliderHandleComponent;
exports.default = _default;