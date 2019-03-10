'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ElementsRow = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.ElementsRowFunction = ElementsRowFunction;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ramda = require('ramda');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// styles definition


// local imports

// type definitions
var styles = function styles(theme) {
    return {
        componentContainer: {
            boxSizing: 'border-box',
            display: 'flex',

            flexBasis: 'auto',
            flexGrow: 0,
            flexShrink: 1,

            flexDirection: 'row',
            flexWrap: 'nowrap',

            justifyContent: 'flex-start',
            alignItems: 'stretch',
            alignContent: 'flex-start',

            '&.left': {
                justifyContent: 'flex-start'
            },

            '&.left > div': {
                marginRight: theme.layoutStyles.sectionHorizontalSpacing + 'px'
            },

            '&.left > button': {
                marginRight: theme.layoutStyles.sectionHorizontalSpacing + 'px'
            },

            '&.left > div:last-child': {
                marginRight: '0px'
            },

            '&.right': {
                justifyContent: 'flex-end'
            },

            '&.right > div': {
                marginLeft: theme.layoutStyles.sectionHorizontalSpacing + 'px'
            },

            '&.right > button': {
                marginLeft: theme.layoutStyles.sectionHorizontalSpacing + 'px'
            },

            '&.right > div:first-child': {
                marginLeft: '0px'
            },

            '&.right > button:first-child': {
                marginLeft: '0px'
            },

            '&.center': {
                justifyContent: 'center'
            },

            '&.center > div': {
                marginRight: theme.layoutStyles.sectionHorizontalSpacing + 'px'
            },

            '&.center > button': {
                marginRight: theme.layoutStyles.sectionHorizontalSpacing + 'px'
            },

            '&.center > div:last-child': {
                marginRight: '0px'
            },

            '&.center > button:last-child': {
                marginRight: '0px'
            }
        }
    };
};

/**
 * Elements row component.
 * Used to align rows of elements (for example: align buttons at the bottom of the dialog box or at tools panel).
 * Best used with [RegularButtonComponent](#regularbuttoncomponent)
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function ElementsRowFunction(props) {
    var alignment = props.alignment,
        wrap = props.wrap,
        className = props.className,
        classes = props.classes,
        style = props.style;


    alignment = (0, _ramda.defaultTo)('left')(alignment);
    wrap = (0, _ramda.defaultTo)(false)(wrap);

    var containerClasses = (0, _classnames2.default)(classes.componentContainer, alignment, className);

    var flexWrap = wrap ? 'wrap' : 'nowrap';

    return React.createElement(
        'div',
        { className: containerClasses, style: _extends({ flexWrap: flexWrap }, style) },
        props.children
    );
}

ElementsRowFunction.displayName = 'ElementsRow';

// exports
var ElementsRow = exports.ElementsRow = (0, _reactJss2.default)(styles)(ElementsRowFunction);