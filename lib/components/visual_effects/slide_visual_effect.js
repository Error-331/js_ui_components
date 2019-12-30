'use strict'; // external imports

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

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
exports.SlideVisualEffect = SlideVisualEffect;
exports.default = exports.SlideVisualEffectClass = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ramda = require("ramda");

var _main_theme_provider = require("./../../theming/providers/main_theme_provider");

var _overlay_component = require("./../window/overlay_component");

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
      boxSizing: 'border-box',
      position: 'absolute',
      transitionDelay: '0s',
      transitionProperty: 'top',
      transitionTimingFunction: 'ease-in-out',
      zIndex: '2',
      backgroundColor: 'transparent',
      '&.horizontalSlider': {
        width: 'auto',
        height: '100%'
      },
      '&.verticalSlider': {
        width: 'auto',
        height: 'auto'
      },
      '& $contentContainer': {
        boxSizing: 'border-box',
        width: '100%',
        height: '100%',
        padding: "".concat(theme.layoutStyles.topSpacing, "px \n                      ").concat(theme.layoutStyles.rightSpacing, "px \n                      ").concat(theme.layoutStyles.bottomSpacing, "px \n                      ").concat(theme.layoutStyles.bottomSpacing, "px\n            ")
      }
    },
    contentContainer: {}
  };
};
/**
 * Slide - visual effect.
 * Parent component should have 'position' style set to 'absolute' or 'relative' as well as 'overflow' to 'hidden'.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation
// $FlowFixMe decorators


var SlideVisualEffectClass = (_dec = (0, _reactJss.default)(styles, {
  injectTheme: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SlideVisualEffectClass, _React$Component);

  // region static props
  // endregion
  // region private props
  // px
  // endregion
  // region constructor
  function SlideVisualEffectClass(props) {
    var _this;

    _classCallCheck(this, SlideVisualEffectClass);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SlideVisualEffectClass).call(this, props));
    _this.$componentContainer = void 0;
    _this.componentContainerWidth = 0;

    var self = _assertThisInitialized(_this);

    self._onComponentContainerWidthRead = self._onComponentContainerWidthRead.bind(_assertThisInitialized(_this));
    self._getComponentContainerLeftToRightStyle = self._getComponentContainerLeftToRightStyle.bind(_assertThisInitialized(_this));
    self._getComponentContainerRightToLeftStyle = self._getComponentContainerRightToLeftStyle.bind(_assertThisInitialized(_this));
    self._getComponentContainerBottomToTopStyle = self._getComponentContainerBottomToTopStyle.bind(_assertThisInitialized(_this));
    self._getComponentContainerTopToBottomStyle = self._getComponentContainerTopToBottomStyle.bind(_assertThisInitialized(_this));
    _this.$componentContainer = React.createRef();
    return _this;
  } // endregion
  // region business logic
  // endregion
  // region lifecycle methods
  // endregion
  // region style accessors


  _createClass(SlideVisualEffectClass, [{
    key: "_getComponentContainerLeftToRightStyle",
    value: function _getComponentContainerLeftToRightStyle() {
      var shouldShow = this._shouldShow();

      var duration = this._getDuration();

      var style = this._getStyle(); // +1 - accounting  fault


      var componentWidth = this._getComponentContainerWidth() + 1;

      this._onComponentContainerWidthRead(componentWidth);

      var transitionStyle = {
        transitionProperty: 'left',
        transitionDuration: duration
      };
      var componentStyle = {
        top: '0px',
        left: shouldShow ? "0%" : "calc(0% - ".concat(componentWidth, "px)")
      };
      return Object.assign({}, componentStyle, transitionStyle, style);
    }
  }, {
    key: "_getComponentContainerRightToLeftStyle",
    value: function _getComponentContainerRightToLeftStyle() {
      var shouldShow = this._shouldShow();

      var duration = this._getDuration();

      var style = this._getStyle();

      var componentWidth = this._getComponentContainerWidth();

      this._onComponentContainerWidthRead(componentWidth);

      var transitionStyle = {
        transitionProperty: 'left',
        transitionDuration: duration
      };
      var componentStyle = {
        top: '0px',
        left: shouldShow ? "calc(100% - ".concat(componentWidth, "px)") : '100%'
      };
      return Object.assign({}, componentStyle, transitionStyle, style);
    }
  }, {
    key: "_getComponentContainerBottomToTopStyle",
    value: function _getComponentContainerBottomToTopStyle() {
      var shouldShow = this._shouldShow();

      var duration = this._getDuration();

      var style = this._getStyle();

      var componentHeight = this._getComponentContainerHeight();

      var transitionStyle = {
        transitionProperty: 'top',
        transitionDuration: duration
      };
      var componentStyle = {
        top: shouldShow ? "calc(100% - ".concat(componentHeight, "px)") : '100%',
        left: '0px'
      };

      var componentWidth = this._getComponentContainerWidth();

      this._onComponentContainerWidthRead(componentWidth);

      return Object.assign({}, componentStyle, transitionStyle, style);
    }
  }, {
    key: "_getComponentContainerTopToBottomStyle",
    value: function _getComponentContainerTopToBottomStyle() {
      var shouldShow = this._shouldShow();

      var duration = this._getDuration();

      var style = this._getStyle();

      var componentHeight = this._getComponentContainerHeight();

      var transitionStyle = {
        transitionProperty: 'top',
        transitionDuration: duration
      };
      var componentStyle = {
        top: shouldShow ? '0%' : "calc(0% - ".concat(componentHeight, "px)"),
        left: '0px'
      };

      var componentWidth = this._getComponentContainerWidth();

      this._onComponentContainerWidthRead(componentWidth);

      return Object.assign({}, componentStyle, transitionStyle, style);
    }
  }, {
    key: "_getComponentContainerStyle",
    value: function _getComponentContainerStyle() {
      return (0, _ramda.cond)([[(0, _ramda.equals)('LeftToRight'), this._getComponentContainerLeftToRightStyle], [(0, _ramda.equals)('RightToLeft'), this._getComponentContainerRightToLeftStyle], [(0, _ramda.equals)('BottomToTop'), this._getComponentContainerBottomToTopStyle], [(0, _ramda.equals)('TopToBottom'), this._getComponentContainerTopToBottomStyle], [_ramda.T, this._getComponentContainerBottomToTopStyle]])(this._getDirection());
    }
  }, {
    key: "_getComponentContainerClassName",
    value: function _getComponentContainerClassName() {
      var sliderClassName = (0, _ramda.cond)([[(0, _ramda.equals)('LeftToRight'), (0, _ramda.always)('horizontalSlider')], [(0, _ramda.equals)('RightToLeft'), (0, _ramda.always)('horizontalSlider')], [(0, _ramda.equals)('BottomToTop'), (0, _ramda.always)('verticalSlider')], [(0, _ramda.equals)('TopToBottom'), (0, _ramda.always)('verticalSlider')], [_ramda.T, (0, _ramda.always)('horizontalSlider')]])(this._getDirection());
      return (0, _classnames.default)(this.props.classes.componentContainer, sliderClassName, this.props.className);
    }
  }, {
    key: "_getContentContainerClassName",
    value: function _getContentContainerClassName() {
      return (0, _ramda.defaultTo)('')(this.props.classes.contentContainer);
    } // endregion
    // region label accessors
    // endregion
    // region state accessors
    // endregion
    // region prop accessors

  }, {
    key: "_getComponentContainerWidthChangeHandler",
    value: function _getComponentContainerWidthChangeHandler() {
      return (0, _ramda.defaultTo)(SlideVisualEffectClass.defaultProps.onComponentContainerWidthChange)(this.props.onComponentContainerWidthChange);
    }
  }, {
    key: "_getOverlayOpacity",
    value: function _getOverlayOpacity() {
      var _this$props = this.props,
          overlayOpacity = _this$props.overlayOpacity,
          theme = _this$props.theme;
      return (0, _ramda.defaultTo)(theme.windowStyles.overlayOpacity)(overlayOpacity);
    }
  }, {
    key: "_shouldShow",
    value: function _shouldShow() {
      return (0, _ramda.defaultTo)(SlideVisualEffectClass.defaultProps.show)(this.props.show);
    }
  }, {
    key: "_getDirection",
    value: function _getDirection() {
      return (0, _ramda.defaultTo)(SlideVisualEffectClass.defaultProps.direction)(this.props.direction);
    }
  }, {
    key: "_getDuration",
    value: function _getDuration() {
      return (0, _ramda.defaultTo)(SlideVisualEffectClass.defaultProps.duration)(this.props.duration);
    }
  }, {
    key: "_getStyle",
    value: function _getStyle() {
      return (0, _ramda.defaultTo)(SlideVisualEffectClass.defaultProps.style)(this.props.style);
    }
  }, {
    key: "_getComponentContainerHeight",
    value: function _getComponentContainerHeight() {
      if ((0, _ramda.isNil)(this.$componentContainer) || (0, _ramda.isNil)(this.$componentContainer.current)) {
        return 0;
      }

      return this.$componentContainer.current.clientHeight;
    }
  }, {
    key: "_getComponentContainerWidth",
    value: function _getComponentContainerWidth() {
      if ((0, _ramda.isNil)(this.$componentContainer) || (0, _ramda.isNil)(this.$componentContainer.current)) {
        return 0;
      }

      return this.$componentContainer.current.clientWidth;
    } // endregion
    // region handlers

  }, {
    key: "_onComponentContainerWidthRead",
    value: function _onComponentContainerWidthRead(width) {
      var _this2 = this;

      (0, _ramda.unless)((0, _ramda.equals)(this.componentContainerWidth), function (width) {
        _this2.componentContainerWidth = width;

        _this2._getComponentContainerWidthChangeHandler()(width);
      })(width);
    } // endregion
    // region render methods

  }, {
    key: "_renderContentContainer",
    value: function _renderContentContainer() {
      return React.createElement("div", {
        className: this._getContentContainerClassName()
      }, this.props.children);
    }
  }, {
    key: "_renderOverlayComponent",
    value: function _renderOverlayComponent() {
      return React.createElement(_overlay_component.OverlayComponent, {
        opacity: this._getOverlayOpacity(),
        show: true
      }, this._renderContentContainer());
    }
  }, {
    key: "_renderComponentContainer",
    value: function _renderComponentContainer() {
      return React.createElement("div", {
        ref: this.$componentContainer,
        className: this._getComponentContainerClassName(),
        style: this._getComponentContainerStyle()
      }, this._renderOverlayComponent());
    }
  }, {
    key: "render",
    value: function render() {
      return this._renderComponentContainer();
    } // endregion

  }]);

  return SlideVisualEffectClass;
}(React.Component), _class2.displayName = 'SlideVisualEffectClass', _class2.defaultProps = {
  direction: 'BottomToTop',
  show: false,
  duration: '0.7s',
  onComponentContainerWidthChange: function onComponentContainerWidthChange() {},
  style: {}
}, _temp)) || _class);
exports.SlideVisualEffectClass = SlideVisualEffectClass;

function SlideVisualEffect(props) {
  return React.createElement(_main_theme_provider.MainThemeContext.Consumer, null, function (windowDimensions) {
    return React.createElement(SlideVisualEffectClass, _extends({}, props, windowDimensions));
  });
}

SlideVisualEffect.displayName = 'SlideVisualEffect'; // exports

var _default = SlideVisualEffect;
exports.default = _default;