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
exports.OverlayComponent = OverlayComponent;
exports.default = exports.OverlayClass = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireWildcard(require("react-jss"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ramda = require("ramda");

var _utility_helpers = require("@webfuturistics/design_components/lib/helpers/general/utility_helpers");

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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// styles definition
var styles = function styles(theme) {
  return {
    componentContainer: {
      display: 'block',
      position: 'relative',
      top: '0px',
      left: '0px',
      width: '100%',
      height: '100%',
      '& > $semiTransparentBackgroundContainer': {
        position: 'absolute',
        top: '0px',
        left: '0px',
        width: '100%',
        height: '100%',
        backgroundColor: theme.windowStyles.overlayColor,
        opacity: 0.5
      },
      '& > $childrenContainer': {
        boxSizing: 'border-box',
        display: 'grid',
        position: 'relative',
        top: '0px',
        left: '0px',
        width: '100%',
        height: '100%',
        gridColumnGap: '25px',
        gridRowGap: '15px',
        gridTemplateColumns: '1fr',
        gridTemplateRows: '1fr',
        justifyItems: 'center',
        alignItems: 'center'
      }
    },
    semiTransparentBackgroundContainer: {},
    childrenContainer: {}
  };
};
/**
 * Overlay component.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation
// $FlowFixMe decorators


var OverlayClass = (_dec = (0, _reactJss.default)(styles, {
  injectTheme: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(OverlayClass, _React$Component);

  // region static props
  // endregion
  // region constructor
  function OverlayClass(props) {
    var _this;

    _classCallCheck(this, OverlayClass);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OverlayClass).call(this, props));

    var self = _assertThisInitialized(_this);

    self._onOverlayClick = self._onOverlayClick.bind(_assertThisInitialized(_this));
    _this.state = {
      zIndex: props.theme.styleValuesRegister.zIndex
    };
    return _this;
  } // endregion
  // region lifecycle methods


  _createClass(OverlayClass, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.theme.styleValuesRegister.releaseZIndex(this.state.zIndex);
    } // endregion
    // region style accessors

  }, {
    key: "_getOverlayContainerStyle",
    value: function _getOverlayContainerStyle() {
      return Object.assign({}, {
        zIndex: this.state.zIndex
      }, this._getOverlayContainerStyleProp());
    }
  }, {
    key: "_getChildrenContainerClasses",
    value: function _getChildrenContainerClasses() {
      return this.props.classes.childrenContainer;
    }
  }, {
    key: "_getSemiTransparentBackgroundContainerClasses",
    value: function _getSemiTransparentBackgroundContainerClasses() {
      return this.props.classes.semiTransparentBackgroundContainer;
    }
  }, {
    key: "_getOverlayContainerClasses",
    value: function _getOverlayContainerClasses() {
      var _this$props = this.props,
          children = _this$props.children,
          containerClassName = _this$props.containerClassName,
          classes = _this$props.classes;
      var componentContainer = classes.componentContainer;
      var isChildrenEmpty = (0, _ramda.isNil)(children);
      return (0, _classnames.default)(componentContainer, {
        'c-overlay-component-hidden': isChildrenEmpty
      }, containerClassName);
    } // endregion
    // region label accessors
    // endregion
    // region state accessors
    // endregion
    // region prop accessors

  }, {
    key: "_getOverlayContainerStyleProp",
    value: function _getOverlayContainerStyleProp() {
      return (0, _ramda.defaultTo)({})(this.props.containerStyle);
    }
  }, {
    key: "_getOpacity",
    value: function _getOpacity() {
      var _this$props2 = this.props,
          opacity = _this$props2.opacity,
          theme = _this$props2.theme;
      return (0, _ramda.defaultTo)(theme.windowStyles.overlayOpacity)(opacity);
    }
  }, {
    key: "_shouldShow",
    value: function _shouldShow() {
      var show = this.props.show;
      return (0, _ramda.defaultTo)(OverlayClass.defaultProps.show)(show);
    } // endregion
    // region handlers

  }, {
    key: "_onOverlayClick",
    value: function _onOverlayClick(event) {
      event.stopPropagation();
      var targetDOMElement = event.target;
      var _this$props3 = this.props,
          classes = _this$props3.classes,
          onOverlayClick = _this$props3.onOverlayClick;
      var childrenContainer = classes.childrenContainer;

      if (typeof onOverlayClick === 'function' && (0, _utility_helpers.isNotNil)(targetDOMElement) && targetDOMElement instanceof HTMLDivElement && targetDOMElement.classList.contains(childrenContainer)) {
        onOverlayClick(event);
      }
    } // endregion
    // region render methods

  }, {
    key: "_renderChildrenContainer",
    value: function _renderChildrenContainer() {
      return React.createElement("div", {
        className: this._getChildrenContainerClasses()
      }, this.props.children);
    }
  }, {
    key: "_renderSemiTransparentBackgroundContainer",
    value: function _renderSemiTransparentBackgroundContainer() {
      var styles = {
        opacity: this._getOpacity()
      };
      return React.createElement("div", {
        className: this._getSemiTransparentBackgroundContainerClasses(),
        style: styles
      });
    }
  }, {
    key: "_renderOverlayContainer",
    value: function _renderOverlayContainer() {
      return React.createElement("div", {
        onClick: this._onOverlayClick,
        className: this._getOverlayContainerClasses(),
        style: this._getOverlayContainerStyle()
      }, this._renderSemiTransparentBackgroundContainer(), this._renderChildrenContainer());
    }
  }, {
    key: "render",
    value: function render() {
      return this._shouldShow() ? this._renderOverlayContainer() : null;
    } // endregion

  }]);

  return OverlayClass;
}(React.Component), _class2.displayName = 'OverlayClass', _class2.defaultProps = {
  show: false
}, _temp)) || _class);
exports.OverlayClass = OverlayClass;

function OverlayComponent(props) {
  return React.createElement(_main_theme_provider.MainThemeContext.Consumer, null, function (windowDimensions) {
    return React.createElement(OverlayClass, _extends({}, props, windowDimensions));
  });
}

OverlayComponent.displayName = 'OverlayComponent'; // exports

var _default = OverlayComponent;
exports.default = _default;