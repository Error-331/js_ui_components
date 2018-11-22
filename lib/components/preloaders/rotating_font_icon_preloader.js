'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RotatingFontIconPreloader = exports.ROTATING_FONT_ICON_PRELOADER_MAIN_KEYFRAMES_STYLE_NAME = undefined;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _ramda = require('ramda');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _font_icon = require('./../layout/icons/font_icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// local imports


// constants definition


// type definitions
var ROTATING_FONT_ICON_PRELOADER_MAIN_KEYFRAMES_STYLE_NAME = exports.ROTATING_FONT_ICON_PRELOADER_MAIN_KEYFRAMES_STYLE_NAME = 'rotating_font_icon_preloader_main_keyframes';

// styles definition
var styles = function styles(theme) {
    return {
        componentContainer: {
            animationName: ROTATING_FONT_ICON_PRELOADER_MAIN_KEYFRAMES_STYLE_NAME,
            animationDuration: '1s',
            animationIterationCount: 'infinite',
            animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
        }
    };
};

/**
 * Rotating font icon preloader.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function RotatingFontIconPreloaderFunction(props) {
    var size = props.size,
        style = props.style,
        className = props.className,
        classes = props.classes,
        theme = props.theme;


    theme.styleSheetRegister.addGlobalStyles(_defineProperty({}, '@keyframes ' + ROTATING_FONT_ICON_PRELOADER_MAIN_KEYFRAMES_STYLE_NAME, {
        'from': {
            transform: 'rotate(0deg)'
        },

        'to': {
            transform: 'rotate(360deg)'
        }
    }), '@keyframes ' + ROTATING_FONT_ICON_PRELOADER_MAIN_KEYFRAMES_STYLE_NAME);

    var iconClassName = props.iconClassName;

    iconClassName = (0, _ramda.defaultTo)('fas fa-sync')(iconClassName);

    var componentClassNames = (0, _classnames2.default)(classes.componentContainer, className);

    return React.createElement(_font_icon.FontIcon, {
        size: size,
        iconClassName: iconClassName,
        className: componentClassNames,
        style: style
    });
}

RotatingFontIconPreloaderFunction.displayName = 'RotatingFontIconPreloader';

// exports
var RotatingFontIconPreloader = exports.RotatingFontIconPreloader = (0, _reactJss2.default)(styles)(RotatingFontIconPreloaderFunction);