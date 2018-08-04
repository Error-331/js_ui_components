'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SimpleFlexGridContainer = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

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
            flexWrap: 'wrap',

            justifyContent: 'flex-start',
            alignItems: 'stretch',
            alignContent: 'flex-start'
        }
    };
};

// component implementation
function SimpleFlexGridContainerFunction(props) {
    var style = props.style,
        className = props.className,
        classes = props.classes,
        children = props.children;

    var componentClassNames = (0, _classnames2.default)(classes.componentContainer, className);

    return React.createElement(
        'div',
        { className: componentClassNames, style: _extends({}, style) },
        children
    );
}

SimpleFlexGridContainerFunction.displayName = 'SimpleFlexGridContainer';

// exports
var SimpleFlexGridContainer = exports.SimpleFlexGridContainer = (0, _reactJss2.default)(styles)(SimpleFlexGridContainerFunction);