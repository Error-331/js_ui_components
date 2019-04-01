'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HorizontalTableComponent = exports.HorizontalTableClass = exports.contentTableStylesFunc = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

// local imports


var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

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
var contentTableStylesFunc = exports.contentTableStylesFunc = function contentTableStylesFunc(theme) {
    return {
        borderSpacing: '0px',

        '& > tbody': {
            '& > tr': {
                '& > td': {
                    boxSizing: 'border-box',
                    extend: (0, _table_styles.commonHorizontalTableCellStylesFunc)(theme)
                }
            }
        }
    };
};

var styles = function styles(theme) {
    return {
        componentContainer: {
            boxSizing: 'border-box',
            display: 'grid',

            width: '100%',

            gridTemplateColumns: 'max-content 1fr',
            gridTemplateRows: 'max-content max-content',

            '& > $tableHeader': {
                boxSizing: 'border-box',
                overflow: 'hidden',

                '& > $contentTable': {
                    extend: contentTableStylesFunc(theme)
                }
            },

            '& > $tableBody': {
                boxSizing: 'border-box',
                overflow: 'scroll',

                '& > $contentTable': {
                    extend: contentTableStylesFunc(theme)
                }
            },

            '&.withHeader': {
                gridTemplateRows: 'max-content max-content'
            },

            '&.withoutHeader': {
                gridTemplateColumns: '1fr'
            }
        },

        tableHeader: {},

        tableBody: {},
        contentTable: {}
    };
};

// component implementation

