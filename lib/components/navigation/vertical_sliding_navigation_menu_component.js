'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.VerticalSlidingNavigationMenuClass = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

// local imports


exports.VerticalSlidingNavigationMenuComponent = VerticalSlidingNavigationMenuComponent;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ramda = require('ramda');

var _design_components = require('@webfuturistics/design_components');

var _theming = require('./../../theming');

var _utility = require('./../utility');

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

            maxWidth: theme.navigationStyles.verticalNavigationMaxWidth + 'px',
            minWidth: '245px',

            height: '100%',

            flexDirection: 'column',
            flexWrap: 'nowrap',

            justifyContent: 'flex-start',
            alignItems: 'stretch',
            alignContent: 'flex-start',

            padding: theme.layoutStyles.topSpacing + 'px \n                  ' + theme.layoutStyles.rightSpacing + 'px \n                  ' + theme.layoutStyles.leftSpacing + 'px \n                  ' + theme.layoutStyles.bottomSpacing + 'px\n        ',

            backgroundColor: theme.navigationStyles.bodyBGColor1,

            '& > $menuItemContainer': {
                boxSizing: 'border-box',
                display: 'flex',

                flexBasis: 'auto',
                flexGrow: '0',
                flexShrink: '1',

                borderRadius: theme.layoutStyles.headerBorderRadius,
                padding: '8px 12px 8px 12px',

                flexDirection: 'row',
                flexWrap: 'nowrap',

                justifyContent: 'flex-start',
                alignItems: 'center',
                alignContent: 'flex-start',

                cursor: 'pointer',

                '&:hover': {
                    backgroundColor: theme.navigationStyles.bodyHoverColor1
                },

                '&.utility': {
                    cursor: 'default',

                    '& > $dividerOuterContainer': {
                        padding: '0px',

                        '& > $dividerInnerContainer': {
                            backgroundColor: theme.navigationStyles.fontColor1
                        }
                    }
                },

                '&.utility:hover': {
                    backgroundColor: 'initial'
                },

                '& > $itemNodeContainer': {
                    boxSizing: 'border-box',

                    flexBasis: 'auto',
                    flexGrow: '1',
                    flexShrink: '1'
                },

                '& > $itemIconContainer': {
                    boxSizing: 'border-box',

                    flexBasis: 'auto',
                    flexGrow: '0',
                    flexShrink: '1',

                    color: theme.navigationStyles.fontColor1,

                    '& > i': {
                        fontSize: theme.navigationStyles.iconFontSize + 'px'
                    }
                },

                '& > $itemCaptionContainer': {
                    boxSizing: 'border-box',

                    flexBasis: 'auto',
                    flexGrow: '0',
                    flexShrink: '1',

                    paddingLeft: '8px',

                    fontFamily: theme.navigationStyles.fontStack,
                    fontSize: theme.navigationStyles.captionFontSize + 'px',

                    color: theme.navigationStyles.fontColor1,

                    '&::first-letter': {
                        textTransform: 'uppercase'
                    }
                }
            }
        },

        menuItemContainer: {},

        itemNodeContainer: {},
        itemIconContainer: {},
        itemCaptionContainer: {},

        dividerOuterContainer: {},
        dividerInnerContainer: {}
    };
};

