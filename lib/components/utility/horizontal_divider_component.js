'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HorizontalDivider = undefined;

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

            width: '100%',

            padding: '10px 10px 10px 10px',

            '& > $bodyContainer': {
                boxSizing: 'border-box',

                height: '2px',
                lineHeight: '2px',
                backgroundColor: theme.baseStyles.subTertiaryColor
            }
        },

        bodyContainer: {}
    };
};

// component implementation
function HorizontalDividerFunction(props) {
    var classes = props.classes,
        componentContainerClassName = props.componentContainerClassName,
        bodyContainerClassName = props.bodyContainerClassName;
    var componentContainer = classes.componentContainer,
        bodyContainer = classes.bodyContainer;


    var componentContainerClassNames = (0, _classnames2.default)(componentContainer, componentContainerClassName);
    var bodyContainerClassNames = (0, _classnames2.default)(bodyContainer, bodyContainerClassName);

    return React.createElement(
        'div',
        { className: componentContainerClassNames },
        React.createElement('div', { className: bodyContainerClassNames })
    );
}

HorizontalDividerFunction.displayName = 'HorizontalDivider';

// exports
var HorizontalDivider = exports.HorizontalDivider = (0, _reactJss2.default)(styles)(HorizontalDividerFunction);