'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MainThemeProvider = exports.MainThemeContext = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _ramda = require('ramda');

var _lodash = require('lodash.debounce');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// provider implementation


// local imports

// type definitions
var MainThemeContext = exports.MainThemeContext = React.createContext();

var MainThemeProvider = exports.MainThemeProvider = function (_React$Component) {
    _inherits(MainThemeProvider, _React$Component);

    // endregion

    // region constructor
    function MainThemeProvider(props) {
        _classCallCheck(this, MainThemeProvider);

        var _this = _possibleConstructorReturn(this, (MainThemeProvider.__proto__ || Object.getPrototypeOf(MainThemeProvider)).call(this, props));

        _this._onWindowResizeBound = null;


        _this.state = {
            windowDimensions: {
                outerHeight: null,
                outerWidth: null,

                innerWidth: null,
                innerHeight: null
            }
        };

        _this._onWindowResizeBound = (0, _lodash2.default)((0, _ramda.bind)(_this._onWindowResize, _this), 150);
        return _this;
    }

    // endregion

    // region business logic

    // region static props
    // endregion


    // region private props


    _createClass(MainThemeProvider, [{
        key: '_saveWindowDimensions',
        value: function _saveWindowDimensions() {
            var _window = window,
                outerHeight = _window.outerHeight,
                outerWidth = _window.outerWidth,
                innerWidth = _window.innerWidth,
                innerHeight = _window.innerHeight;


            this.setState({
                windowDimensions: { outerHeight: outerHeight, outerWidth: outerWidth, innerWidth: innerWidth, innerHeight: innerHeight }
            });
        }

        // endregion

        // region lifecycle methods

    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            window.addEventListener('resize', this._onWindowResizeBound);
            this._saveWindowDimensions();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.removeEventListener('resize', this._onWindowResizeBound);
        }

        // endregion

        // region style accessors
        // endregion

        // region label accessors
        // endregion

        // region state accessors
        // endregion

        // region prop accessors
        // endregion

        // region handlers

    }, {
        key: '_onWindowResize',
        value: function _onWindowResize() {
            this._saveWindowDimensions();
        }

        // endregion

        // region render methods

    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                MainThemeContext.Provider,
                { value: this.state },
                this.props.children
            );
        }

        // endregion

    }]);

    return MainThemeProvider;
}(React.Component);

// exports