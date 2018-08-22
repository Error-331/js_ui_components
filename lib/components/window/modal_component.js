'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ModalComponent = exports.ModalComponentClass = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

// local imports


var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _ramda = require('ramda');

var _global_overlay_component = require('./global_overlay_component');

var _regular_card_component = require('./../layout/structure/regular_card_component');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// styles definition


// type definitions
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
var ModalComponentClass = exports.ModalComponentClass = (_temp = _class = function (_React$Component) {
    _inherits(ModalComponentClass, _React$Component);

    function ModalComponentClass() {
        _classCallCheck(this, ModalComponentClass);

        return _possibleConstructorReturn(this, (ModalComponentClass.__proto__ || Object.getPrototypeOf(ModalComponentClass)).apply(this, arguments));
    }

    _createClass(ModalComponentClass, [{
        key: '_getBodyOuterStyles',


        // endregion

        // region constructor
        // endregion

        // region lifecycle methods
        // endregion

        // region style accessors
        value: function _getBodyOuterStyles() {
            var userStyles = (0, _ramda.defaultTo)({})(this.props.bodyOuterStyles);
            return (0, _ramda.merge)(defaultBodyOuterStyles, userStyles);
        }
        // region static props

    }, {
        key: '_getBodyInnerStyles',
        value: function _getBodyInnerStyles() {
            var userStyles = (0, _ramda.defaultTo)({})(this.props.bodyInnerStyles);
            return (0, _ramda.merge)(defaultBodyInnerStyles, userStyles);
        }

        // endregion

        // region label accessors
        // endregion

        // region state accessors
        // endregion

        // region prop accessors
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
            var _props = this.props,
                children = _props.children,
                header = _props.header;


            return React.createElement(
                _regular_card_component.RegularCardComponent,
                {
                    header: header,
                    containerStyles: this._getBodyOuterStyles(),
                    bodyStyles: this._getBodyInnerStyles()
                },
                children,
                this._renderFooter()
            );
        }
    }, {
        key: '_renderOverlayComponent',
        value: function _renderOverlayComponent() {
            var _props2 = this.props,
                show = _props2.show,
                overlayOpacity = _props2.overlayOpacity;


            return React.createElement(
                _global_overlay_component.GlobalOverlayComponent,
                { show: show, opacity: overlayOpacity },
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

    return ModalComponentClass;
}(React.Component), _class.displayName = 'ModalComponent', _temp);

// exports

var ModalComponent = exports.ModalComponent = (0, _reactJss2.default)(styles)(ModalComponentClass);