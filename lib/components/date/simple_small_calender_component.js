'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SimpleSmallCalendarComponent = exports.SimpleSmallCalendarComponentClass = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _grid = require('./../grid');

var _layout = require('./../layout');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// local imports


// styles definition


// type definitions
var styles = function styles(theme) {
    return {};
};

/**
 * Simple small calendar component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation

var SimpleSmallCalendarComponentClass = exports.SimpleSmallCalendarComponentClass = function (_React$Component) {
    _inherits(SimpleSmallCalendarComponentClass, _React$Component);

    function SimpleSmallCalendarComponentClass() {
        _classCallCheck(this, SimpleSmallCalendarComponentClass);

        return _possibleConstructorReturn(this, (SimpleSmallCalendarComponentClass.__proto__ || Object.getPrototypeOf(SimpleSmallCalendarComponentClass)).apply(this, arguments));
    }

    _createClass(SimpleSmallCalendarComponentClass, [{
        key: '_renderCardHeader',

        // region render methods
        value: function _renderCardHeader() {
            return React.createElement(
                _layout.RegularCardHeaderComponent,
                null,
                '2017 Fri, Jul 28'
            );
        }
    }, {
        key: '_renderCard',
        value: function _renderCard() {
            return React.createElement(_layout.RegularCardComponent, { header: this._renderCardHeader() });
        }
    }, {
        key: 'render',
        value: function render() {
            return this._renderCard();
        }

        // endregion

    }]);

    return SimpleSmallCalendarComponentClass;
}(React.Component);

// exports


var SimpleSmallCalendarComponent = exports.SimpleSmallCalendarComponent = (0, _reactJss2.default)(styles)(SimpleSmallCalendarComponentClass);