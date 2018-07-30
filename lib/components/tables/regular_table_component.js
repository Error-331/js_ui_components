'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _ramda = require('ramda');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// local imports

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
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',

                            borderBottom: '1px solid ' + theme.tableStyles.cellBorderColor,

                            paddingTop: '0px',
                            paddingBottom: theme.tableStyles.cellPaddingBottom + 'px',

                            paddingLeft: theme.tableStyles.cellPaddingLeft + 'px',
                            paddingRight: theme.tableStyles.cellPaddingRight + 'px',

                            fontFamily: '"Roboto-Bold", "Helvetica Neue", Helvetica, Arial, sans-serif',
                            fontSize: theme.tableStyles.cellFontSize + 'px',

                            textAlign: 'left',

                            color: theme.tableStyles.headerCellFontColor,
                            backgroundColor: theme.tableStyles.cellBGColor
                        }
                    }
                },

                '& > tfoot': {
                    '& > tr': {
                        '& th': {
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',

                            borderTop: '1px solid ' + theme.tableStyles.cellBorderColor,

                            paddingTop: theme.tableStyles.cellPaddingTop + 'px',
                            paddingBottom: '0px',

                            paddingLeft: theme.tableStyles.cellPaddingLeft + 'px',
                            paddingRight: theme.tableStyles.cellPaddingRight + 'px',

                            fontFamily: '"Roboto-Bold", "Helvetica Neue", Helvetica, Arial, sans-serif',
                            fontSize: theme.tableStyles.cellFontSize + 'px',

                            textAlign: 'left',

                            color: theme.tableStyles.headerCellFontColor,
                            backgroundColor: theme.tableStyles.cellBGColor
                        }
                    }
                },

                '& > tbody': {
                    '& tr': {
                        '& td': {
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',

                            borderBottom: '1px solid ' + theme.tableStyles.cellBorderColor,

                            paddingTop: theme.tableStyles.cellPaddingTop + 'px',
                            paddingBottom: theme.tableStyles.cellPaddingBottom + 'px',

                            paddingLeft: theme.tableStyles.cellPaddingLeft + 'px',
                            paddingRight: theme.tableStyles.cellPaddingRight + 'px',

                            fontFamily: '"Roboto-Regular", "Helvetica Neue", Helvetica, Arial, sans-serif',
                            fontSize: theme.tableStyles.cellFontSize + 'px',

                            textAlign: 'left',

                            color: theme.tableStyles.cellFontColor,
                            backgroundColor: theme.tableStyles.cellBGColor
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

// meta preparation
var mapIndexed = (0, _ramda.addIndex)(_ramda.map);

// component implementation

var RegularTableComponent = function (_Component) {
    _inherits(RegularTableComponent, _Component);

    function RegularTableComponent() {
        _classCallCheck(this, RegularTableComponent);

        return _possibleConstructorReturn(this, (RegularTableComponent.__proto__ || Object.getPrototypeOf(RegularTableComponent)).apply(this, arguments));
    }

    _createClass(RegularTableComponent, [{
        key: '_isIdColumn',
        value: function _isIdColumn(columnIndex) {
            var idColumnIndex = this.props.idColumnIndex;


            if ((0, _ramda.isNil)(idColumnIndex)) {
                return false;
            }

            return columnIndex === idColumnIndex;
        }
    }, {
        key: '_renderTableHeaderCells',
        value: function _renderTableHeaderCells() {
            var _props = this.props,
                columnNames = _props.columnNames,
                columnWidths = _props.columnWidths,
                idColumnIndex = _props.idColumnIndex;


            return mapIndexed(function (columnName, columnIndex) {
                var columnWidth = columnWidths[columnIndex];
                columnWidth = (0, _ramda.isNil)(columnWidth) ? 'auto' : columnWidth;

                return _react2.default.createElement(
                    'th',
                    { style: { width: columnWidth }, key: 'headerColumn_' + columnIndex },
                    columnName
                );
            }, columnNames);
        }
    }, {
        key: '_renderTableFooter',
        value: function _renderTableFooter() {
            return _react2.default.createElement(
                'tfoot',
                null,
                _react2.default.createElement(
                    'tr',
                    null,
                    this._renderTableHeaderCells()
                )
            );
        }
    }, {
        key: '_renderTableHeader',
        value: function _renderTableHeader() {
            return _react2.default.createElement(
                'thead',
                null,
                _react2.default.createElement(
                    'tr',
                    null,
                    this._renderTableHeaderCells()
                )
            );
        }
    }, {
        key: '_renderTableBodyRows',
        value: function _renderTableBodyRows() {
            var _this2 = this;

            var data = this.props.data;


            return mapIndexed(function (rowData, rowIndex) {
                var cellsData = mapIndexed(function (columnData, columnIndex) {
                    if (_this2._isIdColumn(columnIndex)) {
                        return null;
                    }

                    return _react2.default.createElement(
                        'td',
                        { key: 'column_' + columnIndex },
                        columnData
                    );
                }, rowData);

                return _react2.default.createElement(
                    'tr',
                    { key: 'row_' + rowIndex },
                    cellsData
                );
            }, data);
        }
    }, {
        key: '_renderTableBody',
        value: function _renderTableBody() {
            var data = this.props.data;

            var renderedData = (0, _ramda.isNil)(data) || (0, _ramda.isEmpty)(data) ? null : this._renderTableBodyRows();

            return _react2.default.createElement(
                'tbody',
                null,
                renderedData
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var componentContainer = this.props.classes.componentContainer;
            var _props2 = this.props,
                showTableHeader = _props2.showTableHeader,
                showTableFooter = _props2.showTableFooter;


            return _react2.default.createElement(
                'div',
                { className: componentContainer },
                _react2.default.createElement(
                    'table',
                    null,
                    showTableHeader && this._renderTableHeader(),
                    showTableFooter && this._renderTableFooter(),
                    this._renderTableBody()
                )
            );
        }
    }]);

    return RegularTableComponent;
}(_react.Component);

// exports


RegularTableComponent.displayName = 'RegularTableComponent';
RegularTableComponent.defaultProps = {
    showTableHeader: true,
    showTableFooter: true,

    columnNames: [],
    columnWidths: [],

    idColumnIndex: null,
    data: undefined
};
exports.default = (0, _reactJss2.default)(styles)(RegularTableComponent);