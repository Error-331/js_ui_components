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

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

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

var _sections_alignment_hooks = require("./../../hooks/layout/sections_alignment_hooks");

var _chip_component = _interopRequireDefault(require("./../buttons/chip_component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(Object(source)); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// styles definition
var useStyles = (0, _reactJss.createUseStyles)(function (theme) {
  return {
    componentContainer: {
      boxSizing: 'border-box',
      display: 'flex',
      flexBasis: 'auto',
      flexShrink: 1,
      flexGrow: 0,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      alignItems: 'center',
      alignContent: 'flex-start',
      '& > $chipContainer': {
        boxSizing: 'border-box',
        flexBasis: 'auto',
        flexShrink: 1,
        flexGrow: 0,
        marginLeft: "".concat(theme.layoutStyles.rightSpacing, "px"),
        color: theme.inputStyles.inactiveColor,
        '&:first-child': {
          marginLeft: "0px"
        },
        '&.firstChipInRow': {
          marginLeft: '0px'
        },
        '&.lastChipInRow': {
          marginRight: "".concat(theme.layoutStyles.rightSpacing, "px")
        },
        '&.noneFirstChipInRow': {
          paddingTop: "".concat(theme.layoutStyles.topSpacing, "px")
        }
      }
    },
    chipContainer: {}
  };
});
/**
 * Chip collection component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation

function ChipCollectionComponent(props) {
  // region private variables declaration
  var data = (0, _ramda.defaultTo)([], props.data); // endregion
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

  var $mainContainerRef = (0, _react.useRef)(null); // endregion
  // region callback hooks declaration
  // endregion
  // region custom hooks declaration

  var elementsRowPositionData = (0, _sections_alignment_hooks.useHorizontalElementsAlignment)($mainContainerRef, theme.layoutStyles.rightSpacing, [data]); // endregion
  // region business logic
  // endregion
  // region event handler helpers
  // endregion
  // region render helpers

  var renderChips = function renderChips() {
    return (0, _ramda.addIndex)(_ramda.map)(function (chipData, index) {
      var elementRowPositionData = (0, _ramda.defaultTo)({}, elementsRowPositionData[index]);
      var ifFirstOnRow = (0, _ramda.defaultTo)(false, elementRowPositionData.isFirst);
      var isLastOnRow = (0, _ramda.defaultTo)(false, elementRowPositionData.isLast);
      var rowNum = (0, _ramda.defaultTo)(false, elementRowPositionData.rowNum);
      var chipContainer = classes.chipContainer;
      var containerClassName1 = (0, _classnames.default)(chipContainer, {
        firstChipInRow: ifFirstOnRow,
        lastChipInRow: isLastOnRow,
        noneFirstChipInRow: rowNum > 0
      });
      chipData = (0, _ramda.defaultTo)({}, chipData);
      var _chipData = chipData,
          containerClassName = _chipData.containerClassName,
          className = _chipData.className;
      var componentClassName = (0, _classnames.default)(containerClassName, className);
      return _react.default.createElement("div", {
        className: containerClassName1,
        key: "chip_".concat(index)
      }, _react.default.createElement(_chip_component.default, _extends({}, chipData, {
        className: componentClassName
      })));
    }, data);
  };

  var renderComponentContainer = function renderComponentContainer() {
    var componentContainer = classes.componentContainer;
    return _react.default.createElement("div", {
      ref: $mainContainerRef,
      className: componentContainer
    }, renderChips());
  }; // endregion
  // init


  return renderComponentContainer();
} // exports


var _default = ChipCollectionComponent;
exports.default = _default;