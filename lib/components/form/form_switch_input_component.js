'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FormSwitchInputComponent = exports.FormSwitchInputComponentClass = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ramda = require('ramda');

var _dom_helpers = require('@webfuturistics/design_components/lib/helpers/general/dom_helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// styles definition


// local imports


// type definitions
var switchSliderBodyWidth = 36; // px
var switchSliderBodyHeight = 14; // px

var switchSliderHandlerWidth = 20; // px
var switchSliderHandlerHeight = 20; // px

var switchSliderHandlerTop = (switchSliderHandlerHeight - switchSliderBodyHeight) / 2;
var switchSliderHandlerRight = switchSliderBodyWidth - switchSliderHandlerWidth;

var switchSliderBodyDisabledClasses = function switchSliderBodyDisabledClasses(theme) {
    return {
        backgroundColor: theme.inputStyles.disabledColor
    };
};

var switchSliderHandleDisabledClasses = function switchSliderHandleDisabledClasses(theme) {
    return {
        backgroundColor: theme.inputStyles.switchSliderHandleInactive
    };
};

var styles = function styles(theme) {
    return {
        componentContainer: {
            boxSizing: 'border-box',
            display: 'flex',

            flexBasis: 'auto',
            flexGrow: 0,
            flexShrink: 1,

            flexDirection: 'row',
            flexWrap: 'nowrap',

            justifyContent: 'flex-start',
            alignItems: 'center',
            alignContent: 'flex-start',

            '& > $switchLabel': {
                boxSizing: 'border-box',

                flexBasis: 'auto',
                flexShrink: 1,
                flexGrow: 0,

                fontFamily: theme.inputStyles.fontStack,
                fontSize: theme.inputStyles.fontSize,

                color: theme.inputStyles.labelColor,

                '&.disabled': {
                    color: theme.inputStyles.disabledColor
                }
            },

            '& > $switchLeftLabel': {
                paddingRight: theme.inputStyles.switchLabelOffset + 'px'
            },

            '& > $switchRightLabel': {
                paddingLeft: theme.inputStyles.switchLabelOffset + 'px'
            },

            '& > $inputControl': {
                display: 'none',

                '&:checked + $inputControlLabel > $switchSliderBodyContainer': {
                    backgroundColor: theme.inputStyles.switchSliderActiveBodyBGColor
                },

                '&:checked + $inputControlLabel > $switchSliderHandleContainer': {
                    transform: 'translate(' + switchSliderHandlerRight + 'px, -' + switchSliderHandlerTop + 'px)',
                    backgroundColor: theme.inputStyles.switchSliderHandleActive
                },

                '&:checked + $inputControlLabel > $switchSliderBodyContainer.disabled': switchSliderBodyDisabledClasses(theme),
                '&:checked + $inputControlLabel > $switchSliderHandleContainer.disabled': switchSliderHandleDisabledClasses(theme)
            },

            '& > $inputControlLabel': {
                boxSizing: 'border-box',
                position: 'relative',

                flexBasis: 'auto',
                flexGrow: 0,
                flexShrink: 1,

                backgroundColor: theme.inputStyles.bgColor,

                '& > $switchSliderBodyContainer': {
                    boxSizing: 'border-box',

                    width: switchSliderBodyWidth + 'px',
                    height: switchSliderBodyHeight + 'px',

                    borderRadius: '15px',

                    backgroundColor: theme.inputStyles.switchSliderInactiveBodyBGColor,

                    '&.disabled': switchSliderBodyDisabledClasses(theme)
                },

                '& > $switchSliderHandleContainer': {
                    position: 'absolute',

                    left: '0px',
                    top: '0px',

                    width: switchSliderHandlerWidth + 'px',
                    height: switchSliderHandlerHeight + 'px',

                    borderRadius: '50%',

                    backgroundColor: theme.inputStyles.switchSliderHandleInactive,
                    boxShadow: '0 3px 1px -2px rgba(0, 0, 0, 0.14), 0 2px 2px 0 rgba(0, 0, 0, 0.098), 0 1px 5px 0 rgba(0, 0, 0, 0.084)',

                    transform: 'translate(0px, -' + switchSliderHandlerTop + 'px)',
                    transition: 'all 0.3s ease',

                    '&.disabled': switchSliderHandleDisabledClasses(theme)
                }
            }
        },

        switchLabel: {},
        switchLeftLabel: {},
        switchRightLabel: {},

        inputControl: {},

        inputControlLabel: {},

        switchSliderBodyContainer: {},
        switchSliderHandleContainer: {}
    };
};

/**
 * Switch input component styled according to material-UI guidelines.
 * Component is intended to be used as a parameter for ['Redux-form' Field component](#reduxformswitchinputcomponent).
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
var FormSwitchInputComponentClass = exports.FormSwitchInputComponentClass = (_temp = _class = function (_React$Component) {
    _inherits(FormSwitchInputComponentClass, _React$Component);

    // endregion

    // region constructor
    function FormSwitchInputComponentClass(props) {
        _classCallCheck(this, FormSwitchInputComponentClass);

        var _this = _possibleConstructorReturn(this, (FormSwitchInputComponentClass.__proto__ || Object.getPrototypeOf(FormSwitchInputComponentClass)).call(this, props));

        _this._id = null;


        _this._id = _this._createInputId();
        return _this;
    }

    // endregion

    // region lifecycle methods
    // endregion

    // region style accessors

    // region static props


    _createClass(FormSwitchInputComponentClass, [{
        key: '_getLeftLabelClasses',
        value: function _getLeftLabelClasses() {
            var disabled = this.props.disabled;


            return (0, _classnames2.default)(this.props.classes.switchLabel, this.props.classes.switchLeftLabel, { 'disabled': disabled });
        }
    }, {
        key: '_getRightLabelClasses',
        value: function _getRightLabelClasses() {
            var disabled = this.props.disabled;


            return (0, _classnames2.default)(this.props.classes.switchLabel, this.props.classes.switchRightLabel, { 'disabled': disabled });
        }
    }, {
        key: '_getInputClasses',
        value: function _getInputClasses() {
            var disabled = this.props.disabled;


            return (0, _classnames2.default)(this.props.classes.inputControl, { 'disabled': disabled });
        }
    }, {
        key: '_getSliderBodyClasses',
        value: function _getSliderBodyClasses() {
            var disabled = this.props.disabled;


            return (0, _classnames2.default)(this.props.classes.switchSliderBodyContainer, { 'disabled': disabled });
        }
    }, {
        key: '_getSliderHandleClasses',
        value: function _getSliderHandleClasses() {
            var disabled = this.props.disabled;


            return (0, _classnames2.default)(this.props.classes.switchSliderHandleContainer, { 'disabled': disabled });
        }

        // endregion

        // region label accessors
        // endregion

        // region state accessors

    }, {
        key: '_createInputId',
        value: function _createInputId() {
            var _getInputData2 = this._getInputData(),
                name = _getInputData2.name;

            var randomIdNumber = (0, _dom_helpers.generateRandomIdNumber)();

            if ((0, _ramda.isNil)(name)) {
                throw new Error('Name cannot be null, cannot create input ID');
            }

            return 'switch_input_' + name + '_' + randomIdNumber;
        }

        // endregion

        // region prop accessors

    }, {
        key: '_isChecked',
        value: function _isChecked() {
            var _getInputData3 = this._getInputData(),
                checked = _getInputData3.checked;

            return (0, _ramda.isNil)(checked) ? false : checked;
        }
    }, {
        key: '_getInputData',
        value: function _getInputData() {
            var input = this.props.input;

            return (0, _ramda.isNil)(input) ? (0, _ramda.clone)(FormSwitchInputComponentClass.defaultProps.input) : input;
        }

        // endregion

        // region handlers
        // endregion

        // region render methods

    }, {
        key: '_renderLeftLabel',
        value: function _renderLeftLabel() {
            return React.createElement(
                'div',
                { className: this._getLeftLabelClasses() },
                this.props.leftLabel
            );
        }
    }, {
        key: '_renderRightLabel',
        value: function _renderRightLabel() {
            return React.createElement(
                'div',
                { className: this._getRightLabelClasses() },
                this.props.rightLabel
            );
        }
    }, {
        key: '_renderSwitch',
        value: function _renderSwitch() {
            return React.createElement(
                'label',
                { htmlFor: this._id, className: this.props.classes.inputControlLabel },
                React.createElement('div', { className: this._getSliderBodyClasses() }),
                React.createElement('div', { className: this._getSliderHandleClasses() })
            );
        }
    }, {
        key: '_renderInput',
        value: function _renderInput() {
            var disabled = this.props.disabled;

            var _getInputData4 = this._getInputData(),
                value = _getInputData4.value,
                name = _getInputData4.name,
                onChange = _getInputData4.onChange;

            var checkedParam = this._isChecked() ? 'checked' : '';
            var disabledParam = disabled ? 'disabled' : undefined;

            return React.createElement('input', {
                className: this._getInputClasses(),

                disabled: disabledParam,
                checked: checkedParam,

                type: 'checkbox',
                value: value,
                name: name,
                id: this._id,

                onChange: onChange
            });
        }
    }, {
        key: '_renderInputContainer',
        value: function _renderInputContainer() {
            return React.createElement(
                'div',
                { className: this.props.classes.componentContainer },
                this._renderLeftLabel(),
                this._renderInput(),
                this._renderSwitch(),
                this._renderRightLabel()
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return this._renderInputContainer();
        }

        // endregion

    }]);

    return FormSwitchInputComponentClass;
}(React.Component), _class.displayName = 'FormSwitchInputComponent', _class.defaultProps = {
    disabled: false,

    leftLabel: '',
    rightLabel: '',

    input: _defineProperty({
        name: '',
        value: '',

        onChange: function onChange() {},
        onFocus: function onFocus() {},
        onBlur: function onBlur() {},
        onDrop: function onDrop() {},
        onDragStart: function onDragStart() {}
    }, 'onFocus', function onFocus() {}),

    classes: {}
}, _temp);

// exports

var FormSwitchInputComponent = exports.FormSwitchInputComponent = (0, _reactJss2.default)(styles)(FormSwitchInputComponentClass);