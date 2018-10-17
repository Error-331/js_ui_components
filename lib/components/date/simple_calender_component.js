'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SimpleCalendarClass = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

// local imports


exports.SimpleCalendarComponent = SimpleCalendarComponent;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ramda = require('ramda');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _layout = require('./../layout');

var _simple_month_selector_component = require('./simple_month_selector_component');

var _theming = require('./../../theming');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// styles definition


// type definitions
var daySelectionInnerContainer = function daySelectionInnerContainer(theme) {
    return {
        padding: '20px',

        fontSize: theme.dateStyles.regularFontSize + 'px',
        color: theme.dateStyles.fontColor
    };
};

var styles = function styles(theme) {
    return {
        headerTitleContainer: {
            boxSizing: 'border-box',
            display: 'grid',

            width: '100%',

            gridTemplateColumns: '1fr',
            gridTemplateRows: 'max-content max-content',

            gridRowGap: '2px',

            '& > $headerTitleText': {
                color: theme.layoutStyles.headerFontColor
            }
        },

        headerTitleText: {},

        cardContainer: {
            '&.compact': {
                maxWidth: theme.dateStyles.calendarCompactMaxWidth + 'px'
            }
        },

        daysSelectionOuterContainer: {
            boxSizing: 'border-box',
            display: 'grid',

            gridAutoColumns: '1fr',
            gridAutoRows: 'max-content max-content',

            '& > $daysSelectionInnerContainer': {
                boxSizing: 'border-box',
                display: 'grid',

                gridTemplateColumns: 'repeat(7, 1fr)',
                gridAutoRows: 'minmax(40px, 1fr)',

                justifyItems: 'center',
                alignItems: 'center'
            },

            '& > $daysSelectionHeaderContainer': {
                '& > $daySelectionHeaderOuterContainer': {
                    '& > $daySelectionHeaderInnerContainer': {
                        extend: daySelectionInnerContainer(theme)
                    }
                }
            },

            '& > $daysSelectionBodyContainer': {
                '& > $daySelectionBodyOuterContainer': {
                    '& > $daySelectionBodyInnerContainer': {
                        extend: daySelectionInnerContainer(theme),

                        '&.selected': {
                            borderRadius: '50%',
                            backgroundColor: theme.dateStyles.selectionBackgroundColor,

                            color: theme.dateStyles.selectionFontColor
                        }
                    }
                },

                '&.selectable': {
                    '& > $daySelectionBodyOuterContainer': {
                        '& > $daySelectionBodyInnerContainer:not(.selected):not(:empty)': {
                            cursor: 'pointer'
                        }
                    }
                }
            }
        },

        daysSelectionInnerContainer: {},
        daysSelectionHeaderContainer: {},
        daysSelectionBodyContainer: {},

        daySelectionHeaderOuterContainer: {},
        daySelectionHeaderInnerContainer: {},

        daySelectionBodyOuterContainer: {},
        daySelectionBodyInnerContainer: {}
    };
};

// constants declaration
var EMPTY_DATE_CELL_DATA = 'empty';

