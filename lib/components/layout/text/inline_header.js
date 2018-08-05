'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InlineHeader = undefined;

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

// local imports

// type definitions
var styles = function styles(theme) {
    return {
        componentContainer: {
            fontFamily: theme.layoutStyles.fontStack,
            color: theme.layoutStyles.bodyFontColor,

            '&.level1': {
                fontSize: theme.layoutStyles.inlineHeaderLevel1FontSize
            },

            '&.level2': {
                fontSize: theme.layoutStyles.inlineHeaderLevel2FontSize
            },

            '&.level3': {
                fontSize: theme.layoutStyles.inlineHeaderLevel3FontSize
            },

            '&.level4': {
                fontSize: theme.layoutStyles.inlineHeaderLevel4FontSize
            },

            '&.level5': {
                fontSize: theme.layoutStyles.inlineHeaderLevel5FontSize
            },

            '&.level6': {
                fontSize: theme.layoutStyles.inlineHeaderLevel6FontSize
            }
        }
    };
};

/**
 * Inline header component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function InlineHeaderFunction(props) {
    var level = props.level,
        classes = props.classes,
        children = props.children,
        className = props.className,
        style = props.style;

    var userLevel = (0, _ramda.defaultTo)(1)(level);

    var levelClassName = (0, _ramda.cond)([[_ramda.isNil, (0, _ramda.always)('level1')], [function (level) {
        return (0, _ramda.lt)(level, 0);
    }, (0, _ramda.always)('level1')], [function (level) {
        return (0, _ramda.gt)(level, 6);
    }, (0, _ramda.always)('level6')], [_ramda.T, function (level) {
        return 'level' + level;
    }]])(userLevel);

    var componentClassNames = (0, _classnames2.default)(classes.componentContainer, levelClassName, className);

    return React.createElement(
        'span',
        { className: componentClassNames, style: _extends({}, style) },
        children
    );
}

InlineHeaderFunction.displayName = 'InlineHeader';

// exports
var InlineHeader = exports.InlineHeader = (0, _reactJss2.default)(styles)(InlineHeaderFunction);