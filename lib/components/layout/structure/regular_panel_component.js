'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RegularPanelComponent = undefined;

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

            padding: theme.layoutStyles.topSpacing + 'px \n                  ' + theme.layoutStyles.rightSpacing + 'px \n                  ' + theme.layoutStyles.bottomSpacing + 'px \n                  ' + theme.layoutStyles.leftSpacing + 'px\n        ',

            borderRadius: theme.layoutStyles.headerBorderRadius,
            backgroundColor: theme.layoutStyles.headerBGColor,

            fontFamily: theme.layoutStyles.headerFontStack,
            fontSize: theme.layoutStyles.headerFontSize + 'px',

            color: theme.layoutStyles.headerFontColor
        }
    };
};

/**
 * Regular panel component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function RegularPanelFunction(props) {
    var className = props.className,
        style = props.style,
        children = props.children,
        classes = props.classes;


    var combinedClassName = (0, _classnames2.default)(classes.componentContainer, className);

    return React.createElement(
        'div',
        { className: combinedClassName, style: style },
        children
    );
}

RegularPanelFunction.displayName = 'RegularPanelComponent';

// exports
var RegularPanelComponent = exports.RegularPanelComponent = (0, _reactJss2.default)(styles)(RegularPanelFunction);