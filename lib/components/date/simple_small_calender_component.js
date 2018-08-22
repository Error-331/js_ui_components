'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SimpleSmallCalendarComponent = exports.SimpleSmallCalendarComponentClass = undefined;

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

var _layout = require('./../layout');

var _simple_month_selector_component = require('./simple_month_selector_component');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// styles definition


// type definitions
var styles = function styles(theme) {
    return {
        daysSelectionTable: {
            boxSizing: 'border-box',
            tableLayout: 'fixed',

            width: '100%',

            '& th, td': {
                overflow: 'hidden',

                width: '40px',
                height: '40px',

                border: '0px none',
                borderCollapse: 'collapse',
                padding: '10px',

                textAlign: 'center',
                color: 'red'
            },

            '& td:hover:not(.c-selected):not(:empty)': {
                cursor: 'pointer'
            },

            '& td.selected': {
                borderRadius: '50%',
                backgroundColor: 'green',

                color: 'purple'
            }
        }
    };
};

/**
 * Simple small calendar component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
var SimpleSmallCalendarComponentClass = exports.SimpleSmallCalendarComponentClass = (_temp = _class = function (_React$Component) {
    _inherits(SimpleSmallCalendarComponentClass, _React$Component);

    // endregion

    // region constructor

    // region static props
    function SimpleSmallCalendarComponentClass(props) {
        _classCallCheck(this, SimpleSmallCalendarComponentClass);

        var _this = _possibleConstructorReturn(this, (SimpleSmallCalendarComponentClass.__proto__ || Object.getPrototypeOf(SimpleSmallCalendarComponentClass)).call(this, props));

        var self = _this;

        self._onMonthSelected = self._onMonthSelected.bind(_this);

        var selectedDate = props.selectedDate;


        _this.state = {
            date: (0, _ramda.isNil)(selectedDate) ? _this._getDateOrDefault() : _this._getDateOrDefault(selectedDate)
        };
        return _this;
    }

    // endregion

    // region general logic methods
    // TODO: to generic functions


    _createClass(SimpleSmallCalendarComponentClass, [{
        key: '_normalizeDate',
        value: function _normalizeDate(usrDate) {
            return usrDate.clone().hour(0).minute(0).second(0).millisecond(0);
        }

        // TODO: to generic functions

    }, {
        key: '_getDateOrDefault',
        value: function _getDateOrDefault(usrDate) {
            var currentDate = (0, _ramda.defaultTo)((0, _moment2.default)())((0, _moment2.default)(usrDate));
            return this._normalizeDate(currentDate);
        }

        // endregion

        // region lifecycle methods

    }, {
        key: '_onMonthSelected',
        value: function _onMonthSelected(newDate) {
            this.setState({
                date: newDate
            });
        }

        // endregion

        // region style accessors
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
        key: '_getDateForMonthSelector',
        value: function _getDateForMonthSelector() {
            return (0, _moment2.default)(this._getDate()).day(1);
        }
    }, {
        key: '_getStartOfMonthOfDate',
        value: function _getStartOfMonthOfDate() {
            return this._getDate().date(1);
        }
    }, {
        key: '_getEndOfMonthOfDate',
        value: function _getEndOfMonthOfDate() {
            return this._getDate().endOf('month');
        }
    }, {
        key: '_getNumberOfDays',
        value: function _getNumberOfDays() {
            return this._getEndOfMonthOfDate().date();
        }
    }, {
        key: '_getNumberOfWeeks',
        value: function _getNumberOfWeeks() {
            var numberOfDays = this._getNumberOfDays();
            return Math.floor(numberOfDays / 7) + (numberOfDays % 7 > 0 ? 1 : 0);
        }
    }, {
        key: '_getStartingDayNumber',
        value: function _getStartingDayNumber() {
            return this._getStartOfMonthOfDate().day();
        }

        // endregion

        // region prop accessors

    }, {
        key: '_getShowMonthSelector',
        value: function _getShowMonthSelector() {
            return (0, _ramda.defaultTo)(SimpleSmallCalendarComponentClass.defaultProps.showMonthSelector)(this.props.showMonthSelector);
        }

        // endregion

        // region handlers
        // endregion

        // region render methods

    }, {
        key: '_renderDaysSelectionHeader',
        value: function _renderDaysSelectionHeader() {
            var weekDays = _moment2.default.weekdaysMin();
            var mapIndexed = (0, _ramda.addIndex)(_ramda.map);

            var weekDayCells = mapIndexed(function (day, dayIndex) {
                return React.createElement(
                    'th',
                    { key: 'weekDay_' + dayIndex },
                    weekDays[dayIndex]
                );
            }, weekDays);
            return React.createElement(
                'tr',
                null,
                weekDayCells
            );
        }
    }, {
        key: '_renderDaysSelectionBodyCell',
        value: function _renderDaysSelectionBodyCell(dayIndex, cellText, isSelected) {
            var cellClasses = (0, _classnames2.default)({ 'c-selected': isSelected });
            return React.createElement(
                'td',
                { key: 'day_' + dayIndex, className: cellClasses },
                cellText
            );
        }
    }, {
        key: '_renderDaySelectionDays',
        value: function _renderDaySelectionDays(weekIndex) {
            var _this2 = this;

            var currentDate = this._getDate();
            var currentDayDate = this._getDate();

            var startingDayNumber = this._getStartingDayNumber();
            var numberOfDays = (0, _ramda.add)(this._getNumberOfDays(), startingDayNumber) - 1;

            return (0, _ramda.map)((0, _ramda.cond)([[function (dayIndex) {
                return (0, _ramda.gt)(dayIndex, numberOfDays);
            }, function (dayIndex) {
                return _this2._renderDaysSelectionBodyCell(dayIndex, '', false);
            }], [function (dayIndex) {
                return (0, _ramda.lt)(dayIndex, startingDayNumber);
            }, function (dayIndex) {
                return _this2._renderDaysSelectionBodyCell(dayIndex, '', false);
            }], [_ramda.T, function (dayIndex) {
                var currentDay = dayIndex - (startingDayNumber - 1);
                var currentDayText = (dayIndex + 1 - startingDayNumber).toString();

                currentDayDate.set('date', currentDay);
                return _this2._renderDaysSelectionBodyCell(dayIndex, currentDayText, currentDate.isSame(currentDayDate));
            }]]), (0, _ramda.range)(7 * weekIndex, 7 * weekIndex + 7));
        }
    }, {
        key: '_renderDaysSelectionRows',
        value: function _renderDaysSelectionRows() {
            var _this3 = this;

            var numberOfWeeks = this._getNumberOfWeeks();
            return (0, _ramda.map)(function (weekIndex) {
                return React.createElement(
                    'tr',
                    { key: 'week_' + weekIndex },
                    _this3._renderDaySelectionDays(weekIndex)
                );
            }, (0, _ramda.range)(0, numberOfWeeks));
        }
    }, {
        key: '_renderDaysSelectionBody',
        value: function _renderDaysSelectionBody() {
            return this._renderDaysSelectionRows();
        }
    }, {
        key: '_renderDaysSelection',
        value: function _renderDaysSelection() {
            return React.createElement(
                _grid.SimpleFlexGridContainer,
                null,
                React.createElement(
                    _grid.SimpleFlexGridRow,
                    null,
                    React.createElement(
                        _grid.SimpleFlexGridColumn,
                        { full: true },
                        React.createElement(
                            'table',
                            { className: this.props.classes.daysSelectionTable },
                            React.createElement(
                                'thead',
                                null,
                                this._renderDaysSelectionHeader()
                            ),
                            React.createElement(
                                'tbody',
                                null,
                                this._renderDaysSelectionBody()
                            )
                        )
                    )
                )
            );
        }
    }, {
        key: '_renderMonthSelector',
        value: function _renderMonthSelector() {
            var _this4 = this;

            return (0, _ramda.cond)([[(0, _ramda.equals)(true), function () {
                return React.createElement(_simple_month_selector_component.SimpleMonthSelectorComponent, { onDateChange: _this4._onMonthSelected, initialDate: _this4._getDateForMonthSelector() });
            }], [(0, _ramda.equals)(false), function () {
                return null;
            }]])(this._getShowMonthSelector());
        }
    }, {
        key: '_renderHeaderDate',
        value: function _renderHeaderDate() {
            return React.createElement(
                _layout.InlineHeader,
                { level: 4 },
                'Fri, Jul 28'
            );
        }
    }, {
        key: '_renderHeaderYear',
        value: function _renderHeaderYear() {
            return React.createElement(
                _layout.InlineHeader,
                { level: 6 },
                '2017'
            );
        }
    }, {
        key: '_renderCardHeader',
        value: function _renderCardHeader() {
            return React.createElement(
                _layout.RegularCardHeaderComponent,
                null,
                React.createElement(
                    _grid.SimpleFlexGridContainer,
                    null,
                    React.createElement(
                        _grid.SimpleFlexGridRow,
                        null,
                        React.createElement(
                            _grid.SimpleFlexGridColumn,
                            { full: true },
                            this._renderHeaderYear()
                        )
                    ),
                    React.createElement(
                        _grid.SimpleFlexGridRow,
                        null,
                        React.createElement(
                            _grid.SimpleFlexGridColumn,
                            { full: true },
                            this._renderHeaderDate()
                        )
                    )
                )
            );
        }
    }, {
        key: '_renderCard',
        value: function _renderCard() {
            return React.createElement(
                _layout.RegularCardComponent,
                { header: this._renderCardHeader() },
                this._renderMonthSelector(),
                this._renderDaysSelection()
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return this._renderCard();
        }

        // endregion

    }]);

    return SimpleSmallCalendarComponentClass;
}(React.Component), _class.displayName = 'SimpleSmallCalendarComponent', _class.defaultProps = {
    selectedDate: (0, _moment2.default)(),
    heightLightDate: true,
    compact: false,
    selectable: true,
    showMonthSelector: true
}, _temp);

// exports

var SimpleSmallCalendarComponent = exports.SimpleSmallCalendarComponent = (0, _reactJss2.default)(styles)(SimpleSmallCalendarComponentClass);