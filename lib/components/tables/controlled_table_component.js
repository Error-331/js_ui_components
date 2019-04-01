'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ControlledTableComponent = exports.ControlledTableComponentClass = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

// local imports


var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _ramda = require('ramda');

var _regular_table_component = require('./regular_table_component');

var _elements_row = require('./../layout/alignment/elements/elements_row');

var _form_checkbox_input_component = require('./../form/form_checkbox_input_component');

var _font_icon = require('./../layout/icons/font_icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// styles definition


// type definitions
var styles = function styles(theme) {
    return {
        controlIcon: {
            cursor: 'pointer'
        }
    };
};

/**
 * Controlled table component to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
var ControlledTableComponentClass = exports.ControlledTableComponentClass = (_temp = _class = function (_React$Component) {
    _inherits(ControlledTableComponentClass, _React$Component);

    // endregion

    // region constructor

    // region static props
    function ControlledTableComponentClass(props) {
        _classCallCheck(this, ControlledTableComponentClass);

        var _this = _possibleConstructorReturn(this, (ControlledTableComponentClass.__proto__ || Object.getPrototypeOf(ControlledTableComponentClass)).call(this, props));

        var self = _this;

        self._prepareData = (0, _ramda.bind)(self._prepareData, _this);
        self._prepareColumnNames = (0, _ramda.bind)(self._prepareColumnNames, _this);
        self._prepareIdColumnIndex = (0, _ramda.bind)(self._prepareIdColumnIndex, _this);
        return _this;
    }

    // endregion

    // region business logic


    _createClass(ControlledTableComponentClass, [{
        key: '_prepareIdColumnIndex',
        value: function _prepareIdColumnIndex(idColumnIndex) {
            return this._shouldShowRowSelector() ? idColumnIndex + 1 : idColumnIndex;
        }
    }, {
        key: '_prepareRowControls',
        value: function _prepareRowControls(rowControls, rowIndex) {
            var _this2 = this;

            var index = -1;
            var controls = (0, _ramda.map)(function (rowControl) {
                index++;

                var iconClassName = rowControl.iconClassName,
                    onClickHandler = rowControl.onClickHandler;

                onClickHandler = (0, _ramda.is)(Object, onClickHandler) ? (0, _ramda.curry)(onClickHandler)(_ramda.__, rowIndex) : null;

                return React.createElement(_font_icon.FontIcon, {
                    key: 'control_' + index,
                    size: 'small',
                    accent: true,
                    className: _this2._getControlIconClassName(),
                    iconClassName: iconClassName,
                    onClick: onClickHandler
                });
            }, rowControls);

            return React.createElement(
                _elements_row.ElementsRow,
                { alignment: 'right' },
                controls
            );
        }
    }, {
        key: '_prepareColumnNames',
        value: function _prepareColumnNames(columnNames) {
            if (!this._shouldShowRowControls()) {
                return columnNames;
            }

            columnNames = this._shouldShowRowControls() ? (0, _ramda.append)('', columnNames) : columnNames;
            columnNames = this._shouldShowRowSelector() ? (0, _ramda.prepend)(React.createElement(_form_checkbox_input_component.FormCheckboxInputComponent, { variant: 1 }), columnNames) : columnNames;

            return columnNames;
        }
    }, {
        key: '_addRowControls',
        value: function _addRowControls(dataRow) {
            var indexColumn = this._getIdColumnIndex();
            var rowControls = this._getRowControls();

            var preparedControls = this._prepareRowControls(rowControls, dataRow[indexColumn]);
            return (0, _ramda.append)(preparedControls, dataRow);
        }
    }, {
        key: '_addRowSelector',
        value: function _addRowSelector(dataRow) {
            return (0, _ramda.prepend)(React.createElement(_form_checkbox_input_component.FormCheckboxInputComponent, { variant: 1 }), dataRow);
        }
    }, {
        key: '_prepareData',
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
        }

        // endregion

        // region lifecycle methods
        // endregion

        // region style accessors

    }, {
        key: '_getControlIconClassName',
        value: function _getControlIconClassName() {
            return this.props.classes.controlIcon;
        }

        // endregion

        // region label accessors
        // endregion

        // region state accessors
        // endregion

        // region prop accessors

    }, {
        key: '_shouldShowRowSelector',
        value: function _shouldShowRowSelector() {
            return !(0, _ramda.isNil)(this._getIdColumnIndex()) && !(0, _ramda.isNil)(this._areRowsSelectable());
        }
    }, {
        key: '_shouldShowRowControls',
        value: function _shouldShowRowControls() {
            return !(0, _ramda.isNil)(this._getIdColumnIndex()) && !(0, _ramda.isNil)(this._getRowControls());
        }
    }, {
        key: '_areRowsSelectable',
        value: function _areRowsSelectable() {
            return (0, _ramda.defaultTo)(ControlledTableComponentClass.defaultProps.selectableRows)(this.props.selectableRows);
        }
    }, {
        key: '_getRowControls',
        value: function _getRowControls() {
            return (0, _ramda.defaultTo)(ControlledTableComponentClass.defaultProps.rowControls)(this.props.rowControls);
        }
    }, {
        key: '_getColumnNames',
        value: function _getColumnNames() {
            return (0, _ramda.defaultTo)(ControlledTableComponentClass.defaultProps.columnNames)(this.props.columnNames);
        }
    }, {
        key: '_getData',
        value: function _getData() {
            return (0, _ramda.defaultTo)((0, _ramda.clone)(ControlledTableComponentClass.defaultProps.data))(this.props.data);
        }
    }, {
        key: '_getIdColumnIndex',
        value: function _getIdColumnIndex() {
            return (0, _ramda.defaultTo)(ControlledTableComponentClass.defaultProps.idColumnIndex)(this.props.idColumnIndex);
        }

        // endregion

        // region handlers
        // endregion

        // region render methods

    }, {
        key: 'render',
        value: function render() {
            return React.createElement(_regular_table_component.RegularTableComponent, _extends({}, this.props, {
                idColumnIndex: (0, _ramda.unless)(_ramda.isNil, this._prepareIdColumnIndex)(this._getIdColumnIndex()),
                data: (0, _ramda.unless)(_ramda.isNil, this._prepareData)(this._getData()),
                columnNames: (0, _ramda.unless)(_ramda.isNil, this._prepareColumnNames)(this._getColumnNames())
            }));
        }

        // endregion

    }]);

    return ControlledTableComponentClass;
}(React.Component), _class.displayName = 'ControlledTableComponent', _class.defaultProps = {
    idColumnIndex: null,
    selectableRows: false,
    rowControls: null,

    columnNames: [],
    data: null
}, _temp);

// exports

var ControlledTableComponent = exports.ControlledTableComponent = (0, _reactJss2.default)(styles)(ControlledTableComponentClass);