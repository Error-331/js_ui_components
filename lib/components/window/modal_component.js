'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ModalClass = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

// local imports


exports.ModalComponent = ModalComponent;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _ramda = require('ramda');

var _main_theme_provider = require('./../../theming/providers/main_theme_provider');

var _global_overlay_component = require('./global_overlay_component');

var _regular_card_component = require('./../layout/structure/regular_card_component');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// type definitions
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
var ModalClass = exports.ModalClass = (_dec = (0, _reactJss2.default)(styles), _dec(_class = (_temp = _class2 = function (_React$Component) {
    _inherits(ModalClass, _React$Component);

    function ModalClass() {
        _classCallCheck(this, ModalClass);

        return _possibleConstructorReturn(this, (ModalClass.__proto__ || Object.getPrototypeOf(ModalClass)).apply(this, arguments));
    }

    _createClass(ModalClass, [{
        key: '_getBodyOuterStyles',


        // endregion

        // region constructor
        // endregion

        // region lifecycle methods
        // endregion

        // region style accessors

        // region static props
        value: function _getBodyOuterStyles() {
            var userStyles = (0, _ramda.defaultTo)({})(this.props.bodyOuterStyles);
            return (0, _ramda.merge)(defaultBodyOuterStyles, userStyles);
        }
    }, {
        key: '_getBodyInnerStyle',
        value: function _getBodyInnerStyle() {
            var userStyles = (0, _ramda.defaultTo)({})(this.props.bodyInnerStyles);
            return (0, _ramda.merge)(defaultBodyInnerStyles, userStyles);
        }

        // endregion

        // region label accessors
        // endregion

        // region state accessors
        // endregion

        // region prop accessors

    }, {
        key: '_getOverlayOpacity',
        value: function _getOverlayOpacity() {
            var _props = this.props,
                overlayOpacity = _props.overlayOpacity,
                theme = _props.theme;

            return (0, _ramda.defaultTo)(theme.windowStyles.overlayOpacity)(overlayOpacity);
        }
    }, {
        key: '_shouldShow',
        value: function _shouldShow() {
            var show = this.props.show;

            return (0, _ramda.defaultTo)(ModalClass.defaultProps.show)(show);
        }
    }, {
        key: '_getOverlayClickHandler',
        value: function _getOverlayClickHandler() {
            return (0, _ramda.defaultTo)(ModalClass.defaultProps.onOverlayClick)(this.props.onOverlayClick);
        }

        // endregion

        // region handlers
        // endregion

        // region render methods

    }, {
        key: '_renderFooter',
        value: function _renderFooter() {
            return this.props.footer;
        }
    }, {
        key: '_renderBody',
        value: function _renderBody() {
            var _props2 = this.props,
                children = _props2.children,
                header = _props2.header;


            return React.createElement(
                _regular_card_component.RegularCardComponent,
                {
                    header: header,
                    containerStyle: this._getBodyOuterStyles(),
                    bodyStyle: this._getBodyInnerStyle()
                },
                children,
                this._renderFooter()
            );
        }
    }, {
        key: '_renderOverlayComponent',
        value: function _renderOverlayComponent() {
            return React.createElement(
                _global_overlay_component.GlobalOverlayComponent,
                {
                    show: this._shouldShow(),
                    opacity: this._getOverlayOpacity(),
                    onOverlayClick: this._getOverlayClickHandler()
                },
                this._renderBody()
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return this._renderOverlayComponent();
        }

        // endregion

    }]);

    return ModalClass;
}(React.Component), _class2.displayName = 'ModalClass', _class2.defaultProps = {
    show: false,
    onOverlayClick: function onOverlayClick() {}
}, _temp)) || _class);

// exports

function ModalComponent(props) {
    return React.createElement(
        _main_theme_provider.MainThemeContext.Consumer,
        null,
        function (windowDimensions) {
            return React.createElement(ModalClass, _extends({}, props, windowDimensions));
        }
    );
}

ModalComponent.displayName = 'ModalComponent';