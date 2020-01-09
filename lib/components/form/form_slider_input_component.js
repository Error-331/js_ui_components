'use strict'; // external imports

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.array.reduce");

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

var _classnames = _interopRequireDefault(require("classnames"));

var _ramda = require("ramda");

var _dom_helpers = require("@webfuturistics/design_components/lib/helpers/general/dom_helpers");

var _form_slider_handle_component = _interopRequireDefault(require("./form_slider_handle_component"));

var _global_overlay_component = _interopRequireDefault(require("./../window/global_overlay_component"));

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
      '& > $trackContainer': {
        position: 'relative',
        flexBasis: 'auto',
        flexShrink: 1,
        flexGrow: 1,
        height: '1px',
        backgroundColor: theme.inputStyles.inactiveColor
      },
      '& > $trackProgressContainer': {
        position: 'absolute',
        flexBasis: 'auto',
        flexShrink: 0,
        flexGrow: 0,
        width: '0px',
        height: '1px',
        backgroundColor: theme.inputStyles.activeColor
      },
      '&.variant1': {
        '& > $trackContainer': {
          backgroundColor: theme.inputStyles.inactiveColor
        },
        '& > $trackProgressContainer': {
          backgroundColor: theme.inputStyles.activeColor
        }
      },
      '&.variant2': {
        '& > $trackContainer': {
          backgroundColor: theme.inputStyles.alternateInputColor
        },
        '& > $trackProgressContainer': {
          height: '2px',
          backgroundColor: theme.inputStyles.alternateInputColor
        }
      }
    },
    trackContainer: {},
    trackProgressContainer: {},
    handleDummyContainer: {}
  };
});
var dummyHandleStyles = {
  position: 'relative',
  width: '0px'
};
/**
 * Slider input component styled according to material-UI guidelines.
 * Component is intended to be used as a parameter for ['Redux-form' Field component](#reduxformsliderinputcomponent).
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation
// TODO: capture 'mouseup' event not on overlay but on document

function FormSliderInputComponent(props) {
  // region private variables declaration
  var sliderMin = (0, _ramda.defaultTo)(0, props.min);
  var sliderMax = (0, _ramda.defaultTo)(100, props.max);
  var sliderStep = (0, _ramda.defaultTo)(1, props.step);
  var sliderVariant = (0, _ramda.defaultTo)(1, props.variant);

  var _defaultTo = (0, _ramda.defaultTo)({}, props.input),
      value = _defaultTo.value,
      onChange = _defaultTo.onChange;

  var _defaultTo2 = (0, _ramda.defaultTo)({}, props.meta),
      initial = _defaultTo2.initial;

  initial = !(0, _ramda.isNil)(initial) && !(0, _ramda.isNil)(initial.toObject) ? initial.toObject() : initial;
  value = (0, _ramda.defaultTo)(null)(value);
  value = (0, _ramda.isEmpty)(value) ? null : value;
  value = !(0, _ramda.isNil)(value) && !(0, _ramda.isNil)(value.toObject) ? value.toObject() : value; // endregion
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
      initialHandleId = _useState2[0],
      setInitialHandleId = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      grabbedHandleId = _useState4[0],
      setGrabbedHandleId = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      componentContainerLeft = _useState6[0],
      setComponentContainerLeft = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      componentContainerRight = _useState8[0],
      setComponentContainerRight = _useState8[1]; // endregion
  // region effect hooks declaration


  (0, _react.useEffect)(function () {
    return setInitialHandleId("handle_".concat((0, _dom_helpers.generateRandomIdNumber)()));
  }, []); // endregion
  // region state variables declaration

  var sliderWidth = (0, _ramda.ifElse)((0, _ramda.any)(_ramda.isNil), (0, _ramda.always)(null), (0, _ramda.apply)(_ramda.subtract))([componentContainerRight, componentContainerLeft]);
  var unitsCount = (0, _ramda.divide)((0, _ramda.subtract)(sliderMax, sliderMin), sliderStep);
  var unitWidth = (0, _ramda.ifElse)((0, _ramda.any)(_ramda.isNil), (0, _ramda.always)(null), (0, _ramda.apply)(_ramda.divide))([sliderWidth, unitsCount]); // endregion
  // region callback hooks declaration

  var componentContainerRef = (0, _react.useCallback)(function ($node) {
    if (!(0, _ramda.isNil)($node)) {
      var _$node$getBoundingCli = $node.getBoundingClientRect(),
          left = _$node$getBoundingCli.left,
          right = _$node$getBoundingCli.right;

      setComponentContainerLeft(left);
      setComponentContainerRight(right);
    }
  }, [themeContext.windowDimensions.innerWidth]); // endregion
  // region business logic

  var clampHandleXPos = (0, _ramda.clamp)(0, sliderWidth);

  var findNearestGrabbedHandleId = function findNearestGrabbedHandleId(clientX) {
    return (0, _ramda.ifElse)(_ramda.isNil, (0, _ramda.always)(null), (0, _ramda.pipe)(_ramda.toPairs, (0, _ramda.sortBy)((0, _ramda.pipe)((0, _ramda.prop)(1), (0, _ramda.subtract)(clientX), Math.abs)), (0, _ramda.nth)(0), (0, _ramda.prop)(0)))(getHandlesData());
  };

  var normalizeClientX = (0, _ramda.cond)([[function (clientX) {
    return (0, _ramda.any)(_ramda.isNil, [clientX, componentContainerLeft, componentContainerRight]);
  }, (0, _ramda.always)(0)], [function (clientX) {
    return (0, _ramda.lt)(clientX, componentContainerLeft);
  }, (0, _ramda.always)(componentContainerLeft)], [function (clientX) {
    return (0, _ramda.gt)(clientX, componentContainerRight);
  }, (0, _ramda.always)(componentContainerRight)], [_ramda.T, _ramda.identity]]);
  var calcUnitsByClientX = (0, _ramda.pipe)(normalizeClientX, (0, _ramda.prepend)(_ramda.__, [componentContainerLeft]), (0, _ramda.ifElse)((0, _ramda.any)(_ramda.isNil), (0, _ramda.always)(0), (0, _ramda.apply)(_ramda.subtract)), (0, _ramda.prepend)(_ramda.__, [unitWidth]), (0, _ramda.ifElse)((0, _ramda.any)(_ramda.isNil), (0, _ramda.always)(0), (0, _ramda.pipe)((0, _ramda.apply)(_ramda.divide), Math.round)));
  var calcHandleXPosByUnits = (0, _ramda.pipe)((0, _ramda.multiply)(sliderWidth), (0, _ramda.divide)(_ramda.__, unitsCount), Math.round, clampHandleXPos);

  var getHandlesData = function getHandlesData() {
    if ((0, _ramda.isNil)(initialHandleId)) {
      return null;
    }

    var initialHandlesData = (0, _ramda.defaultTo)(_defineProperty({}, initialHandleId, 0))(initial);
    var handlesData = (0, _ramda.defaultTo)(initialHandlesData)(value);
    return handlesData;
  }; // endregion
  // region event handler helpers


  var containerMouseDownHandler = function containerMouseDownHandler(event) {
    var currentUnits = calcUnitsByClientX(event.clientX);
    var nearestGrabbedHandleId = findNearestGrabbedHandleId(currentUnits);

    if (!(0, _ramda.isNil)(nearestGrabbedHandleId)) {
      setGrabbedHandleId(nearestGrabbedHandleId);
      onChange((0, _ramda.mergeRight)(getHandlesData(), _defineProperty({}, nearestGrabbedHandleId, currentUnits)));
    }
  };

  var overlayMouseLeaveHandler = function overlayMouseLeaveHandler() {
    return setGrabbedHandleId(null);
  };

  var overlayMouseUpHandler = function overlayMouseUpHandler() {
    return setGrabbedHandleId(null);
  };

  var overlayMouseMoveHandler = function overlayMouseMoveHandler(event) {
    if (!(0, _ramda.isNil)(grabbedHandleId)) {
      var currentUnits = calcUnitsByClientX(event.clientX);
      onChange((0, _ramda.mergeRight)(getHandlesData(), _defineProperty({}, grabbedHandleId, currentUnits)));
    }
  }; // endregion
  // region render helpers


  var renderOverlay = function renderOverlay() {
    return _react.default.createElement(_global_overlay_component.default, {
      show: !(0, _ramda.isNil)(grabbedHandleId),
      opacity: 0,
      onMouseUp: overlayMouseUpHandler,
      onMouseMove: overlayMouseMoveHandler,
      onMouseLeave: overlayMouseLeaveHandler
    });
  };

  var renderDummyHandleContainer = function renderDummyHandleContainer() {
    return _react.default.createElement(_form_slider_handle_component.default, {
      style: dummyHandleStyles
    });
  };

  var renderHandleContainers = function renderHandleContainers() {
    var handlesData = getHandlesData();

    if ((0, _ramda.isNil)(handlesData)) {
      return null;
    }

    return (0, _ramda.reduce)(function (nodes, id) {
      var xPos = calcHandleXPosByUnits(handlesData[id]);
      var active = !(0, _ramda.isNil)(grabbedHandleId) && grabbedHandleId === id;
      nodes.push(_react.default.createElement(_form_slider_handle_component.default, {
        variant: props.variant,
        key: id,
        value: xPos,
        active: active,
        readOnly: props.readOnly,
        disabled: props.disabled
      }));
      return nodes;
    }, [], (0, _ramda.keys)(handlesData));
  };

  var renderProgressTrackContainer = function renderProgressTrackContainer() {
    var handlesData = getHandlesData();

    if ((0, _ramda.isNil)(handlesData)) {
      return null;
    }

    var _pipe = (0, _ramda.pipe)((0, _ramda.pipe)(_ramda.toPairs, (0, _ramda.sortBy)((0, _ramda.prop)(1))), (0, _ramda.cond)([[(0, _ramda.pipe)(_ramda.length, (0, _ramda.equals)(_ramda.__, 0)), (0, _ramda.always)([0, 0])], [(0, _ramda.pipe)(_ramda.length, (0, _ramda.equals)(_ramda.__, 1)), (0, _ramda.pipe)((0, _ramda.nth)(0), (0, _ramda.nth)(1), (0, _ramda.pair)(0))], [(0, _ramda.pipe)(_ramda.length, (0, _ramda.gt)(_ramda.__, 1)), (0, _ramda.pipe)((0, _ramda.juxt)([_ramda.head, _ramda.last]), (0, _ramda.map)((0, _ramda.nth)(1)))], [_ramda.T, (0, _ramda.always)([0, 0])]]), (0, _ramda.map)(calcHandleXPosByUnits))(handlesData),
        _pipe2 = _slicedToArray(_pipe, 2),
        left = _pipe2[0],
        right = _pipe2[1];

    var style = {
      left: "".concat(left, "px"),
      width: "".concat(right - left, "px")
    };
    var trackProgressContainer = classes.trackProgressContainer;
    return _react.default.createElement("div", {
      className: trackProgressContainer,
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
    var className = (0, _classnames.default)(componentContainer, {
      variant1: (0, _ramda.equals)(sliderVariant, 1),
      variant2: (0, _ramda.equals)(sliderVariant, 2)
    });
    return _react.default.createElement("div", {
      ref: componentContainerRef,
      className: className,
      onMouseDown: containerMouseDownHandler
    }, renderTrackContainer(), renderProgressTrackContainer(), renderHandleContainers(), renderDummyHandleContainer(), renderOverlay());
  }; // endregion
  // init render


  return renderComponentContainer();
} // exports


var _default = FormSliderInputComponent;
exports.default = _default;