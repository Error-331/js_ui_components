'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// local imports

// styles definition
var styles = function styles(theme) {
    return {
        componentContainer: {
            boxSizing: 'border-box',

            display: 'flex',

            flexBasis: 'auto',
            flexShrink: '1',
            flexGrow: '0',

            flexDirection: 'column',
            flexWrap: 'nowrap',

            justifyContent: 'flex-start',
            alignItems: 'stretch',
            alignContent: 'flex-start',

            '& > $componentHeaderContainer': {
                boxSizing: 'border-box',

                flexBasis: 'auto',
                flexShrink: '1',
                flexGrow: '0'
            }
        },

        componentHeaderContainer: {}
    };
};

// component implementation

var ChatComponent = function (_Component) {
    _inherits(ChatComponent, _Component);

    function ChatComponent() {
        _classCallCheck(this, ChatComponent);

        return _possibleConstructorReturn(this, (ChatComponent.__proto__ || Object.getPrototypeOf(ChatComponent)).apply(this, arguments));
    }

    _createClass(ChatComponent, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { className: this.props.classes.componentContainer });
        }
    }]);

    return ChatComponent;
}(_react.Component);

// exports


exports.default = (0, _reactJss2.default)(styles)(ChatComponent);