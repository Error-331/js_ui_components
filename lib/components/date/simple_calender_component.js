'use strict'; // external imports

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.parse-int");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleCalendarComponent = SimpleCalendarComponent;
exports.default = exports.SimpleCalendarClass = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ramda = require("ramda");

var _moment = _interopRequireDefault(require("moment"));

var _layout = require("./../layout");

var _simple_month_selector_component = require("./simple_month_selector_component");

var _main_theme_provider = require("./../../theming/providers/main_theme_provider");

var _dec, _class, _class2, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// styles definition
var daySelectionInnerContainer = function daySelectionInnerContainer(theme) {
  return {
    padding: '20px',
    fontSize: "".concat(theme.dateStyles.regularFontSize, "px"),
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
        maxWidth: "".concat(theme.dateStyles.calendarCompactMaxWidth, "px")
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
}; // constants definition


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

var SimpleCalendarClass = (_dec = (0, _reactJss.default)(styles), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SimpleCalendarClass, _React$Component);

  // region static props
  // endregion
  // region constructor
  function SimpleCalendarClass(props) {
    var _this;

    _classCallCheck(this, SimpleCalendarClass);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SimpleCalendarClass).call(this, props));

    var self = _assertThisInitialized(_this);

    self._onMonthSelected = self._onMonthSelected.bind(_assertThisInitialized(_this));
    self._onDayCellClick = self._onDayCellClick.bind(_assertThisInitialized(_this));
    var date = props.date;
    _this.state = {
      date: _this._getDateOrDefault(date)
    };
    return _this;
  } // endregion
  // region general logic methods
  // TODO: to generic functions


  _createClass(SimpleCalendarClass, [{
    key: "_normalizeDate",
    value: function _normalizeDate(usrDate) {
      return usrDate.clone().hour(0).minute(0).second(0).millisecond(0);
    } // TODO: to generic functions

  }, {
    key: "_getDateOrDefault",
    value: function _getDateOrDefault(usrDate) {
      var currentDate = (0, _ramda.defaultTo)((0, _moment.default)())((0, _moment.default)(usrDate));
      return this._normalizeDate(currentDate);
    } // endregion
    // region lifecycle methods

  }, {
    key: "_onMonthSelected",
    value: function _onMonthSelected(newDate) {
      this.setState({
        date: newDate
      });
    } // endregion
    // region style accessors

  }, {
    key: "_getCardContainerClassName",
    value: function _getCardContainerClassName() {
      return (0, _classnames.default)(this.props.classes.cardContainer, {
        compact: this._isCompact()
      });
    }
  }, {
    key: "_getHeaderTitleTextClassName",
    value: function _getHeaderTitleTextClassName() {
      return this.props.classes.headerTitleText;
    }
  }, {
    key: "_getHeaderTitleContainerClassName",
    value: function _getHeaderTitleContainerClassName() {
      return this.props.classes.headerTitleContainer;
    }
  }, {
    key: "_getDaysSelectionOuterContainerClassName",
    value: function _getDaysSelectionOuterContainerClassName() {
      return this.props.classes.daysSelectionOuterContainer;
    }
  }, {
    key: "_getDaysSelectionHeaderContainerClassName",
    value: function _getDaysSelectionHeaderContainerClassName() {
      var _this$props$classes = this.props.classes,
          daysSelectionInnerContainer = _this$props$classes.daysSelectionInnerContainer,
          daysSelectionHeaderContainer = _this$props$classes.daysSelectionHeaderContainer;
      return (0, _classnames.default)(daysSelectionInnerContainer, daysSelectionHeaderContainer);
    }
  }, {
    key: "_getDaySelectionHeaderOuterCellClassName",
    value: function _getDaySelectionHeaderOuterCellClassName() {
      return this.props.classes.daySelectionHeaderOuterContainer;
    }
  }, {
    key: "_getDaySelectionHeaderInnerCellClassName",
    value: function _getDaySelectionHeaderInnerCellClassName() {
      return this.props.classes.daySelectionHeaderInnerContainer;
    }
  }, {
    key: "_getDaysSelectionBodyContainerClassName",
    value: function _getDaysSelectionBodyContainerClassName() {
      var _this$props$classes2 = this.props.classes,
          daysSelectionInnerContainer = _this$props$classes2.daysSelectionInnerContainer,
          daysSelectionBodyContainer = _this$props$classes2.daysSelectionBodyContainer;
      return (0, _classnames.default)(daysSelectionInnerContainer, daysSelectionBodyContainer, {
        'selectable': this._isSelectable()
      });
    }
  }, {
    key: "_getDaySelectionBodyOuterCellClassName",
    value: function _getDaySelectionBodyOuterCellClassName() {
      return this.props.classes.daySelectionBodyOuterContainer;
    }
  }, {
    key: "_getDaySelectionBodyInnerCellClassName",
    value: function _getDaySelectionBodyInnerCellClassName(selected) {
      return (0, _classnames.default)(this.props.classes.daySelectionBodyInnerContainer, {
        'selected': selected && this._heightLightDate()
      });
    } // endregion
    // region label accessors
    // endregion
    // region state accessors

  }, {
    key: "_getDate",
    value: function _getDate() {
      return this.state.date.clone();
    }
  }, {
    key: "_getDateForMonthSelector",
    value: function _getDateForMonthSelector() {
      return (0, _moment.default)(this._getDate()).day(1);
    }
  }, {
    key: "_getStartOfMonthOfDate",
    value: function _getStartOfMonthOfDate() {
      return this._getDate().date(1);
    }
  }, {
    key: "_getEndOfMonthOfDate",
    value: function _getEndOfMonthOfDate() {
      return this._getDate().endOf('month');
    }
  }, {
    key: "_getStartOfMonthDay",
    value: function _getStartOfMonthDay() {
      return this._getStartOfMonthOfDate().day();
    }
  }, {
    key: "_getNumberOfDays",
    value: function _getNumberOfDays() {
      return this._getEndOfMonthOfDate().date();
    }
  }, {
    key: "_getNumberOfWeeks",
    value: function _getNumberOfWeeks() {
      var numberOfDays = this._getNumberOfDays();

      var startOfMonthDay = this._getStartOfMonthDay();

      var numberOfDaysWithPadding = numberOfDays + startOfMonthDay;
      return Math.floor(numberOfDaysWithPadding / 7) + (numberOfDaysWithPadding % 7 > 0 ? 1 : 0);
    }
  }, {
    key: "_getStartingDayNumber",
    value: function _getStartingDayNumber() {
      return this._getStartOfMonthOfDate().day();
    } // endregion
    // region prop accessors

  }, {
    key: "_getSelectedDate",
    value: function _getSelectedDate() {
      if ((0, _ramda.isNil)(this.props.date)) {
        return null;
      } else {
        return (0, _moment.default)(this.props.date);
      }
    }
  }, {
    key: "_getOnDateSelectCallback",
    value: function _getOnDateSelectCallback() {
      return (0, _ramda.defaultTo)(SimpleCalendarClass.defaultProps.onDateSelect)(this.props.onDateSelect);
    }
  }, {
    key: "_getShowMonthSelector",
    value: function _getShowMonthSelector() {
      return (0, _ramda.defaultTo)(SimpleCalendarClass.defaultProps.showMonthSelector)(this.props.showMonthSelector);
    }
  }, {
    key: "_heightLightDate",
    value: function _heightLightDate() {
      return (0, _ramda.defaultTo)(SimpleCalendarClass.defaultProps.heightLightDate)(this.props.heightLightDate);
    }
  }, {
    key: "_isSelectable",
    value: function _isSelectable() {
      return (0, _ramda.defaultTo)(SimpleCalendarClass.defaultProps.selectable)(this.props.selectable);
    }
  }, {
    key: "_isCompact",
    value: function _isCompact() {
      return (0, _ramda.defaultTo)(SimpleCalendarClass.defaultProps.compact)(this.props.compact);
    } // endregion
    // region handlers

  }, {
    key: "_onDayCellClick",
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
        return _this2._getOnDateSelectCallback()((0, _moment.default)(dayCellData));
      })(dayCellData);
    } // endregion
    // region render methods

  }, {
    key: "_renderDaysSelectionHeader",
    value: function _renderDaysSelectionHeader() {
      var _this3 = this;

      var weekDays = _moment.default.weekdaysMin();

      var mapIndexed = (0, _ramda.addIndex)(_ramda.map);
      return mapIndexed(function (day, dayIndex) {
        return React.createElement("div", {
          key: "weekDay_".concat(dayIndex),
          className: _this3._getDaySelectionHeaderOuterCellClassName()
        }, React.createElement("div", {
          className: _this3._getDaySelectionHeaderInnerCellClassName()
        }, weekDays[dayIndex]));
      }, weekDays);
    }
  }, {
    key: "_renderDaysSelectionBodyCell",
    value: function _renderDaysSelectionBodyCell(dayIndex, cellText, isSelected, currentDayDate) {
      var dateData = (0, _ramda.isNil)(currentDayDate) ? EMPTY_DATE_CELL_DATA : currentDayDate.format();
      var nbsp = String.fromCharCode(160);
      var preparedCellText = parseInt(cellText) > 9 ? "".concat(cellText) : "".concat(nbsp).concat(nbsp).concat(cellText);
      return React.createElement("div", {
        key: "day_".concat(dayIndex),
        className: this._getDaySelectionBodyOuterCellClassName(),
        "data-date": dateData
      }, React.createElement("div", {
        className: this._getDaySelectionBodyInnerCellClassName(isSelected)
      }, preparedCellText));
    }
  }, {
    key: "_renderDaySelectionDays",
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
    key: "_renderDaysSelectionRows",
    value: function _renderDaysSelectionRows() {
      var _this5 = this;

      var numberOfWeeks = this._getNumberOfWeeks();

      return (0, _ramda.map)(function (weekIndex) {
        return _this5._renderDaySelectionDays(weekIndex);
      }, (0, _ramda.range)(0, numberOfWeeks));
    }
  }, {
    key: "_renderDaysSelection",
    value: function _renderDaysSelection() {
      var selectDayCallback = this._isSelectable() ? this._onDayCellClick : null;
      return React.createElement("div", {
        className: this._getDaysSelectionOuterContainerClassName()
      }, React.createElement("div", {
        className: this._getDaysSelectionHeaderContainerClassName()
      }, this._renderDaysSelectionHeader()), React.createElement("div", {
        className: this._getDaysSelectionBodyContainerClassName(),
        onClick: selectDayCallback
      }, this._renderDaysSelectionRows()));
    }
  }, {
    key: "_renderMonthSelector",
    value: function _renderMonthSelector() {
      var _this6 = this;

      return (0, _ramda.cond)([[(0, _ramda.equals)(true), function () {
        return React.createElement(_simple_month_selector_component.SimpleMonthSelectorComponent, {
          onDateChange: _this6._onMonthSelected,
          initialDate: _this6._getDateForMonthSelector()
        });
      }], [(0, _ramda.equals)(false), function () {
        return null;
      }]])(this._getShowMonthSelector());
    }
  }, {
    key: "_renderHeaderDate",
    value: function _renderHeaderDate() {
      var formattedDate = this._getSelectedDate().format('dd, MMM D');

      return React.createElement(_layout.InlineHeader, {
        className: this._getHeaderTitleTextClassName(),
        level: 4
      }, formattedDate);
    }
  }, {
    key: "_renderHeaderYear",
    value: function _renderHeaderYear() {
      var formattedDate = this._getSelectedDate().format('YYYY');

      return React.createElement(_layout.InlineHeader, {
        className: this._getHeaderTitleTextClassName(),
        level: 6
      }, formattedDate);
    }
  }, {
    key: "_renderCardHeader",
    value: function _renderCardHeader() {
      return React.createElement(_layout.RegularCardHeaderComponent, {
        titleClassName: this._getHeaderTitleContainerClassName()
      }, this._renderHeaderYear(), this._renderHeaderDate());
    }
  }, {
    key: "_renderCard",
    value: function _renderCard() {
      return React.createElement(_layout.RegularCardComponent, {
        header: this._renderCardHeader(),
        containerClassName: this._getCardContainerClassName()
      }, this._renderMonthSelector(), this._renderDaysSelection());
    }
  }, {
    key: "render",
    value: function render() {
      return this._renderCard();
    } // endregion

  }]);

  return SimpleCalendarClass;
}(React.Component), _class2.displayName = 'SimpleCalendarClass', _class2.defaultProps = {
  date: (0, _moment.default)(),
  heightLightDate: true,
  compact: false,
  selectable: true,
  showMonthSelector: true,
  onDateSelect: function onDateSelect() {}
}, _temp)) || _class);
exports.SimpleCalendarClass = SimpleCalendarClass;

function SimpleCalendarComponent(props) {
  return React.createElement(_main_theme_provider.MainThemeContext.Consumer, null, function (windowDimensions) {
    return React.createElement(SimpleCalendarClass, _extends({}, props, windowDimensions));
  });
}

SimpleCalendarComponent.displayName = 'SimpleCalendarComponent'; // exports

var _default = SimpleCalendarComponent;
exports.default = _default;