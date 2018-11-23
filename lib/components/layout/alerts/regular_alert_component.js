'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RegularAlertComponent = undefined;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _ramda = require('ramda');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _regular_card_component = require('./../structure/regular_card_component');

var _regular_panel_component = require('./../structure/regular_panel_component');

var _font_icon = require('./../icons/font_icon');

var _inline_text_block = require('./../text/inline_text_block');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// styles definition


// type definitions


// local imports
var styles = function styles(theme) {
    return {
        cardComponentContainer: {
            borderRadius: theme.layoutStyles.alertBorderRadius + 'px'
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

            borderRadius: theme.layoutStyles.alertBorderRadius + 'px',

            '&.accent': {
                backgroundColor: theme.baseStyles.accentColorPrimary
            }
        },

        iconContainer: {
            color: theme.layoutStyles.headerFontColor
        },

        textContainer: {
            marginLeft: theme.layoutStyles.leftSpacing + 'px',

            fontSize: theme.layoutStyles.smallIconSize + 'px',
            color: theme.layoutStyles.headerFontColor
        }
    };
};

// component implementation
function RegularAlertFunction(props) {
    var accent = props.accent,
        heightLevel = props.heightLevel,
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


    var regularPanelComposedClassName = (0, _classnames2.default)(panelComponentContainer, { accent: accent });

    var cardHeader = React.createElement(
        _regular_panel_component.RegularPanelComponent,
        { className: regularPanelComposedClassName },
        React.createElement(_font_icon.FontIcon, { iconClassName: iconClassName, className: iconContainer, size: 'small' }),
        React.createElement(
            _inline_text_block.InlineTextBlock,
            { className: textContainer },
            children
        )
    );

    return React.createElement(_regular_card_component.RegularCardComponent, {
        heightLevel: heightLevel,
        header: cardHeader,

        containerClassName: cardComponentContainer,
        containerStyles: containerStyle
    });
}

RegularAlertFunction.displayName = 'RegularAlert';

// exports
var RegularAlertComponent = exports.RegularAlertComponent = (0, _reactJss2.default)(styles)(RegularAlertFunction);