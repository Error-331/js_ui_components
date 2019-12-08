'use strict'; // external imports

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleMonthSelectorComponent = SimpleMonthSelectorComponent;
exports.default = exports.SimpleMonthSelectorClass = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ramda = require("ramda");

var _moment = _interopRequireDefault(require("moment"));

var _grid = require("./../grid");

var _inline_text_block = require("./../layout/text/inline_text_block");

var _main_theme_provider = require("./../../theming/providers/main_theme_provider");

var _dec, _class, _class2, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// styles definition
var styles = function styles(theme) {
  return {
    componentContainer: {
      '& $selectionButton': {
        padding: '0 3px 0 3px',
        fontSize: "".concat(theme.dateStyles.regularFontSize, "px"),
        cursor: 'pointer'
      },
      '& $selectedDateContainer': {
        fontSize: "".concat(theme.dateStyles.regularFontSize, "px")
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
// $FlowFixMe decorators


var SimpleMonthSelectorClass = (_dec = (0, _reactJss.default)(styles), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SimpleMonthSelectorClass, _React$Component);

  // region static props
  // endregion
  // region constructor
  function SimpleMonthSelectorClass(props) {
    var _this;

    _classCallCheck(this, SimpleMonthSelectorClass);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SimpleMonthSelectorClass).call(this, props));

    var self = _assertThisInitialized(_this);

    self._onBackButtonClick = self._onBackButtonClick.bind(_assertThisInitialized(_this));
    self._onForwardButtonClick = self._onForwardButtonClick.bind(_assertThisInitialized(_this));
    var initialDate = props.initialDate;
    _this.state = {
      date: (0, _ramda.isNil)(initialDate) ? _this._getDateOrDefault() : _this._getDateOrDefault(initialDate)
    };
    return _this;
  } // endregion
  // region general logic methods
  // TODO: to generic functions


  _createClass(SimpleMonthSelectorClass, [{
    key: "_normalizeDate",
    value: function _normalizeDate(usrDate) {
      return usrDate.clone().hour(0).minute(0).second(0).millisecond(0);
    }
  }, {
    key: "_getDateOrDefault",
    value: function _getDateOrDefault(usrDate) {
      var currentDate = (0, _ramda.defaultTo)((0, _moment.default)())((0, _moment.default)(usrDate));
      return this._normalizeDate(currentDate);
    } // endregion
    // region lifecycle methods

  }, {
    key: "_onBackButtonClick",
    value: function _onBackButtonClick() {
      var currentDate = this._getDate();

      var currentMonth = currentDate.month();
      var newDate = (0, _moment.default)(currentDate).month(currentMonth - 1);
      this.setState({
        date: newDate
      });

      this._getDateChangeHander()(newDate);
    }
  }, {
    key: "_onForwardButtonClick",
    value: function _onForwardButtonClick() {
      var currentDate = this._getDate();

      var currentMonth = currentDate.month();
      var newDate = (0, _moment.default)(currentDate).month(currentMonth + 1);
      this.setState({
        date: newDate
      });

      this._getDateChangeHander()(newDate);
    } // endregion
    // region style accessors

  }, {
    key: "_getButtonClasses",
    value: function _getButtonClasses() {
      return (0, _classnames.default)('fas', this.props.classes.selectionButton);
    }
  }, {
    key: "_getBackButtonClasses",
    value: function _getBackButtonClasses() {
      return (0, _classnames.default)('fa-angle-left', this._getButtonClasses());
    }
  }, {
    key: "_getForwardButtonClasses",
    value: function _getForwardButtonClasses() {
      return (0, _classnames.default)('fa-angle-right', this._getButtonClasses());
    }
  }, {
    key: "_getSelectedDateClasses",
    value: function _getSelectedDateClasses() {
      return this.props.classes.selectedDateContainer;
    } // endregion
    // region label accessors
    // endregion
    // region state accessors

  }, {
    key: "_getDate",
    value: function _getDate() {
      return this.state.date;
    }
  }, {
    key: "_getFormattedDate",
    value: function _getFormattedDate() {
      var date = this._getDate();

      return date.format('MMMM Y');
    } // endregion
    // region prop accessors

  }, {
    key: "_getDateChangeHander",
    value: function _getDateChangeHander() {
      return (0, _ramda.defaultTo)(SimpleMonthSelectorClass.defaultProps.onDateChange)(this.props.onDateChange);
    } // endregion
    // region handlers
    // endregion
    // region render methods

  }, {
    key: "_renderBackButton",
    value: function _renderBackButton() {
      return React.createElement("i", {
        onClick: this._onBackButtonClick,
        className: this._getBackButtonClasses()
      });
    }
  }, {
    key: "_renderForwardButton",
    value: function _renderForwardButton() {
      return React.createElement("i", {
        onClick: this._onForwardButtonClick,
        className: this._getForwardButtonClasses()
      });
    }
  }, {
    key: "_renderSelectedDate",
    value: function _renderSelectedDate() {
      return React.createElement(_inline_text_block.InlineTextBlock, {
        className: this._getSelectedDateClasses()
      }, this._getFormattedDate());
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(_grid.SimpleFlexGridContainer, {
        className: this.props.classes.componentContainer
      }, React.createElement(_grid.SimpleFlexGridRow, {
        xAlign: "space-between",
        yAlign: "center"
      }, React.createElement(_grid.SimpleFlexGridColumn, null, this._renderBackButton()), React.createElement(_grid.SimpleFlexGridColumn, null, this._renderSelectedDate()), React.createElement(_grid.SimpleFlexGridColumn, null, this._renderForwardButton())));
    } // endregion

  }]);

  return SimpleMonthSelectorClass;
}(React.Component), _class2.displayName = 'SimpleMonthSelectorClass', _class2.defaultProps = {
  initialDate: (0, _moment.default)(),
  onDateChange: function onDateChange() {}
}, _temp)) || _class);
exports.SimpleMonthSelectorClass = SimpleMonthSelectorClass;

function SimpleMonthSelectorComponent(props) {
  return React.createElement(_main_theme_provider.MainThemeContext.Consumer, null, function (windowDimensions) {
    return React.createElement(SimpleMonthSelectorClass, _extends({}, props, windowDimensions));
  });
}

SimpleMonthSelectorComponent.displayName = 'SimpleMonthSelectorComponent'; // exports

var _default = SimpleMonthSelectorComponent;
exports.default = _default;