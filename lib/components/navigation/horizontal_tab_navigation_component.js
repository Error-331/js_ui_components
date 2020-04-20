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
exports.HorizontalTabNavigationComponent = HorizontalTabNavigationComponent;
exports.default = exports.HorizontalTabNavigationClass = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ramda = require("ramda");

var _main_theme_provider = require("./../../theming/providers/main_theme_provider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(Object(source)); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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
      width: '100%',
      '& > $tabsContainer': {
        boxSizing: 'border-box',
        display: 'flex',
        overflow: 'hidden',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        alignContent: 'flex-start',
        '& > $tabContainer': {
          flexBasis: 'auto',
          flexShrink: 0,
          flexGrow: 0,
          cursor: 'pointer',
          '& > $tabLabelContainer': {
            textAlign: 'center',
            padding: '3px',
            textTransform: 'uppercase',
            fontFamily: theme.navigationStyles.fontStack,
            fontSize: "".concat(theme.navigationStyles.captionFontSize, "px"),
            textDecoration: 'none',
            color: theme.navigationStyles.fontColor2
          }
        }
      },
      '& > $selectionBarContainer': {
        boxSizing: 'border-box',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        marginTop: '3px',
        '& > $selectionBar': {
          boxSizing: 'border-box',
          position: 'relative',
          height: '2px',
          backgroundColor: theme.baseStyles.accentColorPrimary
        }
      }
    },
    tabsContainer: {},
    tabContainer: {},
    tabLabelContainer: {},
    selectionBarContainer: {},
    selectionBar: {}
  };
};
/**
 * Horizontal tab navigation component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation


var HorizontalTabNavigationClass =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HorizontalTabNavigationClass, _React$Component);

  // region static props
  // endregion
  // region private props
  // px
  // endregion
  // region constructor
  function HorizontalTabNavigationClass(props) {
    var _this;

    _classCallCheck(this, HorizontalTabNavigationClass);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HorizontalTabNavigationClass).call(this, props));
    _this.$tabsContainer = void 0;
    _this.componentContainerWidth = 0;

    var self = _assertThisInitialized(_this);

    _this.$tabsContainer = React.createRef();
    self._renderStringLabel = self._renderStringLabel.bind(_assertThisInitialized(_this));
    self._renderComponentLabel = self._renderComponentLabel.bind(_assertThisInitialized(_this));
    return _this;
  } // endregion
  // region business logic
  // endregion
  // region lifecycle methods
  // endregion
  // region style accessors


  _createClass(HorizontalTabNavigationClass, [{
    key: "_getSelectionBarContainerStyle",
    value: function _getSelectionBarContainerStyle() {
      return (0, _ramda.defaultTo)(HorizontalTabNavigationClass.defaultProps.selectionBarContainerStyle)(this.props.selectionBarContainerStyle);
    }
  }, {
    key: "_getSelectionBarStyle",
    value: function _getSelectionBarStyle() {
      var selectedTabIndex = this._getSelectedTabIndex();

      var selectionBarStyle = (0, _ramda.defaultTo)(HorizontalTabNavigationClass.defaultProps.selectionBarStyle)(this.props.selectionBarStyle);

      if ((0, _ramda.isNil)(selectedTabIndex) || selectedTabIndex === null) {
        return (0, _ramda.mergeDeepRight)({
          left: "0px",
          width: "0px"
        }, selectionBarStyle);
      }

      var tabWidth = 0;
      var barLeftPosition = 0;

      var tabSpacing = this._getTabSpacing();

      var halfTabSpacing = tabSpacing / 2;
      var spacing = tabSpacing * selectedTabIndex + halfTabSpacing;

      if (this._isFlexible()) {
        tabWidth = this._getChildWidth(selectedTabIndex);
        barLeftPosition = this._getChildrenWidth(selectedTabIndex) + spacing;
      } else {
        tabWidth = this._getTabWidth();
        barLeftPosition = tabWidth * selectedTabIndex + spacing;
      }

      return (0, _ramda.mergeDeepRight)({
        left: "".concat(barLeftPosition, "px"),
        width: "".concat(tabWidth, "px")
      }, selectionBarStyle);
    }
  }, {
    key: "_getTabsContainerStyle",
    value: function _getTabsContainerStyle() {
      return (0, _ramda.defaultTo)(HorizontalTabNavigationClass.defaultProps.tabsContainerStyle)(this.props.tabsContainerStyle);
    }
  }, {
    key: "_getTabContainerStyle",
    value: function _getTabContainerStyle() {
      var isFlexible = this._isFlexible();

      var margin = this._getTabSpacing() / 2;
      var tabContainerStyle = (0, _ramda.defaultTo)(HorizontalTabNavigationClass.defaultProps.tabContainerStyle)(this.props.tabContainerStyle);
      return (0, _ramda.mergeDeepRight)({
        width: isFlexible ? 'auto' : "".concat(this._getTabWidth(), "px"),
        marginLeft: "".concat(margin, "px"),
        marginRight: "".concat(margin, "px")
      }, tabContainerStyle);
    }
  }, {
    key: "_getTabLabelContainerStyle",
    value: function _getTabLabelContainerStyle() {
      return (0, _ramda.defaultTo)(HorizontalTabNavigationClass.defaultProps.tabLabelContainerStyle)(this.props.tabLabelContainerStyle);
    }
  }, {
    key: "_getComponentContainerStyle",
    value: function _getComponentContainerStyle() {
      return (0, _ramda.defaultTo)(HorizontalTabNavigationClass.defaultProps.componentContainerStyle)(this.props.componentContainerStyle);
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
    key: "_getTabsContainerClassName",
    value: function _getTabsContainerClassName() {
      return (0, _classnames.default)(this.props.classes.tabsContainer, this._getUserTabsContainerClassName());
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
    key: "_getTabSpacing",
    value: function _getTabSpacing() {
      return (0, _ramda.defaultTo)(HorizontalTabNavigationClass.defaultProps.tabSpacing)(this.props.tabSpacing);
    }
  }, {
    key: "_getUserComponentContainerClassName",
    value: function _getUserComponentContainerClassName() {
      return (0, _ramda.defaultTo)(HorizontalTabNavigationClass.defaultProps.componentContainerClassName)(this.props.componentContainerClassName);
    }
  }, {
    key: "_getUserTabsContainerClassName",
    value: function _getUserTabsContainerClassName() {
      return (0, _ramda.defaultTo)(HorizontalTabNavigationClass.defaultProps.tabsContainerClassName)(this.props.tabsContainerClassName);
    }
  }, {
    key: "_getUserTabContainerClassName",
    value: function _getUserTabContainerClassName() {
      return (0, _ramda.defaultTo)(HorizontalTabNavigationClass.defaultProps.tabContainerClassName)(this.props.tabContainerClassName);
    }
  }, {
    key: "_getUserSelectionBarClassName",
    value: function _getUserSelectionBarClassName() {
      return (0, _ramda.defaultTo)(HorizontalTabNavigationClass.defaultProps.selectionBarClassName)(this.props.selectionBarClassName);
    }
  }, {
    key: "_getSelectedTabIndex",
    value: function _getSelectedTabIndex() {
      return (0, _ramda.defaultTo)(HorizontalTabNavigationClass.defaultProps.selectedTabIndex)(this.props.selectedTabIndex);
    }
  }, {
    key: "_getTabWidth",
    value: function _getTabWidth() {
      var _this2 = this;

      var tabCont = this._getTabCount();

      return (0, _ramda.unless)((0, _ramda.equals)(0), function (count) {
        return _this2._getTabsContainerWidth() / count - _this2._getTabSpacing();
      })(tabCont);
    }
  }, {
    key: "_getChildrenWidth",
    value: function _getChildrenWidth(endChildIndex) {
      if ((0, _ramda.isNil)(this.$tabsContainer) || (0, _ramda.isNil)(this.$tabsContainer.current)) {
        return 0;
      }

      var totalChildrenWidth = 0;

      for (var childIndex = 0; childIndex < endChildIndex; childIndex++) {
        totalChildrenWidth += this.$tabsContainer.current.children[childIndex].clientWidth;
      }

      return totalChildrenWidth;
    }
  }, {
    key: "_getChildWidth",
    value: function _getChildWidth(childIndex) {
      if ((0, _ramda.isNil)(this.$tabsContainer) || (0, _ramda.isNil)(this.$tabsContainer.current)) {
        return 0;
      }

      return this.$tabsContainer.current.children[childIndex].clientWidth;
    }
  }, {
    key: "_getTabsContainerWidth",
    value: function _getTabsContainerWidth() {
      if ((0, _ramda.isNil)(this.$tabsContainer) || (0, _ramda.isNil)(this.$tabsContainer.current)) {
        return 0;
      }

      return this.$tabsContainer.current.clientWidth;
    }
  }, {
    key: "_getTabCount",
    value: function _getTabCount() {
      return (0, _ramda.length)(this._getTabsData());
    }
  }, {
    key: "_getTabsData",
    value: function _getTabsData() {
      return (0, _ramda.defaultTo)(HorizontalTabNavigationClass.defaultProps.tabs)(this.props.tabs);
    }
  }, {
    key: "_isFlexible",
    value: function _isFlexible() {
      return (0, _ramda.defaultTo)(HorizontalTabNavigationClass.defaultProps.flexible)(this.props.flexible);
    } // endregion
    // region handlers
    // endregion
    // region render methods

  }, {
    key: "_renderSelectionBarContainer",
    value: function _renderSelectionBarContainer() {
      return React.createElement("div", {
        className: this._getSelectionBarContainerClassName(),
        style: this._getSelectionBarContainerStyle()
      }, React.createElement("div", {
        className: this._getSelectionBarClassName(),
        style: this._getSelectionBarStyle()
      }));
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
      var _this3 = this;

      var tabStyle = this._getTabContainerStyle();

      var mapIndexed = (0, _ramda.addIndex)(_ramda.map);
      return mapIndexed(function (tabData, tabIndex) {
        var label = (0, _ramda.defaultTo)('')(tabData.label);
        return React.createElement("div", {
          key: "tab_".concat(tabIndex),
          className: _this3._getTabContainerClassName(),
          style: tabStyle
        }, _this3._renderTabLabel(label));
      }, this._getTabsData());
    }
  }, {
    key: "_renderTabsContainer",
    value: function _renderTabsContainer() {
      return React.createElement("div", {
        ref: this.$tabsContainer,
        className: this._getTabsContainerClassName(),
        style: this._getTabsContainerStyle()
      }, this._renderTabContainers());
    }
  }, {
    key: "_renderComponentContainer",
    value: function _renderComponentContainer() {
      return React.createElement("div", {
        className: this._getComponentContainerClassName(),
        style: this._getComponentContainerStyle()
      }, this._renderTabsContainer(), this._renderSelectionBarContainer());
    }
  }, {
    key: "render",
    value: function render() {
      return this._renderComponentContainer();
    } // endregion

  }]);

  return HorizontalTabNavigationClass;
}(React.Component);

exports.HorizontalTabNavigationClass = HorizontalTabNavigationClass;
HorizontalTabNavigationClass.displayName = 'HorizontalTabNavigationClass';
HorizontalTabNavigationClass.defaultProps = {
  flexible: false,
  tabs: [],
  selectedTabIndex: null,
  componentContainerClassName: '',
  tabsContainerClassName: '',
  tabContainerClassName: '',
  selectionBarClassName: '',
  componentContainerStyle: {},
  tabsContainerStyle: {},
  tabContainerStyle: {},
  tabLabelContainerStyle: {},
  selectionBarContainerStyle: {},
  selectionBarStyle: {},
  tabSpacing: 0
};

function HorizontalTabNavigationComponent(props) {
  return React.createElement(_main_theme_provider.MainThemeContext.Consumer, null, function (windowDimensions) {
    return React.createElement(HorizontalTabNavigationClass, _extends({}, props, windowDimensions));
  });
}

exports.HorizontalTabNavigationComponent = HorizontalTabNavigationComponent = (0, _reactJss.default)(styles)(HorizontalTabNavigationComponent);
HorizontalTabNavigationComponent.displayName = 'HorizontalTabNavigationComponent'; // exports

var _default = HorizontalTabNavigationComponent;
exports.default = _default;