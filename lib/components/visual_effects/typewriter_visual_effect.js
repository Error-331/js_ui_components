'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TypewriterVisualEffectClass = exports.ANIMATION_STATE_BACKWARD_NAME = exports.ANIMATION_STAGE_FORWARD_NAME = exports.CARET_BLINK_KEYFRAMES_STYLE_NAME = exports.TYPING_BACKWARD_KEYFRAMES_STYLE_NAME = exports.TYPING_FORWARD_KEYFRAMES_STYLE_NAME = exports.ANIMATION_STEP_RATIO = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

// local imports


exports.TypewriterVisualEffect = TypewriterVisualEffect;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ramda = require('ramda');

var _main_theme_provider = require('./../../theming/providers/main_theme_provider');

var _inline_header = require('./../layout/text/inline_header');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// styles definition


// type definitions
var styles = function styles(theme) {
    return {
        componentContainer: {
            boxSizing: 'border-box',
            display: 'inline-block',

            '& > $textContainer': {
                display: 'inline-block',
                overflow: 'hidden',

                margin: '0 auto',
                borderRight: '4px solid ' + theme.baseStyles.accentColorPrimary,

                whiteSpace: 'nowrap',
                letterSpacing: '4px'
            }
        },

        textContainer: {}
    };
};

// constants definition
var ANIMATION_STEP_RATIO = exports.ANIMATION_STEP_RATIO = 0.0875;
var TYPING_FORWARD_KEYFRAMES_STYLE_NAME = exports.TYPING_FORWARD_KEYFRAMES_STYLE_NAME = 'typewriter_visual_effect_typing_forward_keyframes';
var TYPING_BACKWARD_KEYFRAMES_STYLE_NAME = exports.TYPING_BACKWARD_KEYFRAMES_STYLE_NAME = 'typewriter_visual_effect_typing_backward_keyframes';
var CARET_BLINK_KEYFRAMES_STYLE_NAME = exports.CARET_BLINK_KEYFRAMES_STYLE_NAME = 'typewriter_visual_effect_caret_bling_keyframes';

var ANIMATION_STAGE_FORWARD_NAME = exports.ANIMATION_STAGE_FORWARD_NAME = 'forward';
var ANIMATION_STATE_BACKWARD_NAME = exports.ANIMATION_STATE_BACKWARD_NAME = 'backward';

