'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CollapsibleComponent = exports.CollapsibleComponentClass = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ramda = require('ramda');

var _design_components = require('@webfuturistics/design_components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// styles definition


// local imports

// type definitions
var styles = function styles(theme) {
    return {
        componentOuterContainer: {
            boxSizing: 'border-box',
            overflow: 'hidden',

            transitionProperty: 'height',
            transitionDuration: '0.2s',
            transitionTimingFunction: 'ease-out',

            '& > $componentInnerContainer': {}
        },

        componentInnerContainer: {}
    };
};

/**
 * Simple utility component used to show/hide content in accordion like way.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation

var CollapsibleComponentClass = exports.CollapsibleComponentClass = function (_React$Component) {
    _inherits(CollapsibleComponentClass, _React$Component);

    _createClass(CollapsibleComponentClass, [{
        key: '_onAccordionTransitionEnd',
        value: function _onAccordionTransitionEnd() {
            var newState = { animationStage: this.state.animationStage, outerContainerStyles: {} };

            if ((0, _ramda.pathSatisfies)(function (stage) {
                return stage === 'open';
            }, ['state', 'animationStage'], this)) {
                newState.outerContainerStyles = this._createOuterContainerStylesObj(true, 'auto', 'none');
            } else {
                newState.outerContainerStyles = this._createOuterContainerStylesObj(false);
            }

            this.setState(newState);
        }
    }, {
        key: '_onSetStateAfterTimeout',
        value: function _onSetStateAfterTimeout() {
            this._animationTimeoutId = null;
        }
    }, {
        key: '_createOuterContainerStylesObj',
        value: function _createOuterContainerStylesObj(shown, newHeight) {
            var newTransitionProperty = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'height';

            var state = this.state || {};
            var outerContainerStyles = (0, _design_components.isNotNil)(state.outerContainerStyles) ? state.outerContainerStyles : {};

            var display = (0, _ramda.defaultTo)(outerContainerStyles.display)((0, _design_components.isNotNil)(shown) ? shown ? 'block' : 'none' : undefined);
            var visibility = (0, _ramda.defaultTo)(outerContainerStyles.visibility)((0, _design_components.isNotNil)(shown) ? shown ? 'visible' : 'hidden' : undefined);

            var height = (0, _ramda.defaultTo)(outerContainerStyles.height)(newHeight);
            var transitionProperty = (0, _ramda.defaultTo)(outerContainerStyles.transitionProperty)(newTransitionProperty);

            var styleObject = { height: height, transitionProperty: transitionProperty };

            (0, _ramda.cond)([[(0, _ramda.equals)(false), function () {
                return styleObject.display = display;
            }], [(0, _ramda.equals)(true), function () {
                return styleObject.visibility = visibility;
            }]])(this.props.useVisibility);

            return styleObject;
        }
    }, {
        key: '_preOpenOuterContainer',
        value: function _preOpenOuterContainer() {
            var setStateCallback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (_) {
                return _;
            };

            this.setState({
                animationStage: 'preOpen',
                outerContainerStyles: this._createOuterContainerStylesObj(true, '0px')
            }, setStateCallback);
        }
    }, {
        key: '_preCloseOuterContainer',
        value: function _preCloseOuterContainer() {
            var setStateCallback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (_) {
                return _;
            };

            this.setState({
                animationStage: 'preClose',
                outerContainerStyles: this._createOuterContainerStylesObj(true, this._getInnerContainerHeightString())
            }, setStateCallback);
        }
    }, {
        key: '_openOuterContainer',
        value: function _openOuterContainer(setStateCallback) {
            this.setState({
                animationStage: 'open',
                outerContainerStyles: this._createOuterContainerStylesObj(true, this._getInnerContainerHeightString())
            }, setStateCallback);
        }
    }, {
        key: '_closeOuterContainer',
        value: function _closeOuterContainer(setStateCallback) {
            this.setState({
                animationStage: 'close',
                outerContainerStyles: this._createOuterContainerStylesObj(true, '0px')
            }, setStateCallback);
        }
    }, {
        key: '_getInnerContainerHeightString',
        value: function _getInnerContainerHeightString() {
            var _innerContainer = this._innerContainer;

            return (0, _ramda.isNil)(_innerContainer) ? null : _innerContainer.offsetHeight + 'px';
        }
    }, {
        key: '_getAnimationStage',
        value: function _getAnimationStage() {
            return this.state.animationStage;
        }
    }, {
        key: '_getComponentInnerContainerClassNames',
        value: function _getComponentInnerContainerClassNames() {
            var componentInnerContainer = this.props.classes.componentInnerContainer;

            var innerContainerClassNames = this.props.innerContainerClassNames ? this.props.innerContainerClassNames : '';

            return (0, _classnames2.default)(componentInnerContainer, innerContainerClassNames);
        }
    }, {
        key: '_getComponentOuterContainerClassNames',
        value: function _getComponentOuterContainerClassNames() {
            var componentOuterContainer = this.props.classes.componentOuterContainer;

            var outerContainerClassNames = this.props.outerContainerClassNames ? this.props.outerContainerClassNames : '';

            return (0, _classnames2.default)(componentOuterContainer, outerContainerClassNames);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var _this2 = this;

            (0, _ramda.cond)([[(0, _ramda.equals)(this.props.open), (0, _ramda.always)(true)], [(0, _ramda.equals)(true), function () {
                return _this2._preOpenOuterContainer();
            }], [(0, _ramda.complement)((0, _ramda.equals)(true)), function () {
                return _this2._preCloseOuterContainer();
            }]])(nextProps.open);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            var _this3 = this;

            var animationStage = this._getAnimationStage();
            var _onSetStateAfterTimeout = this._onSetStateAfterTimeout;


            this._animationTimeoutId = (0, _ramda.cond)([[(0, _ramda.equals)('preOpen'), function () {
                return setTimeout(function () {
                    return _this3._openOuterContainer(_onSetStateAfterTimeout);
                }, 100);
            }], [(0, _ramda.equals)('preClose'), function () {
                return setTimeout(function () {
                    return _this3._closeOuterContainer(_onSetStateAfterTimeout);
                }, 100);
            }]])(animationStage);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if ((0, _design_components.isNotNil)(this._animationTimeoutId)) {
                clearTimeout(this._animationTimeoutId);
            }

            this._outerContainer ? this._outerContainer.removeEventListener('transitionend', this._onAccordionTransitionEnd, false) : null;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this._outerContainer) {
                this._outerContainer.addEventListener('transitionend', this._onAccordionTransitionEnd, false);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var isContainerNotVisible = this.state.outerContainerStyles.display !== 'block' && this.state.outerContainerStyles.visibility !== 'visible';
            var removeContentOnClose = (0, _ramda.defaultTo)(CollapsibleComponentClass.defaultProps.removeContentOnClose)(this.props.removeContentOnClose);
            var isHideChildren = isContainerNotVisible && removeContentOnClose;

            return React.createElement(
                'div',
                { ref: function ref(outerContainer) {
                        return _this4._outerContainer = outerContainer;
                    }, className: this._getComponentOuterContainerClassNames(), style: this.state.outerContainerStyles },
                React.createElement(
                    'div',
                    { ref: function ref(innerContainer) {
                            return _this4._innerContainer = innerContainer;
                        }, className: this._getComponentInnerContainerClassNames() },
                    isHideChildren ? null : this.props.children
                )
            );
        }
    }]);

    function CollapsibleComponentClass(props) {
        _classCallCheck(this, CollapsibleComponentClass);

        var _this = _possibleConstructorReturn(this, (CollapsibleComponentClass.__proto__ || Object.getPrototypeOf(CollapsibleComponentClass)).call(this, props));

        var self = _this;

        var open = _this.props.open ? _this.props.open : false;
        var isOpen = (0, _ramda.defaultTo)(false);

        var initialState = void 0;

        _this._animationTimeoutId = null;

        if (isOpen(open)) {
            initialState = {
                animationStage: 'open',
                outerContainerStyles: _this._createOuterContainerStylesObj(true, 'auto', 'height')
            };
        } else {
            initialState = {
                animationStage: 'close',
                outerContainerStyles: _this._createOuterContainerStylesObj(false, '0px', 'none')
            };
        }

        _this.state = initialState;

        self._onAccordionTransitionEnd = _this._onAccordionTransitionEnd.bind(_this);
        self._onSetStateAfterTimeout = _this._onSetStateAfterTimeout.bind(_this);
        return _this;
    }

    return CollapsibleComponentClass;
}(React.Component);

// exports


CollapsibleComponentClass.displayName = 'CollapsibleComponent';
CollapsibleComponentClass.defaultProps = {
    outerContainerClassNames: '',
    innerContainerClassNames: '',

    open: false,
    useVisibility: false,
    removeContentOnClose: true
};
var CollapsibleComponent = exports.CollapsibleComponent = (0, _reactJss2.default)(styles)(CollapsibleComponentClass);