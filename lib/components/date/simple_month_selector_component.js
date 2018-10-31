'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SimpleMonthSelectorComponent = exports.SimpleMonthSelectorComponentClass = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

// local imports


var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ramda = require('ramda');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _grid = require('./../grid');

var _inline_text_block = require('./../layout/text/inline_text_block');

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
            '& $selectionButton': {
                padding: '0 3px 0 3px',

                fontSize: theme.dateStyles.regularFontSize + 'px',
                cursor: 'pointer'
            },

            '& $selectedDateContainer': {
                fontSize: theme.dateStyles.regularFontSize + 'px'
            }
        },

        selectionButton: {},
        selectedDateContainer: {}
    };
};

/**
 * Simple month selector component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
var SimpleMonthSelectorComponentClass = exports.SimpleMonthSelectorComponentClass = (_temp = _class = function (_React$Component) {
    _inherits(SimpleMonthSelectorComponentClass, _React$Component);

    // endregion

    // region constructor

    // region static props
    function SimpleMonthSelectorComponentClass(props) {
        _classCallCheck(this, SimpleMonthSelectorComponentClass);

        var _this = _possibleConstructorReturn(this, (SimpleMonthSelectorComponentClass.__proto__ || Object.getPrototypeOf(SimpleMonthSelectorComponentClass)).call(this, props));

        var self = _this;

        self._onBackButtonClick = self._onBackButtonClick.bind(_this);
        self._onForwardButtonClick = self._onForwardButtonClick.bind(_this);

        var initialDate = props.initialDate;


        _this.state = {
            date: (0, _ramda.isNil)(initialDate) ? _this._getDateOrDefault() : _this._getDateOrDefault(initialDate)
        };
        return _this;
    }

    // endregion

    // region general logic methods
    // TODO: to generic functions


    _createClass(SimpleMonthSelectorComponentClass, [{
        key: '_normalizeDate',
        value: function _normalizeDate(usrDate) {
            return usrDate.clone().hour(0).minute(0).second(0).millisecond(0);
        }
    }, {
        key: '_getDateOrDefault',
        value: function _getDateOrDefault(usrDate) {
            var currentDate = (0, _ramda.defaultTo)((0, _moment2.default)())((0, _moment2.default)(usrDate));
            return this._normalizeDate(currentDate);
        }

        // endregion

        // region lifecycle methods

    }, {
        key: '_onBackButtonClick',
        value: function _onBackButtonClick() {
            var currentDate = this._getDate();
            var currentMonth = currentDate.month();
            var newDate = (0, _moment2.default)(currentDate).month(currentMonth - 1);

            this.setState({
                date: newDate
            });

            this._getDateChangeHander()(newDate);
        }
    }, {
        key: '_onForwardButtonClick',
        value: function _onForwardButtonClick() {
            var currentDate = this._getDate();
            var currentMonth = currentDate.month();
            var newDate = (0, _moment2.default)(currentDate).month(currentMonth + 1);

            this.setState({
                date: newDate
            });

            this._getDateChangeHander()(newDate);
        }

        // endregion

        // region style accessors

    }, {
        key: '_getButtonClasses',
        value: function _getButtonClasses() {
            return (0, _classnames2.default)('fas', this.props.classes.selectionButton);
        }
    }, {
        key: '_getBackButtonClasses',
        value: function _getBackButtonClasses() {
            return (0, _classnames2.default)('fa-angle-left', this._getButtonClasses());
        }
    }, {
        key: '_getForwardButtonClasses',
        value: function _getForwardButtonClasses() {
            return (0, _classnames2.default)('fa-angle-right', this._getButtonClasses());
        }
    }, {
        key: '_getSelectedDateClasses',
        value: function _getSelectedDateClasses() {
            return this.props.classes.selectedDateContainer;
        }

        // endregion

        // region label accessors
        // endregion

        // region state accessors

    }, {
        key: '_getDate',
        value: function _getDate() {
            return this.state.date;
        }
    }, {
        key: '_getFormattedDate',
        value: function _getFormattedDate() {
            var date = this._getDate();
            return date.format('MMMM Y');
        }

        // endregion

        // region prop accessors

    }, {
        key: '_getDateChangeHander',
        value: function _getDateChangeHander() {
            return (0, _ramda.defaultTo)(SimpleMonthSelectorComponentClass.defaultProps.onDateChange)(this.props.onDateChange);
        }

        // endregion

        // region handlers
        // endregion

        // region render methods

    }, {
        key: '_renderBackButton',
        value: function _renderBackButton() {
            return React.createElement('i', { onClick: this._onBackButtonClick, className: this._getBackButtonClasses() });
        }
    }, {
        key: '_renderForwardButton',
        value: function _renderForwardButton() {
            return React.createElement('i', { onClick: this._onForwardButtonClick, className: this._getForwardButtonClasses() });
        }
    }, {
        key: '_renderSelectedDate',
        value: function _renderSelectedDate() {
            return React.createElement(
                _inline_text_block.InlineTextBlock,
                { className: this._getSelectedDateClasses() },
                this._getFormattedDate()
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                _grid.SimpleFlexGridContainer,
                { className: this.props.classes.componentContainer },
                React.createElement(
                    _grid.SimpleFlexGridRow,
                    { xAlign: 'space-between', yAlign: 'center' },
                    React.createElement(
                        _grid.SimpleFlexGridColumn,
                        null,
                        this._renderBackButton()
                    ),
                    React.createElement(
                        _grid.SimpleFlexGridColumn,
                        null,
                        this._renderSelectedDate()
                    ),
                    React.createElement(
                        _grid.SimpleFlexGridColumn,
                        null,
                        this._renderForwardButton()
                    )
                )
            );
        }

        // endregion

    }]);

    return SimpleMonthSelectorComponentClass;
}(React.Component), _class.displayName = 'SimpleMonthSelectorComponent', _class.defaultProps = {
    initialDate: (0, _moment2.default)(),
    onDateChange: function onDateChange() {}
}, _temp);

// exports

var SimpleMonthSelectorComponent = exports.SimpleMonthSelectorComponent = (0, _reactJss2.default)(styles)(SimpleMonthSelectorComponentClass);