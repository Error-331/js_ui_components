'use strict'; // external imports

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.iterator");

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
exports.ChipComponent = ChipComponent;
exports.default = exports.ChipClass = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _ramda = require("ramda");

var _classnames = _interopRequireDefault(require("classnames"));

var _utility_helpers = require("@webfuturistics/design_components/lib/helpers/general/utility_helpers");

var _main_theme_provider = require("./../../theming/providers/main_theme_provider");

var _inline_text_block = require("./../layout/text/inline_text_block");

var _font_icon = require("./../layout/icons/font_icon");

var _dec, _class, _class2, _temp;

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
var verticalPadding = 6; // px

var horizontalPadding = 8; // px

var labelSize = 12; // px

var iconSize = labelSize + 2; // px

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
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'flex-start',
      borderRadius: '16px',
      padding: "".concat(verticalPadding, "px ").concat(horizontalPadding, "px"),
      '-webkit-tap-highlight-color': 'transparent',
      transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      '&.basic': {
        border: 'none',
        boxShadow: theme.materialDepthLevels.materialDepth1BoxShadow,
        backgroundColor: theme.baseStyles.subSecondaryColor,
        '&.clickable': {
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: theme.colorUtilities.shadeColorFast(theme.baseStyles.subSecondaryColor, -0.2)
          }
        },
        '& > $labelContainer': {
          fontFamily: theme.buttonStyles.fontStackRegular,
          '&.default': {
            color: theme.buttonStyles.fontColorDefaultWithBG
          }
        },
        '& > $iconContainer': {
          '&.default': {
            color: theme.buttonStyles.fontColorDefaultWithBG
          }
        }
      },
      '&.outlined': {
        border: "".concat(theme.buttonStyles.borderSize, "px solid ").concat(theme.buttonStyles.borderColor),
        padding: "".concat(verticalPadding - theme.buttonStyles.borderSize, "px ").concat(horizontalPadding - theme.buttonStyles.borderSize, "px"),
        '&.clickable': {
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: theme.colorUtilities.shadeColorFast(theme.buttonStyles.bgColor, 0.8)
          }
        },
        '& > $labelContainer': {
          fontFamily: theme.buttonStyles.fontStackRegular,
          '&.default': {
            color: theme.buttonStyles.fontColorDefaultNoBG
          }
        },
        '& > $iconContainer': {
          '&.default': {
            color: theme.buttonStyles.fontColorDefaultNoBG
          }
        }
      },
      '&.contained': {
        border: 'none',
        boxShadow: theme.materialDepthLevels.materialDepth1BoxShadow,
        backgroundColor: theme.buttonStyles.bgColor,
        '&.clickable': {
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: theme.colorUtilities.shadeColorFast(theme.buttonStyles.bgColor, -0.2)
          }
        },
        '& > $labelContainer': {
          fontFamily: theme.buttonStyles.fontStackRegular,
          '&.default': {
            color: theme.buttonStyles.fontColorDefaultWithBG
          }
        },
        '& > $iconContainer': {
          '&.default': {
            color: theme.buttonStyles.fontColorDefaultWithBG
          }
        }
      },
      '&.basic.disabled': {
        backgroundColor: theme.buttonStyles.disabledBgColor,
        '&:hover': {
          backgroundColor: theme.buttonStyles.disabledBgColor
        },
        '& > $labelContainer': {
          '&.default': {
            color: theme.buttonStyles.fontColorSecondary
          }
        }
      },
      '&.outlined.disabled': {
        borderColor: theme.buttonStyles.disabledBgColor,
        '&:hover': {
          backgroundColor: theme.baseStyles.transparentBGColor
        },
        '& > $labelContainer': {
          '&.default': {
            color: theme.buttonStyles.fontColorSecondary
          }
        }
      },
      '&.contained.disabled': {
        backgroundColor: theme.buttonStyles.disabledBgColor,
        '&:hover': {
          backgroundColor: theme.buttonStyles.disabledBgColor
        },
        '& > $labelContainer': {
          '&.default': {
            color: theme.buttonStyles.fontColorSecondary
          }
        }
      },
      '& > $iconContainer': {
        flexBasis: 'auto',
        flexGrow: 0,
        flexShrink: 1,
        fontSize: "".concat(iconSize, "px"),
        color: theme.buttonStyles.fontColorDefault,
        '&.clickable': {
          cursor: 'pointer'
        },
        '&.left': {
          marginRight: '5px'
        },
        '&.right': {
          marginLeft: '5px'
        },
        '&.primary': {
          color: theme.buttonStyles.fontColorPrimary
        },
        '&.secondary': {
          color: theme.buttonStyles.fontColorSecondary
        }
      },
      '& > $labelContainer': {
        flexBasis: 'auto',
        flexGrow: 0,
        flexShrink: 1,
        textAlign: 'center',
        letterSpacing: '.5px'
      }
    },
    labelContainer: {},
    iconContainer: {}
  };
};
/**
 * Chip component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation
// $FlowFixMe decorators


var ChipClass = (_dec = (0, _reactJss.default)(styles, {
  injectTheme: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ChipClass, _React$Component);

  // region static props
  // endregion
  // region private props
  // endregion
  // region constructor
  function ChipClass(props) {
    var _this;

    _classCallCheck(this, ChipClass);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ChipClass).call(this, props));
    _this.state = {
      isMouseOver: ChipClass.defaultState.isMouseOver
    };

    var self = _assertThisInitialized(_this);

    self._onClickHandler = self._onClickHandler.bind(_assertThisInitialized(_this));
    self._onClickRightIconHandler = self._onClickRightIconHandler.bind(_assertThisInitialized(_this));
    self._mouseOverContainerHandler = self._mouseOverContainerHandler.bind(_assertThisInitialized(_this));
    self._mouseLeaveContainerHandler = self._mouseLeaveContainerHandler.bind(_assertThisInitialized(_this));
    return _this;
  } // endregion
  // region business logic
  // endregion
  // region lifecycle methods
  // endregion
  // region style accessors


  _createClass(ChipClass, [{
    key: "_getRightIconDisabledStyle",
    value: function _getRightIconDisabledStyle() {
      if (this._isDisabled() === false) {
        return {};
      }

      var theme = this.props.theme;
      return {
        color: theme.buttonStyles.fontColorSecondary
      };
    }
  }, {
    key: "_getRightIconStyle",
    value: function _getRightIconStyle() {
      var iconStyle = (0, _ramda.defaultTo)(ChipClass.defaultProps.rightIconStyle)(this.props.rightIconStyle);
      return _objectSpread({}, this._getRightIconDisabledStyle(), iconStyle);
    }
  }, {
    key: "_getLabelStyle",
    value: function _getLabelStyle() {
      return (0, _ramda.defaultTo)(ChipClass.defaultProps.labelStyle)(this.props.labelStyle);
    }
  }, {
    key: "_getData",
    value: function _getData() {
      return (0, _ramda.defaultTo)(ChipClass.defaultProps.data)(this.props.data);
    }
  }, {
    key: "_getContainerStyle",
    value: function _getContainerStyle() {
      var containerStyles = (0, _ramda.defaultTo)(ChipClass.defaultProps.containerStyle)(this.props.containerStyle);
      var style = (0, _ramda.defaultTo)(ChipClass.defaultProps.style)(this.props.style);
      var hoverStyles = this._isMouseOver() ? this._getContainerHoverStyle() : {};
      return Object.assign({}, containerStyles, style, hoverStyles);
    }
  }, {
    key: "_getContainerHoverStyle",
    value: function _getContainerHoverStyle() {
      return (0, _ramda.defaultTo)(ChipClass.defaultProps.hoverStyle)(this.props.hoverStyle);
    }
  }, {
    key: "_getRightIconClassName",
    value: function _getRightIconClassName() {
      var rightIconClassName = (0, _ramda.defaultTo)(ChipClass.defaultProps.rightIconClassName)(this.props.rightIconClassName);

      if ((0, _ramda.isNil)(rightIconClassName)) {
        return null;
      }

      var classes = this.props.classes;
      var iconContainer = classes.iconContainer;

      var textType = this._getTextType();

      var isDisabled = this._isDisabled();

      return (0, _classnames.default)(iconContainer, rightIconClassName, {
        'clickable': !isDisabled && this._isRightIconClickable(),
        'right': (0, _ramda.equals)('left', this._getLabelPosition()),
        'left': (0, _ramda.equals)('right', this._getLabelPosition())
      }, textType);
    }
  }, {
    key: "_getLabelContainerClass",
    value: function _getLabelContainerClass() {
      var labelContainer = this.props.classes.labelContainer;

      var textType = this._getTextType();

      return (0, _classnames.default)(labelContainer, textType);
    }
  }, {
    key: "_getComponentContainerClass",
    value: function _getComponentContainerClass() {
      var _this$props = this.props,
          componentContainer = _this$props.classes.componentContainer,
          containerClassName = _this$props.containerClassName,
          className = _this$props.className;

      var buttonVariant = this._getVariant();

      return (0, _classnames.default)(componentContainer, buttonVariant, {
        'clickable': !this._isDisabled() && this._isClickable(),
        'disabled': this._isDisabled()
      }, containerClassName, className);
    } // endregion
    // region label accessors
    // endregion
    // region state accessors

  }, {
    key: "_isMouseOver",
    value: function _isMouseOver() {
      return (0, _ramda.defaultTo)(ChipClass.defaultState.isMouseOver)(this.state.isMouseOver);
    } // endregion
    // region prop accessors

  }, {
    key: "_getClickHandler",
    value: function _getClickHandler() {
      return (0, _ramda.defaultTo)(ChipClass.defaultProps.onClick)(this.props.onClick);
    }
  }, {
    key: "_getClickRightIconHandler",
    value: function _getClickRightIconHandler() {
      return (0, _ramda.defaultTo)(ChipClass.defaultProps.onRightIconClick)(this.props.onRightIconClick);
    }
  }, {
    key: "_isDisabled",
    value: function _isDisabled() {
      return (0, _ramda.defaultTo)(ChipClass.defaultProps.disabled)(this.props.disabled);
    }
  }, {
    key: "_getVariant",
    value: function _getVariant() {
      return (0, _ramda.defaultTo)(ChipClass.defaultProps.variant)(this.props.variant).toLowerCase();
    }
  }, {
    key: "_getTextType",
    value: function _getTextType() {
      return (0, _ramda.defaultTo)(ChipClass.defaultProps.textType)(this.props.textType).toLowerCase();
    }
  }, {
    key: "_isClickable",
    value: function _isClickable() {
      return (0, _ramda.defaultTo)(ChipClass.defaultProps.clickable)(this.props.clickable);
    }
  }, {
    key: "_isRightIconClickable",
    value: function _isRightIconClickable() {
      return (0, _ramda.defaultTo)(ChipClass.defaultProps.rightIconClickable)(this.props.rightIconClickable);
    }
  }, {
    key: "_getLabelPosition",
    value: function _getLabelPosition() {
      var labelPosition = this.props.labelPosition;

      if ((0, _ramda.isNil)(labelPosition)) {
        return null;
      }

      return (0, _ramda.unless)(_utility_helpers.isNotNil, (0, _ramda.always)(ChipClass.defaultProps.labelPosition))(labelPosition);
    }
  }, {
    key: "_getLabel",
    value: function _getLabel() {
      return (0, _ramda.defaultTo)(ChipClass.defaultProps.label)(this.props.label);
    }
  }, {
    key: "_isLabelEmpty",
    value: function _isLabelEmpty() {
      return (0, _ramda.isEmpty)(this._getLabel());
    } // endregion
    // region handlers

  }, {
    key: "_onClickHandler",
    value: function _onClickHandler(event) {
      event.stopPropagation();

      this._getClickHandler()(event, this._getData());
    }
  }, {
    key: "_onClickRightIconHandler",
    value: function _onClickRightIconHandler(event) {
      event.stopPropagation();

      this._getClickRightIconHandler()(event, this._getData());
    }
  }, {
    key: "_mouseOverContainerHandler",
    value: function _mouseOverContainerHandler() {
      this.setState({
        isMouseOver: true
      });
    }
  }, {
    key: "_mouseLeaveContainerHandler",
    value: function _mouseLeaveContainerHandler() {
      this.setState({
        isMouseOver: false
      });
    } // endregion
    // region render methods

  }, {
    key: "_renderRightIconContainer",
    value: function _renderRightIconContainer() {
      var rightIconClassName = this._getRightIconClassName();

      if (!(0, _ramda.isNil)(rightIconClassName)) {
        var isDisabled = this._isDisabled();

        var isClickable = this._isRightIconClickable();

        return React.createElement(_font_icon.FontIcon, {
          onClick: isDisabled && isClickable ? null : this._onClickRightIconHandler,
          className: rightIconClassName,
          style: this._getRightIconStyle(),
          size: "custom"
        });
      } else {
        return null;
      }
    }
  }, {
    key: "_renderLabelContainer",
    value: function _renderLabelContainer() {
      return React.createElement(_inline_text_block.InlineTextBlock, {
        className: this._getLabelContainerClass(),
        style: this._getLabelStyle(),
        fontSize: labelSize
      }, this._getLabel());
    }
  }, {
    key: "_renderComponentContainer",
    value: function _renderComponentContainer() {
      var labelPosition = this._getLabelPosition();

      var isDisabled = this._isDisabled();

      var isClickable = this._isClickable();

      return React.createElement("div", {
        className: this._getComponentContainerClass(),
        style: this._getContainerStyle(),
        onClick: isDisabled && isClickable ? null : this._onClickHandler,
        onMouseOver: this._mouseOverContainerHandler,
        onMouseLeave: this._mouseLeaveContainerHandler
      }, (0, _ramda.equals)('right', labelPosition) ? this._renderRightIconContainer() : null, this._renderLabelContainer(), (0, _ramda.or)((0, _ramda.equals)('left', labelPosition), this._isLabelEmpty()) ? this._renderRightIconContainer() : null);
    }
  }, {
    key: "render",
    value: function render() {
      return this._renderComponentContainer();
    } // endregion

  }]);

  return ChipClass;
}(React.Component), _class2.displayName = 'ChipComponent', _class2.defaultProps = {
  variant: 'contained',
  textType: 'default',
  clickable: false,
  rightIconClickable: false,
  disabled: false,
  label: '',
  labelPosition: 'left',
  data: null,
  rightIconClassName: undefined,
  style: {},
  containerStyle: {},
  hoverStyle: {},
  labelStyle: {},
  rightIconStyle: {},
  onClick: function onClick() {},
  onRightIconClick: function onRightIconClick() {}
}, _class2.defaultState = {
  isMouseOver: false
}, _temp)) || _class);
exports.ChipClass = ChipClass;

function ChipComponent(props) {
  return React.createElement(_main_theme_provider.MainThemeContext.Consumer, null, function (windowDimensions) {
    return React.createElement(ChipClass, _extends({}, props, windowDimensions));
  });
}

ChipComponent.displayName = 'ChipComponent'; // exports

var _default = ChipComponent;
exports.default = _default;