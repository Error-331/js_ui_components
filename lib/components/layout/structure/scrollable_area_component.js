'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ScrollableAreaComponent = undefined;

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
            overflow: 'scroll',

            borderRadius: theme.layoutStyles.commonBorderRadius + 'px',
            border: '1px solid ' + theme.baseStyles.subQuaternaryColor,

            padding: theme.layoutStyles.topSpacing + 'px \n                  ' + theme.layoutStyles.rightSpacing + 'px \n                  ' + theme.layoutStyles.bottomSpacing + 'px \n                  ' + theme.layoutStyles.bottomSpacing + 'px\n        ',

            fontFamily: theme.layoutStyles.fontStack,
            fontSize: theme.layoutStyles.bodyFontSize,

            '&::-webkit-scrollbar-corner': {
                borderRadius: theme.layoutStyles.commonBorderRadius + 'px'
            }
        }
    };
};

/**
 * Scrollable area.
 * Simple scrollable area that can be filled with any elements.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function ScrollableAreaFunction(props) {
    var style = props.style,
        className = props.className,
        classes = props.classes,
        children = props.children;

    var composedClassName = (0, _classnames2.default)(classes.componentContainer, className);

    return React.createElement(
        'div',
        { style: style, className: composedClassName },
        children
    );
}

ScrollableAreaFunction.displayName = 'ScrollableAreaComponent';

// exports
var ScrollableAreaComponent = exports.ScrollableAreaComponent = (0, _reactJss2.default)(styles)(ScrollableAreaFunction);