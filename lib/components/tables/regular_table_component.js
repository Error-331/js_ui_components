'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RegularTableComponent = exports.RegularTableComponentClass = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _ramda = require('ramda');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _form_checkbox_variant2_component = require('./../form/form_checkbox_variants/form_checkbox_variant2_component');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// local imports


// styles definition


// type definitions
var commonCellStylesFunc = function commonCellStylesFunc(theme) {
    return {
        overflow: 'hidden',
        textOverflow: 'ellipsis',

        borderBottom: '1px solid ' + theme.tableStyles.cellBorderColor,

        paddingTop: theme.tableStyles.cellPaddingTop + 'px',
        paddingBottom: theme.tableStyles.cellPaddingBottom + 'px',

        paddingLeft: theme.tableStyles.cellPaddingLeft + 'px',
        paddingRight: theme.tableStyles.cellPaddingRight + 'px',

        fontFamily: theme.tableStyles.bodyFontStack,
        fontSize: theme.tableStyles.cellFontSize + 'px',

        textAlign: 'left',

        color: theme.tableStyles.cellFontColor,
        backgroundColor: theme.tableStyles.cellBGColor
    };
};

var thStylesFunc = function thStylesFunc(theme) {
    return (0, _ramda.mergeDeepRight)(commonCellStylesFunc(theme), {
        paddingTop: '0px'
    });
};

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
                            extend: thStylesFunc(theme)
                        }
                    }
                },

                '& > tfoot': {
                    '& > tr': {
                        '& th': {
                            extend: thStylesFunc(theme)
                        }
                    }
                },

                '& > tbody': {
                    '& tr': {
                        '& td': {
                            extend: commonCellStylesFunc(theme)
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
};

// component implementation

var RegularTableComponentClass = exports.RegularTableComponentClass = function (_React$Component) {
    _inherits(RegularTableComponentClass, _React$Component);

    function RegularTableComponentClass() {
        _classCallCheck(this, RegularTableComponentClass);

        return _possibleConstructorReturn(this, (RegularTableComponentClass.__proto__ || Object.getPrototypeOf(RegularTableComponentClass)).apply(this, arguments));
    }

    _createClass(RegularTableComponentClass, [{
        key: '_getColumnNames',


        // endregion

        // region constructor
        // endregion

        // region lifecycle methods
        // endregion

        // region style accessors
        // endregion

        // region label accessors
        // endregion

        // region state accessors
        // endregion

        // region prop accessors

        // region static props
        value: function _getColumnNames() {
            return (0, _ramda.defaultTo)([])(this.props.columnNames);
        }
    }, {
        key: '_getColumnWidths',
        value: function _getColumnWidths() {
            return (0, _ramda.defaultTo)([])(this.props.columnWidths);
        }
    }, {
        key: '_getColumnWidth',
        value: function _getColumnWidth(columnIndex) {
            var columnWidth = this._getColumnWidths()[columnIndex];

            return (0, _ramda.cond)([[_ramda.isNil, (0, _ramda.always)('auto')], [(0, _ramda.is)(Number), function (columnWidth) {
                return columnWidth + 'px';
            }], [(0, _ramda.is)(String), (0, _ramda.always)(columnWidth)]])(columnWidth);
        }
    }, {
        key: '_getData',
        value: function _getData() {
            return (0, _ramda.defaultTo)([])(this.props.data);
        }
    }, {
        key: '_getDataRow',
        value: function _getDataRow(dataRow) {
            return (0, _ramda.defaultTo)([])(dataRow);
        }
    }, {
        key: '_getDataColumn',
        value: function _getDataColumn(dataColumn) {
            return (0, _ramda.defaultTo)(null)(dataColumn);
        }
    }, {
        key: '_isIdColumn',
        value: function _isIdColumn(columnIndex) {
            var idColumnIndex = this.props.idColumnIndex;


            if ((0, _ramda.isNil)(idColumnIndex)) {
                return false;
            }

            return columnIndex === idColumnIndex;
        }

        // endregion

        // region handlers
        // endregion

        // region render methods

    }, {
        key: '_renderTableBodyColumn',
        value: function _renderTableBodyColumn(columnData, columnIndex) {
            columnData = (0, _ramda.cond)([[function (columnData) {
                return _moment2.default.isMoment(columnData);
            }, function (columnData) {
                return columnData.format('YYYY-M-d H:mm:ss');
            }], [(0, _ramda.is)(Date), function (columnData) {
                return (0, _moment2.default)(columnData).format('YYYY-M-d H:mm:ss');
            }], [(0, _ramda.is)(Boolean), function (columnData) {
                return React.createElement(_form_checkbox_variant2_component.FormCheckboxVariant2Component, { forceCheck: columnData });
            }], [_ramda.T, (0, _ramda.always)(columnData)]])(columnData);

            return React.createElement(
                'td',
                { key: 'column_' + columnIndex },
                columnData
            );
        }
    }, {
        key: '_renderTableBodyColumns',
        value: function _renderTableBodyColumns(rowData) {
            var _this2 = this;

            var columnIndex = -1;

            return (0, _ramda.map)(function (columnData) {
                ++columnIndex;

                if (_this2._isIdColumn(columnIndex)) {
                    return null;
                }

                return _this2._renderTableBodyColumn(_this2._getDataColumn(columnData), columnIndex);
            }, rowData);
        }
    }, {
        key: '_renderTableBodyRows',
        value: function _renderTableBodyRows() {
            var _this3 = this;

            var rowIndex = -1;

            return (0, _ramda.map)(function (rowData) {
                ++rowIndex;
                rowData = _this3._getDataRow(rowData);

                return React.createElement(
                    'tr',
                    { key: 'row_' + rowIndex },
                    _this3._renderTableBodyColumns(rowData)
                );
            }, this._getData());
        }
    }, {
        key: '_renderTableBody',
        value: function _renderTableBody() {
            var data = this.props.data;

            var renderedData = (0, _ramda.isNil)(data) || (0, _ramda.isEmpty)(data) ? null : this._renderTableBodyRows();

            return React.createElement(
                'tbody',
                null,
                renderedData
            );
        }
    }, {
        key: '_renderTableHeaderCells',
        value: function _renderTableHeaderCells() {
            var _this4 = this;

            var columnIndex = -1;

            return (0, _ramda.map)(function (columnName) {
                ++columnIndex;

                return React.createElement(
                    'th',
                    {
                        style: { width: _this4._getColumnWidth(columnIndex) },
                        key: 'headerColumn_' + columnIndex
                    },
                    columnName
                );
            }, this._getColumnNames());
        }
    }, {
        key: '_renderTableFooter',
        value: function _renderTableFooter() {
            return React.createElement(
                'tfoot',
                null,
                React.createElement(
                    'tr',
                    null,
                    this._renderTableHeaderCells()
                )
            );
        }
    }, {
        key: '_renderTableHeader',
        value: function _renderTableHeader() {
            return React.createElement(
                'thead',
                null,
                React.createElement(
                    'tr',
                    null,
                    this._renderTableHeaderCells()
                )
            );
        }
    }, {
        key: '_renderTable',
        value: function _renderTable() {
            var _props = this.props,
                showTableHeader = _props.showTableHeader,
                showTableFooter = _props.showTableFooter;


            return React.createElement(
                'table',
                null,
                showTableHeader && this._renderTableHeader(),
                showTableFooter && this._renderTableFooter(),
                this._renderTableBody()
            );
        }
    }, {
        key: '_renderComponentContainer',
        value: function _renderComponentContainer() {
            var componentContainer = this.props.classes.componentContainer;


            return React.createElement(
                'div',
                { className: componentContainer },
                this._renderTable()
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return this._renderComponentContainer();
        }

        // endregion

    }]);

    return RegularTableComponentClass;
}(React.Component);

// exports


RegularTableComponentClass.displayName = 'RegularTableComponent';
RegularTableComponentClass.defaultProps = {
    showTableHeader: true,
    showTableFooter: true,

    columnNames: [],
    columnWidths: [],

    idColumnIndex: null,
    data: undefined
};
var RegularTableComponent = exports.RegularTableComponent = (0, _reactJss2.default)(styles)(RegularTableComponentClass);