/**
 * Horizontal table component to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// $FlowFixMe decorators
var HorizontalTableClass = (_dec = (0, _reactJss2.default)(styles), _dec(_class = (_temp = _class2 = function (_React$Component) {
    _inherits(HorizontalTableClass, _React$Component);

    // endregion

    // region constructor


    // endregion

    // region private props

    // region static props
    function HorizontalTableClass(props) {
        _classCallCheck(this, HorizontalTableClass);

        var _this = _possibleConstructorReturn(this, (HorizontalTableClass.__proto__ || Object.getPrototypeOf(HorizontalTableClass)).call(this, props));

        _this.$tableBody = React.createRef();
        return _this;
    }

    // endregion

    // region business logic
    // endregion

    // region lifecycle methods
    // endregion

    // region style accessors


    _createClass(HorizontalTableClass, [{
        key: '_getContentTableWidth',
        value: function _getContentTableWidth() {
            return this._getContentTableCelWidth() * this._getDataRowsCount();
        }
    }, {
        key: '_getContentTableCelWidth',
        value: function _getContentTableCelWidth() {
            var tableWidth = this._getTableContainerWidth();
            var columnCount = this._getVisibleColumnCount();

            return tableWidth / columnCount;
        }
    }, {
        key: '_getTableContainerWidth',
        value: function _getTableContainerWidth() {
            if ((0, _ramda.isNil)(this.$tableBody) || (0, _ramda.isNil)(this.$tableBody.current)) {
                return 0;
            }

            return this.$tableBody.current.clientWidth;
        }
    }, {
        key: '_getContentTableCellStyle',
        value: function _getContentTableCellStyle() {
            return {
                maxWidth: this._getContentTableCelWidth() + 'px'
            };
        }
    }, {
        key: '_getContentTableStyle',
        value: function _getContentTableStyle() {
            return {
                width: this._getContentTableWidth() + 'px'
            };
        }
    }, {
        key: '_getContentTableClassName',
        value: function _getContentTableClassName() {
            return this.props.classes.contentTable;
        }
    }, {
        key: '_getTableBodyClassName',
        value: function _getTableBodyClassName() {
            return this.props.classes.tableBody;
        }
    }, {
        key: '_getTableHeaderClassName',
        value: function _getTableHeaderClassName() {
            return this.props.classes.tableHeader;
        }
    }, {
        key: '_getComponentContainerClassName',
        value: function _getComponentContainerClassName() {
            return (0, _classnames2.default)(this.props.classes.componentContainer, {
                'withHeader': this._shouldShowTableHeader(),
                'withoutHeader': !this._shouldShowTableHeader()
            });
        }

        // endregion

        // region label accessors
        // endregion

        // region state accessors
        // endregion

        // region prop accessors

    }, {
        key: '_getDataRowsCount',
        value: function _getDataRowsCount() {
            return (0, _ramda.length)(this._getData());
        }
    }, {
        key: '_getDataColumnsCount',
        value: function _getDataColumnsCount() {
            var columnsCount = this._getColumnsCount();

            if ((0, _ramda.isNil)(this._getIdColumnIndex())) {
                return columnsCount;
            }

            return columnsCount + 1;
        }
    }, {
        key: '_getColumnsCount',
        value: function _getColumnsCount() {
            return (0, _ramda.length)(this._getColumnNames());
        }
    }, {
        key: '_getVisibleColumnCount',
        value: function _getVisibleColumnCount() {
            return (0, _ramda.defaultTo)(4)(this.props.visibleColumnCount);
        }
    }, {
        key: '_shouldShowTableHeader',
        value: function _shouldShowTableHeader() {
            return (0, _ramda.defaultTo)(HorizontalTableClass.defaultProps.showTableHeader)(this.props.showTableHeader);
        }
    }, {
        key: '_getData',
        value: function _getData() {
            return (0, _ramda.defaultTo)(HorizontalTableClass.defaultProps.data)(this.props.data);
        }
    }, {
        key: '_getIdColumnIndex',
        value: function _getIdColumnIndex() {
            return (0, _ramda.defaultTo)(HorizontalTableClass.defaultProps.idColumnIndex)(this.props.idColumnIndex);
        }
    }, {
        key: '_getColumnNames',
        value: function _getColumnNames() {
            return (0, _ramda.defaultTo)(HorizontalTableClass.defaultProps.columnNames)(this.props.columnNames);
        }

        // endregion

        // region handlers
        // endregion

        // region render methods

    }, {
        key: '_renderContentTableCells',
        value: function _renderContentTableCells(columnIndex) {
            var cellStyle = this._getContentTableCellStyle();

            return (0, _ramda.addIndex)(_ramda.map)(function (row, rowIndex) {
                return React.createElement(
                    'td',
                    { key: 'column_' + rowIndex + '_' + columnIndex, style: cellStyle },
                    row[columnIndex]
                );
            }, this._getData());
        }
    }, {
        key: '_renderContentTableRows',
        value: function _renderContentTableRows() {
            var _this2 = this;

            return (0, _ramda.map)(function (columnIndex) {
                if (columnIndex === _this2._getIdColumnIndex()) {
                    return null;
                }

                return React.createElement(
                    'tr',
                    { key: columnIndex },
                    _this2._renderContentTableCells(columnIndex)
                );
            }, (0, _ramda.range)(0, this._getDataColumnsCount()));
        }
    }, {
        key: '_renderTableHeaderCells',
        value: function _renderTableHeaderCells() {
            var columnIndex = -1;

            return (0, _ramda.map)(function (columnName) {
                ++columnIndex;

                return React.createElement(
                    'tr',
                    { key: 'headerColumn_' + columnIndex },
                    React.createElement(
                        'td',
                        null,
                        columnName
                    )
                );
            }, this._getColumnNames());
        }
    }, {
        key: '_renderTableBody',
        value: function _renderTableBody() {
            return React.createElement(
                'div',
                { className: this._getTableBodyClassName(), ref: this.$tableBody },
                React.createElement(
                    'table',
                    {
                        className: this._getContentTableClassName(),
                        style: this._getContentTableStyle()
                    },
                    React.createElement(
                        'tbody',
                        null,
                        this._renderContentTableRows()
                    )
                )
            );
        }
    }, {
        key: '_renderTableHeader',
        value: function _renderTableHeader() {
            if (!this._shouldShowTableHeader()) {
                return null;
            }
            return React.createElement(
                'div',
                { className: this._getTableHeaderClassName() },
                React.createElement(
                    'table',
                    { className: this._getContentTableClassName() },
                    React.createElement(
                        'tbody',
                        null,
                        this._renderTableHeaderCells()
                    )
                )
            );
        }
    }, {
        key: '_renderComponentContainer',
        value: function _renderComponentContainer() {
            return React.createElement(
                'div',
                { className: this._getComponentContainerClassName() },
                this._renderTableHeader(),
                this._renderTableBody()
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return this._renderComponentContainer();
        }

        // endregion

    }]);

    return HorizontalTableClass;
}(React.Component), _class2.displayName = 'HorizontalTableClass', _class2.defaultProps = {
    showTableHeader: true,

    columnNames: [],
    idColumnIndex: null,
    data: [],

    onCellClick: function onCellClick() {}
}, _temp)) || _class);


function HorizontalTableComponent(props) {
    return React.createElement(
        _main_theme_provider.MainThemeContext.Consumer,
        null,
        function (windowDimensions) {
            return React.createElement(HorizontalTableClass, _extends({}, props, windowDimensions));
        }
    );
}

HorizontalTableComponent.displayName = 'HorizontalTableComponent';

// exports
exports.HorizontalTableClass = HorizontalTableClass;
exports.HorizontalTableComponent = HorizontalTableComponent;