'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SlideVisualEffectClass = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

// local imports

exports.SlideVisualEffect = SlideVisualEffect;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ramda = require('ramda');

var _main_theme_provider = require('../../theming/providers/main_theme_provider');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// styles definition


// type definitions
var styles = function styles(theme) {
    return {
        componentContainer: {
            boxSizing: 'border-box',
            position: 'absolute',

            padding: theme.layoutStyles.topSpacing + 'px \n                      ' + theme.layoutStyles.rightSpacing + 'px \n                      ' + theme.layoutStyles.bottomSpacing + 'px \n                      ' + theme.layoutStyles.bottomSpacing + 'px\n        ',

            transitionDelay: '0s',
            transitionProperty: 'top',
            transitionTimingFunction: 'ease-in-out',

            zIndex: '2',

            backgroundColor: theme.baseStyles.mainSecondaryColor
        }
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
var SlideVisualEffectClass = exports.SlideVisualEffectClass = (_dec = (0, _reactJss2.default)(styles), _dec(_class = (_temp = _class2 = function (_React$Component) {
    _inherits(SlideVisualEffectClass, _React$Component);

    // endregion

    // region constructor


    // endregion

    // region private props

    // region static props
    function SlideVisualEffectClass(props) {
        _classCallCheck(this, SlideVisualEffectClass);

        var _this = _possibleConstructorReturn(this, (SlideVisualEffectClass.__proto__ || Object.getPrototypeOf(SlideVisualEffectClass)).call(this, props));

        _this.$componentContainer = React.createRef();
        return _this;
    }

    // endregion

    // region business logic
    // endregion

    // region lifecycle methods
    // endregion

    // region style accessors


    _createClass(SlideVisualEffectClass, [{
        key: '_getComponentContainerLeftToRightStyle',
        value: function _getComponentContainerLeftToRightStyle() {
            var shouldShow = this._shouldShow();
            var duration = this._getDuration();

            var style = this._getStyle();

            // +1 - accounting  fault
            var componentWidth = this._getComponentContainerWidth() + 1;
            var transitionStyle = {
                transitionProperty: 'left',
                transitionDuration: duration
            };

            var componentStyle = {
                top: '0px',
                left: shouldShow ? '0%' : 'calc(0% - ' + componentWidth + 'px)',

                width: 'auto',
                height: '100%'
            };

            return Object.assign({}, componentStyle, transitionStyle, style);
        }
    }, {
        key: '_getComponentContainerRightToLeftStyle',
        value: function _getComponentContainerRightToLeftStyle() {
            var shouldShow = this._shouldShow();
            var duration = this._getDuration();

            var style = this._getStyle();

            var componentWidth = this._getComponentContainerWidth();
            var transitionStyle = {
                transitionProperty: 'left',
                transitionDuration: duration
            };

            var componentStyle = {
                top: '0px',
                left: shouldShow ? 'calc(100% - ' + componentWidth + 'px)' : '100%',

                width: 'auto',
                height: '100%'
            };

            return Object.assign({}, componentStyle, transitionStyle, style);
        }
    }, {
        key: '_getComponentContainerBottomToTopStyle',
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
                top: shouldShow ? 'calc(100% - ' + componentHeight + 'px)' : '100%',
                left: '0px',

                width: '100%',
                height: 'auto'
            };

            return Object.assign({}, componentStyle, transitionStyle, style);
        }
    }, {
        key: '_getComponentContainerTopToBottomStyle',
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
                top: shouldShow ? '0%' : 'calc(0% - ' + componentHeight + 'px)',
                left: '0px',

                width: '100%',
                height: 'auto'
            };

            return Object.assign({}, componentStyle, transitionStyle, style);
        }
    }, {
        key: '_getComponentContainerStyle',
        value: function _getComponentContainerStyle() {
            switch (this._getDirection()) {
                case 'LeftToRight':
                    return this._getComponentContainerLeftToRightStyle();

                case 'RightToLeft':
                    return this._getComponentContainerRightToLeftStyle();

                case 'BottomToTop':
                    return this._getComponentContainerBottomToTopStyle();

                case 'TopToBottom':
                    return this._getComponentContainerTopToBottomStyle();

                default:
                    return this._getComponentContainerBottomToTopStyle();
            }
        }
    }, {
        key: '_getComponentContainerClassName',
        value: function _getComponentContainerClassName() {
            return (0, _classnames2.default)(this.props.classes.componentContainer, this.props.className);
        }

        // endregion

        // region label accessors
        // endregion

        // region state accessors
        // endregion

        // region prop accessors

    }, {
        key: '_shouldShow',
        value: function _shouldShow() {
            return (0, _ramda.defaultTo)(SlideVisualEffectClass.defaultProps.show)(this.props.show);
        }
    }, {
        key: '_getDirection',
        value: function _getDirection() {
            return (0, _ramda.defaultTo)(SlideVisualEffectClass.defaultProps.direction)(this.props.direction);
        }
    }, {
        key: '_getDuration',
        value: function _getDuration() {
            return (0, _ramda.defaultTo)(SlideVisualEffectClass.defaultProps.duration)(this.props.duration);
        }
    }, {
        key: '_getStyle',
        value: function _getStyle() {
            return (0, _ramda.defaultTo)(SlideVisualEffectClass.defaultProps.style)(this.props.style);
        }
    }, {
        key: '_getComponentContainerHeight',
        value: function _getComponentContainerHeight() {
            if ((0, _ramda.isNil)(this.$componentContainer) || (0, _ramda.isNil)(this.$componentContainer.current)) {
                return 0;
            }

            return this.$componentContainer.current.clientHeight;
        }
    }, {
        key: '_getComponentContainerWidth',
        value: function _getComponentContainerWidth() {
            if ((0, _ramda.isNil)(this.$componentContainer) || (0, _ramda.isNil)(this.$componentContainer.current)) {
                return 0;
            }

            return this.$componentContainer.current.clientWidth;
        }

        // endregion

        // region handlers
        // endregion

        // region render methods

    }, {
        key: '_renderComponentContainer',
        value: function _renderComponentContainer() {
            return React.createElement(
                'div',
                {
                    ref: this.$componentContainer,
                    className: this._getComponentContainerClassName(),
                    style: this._getComponentContainerStyle()
                },
                this.props.children
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return this._renderComponentContainer();
        }
        // endregion

    }]);

    return SlideVisualEffectClass;
}(React.Component), _class2.displayName = 'SlideVisualEffectClass', _class2.defaultProps = {
    direction: 'BottomToTop',
    show: false,
    duration: '0.7s',

    style: {}
}, _temp)) || _class);

// exports

function SlideVisualEffect(props) {
    return React.createElement(
        _main_theme_provider.MainThemeContext.Consumer,
        null,
        function (windowDimensions) {
            return React.createElement(SlideVisualEffectClass, _extends({}, props, windowDimensions));
        }
    );
}

SlideVisualEffect.displayName = 'SlideVisualEffect';