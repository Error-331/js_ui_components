'use strict'; // external imports

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

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

var _dec, _class, _class2, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

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
// $FlowFixMe decorators


var HorizontalTabNavigationClass = (_dec = (0, _reactJss.default)(styles), _dec(_class = (_temp = _class2 =
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
    _this.$tabsContainer = React.createRef();
    return _this;
  } // endregion
  // region business logic
  // endregion
  // region lifecycle methods
  // endregion
  // region style accessors


  _createClass(HorizontalTabNavigationClass, [{
    key: "_getSelectionBarStyle",
    value: function _getSelectionBarStyle() {
      var selectedTabIndex = this._getSelectedTabIndex();

      if ((0, _ramda.isNil)(selectedTabIndex) || selectedTabIndex === null) {
        return {};
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

      var selectionBarStyle = (0, _ramda.defaultTo)(HorizontalTabNavigationClass.defaultProps.selectionBarStyle)(this.props.selectionBarStyle);
      return (0, _ramda.mergeDeepRight)({
        left: "".concat(barLeftPosition, "px"),
        width: "".concat(tabWidth, "px")
      }, selectionBarStyle);
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
    value: function _getTabLabelContainerClassName() {
      return this.props.classes.tabLabelContainer;
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
      var selectedTabIndex = this._getSelectedTabIndex();

      if ((0, _ramda.isNil)(selectedTabIndex)) {
        return null;
      }

      return React.createElement("div", {
        className: this._getSelectionBarContainerClassName()
      }, React.createElement("div", {
        className: this._getSelectionBarClassName(),
        style: this._getSelectionBarStyle()
      }));
    }
  }, {
    key: "_renderTabLabel",
    value: function _renderTabLabel(label) {
      return React.createElement("div", {
        className: this._getTabLabelContainerClassName(),
        style: this._getTabLabelContainerStyle()
      }, label);
    }
  }, {
    key: "_renderTabContainers",
    value: function _renderTabContainers() {
      var _this3 = this;

      var tabStyle = this._getTabContainerStyle();

      return (0, _ramda.map)(function (tabData) {
        var label = (0, _ramda.defaultTo)('')(tabData.label);
        return React.createElement("div", {
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
        className: this._getTabsContainerClassName()
      }, this._renderTabContainers());
    }
  }, {
    key: "_renderComponentContainer",
    value: function _renderComponentContainer() {
      return React.createElement("div", {
        className: this._getComponentContainerClassName()
      }, this._renderTabsContainer(), this._renderSelectionBarContainer());
    }
  }, {
    key: "render",
    value: function render() {
      return this._renderComponentContainer();
    } // endregion

  }]);

  return HorizontalTabNavigationClass;
}(React.Component), _class2.displayName = 'HorizontalTabNavigationClass', _class2.defaultProps = {
  flexible: false,
  tabs: [],
  selectedTabIndex: null,
  componentContainerClassName: '',
  tabsContainerClassName: '',
  tabContainerClassName: '',
  selectionBarClassName: '',
  tabContainerStyle: {},
  selectionBarStyle: {},
  tabLabelContainerStyle: {},
  tabSpacing: 0
}, _temp)) || _class);
exports.HorizontalTabNavigationClass = HorizontalTabNavigationClass;

function HorizontalTabNavigationComponent(props) {
  return React.createElement(_main_theme_provider.MainThemeContext.Consumer, null, function (windowDimensions) {
    return React.createElement(HorizontalTabNavigationClass, _extends({}, props, windowDimensions));
  });
}

HorizontalTabNavigationComponent.displayName = 'HorizontalTabNavigationComponent'; // exports

var _default = HorizontalTabNavigationComponent;
exports.default = _default;