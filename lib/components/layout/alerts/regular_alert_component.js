'use strict'; // external imports

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RegularAlertComponent = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _ramda = require("ramda");

var _classnames = _interopRequireDefault(require("classnames"));

var _regular_card_component = require("./../structure/regular_card_component");

var _regular_panel_component = require("./../structure/regular_panel_component");

var _font_icon = require("./../icons/font_icon");

var _inline_text_block = require("./../text/inline_text_block");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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
  }), React.createElement(_inline_text_block.InlineTextBlock, {
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