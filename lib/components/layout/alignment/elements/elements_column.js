'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ElementsColumn = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

            flexDirection: 'column',
            flexWrap: 'nowrap',

            justifyContent: 'flex-start',
            alignItems: 'center',
            alignContent: 'flex-start',

            '&.left': {
                alignItems: 'flex-start'
            },

            '&.left > div': {
                marginTop: theme.layoutStyles.sectionVerticalSpacing + 'px'
            },

            '&.left > button': {
                marginTop: theme.layoutStyles.sectionVerticalSpacing + 'px'
            },

            '&.left > div:first-child': {
                marginTop: '0px'
            },

            '&.left > button:first-child': {
                marginTop: '0px'
            },

            '&.right': {
                alignItems: 'flex-end'
            },

            '&.right > div': {
                marginTop: theme.layoutStyles.sectionVerticalSpacing + 'px'
            },

            '&.right > button': {
                marginTop: theme.layoutStyles.sectionVerticalSpacing + 'px'
            },

            '&.right > div:first-child': {
                marginTop: '0px'
            },

            '&.right > button:first-child': {
                marginTop: '0px'
            },

            '&.center': {
                alignItems: 'center'
            },

            '&.center > div': {
                marginTop: theme.layoutStyles.sectionVerticalSpacing + 'px'
            },

            '&.center > button': {
                marginTop: theme.layoutStyles.sectionVerticalSpacing + 'px'
            },

            '&.center > div:first-child': {
                marginTop: '0px'
            },

            '&.center > button:first-child': {
                marginTop: '0px'
            }
        }
    };
};

/**
 * Elements column component.
 * Used to align columns of elements.
 * Best used with [RegularButtonComponent](#regularbuttoncomponent)
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function ElementsColumnFunction(props) {
    var alignment = props.alignment,
        classes = props.classes,
        style = props.style;


    alignment = (0, _ramda.defaultTo)('left')(alignment);

    var containerClasses = (0, _classnames2.default)(classes.componentContainer, alignment);

    return React.createElement(
        'div',
        { className: containerClasses, style: _extends({}, style) },
        props.children
    );
}

ElementsColumnFunction.displayName = 'ElementsColumn';

// exports
var ElementsColumn = exports.ElementsColumn = (0, _reactJss2.default)(styles)(ElementsColumnFunction);