'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.VerticalNavigationMenuComponent = exports.VerticalNavigationMenuComponentClass = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

// local imports


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _ramda = require('ramda');

var _utility_helpers = require('@webfuturistics/design_components/lib/helpers/general/utility_helpers');

var _regular_card_component = require('./../layout/structure/regular_card_component');

var _collapsible_component = require('./../utility/collapsible_component');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// styles definition
var styles = function styles(theme) {
    return {
        componentContainer: {},

        navigationContainer: {
            '& ul': {
                boxSizing: 'border-box',
                display: 'flex',

                flexBasis: 'auto',
                flexGrow: 0,
                flexShrink: 1,

                flexDirection: 'column',
                flexWrap: 'nowrap',

                justifyContent: 'flex-start',
                alignItems: 'stretch',
                alignContent: 'flex-start',

                margin: '0px',
                padding: '0px',

                listStyleImage: 'none',
                listStyleType: 'none',
                listStylePosition: 'inside',

                '& li': {
                    boxSizing: 'border-box',

                    display: 'flex',

                    flexDirection: 'row',
                    flexWrap: 'nowrap',

                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    alignContent: 'flex-start',

                    flexBasis: 'auto',
                    flexGrow: 0,
                    flexShrink: 1,

                    margin: '0px',
                    padding: '0px',

                    '& > i': {
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',

                        minWidth: '25px',

                        flexBasis: '25px',
                        flexGrow: 0,
                        flexShrink: 1,

                        textAlign: 'center'
                    },

                    '& > div': {
                        display: 'flex',

                        width: 'calc(100% - 25px)',

                        flexDirection: 'column',
                        flexWrap: 'nowrap',

                        flexBasis: 'auto',
                        flexGrow: 0,
                        flexShrink: 1,

                        justifyContent: 'flex-start',
                        alignItems: 'stretch',
                        alignContent: 'flex-start',

                        '& > span,a': {
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',

                            flexBasis: 'auto',
                            flexGrow: 0,
                            flexShrink: 1,

                            cursor: 'pointer',

                            textDecoration: 'none',
                            color: 'black'
                        },

                        '& > ul': {
                            flexBasis: 'auto',
                            flexGrow: 0,
                            flexShrink: 1
                        }
                    }
                }
            }
        }
    };
};

