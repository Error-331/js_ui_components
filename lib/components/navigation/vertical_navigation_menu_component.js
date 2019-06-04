'use strict'; // external imports

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VerticalNavigationMenuComponent = exports.VerticalNavigationMenuComponentClass = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _ramda = require("ramda");

var _utility_helpers = require("@webfuturistics/design_components/lib/helpers/general/utility_helpers");

var _regular_card_component = require("./../layout/structure/regular_card_component");

var _collapsible_component = require("./../utility/collapsible_component");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
}; // component implementation


var VerticalNavigationMenuComponentClass =
/*#__PURE__*/
function (_Component) {
  _inherits(VerticalNavigationMenuComponentClass, _Component);

  _createClass(VerticalNavigationMenuComponentClass, [{
    key: "_onClickListItem",
    // region static props
    value: function _onClickListItem(event, listItemIndex) {
      var selectedListElements = this.state.selectedListElements;
      var selectedListElementIndex = (0, _ramda.indexOf)(listItemIndex, selectedListElements);
      var newSelectedListElements = (0, _ramda.cond)([[(0, _ramda.equals)(-1), function () {
        return (0, _ramda.append)(listItemIndex, selectedListElements);
      }], [(0, _ramda.complement)(_ramda.equals)(-1), function () {
        return (0, _ramda.remove)(selectedListElementIndex, 1, selectedListElements);
      }]])(selectedListElementIndex);
      this.setState({
        selectedListElements: newSelectedListElements
      });
    }
  }, {
    key: "_shouldBindOnClickHandler",
    value: function _shouldBindOnClickHandler(elementData) {
      return this._dataElementHasChildren(elementData) && !this._dataElementContainsReactNode(elementData);
    }
  }, {
    key: "_dataElementContainsReactNode",
    value: function _dataElementContainsReactNode(menuElementData) {
      return (0, _utility_helpers.isNotNil)(menuElementData.element);
    }
  }, {
    key: "_dataElementHasChildren",
    value: function _dataElementHasChildren(elementData) {
      var children = elementData.children;
      return (0, _ramda.and)((0, _utility_helpers.isNotNil)(children), !(0, _ramda.isEmpty)(children));
    }
  }, {
    key: "_extractIconClassNames",
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
    key: "_createIconElement",
    value: function _createIconElement(elementData) {
      var iconClassNames = this._extractIconClassNames(elementData);

      return (0, _ramda.unless)(_ramda.isNil, function (classNames) {
        return _react.default.createElement("i", {
          className: classNames
        });
      })(iconClassNames);
    }
  }, {
    key: "_createCaptionElement",
    value: function _createCaptionElement(menuElementData, listElementIndex) {
      var _this2 = this;

      return (0, _ramda.cond)([[function (_ref3) {
        var name = _ref3.name;
        return (0, _utility_helpers.isNotNil)(name);
      }, function (_ref4) {
        var name = _ref4.name;
        return _react.default.createElement("span", {
          onClick: _this2._shouldBindOnClickHandler(menuElementData) ? (0, _ramda.curry)(_this2._onClickListItem)(_ramda.__, listElementIndex) : null
        }, name);
      }], [this._dataElementContainsReactNode, function (_ref5) {
        var element = _ref5.element;
        return element;
      }], [_ramda.T, (0, _ramda.always)(null)]])(menuElementData);
    }
  }, {
    key: "_renderElementsList",
    value: function _renderElementsList(data) {
      var _this3 = this;

      var deepLevelStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var indexedMap = (0, _ramda.addIndex)(_ramda.map);
      var preparedList = indexedMap(function (menuElementData, menuElementIndex) {
        var listElementIndex = "".concat(deepLevelStr).concat(menuElementIndex);

        var menuElementHasChildren = _this3._dataElementHasChildren(menuElementData);

        var isChildrenListShown = (0, _ramda.contains)(listElementIndex, _this3.state.selectedListElements);
        var childElementsList = menuElementHasChildren ? _this3._renderElementsList(menuElementData.children, listElementIndex) : null;

        var $icon = _this3._createIconElement(menuElementData);

        var $caption = _this3._createCaptionElement(menuElementData, listElementIndex);

        var $collapsibleChildElementsList = menuElementHasChildren && _react.default.createElement(_collapsible_component.CollapsibleComponent, {
          useVisibility: true,
          removeContentOnClose: false,
          open: isChildrenListShown
        }, childElementsList);

        return _react.default.createElement("li", {
          key: "menu_elm_".concat(menuElementIndex)
        }, $icon, _react.default.createElement("div", null, $caption, $collapsibleChildElementsList));
      }, data);
      return _react.default.createElement("ul", null, preparedList);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$classes = this.props.classes,
          componentContainer = _this$props$classes.componentContainer,
          navigationContainer = _this$props$classes.navigationContainer;
      var _this$props = this.props,
          title = _this$props.title,
          data = _this$props.data;
      return _react.default.createElement(_regular_card_component.RegularCardComponent, {
        title: title,
        containerClassName: componentContainer
      }, _react.default.createElement("nav", {
        className: navigationContainer
      }, this._renderElementsList(data)));
    }
  }]);

  function VerticalNavigationMenuComponentClass(props) {
    var _this;

    _classCallCheck(this, VerticalNavigationMenuComponentClass);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VerticalNavigationMenuComponentClass).call(this, props));

    var self = _assertThisInitialized(_this);

    _this.state = {
      selectedListElements: []
    };
    self._onClickListItem = self._onClickListItem.bind(_assertThisInitialized(_this));
    return _this;
  }

  return VerticalNavigationMenuComponentClass;
}(_react.Component); // exports


exports.VerticalNavigationMenuComponentClass = VerticalNavigationMenuComponentClass;

_defineProperty(VerticalNavigationMenuComponentClass, "displayName", 'VerticalNavigationMenuComponent');

_defineProperty(VerticalNavigationMenuComponentClass, "defaultProps", {
  title: '',
  data: []
});

var VerticalNavigationMenuComponent = (0, _reactJss.default)(styles)(VerticalNavigationMenuComponentClass);
exports.VerticalNavigationMenuComponent = VerticalNavigationMenuComponent;