'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DialogBoxActionsContainer = exports.LEFT_TO_RIGHT_DIRECTION = exports.RIGHT_TO_LEFT_DIRECTION = undefined;
exports.DialogBoxActionsContainerFunction = DialogBoxActionsContainerFunction;

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

            gridArea: 'buttons',
            display: 'grid',

            gridTemplateColumns: 'repeat(auto-fill, minmax(max-content, ' + theme.buttonStyles.regularButtonMinimumWidth + 'px))',
            gridAutoRows: 'max-content',
            gridColumnGap: theme.layoutStyles.componentHorizontalSpacing + 'px',

            '& > *': {
                direction: LEFT_TO_RIGHT_DIRECTION
            }
        }
    };
};

// constants definition
var RIGHT_TO_LEFT_DIRECTION = exports.RIGHT_TO_LEFT_DIRECTION = 'rtl';
var LEFT_TO_RIGHT_DIRECTION = exports.LEFT_TO_RIGHT_DIRECTION = 'ltr';

/**
 * Dialog box actions container.
 * Helps to layout buttons (actions) on the bottom of the regular dialog box.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function DialogBoxActionsContainerFunction(props) {
    var children = props.children,
        direction = props.direction,
        classes = props.classes,
        style = props.style,
        className = props.className;


    if ((0, _ramda.isNil)(children)) {
        return null;
    }

    direction = (0, _ramda.defaultTo)(RIGHT_TO_LEFT_DIRECTION)(direction);

    var childrenArray = React.Children.toArray(children);
    childrenArray = direction !== RIGHT_TO_LEFT_DIRECTION ? (0, _ramda.reverse)(childrenArray) : childrenArray;

    style = (0, _ramda.defaultTo)({})(style);
    style = Object.assign({}, { direction: direction }, style);

    className = (0, _classnames2.default)(classes.componentContainer, className);

    return React.createElement(
        'div',
        { className: className, style: style },
        childrenArray
    );
}

DialogBoxActionsContainerFunction.displayName = 'DialogBoxActionsContainer';

// exports
var DialogBoxActionsContainer = exports.DialogBoxActionsContainer = (0, _reactJss2.default)(styles)(DialogBoxActionsContainerFunction);