/**
 * Simple calendar component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation

// $FlowFixMe decorators
var SimpleCalendarClass = exports.SimpleCalendarClass = (_dec = (0, _reactJss2.default)(styles), _dec(_class = (_temp = _class2 = function (_React$Component) {
    _inherits(SimpleCalendarClass, _React$Component);

    // endregion

    // region constructor

    // region static props
    function SimpleCalendarClass(props) {
        _classCallCheck(this, SimpleCalendarClass);

        var _this = _possibleConstructorReturn(this, (SimpleCalendarClass.__proto__ || Object.getPrototypeOf(SimpleCalendarClass)).call(this, props));

        var self = _this;

        self._onMonthSelected = self._onMonthSelected.bind(_this);
        self._onDayCellClick = self._onDayCellClick.bind(_this);

        var date = props.date;


        _this.state = {
            date: _this._getDateOrDefault(date)
        };
        return _this;
    }

    // endregion

    // region general logic methods
    // TODO: to generic functions


    _createClass(SimpleCalendarClass, [{
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

    }, {
        key: '_getCardContainerClassName',
        value: function _getCardContainerClassName() {
            return (0, _classnames2.default)(this.props.classes.cardContainer, { compact: this._isCompact() });
        }
    }, {
        key: '_getHeaderTitleTextClassName',
        value: function _getHeaderTitleTextClassName() {
            return this.props.classes.headerTitleText;
        }
    }, {
        key: '_getHeaderTitleContainerClassName',
        value: function _getHeaderTitleContainerClassName() {
            return this.props.classes.headerTitleContainer;
        }
    }, {
        key: '_getDaysSelectionOuterContainerClassName',
        value: function _getDaysSelectionOuterContainerClassName() {
            return this.props.classes.daysSelectionOuterContainer;
        }
    }, {
        key: '_getDaysSelectionHeaderContainerClassName',
        value: function _getDaysSelectionHeaderContainerClassName() {
            var _props$classes = this.props.classes,
                daysSelectionInnerContainer = _props$classes.daysSelectionInnerContainer,
                daysSelectionHeaderContainer = _props$classes.daysSelectionHeaderContainer;

            return (0, _classnames2.default)(daysSelectionInnerContainer, daysSelectionHeaderContainer);
        }
    }, {
        key: '_getDaySelectionHeaderOuterCellClassName',
        value: function _getDaySelectionHeaderOuterCellClassName() {
            return this.props.classes.daySelectionHeaderOuterContainer;
        }
    }, {
        key: '_getDaySelectionHeaderInnerCellClassName',
        value: function _getDaySelectionHeaderInnerCellClassName() {
            return this.props.classes.daySelectionHeaderInnerContainer;
        }
    }, {
        key: '_getDaysSelectionBodyContainerClassName',
        value: function _getDaysSelectionBodyContainerClassName() {
            var _props$classes2 = this.props.classes,
                daysSelectionInnerContainer = _props$classes2.daysSelectionInnerContainer,
                daysSelectionBodyContainer = _props$classes2.daysSelectionBodyContainer;

            return (0, _classnames2.default)(daysSelectionInnerContainer, daysSelectionBodyContainer, { 'selectable': this._isSelectable() });
        }
    }, {
        key: '_getDaySelectionBodyOuterCellClassName',
        value: function _getDaySelectionBodyOuterCellClassName() {
            return this.props.classes.daySelectionBodyOuterContainer;
        }
    }, {
        key: '_getDaySelectionBodyInnerCellClassName',
        value: function _getDaySelectionBodyInnerCellClassName(selected) {
            return (0, _classnames2.default)(this.props.classes.daySelectionBodyInnerContainer, {
                'selected': selected && this._heightLightDate()
            });
        }

        // endregion

        // region label accessors
        // endregion

        // region state accessors

    }, {
        key: '_getDate',
        value: function _getDate() {
            return this.state.date.clone();
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
        key: '_getStartOfMonthDay',
        value: function _getStartOfMonthDay() {
            return this._getStartOfMonthOfDate().day();
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
            var startOfMonthDay = this._getStartOfMonthDay();

            var numberOfDaysWithPadding = numberOfDays + startOfMonthDay;

            return Math.floor(numberOfDaysWithPadding / 7) + (numberOfDaysWithPadding % 7 > 0 ? 1 : 0);
        }
    }, {
        key: '_getStartingDayNumber',
        value: function _getStartingDayNumber() {
            return this._getStartOfMonthOfDate().day();
        }

        // endregion

        // region prop accessors

    }, {
        key: '_getSelectedDate',
        value: function _getSelectedDate() {
            if ((0, _ramda.isNil)(this.props.date)) {
                return null;
            } else {
                return (0, _moment2.default)(this.props.date);
            }
        }
    }, {
        key: '_getOnDateSelectCallback',
        value: function _getOnDateSelectCallback() {
            return (0, _ramda.defaultTo)(SimpleCalendarClass.defaultProps.onDateSelect)(this.props.onDateSelect);
        }
    }, {
        key: '_getShowMonthSelector',
        value: function _getShowMonthSelector() {
            return (0, _ramda.defaultTo)(SimpleCalendarClass.defaultProps.showMonthSelector)(this.props.showMonthSelector);
        }
    }, {
        key: '_heightLightDate',
        value: function _heightLightDate() {
            return (0, _ramda.defaultTo)(SimpleCalendarClass.defaultProps.heightLightDate)(this.props.heightLightDate);
        }
    }, {
        key: '_isSelectable',
        value: function _isSelectable() {
            return (0, _ramda.defaultTo)(SimpleCalendarClass.defaultProps.selectable)(this.props.selectable);
        }
    }, {
        key: '_isCompact',
        value: function _isCompact() {
            return (0, _ramda.defaultTo)(SimpleCalendarClass.defaultProps.compact)(this.props.compact);
        }

        // endregion

        // region handlers

    }, {
        key: '_onDayCellClick',
        value: function _onDayCellClick(event) {
            var _this2 = this;

            var target = event.target;

            var $dayCellElement = (0, _ramda.unless)(function (currentTarget) {
                return !(0, _ramda.isNil)(currentTarget.dataset['data-date']);
            }, function (currentTarget) {
                return currentTarget.closest('div[data-date]');
            })(target);

            var dayCellData = (0, _ramda.isNil)($dayCellElement) ? null : $dayCellElement.dataset['date'];

            (0, _ramda.unless)(function (dayCellData) {
                return (0, _ramda.isNil)(dayCellData) || (0, _ramda.equals)(EMPTY_DATE_CELL_DATA, dayCellData);
            }, function (dayCellData) {
                return _this2._getOnDateSelectCallback()((0, _moment2.default)(dayCellData));
            })(dayCellData);
        }

        // endregion

        // region render methods

    }, {
        key: '_renderDaysSelectionHeader',
        value: function _renderDaysSelectionHeader() {
            var _this3 = this;

            var weekDays = _moment2.default.weekdaysMin();
            var mapIndexed = (0, _ramda.addIndex)(_ramda.map);

            return mapIndexed(function (day, dayIndex) {
                return React.createElement(
                    'div',
                    { key: 'weekDay_' + dayIndex, className: _this3._getDaySelectionHeaderOuterCellClassName() },
                    React.createElement(
                        'div',
                        { className: _this3._getDaySelectionHeaderInnerCellClassName() },
                        weekDays[dayIndex]
                    )
                );
            }, weekDays);
        }
    }, {
        key: '_renderDaysSelectionBodyCell',
        value: function _renderDaysSelectionBodyCell(dayIndex, cellText, isSelected, currentDayDate) {
            var dateData = (0, _ramda.isNil)(currentDayDate) ? EMPTY_DATE_CELL_DATA : currentDayDate.format();
            var nbsp = String.fromCharCode(160);
            var preparedCellText = parseInt(cellText) > 9 ? '' + cellText : '' + nbsp + nbsp + cellText;

            return React.createElement(
                'div',
                { key: 'day_' + dayIndex, className: this._getDaySelectionBodyOuterCellClassName(), 'data-date': dateData },
                React.createElement(
                    'div',
                    { className: this._getDaySelectionBodyInnerCellClassName(isSelected) },
                    preparedCellText
                )
            );
        }
    }, {
        key: '_renderDaySelectionDays',
        value: function _renderDaySelectionDays(weekIndex) {
            var _this4 = this;

            var selectedDate = this._getSelectedDate();
            var currentDayDate = this._getDate();

            var startingDayNumber = this._getStartingDayNumber();
            var numberOfDays = (0, _ramda.add)(this._getNumberOfDays(), startingDayNumber) - 1;

            return (0, _ramda.map)((0, _ramda.cond)([[function (dayIndex) {
                return (0, _ramda.gt)(dayIndex, numberOfDays);
            }, function (dayIndex) {
                return _this4._renderDaysSelectionBodyCell(dayIndex, '', false);
            }], [function (dayIndex) {
                return (0, _ramda.lt)(dayIndex, startingDayNumber);
            }, function (dayIndex) {
                return _this4._renderDaysSelectionBodyCell(dayIndex, '', false);
            }], [_ramda.T, function (dayIndex) {
                var currentDay = dayIndex - (startingDayNumber - 1);
                var currentDayText = (dayIndex + 1 - startingDayNumber).toString();

                currentDayDate.set('date', currentDay);
                var isSameDate = (0, _ramda.isNil)(selectedDate) ? false : currentDayDate.isSame(_this4._normalizeDate(selectedDate));

                return _this4._renderDaysSelectionBodyCell(dayIndex, currentDayText, isSameDate, currentDayDate);
            }]]), (0, _ramda.range)(7 * weekIndex, 7 * weekIndex + 7));
        }
    }, {
        key: '_renderDaysSelectionRows',
        value: function _renderDaysSelectionRows() {
            var _this5 = this;

            var numberOfWeeks = this._getNumberOfWeeks();
            return (0, _ramda.map)(function (weekIndex) {
                return _this5._renderDaySelectionDays(weekIndex);
            }, (0, _ramda.range)(0, numberOfWeeks));
        }
    }, {
        key: '_renderDaysSelection',
        value: function _renderDaysSelection() {
            var selectDayCallback = this._isSelectable() ? this._onDayCellClick : null;

            return React.createElement(
                'div',
                { className: this._getDaysSelectionOuterContainerClassName() },
                React.createElement(
                    'div',
                    { className: this._getDaysSelectionHeaderContainerClassName() },
                    this._renderDaysSelectionHeader()
                ),
                React.createElement(
                    'div',
                    { className: this._getDaysSelectionBodyContainerClassName(), onClick: selectDayCallback },
                    this._renderDaysSelectionRows()
                )
            );
        }
    }, {
        key: '_renderMonthSelector',
        value: function _renderMonthSelector() {
            var _this6 = this;

            return (0, _ramda.cond)([[(0, _ramda.equals)(true), function () {
                return React.createElement(_simple_month_selector_component.SimpleMonthSelectorComponent, { onDateChange: _this6._onMonthSelected, initialDate: _this6._getDateForMonthSelector() });
            }], [(0, _ramda.equals)(false), function () {
                return null;
            }]])(this._getShowMonthSelector());
        }
    }, {
        key: '_renderHeaderDate',
        value: function _renderHeaderDate() {
            var formattedDate = this._getSelectedDate().format('dd, MMM D');
            return React.createElement(
                _layout.InlineHeader,
                { className: this._getHeaderTitleTextClassName(), level: 4 },
                formattedDate
            );
        }
    }, {
        key: '_renderHeaderYear',
        value: function _renderHeaderYear() {
            var formattedDate = this._getSelectedDate().format('YYYY');
            return React.createElement(
                _layout.InlineHeader,
                { className: this._getHeaderTitleTextClassName(), level: 6 },
                formattedDate
            );
        }
    }, {
        key: '_renderCardHeader',
        value: function _renderCardHeader() {
            return React.createElement(
                _layout.RegularCardHeaderComponent,
                { titleClassName: this._getHeaderTitleContainerClassName() },
                this._renderHeaderYear(),
                this._renderHeaderDate()
            );
        }
    }, {
        key: '_renderCard',
        value: function _renderCard() {
            return React.createElement(
                _layout.RegularCardComponent,
                { header: this._renderCardHeader(), containerClassNames: this._getCardContainerClassName() },
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

    return SimpleCalendarClass;
}(React.Component), _class2.displayName = 'SimpleCalendarClass', _class2.defaultProps = {
    date: (0, _moment2.default)(),
    heightLightDate: true,
    compact: false,
    selectable: true,
    showMonthSelector: true,

    onDateSelect: function onDateSelect() {}
}, _temp)) || _class);

// exports

function SimpleCalendarComponent(props) {
    return React.createElement(
        _theming.MainThemeContext.Consumer,
        null,
        function (windowDimensions) {
            return React.createElement(SimpleCalendarClass, _extends({}, props, windowDimensions));
        }
    );
}

SimpleCalendarComponent.displayName = 'SimpleCalendarComponent';