'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FontIcon = undefined;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ramda = require('ramda');

var _general_constants = require('./../../../theming/constants/general_constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// styles definition


// type definitions
var styles = function styles(theme) {
    return {
        componentContainer: {
            boxSizing: 'border-box',
            display: 'block',

            color: theme.layoutStyles.iconColor,

            '&.tiny': {
                fontSize: theme.layoutStyles.tinyIconSize
            },

            '&.small': {
                fontSize: theme.layoutStyles.smallIconSize
            },

            '&.medium': {
                fontSize: theme.layoutStyles.mediumIconSize
            },

            '&.large': {
                fontSize: theme.layoutStyles.largeIconSize
            },

            '&.extraLarge': {
                fontSize: theme.layoutStyles.extraLargeIconSize
            }
        }
    };
};

/**
 * Font icon component.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation


// local imports
function FontIconFunction(props) {
    var size = props.size,
        style = props.style,
        iconClassName = props.iconClassName,
        className = props.className,
        classes = props.classes;

    size = (0, _ramda.defaultTo)(_general_constants.MEDIUM_SIZE)(size);

    var combinedClassName = (0, _classnames2.default)(classes.componentContainer, iconClassName, size, className);

    return React.createElement('i', { className: combinedClassName, style: style });
}

FontIconFunction.displayName = 'FontIcon';

// exports
var FontIcon = exports.FontIcon = (0, _reactJss2.default)(styles)(FontIconFunction);