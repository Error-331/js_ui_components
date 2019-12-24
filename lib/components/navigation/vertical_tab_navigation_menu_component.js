'use strict'; // external imports

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VerticalTabNavigationMenuComponent = VerticalTabNavigationMenuComponent;
exports.default = exports.VerticalTabNavigationMenuClass = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ramda = require("ramda");

var _main_theme_provider = require("./../../theming/providers/main_theme_provider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// styles definition
var styles = function styles(theme) {
  return {
    componentContainer: {
      boxSizing: 'border-box',
      position: 'relative',
      '& > $realTabsContainer': {
        boxSizing: 'border-box',
        position: 'relative',
        display: 'flex',
        top: '0px',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        alignContent: 'flex-start',
        zIndex: 2,
        '& > $tabContainer': {
          flexBasis: 'auto',
          flexShrink: 1,
          flexGrow: 0,
          cursor: 'pointer',
          '& > $tabLabelContainer': {
            textAlign: 'left',
            paddingTop: '10px',
            paddingBottom: '10px',
            paddingLeft: '20px',
            textTransform: 'uppercase',
            fontFamily: theme.navigationStyles.fontStack,
            fontSize: "".concat(theme.navigationStyles.captionFontSize, "px"),
            textDecoration: 'none',
            color: theme.navigationStyles.fontColor2
          }
        }
      },
      '& > $imaginaryTabsContainer': {
        boxSizing: 'border-box',
        position: 'absolute',
        width: '100%',
        height: '50px',
        top: '0px',
        zIndex: 1,
        '& > $selectionBarContainer': {
          boxSizing: 'border-box',
          display: 'flex',
          position: 'relative',
          top: '0px',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          justifyContent: 'flex-start',
          alignItems: 'stretch',
          alignContent: 'flex-start',
          backgroundColor: theme.baseStyles.noneTransparentBGColor,
          '& > $selectionBar': {
            boxSizing: 'border-box',
            flexBasis: 'auto',
            flexShrink: 0,
            flexGrow: 0,
            width: '4px',
            height: '100%',
            backgroundColor: theme.baseStyles.accentColorPrimary
          }
        }
      }
    },
    realTabsContainer: {},
    imaginaryTabsContainer: {},
    tabContainer: {},
    tabLabelContainer: {},
    selectionBarContainer: {},
    selectionBar: {}
  };
};
/**
 * Vertical tab navigation menu.
 * Displays vertical tab navigation menu.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation


var VerticalTabNavigationMenuClass =
/*#__PURE__*/
function (_React$Component) {
  _inherits(VerticalTabNavigationMenuClass, _React$Component);

  // region static props
  // endregion
  // region private props
  // px
  // endregion
  // region constructor
  function VerticalTabNavigationMenuClass(props) {
    var _this;

    _classCallCheck(this, VerticalTabNavigationMenuClass);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VerticalTabNavigationMenuClass).call(this, props));
    _this.$realTabsContainer = void 0;
    _this.componentContainerWidth = 0;

    var self = _assertThisInitialized(_this);

    _this.$realTabsContainer = React.createRef();
    self._renderStringLabel = self._renderStringLabel.bind(_assertThisInitialized(_this));
    self._renderComponentLabel = self._renderComponentLabel.bind(_assertThisInitialized(_this));
    return _this;
  } // endregion
  // region business logic
  // endregion
  // region lifecycle methods
  // endregion
  // region style accessors


  _createClass(VerticalTabNavigationMenuClass, [{
    key: "_getSelectionBarStyle",
    value: function _getSelectionBarStyle() {
      return (0, _ramda.defaultTo)(VerticalTabNavigationMenuClass.defaultProps.selectionBarStyle)(this.props.selectionBarStyle);
    }
  }, {
    key: "_getSelectionBarContainerStyle",
    value: function _getSelectionBarContainerStyle() {
      var selectedTabIndex = this._getSelectedTabIndex();

      if ((0, _ramda.isNil)(selectedTabIndex) || selectedTabIndex === null) {
        return {
          display: 'none'
        };
      }

      var selectionBarStyle = (0, _ramda.defaultTo)(VerticalTabNavigationMenuClass.defaultProps.selectionBarContainerStyle)(this.props.selectionBarContainerStyle);

      var tabsContainerHeight = this._getRealTabsContainerHeight();

      var tabCount = this._getTabCount();

      var selectionBarContainerHeight = 0;

      if (tabCount !== 0) {
        selectionBarContainerHeight = tabsContainerHeight / tabCount;
      }

      var selectionBarContainerTop = selectedTabIndex * selectionBarContainerHeight;
      return (0, _ramda.mergeDeepRight)({
        top: "".concat(selectionBarContainerTop, "px"),
        height: "".concat(selectionBarContainerHeight, "px")
      }, selectionBarStyle);
    }
  }, {
    key: "_getImaginaryTabsContainerStyle",
    value: function _getImaginaryTabsContainerStyle() {
      return (0, _ramda.defaultTo)(VerticalTabNavigationMenuClass.defaultProps.imaginaryTabsContainerStyle)(this.props.imaginaryTabsContainerStyle);
    }
  }, {
    key: "_getRealTabsContainerStyle",
    value: function _getRealTabsContainerStyle() {
      return (0, _ramda.defaultTo)(VerticalTabNavigationMenuClass.defaultProps.realTabsContainerStyle)(this.props.realTabsContainerStyle);
    }
  }, {
    key: "_getTabContainerStyle",
    value: function _getTabContainerStyle() {
      return (0, _ramda.defaultTo)(VerticalTabNavigationMenuClass.defaultProps.tabContainerStyle)(this.props.tabContainerStyle);
    }
  }, {
    key: "_getTabLabelContainerStyle",
    value: function _getTabLabelContainerStyle() {
      return (0, _ramda.defaultTo)(VerticalTabNavigationMenuClass.defaultProps.tabLabelContainerStyle)(this.props.tabLabelContainerStyle);
    }
  }, {
    key: "_getComponentContainerStyle",
    value: function _getComponentContainerStyle() {
      return (0, _ramda.defaultTo)(VerticalTabNavigationMenuClass.defaultProps.componentContainerStyle)(this.props.componentContainerStyle);
    }
  }, {
    key: "_getSelectionBarClassName",
    value: function _getSelectionBarClassName() {
      return (0, _classnames.default)(this.props.classes.selectionBar, this._getUserSelectionBarClassName());
    }
  }, {
    key: "_getSelectionBarContainerClassName",
    value: function _getSelectionBarContainerClassName() {
      return this.props.classes.selectionBarContainer;
    }
  }, {
    key: "_getImaginaryTabsContainerClassName",
    value: function _getImaginaryTabsContainerClassName() {
      return this.props.classes.imaginaryTabsContainer;
    }
  }, {
    key: "_getTabLabelContainerClassName",
    value: function _getTabLabelContainerClassName(customClassName) {
      return (0, _classnames.default)(this.props.classes.tabLabelContainer, customClassName);
    }
  }, {
    key: "_getTabContainerClassName",
    value: function _getTabContainerClassName() {
      return (0, _classnames.default)(this.props.classes.tabContainer, this._getUserTabContainerClassName());
    }
  }, {
    key: "_getRealTabsContainerClassName",
    value: function _getRealTabsContainerClassName() {
      return (0, _classnames.default)(this.props.classes.realTabsContainer, this._getUserRealTabsContainerClassName());
    }
  }, {
    key: "_getComponentContainerClassName",
    value: function _getComponentContainerClassName() {
      return (0, _classnames.default)(this.props.classes.componentContainer, this._getUserComponentContainerClassName());
    } // endregion
    // region label accessors
    // endregion
    // region state accessors
    // endregion
    // region prop accessors

  }, {
    key: "_getUserComponentContainerClassName",
    value: function _getUserComponentContainerClassName() {
      return (0, _ramda.defaultTo)(VerticalTabNavigationMenuClass.defaultProps.componentContainerClassName)(this.props.componentContainerClassName);
    }
  }, {
    key: "_getUserRealTabsContainerClassName",
    value: function _getUserRealTabsContainerClassName() {
      return (0, _ramda.defaultTo)(VerticalTabNavigationMenuClass.defaultProps.realTabsContainerClassName)(this.props.realTabsContainerClassName);
    }
  }, {
    key: "_getUserTabContainerClassName",
    value: function _getUserTabContainerClassName() {
      return (0, _ramda.defaultTo)(VerticalTabNavigationMenuClass.defaultProps.tabContainerClassName)(this.props.tabContainerClassName);
    }
  }, {
    key: "_getUserSelectionBarClassName",
    value: function _getUserSelectionBarClassName() {
      return (0, _ramda.defaultTo)(VerticalTabNavigationMenuClass.defaultProps.selectionBarClassName)(this.props.selectionBarClassName);
    }
  }, {
    key: "_getSelectedTabIndex",
    value: function _getSelectedTabIndex() {
      return (0, _ramda.defaultTo)(VerticalTabNavigationMenuClass.defaultProps.selectedTabIndex)(this.props.selectedTabIndex);
    }
  }, {
    key: "_getRealTabsContainerHeight",
    value: function _getRealTabsContainerHeight() {
      if ((0, _ramda.isNil)(this.$realTabsContainer) || (0, _ramda.isNil)(this.$realTabsContainer.current)) {
        return 0;
      }

      return this.$realTabsContainer.current.clientHeight;
    }
  }, {
    key: "_getTabCount",
    value: function _getTabCount() {
      return (0, _ramda.length)(this._getTabsData());
    }
  }, {
    key: "_getTabsData",
    value: function _getTabsData() {
      return (0, _ramda.defaultTo)(VerticalTabNavigationMenuClass.defaultProps.tabs)(this.props.tabs);
    } // endregion
    // region handlers
    // endregion
    // region render methods

  }, {
    key: "_renderSelectionBar",
    value: function _renderSelectionBar() {
      return React.createElement("div", {
        className: this._getSelectionBarClassName(),
        style: this._getSelectionBarStyle()
      });
    }
  }, {
    key: "_renderSelectionBarContainer",
    value: function _renderSelectionBarContainer() {
      return React.createElement("div", {
        className: this._getSelectionBarContainerClassName(),
        style: this._getSelectionBarContainerStyle()
      }, this._renderSelectionBar());
    }
  }, {
    key: "_renderImaginaryTabsContainer",
    value: function _renderImaginaryTabsContainer() {
      return React.createElement("div", {
        className: this._getImaginaryTabsContainerClassName(),
        style: this._getImaginaryTabsContainerStyle()
      }, this._renderSelectionBarContainer());
    }
  }, {
    key: "_renderComponentLabel",
    value: function _renderComponentLabel(label) {
      return React.cloneElement(label, _objectSpread({}, label.props, {
        style: Object.assign({}, this._getTabLabelContainerStyle(), label.props.style),
        className: this._getTabLabelContainerClassName(label.props.className)
      }));
    }
  }, {
    key: "_renderStringLabel",
    value: function _renderStringLabel(label) {
      return React.createElement("div", {
        className: this._getTabLabelContainerClassName(),
        style: this._getTabLabelContainerStyle()
      }, label);
    }
  }, {
    key: "_renderTabLabel",
    value: function _renderTabLabel(label) {
      return (0, _ramda.ifElse)((0, _ramda.is)(String), this._renderStringLabel, this._renderComponentLabel)(label);
    }
  }, {
    key: "_renderTabContainers",
    value: function _renderTabContainers() {
      var _this2 = this;

      var tabStyle = this._getTabContainerStyle();

      var mapIndexed = (0, _ramda.addIndex)(_ramda.map);
      return mapIndexed(function (tabData, tabIndex) {
        var label = (0, _ramda.defaultTo)('')(tabData.label);
        return React.createElement("div", {
          key: "tab_".concat(tabIndex),
          className: _this2._getTabContainerClassName(),
          style: tabStyle
        }, _this2._renderTabLabel(label));
      }, this._getTabsData());
    }
  }, {
    key: "_renderRealTabsContainer",
    value: function _renderRealTabsContainer() {
      return React.createElement("div", {
        ref: this.$realTabsContainer,
        className: this._getRealTabsContainerClassName(),
        style: this._getRealTabsContainerStyle()
      }, this._renderTabContainers());
    }
  }, {
    key: "_renderComponentContainer",
    value: function _renderComponentContainer() {
      return React.createElement("div", {
        className: this._getComponentContainerClassName(),
        style: this._getComponentContainerStyle()
      }, this._renderRealTabsContainer(), this._renderImaginaryTabsContainer());
    }
  }, {
    key: "render",
    value: function render() {
      return this._renderComponentContainer();
    } // endregion

  }]);

  return VerticalTabNavigationMenuClass;
}(React.Component);

