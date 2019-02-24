'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.VerticalIconNavigationMenuClass = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

// local imports


exports.VerticalIconNavigationMenuComponent = VerticalIconNavigationMenuComponent;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ramda = require('ramda');

var _main_theme_provider = require('./../../theming/providers/main_theme_provider');

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

            width: '50px',
            height: '100%',

            paddingTop: theme.layoutStyles.topSpacing + 'px',
            paddingBottom: theme.layoutStyles.bottomSpacing + 'px',

            flexDirection: 'column',
            flexWrap: 'nowrap',

            justifyContent: 'space-between',
            alignItems: 'center',
            alignContent: 'flex-start',

            backgroundColor: theme.navigationStyles.bodyBGColor1,

            '& > $iconsContainer': {
                boxSizing: 'border-box',
                display: 'flex',

                flexBasis: 'auto',
                flexGrow: 0,
                flexShrink: 1,

                flexDirection: 'column',
                flexWrap: 'nowrap',

                justifyContent: 'space-between',
                alignItems: 'center',
                alignContent: 'flex-start',

                '& > $iconContainer': {
                    display: 'flex',

                    flexBasis: 'auto',
                    flexGrow: 0,
                    flexShrink: 1,

                    flexDirection: 'column',
                    flexWrap: 'nowrap',

                    justifyContent: 'center',
                    alignItems: 'center',
                    alignContent: 'center',

                    width: '36px',
                    height: '36px',

                    borderRadius: '50%',

                    cursor: 'pointer',

                    '& > a': {
                        boxSizing: 'border-box',
                        display: 'flex',

                        width: '100%',

                        flexBasis: '100%',
                        flexGrow: 0,
                        flexShrink: 1,

                        flexDirection: 'column',
                        flexWrap: 'nowrap',

                        justifyContent: 'center',
                        alignItems: 'center',
                        alignContent: 'center',

                        textDecoration: 'none',
                        color: theme.navigationStyles.fontColor1
                    },

                    '& > i': {
                        boxSizing: 'border-box',

                        fontSize: theme.navigationStyles.iconFontSize + 'px',

                        textDecoration: 'none',
                        color: theme.navigationStyles.fontColor1
                    },

                    '&:hover': {
                        backgroundColor: theme.navigationStyles.bodyHoverColor1
                    }
                }
            },

            '& > $topIconsContainer': {
                alignContent: 'flex-start'
            },

            '& > $bottomIconsContainer': {
                alignContent: 'flex-end'
            }
        },

        iconsContainer: {},
        topIconsContainer: {},
        bottomIconsContainer: {},
        iconContainer: {}
    };
};

/**
 * Vertical icon navigation styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation

// $FlowFixMe decorators
var VerticalIconNavigationMenuClass = exports.VerticalIconNavigationMenuClass = (_dec = (0, _reactJss2.default)(styles), _dec(_class = (_temp = _class2 = function (_React$Component) {
    _inherits(VerticalIconNavigationMenuClass, _React$Component);

    function VerticalIconNavigationMenuClass() {
        _classCallCheck(this, VerticalIconNavigationMenuClass);

        return _possibleConstructorReturn(this, (VerticalIconNavigationMenuClass.__proto__ || Object.getPrototypeOf(VerticalIconNavigationMenuClass)).apply(this, arguments));
    }

    _createClass(VerticalIconNavigationMenuClass, [{
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
            return (0, _ramda.defaultTo)(VerticalIconNavigationMenuClass.defaultProps.style)(this.props.style);
        }
    }, {
        key: '_getComponentContainerClassName',
        value: function _getComponentContainerClassName() {
            return this.props.classes.componentContainer;
        }
    }, {
        key: '_getTopIconsContainerClassName',
        value: function _getTopIconsContainerClassName() {
            return (0, _classnames2.default)(this.props.classes.iconsContainer, this.props.classes.topIconsContainer);
        }
    }, {
        key: '_getBottomIconsContainerClassName',
        value: function _getBottomIconsContainerClassName() {
            return (0, _classnames2.default)(this.props.classes.iconsContainer, this.props.classes.bottomIconsContainer);
        }
    }, {
        key: '_getIconContainerClassName',
        value: function _getIconContainerClassName() {
            return this.props.classes.iconContainer;
        }

        // endregion

        // region label accessors
        // endregion

        // region state accessors
        // endregion

        // region prop accessors

    }, {
        key: '_getBottomItemsCount',
        value: function _getBottomItemsCount() {
            var bottomItemsCount = this.props.bottomItemsCount;

            return (0, _ramda.defaultTo)(VerticalIconNavigationMenuClass.defaultProps.bottomItemsCount)(bottomItemsCount);
        }

        // endregion

        // region handlers
        // endregion

        // region render methods

    }, {
        key: '_renderIconContainers',
        value: function _renderIconContainers(icons, sectionKey) {
            var _this2 = this;

            var indexedMap = (0, _ramda.addIndex)(_ramda.map);

            return indexedMap(function (icon, key) {
                return React.createElement(
                    'div',
                    {
                        className: _this2._getIconContainerClassName(),
                        key: sectionKey + '_' + key
                    },
                    icon
                );
            }, icons);
        }
    }, {
        key: '_renderBottomIconsContainer',
        value: function _renderBottomIconsContainer(bottomChildren) {
            return React.createElement(
                'div',
                { className: this._getBottomIconsContainerClassName() },
                this._renderIconContainers(bottomChildren, 'bottom')
            );
        }
    }, {
        key: '_renderTopIconsContainer',
        value: function _renderTopIconsContainer(topChildren) {
            return React.createElement(
                'div',
                { className: this._getTopIconsContainerClassName() },
                this._renderIconContainers(topChildren, 'top')
            );
        }
    }, {
        key: '_renderComponentContainer',
        value: function _renderComponentContainer() {
            var children = React.Children.toArray(this.props.children);
            var childrenCount = (0, _ramda.length)(children);

            var bottomChildrenCount = this._getBottomItemsCount();
            var topChildrenCount = childrenCount - bottomChildrenCount;

            var topChildrenStartIndex = 0;
            var topChildrenEndIndex = topChildrenCount;

            var bottomChildrenStartIndex = topChildrenCount;
            var bottomChildrenEndIndex = childrenCount;

            var topChildren = (0, _ramda.slice)(topChildrenStartIndex, topChildrenEndIndex, children);
            var bottomChildren = (0, _ramda.slice)(bottomChildrenStartIndex, bottomChildrenEndIndex, children);

            return React.createElement(
                'div',
                {
                    className: this._getComponentContainerClassName(),
                    style: this._getComponentContainerStyle()
                },
                this._renderTopIconsContainer(topChildren),
                this._renderBottomIconsContainer(bottomChildren)
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return this._renderComponentContainer();
        }

        // endregion

    }]);

    return VerticalIconNavigationMenuClass;
}(React.Component), _class2.displayName = 'VerticalIconNavigationMenuClass', _class2.defaultProps = {
    bottomItemsCount: 0,
    style: {}
}, _temp)) || _class);

// exports

function VerticalIconNavigationMenuComponent(props) {
    return React.createElement(
        _main_theme_provider.MainThemeContext.Consumer,
        null,
        function (windowDimensions) {
            return React.createElement(VerticalIconNavigationMenuClass, _extends({}, props, windowDimensions));
        }
    );
}

VerticalIconNavigationMenuComponent.displayName = 'VerticalIconNavigationMenuComponent';