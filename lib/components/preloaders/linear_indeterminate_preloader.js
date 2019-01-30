'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LinearIndeterminatePreloader = exports.LINEAR_INDETERMINATE_PRELOADER_SUB_BAR_KEYFRAMES_STYLE_NAME = exports.LINEAR_INDETERMINATE_PRELOADER_MAIN_BAR_KEYFRAMES_STYLE_NAME = undefined;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// constants definition


// local imports


// type definitions
var LINEAR_INDETERMINATE_PRELOADER_MAIN_BAR_KEYFRAMES_STYLE_NAME = exports.LINEAR_INDETERMINATE_PRELOADER_MAIN_BAR_KEYFRAMES_STYLE_NAME = 'linear_indeterminate_preloader_main_bar_keyframes';
var LINEAR_INDETERMINATE_PRELOADER_SUB_BAR_KEYFRAMES_STYLE_NAME = exports.LINEAR_INDETERMINATE_PRELOADER_SUB_BAR_KEYFRAMES_STYLE_NAME = 'linear_indeterminate_preloader_sub_bar_keyframes';

// styles definition
var barStylesFunc = function barStylesFunc(theme) {
    return {
        position: 'absolute',

        width: 'auto',
        height: '100%',

        left: 0,

        bottom: 0,
        top: 0,

        willChange: 'left, right',
        transformOrigin: 'left',

        transitionProperty: 'transform',
        transitionDuration: '0.2s',
        transitionTimingFunction: 'linear',
        transitionDelay: '0s',

        animationDuration: '2.1s',
        animationIterationCount: 'infinite',

        backgroundColor: theme.baseStyles.mainPrimaryColor
    };
};

var styles = function styles(theme) {
    return {
        componentContainer: {
            boxSizing: 'border-box',
            position: 'relative',
            overflow: 'hidden',

            height: '4px',

            backgroundColor: theme.baseStyles.mainQuaternaryColor,

            '& > $mainBar': {
                extend: barStylesFunc(theme),

                animationName: LINEAR_INDETERMINATE_PRELOADER_MAIN_BAR_KEYFRAMES_STYLE_NAME,
                animationTimingFunction: 'cubic-bezier(0.65, 0.815, 0.735, 0.395)'
            },

            '& > $subBar': {
                extend: barStylesFunc(theme),

                animationName: LINEAR_INDETERMINATE_PRELOADER_SUB_BAR_KEYFRAMES_STYLE_NAME,
                animationTimingFunction: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
                animationDelay: '1.15s'
            }
        },

        mainBar: {},
        subBar: {}
    };
};

/**
 * Linear indeterminate preloader.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function LinearIndeterminatePreloaderFunction(props) {
    var classes = props.classes,
        className = props.className,
        style = props.style,
        theme = props.theme;
    var mainBar = classes.mainBar,
        subBar = classes.subBar;


    theme.styleSheetRegister.addGlobalStyles(_defineProperty({}, '@keyframes ' + LINEAR_INDETERMINATE_PRELOADER_MAIN_BAR_KEYFRAMES_STYLE_NAME, {
        '0%': {
            left: '-35%',
            right: '100%'
        },

        '60%': {
            left: '100%',
            right: '-90%'
        },

        '100%': {
            left: '100%',
            right: '-90%'
        }
    }), '@keyframes ' + LINEAR_INDETERMINATE_PRELOADER_MAIN_BAR_KEYFRAMES_STYLE_NAME);

    theme.styleSheetRegister.addGlobalStyles(_defineProperty({}, '@keyframes ' + LINEAR_INDETERMINATE_PRELOADER_SUB_BAR_KEYFRAMES_STYLE_NAME, {
        '0%': {
            left: '-200%',
            right: '100%'
        },

        '60%': {
            left: '107%',
            right: '-8%'
        },

        '100%': {
            left: '107%',
            right: '-8%'
        }
    }), '@keyframes ' + LINEAR_INDETERMINATE_PRELOADER_SUB_BAR_KEYFRAMES_STYLE_NAME);

    var componentClassNames = (0, _classnames2.default)(classes.componentContainer, className);

    return React.createElement(
        'div',
        { className: componentClassNames, style: style },
        React.createElement('div', { className: mainBar }),
        React.createElement('div', { className: subBar })
    );
}

LinearIndeterminatePreloaderFunction.displayName = 'LinearIndeterminatePreloader';

// exports
var LinearIndeterminatePreloader = exports.LinearIndeterminatePreloader = (0, _reactJss2.default)(styles)(LinearIndeterminatePreloaderFunction);