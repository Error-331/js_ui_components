'use strict'; // external imports

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RegularCardComponent = RegularCardComponent;
exports.default = exports.RegularCardClass = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ramda = require("ramda");

var _regular_card_body_component = require("./regular_card_body_component");

var _main_theme_provider = require("./../../../theming/providers/main_theme_provider");

var _dec, _class, _class2, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
      display: 'flex',
      flexBasis: 'auto',
      flexGrow: 0,
      flexShrink: 1,
      flexDirection: 'column',
      flexWrap: 'nowrap',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      alignContent: 'flex-start',
      borderRadius: theme.layoutStyles.headerBorderRadius,
      backgroundColor: theme.layoutStyles.bodyBGColor,
      transition: 'box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
      '&.height1': {
        boxShadow: theme.materialDepthLevels.materialDepth1BoxShadow
      },
      '&.height2': {
        boxShadow: theme.materialDepthLevels.materialDepth2BoxShadow
      },
      '&.height3': {
        boxShadow: theme.materialDepthLevels.materialDepth3BoxShadow
      },
      '&.height4': {
        boxShadow: theme.materialDepthLevels.materialDepth4BoxShadow
      },
      '&.height5': {
        boxShadow: theme.materialDepthLevels.materialDepth5BoxShadow
      },
      '&.poppable2:hover': {
        boxShadow: theme.materialDepthLevels.materialDepth2BoxShadow
      },
      '&.poppable3:hover': {
        boxShadow: theme.materialDepthLevels.materialDepth3BoxShadow
      },
      '&.poppable4:hover': {
        boxShadow: theme.materialDepthLevels.materialDepth4BoxShadow
      },
      '&.poppable5:hover': {
        boxShadow: theme.materialDepthLevels.materialDepth5BoxShadow
      },
      '& > $componentHeader': {
        boxSizing: 'border-box',
        flexBasis: 'auto',
        flexGrow: 0,
        flexShrink: 1
      }
    },
    componentHeader: {}
  };
};
/**
 * Regular card component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation
// $FlowFixMe decorators


var RegularCardClass = (_dec = (0, _reactJss.default)(styles), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RegularCardClass, _React$Component);

  // region static props
  // endregion
  // region constructor
  function RegularCardClass(props) {
    var _this;

    _classCallCheck(this, RegularCardClass);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RegularCardClass).call(this, props));

    var self = _assertThisInitialized(_this);

    self._onMouseOverContainer = self._onMouseOverContainer.bind(_assertThisInitialized(_this));
    self._onMouseLeaveContainer = self._onMouseLeaveContainer.bind(_assertThisInitialized(_this));
    return _this;
  } // endregion
  // region business logic


  _createClass(RegularCardClass, [{
    key: "_getHeightLevel",
    value: function _getHeightLevel(heightLevel) {
      heightLevel = (0, _ramda.unless)((0, _ramda.gt)(5), (0, _ramda.always)(5))(heightLevel);
      heightLevel = (0, _ramda.unless)((0, _ramda.lt)(1), (0, _ramda.always)(1))(heightLevel);
      return heightLevel;
    } // endregion
    // region lifecycle methods
    // endregion
    // region style accessors

  }, {
    key: "_getBodyStyle",
    value: function _getBodyStyle() {
      return (0, _ramda.defaultTo)(RegularCardClass.defaultProps.bodyStyle)(this.props.bodyStyle);
    }
  }, {
    key: "_getOuterContainerStyle",
    value: function _getOuterContainerStyle() {
      return Object.assign({}, this.props.containerStyle);
    }
  }, {
    key: "_getOuterContainerClasses",
    value: function _getOuterContainerClasses() {
      var _classNames;

      var heightClassName = "height".concat(this._getCardHeightLevel());
      var poppableClassName = "poppable".concat(this._getCardPopHeightLevel());
      var containerClassName = (0, _classnames.default)(this.props.classes.componentContainer, (_classNames = {}, _defineProperty(_classNames, heightClassName, true), _defineProperty(_classNames, poppableClassName, this._getPopOnHover()), _classNames), this.props.containerClassName);
      return containerClassName;
    }
  }, {
    key: "_getBodyClasses",
    value: function _getBodyClasses() {
      return (0, _ramda.defaultTo)(RegularCardClass.defaultProps.bodyClassName)(this.props.bodyClassName);
    } // endregion
    // region label accessors
    // endregion
    // region state accessors
    // endregion
    // region prop accessors

  }, {
    key: "_getCardPopHeightLevel",
    value: function _getCardPopHeightLevel() {
      var _this$props$maxPopLev = this.props.maxPopLevel,
          maxPopLevel = _this$props$maxPopLev === void 0 ? 5 : _this$props$maxPopLev;
      return this._getHeightLevel(maxPopLevel);
    }
  }, {
    key: "_getCardHeightLevel",
    value: function _getCardHeightLevel() {
      var _this$props$heightLev = this.props.heightLevel,
          heightLevel = _this$props$heightLev === void 0 ? 1 : _this$props$heightLev;
      return this._getHeightLevel(heightLevel);
    }
  }, {
    key: "_getPopOnHover",
    value: function _getPopOnHover() {
      var _this$props$popOnHove = this.props.popOnHover,
          popOnHover = _this$props$popOnHove === void 0 ? false : _this$props$popOnHove;
      return popOnHover;
    }
  }, {
    key: "_getClickBodyHandler",
    value: function _getClickBodyHandler() {
      return (0, _ramda.defaultTo)(RegularCardClass.defaultProps.onClickBody)(this.props.onClickBody);
    } // endregion
    // region handlers

  }, {
    key: "_onMouseLeaveContainer",
    value: function _onMouseLeaveContainer(event) {
      var onMouseLeaveContainer = this.props.onMouseLeaveContainer;

      if ((0, _ramda.isNil)(onMouseLeaveContainer) && !(0, _ramda.is)(Function, onMouseLeaveContainer)) {
        return;
      }

      onMouseLeaveContainer(event);
    }
  }, {
    key: "_onMouseOverContainer",
    value: function _onMouseOverContainer(event) {
      var onMouseOverContainer = this.props.onMouseOverContainer;

      if ((0, _ramda.isNil)(onMouseOverContainer) && !(0, _ramda.is)(Function, onMouseOverContainer)) {
        return;
      }

      onMouseOverContainer(event);
    } // endregion
    // region render methods

  }, {
    key: "_renderHeader",
    value: function _renderHeader() {
      var _this2 = this;

      return (0, _ramda.ifElse)((0, _ramda.complement)(_ramda.isEmpty), function (header) {
        return React.createElement("div", {
          className: _this2.props.classes.componentHeader
        }, header);
      }, (0, _ramda.always)(null))(this.props.header);
    }
  }, {
    key: "_renderBody",
    value: function _renderBody() {
      var children = this.props.children;

      if ((0, _ramda.isNil)(children)) {
        return null;
      }

      return React.createElement(_regular_card_body_component.RegularCardBodyComponent, {
        className: this._getBodyClasses(),
        style: this._getBodyStyle(),
        onClick: this._getClickBodyHandler()
      }, children);
    }
  }, {
    key: "_renderOuterContainer",
    value: function _renderOuterContainer() {
      return React.createElement("div", {
        className: this._getOuterContainerClasses(),
        style: this._getOuterContainerStyle(),
        onMouseOver: this._onMouseOverContainer,
        onMouseLeave: this._onMouseLeaveContainer
      }, this._renderHeader(), this._renderBody());
    }
  }, {
    key: "render",
    value: function render() {
      return this._renderOuterContainer();
    } // endregion

  }]);

  return RegularCardClass;
}(React.Component), _class2.displayName = 'RegularCardClass', _class2.defaultProps = {
  containerClassName: '',
  bodyClassName: '',
  bodyStyle: {},
  onClickBody: function onClickBody() {},
  theme: {},
  classes: {}
}, _temp)) || _class);
exports.RegularCardClass = RegularCardClass;

function RegularCardComponent(props) {
  return React.createElement(_main_theme_provider.MainThemeContext.Consumer, null, function (windowDimensions) {
    return React.createElement(RegularCardClass, _extends({}, props, windowDimensions));
  });
}

RegularCardComponent.displayName = 'RegularCardComponent'; // exports

var _default = RegularCardComponent;
exports.default = _default;