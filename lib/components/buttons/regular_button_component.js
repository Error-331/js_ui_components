'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RegularButtonClass = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

// local imports


exports.RegularButtonComponent = RegularButtonComponent;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ramda = require('ramda');

var _design_components = require('@webfuturistics/design_components');

var _inline_text_block = require('./../layout/text/inline_text_block');

var _main_theme_provider = require('./../../theming/providers/main_theme_provider');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// styles definition


// type definitions
var verticalPadding = 11; // px
var horizontalPadding = 16; // px

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

            minWidth: theme.buttonStyles.regularButtonMinimumWidth + 'px',

            borderRadius: '2px',

            padding: verticalPadding + 'px ' + horizontalPadding + 'px',

            '-webkit-tap-highlight-color': 'transparent',
            transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',

            cursor: 'pointer',

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
                border: theme.buttonStyles.borderSize + 'px solid ' + theme.buttonStyles.borderColor,
                padding: verticalPadding - theme.buttonStyles.borderSize + 'px ' + (horizontalPadding - theme.buttonStyles.borderSize) + 'px',

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

            '& > $iconContainer': {
                flexBasis: 'auto',
                flexGrow: 0,
                flexShrink: 1,

                fontSize: theme.buttonStyles.iconFontSize,
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

                fontSize: theme.buttonStyles.captionFontSize,

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
var RegularButtonClass = exports.RegularButtonClass = (_dec = (0, _reactJss2.default)(styles), _dec(_class = (_temp = _class2 = function (_React$Component) {
    _inherits(RegularButtonClass, _React$Component);

    // endregion

    // region constructor

    // region static props
    function RegularButtonClass(props) {
        _classCallCheck(this, RegularButtonClass);

        var _this = _possibleConstructorReturn(this, (RegularButtonClass.__proto__ || Object.getPrototypeOf(RegularButtonClass)).call(this, props));

        var self = _this;

        self._onClick = self._onClick.bind(_this);
        return _this;
    }

    // endregion

    // region lifecycle methods
    // endregion

    // region style accessors


    _createClass(RegularButtonClass, [{
        key: '_getIconClassName',
        value: function _getIconClassName() {
            var _props = this.props,
                iconClassName = _props.iconClassName,
                classes = _props.classes;

            var textType = this._getTextType();

            if ((0, _ramda.isNil)(iconClassName)) {
                return null;
            }

            return (0, _classnames2.default)(classes.iconContainer, iconClassName, {
                'left': (0, _ramda.equals)('left', this._getLabelPosition()),
                'right': (0, _ramda.equals)('right', this._getLabelPosition())
            }, textType);
        }
    }, {
        key: '_getComponentContainerClass',
        value: function _getComponentContainerClass() {
            var _props2 = this.props,
                componentContainer = _props2.classes.componentContainer,
                containerClassName = _props2.containerClassName;

            var buttonVariant = this._getVariant();

            return (0, _classnames2.default)(componentContainer, buttonVariant, containerClassName);
        }
    }, {
        key: '_getCaptionContainerClass',
        value: function _getCaptionContainerClass() {
            var captionContainer = this.props.classes.captionContainer;

            var textType = this._getTextType();

            return (0, _classnames2.default)(captionContainer, textType);
        }

        // endregion

        // region label accessors
        // endregion

        // region state accessors
        // endregion

        // region prop accessors

    }, {
        key: '_getDisabled',
        value: function _getDisabled() {
            var _props$disabled = this.props.disabled,
                disabled = _props$disabled === undefined ? false : _props$disabled;

            return disabled;
        }
    }, {
        key: '_getVariant',
        value: function _getVariant() {
            var _props$variant = this.props.variant,
                variant = _props$variant === undefined ? 'contained' : _props$variant;

            return variant.toLowerCase();
        }
    }, {
        key: '_getTextType',
        value: function _getTextType() {
            var _props$textType = this.props.textType,
                textType = _props$textType === undefined ? 'default' : _props$textType;

            return textType.toLowerCase();
        }
    }, {
        key: '_getLabelPosition',
        value: function _getLabelPosition() {
            var labelPosition = this.props.labelPosition;

            labelPosition = (0, _ramda.is)(String, labelPosition) ? labelPosition.toLowerCase() : labelPosition;

            return (0, _ramda.unless)(_design_components.isNotNil, (0, _ramda.always)('left'))(labelPosition);
        }
    }, {
        key: '_getLabel',
        value: function _getLabel() {
            var _props$label = this.props.label,
                label = _props$label === undefined ? '' : _props$label;

            return label;
        }
    }, {
        key: '_getContainerStyles',
        value: function _getContainerStyles() {
            var _props$containerStyle = this.props.containerStyles,
                containerStyles = _props$containerStyle === undefined ? {} : _props$containerStyle;

            return containerStyles;
        }

        // endregion

        // region handlers

    }, {
        key: '_onClick',
        value: function _onClick(event) {
            var onClick = this.props.onClick;


            if ((0, _ramda.isNil)(onClick) && (0, _ramda.is)(Function, onClick)) {
                return;
            }

            onClick(event);
        }

        // endregion

        // region render methods

    }, {
        key: '_renderCaptionContainer',
        value: function _renderCaptionContainer() {
            return React.createElement(
                _inline_text_block.InlineTextBlock,
                { className: this._getCaptionContainerClass() },
                this._getLabel()
            );
        }
    }, {
        key: '_renderIconContainer',
        value: function _renderIconContainer() {
            return (0, _ramda.unless)(_ramda.isNil, function (className) {
                return React.createElement('i', { className: className });
            })(this._getIconClassName());
        }
    }, {
        key: '_renderComponentContainer',
        value: function _renderComponentContainer() {
            var onClickHandler = this._onClick;
            var labelPosition = this._getLabelPosition();
            var isDisabled = this._getDisabled();

            return React.createElement(
                'div',
                {
                    onClick: isDisabled ? null : onClickHandler,
                    className: this._getComponentContainerClass(),
                    style: this._getContainerStyles()
                },
                (0, _ramda.equals)('right', labelPosition) ? this._renderIconContainer() : null,
                this._renderCaptionContainer(),
                (0, _ramda.equals)('left', labelPosition) ? this._renderIconContainer() : null
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return this._renderComponentContainer();
        }

        // endregion

    }]);

    return RegularButtonClass;
}(React.Component), _class2.displayName = 'RegularButtonClass', _class2.defaultProps = {
    label: '',

    onClick: function onClick() {}
}, _temp)) || _class);

// exports

function RegularButtonComponent(props) {
    return React.createElement(
        _main_theme_provider.MainThemeContext.Consumer,
        null,
        function (windowDimensions) {
            return React.createElement(RegularButtonClass, _extends({}, props, windowDimensions));
        }
    );
}

RegularButtonComponent.displayName = 'RegularButtonComponent';