'use strict'; // external imports

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.weak-map");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ControlledTableComponent = ControlledTableComponent;
exports.default = exports.ControlledTableClass = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _ramda = require("ramda");

var _main_theme_provider = require("./../../theming/providers/main_theme_provider");

var _regular_table_component = require("./regular_table_component");

var _elements_row = require("./../layout/alignment/elements/elements_row");

var _form_checkbox_input_component = require("./../form/form_checkbox_input_component");

var _font_icon = require("./../layout/icons/font_icon");

var _dec, _class, _class2, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
    controlIcon: {
      cursor: 'pointer'
    }
  };
};
/**
 * Controlled table component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation
// $FlowFixMe decorators


var ControlledTableClass = (_dec = (0, _reactJss.default)(styles), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ControlledTableClass, _React$Component);

  // region static props
  // endregion
  // region constructor
  function ControlledTableClass(props) {
    var _this;

    _classCallCheck(this, ControlledTableClass);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ControlledTableClass).call(this, props));

    var self = _assertThisInitialized(_this);

    self._prepareData = (0, _ramda.bind)(self._prepareData, _assertThisInitialized(_this));
    self._prepareColumnNames = (0, _ramda.bind)(self._prepareColumnNames, _assertThisInitialized(_this));
    self._prepareIdColumnIndex = (0, _ramda.bind)(self._prepareIdColumnIndex, _assertThisInitialized(_this));
    return _this;
  } // endregion
  // region business logic


  _createClass(ControlledTableClass, [{
    key: "_prepareIdColumnIndex",
    value: function _prepareIdColumnIndex(idColumnIndex) {
      return this._shouldShowRowSelector() ? idColumnIndex + 1 : idColumnIndex;
    }
  }, {
    key: "_prepareRowControls",
    value: function _prepareRowControls(rowControls, rowIndex) {
      var _this2 = this;

      var index = -1;
      var controls = (0, _ramda.map)(function (rowControl) {
        index++;
        var iconClassName = rowControl.iconClassName,
            onClickHandler = rowControl.onClickHandler;
        onClickHandler = (0, _ramda.is)(Object, onClickHandler) ? (0, _ramda.curry)(onClickHandler)(_ramda.__, rowIndex) : null;
        return React.createElement(_font_icon.FontIcon, {
          key: "control_".concat(index),
          size: "small",
          accent: true,
          className: _this2._getControlIconClassName(),
          iconClassName: iconClassName,
          onClick: onClickHandler
        });
      }, rowControls);
      return React.createElement(_elements_row.ElementsRow, {
        alignment: "right"
      }, controls);
    }
  }, {
    key: "_prepareColumnNames",
    value: function _prepareColumnNames(columnNames) {
      if (!this._shouldShowRowControls()) {
        return columnNames;
      }

      columnNames = this._shouldShowRowControls() ? (0, _ramda.append)('', columnNames) : columnNames;
      columnNames = this._shouldShowRowSelector() ? (0, _ramda.prepend)(React.createElement(_form_checkbox_input_component.FormCheckboxInputComponent, {
        variant: 1
      }), columnNames) : columnNames;
      return columnNames;
    }
  }, {
    key: "_addRowControls",
    value: function _addRowControls(dataRow) {
      var indexColumn = this._getIdColumnIndex();

      var rowControls = this._getRowControls();

      var preparedControls = this._prepareRowControls(rowControls, dataRow[indexColumn]);

      return (0, _ramda.append)(preparedControls, dataRow);
    }
  }, {
    key: "_addRowSelector",
    value: function _addRowSelector(dataRow) {
      return (0, _ramda.prepend)(React.createElement(_form_checkbox_input_component.FormCheckboxInputComponent, {
        variant: 1
      }), dataRow);
    }
  }, {
    key: "_prepareData",
    value: function _prepareData(data) {
      var _this3 = this;

      if (!this._shouldShowRowControls() && !this._shouldShowRowSelector()) {
        return data;
      }

      return (0, _ramda.map)(function (dataRow) {
        dataRow = _this3._shouldShowRowControls() ? _this3._addRowControls(dataRow) : dataRow;
        dataRow = _this3._shouldShowRowSelector() ? _this3._addRowSelector(dataRow) : dataRow;
        return dataRow;
      }, data);
    } // endregion
    // region lifecycle methods
    // endregion
    // region style accessors

  }, {
    key: "_getControlIconClassName",
    value: function _getControlIconClassName() {
      return this.props.classes.controlIcon;
    } // endregion
    // region label accessors
    // endregion
    // region state accessors
    // endregion
    // region prop accessors

  }, {
    key: "_shouldShowRowSelector",
    value: function _shouldShowRowSelector() {
      return !(0, _ramda.isNil)(this._getIdColumnIndex()) && !(0, _ramda.isNil)(this._areRowsSelectable());
    }
  }, {
    key: "_shouldShowRowControls",
    value: function _shouldShowRowControls() {
      return !(0, _ramda.isNil)(this._getIdColumnIndex()) && !(0, _ramda.isNil)(this._getRowControls());
    }
  }, {
    key: "_areRowsSelectable",
    value: function _areRowsSelectable() {
      return (0, _ramda.defaultTo)(ControlledTableClass.defaultProps.selectableRows)(this.props.selectableRows);
    }
  }, {
    key: "_getRowControls",
    value: function _getRowControls() {
      return (0, _ramda.defaultTo)(ControlledTableClass.defaultProps.rowControls)(this.props.rowControls);
    }
  }, {
    key: "_getColumnNames",
    value: function _getColumnNames() {
      return (0, _ramda.defaultTo)(ControlledTableClass.defaultProps.columnNames)(this.props.columnNames);
    }
  }, {
    key: "_getData",
    value: function _getData() {
      return (0, _ramda.defaultTo)((0, _ramda.clone)(ControlledTableClass.defaultProps.data))(this.props.data);
    }
  }, {
    key: "_getIdColumnIndex",
    value: function _getIdColumnIndex() {
      return (0, _ramda.defaultTo)(ControlledTableClass.defaultProps.idColumnIndex)(this.props.idColumnIndex);
    } // endregion
    // region handlers
    // endregion
    // region render methods

  }, {
    key: "render",
    value: function render() {
      return React.createElement(_regular_table_component.RegularTableComponent, _extends({}, this.props, {
        idColumnIndex: (0, _ramda.unless)(_ramda.isNil, this._prepareIdColumnIndex)(this._getIdColumnIndex()),
        data: (0, _ramda.unless)(_ramda.isNil, this._prepareData)(this._getData()),
        columnNames: (0, _ramda.unless)(_ramda.isNil, this._prepareColumnNames)(this._getColumnNames())
      }));
    } // endregion

  }]);

  return ControlledTableClass;
}(React.Component), _class2.displayName = 'ControlledTableClass', _class2.defaultProps = {
  idColumnIndex: null,
  selectableRows: false,
  rowControls: null,
  columnNames: [],
  data: null
}, _temp)) || _class);
exports.ControlledTableClass = ControlledTableClass;

function ControlledTableComponent(props) {
  return React.createElement(_main_theme_provider.MainThemeContext.Consumer, null, function (windowDimensions) {
    return React.createElement(ControlledTableClass, _extends({}, props, windowDimensions));
  });
}

ControlledTableComponent.displayName = 'ControlledTableComponent'; // exports

var _default = ControlledTableComponent;
exports.default = _default;