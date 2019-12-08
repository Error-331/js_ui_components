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
exports.ModalComponent = ModalComponent;
exports.default = exports.ModalClass = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _ramda = require("ramda");

var _main_theme_provider = require("./../../theming/providers/main_theme_provider");

var _global_overlay_component = require("./global_overlay_component");

var _regular_card_component = require("./../layout/structure/regular_card_component");

var _dec, _class, _class2, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

;
// styles definition
var defaultBodyOuterStyles = {
  maxWidth: '60%'
};
var defaultBodyInnerStyles = {};

var styles = function styles(theme) {
  return {};
};
/**
 * Modal component.
 * Base component for different modal dialog boxes and modal windows.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation
// $FlowFixMe decorators


var ModalClass = (_dec = (0, _reactJss.default)(styles), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ModalClass, _React$Component);

  function ModalClass() {
    _classCallCheck(this, ModalClass);

    return _possibleConstructorReturn(this, _getPrototypeOf(ModalClass).apply(this, arguments));
  }

  _createClass(ModalClass, [{
    key: "_getBodyOuterStyles",
    // region static props
    // endregion
    // region constructor
    // endregion
    // region lifecycle methods
    // endregion
    // region style accessors
    value: function _getBodyOuterStyles() {
      var userStyles = (0, _ramda.defaultTo)({})(this.props.bodyOuterStyles);
      return (0, _ramda.merge)(defaultBodyOuterStyles, userStyles);
    }
  }, {
    key: "_getBodyInnerStyle",
    value: function _getBodyInnerStyle() {
      var userStyles = (0, _ramda.defaultTo)({})(this.props.bodyInnerStyles);
      return (0, _ramda.merge)(defaultBodyInnerStyles, userStyles);
    } // endregion
    // region label accessors
    // endregion
    // region state accessors
    // endregion
    // region prop accessors

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
      var show = this.props.show;
      return (0, _ramda.defaultTo)(ModalClass.defaultProps.show)(show);
    }
  }, {
    key: "_getOverlayClickHandler",
    value: function _getOverlayClickHandler() {
      return (0, _ramda.defaultTo)(ModalClass.defaultProps.onOverlayClick)(this.props.onOverlayClick);
    } // endregion
    // region handlers
    // endregion
    // region render methods

  }, {
    key: "_renderFooter",
    value: function _renderFooter() {
      return this.props.footer;
    }
  }, {
    key: "_renderBody",
    value: function _renderBody() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          header = _this$props2.header;
      return React.createElement(_regular_card_component.RegularCardComponent, {
        header: header,
        containerStyle: this._getBodyOuterStyles(),
        bodyStyle: this._getBodyInnerStyle()
      }, children, this._renderFooter());
    }
  }, {
    key: "_renderOverlayComponent",
    value: function _renderOverlayComponent() {
      return React.createElement(_global_overlay_component.GlobalOverlayComponent, {
        show: this._shouldShow(),
        opacity: this._getOverlayOpacity(),
        onOverlayClick: this._getOverlayClickHandler()
      }, this._renderBody());
    }
  }, {
    key: "render",
    value: function render() {
      return this._renderOverlayComponent();
    } // endregion

  }]);

  return ModalClass;
}(React.Component), _class2.displayName = 'ModalClass', _class2.defaultProps = {
  show: false,
  onOverlayClick: function onOverlayClick() {}
}, _temp)) || _class);
exports.ModalClass = ModalClass;

function ModalComponent(props) {
  return React.createElement(_main_theme_provider.MainThemeContext.Consumer, null, function (windowDimensions) {
    return React.createElement(ModalClass, _extends({}, props, windowDimensions));
  });
}

ModalComponent.displayName = 'ModalComponent'; // exports

var _default = ModalComponent;
exports.default = _default;