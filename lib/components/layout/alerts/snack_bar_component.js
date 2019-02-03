'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SnackBarComponent = exports.SnackBarClass = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

// local imports


var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _ramda = require('ramda');

var _regular_alert_component = require('./regular_alert_component');

var _main_theme_provider = require('./../../../theming/providers/main_theme_provider');

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
            position: 'fixed',

            top: '0px',
            left: '0px',

            width: '100%',
            height: 'auto',

            flexDirection: 'column',
            flexWrap: 'wrap',

            justifyContent: 'flex-start',
            alignItems: 'center',
            alignContent: 'center',

            padding: theme.layoutStyles.topSpacing + 'px \n                  ' + theme.layoutStyles.rightSpacing + 'px \n                  ' + theme.layoutStyles.bottomSpacing + 'px \n                  ' + theme.layoutStyles.leftSpacing + 'px\n        ',

            transitionProperty: 'height',
            transitionDuration: '0.2s',
            transitionTimingFunction: 'ease-out',

            '& > $itemContainer': {
                flexBasis: 'auto',
                flexGrow: 0,
                flexShrink: 1,

                width: '50%',

                marginTop: theme.layoutStyles.sectionVerticalSpacing + 'px'
            },

            '& > $itemContainer:first-child': {
                marginTop: '0px'
            }
        },

        itemContainer: {}
    };
};

/**
 * Snack bar component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation

// $FlowFixMe decorators
var SnackBarClass = (_dec = (0, _reactJss2.default)(styles), _dec(_class = (_temp = _class2 = function (_React$Component) {
    _inherits(SnackBarClass, _React$Component);

    // endregion

    // region private props
    // endregion

    // region constructor
    function SnackBarClass(props) {
        _classCallCheck(this, SnackBarClass);

        var _this = _possibleConstructorReturn(this, (SnackBarClass.__proto__ || Object.getPrototypeOf(SnackBarClass)).call(this, props));

        _this.state = {
            zIndex: _this.props.theme.styleValuesRegister.zIndex
        };
        return _this;
    }

    // endregion

    // region business logic
    // endregion

    // region lifecycle methods

    // region static props


    _createClass(SnackBarClass, [{
        key: '_getItemClassName',


        // endregion

        // region style accessors
        value: function _getItemClassName() {
            return this.props.classes.itemContainer;
        }
    }, {
        key: '_getComponentContainerClassName',
        value: function _getComponentContainerClassName() {
            return this.props.classes.componentContainer;
        }
    }, {
        key: '_getComponentContainerStyle',
        value: function _getComponentContainerStyle() {
            return {
                zIndex: this._getComponentContainerZIndex()
            };
        }

        // endregion

        // region label accessors
        // endregion

        // region state accessors

    }, {
        key: '_getComponentContainerZIndex',
        value: function _getComponentContainerZIndex() {
            return (0, _ramda.defaultTo)(SnackBarClass.defaultState.zIndex)(this.state.zIndex);
        }

        // endregion

        // region prop accessors

    }, {
        key: '_getItems',
        value: function _getItems() {
            return (0, _ramda.defaultTo)(SnackBarClass.defaultProps.items)(this.props.items);
        }

        // endregion

        // region handlers
        // endregion

        // region render methods

    }, {
        key: '_renderAlerts',
        value: function _renderAlerts() {
            var _this2 = this;

            var items = this._getItems();

            if ((0, _ramda.isNil)(items)) {
                return null;
            }

            return (0, _ramda.map)(function (item) {
                return React.createElement(
                    _regular_alert_component.RegularAlertComponent,
                    {
                        accent: item.type === 'error',
                        containerClassName: _this2._getItemClassName(),
                        iconClassName: item.iconClassName,
                        key: item.id
                    },
                    item.caption
                );
            }, items);
        }
    }, {
        key: '_renderComponentContainer',
        value: function _renderComponentContainer() {
            if ((0, _ramda.isNil)(this._getItems())) {
                return null;
            }

            return React.createElement(
                'div',
                {
                    className: this._getComponentContainerClassName(),
                    style: this._getComponentContainerStyle()
                },
                this._renderAlerts()
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return this._renderComponentContainer();
        }

        // endregion

    }], [{
        key: 'getDerivedStateFromProps',
        value: function getDerivedStateFromProps(props, state) {
            if (!props.theme.styleValuesRegister.isTop(state.zIndex)) {
                props.theme.styleValuesRegister.releaseZIndex(state.zIndex);

                return {
                    zIndex: props.theme.styleValuesRegister.zIndex
                };
            }

            return null;
        }
    }]);

    return SnackBarClass;
}(React.Component), _class2.displayName = 'SnackBar', _class2.defaultProps = {
    items: null
}, _class2.defaultState = {
    zIndex: 0
}, _temp)) || _class);


function SnackBarComponent(props) {
    return React.createElement(
        _main_theme_provider.MainThemeContext.Consumer,
        null,
        function (windowDimensions) {
            return React.createElement(SnackBarClass, _extends({}, props, windowDimensions));
        }
    );
}

SnackBarComponent.displayName = 'SnackBarComponent';

// exports
exports.SnackBarClass = SnackBarClass;
exports.SnackBarComponent = SnackBarComponent;