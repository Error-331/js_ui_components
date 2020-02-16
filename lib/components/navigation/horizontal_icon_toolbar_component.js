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

var _providers = require("./../../theming/providers");

var _font_icon = _interopRequireDefault(require("./../layout/icons/font_icon"));

var _sections_alignment_hooks = require("./../../hooks/layout/sections_alignment_hooks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(Object(source)); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// styles definition
var useStyles = (0, _reactJss.createUseStyles)(function (theme) {
  return {
    componentContainer: {
      boxSizing: 'border-box',
      display: 'flex',
      position: 'relative',
      flexDirection: 'column',
      flexWrap: 'nowrap',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      alignContent: 'flex-start',
      '& > $controlSection': {
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
        '& > $controlsGroup': {
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
          marginLeft: "".concat(theme.layoutStyles.formHorizontalSpacing, "px"),
          '& > $control': {
            boxSizing: 'border-box',
            flexBasis: 'auto',
            flexShrink: 1,
            flexGrow: 0,
            marginLeft: "".concat(theme.layoutStyles.sectionHorizontalSpacing, "px"),
            color: theme.inputStyles.inactiveColor,
            '&.active': {
              color: theme.inputStyles.activeColor
            },
            '&:hover': {
              color: theme.inputStyles.hoverColor
            },
            '&:first-child': {
              marginLeft: "0px"
            }
          },
          '&.firstGroupInSection': {
            marginLeft: '0px'
          },
          '&.lastGroupInSection': {
            marginRight: "".concat(theme.layoutStyles.formHorizontalSpacing, "px")
          },
          '&.noneFirstGroupInRow': {
            paddingTop: "".concat(theme.layoutStyles.sectionVerticalSpacing, "px")
          }
        }
      }
    },
    controlSection: {},
    controlsGroup: {},
    control: {}
  };
});
/**
 * Horizontal icon toolbar component styled according to material-UI guidelines.
 * Component is intendent to be used as a toolbar for other components such as.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation

function HorizontalIconToolbarComponent(props) {
  // region private variables declaration
  var data = (0, _ramda.defaultTo)([], props.data); // endregion
  // region style hooks declaration

  var theme = (0, _reactJss.useTheme)();
  var classes = useStyles(_objectSpread({}, props, {
    theme: theme
  })); // endregion
  // region context hooks declaration

  var themeContext = (0, _react.useContext)(_providers.MainThemeContext); // endregion
  // region state hooks declaration
  // endregion
  // region effect hooks declaration
  // endregion
  // region state variables declaration
  // endregion
  // region ref hooks declaration

  var $toolbarRef = (0, _react.useRef)(null); // endregion
  // region callback hooks declaration
  // endregion
  // region custom hooks declaration

  var SectionsRowPositionData = (0, _sections_alignment_hooks.useHorizontalSectionsAlignment)($toolbarRef); // endregion
  // region business logic
  // endregion
  // region event handler helpers
  // endregion
  // region render helpers

  var renderControls = function renderControls(controlGroupData) {
    return (0, _ramda.addIndex)(_ramda.map)(function (controlIconData, index) {
      var active = controlIconData.active,
          iconClassName = controlIconData.iconClassName,
          mouseClickHandler = controlIconData.mouseClickHandler,
          mouseDownHandler = controlIconData.mouseDownHandler;
      var control = classes.control;
      active = (0, _ramda.defaultTo)(false, active);
      mouseClickHandler = (0, _ramda.defaultTo)(function () {}, mouseClickHandler);
      mouseDownHandler = (0, _ramda.defaultTo)(function () {}, mouseDownHandler);
      var className = (0, _classnames.default)(control, {
        active: active
      });
      return _react.default.createElement(_font_icon.default, {
        size: "small",
        className: className,
        iconClassName: iconClassName,
        onMouseClick: mouseClickHandler,
        onMouseDown: mouseDownHandler,
        key: "control_".concat(index)
      });
    }, controlGroupData);
  };

  var renderControlGroups = function renderControlGroups(controlSectionData, GroupsRowPositionDataData) {
    return (0, _ramda.addIndex)(_ramda.map)(function (controlGroupData, index) {
      var groupsRowPositionData = (0, _ramda.defaultTo)({}, GroupsRowPositionDataData[index]);
      var ifFirstOnRow = (0, _ramda.defaultTo)(false, groupsRowPositionData.isFirst);
      var isLastOnRow = (0, _ramda.defaultTo)(false, groupsRowPositionData.isLast);
      var rowNum = (0, _ramda.defaultTo)(false, groupsRowPositionData.rowNum);
      var controlsGroup = classes.controlsGroup;
      var className = (0, _classnames.default)(controlsGroup, {
        firstGroupInSection: ifFirstOnRow,
        lastGroupInSection: isLastOnRow,
        noneFirstGroupInRow: rowNum > 0
      });
      return _react.default.createElement("div", {
        className: className,
        key: "group_".concat(index)
      }, renderControls(controlGroupData));
    }, controlSectionData);
  };

  var renderControlSections = function renderControlSections() {
    return (0, _ramda.addIndex)(_ramda.map)(function (controlSectionData, index) {
      var groupsRowPositionData = (0, _ramda.defaultTo)([], SectionsRowPositionData[index]);
      var controlSection = classes.controlSection;
      return _react.default.createElement("div", {
        className: controlSection,
        key: "section_".concat(index)
      }, renderControlGroups(controlSectionData, groupsRowPositionData));
    }, data);
  };

  var renderComponentContainer = function renderComponentContainer() {
    var componentContainer = classes.componentContainer;
    return _react.default.createElement("div", {
      ref: $toolbarRef,
      className: componentContainer
    }, renderControlSections());
  }; // endregion
  // init


  return renderComponentContainer();
} // exports


var _default = HorizontalIconToolbarComponent;
exports.default = _default;