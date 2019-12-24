'use strict'; // external imports

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.number.constructor");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.parse-int");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VerticalTableComponent = VerticalTableComponent;
exports.default = exports.VerticalTableClass = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _ramda = require("ramda");

var _main_theme_provider = require("./../../theming/providers/main_theme_provider");

var _table_styles = require("./../../theming/common_styles/table_styles");

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
    componentContainer: {
      boxSizing: 'border-box',
      overflow: 'hidden',
      flexBasis: 'auto',
      flexGrow: 0,
      flexShrink: 1,
      '& > table': {
        boxSizing: 'border-box',
        overflow: 'hidden',
        width: '100%',
        tableLayout: 'fixed',
        borderCollapse: 'collapse',
        '& > thead': {
          '& > tr': {
            '& th': {
              extend: (0, _table_styles.commonHeaderCellStylesFunc)(theme)
            }
          }
        },
        '& > tfoot': {
          '& > tr': {
            '& th': {
              extend: (0, _table_styles.commonFooterCellStylesFunc)(theme)
            }
          }
        },
        '& > tbody': {
          '& tr': {
            '& td': {
              extend: (0, _table_styles.commonVerticalTableCellStylesFunc)(theme)
            }
          },
          '& tr:hover': {
            '& td': {
              backgroundColor: theme.tableStyles.cellHoverBGColor
            }
          },
          '& tr:last-child': {
            '& td': {
              borderBottom: '0px none'
            }
          }
        }
      }
    }
  };
}; // component implementation

