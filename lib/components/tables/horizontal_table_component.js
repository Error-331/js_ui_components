'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HorizontalTableClass = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

// local imports


exports.HorizontalTableComponent = HorizontalTableComponent;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _ramda = require('ramda');

var _theming = require('./../../theming');

var _common_styles = require('./../../theming/common_styles');

var _vertical_table_component = require('./vertical_table_component');

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
            display: 'flex',

            flexDirection: 'row',
            flexWrap: 'nowrap',

            justifyContent: 'flex-start',
            alignItems: 'stretch',
            alignContent: 'flex-start',

            '& > $tableHeader': {
                boxSizing: 'border-box',

                flexBasis: 'auto',
                flexGrow: 0,
                flexShrink: 1,

                '& > $tableHeaderCell': {
                    whiteSpace: 'nowrap',
                    extend: (0, _common_styles.commonHeaderCellStylesFunc)(theme)
                }
            }
        },

        tableHeader: {},
        tableHeaderCell: {}
    };
};

// component implementation

// $FlowFixMe decorators
var HorizontalTableClass = exports.HorizontalTableClass = (_dec = (0, _reactJss2.default)(styles), _dec(_class = (_temp = _class2 = function (_React$Component) {
    _inherits(HorizontalTableClass, _React$Component);

    function HorizontalTableClass() {
        _classCallCheck(this, HorizontalTableClass);

        return _possibleConstructorReturn(this, (HorizontalTableClass.__proto__ || Object.getPrototypeOf(HorizontalTableClass)).apply(this, arguments));
    }

    _createClass(HorizontalTableClass, [{
        key: '_gettableHeaderCellClassName',


        // endregion

        // region private props
        // endregion

        // region constructor
        // endregion

        // region business logic
        // endregion

        // region lifecycle methods
        // endregion

        // region style accessors

        // region static props
        value: function _gettableHeaderCellClassName() {
            return this.props.classes.tableHeaderCell;
        }
    }, {
        key: '_getTableHeaderClassName',
        value: function _getTableHeaderClassName() {
            return this.props.classes.tableHeader;
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
        key: '_shouldShowTableHeader',
        value: function _shouldShowTableHeader() {
            return (0, _ramda.defaultTo)(HorizontalTableClass.defaultProps.showTableHeader)(this.props.showTableHeader);
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
        key: '_renderTableHeaderCells',
        value: function _renderTableHeaderCells() {
            var _this2 = this;

            var columnIndex = -1;

            return (0, _ramda.map)(function (columnName) {
                ++columnIndex;

                return React.createElement(
                    'div',
                    {
                        className: _this2._gettableHeaderCellClassName(),
                        key: 'headerColumn_' + columnIndex
                    },
                    columnName
                );
            }, this._getColumnNames());
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
                this._renderTableHeaderCells()
            );
        }
    }, {
        key: '_renderComponentContainer',
        value: function _renderComponentContainer() {
            return React.createElement(
                'div',
                { className: this._getComponentContainerClassName() },
                this._renderTableHeader()
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

// exports

function HorizontalTableComponent(props) {
    return React.createElement(
        _theming.MainThemeContext.Consumer,
        null,
        function (windowDimensions) {
            return React.createElement(HorizontalTableClass, _extends({}, props, windowDimensions));
        }
    );
}

HorizontalTableComponent.displayName = 'HorizontalTableComponent';