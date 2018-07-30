'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});

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
        componentContainer: {
            display: 'block',
            position: 'fixed',

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
                display: 'flex',

                position: 'absolute',

                top: '0px',
                left: '0px',

                width: '100%',
                height: '100%',

                flexDirection: 'column',
                flexWrap: 'wrap',

                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'flex-start'
            }
        },

        semiTransparentBackgroundContainer: {},
        childrenContainer: {}
    };
};

/**
 * Global overlay component.
 * Component is intended to be used as an overlay for different modal dialog boxes.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation

var GlobalOverlayComponent = function (_React$Component) {
    _inherits(GlobalOverlayComponent, _React$Component);

    // endregion

    // region constructor
    function GlobalOverlayComponent(props) {
        _classCallCheck(this, GlobalOverlayComponent);

        var _this = _possibleConstructorReturn(this, (GlobalOverlayComponent.__proto__ || Object.getPrototypeOf(GlobalOverlayComponent)).call(this, props));

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


    _createClass(GlobalOverlayComponent, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.props.theme.styleValuesRegister.releaseZIndex(this.state.zIndex);
        }

        // endregion

        // region style accessors

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
                classes = _props.classes;
            var componentContainer = classes.componentContainer;


            var isChildrenEmpty = (0, _ramda.isNil)(children);

            return (0, _classnames2.default)(componentContainer, {
                'c-overlay-component-hidden': isChildrenEmpty
            });
        }

        // endregion

        // region label accessors
        // endregion

        // region state accessors
        // endregion

        // region prop accessors
        // endregion

        // region handlers

    }, {
        key: '_onOverlayClick',
        value: function _onOverlayClick(event) {
            var targetDOMElement = event.target;
            var _props2 = this.props,
                classes = _props2.classes,
                onOverlayClick = _props2.onOverlayClick;
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
            var opacity = this.props.opacity;

            var styles = (0, _design_components.isNotNil)(opacity) ? { opacity: opacity } : {};

            return React.createElement('div', { className: this._getSemiTransparentBackgroundContainerClasses(), style: styles });
        }
    }, {
        key: '_renderOverlayContainer',
        value: function _renderOverlayContainer() {
            var styles = { zIndex: this.state.zIndex };

            return React.createElement(
                'div',
                { onClick: this._onOverlayClick, className: this._getOverlayContainerClasses(), style: styles },
                this._renderSemiTransparentBackgroundContainer(),
                this._renderChildrenContainer()
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var show = this.props.show;

            return (0, _ramda.defaultTo)(false)(show) ? this._renderOverlayContainer() : null;
        }

        // endregion

    }]);

    return GlobalOverlayComponent;
}(React.Component);

// exports


GlobalOverlayComponent.displayName = 'GlobalOverlayComponent';
exports.default = (0, _reactJss2.default)(styles)(GlobalOverlayComponent);