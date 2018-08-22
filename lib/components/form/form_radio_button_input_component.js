'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FormRadioButtonInputComponent = exports.FormRadioButtonInputComponentClass = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ramda = require('ramda');

var _design_components = require('@webfuturistics/design_components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// styles definition


// local imports


// type definitions
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

            cursor: 'pointer',

            '& > $checkboxLabel': {
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

            '& > $checkboxLeftLabel': {
                paddingRight: theme.inputStyles.switchLabelOffset + 'px'
            },

            '& > $checkboxRightLabel': {
                paddingLeft: theme.inputStyles.switchLabelOffset + 'px'
            },

            '& > $inputControl': {
                display: 'none',

                '&:checked + $inputControlLabel > $inputControlIcon': {
                    transform: 'scale(1)'
                },

                '&:checked + $inputControlLabel.disabled > $inputControlIcon': {
                    backgroundColor: theme.inputStyles.disabledColor
                }
            },

            '& > $inputControlLabel': {
                boxSizing: 'border-box',
                display: 'flex',

                flexDirection: 'column',
                flexWrap: 'nowrap',

                justifyContent: 'center',
                alignItems: 'stretch',
                alignContent: 'flex-start',

                width: '20px',
                height: '20px',

                padding: '3px',

                borderRadius: '50%',
                border: '2px solid ' + theme.inputStyles.switchSliderActiveBodyBGColor,

                '& > $inputControlIcon': {
                    flexBasis: 'auto',
                    flexShrink: 0,
                    flexGrow: 1,

                    borderRadius: '50%',

                    backgroundColor: theme.inputStyles.switchSliderHandleActive,

                    transform: 'scale(0)',

                    transition: 'all .3s ease',
                    transitionProperty: 'transform, border-color'
                }
            },

            '& > $inputControlLabel.disabled': {
                borderColor: theme.inputStyles.disabledColor
            }
        },

        checkboxLabel: {},
        checkboxLeftLabel: {},
        checkboxRightLabel: {},

        inputControl: {},
        inputControlLabel: {},
        inputControlIcon: {}
    };
};

/**
 * Radio button input component styled according to material-UI guidelines.
 * Component is intended to be used as a parameter for ['Redux-form' Field component](#reduxformradiobuttoninputcomponent).
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
var FormRadioButtonInputComponentClass = exports.FormRadioButtonInputComponentClass = (_temp = _class = function (_React$Component) {
    _inherits(FormRadioButtonInputComponentClass, _React$Component);

    // endregion

    // region constructor
    function FormRadioButtonInputComponentClass(props) {
        _classCallCheck(this, FormRadioButtonInputComponentClass);

        var _this = _possibleConstructorReturn(this, (FormRadioButtonInputComponentClass.__proto__ || Object.getPrototypeOf(FormRadioButtonInputComponentClass)).call(this, props));

        _this._id = null;


        _this._id = _this._createInputId();
        return _this;
    }

    // endregion

    // region lifecycle methods
    // endregion

    // region style accessors

    // region static props


    _createClass(FormRadioButtonInputComponentClass, [{
        key: '_getLabelClasses',
        value: function _getLabelClasses() {
            var _props = this.props,
                disabled = _props.disabled,
                labelPosition = _props.labelPosition,
                _props$classes = _props.classes,
                checkboxLabel = _props$classes.checkboxLabel,
                checkboxLeftLabel = _props$classes.checkboxLeftLabel,
                checkboxRightLabel = _props$classes.checkboxRightLabel;


            return (0, _classnames2.default)(checkboxLabel, (0, _ramda.ifElse)((0, _ramda.equals)('left'), (0, _ramda.always)(checkboxLeftLabel), (0, _ramda.always)(checkboxRightLabel))(labelPosition), { 'disabled': disabled });
        }
    }, {
        key: '_getInputClasses',
        value: function _getInputClasses() {
            var disabled = this.props.disabled;


            return (0, _classnames2.default)(this.props.classes.inputControl, { 'disabled': disabled });
        }
    }, {
        key: '_getInputControlLabelClasses',
        value: function _getInputControlLabelClasses() {
            var disabled = this.props.disabled;


            return (0, _classnames2.default)(this.props.classes.inputControlLabel, { 'disabled': disabled });
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

            var randomIdNumber = (0, _design_components.generateRandomIdNumber)();

            if ((0, _ramda.isNil)(name)) {
                throw new Error('Name cannot be null, cannot create input ID');
            }

            return 'radio_button_input_' + name + '_' + randomIdNumber;
        }

        // endregion

        // region prop accessors

    }, {
        key: '_isChecked',
        value: function _isChecked() {
            var _getInputData3 = this._getInputData(),
                checked = _getInputData3.checked;

            return (0, _ramda.defaultTo)(false)(checked);
        }
    }, {
        key: '_getInputData',
        value: function _getInputData() {
            var input = this.props.input;

            return (0, _ramda.isNil)(input) ? (0, _ramda.clone)(FormRadioButtonInputComponentClass.defaultProps.input) : input;
        }

        // endregion

        // region handlers
        // endregion

        // region render methods

    }, {
        key: '_renderLabel',
        value: function _renderLabel() {
            var _props2 = this.props,
                labelPosition = _props2.labelPosition,
                label = _props2.label;


            if ((0, _ramda.isNil)(labelPosition) || (0, _ramda.isNil)(label)) {
                return null;
            }

            return React.createElement(
                'div',
                { className: this._getLabelClasses() },
                label
            );
        }
    }, {
        key: '_renderInputIcon',
        value: function _renderInputIcon() {
            return React.createElement('div', { className: this.props.classes.inputControlIcon });
        }
    }, {
        key: '_renderInputControlLabel',
        value: function _renderInputControlLabel() {
            return React.createElement(
                'label',
                { htmlFor: this._id, className: this._getInputControlLabelClasses() },
                this._renderInputIcon()
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

                type: 'radio',
                value: value,
                name: name,
                id: this._id,

                onChange: onChange
            });
        }
    }, {
        key: '_renderInputContainer',
        value: function _renderInputContainer() {
            var labelPosition = this.props.labelPosition;


            return React.createElement(
                'div',
                { className: this.props.classes.componentContainer },
                labelPosition === 'left' ? this._renderLabel() : null,
                this._renderInput(),
                this._renderInputControlLabel(),
                labelPosition === 'right' ? this._renderLabel() : null
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return this._renderInputContainer();
        }

        // endregion

    }]);

    return FormRadioButtonInputComponentClass;
}(React.Component), _class.displayName = 'FormRadioButtonInputComponent', _class.defaultProps = {
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

var FormRadioButtonInputComponent = exports.FormRadioButtonInputComponent = (0, _reactJss2.default)(styles)(FormRadioButtonInputComponentClass);