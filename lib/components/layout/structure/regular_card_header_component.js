'use strict'; // external imports

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

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
exports.RegularCardHeaderComponent = RegularCardHeaderComponent;
exports.default = exports.RegularCardHeaderClass = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ramda = require("ramda");

var _regular_panel_component = require("./regular_panel_component");

var _main_theme_provider = require("./../../../theming/providers/main_theme_provider");

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
      display: 'flex',
      flexBasis: 'auto',
      flexGrow: 0,
      flexShrink: 1,
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      alignContent: 'flex-start',
      borderBottomLeftRadius: '0px',
      borderBottomRightRadius: '0px',
      '& > $titleContainer': {
        boxSizing: 'border-box',
        flexBasis: 'auto',
        flexGrow: 0,
        flexShrink: 1,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        fontFamily: theme.layoutStyles.headerFontStack,
        fontSize: "".concat(theme.layoutStyles.headerFontSize, "px"),
        color: theme.layoutStyles.headerFontColor
      },
      '& > $titleContainer:first-letter': {
        textTransform: 'capitalize'
      },
      '& > $iconContainer': {
        boxSizing: 'border-box',
        flexBasis: 'auto',
        flexGrow: 0,
        flexShrink: 1,
        fontSize: "".concat(theme.layoutStyles.headerFontSize, "px"),
        color: theme.layoutStyles.headerFontColor
      }
    },
    titleContainer: {},
    iconContainer: {}
  };
};
/**
 * Regular card header component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation
// $FlowFixMe decorators


var RegularCardHeaderClass = (_dec = (0, _reactJss.default)(styles), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RegularCardHeaderClass, _React$Component);

  function RegularCardHeaderClass() {
    _classCallCheck(this, RegularCardHeaderClass);

    return _possibleConstructorReturn(this, _getPrototypeOf(RegularCardHeaderClass).apply(this, arguments));
  }

  _createClass(RegularCardHeaderClass, [{
    key: "_getComponentContainerStyle",
    // region static props
    // endregion
    // region constructor
    // endregion
    // region lifecycle methods
    // endregion
    // region style accessors
    value: function _getComponentContainerStyle() {
      return Object.assign({}, this._getContainerStyle());
    }
  }, {
    key: "_getComponentClassName",
    value: function _getComponentClassName() {
      return (0, _classnames.default)(this.props.classes.componentContainer, this.props.containerClassName);
    }
  }, {
    key: "_getTitleContainerClassName",
    value: function _getTitleContainerClassName() {
      return (0, _classnames.default)(this.props.classes.titleContainer, this.props.titleClassName);
    }
  }, {
    key: "_getIconClasses",
    value: function _getIconClasses() {
      return (0, _classnames.default)(this.props.classes.iconContainer, this.props.iconClassNames);
    } // endregion
    // region label accessors
    // endregion
    // region state accessors
    // endregion
    // region prop accessors

  }, {
    key: "_getIconClickHandler",
    value: function _getIconClickHandler() {
      return (0, _ramda.defaultTo)(RegularCardHeaderClass.defaultProps.onIconClick)(this.props.onIconClick);
    }
  }, {
    key: "_getContainerStyle",
    value: function _getContainerStyle() {
      return (0, _ramda.defaultTo)({})(this.props.containerStyle);
    } // endregion
    // region handlers
    // endregion
    // region render methods

  }, {
    key: "_renderIconContainer",
    value: function _renderIconContainer() {
      var iconClassNames = this.props.iconClassNames;
      return iconClassNames ? React.createElement("i", {
        onClick: this._getIconClickHandler(),
        className: this._getIconClasses()
      }) : null;
    }
  }, {
    key: "_renderTitleContainer",
    value: function _renderTitleContainer() {
      return React.createElement("div", {
        className: this._getTitleContainerClassName()
      }, this.props.children);
    }
  }, {
    key: "_renderComponentContainer",
    value: function _renderComponentContainer() {
      return React.createElement(_regular_panel_component.RegularPanelComponent, {
        style: this._getComponentContainerStyle(),
        className: this._getComponentClassName()
      }, this._renderTitleContainer(), this._renderIconContainer());
    }
  }, {
    key: "render",
    value: function render() {
      return this._renderComponentContainer();
    } // endregion

  }]);

  return RegularCardHeaderClass;
}(React.Component), _class2.displayName = 'RegularCardHeaderClass', _class2.defaultProps = {
  onIconClick: function onIconClick() {}
}, _temp)) || _class);
exports.RegularCardHeaderClass = RegularCardHeaderClass;

function RegularCardHeaderComponent(props) {
  return React.createElement(_main_theme_provider.MainThemeContext.Consumer, null, function (windowDimensions) {
    return React.createElement(RegularCardHeaderClass, _extends({}, props, windowDimensions));
  });
}

RegularCardHeaderComponent.displayName = 'RegularCardHeaderComponent'; // exports

var _default = RegularCardHeaderComponent;
exports.default = _default;