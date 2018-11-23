'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DialogBoxActionsContainerClass = exports.LEFT_TO_RIGHT_DIRECTION = exports.RIGHT_TO_LEFT_DIRECTION = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

// local imports


exports.DialogBoxActionsContainer = DialogBoxActionsContainer;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ramda = require('ramda');

var _main_theme_provider = require('./../../../../theming/providers/main_theme_provider');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// styles definition


// type definitions
var styles = function styles(theme) {
    return {
        componentContainer: {
            boxSizing: 'border-box',
            display: 'flex',

            flexBasis: 'auto',
            flexGrow: 0,
            flexShrink: 1,

            flexDirection: 'row',
            flexWrap: 'nowrap',

            justifyContent: 'space-between',
            alignItems: 'center',
            alignContent: 'flex-start',

            '& > $buttonsContainer': {
                boxSizing: 'border-box',

                flexBasis: '50%',
                flexGrow: 0,
                flexShrink: 0,

                gridArea: 'buttons',
                display: 'grid',

                gridTemplateColumns: 'repeat(auto-fill, minmax(max-content, ' + theme.buttonStyles.regularButtonMinimumWidth + 'px))',
                gridAutoRows: 'max-content',
                gridColumnGap: theme.layoutStyles.componentHorizontalSpacing + 'px',

                '&.fullWidth': {
                    flexBasis: '100%'
                },

                '& > *': {
                    direction: LEFT_TO_RIGHT_DIRECTION
                }
            }

        },

        buttonsContainer: {}
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

// $FlowFixMe decorators
var DialogBoxActionsContainerClass = exports.DialogBoxActionsContainerClass = (_dec = (0, _reactJss2.default)(styles), _dec(_class = (_temp = _class2 = function (_React$Component) {
    _inherits(DialogBoxActionsContainerClass, _React$Component);

    function DialogBoxActionsContainerClass() {
        _classCallCheck(this, DialogBoxActionsContainerClass);

        return _possibleConstructorReturn(this, (DialogBoxActionsContainerClass.__proto__ || Object.getPrototypeOf(DialogBoxActionsContainerClass)).apply(this, arguments));
    }

    _createClass(DialogBoxActionsContainerClass, [{
        key: '_getComponentContainerStyle',


        // endregion

        // region private props
        // endregion

        // region constructor
        // endregion

        // region business logic
        // endregion

        // region lifecycle methods
        // endregion

        // region style accessors

        // region static props
        value: function _getComponentContainerStyle() {
            return (0, _ramda.defaultTo)({})(this.props.containerStyle);
        }
    }, {
        key: '_getComponentContainerClassName',
        value: function _getComponentContainerClassName() {
            return (0, _classnames2.default)(this.props.classes.componentContainer, this.props.containerClassName);
        }
    }, {
        key: '_getRightContainerClassName',
        value: function _getRightContainerClassName() {
            return this.props.classes.buttonsContainer;
        }
    }, {
        key: '_getLeftContainerClassName',
        value: function _getLeftContainerClassName() {
            return (0, _classnames2.default)(this.props.classes.buttonsContainer, {
                'fullWidth': this._getMainGroupCount() === 0
            });
        }

        // endregion

        // region label accessors
        // endregion

        // region state accessors
        // endregion

        // region prop accessors

    }, {
        key: '_getMainGroupCount',
        value: function _getMainGroupCount() {
            return (0, _ramda.defaultTo)(DialogBoxActionsContainerClass.defaultProps.mainGroupCount)(this.props.mainGroupCount);
        }
    }, {
        key: '_getDirection',
        value: function _getDirection() {
            return (0, _ramda.defaultTo)(DialogBoxActionsContainerClass.defaultProps.direction)(this.props.direction);
        }

        // endregion

        // region handlers
        // endregion

        // region render methods

    }, {
        key: '_renderRightGroup',
        value: function _renderRightGroup(children, style) {
            return React.createElement(
                'div',
                { className: this._getRightContainerClassName(), style: style },
                children
            );
        }
    }, {
        key: '_renderLeftGroup',
        value: function _renderLeftGroup(children, style) {
            return React.createElement(
                'div',
                { className: this._getLeftContainerClassName(), style: style },
                children
            );
        }
    }, {
        key: '_renderComponentContainer',
        value: function _renderComponentContainer() {
            var children = React.Children.toArray(this.props.children);
            var childrenCount = (0, _ramda.length)(children);

            var mainGroupCount = this._getMainGroupCount();

            var leftChildrenCount = mainGroupCount > 0 ? mainGroupCount : childrenCount;

            var leftChildrenStartIndex = 0;
            var leftChildrenEndIndex = leftChildrenCount;

            var rightChildrenStartIndex = leftChildrenCount;
            var rightChildrenEndIndex = childrenCount;

            var leftChildren = (0, _ramda.slice)(leftChildrenStartIndex, leftChildrenEndIndex, children);
            var rightChildren = (0, _ramda.slice)(rightChildrenStartIndex, rightChildrenEndIndex, children);

            var direction = this._getDirection();

            leftChildren = direction !== RIGHT_TO_LEFT_DIRECTION ? (0, _ramda.reverse)(leftChildren) : leftChildren;
            rightChildren = direction !== RIGHT_TO_LEFT_DIRECTION ? (0, _ramda.reverse)(rightChildren) : rightChildren;

            var groupContainerStyle = Object.assign({ direction: direction }, this._getComponentContainerStyle());
            var leftGroupDirection = direction !== RIGHT_TO_LEFT_DIRECTION ? 'ltr' : 'rtl';
            var rightGroupDirection = direction !== RIGHT_TO_LEFT_DIRECTION ? 'rtl' : 'ltr';

            return React.createElement(
                'div',
                { className: this._getComponentContainerClassName(), style: groupContainerStyle },
                this._renderLeftGroup(leftChildren, { direction: leftGroupDirection }),
                this._renderRightGroup(rightChildren, { direction: rightGroupDirection })
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return this._renderComponentContainer();
        }

        // endregion

    }]);

    return DialogBoxActionsContainerClass;
}(React.Component), _class2.displayName = 'DialogBoxActionsContainerClass', _class2.defaultProps = {
    direction: RIGHT_TO_LEFT_DIRECTION,
    mainGroupCount: 0,
    containerClassName: ''
}, _temp)) || _class);

// exports

function DialogBoxActionsContainer(props) {
    return React.createElement(
        _main_theme_provider.MainThemeContext.Consumer,
        null,
        function (windowDimensions) {
            return React.createElement(DialogBoxActionsContainerClass, _extends({}, props, windowDimensions));
        }
    );
}

DialogBoxActionsContainer.displayName = 'DialogBoxActionsContainer';