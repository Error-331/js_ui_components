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
exports.RegularButtonComponent = RegularButtonComponent;
exports.default = exports.RegularButtonClass = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ramda = require("ramda");

var _utility_helpers = require("@webfuturistics/design_components/lib/helpers/general/utility_helpers");

var _general_constants = require("./../../theming/constants/general_constants");

var _font_icon = require("./../layout/icons/font_icon");

var _inline_text_block = _interopRequireDefault(require("./../layout/text/inline_text_block"));

var _main_theme_provider = require("./../../theming/providers/main_theme_provider");

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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// styles definition
var verticalPadding = 11; // px

var horizontalPadding = 16; // px

var doubleVerticalPadding = verticalPadding * 2; // px

var doubleHorizontalPadding = horizontalPadding * 2; // px

var roundButtonSpacing = (0, _ramda.max)(doubleHorizontalPadding, doubleVerticalPadding);

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
      borderRadius: '2px',
      padding: "".concat(verticalPadding, "px ").concat(horizontalPadding, "px ").concat(verticalPadding - theme.layoutStyles.bodyExcessVerticalSpacing, "px ").concat(horizontalPadding, "px"),
      '-webkit-tap-highlight-color': 'transparent',
      transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      cursor: 'pointer',
      '&.rectangular': {
        '&.tiny': {
          minWidth: theme.buttonStyles.tinyRegularButtonMinimumWidth
        },
        '&.small': {
          minWidth: theme.buttonStyles.smallRegularButtonMinimumWidth
        },
        '&.medium': {
          minWidth: theme.buttonStyles.mediumRegularButtonMinimumWidth
        },
        '&.large': {
          minWidth: theme.buttonStyles.largeRegularButtonMinimumWidth
        },
        '&.extraLarge': {
          minWidth: theme.buttonStyles.extraLargeRegularButtonMinimumWidth
        }
      },
      '&.round': {
        borderRadius: '50%',
        '&.tiny': {
          minWidth: "".concat(theme.layoutStyles.tinyIconSize + roundButtonSpacing, "px"),
          minHeight: "".concat(theme.layoutStyles.tinyIconSize + roundButtonSpacing, "px")
        },
        '&.small': {
          minWidth: "".concat(theme.layoutStyles.smallIconSize + roundButtonSpacing, "px"),
          minHeight: "".concat(theme.layoutStyles.smallIconSize + roundButtonSpacing, "px")
        },
        '&.medium': {
          minWidth: "".concat(theme.layoutStyles.mediumIconSize + roundButtonSpacing, "px"),
          minHeight: "".concat(theme.layoutStyles.mediumIconSize + roundButtonSpacing, "px")
        },
        '&.large': {
          minWidth: "".concat(theme.layoutStyles.largeIconSize + roundButtonSpacing, "px"),
          minHeight: "".concat(theme.layoutStyles.largeIconSize + roundButtonSpacing, "px")
        },
        '&.extraLarge': {
          minWidth: "".concat(theme.layoutStyles.extraLargeIconSize + roundButtonSpacing, "px"),
          minHeight: "".concat(theme.layoutStyles.extraLargeIconSize + roundButtonSpacing, "px")
        }
      },
      '&.text': {
        border: 'none',
        '&:hover': {
          backgroundColor: theme.colorUtilities.shadeColorFast(theme.buttonStyles.bgColor, 0.8)
        },
        '& > $iconContainer': {
          '&.default': {
            color: theme.buttonStyles.fontColorDefaultNoBG
          }
        },
        '& > $captionContainer': {
          fontFamily: theme.buttonStyles.fontStackBold,
          '&.default': {
            color: theme.buttonStyles.fontColorDefaultNoBG
          }
        }
      },
      '&.outlined': {
        border: "".concat(theme.buttonStyles.borderSize, "px solid ").concat(theme.buttonStyles.borderColor),
        padding: "\n                ".concat(verticalPadding - theme.buttonStyles.borderSize, "px \n                ").concat(horizontalPadding - theme.buttonStyles.borderSize, "px\n                ").concat(verticalPadding - theme.buttonStyles.borderSize - theme.layoutStyles.bodyExcessVerticalSpacing, "px \n                ").concat(horizontalPadding - theme.buttonStyles.borderSize, "px\n                "),
        '&:hover': {
          backgroundColor: theme.colorUtilities.shadeColorFast(theme.buttonStyles.bgColor, 0.8)
        },
        '& > $iconContainer': {
          '&.default': {
            color: theme.buttonStyles.fontColorDefaultNoBG
          }
        },
        '& > $captionContainer': {
          fontFamily: theme.buttonStyles.fontStackRegular,
          '&.default': {
            color: theme.buttonStyles.fontColorDefaultNoBG
          }
        }
      },
      '&.contained': {
        border: 'none',
        boxShadow: theme.materialDepthLevels.materialDepth1BoxShadow,
        backgroundColor: theme.buttonStyles.bgColor,
        '&:hover': {
          backgroundColor: theme.colorUtilities.shadeColorFast(theme.buttonStyles.bgColor, -0.2)
        },
        '& > $iconContainer': {
          '&.default': {
            color: theme.buttonStyles.fontColorDefaultWithBG
          }
        },
        '& > $captionContainer': {
          fontFamily: theme.buttonStyles.fontStackRegular,
          '&.default': {
            color: theme.buttonStyles.fontColorDefaultWithBG
          }
        }
      },
      '&.text.disabled': {
        '&:hover': {
          backgroundColor: theme.baseStyles.transparentBGColor
        },
        '& > $iconContainer': {
          '&.default': {
            color: theme.buttonStyles.fontColorSecondary
          }
        },
        '& > $captionContainer': {
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
        '& > $iconContainer': {
          '&.default': {
            color: theme.buttonStyles.fontColorSecondary
          }
        },
        '& > $captionContainer': {
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
        '& > $iconContainer': {
          '&.default': {
            color: theme.buttonStyles.fontColorSecondary
          }
        },
        '& > $captionContainer': {
          '&.default': {
            color: theme.buttonStyles.fontColorSecondary
          }
        }
      },
      '& > $iconContainer': {
        flexBasis: 'auto',
        flexGrow: 0,
        flexShrink: 1,
        color: theme.buttonStyles.fontColorDefault,
        '&.left': {
          marginLeft: '10px'
        },
        '&.right': {
          marginRight: '10px'
        },
        '&.primary': {
          color: theme.buttonStyles.fontColorPrimary
        },
        '&.secondary': {
          color: theme.buttonStyles.fontColorSecondary
        }
      },
      '& > $captionContainer': {
        flexBasis: 'auto',
        flexGrow: 0,
        flexShrink: 1,
        textTransform: 'uppercase',
        textAlign: 'center',
        letterSpacing: '.5px',
        '&.primary': {
          color: theme.buttonStyles.fontColorPrimary
        },
        '&.secondary': {
          color: theme.buttonStyles.fontColorSecondary
        }
      }
    },
    iconContainer: {},
    captionContainer: {}
  };
};
/**
 * Regular button component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation
// $FlowFixMe decorators


var RegularButtonClass = (_dec = (0, _reactJss.default)(styles, {
  injectTheme: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RegularButtonClass, _React$Component);

  // region static props
  // endregion
  // region constructor
  function RegularButtonClass(props) {
    var _this;

    _classCallCheck(this, RegularButtonClass);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RegularButtonClass).call(this, props));

    var self = _assertThisInitialized(_this);

    self._onClick = self._onClick.bind(_assertThisInitialized(_this));
    return _this;
  } // endregion
  // region business logic


  _createClass(RegularButtonClass, [{
    key: "_getLabelFontSize",
    value: function _getLabelFontSize() {
      var theme = this.props.theme;

      switch (this._getSize()) {
        case 'tiny':
          return theme.buttonStyles.tinyCaptionFontSize;

        case 'small':
          return theme.buttonStyles.smallCaptionFontSize;

        case 'medium':
          return theme.buttonStyles.mediumCaptionFontSize;

        case 'large':
          return theme.buttonStyles.largeCaptionFontSize;

        case 'extraLarge':
          return theme.buttonStyles.extraLargeCaptionFontSize;

        default:
          return theme.buttonStyles.smallCaptionFontSize;
      }
    } // endregion
    // region lifecycle methods
    // endregion
    // region style accessors

  }, {
    key: "_getIconClassName",
    value: function _getIconClassName() {
      var _this$props = this.props,
          iconClassName = _this$props.iconClassName,
          classes = _this$props.classes;

      var textType = this._getTextType();

      if ((0, _ramda.isNil)(iconClassName)) {
        return null;
      }

      return (0, _classnames.default)(classes.iconContainer, iconClassName, {
        'left': (0, _ramda.equals)('left', this._getLabelPosition()),
        'right': (0, _ramda.equals)('right', this._getLabelPosition())
      }, textType);
    }
  }, {
    key: "_getComponentContainerClass",
    value: function _getComponentContainerClass() {
      var _this$props2 = this.props,
          componentContainer = _this$props2.classes.componentContainer,
          containerClassName = _this$props2.containerClassName,
          className = _this$props2.className;

      var buttonShape = this._getShape();

      var buttonVariant = this._getVariant();

      var size = this._getSize();

      return (0, _classnames.default)(componentContainer, buttonShape, size, buttonVariant, {
        'disabled': this._getDisabled()
      }, containerClassName, className);
    }
  }, {
    key: "_getCaptionContainerClass",
    value: function _getCaptionContainerClass() {
      var captionContainer = this.props.classes.captionContainer;

      var textType = this._getTextType();

      return (0, _classnames.default)(captionContainer, textType);
    } // endregion
    // region label accessors
    // endregion
    // region state accessors
    // endregion
    // region prop accessors

  }, {
    key: "_getDisabled",
    value: function _getDisabled() {
      return (0, _ramda.defaultTo)(false)(this.props.disabled);
    }
  }, {
    key: "_getVariant",
    value: function _getVariant() {
      return (0, _ramda.defaultTo)(RegularButtonClass.defaultProps.variant)(this.props.variant).toLowerCase();
    }
  }, {
    key: "_getShape",
    value: function _getShape() {
      return (0, _ramda.defaultTo)(RegularButtonClass.defaultProps.shape)(this.props.shape).toLowerCase();
    }
  }, {
    key: "_getTextType",
    value: function _getTextType() {
      return (0, _ramda.defaultTo)(RegularButtonClass.defaultProps.textType)(this.props.textType).toLowerCase();
    }
  }, {
    key: "_getLabelPosition",
    value: function _getLabelPosition() {
      var labelPosition = this.props.labelPosition;
      labelPosition = typeof labelPosition === 'string' ? labelPosition.toLowerCase() : labelPosition;

      if (this._isLabelEmpty()) {
        return '';
      }

      return (0, _ramda.unless)(_utility_helpers.isNotNil, (0, _ramda.always)('left'))(labelPosition);
    }
  }, {
    key: "_getLabel",
    value: function _getLabel() {
      return (0, _ramda.defaultTo)('')(this.props.label);
    }
  }, {
    key: "_getCaptionStyle",
    value: function _getCaptionStyle() {
      return (0, _ramda.defaultTo)(RegularButtonClass.defaultProps.captionStyle)(this.props.captionStyle);
    }
  }, {
    key: "_getContainerStyles",
    value: function _getContainerStyles() {
      var containerStyles = (0, _ramda.defaultTo)({})(this.props.containerStyles);
      var style = (0, _ramda.defaultTo)({})(this.props.style);
      return Object.assign({}, containerStyles, style);
    }
  }, {
    key: "_getSize",
    value: function _getSize() {
      return (0, _ramda.defaultTo)(_general_constants.SMALL_SIZE)(this.props.size);
    }
  }, {
    key: "_isLabelEmpty",
    value: function _isLabelEmpty() {
      return (0, _ramda.isEmpty)(this._getLabel());
    } // endregion
    // region handlers

  }, {
    key: "_onClick",
    value: function _onClick(event) {
      var onClick = this.props.onClick; // TODO: stupid flow.js - cannot use isNil here

      if (onClick === null || onClick === undefined) {
        return;
      }

      onClick(event);
    } // endregion
    // region render methods

  }, {
    key: "_renderCaptionContainer",
    value: function _renderCaptionContainer() {
      return React.createElement(_inline_text_block.default, {
        fontSize: this._getLabelFontSize(),
        className: this._getCaptionContainerClass(),
        style: this._getCaptionStyle()
      }, this._getLabel());
    }
  }, {
    key: "_renderIconContainer",
    value: function _renderIconContainer() {
      var _this2 = this;

      return (0, _ramda.unless)(_ramda.isNil, function (className) {
        return React.createElement(_font_icon.FontIcon, {
          size: _this2._getSize(),
          className: className
        });
      })(this._getIconClassName());
    }
  }, {
    key: "_renderComponentContainer",
    value: function _renderComponentContainer() {
      var onClickHandler = this._onClick;

      var labelPosition = this._getLabelPosition();

      var isDisabled = this._getDisabled();

      return React.createElement("div", {
        onClick: isDisabled ? null : onClickHandler,
        className: this._getComponentContainerClass(),
        style: this._getContainerStyles()
      }, (0, _ramda.equals)('right', labelPosition) ? this._renderIconContainer() : null, this._renderCaptionContainer(), (0, _ramda.or)((0, _ramda.equals)('left', labelPosition), this._isLabelEmpty()) ? this._renderIconContainer() : null);
    }
  }, {
    key: "render",
    value: function render() {
      return this._renderComponentContainer();
    } // endregion

  }]);

  return RegularButtonClass;
}(React.Component), _class2.displayName = 'RegularButtonClass', _class2.defaultProps = {
  variant: 'contained',
  shape: 'rectangular',
  textType: 'default',
  label: '',
  captionStyle: {},
  onClick: function onClick() {}
}, _temp)) || _class);
exports.RegularButtonClass = RegularButtonClass;

function RegularButtonComponent(props) {
  return React.createElement(_main_theme_provider.MainThemeContext.Consumer, null, function (windowDimensions) {
    return React.createElement(RegularButtonClass, _extends({}, props, windowDimensions));
  });
}

RegularButtonComponent.displayName = 'RegularButtonComponent'; // exports

var _default = RegularButtonComponent;
exports.default = _default;