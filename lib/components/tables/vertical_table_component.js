'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.VerticalTableClass = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

// local imports


exports.VerticalTableComponent = VerticalTableComponent;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _ramda = require('ramda');

var _main_theme_provider = require('./../../theming/providers/main_theme_provider');

var _table_styles = require('./../../theming/common_styles/table_styles');

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
                            extend: (0, _table_styles.commonHeaderCellStylesFunc)(theme)
                        }
                    }
                },

                '& > tbody': {
                    '& tr': {
                        '& td': {
                            extend: (0, _table_styles.commonCellStylesFunc)(theme)
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

// $FlowFixMe decorators
var VerticalTableClass = exports.VerticalTableClass = (_dec = (0, _reactJss2.default)(styles), _dec(_class = (_temp = _class2 = function (_React$Component) {
    _inherits(VerticalTableClass, _React$Component);

    function VerticalTableClass() {
        _classCallCheck(this, VerticalTableClass);

        return _possibleConstructorReturn(this, (VerticalTableClass.__proto__ || Object.getPrototypeOf(VerticalTableClass)).apply(this, arguments));
    }

    _createClass(VerticalTableClass, [{
        key: '_onTableClick',


        // endregion

        // region constructor
        // endregion

        // region lifecycle methods

        // region static props
        value: function _onTableClick(event) {
            var target = event.target;

            var rowElement = (0, _ramda.unless)(function (currentTarget) {
                return (0, _ramda.equals)('tr', currentTarget.tagName.toLowerCase());
            }, function (currentTarget) {
                return currentTarget.closest('tr');
            })(target);

            this._getOnCellClickCallback()(event, parseInt(rowElement.dataset['row-index']));
        }

        // endregion

        // region style accessors

    }, {
        key: '_getTHStyle',
        value: function _getTHStyle(columnIndex) {
            return {
                width: this._getColumnWidth(columnIndex)
            };
        }
    }, {
        key: '_getComponentContainerClassName',
        value: function _getComponentContainerClassName() {
            return this.props.classes.componentContainer;
        }

        // endregion

        // region label accessors
        // endregion

        // region state accessors
        // endregion

        // region prop accessors

    }, {
        key: '_getColumnNames',
        value: function _getColumnNames() {
            return (0, _ramda.defaultTo)(VerticalTableClass.defaultProps.columnNames)(this.props.columnNames);
        }
    }, {
        key: '_getColumnWidths',
        value: function _getColumnWidths() {
            return (0, _ramda.defaultTo)(VerticalTableClass.defaultProps.columnWidths)(this.props.columnWidths);
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
            return (0, _ramda.defaultTo)(VerticalTableClass.defaultProps.data)(this.props.data);
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
    }, {
        key: '_getOnCellClickCallback',
        value: function _getOnCellClickCallback() {
            return (0, _ramda.defaultTo)(VerticalTableClass.defaultProps.onCellClick)(this.props.onCellClick);
        }
    }, {
        key: '_shouldShowTableFooter',
        value: function _shouldShowTableFooter() {
            return (0, _ramda.defaultTo)(VerticalTableClass.defaultProps.showTableFooter)(this.props.showTableFooter);
        }
    }, {
        key: '_shouldShowTableHeader',
        value: function _shouldShowTableHeader() {
            return (0, _ramda.defaultTo)(VerticalTableClass.defaultProps.showTableHeader)(this.props.showTableHeader);
        }

        // endregion

        // region handlers
        // endregion

        // region render methods

    }, {
        key: '_renderTableBodyColumn',
        value: function _renderTableBodyColumn(columnData, columnIndex) {
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
                    { key: 'row_' + rowIndex, 'data-row-index': rowIndex },
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
                { onClick: (0, _ramda.bind)(this._onTableClick, this) },
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
                        style: _this4._getTHStyle(columnIndex),
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
            return React.createElement(
                'table',
                null,
                this._shouldShowTableHeader() && this._renderTableHeader(),
                this._shouldShowTableFooter() && this._renderTableFooter(),
                this._renderTableBody()
            );
        }
    }, {
        key: '_renderComponentContainer',
        value: function _renderComponentContainer() {
            return React.createElement(
                'div',
                { className: this._getComponentContainerClassName() },
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

// exports

function VerticalTableComponent(props) {
    return React.createElement(
        _main_theme_provider.MainThemeContext.Consumer,
        null,
        function (windowDimensions) {
            return React.createElement(VerticalTableClass, _extends({}, props, windowDimensions));
        }
    );
}

VerticalTableComponent.displayName = 'VerticalTableComponent';