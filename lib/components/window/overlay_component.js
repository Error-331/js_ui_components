'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OverlayClass = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

// local imports


exports.OverlayComponent = OverlayComponent;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ramda = require('ramda');

var _design_components = require('@webfuturistics/design_components');

var _main_theme_provider = require('./../../theming/providers/main_theme_provider');

var _modal_component = require('./modal_component');

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

                position: 'absolute',

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
var OverlayClass = exports.OverlayClass = (_dec = (0, _reactJss2.default)(styles), _dec(_class = (_temp = _class2 = function (_React$Component) {
    _inherits(OverlayClass, _React$Component);

    // endregion

    // region constructor
    function OverlayClass(props) {
        _classCallCheck(this, OverlayClass);

        var _this = _possibleConstructorReturn(this, (OverlayClass.__proto__ || Object.getPrototypeOf(OverlayClass)).call(this, props));

        var self = _this;

        self._onOverlayClick = self._onOverlayClick.bind(_this);

        _this.state = {
            zIndex: _this.props.theme.styleValuesRegister.zIndex
        };
        return _this;
    }

    // endregion

    // region lifecycle methods

    // region static props


    _createClass(OverlayClass, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.props.theme.styleValuesRegister.releaseZIndex(this.state.zIndex);
        }

        // endregion

        // region style accessors

    }, {
        key: '_getOverlayContainerStyle',
        value: function _getOverlayContainerStyle() {
            return Object.assign({}, { zIndex: this.state.zIndex }, this._getOverlayContainerStyleProp());
        }
    }, {
        key: '_getChildrenContainerClasses',
        value: function _getChildrenContainerClasses() {
            return this.props.classes.childrenContainer;
        }
    }, {
        key: '_getSemiTransparentBackgroundContainerClasses',
        value: function _getSemiTransparentBackgroundContainerClasses() {
            return this.props.classes.semiTransparentBackgroundContainer;
        }
    }, {
        key: '_getOverlayContainerClasses',
        value: function _getOverlayContainerClasses() {
            var _props = this.props,
                children = _props.children,
                containerClassName = _props.containerClassName,
                classes = _props.classes;
            var componentContainer = classes.componentContainer;


            var isChildrenEmpty = (0, _ramda.isNil)(children);

            return (0, _classnames2.default)(componentContainer, {
                'c-overlay-component-hidden': isChildrenEmpty
            }, containerClassName);
        }

        // endregion

        // region label accessors
        // endregion

        // region state accessors
        // endregion

        // region prop accessors

    }, {
        key: '_getOverlayContainerStyleProp',
        value: function _getOverlayContainerStyleProp() {
            return (0, _ramda.defaultTo)({})(this.props.containerStyle);
        }
    }, {
        key: '_getOpacity',
        value: function _getOpacity() {
            var _props2 = this.props,
                opacity = _props2.opacity,
                theme = _props2.theme;

            return (0, _ramda.defaultTo)(theme.windowStyles.overlayOpacity)(opacity);
        }
    }, {
        key: '_shouldShow',
        value: function _shouldShow() {
            var show = this.props.show;

            return (0, _ramda.defaultTo)(_modal_component.ModalClass.defaultProps.show)(show);
        }

        // endregion

        // region handlers

    }, {
        key: '_onOverlayClick',
        value: function _onOverlayClick(event) {
            var targetDOMElement = event.target;
            var _props3 = this.props,
                classes = _props3.classes,
                onOverlayClick = _props3.onOverlayClick;
            var childrenContainer = classes.childrenContainer;


            if ((0, _ramda.is)(Function, onOverlayClick) && (0, _design_components.isNotNil)(targetDOMElement) && targetDOMElement instanceof HTMLDivElement && targetDOMElement.classList.contains(childrenContainer)) {
                onOverlayClick(event);
            }
        }

        // endregion

        // region render methods

    }, {
        key: '_renderChildrenContainer',
        value: function _renderChildrenContainer() {
            return React.createElement(
                'div',
                { className: this._getChildrenContainerClasses() },
                this.props.children
            );
        }
    }, {
        key: '_renderSemiTransparentBackgroundContainer',
        value: function _renderSemiTransparentBackgroundContainer() {
            var styles = { opacity: this._getOpacity() };

            return React.createElement('div', { className: this._getSemiTransparentBackgroundContainerClasses(), style: styles });
        }
    }, {
        key: '_renderOverlayContainer',
        value: function _renderOverlayContainer() {
            return React.createElement(
                'div',
                {
                    onClick: this._onOverlayClick,
                    className: this._getOverlayContainerClasses(),
                    style: this._getOverlayContainerStyle()
                },
                this._renderSemiTransparentBackgroundContainer(),
                this._renderChildrenContainer()
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return this._shouldShow() ? this._renderOverlayContainer() : null;
        }

        // endregion

    }]);

    return OverlayClass;
}(React.Component), _class2.displayName = 'OverlayClass', _temp)) || _class);

// exports

function OverlayComponent(props) {
    return React.createElement(
        _main_theme_provider.MainThemeContext.Consumer,
        null,
        function (windowDimensions) {
            return React.createElement(OverlayClass, _extends({}, props, windowDimensions));
        }
    );
}

OverlayComponent.displayName = 'OverlayComponent';