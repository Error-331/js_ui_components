'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// styles definition


// local imports


// type definitions
var styles = function styles(theme) {
    return {
        componentContainer: {
            display: 'flex',

            flexBasis: 'auto',
            flexDirection: 'row',
            flexWrap: 'wrap',

            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            alignContent: 'flex-start'
        }
    };
};

// component implementation
function SimpleFlexGridContainer(props) {
    return React.createElement(
        'div',
        { className: props.classes.componentContainer },
        props.children
    );
}

// exports
exports.default = (0, _reactJss2.default)(styles)(SimpleFlexGridContainer);