/**
 * Typewriter visual effect.
 * Uses [InlineHeader](#inlineheader) component for text representation.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation

// $FlowFixMe decorators
var TypewriterVisualEffectClass = exports.TypewriterVisualEffectClass = (_dec = (0, _reactJss2.default)(styles), _dec(_class = (_temp = _class2 = function (_React$Component) {
    _inherits(TypewriterVisualEffectClass, _React$Component);

    // endregion

    // region constructor

    // region static props
    function TypewriterVisualEffectClass(props) {
        _classCallCheck(this, TypewriterVisualEffectClass);

        var _this = _possibleConstructorReturn(this, (TypewriterVisualEffectClass.__proto__ || Object.getPrototypeOf(TypewriterVisualEffectClass)).call(this, props));

        _this._animationDelayTimeoutId = null;

        var self = _this;

        self.state = {
            currentTextIndex: TypewriterVisualEffectClass.defaultState.currentTextIndex,
            currentLoopIndex: TypewriterVisualEffectClass.defaultState.currentLoopIndex,
            animationStage: TypewriterVisualEffectClass.defaultState.animationStage
        };

        self._onAnimationEnd = (0, _ramda.bind)(self._onAnimationEnd, _this);
        return _this;
    }

    // endregion

    // region business logic


    // endregion

    // region private props


    _createClass(TypewriterVisualEffectClass, [{
        key: '_updateAnimationState',
        value: function _updateAnimationState(animationStage, currentTextIndex, currentLoopIndex) {
            var _this2 = this;

            animationStage = (0, _ramda.defaultTo)(this.state.animationStage)(animationStage);
            currentTextIndex = (0, _ramda.defaultTo)(this.state.currentTextIndex)(currentTextIndex);
            currentLoopIndex = (0, _ramda.defaultTo)(this.state.currentLoopIndex)(currentLoopIndex);

            this._animationDelayTimeoutId = setTimeout(function () {
                return _this2.setState({
                    animationStage: animationStage,
                    currentTextIndex: currentTextIndex,
                    currentLoopIndex: currentLoopIndex
                });
            }, this._getAnimationDelay());
        }
    }, {
        key: '_canRenderLoopIteration',
        value: function _canRenderLoopIteration() {
            if ((0, _ramda.isNil)(this._getCurrentText())) {
                return false;
            }

            var loopCount = this._getLoopCount();
            var currentLoopIndex = this.state.currentLoopIndex;


            if ((0, _ramda.equals)(loopCount, Infinity)) {
                return true;
            }

            return !(0, _ramda.or)((0, _ramda.lte)(loopCount, 0), (0, _ramda.gte)(currentLoopIndex, loopCount));
        }
    }, {
        key: '_prepareGlobalKeyframeStyles',
        value: function _prepareGlobalKeyframeStyles() {
            if ((0, _ramda.isNil)(this._getText())) {
                return;
            }

            this.props.theme.styleSheetRegister.addGlobalStyles(_defineProperty({}, '@keyframes ' + TYPING_FORWARD_KEYFRAMES_STYLE_NAME, {
                'from': {
                    width: '0%'
                },
                'to': {
                    width: '100%'
                }
            }), '@keyframes ' + TYPING_FORWARD_KEYFRAMES_STYLE_NAME);

            this.props.theme.styleSheetRegister.addGlobalStyles(_defineProperty({}, '@keyframes ' + TYPING_BACKWARD_KEYFRAMES_STYLE_NAME, {
                'from': {
                    width: '100%'
                },
                'to': {
                    width: '0%'
                }
            }), '@keyframes ' + TYPING_BACKWARD_KEYFRAMES_STYLE_NAME);

            var borderColor = this._getBorderColor();

            this.props.theme.styleSheetRegister.addGlobalStyles(_defineProperty({}, '@keyframes ' + CARET_BLINK_KEYFRAMES_STYLE_NAME, {
                'from, to': {
                    borderColor: 'transparent'
                },
                '50%': {
                    borderColor: borderColor
                }
            }), '@keyframes ' + CARET_BLINK_KEYFRAMES_STYLE_NAME + '_' + this._getPreparedBorderColor());
        }

        // endregion

        // region lifecycle methods

    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            var prevBorderColor = prevProps.theme.baseStyles.accentColorPrimary;
            var currentBorderColor = this.props.theme.baseStyles.accentColorPrimary;

            if (prevBorderColor !== currentBorderColor) {
                this._prepareGlobalKeyframeStyles();
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this._prepareGlobalKeyframeStyles();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            (0, _ramda.unless)(_ramda.isNil, function (id) {
                return clearTimeout(id);
            })(this._animationDelayTimeoutId);
        }

        // endregion

        // region style accessors

    }, {
        key: '_getTextContainerClassName',
        value: function _getTextContainerClassName() {
            return (0, _classnames2.default)(this.props.classes.textContainer, this.props.textClassName);
        }
    }, {
        key: '_getComponentContainerClassName',
        value: function _getComponentContainerClassName() {
            return (0, _classnames2.default)(this.props.classes.componentContainer, this.props.containerClassName);
        }
    }, {
        key: '_getCurrentTextStyle',
        value: function _getCurrentTextStyle() {
            var texts = this._getText();

            if ((0, _ramda.isNil)(texts)) {
                return null;
            }

            var currentTextIndex = this.state.currentTextIndex;

            var text = texts[currentTextIndex];

            if ((0, _ramda.isNil)(text)) {
                return null;
            }

            var textLength = text.length;

            return {
                width: this.state.animationStage === ANIMATION_STAGE_FORWARD_NAME ? 'auto' : '0%',

                animation: '\n            ' + this._getTypingKeyframesName() + ' ' + ANIMATION_STEP_RATIO * textLength + 's steps(' + textLength * 2 + ', end),\n            ' + CARET_BLINK_KEYFRAMES_STYLE_NAME + '_' + this._getPreparedBorderColor() + ' .75s step-end infinite'
            };
        }

        // endregion

        // region label accessors
        // endregion

        // region state accessors

    }, {
        key: '_shouldStopOnEndNow',
        value: function _shouldStopOnEndNow() {
            return !this._isInfiniteLoop() && this._isLastText() && this._isLastLoop() && this._shouldStopOnEnd();
        }
    }, {
        key: '_shouldStopOnStartNow',
        value: function _shouldStopOnStartNow() {
            return !this._isInfiniteLoop() && this._isLastText() && this._isLastLoop() && !this._shouldStopOnEnd();
        }
    }, {
        key: '_isInfiniteLoop',
        value: function _isInfiniteLoop() {
            return (0, _ramda.equals)(this._getLoopCount(), Infinity);
        }
    }, {
        key: '_isLastText',
        value: function _isLastText() {
            var textsLength = this._getTextsLength();

            if ((0, _ramda.isNil)(textsLength)) {
                return true;
            }

            return (0, _ramda.gte)(this.state.currentTextIndex + 1, textsLength);
        }
    }, {
        key: '_isLastLoop',
        value: function _isLastLoop() {
            return (0, _ramda.gte)(this.state.currentLoopIndex + 1, this._getLoopCount());
        }
    }, {
        key: '_getCurrentText',
        value: function _getCurrentText() {
            var texts = this._getText();

            if ((0, _ramda.isNil)(texts)) {
                return null;
            }

            var currentTextIndex = this.state.currentTextIndex;


            if ((0, _ramda.gte)(currentTextIndex, (0, _ramda.length)(texts))) {
                return null;
            }

            return texts[currentTextIndex];
        }
    }, {
        key: '_getTypingKeyframesName',
        value: function _getTypingKeyframesName() {
            return this.state.animationStage === ANIMATION_STAGE_FORWARD_NAME ? TYPING_FORWARD_KEYFRAMES_STYLE_NAME : TYPING_BACKWARD_KEYFRAMES_STYLE_NAME;
        }

        // endregion

        // region prop accessors

    }, {
        key: '_getPreparedBorderColor',
        value: function _getPreparedBorderColor() {
            return this._getBorderColor().replace('#', '');
        }
    }, {
        key: '_getBorderColor',
        value: function _getBorderColor() {
            return this.props.theme.baseStyles.accentColorPrimary;
        }
    }, {
        key: '_getContainerStyle',
        value: function _getContainerStyle() {
            return (0, _ramda.defaultTo)(TypewriterVisualEffectClass.defaultProps.containerStyle)(this.props.containerStyle);
        }
    }, {
        key: '_getTextsLength',
        value: function _getTextsLength() {
            return (0, _ramda.ifElse)(_ramda.isNil, (0, _ramda.always)(null), _ramda.length)(this._getText());
        }
    }, {
        key: '_getText',
        value: function _getText() {
            var text = this.props.text;


            if ((0, _ramda.isNil)(text)) {
                return null;
            }

            return (0, _ramda.unless)((0, _ramda.is)(Array), function (text) {
                return [text];
            })(text);
        }
    }, {
        key: '_getAnimationDelay',
        value: function _getAnimationDelay() {
            return (0, _ramda.defaultTo)(TypewriterVisualEffectClass.defaultProps.animationDelay)(this.props.animationDelay);
        }
    }, {
        key: '_shouldStopOnEnd',
        value: function _shouldStopOnEnd() {
            return (0, _ramda.defaultTo)(TypewriterVisualEffectClass.defaultProps.stopOnEnd)(this.props.stopOnEnd);
        }
    }, {
        key: '_getLoopCount',
        value: function _getLoopCount() {
            return (0, _ramda.defaultTo)(TypewriterVisualEffectClass.defaultProps.loopCount)(this.props.loopCount);
        }
    }, {
        key: '_getLevel',
        value: function _getLevel() {
            return (0, _ramda.defaultTo)(TypewriterVisualEffectClass.defaultProps.level)(this.props.level);
        }

        // endregion

        // region handlers

    }, {
        key: '_onAnimationEnd',
        value: function _onAnimationEnd() {
            var _state = this.state,
                animationStage = _state.animationStage,
                currentLoopIndex = _state.currentLoopIndex;


            if (animationStage === ANIMATION_STAGE_FORWARD_NAME) {
                if (this._shouldStopOnStartNow()) {
                    return;
                }

                return this._updateAnimationState(ANIMATION_STATE_BACKWARD_NAME);
            } else {
                if (this._shouldStopOnEndNow()) {
                    return;
                }

                var textsLength = this._getTextsLength();
                var _loopCount = this._getLoopCount();

                var nextTextIndex = this.state.currentTextIndex + 1;
                var nextLoopIndex = currentLoopIndex + 1;

                if ((0, _ramda.isNil)(textsLength)) {
                    return;
                }

                if ((0, _ramda.gte)(nextTextIndex, textsLength)) {
                    if ((0, _ramda.equals)(_loopCount, Infinity)) {
                        return this._updateAnimationState(ANIMATION_STAGE_FORWARD_NAME, 0, Infinity);
                    }

                    if ((0, _ramda.gte)(nextLoopIndex, _loopCount)) {
                        return;
                    } else {
                        return this._updateAnimationState(ANIMATION_STAGE_FORWARD_NAME, 0, nextLoopIndex);
                    }
                }

                return this._updateAnimationState(ANIMATION_STAGE_FORWARD_NAME, nextTextIndex);
            }
        }

        // endregion

        // region render methods

    }, {
        key: '_renderInlineHeader',
        value: function _renderInlineHeader() {
            return React.createElement(
                _inline_header.InlineHeader,
                {
                    className: this._getTextContainerClassName(),
                    style: this._getCurrentTextStyle(),
                    level: this._getLevel()
                },
                this._getCurrentText()
            );
        }
    }, {
        key: '_renderComponentContainer',
        value: function _renderComponentContainer() {
            return React.createElement(
                'div',
                {
                    className: this._getComponentContainerClassName(),
                    style: this._getContainerStyle(),
                    onAnimationEnd: this._onAnimationEnd
                },
                this._renderInlineHeader()
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return (0, _ramda.ifElse)((0, _ramda.equals)(false), (0, _ramda.always)(null), (0, _ramda.bind)(this._renderComponentContainer, this))(this._canRenderLoopIteration());
        }

        // endregion

    }]);

    return TypewriterVisualEffectClass;
}(React.Component), _class2.displayName = 'TypewriterVisualEffect', _class2.defaultProps = {
    text: null,
    level: 5,
    loopCount: 0,
    stopOnEnd: false,
    animationDelay: 1500, // ms

    containerStyle: {}
}, _class2.defaultState = {
    currentTextIndex: 0,
    currentLoopIndex: 0,
    animationStage: ANIMATION_STAGE_FORWARD_NAME
}, _temp)) || _class);

// exports

function TypewriterVisualEffect(props) {
    return React.createElement(
        _main_theme_provider.MainThemeContext.Consumer,
        null,
        function (windowDimensions) {
            return React.createElement(TypewriterVisualEffectClass, _extends({}, props, windowDimensions));
        }
    );
}

TypewriterVisualEffect.displayName = 'TypewriterVisualEffect';