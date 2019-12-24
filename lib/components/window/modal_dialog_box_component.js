'use strict'; // external imports

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.object.assign");

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
exports.ModalDialogBoxComponent = ModalDialogBoxComponent;
exports.default = exports.ModalDialogBoxClass = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ramda = require("ramda");

var _main_theme_provider = require("./../../theming/providers/main_theme_provider");

var _modal_component = require("./modal_component");

var _overlay_component = require("./overlay_component");

var _rotating_font_icon_preloader = require("./../preloaders/rotating_font_icon_preloader");

var _regular_card_header_component = require("./../layout/structure/regular_card_header_component");

var _dialog_box_actions_container = require("./../layout/alignment/dialog_box/dialog_box_actions_container");

var _regular_button_component = require("./../buttons/regular_button_component");

var _dec, _class, _class2, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
    clickableIcon: {
      cursor: 'pointer'
    },
    nonClickableIcon: {
      cursor: 'auto'
    },
    actionsContainer: {
      marginTop: "".concat(theme.layoutStyles.sectionVerticalSpacing, "px")
    },
    loadingOverlayContainer: {
      position: 'absolute'
    }
  };
};
/**
 * Common modal dialog box component.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation
// $FlowFixMe decorators


var ModalDialogBoxClass = (_dec = (0, _reactJss.default)(styles), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ModalDialogBoxClass, _React$Component);

  function ModalDialogBoxClass() {
    _classCallCheck(this, ModalDialogBoxClass);

    return _possibleConstructorReturn(this, _getPrototypeOf(ModalDialogBoxClass).apply(this, arguments));
  }

  _createClass(ModalDialogBoxClass, [{
    key: "_prepareButtons",
    // region static props
    // endregion
    // region private props
    // endregion
    // region constructor
    // endregion
    // region business logic
    value: function _prepareButtons(buttons) {
      var preparedButtons = buttons;
      return preparedButtons;
    } // endregion
    // region lifecycle methods
    // endregion
    // region style accessors

  }, {
    key: "_getActionsContainerClassName",
    value: function _getActionsContainerClassName() {
      return this.props.classes.actionsContainer;
    }
  }, {
    key: "_getLoadingOverlayContainerClassName",
    value: function _getLoadingOverlayContainerClassName() {
      return this.props.classes.loadingOverlayContainer;
    }
  }, {
    key: "_getBodyOuterStyle",
    value: function _getBodyOuterStyle() {
      return (0, _ramda.defaultTo)({})(this.props.bodyOuterStyles);
    } // endregion
    // region label accessors
    // endregion
    // region state accessors
    // endregion
    // region prop accessors

  }, {
    key: "_shouldShow",
    value: function _shouldShow() {
      return (0, _ramda.defaultTo)(ModalDialogBoxClass.defaultProps.show)(this.props.show);
    }
  }, {
    key: "_isClosable",
    value: function _isClosable() {
      return (0, _ramda.defaultTo)(ModalDialogBoxClass.defaultProps.closable)(this.props.closable);
    }
  }, {
    key: "_isLoading",
    value: function _isLoading() {
      return (0, _ramda.defaultTo)(ModalDialogBoxClass.defaultProps.loading)(this.props.loading);
    }
  }, {
    key: "_getCloseHandler",
    value: function _getCloseHandler() {
      return (0, _ramda.defaultTo)(ModalDialogBoxClass.defaultProps.onClose)(this.props.onClose);
    }
  }, {
    key: "_getHeaderIconClassName",
    value: function _getHeaderIconClassName() {
      if (this._isClosable()) {
        return (0, _classnames.default)(this.props.titleIconClassName, 'fas fa-times', this.props.classes.clickableIcon);
      } else {
        return (0, _classnames.default)(this.props.titleIconClassName, this.props.classes.nonClickableIcon);
      }
    }
  }, {
    key: "_getTitle",
    value: function _getTitle() {
      return (0, _ramda.defaultTo)(ModalDialogBoxClass.defaultProps.title)(this.props.title);
    }
  }, {
    key: "_getButtons",
    value: function _getButtons() {
      return (0, _ramda.defaultTo)(ModalDialogBoxClass.defaultProps.buttons)(this.props.buttons);
    } // endregion
    // region handlers
    // endregion
    // region render methods

  }, {
    key: "_renderHeader",
    value: function _renderHeader() {
      return React.createElement(_regular_card_header_component.RegularCardHeaderComponent, {
        iconClassNames: this._getHeaderIconClassName(),
        onIconClick: this._isClosable() ? this._getCloseHandler() : undefined
      }, this._getTitle());
    }
  }, {
    key: "_renderFooterButtons",
    value: function _renderFooterButtons(buttonOptions) {
      return (0, _ramda.addIndex)(_ramda.map)(function (buttonOptions, index) {
        return React.createElement(_regular_button_component.RegularButtonComponent, _extends({}, buttonOptions, {
          key: "button_".concat(index)
        }));
      }, buttonOptions);
    }
  }, {
    key: "_renderFooter",
    value: function _renderFooter() {
      var buttons = this._getButtons();

      if ((0, _ramda.isNil)(buttons) || !(0, _ramda.is)(Array, buttons) || (0, _ramda.isEmpty)(buttons)) {
        return null;
      }

      var mainGroupCount = 0;
      var preparedButtons;

      if ((0, _ramda.is)(Array, buttons[0])) {
        mainGroupCount = buttons[0].length;
        preparedButtons = (0, _ramda.flatten)(this._prepareButtons(buttons));
      } else {
        preparedButtons = this._prepareButtons(buttons);
      }

      return React.createElement(_dialog_box_actions_container.DialogBoxActionsContainer, {
        containerClassName: this._getActionsContainerClassName(),
        mainGroupCount: mainGroupCount
      }, this._renderFooterButtons(preparedButtons));
    }
  }, {
    key: "_renderLoadingOverlay",
    value: function _renderLoadingOverlay() {
      return React.createElement(_overlay_component.OverlayComponent, {
        containerClassName: this._getLoadingOverlayContainerClassName(),
        show: this._isLoading()
      }, React.createElement(_rotating_font_icon_preloader.RotatingFontIconPreloader, null));
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(_modal_component.ModalComponent, {
        show: this._shouldShow(),
        header: this._renderHeader(),
        footer: this._renderFooter(),
        onOverlayClick: this._isClosable() ? this._getCloseHandler() : undefined,
        bodyOuterStyles: this._getBodyOuterStyle()
      }, this._renderLoadingOverlay(), this.props.children);
    } // endregion

  }]);

  return ModalDialogBoxClass;
}(React.Component), _class2.displayName = 'ModalDialogBoxClass', _class2.defaultProps = {
  show: false,
  loading: false,
  closable: true,
  title: '',
  titleIconClassName: '',
  buttons: null,
  onClose: function onClose() {}
}, _temp)) || _class);
exports.ModalDialogBoxClass = ModalDialogBoxClass;

function ModalDialogBoxComponent(props) {
  return React.createElement(_main_theme_provider.MainThemeContext.Consumer, null, function (windowDimensions) {
    return React.createElement(ModalDialogBoxClass, _extends({}, props, windowDimensions));
  });
}

ModalDialogBoxComponent.displayName = 'ModalDialogBoxComponent'; // exports

var _default = ModalDialogBoxComponent;
exports.default = _default;