exports.VerticalTabNavigationMenuClass = VerticalTabNavigationMenuClass;
VerticalTabNavigationMenuClass.displayName = 'VerticalTabNavigationMenuClass';
VerticalTabNavigationMenuClass.defaultProps = {
  tabs: [],
  selectedTabIndex: null,
  componentContainerClassName: '',
  realTabsContainerClassName: '',
  tabContainerClassName: '',
  selectionBarClassName: '',
  componentContainerStyle: {},
  realTabsContainerStyle: {},
  tabContainerStyle: {},
  tabLabelContainerStyle: {},
  selectionBarContainerStyle: {},
  imaginaryTabsContainerStyle: {},
  selectionBarStyle: {}
};

function VerticalTabNavigationMenuComponent(props) {
  return React.createElement(_main_theme_provider.MainThemeContext.Consumer, null, function (windowDimensions) {
    return React.createElement(VerticalTabNavigationMenuClass, _extends({}, props, windowDimensions));
  });
}

exports.VerticalTabNavigationMenuComponent = VerticalTabNavigationMenuComponent = (0, _reactJss.default)(styles)(VerticalTabNavigationMenuComponent);
VerticalTabNavigationMenuComponent.displayName = 'VerticalTabNavigationMenuComponent'; // exports

var _default = VerticalTabNavigationMenuComponent;
exports.default = _default;