/**
 * Vertical table component to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// $FlowFixMe decorators


var VerticalTableClass = (_dec = (0, _reactJss.default)(styles), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(VerticalTableClass, _React$Component);

  function VerticalTableClass() {
    _classCallCheck(this, VerticalTableClass);

    return _possibleConstructorReturn(this, _getPrototypeOf(VerticalTableClass).apply(this, arguments));
  }

  _createClass(VerticalTableClass, [{
    key: "_onTableClick",
    // region static props
    // endregion
    // region constructor
    // endregion
    // region lifecycle methods
    value: function _onTableClick(event) {
      var target = event.target;
      var rowElement = (0, _ramda.unless)(function (currentTarget) {
        return (0, _ramda.equals)('tr', currentTarget.tagName.toLowerCase());
      }, function (currentTarget) {
        return currentTarget.closest('tr');
      })(target);

      this._getOnCellClickCallback()(event, parseInt(rowElement.dataset['row-index']));
    } // endregion
    // region style accessors

  }, {
    key: "_getTHStyle",
    value: function _getTHStyle(columnIndex) {
      return {
        width: this._getColumnWidth(columnIndex)
      };
    }
  }, {
    key: "_getComponentContainerClassName",
    value: function _getComponentContainerClassName() {
      return this.props.classes.componentContainer;
    } // endregion
    // region label accessors
    // endregion
    // region state accessors
    // endregion
    // region prop accessors

  }, {
    key: "_getColumnNames",
    value: function _getColumnNames() {
      return (0, _ramda.defaultTo)(VerticalTableClass.defaultProps.columnNames)(this.props.columnNames);
    }
  }, {
    key: "_getColumnWidths",
    value: function _getColumnWidths() {
      return (0, _ramda.defaultTo)(VerticalTableClass.defaultProps.columnWidths)(this.props.columnWidths);
    }
  }, {
    key: "_getColumnWidth",
    value: function _getColumnWidth(columnIndex) {
      var columnWidth = this._getColumnWidths()[columnIndex];

      return (0, _ramda.cond)([[_ramda.isNil, (0, _ramda.always)('auto')], [(0, _ramda.is)(Number), function (columnWidth) {
        return "".concat(columnWidth, "px");
      }], [(0, _ramda.is)(String), (0, _ramda.always)(columnWidth)]])(columnWidth);
    }
  }, {
    key: "_getData",
    value: function _getData() {
      return (0, _ramda.defaultTo)(VerticalTableClass.defaultProps.data)(this.props.data);
    }
  }, {
    key: "_getDataRow",
    value: function _getDataRow(dataRow) {
      return (0, _ramda.defaultTo)([])(dataRow);
    }
  }, {
    key: "_getDataColumn",
    value: function _getDataColumn(dataColumn) {
      return (0, _ramda.defaultTo)(null)(dataColumn);
    }
  }, {
    key: "_getIdColumnIndex",
    value: function _getIdColumnIndex() {
      return (0, _ramda.defaultTo)(VerticalTableClass.defaultProps.idColumnIndex)(this.props.idColumnIndex);
    }
  }, {
    key: "_isIdColumn",
    value: function _isIdColumn(columnIndex) {
      var idColumnIndex = this.props.idColumnIndex;

      if ((0, _ramda.isNil)(idColumnIndex)) {
        return false;
      }

      return columnIndex === idColumnIndex;
    }
  }, {
    key: "_getOnCellClickCallback",
    value: function _getOnCellClickCallback() {
      return (0, _ramda.defaultTo)(VerticalTableClass.defaultProps.onCellClick)(this.props.onCellClick);
    }
  }, {
    key: "_shouldShowTableFooter",
    value: function _shouldShowTableFooter() {
      return (0, _ramda.defaultTo)(VerticalTableClass.defaultProps.showTableFooter)(this.props.showTableFooter);
    }
  }, {
    key: "_shouldShowTableHeader",
    value: function _shouldShowTableHeader() {
      return (0, _ramda.defaultTo)(VerticalTableClass.defaultProps.showTableHeader)(this.props.showTableHeader);
    } // endregion
    // region handlers
    // endregion
    // region render methods

  }, {
    key: "_renderTableBodyColumn",
    value: function _renderTableBodyColumn(columnData, columnIndex) {
      return React.createElement("td", {
        key: "column_".concat(columnIndex)
      }, columnData);
    }
  }, {
    key: "_renderTableBodyColumns",
    value: function _renderTableBodyColumns(rowData) {
      var _this = this;

      var columnIndex = -1;
      return (0, _ramda.map)(function (columnData) {
        ++columnIndex;

        if (_this._isIdColumn(columnIndex)) {
          return null;
        }

        return _this._renderTableBodyColumn(_this._getDataColumn(columnData), columnIndex);
      }, rowData);
    }
  }, {
    key: "_renderTableBodyRows",
    value: function _renderTableBodyRows() {
      var _this2 = this;

      var rowIndex = -1;
      return (0, _ramda.map)(function (rowData) {
        ++rowIndex;
        rowData = _this2._getDataRow(rowData);
        return React.createElement("tr", {
          key: "row_".concat(rowIndex),
          "data-row-index": rowIndex
        }, _this2._renderTableBodyColumns(rowData));
      }, this._getData());
    }
  }, {
    key: "_renderTableBody",
    value: function _renderTableBody() {
      var data = this.props.data;
      var renderedData = (0, _ramda.isNil)(data) || (0, _ramda.isEmpty)(data) ? null : this._renderTableBodyRows();
      return React.createElement("tbody", {
        onClick: (0, _ramda.bind)(this._onTableClick, this)
      }, renderedData);
    }
  }, {
    key: "_renderTableHeaderCells",
    value: function _renderTableHeaderCells() {
      var _this3 = this;

      var columnIndex = -1;
      return (0, _ramda.map)(function (columnName) {
        ++columnIndex;
        return React.createElement("th", {
          style: _this3._getTHStyle(columnIndex),
          key: "headerColumn_".concat(columnIndex)
        }, columnName);
      }, this._getColumnNames());
    }
  }, {
    key: "_renderTableFooter",
    value: function _renderTableFooter() {
      return React.createElement("tfoot", null, React.createElement("tr", null, this._renderTableHeaderCells()));
    }
  }, {
    key: "_renderTableHeader",
    value: function _renderTableHeader() {
      return React.createElement("thead", null, React.createElement("tr", null, this._renderTableHeaderCells()));
    }
  }, {
    key: "_renderTable",
    value: function _renderTable() {
      return React.createElement("table", null, this._shouldShowTableHeader() && this._renderTableHeader(), this._shouldShowTableFooter() && this._renderTableFooter(), this._renderTableBody());
    }
  }, {
    key: "_renderComponentContainer",
    value: function _renderComponentContainer() {
      return React.createElement("div", {
        className: this._getComponentContainerClassName()
      }, this._renderTable());
    }
  }, {
    key: "render",
    value: function render() {
      return this._renderComponentContainer();
    } // endregion

  }]);

  return VerticalTableClass;
}(React.Component), _class2.displayName = 'VerticalTableClass', _class2.defaultProps = {
  showTableHeader: true,
  showTableFooter: true,
  showPlaceholder: false,
  columnNames: [],
  columnWidths: [],
  idColumnIndex: null,
  data: [],
  onCellClick: function onCellClick() {}
}, _temp)) || _class);
exports.VerticalTableClass = VerticalTableClass;

function VerticalTableComponent(props) {
  return React.createElement(_main_theme_provider.MainThemeContext.Consumer, null, function (windowDimensions) {
    return React.createElement(VerticalTableClass, _extends({}, props, windowDimensions));
  });
}

VerticalTableComponent.displayName = 'VerticalTableComponent'; // exports

var _default = VerticalTableComponent;
exports.default = _default;