// component implementation
var VerticalNavigationMenuComponentClass = exports.VerticalNavigationMenuComponentClass = (_temp = _class = function (_Component) {
    _inherits(VerticalNavigationMenuComponentClass, _Component);

    _createClass(VerticalNavigationMenuComponentClass, [{
        key: '_onClickListItem',

        // region static props
        value: function _onClickListItem(event, listItemIndex) {
            var selectedListElements = this.state.selectedListElements;
            var selectedListElementIndex = (0, _ramda.indexOf)(listItemIndex, selectedListElements);

            var newSelectedListElements = (0, _ramda.cond)([[(0, _ramda.equals)(-1), function () {
                return (0, _ramda.append)(listItemIndex, selectedListElements);
            }], [(0, _ramda.complement)(_ramda.equals)(-1), function () {
                return (0, _ramda.remove)(selectedListElementIndex, 1, selectedListElements);
            }]])(selectedListElementIndex);

            this.setState({ selectedListElements: newSelectedListElements });
        }
    }, {
        key: '_shouldBindOnClickHandler',
        value: function _shouldBindOnClickHandler(elementData) {
            return this._dataElementHasChildren(elementData) && !this._dataElementContainsReactNode(elementData);
        }
    }, {
        key: '_dataElementContainsReactNode',
        value: function _dataElementContainsReactNode(menuElementData) {
            return (0, _utility_helpers.isNotNil)(menuElementData.element);
        }
    }, {
        key: '_dataElementHasChildren',
        value: function _dataElementHasChildren(elementData) {
            var children = elementData.children;

            return (0, _ramda.and)((0, _utility_helpers.isNotNil)(children), !(0, _ramda.isEmpty)(children));
        }
    }, {
        key: '_extractIconClassNames',
        value: function _extractIconClassNames(elementData) {
            return (0, _ramda.cond)([[function (_ref) {
                var iconClassNames = _ref.iconClassNames;
                return (0, _utility_helpers.isNotNil)(iconClassNames);
            }, function (_ref2) {
                var iconClassNames = _ref2.iconClassNames;
                return iconClassNames;
            }], [this._dataElementHasChildren, (0, _ramda.always)('fas fa-chevron-right')], [_ramda.T, (0, _ramda.always)(null)]])(elementData);
        }
    }, {
        key: '_createIconElement',
        value: function _createIconElement(elementData) {
            var iconClassNames = this._extractIconClassNames(elementData);
            return (0, _ramda.unless)(_ramda.isNil, function (classNames) {
                return _react2.default.createElement('i', { className: classNames });
            })(iconClassNames);
        }
    }, {
        key: '_createCaptionElement',
        value: function _createCaptionElement(menuElementData, listElementIndex) {
            var _this2 = this;

            return (0, _ramda.cond)([[function (_ref3) {
                var name = _ref3.name;
                return (0, _utility_helpers.isNotNil)(name);
            }, function (_ref4) {
                var name = _ref4.name;
                return _react2.default.createElement(
                    'span',
                    { onClick: _this2._shouldBindOnClickHandler(menuElementData) ? (0, _ramda.curry)(_this2._onClickListItem)(_ramda.__, listElementIndex) : null },
                    name
                );
            }], [this._dataElementContainsReactNode, function (_ref5) {
                var element = _ref5.element;
                return element;
            }], [_ramda.T, (0, _ramda.always)(null)]])(menuElementData);
        }
    }, {
        key: '_renderElementsList',
        value: function _renderElementsList(data) {
            var _this3 = this;

            var deepLevelStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

            var indexedMap = (0, _ramda.addIndex)(_ramda.map);
            var preparedList = indexedMap(function (menuElementData, menuElementIndex) {
                var listElementIndex = '' + deepLevelStr + menuElementIndex;

                var menuElementHasChildren = _this3._dataElementHasChildren(menuElementData);
                var isChildrenListShown = (0, _ramda.contains)(listElementIndex, _this3.state.selectedListElements);
                var childElementsList = menuElementHasChildren ? _this3._renderElementsList(menuElementData.children, listElementIndex) : null;

                var $icon = _this3._createIconElement(menuElementData);
                var $caption = _this3._createCaptionElement(menuElementData, listElementIndex);
                var $collapsibleChildElementsList = menuElementHasChildren && _react2.default.createElement(
                    _collapsible_component.CollapsibleComponent,
                    { useVisibility: true, removeContentOnClose: false, open: isChildrenListShown },
                    childElementsList
                );

                return _react2.default.createElement(
                    'li',
                    { key: 'menu_elm_' + menuElementIndex },
                    $icon,
                    _react2.default.createElement(
                        'div',
                        null,
                        $caption,
                        $collapsibleChildElementsList
                    )
                );
            }, data);

            return _react2.default.createElement(
                'ul',
                null,
                preparedList
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _props$classes = this.props.classes,
                componentContainer = _props$classes.componentContainer,
                navigationContainer = _props$classes.navigationContainer;
            var _props = this.props,
                title = _props.title,
                data = _props.data;


            return _react2.default.createElement(
                _regular_card_component.RegularCardComponent,
                { title: title, containerClassName: componentContainer },
                _react2.default.createElement(
                    'nav',
                    { className: navigationContainer },
                    this._renderElementsList(data)
                )
            );
        }
    }]);

    function VerticalNavigationMenuComponentClass(props) {
        _classCallCheck(this, VerticalNavigationMenuComponentClass);

        var _this = _possibleConstructorReturn(this, (VerticalNavigationMenuComponentClass.__proto__ || Object.getPrototypeOf(VerticalNavigationMenuComponentClass)).call(this, props));

        var self = _this;

        _this.state = {
            selectedListElements: []
        };

        self._onClickListItem = self._onClickListItem.bind(_this);
        return _this;
    }

    return VerticalNavigationMenuComponentClass;
}(_react.Component), _class.displayName = 'VerticalNavigationMenuComponent', _class.defaultProps = {
    title: '',
    data: []
}, _temp);

// exports

var VerticalNavigationMenuComponent = exports.VerticalNavigationMenuComponent = (0, _reactJss2.default)(styles)(VerticalNavigationMenuComponentClass);