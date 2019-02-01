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

// constants definition


// local imports


// type definitions
var SCROLLABLE_AREA_BORDER_SIZE = 1; // px
var SCROLLABLE_AREA_LINE_HEIGHT_SPACING = 2; // px

// styles definition
var styles = function styles(theme) {
    return {
        componentContainer: {
            boxSizing: 'border-box',

            overflowX: 'hidden',
            overflowY: 'scroll',

            borderRadius: theme.layoutStyles.commonBorderRadius + 'px',
            border: SCROLLABLE_AREA_BORDER_SIZE + 'px solid ' + theme.baseStyles.subQuaternaryColor,

            padding: theme.layoutStyles.topSpacing + 'px \n                  ' + theme.layoutStyles.rightSpacing + 'px \n                  ' + theme.layoutStyles.bottomSpacing + 'px \n                  ' + theme.layoutStyles.leftSpacing + 'px\n        ',

            fontFamily: theme.layoutStyles.fontStack,
            fontSize: theme.layoutStyles.bodyFontSize + 'px',
            lineHeight: theme.layoutStyles.bodyFontSize + SCROLLABLE_AREA_LINE_HEIGHT_SPACING + 'px',

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
    var rowsCount = props.rowsCount,
        style = props.style,
        className = props.className,
        classes = props.classes,
        theme = props.theme,
        children = props.children;

    var composedClassName = (0, _classnames2.default)(classes.componentContainer, className);

    var composedStyles = {};

    if ((0, _ramda.isNil)(rowsCount)) {
        composedStyles = { height: 'auto' };
    } else {
        var spacing = theme.layoutStyles.topSpacing + SCROLLABLE_AREA_BORDER_SIZE * 2;
        var lineHeight = theme.layoutStyles.bodyFontSize + SCROLLABLE_AREA_LINE_HEIGHT_SPACING;
        var height = rowsCount * lineHeight + spacing;

        composedStyles = { height: height + 'px' };
    }

    composedStyles = Object.assign(composedStyles, style);

    return React.createElement(
        'div',
        { style: composedStyles, className: composedClassName },
        children
    );
}

ScrollableAreaFunction.displayName = 'ScrollableAreaComponent';

// exports
var ScrollableAreaComponent = exports.ScrollableAreaComponent = (0, _reactJss2.default)(styles)(ScrollableAreaFunction);