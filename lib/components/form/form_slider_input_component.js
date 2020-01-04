'use strict'; // external imports

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

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

var _global_overlay_component = _interopRequireDefault(require("./../window/global_overlay_component"));

var _dom_helpers = require("@webfuturistics/design_components/lib/helpers/general/dom_helpers");

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

// styles definition
var useStyles = (0, _reactJss.createUseStyles)(function (theme) {
  return {
    componentContainer: {
      boxSizing: 'border-box',
      position: 'relative',
      display: 'flex',
      flexBasis: 'auto',
      flexShrink: 1,
      flexGrow: 0,
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'flex-start',
      alignItems: 'center',
      alignContent: 'flex-start',
      backgroundColor: 'yellow',
      '& > $trackContainer': {
        position: 'relative',
        flexBasis: 'auto',
        flexShrink: 1,
        flexGrow: 1,
        height: '1px',
        backgroundColor: theme.inputStyles.inactiveColor
      },
      '& > $handleContainer': {
        position: 'absolute',
        flexBasis: 'auto',
        flexShrink: 1,
        flexGrow: 0,
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        cursor: 'pointer',
        backgroundColor: theme.inputStyles.inactiveColor
      },
      '& > $handleDummyContainer': {
        position: 'relative',
        flexBasis: 'auto',
        flexShrink: 1,
        flexGrow: 0,
        width: '0px',
        height: '12px',
        borderRadius: '50%',
        cursor: 'pointer',
        backgroundColor: theme.inputStyles.inactiveColor
      }
    },
    trackContainer: {},
    handleContainer: {},
    handleDummyContainer: {}
  };
});
/**
 * Slider input component styled according to material-UI guidelines.
 * Component is intended to be used as a parameter for ['Redux-form' Field component](#reduxformsliderinputcomponent).
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation

function FormSliderInputComponent(props) {
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
      componentContainerLeft = _useState2[0],
      setComponentContainerLeft = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      componentContainerRight = _useState4[0],
      setComponentContainerRight = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      handleGrabbed = _useState6[0],
      setHandleGrabbed = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      clientX = _useState8[0],
      setClientX = _useState8[1]; // endregion
  // region callback hooks declaration


  var componentContainerRef = (0, _react.useCallback)(function ($node) {
    if (!(0, _ramda.isNil)($node)) {
      var _$node$getBoundingCli = $node.getBoundingClientRect(),
          left = _$node$getBoundingCli.left,
          right = _$node$getBoundingCli.right;

      setComponentContainerLeft(left);
      setComponentContainerRight(right);
    }
  }, []); // endregion
  // region event handler helpers

  var containerMouseDownHandler = function containerMouseDownHandler() {
    return setHandleGrabbed(true);
  };

  var overlayMouseLeaveHandler = function overlayMouseLeaveHandler() {
    return setHandleGrabbed(false);
  };

  var overlayMouseUpHandler = function overlayMouseUpHandler() {
    return setHandleGrabbed(false);
  };

  var overlayMouseMoveHandler = function overlayMouseMoveHandler(event) {
    if (handleGrabbed) {
      setClientX(event.clientX);
    }
  }; // endregion
  // region render helpers


  var renderOverlay = function renderOverlay() {
    return _react.default.createElement(_global_overlay_component.default, {
      show: handleGrabbed,
      opacity: 0,
      onMouseUp: overlayMouseUpHandler,
      onMouseMove: overlayMouseMoveHandler,
      onMouseLeave: overlayMouseLeaveHandler
    });
  };

  var renderHandleDummyContainer = function renderHandleDummyContainer() {
    var handleDummyContainer = classes.handleDummyContainer;
    return _react.default.createElement("div", {
      className: handleDummyContainer
    });
  };

  var renderHandleContainer = function renderHandleContainer() {
    var handleContainer = classes.handleContainer;
    var c = 0;

    if (!(0, _ramda.isNil)(clientX) && !(0, _ramda.isNil)(componentContainerLeft)) {
      c = clientX - componentContainerLeft;
    }

    var style = {
      left: "".concat(c, "px")
    };
    return _react.default.createElement("div", {
      className: handleContainer,
      style: style
    });
  };

  var renderTrackContainer = function renderTrackContainer() {
    var trackContainer = classes.trackContainer;
    return _react.default.createElement("div", {
      className: trackContainer
    });
  };

  var renderComponentContainer = function renderComponentContainer() {
    var componentContainer = classes.componentContainer;
    return _react.default.createElement("div", {
      ref: componentContainerRef,
      className: componentContainer,
      onMouseDown: containerMouseDownHandler //     onMouseLeave={containerMouseOutHandler}

    }, renderTrackContainer(), renderHandleContainer(), renderHandleDummyContainer(), renderOverlay());
  }; // endregion


  return renderComponentContainer();
} // exports


var _default = FormSliderInputComponent;
exports.default = _default;