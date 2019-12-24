'use strict'; // external imports

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.number.constructor");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RegularTableComponent = RegularTableComponent;
exports.default = exports.RegularTableClass = exports.VERTICAL_TABLE_TYPE = exports.HORIZONTAL_TABLE_TYPE = exports.SPECIFIC_COLUMN_TYPE_LONG_TEXT = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _ramda = require("ramda");

var _moment = _interopRequireDefault(require("moment"));

var _table_styles = require("./../../theming/common_styles/table_styles");

var _main_theme_provider = require("./../../theming/providers/main_theme_provider");

var _text_block = require("./../layout/text/text_block");

var _form_checkbox_variant3_component = require("./../form/form_checkbox_variants/form_checkbox_variant3_component");

var _horizontal_table_component = require("./horizontal_table_component");

var _vertical_table_component = require("./vertical_table_component");

var _dec, _class, _class2, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// styles definition
var styles = function styles(theme) {
  return {
    placeholderContainer: {
      width: '20px',
      borderTop: "1px solid ".concat(theme.tableStyles.cellBorderColor)
    },
    regularTextContainer: {
      extend: [(0, _table_styles.commonCellContentStylesFunc)(theme), (0, _table_styles.longTextCellStylesFunc)()],
      maxHeight: "".concat(theme.tableStyles.cellLineHeight, "px")
    },
    longTextContainer: {
      extend: [(0, _table_styles.commonCellContentStylesFunc)(theme), (0, _table_styles.longTextCellStylesFunc)()],
      maxHeight: "".concat(theme.tableStyles.cellLineHeight * 2, "px"),
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  };
}; // constants definition


var SPECIFIC_COLUMN_TYPE_LONG_TEXT = 'SPECIFIC_COLUMN_TYPE_LONG_TEXT';
exports.SPECIFIC_COLUMN_TYPE_LONG_TEXT = SPECIFIC_COLUMN_TYPE_LONG_TEXT;
var HORIZONTAL_TABLE_TYPE = 'horizontal';
exports.HORIZONTAL_TABLE_TYPE = HORIZONTAL_TABLE_TYPE;
var VERTICAL_TABLE_TYPE = 'vertical';
/**
 * Regular table component styled according to material-UI guidelines.
 * Wrapper component for ['VerticalTableComponent'](#verticaltablecomponent) and ['HorizontalTableComponent'](#horizontaltablecomponent). It will change it representation
 * based on clients screen dimensions (['VerticalTableComponent'](#verticaltablecomponent) will be used for mobile like devices and
 * ['HorizontalTableComponent'](#horizontaltablecomponent) will be used for other devices).
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation
// $FlowFixMe decorators

exports.VERTICAL_TABLE_TYPE = VERTICAL_TABLE_TYPE;
var RegularTableClass = (_dec = (0, _reactJss.default)(styles), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RegularTableClass, _React$Component);

  // region static props
  // endregion
  // region private props
  // endregion
  // region constructor
  function RegularTableClass(props) {
    var _this;

    _classCallCheck(this, RegularTableClass);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RegularTableClass).call(this, props));
    _this.state = {
      tableType: VERTICAL_TABLE_TYPE
    };
    return _this;
  } // endregion
  // region business logic


  _createClass(RegularTableClass, [{
    key: "_prepareNilColumnData",
    value: function _prepareNilColumnData() {
      var showPlaceholder = this._getShowPlaceholder();

      return showPlaceholder ? React.createElement("div", {
        className: this._getPlaceholderContainerClassName()
      }) : '';
    }
  }, {
    key: "_prepareStringColumn",
    value: function _prepareStringColumn(columnData) {
      return React.createElement(_text_block.TextBlock, {
        className: this._getRegularTextContainerClassName()
      }, columnData);
    }
  }, {
    key: "_prepareLongTextColumn",
    value: function _prepareLongTextColumn(columnData) {
      var data = columnData.data;
      return React.createElement(_text_block.TextBlock, {
        className: this._getLongTextContainerClassName()
      }, data);
    }
  }, {
    key: "_prepareSpecificColumnData",
    value: function _prepareSpecificColumnData(columnData) {
      if (_typeof(columnData) !== 'object' || (0, _ramda.isNil)(columnData)) {
        return this._prepareNilColumnData();
      }

      if (React.isValidElement(columnData)) {
        return columnData;
      }

      if (!columnData.type || !columnData.data) {
        return '';
      }

      return (0, _ramda.cond)([[function (_ref) {
        var type = _ref.type;
        return (0, _ramda.equals)(SPECIFIC_COLUMN_TYPE_LONG_TEXT, type);
      }, (0, _ramda.bind)(this._prepareLongTextColumn, this)], [_ramda.T, (0, _ramda.always)('')]])(columnData);
    }
  }, {
    key: "_prepareColumnData",
    value: function _prepareColumnData(columnData) {
      return (0, _ramda.cond)([[_ramda.isNil, (0, _ramda.bind)(this._prepareNilColumnData, this)], [function (columnData) {
        return _moment.default.isMoment(columnData);
      }, function (columnData) {
        return columnData.format('YYYY-M-d H:mm:ss');
      }], [(0, _ramda.is)(Date), function (columnData) {
        return (0, _moment.default)(columnData).format('YYYY-M-d H:mm:ss');
      }], [(0, _ramda.is)(Boolean), function (columnData) {
        return React.createElement(_form_checkbox_variant3_component.FormCheckboxVariant3Component, {
          forceCheck: columnData
        });
      }], [(0, _ramda.is)(Number), (0, _ramda.bind)(this._prepareStringColumn, this)], [(0, _ramda.is)(String), (0, _ramda.bind)(this._prepareStringColumn, this)], [(0, _ramda.is)(Object), (0, _ramda.bind)(this._prepareSpecificColumnData, this)], [_ramda.T, (0, _ramda.bind)(this._prepareNilColumnData, this)]])(columnData);
    } // endregion
    // region lifecycle methods
    // endregion
    // region style accessors

  }, {
    key: "_getLongTextContainerClassName",
    value: function _getLongTextContainerClassName() {
      return this.props.classes.longTextContainer;
    }
  }, {
    key: "_getRegularTextContainerClassName",
    value: function _getRegularTextContainerClassName() {
      return this.props.classes.regularTextContainer;
    }
  }, {
    key: "_getPlaceholderContainerClassName",
    value: function _getPlaceholderContainerClassName() {
      return this.props.classes.placeholderContainer;
    } // endregion
    // region label accessors
    // endregion
    // region state accessors
    // endregion
    // region prop accessors

  }, {
    key: "_getShowPlaceholder",
    value: function _getShowPlaceholder() {
      return (0, _ramda.defaultTo)(RegularTableClass.defaultProps.showPlaceholder)(this.props.showPlaceholder);
    }
  }, {
    key: "_getData",
    value: function _getData() {
      return (0, _ramda.defaultTo)((0, _ramda.clone)(RegularTableClass.defaultProps.data))(this.props.data);
    } // endregion
    // region handlers
    // endregion
    // region render methods

  }, {
    key: "render",
    value: function render() {
      var data = this._getData();

      if ((0, _ramda.isNil)(data)) {
        return null;
      }

      var preparedData = (0, _ramda.map)((0, _ramda.map)((0, _ramda.bind)(this._prepareColumnData, this)), data);
      return (0, _ramda.ifElse)((0, _ramda.equals)(HORIZONTAL_TABLE_TYPE), (0, _ramda.always)(React.createElement(_horizontal_table_component.HorizontalTableComponent, _extends({}, (0, _ramda.omit)(['data', 'classes'], this.props), {
        data: preparedData
      }))), (0, _ramda.always)(React.createElement(_vertical_table_component.VerticalTableComponent, _extends({}, (0, _ramda.omit)(['data', 'classes'], this.props), {
        data: preparedData
      }))))(this.state.tableType);
    } // endregion

  }]);

  return RegularTableClass;
}(React.Component), _class2.displayName = 'RegularTableClass', _class2.defaultProps = {
  showPlaceholder: false,
  data: null
}, _temp)) || _class);
exports.RegularTableClass = RegularTableClass;

function RegularTableComponent(props) {
  return React.createElement(_main_theme_provider.MainThemeContext.Consumer, null, function (windowDimensions) {
    return React.createElement(RegularTableClass, _extends({}, props, windowDimensions));
  });
}

RegularTableComponent.displayName = 'RegularTableComponent'; // exports

var _default = RegularTableComponent;
exports.default = _default;