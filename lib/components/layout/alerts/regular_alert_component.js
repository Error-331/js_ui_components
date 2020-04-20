'use strict'; // external imports

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.weak-map");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.RegularAlertComponent = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _ramda = require("ramda");

var _classnames = _interopRequireDefault(require("classnames"));

var _regular_card_component = require("./../structure/regular_card_component");

var _regular_panel_component = require("./../structure/regular_panel_component");

var _font_icon = require("./../icons/font_icon");

var _inline_text_block = _interopRequireDefault(require("./../text/inline_text_block"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// local imports
// styles definition
var styles = function styles(theme) {
  return {
    cardComponentContainer: {
      borderRadius: "".concat(theme.layoutStyles.commonBorderRadius, "px"),
      backgroundColor: theme.layoutStyles.headerBGColor,
      '&.accent': {
        backgroundColor: theme.baseStyles.accentColorPrimary
      }
    },
    panelComponentContainer: {
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
      paddingBottom: "".concat(theme.layoutStyles.bottomSpacing - theme.layoutStyles.bodyExcessVerticalSpacing, "px"),
      borderRadius: "".concat(theme.layoutStyles.commonBorderRadius, "px"),
      '&.accent': {
        backgroundColor: theme.baseStyles.accentColorPrimary
      }
    },
    iconContainer: {
      color: theme.layoutStyles.headerFontColor
    },
    textContainer: {
      marginLeft: "".concat(theme.layoutStyles.leftSpacing, "px"),
      fontSize: "".concat(theme.layoutStyles.smallIconSize, "px"),
      color: theme.layoutStyles.headerFontColor
    }
  };
}; // component implementation


function RegularAlertFunction(props) {
  var accent = props.accent,
      heightLevel = props.heightLevel,
      containerClassName = props.containerClassName,
      iconClassName = props.iconClassName;
  accent = (0, _ramda.defaultTo)(false)(accent);
  heightLevel = (0, _ramda.defaultTo)(1)(heightLevel);
  iconClassName = (0, _ramda.defaultTo)('fas fa-exclamation-circle')(iconClassName);
  var containerStyle = props.containerStyle,
      classes = props.classes,
      children = props.children;
  var panelComponentContainer = classes.panelComponentContainer,
      iconContainer = classes.iconContainer,
      textContainer = classes.textContainer,
      cardComponentContainer = classes.cardComponentContainer;
  var regularPanelComposedClassName = (0, _classnames.default)(panelComponentContainer, {
    accent: accent
  });
  var cardHeader = React.createElement(_regular_panel_component.RegularPanelComponent, {
    className: regularPanelComposedClassName
  }, React.createElement(_font_icon.FontIcon, {
    iconClassName: iconClassName,
    className: iconContainer,
    size: "small"
  }), React.createElement(_inline_text_block.default, {
    className: textContainer
  }, children));
  var regularCardComposedClassName = (0, _classnames.default)(cardComponentContainer, {
    accent: accent
  }, containerClassName);
  return React.createElement(_regular_card_component.RegularCardComponent, {
    heightLevel: heightLevel,
    header: cardHeader,
    containerClassName: regularCardComposedClassName,
    containerStyle: containerStyle
  });
}

RegularAlertFunction.displayName = 'RegularAlert'; // exports

var RegularAlertComponent = (0, _reactJss.default)(styles)(RegularAlertFunction);
exports.RegularAlertComponent = RegularAlertComponent;
var _default = RegularAlertComponent;
exports.default = _default;