/**
 * Vertical sliding navigation styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation

// $FlowFixMe decorators
var VerticalSlidingNavigationMenuClass = exports.VerticalSlidingNavigationMenuClass = (_dec = (0, _reactJss2.default)(styles), _dec(_class = (_temp = _class2 = function (_React$Component) {
    _inherits(VerticalSlidingNavigationMenuClass, _React$Component);

    function VerticalSlidingNavigationMenuClass() {
        _classCallCheck(this, VerticalSlidingNavigationMenuClass);

        return _possibleConstructorReturn(this, (VerticalSlidingNavigationMenuClass.__proto__ || Object.getPrototypeOf(VerticalSlidingNavigationMenuClass)).apply(this, arguments));
    }

    _createClass(VerticalSlidingNavigationMenuClass, [{
        key: '_onMenuItemClick',


        // endregion

        // region private props
        // endregion

        // region constructor
        // endregion

        // region business logic
        // endregion

        // region lifecycle methods

        // region static props
        value: function _onMenuItemClick(event) {
            var _this2 = this;

            var target = event.target;

            var $menuItemElement = (0, _ramda.unless)(function (currentTarget) {
                return !(0, _ramda.isNil)(currentTarget.dataset['data-menuitemtype']);
            }, function (currentTarget) {
                return currentTarget.closest('div[data-menuitemtype]');
            })(target);

            if ((0, _ramda.isNil)($menuItemElement) || (0, _ramda.isNil)($menuItemElement.dataset['index'])) {
                return;
            }

            var menuItemIndex = parseInt($menuItemElement.dataset['index']);

            (0, _ramda.cond)([[(0, _ramda.equals)('child'), function () {
                _this2._getOnMenuItemClickCallback()(menuItemIndex);
            }], [(0, _ramda.equals)('parent'), function () {
                _this2._getOnMenuParentItemClickCallback()(menuItemIndex);
            }], [_ramda.T, (0, _ramda.always)(null)]])($menuItemElement.dataset['menuitemtype']);
        }

        // endregion

        // region style accessors

    }, {
        key: '_getBackButtonIconClassName',
        value: function _getBackButtonIconClassName() {
            return (0, _ramda.defaultTo)(VerticalSlidingNavigationMenuClass.defaultProps.backButtonIconClassName)(this.props.backButtonIconClassName);
        }
    }, {
        key: '_getComponentContainerClassName',
        value: function _getComponentContainerClassName() {
            return this.props.classes.componentContainer;
        }
    }, {
        key: '_getMenuItemContainer',
        value: function _getMenuItemContainer() {
            return this.props.classes.menuItemContainer;
        }
    }, {
        key: '_getItemNodeContainerClassName',
        value: function _getItemNodeContainerClassName() {
            return this.props.classes.itemNodeContainer;
        }
    }, {
        key: '_getItemIconContainerClassName',
        value: function _getItemIconContainerClassName() {
            return this.props.classes.itemIconContainer;
        }
    }, {
        key: '_getItemCaptionContainerClassName',
        value: function _getItemCaptionContainerClassName() {
            return this.props.classes.itemCaptionContainer;
        }

        // endregion

        // region label accessors
        // endregion

        // region state accessors
        // endregion

        // region prop accessors

    }, {
        key: '_getBackButtonCaption',
        value: function _getBackButtonCaption() {
            return (0, _ramda.defaultTo)(VerticalSlidingNavigationMenuClass.defaultProps.backButtonCaption)(this.props.backButtonCaption);
        }
    }, {
        key: '_getSelectedItems',
        value: function _getSelectedItems() {
            var selectedItems = (0, _ramda.defaultTo)(VerticalSlidingNavigationMenuClass.defaultProps.selectedItems)(this.props.selectedItems);

            return (0, _ramda.unless)(_ramda.isNil, _ramda.clone)(selectedItems);
        }
    }, {
        key: '_getItems',
        value: function _getItems() {
            if ((0, _ramda.isNil)(this.props.items)) {
                return null;
            }

            var items = this.props.items;
            var selectedItems = this._getSelectedItems();

            if ((0, _design_components.isNotNil)(selectedItems)) {
                var newItems = (0, _ramda.reduce)(function (subItems, itemIndex) {
                    if ((0, _ramda.isNil)(itemIndex) || (0, _ramda.isNil)(subItems)) {
                        return null;
                    }

                    return (0, _design_components.isNotNil)(subItems[itemIndex].children) ? subItems[itemIndex].children : null;
                }, items, selectedItems);

                return (0, _ramda.unless)(_ramda.isNil, _ramda.clone)(newItems);
            } else {
                return items;
            }
        }
    }, {
        key: '_getOnMenuItemClickCallback',
        value: function _getOnMenuItemClickCallback() {
            return (0, _ramda.defaultTo)(VerticalSlidingNavigationMenuClass.defaultProps.onMenuItemClickCallback)(this.props.onMenuItemClickCallback);
        }
    }, {
        key: '_getOnMenuParentItemClickCallback',
        value: function _getOnMenuParentItemClickCallback() {
            return (0, _ramda.defaultTo)(VerticalSlidingNavigationMenuClass.defaultProps.onMenuParentItemClickCallback)(this.props.onMenuParentItemClickCallback);
        }

        // endregion

        // region handlers
        // endregion

        // region render methods

    }, {
        key: '_renderDivider',
        value: function _renderDivider() {
            var _props$classes = this.props.classes,
                dividerOuterContainer = _props$classes.dividerOuterContainer,
                dividerInnerContainer = _props$classes.dividerInnerContainer;


            return React.createElement(_utility.HorizontalDivider, {
                componentContainerClassName: dividerOuterContainer,
                bodyContainerClassName: dividerInnerContainer
            });
        }
    }, {
        key: '_renderMenuItemContainer',
        value: function _renderMenuItemContainer(key, type, index, className, children) {
            var composedKey = (0, _ramda.isNil)(key) ? null : type + '_' + key;
            var menuItemClassName = (0, _classnames2.default)(this._getMenuItemContainer(), className);

            return React.createElement(
                'div',
                { key: composedKey,
                    'data-menuitemtype': type,
                    'data-index': index,
                    className: menuItemClassName
                },
                children
            );
        }
    }, {
        key: '_renderNodeContainer',
        value: function _renderNodeContainer(node) {
            return React.createElement(
                'div',
                { className: this._getItemNodeContainerClassName() },
                node
            );
        }
    }, {
        key: '_renderCaptionContainer',
        value: function _renderCaptionContainer(caption) {
            return React.createElement(
                'div',
                {
                    className: this._getItemCaptionContainerClassName()
                },
                caption
            );
        }
    }, {
        key: '_renderIconContainer',
        value: function _renderIconContainer(iconClassName) {
            return React.createElement(
                'div',
                { className: this._getItemIconContainerClassName() },
                React.createElement('i', { className: iconClassName })
            );
        }
    }, {
        key: '_renderItem',
        value: function _renderItem(_ref, index) {
            var node = _ref.node,
                caption = _ref.caption,
                iconClassName = _ref.iconClassName,
                children = _ref.children;

            if ((0, _design_components.isNotNil)(node)) {
                return this._renderMenuItemContainer(index, 'node', null, null, this._renderNodeContainer(node));
            } else {
                var dataIndex = (0, _design_components.isNotNil)(children) ? index : null;
                var menuItemChildren = React.createElement(
                    React.Fragment,
                    null,
                    this._renderIconContainer(iconClassName),
                    this._renderCaptionContainer(caption)
                );

                return this._renderMenuItemContainer(index, 'child', dataIndex, null, menuItemChildren);
            }
        }
    }, {
        key: '_renderItems',
        value: function _renderItems() {
            var items = this._getItems();

            if ((0, _ramda.isNil)(items)) {
                return null;
            }

            var indexedMap = (0, _ramda.addIndex)(_ramda.map);
            return indexedMap((0, _ramda.bind)(this._renderItem, this), items);
        }
    }, {
        key: '_renderParentItem',
        value: function _renderParentItem() {
            var _this3 = this;

            var selectedItems = this._getSelectedItems();

            return (0, _ramda.unless)(function (selectedItems) {
                return (0, _ramda.or)((0, _ramda.isNil)(selectedItems), (0, _ramda.isEmpty)(selectedItems));
            }, function (selectedItems) {
                var lastSelectedItem = selectedItems.pop();

                var backButtonIconClassName = _this3._getBackButtonIconClassName();
                var backButtonCaption = _this3._getBackButtonCaption();

                var menuItemChildren = React.createElement(
                    React.Fragment,
                    null,
                    _this3._renderIconContainer(backButtonIconClassName),
                    _this3._renderCaptionContainer(backButtonCaption)
                );

                return React.createElement(
                    React.Fragment,
                    null,
                    _this3._renderMenuItemContainer(0, 'parent', lastSelectedItem, null, menuItemChildren),
                    _this3._renderMenuItemContainer(0, 'node', null, 'utility', _this3._renderDivider())
                );
            })(selectedItems);
        }
    }, {
        key: '_renderComponentContainer',
        value: function _renderComponentContainer() {
            return React.createElement(
                'div',
                {
                    onClick: (0, _ramda.bind)(this._onMenuItemClick, this),
                    className: this._getComponentContainerClassName()
                },
                this._renderParentItem(),
                this._renderItems()
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return this._renderComponentContainer();
        }

        // endregion

    }]);

    return VerticalSlidingNavigationMenuClass;
}(React.Component), _class2.displayName = 'VerticalSlidingNavigationMenuClass', _class2.defaultProps = {
    items: null,
    selectedItems: null,

    backButtonCaption: 'back',
    backButtonIconClassName: 'fas fa-arrow-left',

    onMenuItemClickCallback: function onMenuItemClickCallback() {},
    onMenuParentItemClickCallback: function onMenuParentItemClickCallback() {}
}, _temp)) || _class);

// exports

function VerticalSlidingNavigationMenuComponent(props) {
    return React.createElement(
        _theming.MainThemeContext.Consumer,
        null,
        function (windowDimensions) {
            return React.createElement(VerticalSlidingNavigationMenuClass, _extends({}, props, windowDimensions));
        }
    );
}

VerticalSlidingNavigationMenuComponent.displayName = 'VerticalSlidingNavigationMenuComponent';