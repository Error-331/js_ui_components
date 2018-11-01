'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RegularTableClass = exports.VERTICAL_TABLE_TYPE = exports.HORIZONTAL_TABLE_TYPE = exports.SPECIFIC_COLUMN_TYPE_LONG_TEXT = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

// local imports


exports.RegularTableComponent = RegularTableComponent;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _ramda = require('ramda');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _table_styles = require('./../../theming/common_styles/table_styles');

var _main_theme_provider = require('./../../theming/providers/main_theme_provider');

var _text_block = require('./../layout/text/text_block');

var _form_checkbox_variant2_component = require('./../form/form_checkbox_variants/form_checkbox_variant2_component');

var _horizontal_table_component = require('./horizontal_table_component');

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
        placeholderContainer: {
            width: '20px',
            borderTop: '1px solid ' + theme.tableStyles.cellBorderColor
        },

        regularTextContainer: {
            extend: [(0, _table_styles.commonCellContentStylesFunc)(theme), (0, _table_styles.longTextCellStylesFunc)()],
            height: theme.tableStyles.cellLineHeight + 'px'
        },

        longTextContainer: {
            extend: [(0, _table_styles.commonCellContentStylesFunc)(theme), (0, _table_styles.longTextCellStylesFunc)()],
            height: theme.tableStyles.cellLineHeight * 2 + 'px'
        }
    };
};

// constants definition
var SPECIFIC_COLUMN_TYPE_LONG_TEXT = exports.SPECIFIC_COLUMN_TYPE_LONG_TEXT = 'SPECIFIC_COLUMN_TYPE_LONG_TEXT';

var HORIZONTAL_TABLE_TYPE = exports.HORIZONTAL_TABLE_TYPE = 'horizontal';
var VERTICAL_TABLE_TYPE = exports.VERTICAL_TABLE_TYPE = 'vertical';

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
var RegularTableClass = exports.RegularTableClass = (_dec = (0, _reactJss2.default)(styles), _dec(_class = (_temp = _class2 = function (_React$Component) {
    _inherits(RegularTableClass, _React$Component);

    // endregion

    // region private props
    // endregion

    // region constructor

    // region static props
    function RegularTableClass(props) {
        _classCallCheck(this, RegularTableClass);

        var _this = _possibleConstructorReturn(this, (RegularTableClass.__proto__ || Object.getPrototypeOf(RegularTableClass)).call(this, props));

        _this.state = {
            tableType: HORIZONTAL_TABLE_TYPE
        };
        return _this;
    }

    // endregion

    // region business logic


    _createClass(RegularTableClass, [{
        key: '_prepareNilColumnData',
        value: function _prepareNilColumnData() {
            var showPlaceholder = this._getShowPlaceholder();
            return showPlaceholder ? React.createElement('div', { className: this._getPlaceholderContainerClassName() }) : '';
        }
    }, {
        key: '_prepareStringColumn',
        value: function _prepareStringColumn(columnData) {
            return React.createElement(
                _text_block.TextBlock,
                { className: this._getRegularTextContainerClassName() },
                columnData
            );
        }
    }, {
        key: '_prepareLongTextColumn',
        value: function _prepareLongTextColumn(columnData) {
            var data = columnData.data;


            return React.createElement(
                _text_block.TextBlock,
                { className: this._getLongTextContainerClassName() },
                data
            );
        }
    }, {
        key: '_prepareSpecificColumnData',
        value: function _prepareSpecificColumnData(columnData) {
            if ((typeof columnData === 'undefined' ? 'undefined' : _typeof(columnData)) !== 'object' || (0, _ramda.isNil)(columnData)) {
                return this._prepareNilColumnData();
            }

            if (columnData instanceof React.Component) {
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
        key: '_prepareColumnData',
        value: function _prepareColumnData(columnData) {
            return (0, _ramda.cond)([[_ramda.isNil, (0, _ramda.bind)(this._prepareNilColumnData, this)], [function (columnData) {
                return _moment2.default.isMoment(columnData);
            }, function (columnData) {
                return columnData.format('YYYY-M-d H:mm:ss');
            }], [(0, _ramda.is)(Date), function (columnData) {
                return (0, _moment2.default)(columnData).format('YYYY-M-d H:mm:ss');
            }], [(0, _ramda.is)(Boolean), function (columnData) {
                return React.createElement(_form_checkbox_variant2_component.FormCheckboxVariant2Component, { forceCheck: columnData });
            }], [(0, _ramda.is)(String), (0, _ramda.bind)(this._prepareStringColumn, this)], [(0, _ramda.is)(Object), (0, _ramda.bind)(this._prepareSpecificColumnData, this)], [_ramda.T, (0, _ramda.bind)(this._prepareNilColumnData, this)]])(columnData);
        }

        // endregion

        // region lifecycle methods
        // endregion

        // region style accessors

    }, {
        key: '_getLongTextContainerClassName',
        value: function _getLongTextContainerClassName() {
            return this.props.classes.longTextContainer;
        }
    }, {
        key: '_getRegularTextContainerClassName',
        value: function _getRegularTextContainerClassName() {
            return this.props.classes.regularTextContainer;
        }
    }, {
        key: '_getPlaceholderContainerClassName',
        value: function _getPlaceholderContainerClassName() {
            return this.props.classes.placeholderContainer;
        }

        // endregion

        // region label accessors
        // endregion

        // region state accessors
        // endregion

        // region prop accessors

    }, {
        key: '_getShowPlaceholder',
        value: function _getShowPlaceholder() {
            return (0, _ramda.defaultTo)(RegularTableClass.defaultProps.showPlaceholder)(this.props.showPlaceholder);
        }
    }, {
        key: '_getData',
        value: function _getData() {
            return (0, _ramda.defaultTo)((0, _ramda.clone)(RegularTableClass.defaultProps.data))(this.props.data);
        }

        // endregion

        // region handlers
        // endregion

        // region render methods

    }, {
        key: 'render',
        value: function render() {
            var data = this._getData();

            if ((0, _ramda.isNil)(data)) {
                return null;
            }

            var preparedData = (0, _ramda.map)((0, _ramda.map)((0, _ramda.bind)(this._prepareColumnData, this)), data);

            return (0, _ramda.ifElse)((0, _ramda.equals)(HORIZONTAL_TABLE_TYPE), (0, _ramda.always)(React.createElement(_horizontal_table_component.HorizontalTableComponent, _extends({}, (0, _ramda.omit)(['data', 'classes'], this.props), { data: data }))), (0, _ramda.always)(React.createElement(_vertical_table_component.VerticalTableComponent, _extends({}, (0, _ramda.omit)(['data', 'classes'], this.props), { data: preparedData }))))(this.state.tableType);
        }

        // endregion

    }]);

    return RegularTableClass;
}(React.Component), _class2.displayName = 'RegularTableClass', _class2.defaultProps = {
    showPlaceholder: false,
    data: null
}, _temp)) || _class);

// exports

function RegularTableComponent(props) {
    return React.createElement(
        _main_theme_provider.MainThemeContext.Consumer,
        null,
        function (windowDimensions) {
            return React.createElement(RegularTableClass, _extends({}, props, windowDimensions));
        }
    );
}

RegularTableComponent.displayName = 'RegularTableComponent';