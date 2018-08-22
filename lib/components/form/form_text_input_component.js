'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FormTextInputComponent = exports.FormTextInputComponentClass = undefined;

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
var topAdditionalPadding = 7;
var iconAdditionalPadding = 2;

var styles = function styles(theme) {
    return {
        componentOuterContainer: {
            boxSizing: 'border-box',

            position: 'relative',
            display: 'flex',

            flexBasis: 'auto',
            flexShrink: 1,
            flexGrow: 0,

            flexDirection: 'column',
            flexWrap: 'nowrap',

            justifyContent: 'flex-start',
            alignItems: 'stretch',
            alignContent: 'flex-start',

            padding: theme.inputStyles.labelActiveFontSize + topAdditionalPadding + 'px 0px 0px 0px',

            '& > $inputContainer': {
                boxSizing: 'border-box',
                position: 'relative',

                display: 'flex',

                flexBasis: 'auto',
                flexShrink: '1',
                flexGrow: '0',

                flexDirection: 'column',
                flexWrap: 'nowrap',

                justifyContent: 'flex-start',
                alignItems: 'stretch',
                alignContent: 'flex-start',

                '& > $inputControl': {
                    boxSizing: 'border-box',

                    flexBasis: theme.inputStyles.fontSize + 'px',
                    flexShrink: '0',
                    flexGrow: '0',

                    margin: '0 0 0 0',

                    border: 'none',
                    borderBottom: '1px solid ' + theme.inputStyles.inactiveColor,
                    borderRadius: '0',

                    padding: '0',

                    fontFamily: theme.inputStyles.fontStack,
                    fontSize: theme.inputStyles.fontSize + 'px',

                    boxShadow: 'none',

                    transition: 'all .3s',

                    lineHeight: 'normal',

                    backgroundColor: theme.inputStyles.bgColor,
                    color: theme.inputStyles.inactiveColor,

                    '&:-webkit-autofill': {
                        '-webkit-box-shadow': '0 0 0 1000px transparent inset !important'
                    },

                    '&::-webkit-input-placeholder': {
                        color: theme.inputStyles.disabledColor
                    },

                    '&::-moz-placeholder': {
                        color: theme.inputStyles.disabledColor
                    },

                    '&::-ms-input-placeholder': {
                        color: theme.inputStyles.disabledColor
                    },

                    '&.focus': {
                        borderColor: theme.inputStyles.activeColor,
                        color: theme.inputStyles.activeColor
                    },

                    '&.readOnly': {
                        color: theme.inputStyles.readOnlyColor,
                        borderBottom: '1px solid ' + theme.inputStyles.readOnlyColor
                    },

                    '&.disabled': {
                        color: theme.inputStyles.disabledColor,
                        borderBottom: '1px dotted ' + theme.inputStyles.disabledColor
                    }
                },

                '& > $inputControlLabel': {
                    position: 'absolute',

                    top: theme.inputStyles.fontSize - theme.inputStyles.labelInactiveFontSize + 'px',
                    left: '0px',

                    fontFamily: theme.inputStyles.fontStack,
                    fontSize: theme.inputStyles.labelActiveFontSize + 'px',

                    cursor: 'text',
                    color: theme.inputStyles.labelColor,

                    transition: '.2s ease-out',

                    '&.active': {
                        fontSize: theme.inputStyles.labelActiveFontSize + 'px',
                        '-webkit-transform': 'translateY(-145%)',
                        transform: 'translateY(-145%)'
                    },

                    '&.passive': {
                        fontSize: theme.inputStyles.labelInactiveFontSize + 'px',
                        '-webkit-transform': 'translateY(0%)',
                        transform: 'translateY(0%)'
                    },

                    '&.focus': {
                        color: theme.inputStyles.activeColor
                    },

                    '&.readOnly': {
                        color: theme.inputStyles.readOnlyColor
                    },

                    '&.disabled': {
                        color: theme.inputStyles.disabledColor
                    }
                },

                '& > $inputControlLabel:first-letter': {
                    textTransform: 'capitalize'
                },

                '& > i': {
                    position: 'absolute',

                    left: 'calc(100%  - ' + (theme.inputStyles.iconFontSize + iconAdditionalPadding) + 'px)',
                    top: theme.inputStyles.fontSize - theme.inputStyles.iconFontSize + 'px',

                    transition: 'all .3s',

                    fontSize: theme.inputStyles.iconFontSize + 'px',
                    color: theme.inputStyles.inactiveColor,

                    '&.focus': {
                        color: theme.inputStyles.activeColor
                    },

                    '&.readOnly': {
                        color: theme.inputStyles.readOnlyColor
                    },

                    '&.disabled': {
                        color: theme.inputStyles.disabledColor
                    }
                }
            }
        },

        inputContainer: {},
        inputControl: {},
        inputControlLabel: {}
    };
};

/**
 * Text input component styled according to material-UI guidelines.
 * Component is intended to be used as a parameter for ['Redux-form' Field component](#reduxformtextinputcomponent).
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
var FormTextInputComponentClass = exports.FormTextInputComponentClass = (_temp = _class = function (_React$Component) {
    _inherits(FormTextInputComponentClass, _React$Component);

    // endregion

    // region constructor

    // region static props
    function FormTextInputComponentClass(props) {
        _classCallCheck(this, FormTextInputComponentClass);

        var _this = _possibleConstructorReturn(this, (FormTextInputComponentClass.__proto__ || Object.getPrototypeOf(FormTextInputComponentClass)).call(this, props));

        _this._id = _this._createInputId();
        return _this;
    }

    // endregion

    // region lifecycle methods
    // endregion

    // region style accessors


    _createClass(FormTextInputComponentClass, [{
        key: '_getComponentOuterContainerClasses',
        value: function _getComponentOuterContainerClasses() {
            return this.props.classes.componentOuterContainer;
        }
    }, {
        key: '_getInputClasses',
        value: function _getInputClasses() {
            var hasFocus = this._isInputHasFocus();
            var _props = this.props,
                readOnly = _props.readOnly,
                disabled = _props.disabled;


            return (0, _classnames2.default)(this.props.classes.inputControl, { 'focus': hasFocus }, { 'readOnly': readOnly }, { 'disabled': disabled });
        }
    }, {
        key: '_getLabelClasses',
        value: function _getLabelClasses() {
            var isActive = this._isInputActive();
            var hasFocus = this._isInputHasFocus();
            var _props2 = this.props,
                readOnly = _props2.readOnly,
                disabled = _props2.disabled;


            return (0, _classnames2.default)(this.props.classes.inputControlLabel, { 'active': isActive }, { 'passive': !isActive }, { 'focus': hasFocus }, { 'readOnly': readOnly }, { 'disabled': disabled });
        }
    }, {
        key: '_getIconClasses',
        value: function _getIconClasses() {
            var hasFocus = this._isInputHasFocus();
            var _props3 = this.props,
                readOnly = _props3.readOnly,
                disabled = _props3.disabled;


            return (0, _classnames2.default)(this.props.iconClassNames, { 'focus': hasFocus }, { 'readOnly': readOnly }, { 'disabled': disabled });
        }

        // endregion

        // region label accessors

    }, {
        key: '_getLabel',
        value: function _getLabel() {
            return this.props.label;
        }

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

            return 'text_input_' + name + '_' + randomIdNumber;
        }

        // endregion

        // region prop accessors

    }, {
        key: '_isInputHasFocus',
        value: function _isInputHasFocus() {
            var _getMetaData2 = this._getMetaData(),
                active = _getMetaData2.active;

            return active && this._isInputEditable();
        }
    }, {
        key: '_isInputActive',
        value: function _isInputActive() {
            return this._isInputHasValue() || this._isInputHasFocus();
        }
    }, {
        key: '_isInputEditable',
        value: function _isInputEditable() {
            var _props4 = this.props,
                readOnly = _props4.readOnly,
                disabled = _props4.disabled;

            return !(readOnly || disabled);
        }
    }, {
        key: '_isInputHasValue',
        value: function _isInputHasValue() {
            var _getMetaData3 = this._getMetaData(),
                initial = _getMetaData3.initial,
                pristine = _getMetaData3.pristine,
                dirty = _getMetaData3.dirty;

            var _getInputData3 = this._getInputData(),
                value = _getInputData3.value;

            var placeholder = this.props.placeholder;


            var preparedInitial = (0, _ramda.is)(Number, initial) ? (0, _ramda.toString)(initial) : initial;
            var preparedValue = (0, _ramda.is)(Number, value) ? (0, _ramda.toString)(value) : value;

            var isInitialValueEmpty = (0, _ramda.isNil)(initial) || (0, _ramda.isEmpty)(preparedInitial);
            var isValueEmpty = (0, _ramda.isNil)(value) || (0, _ramda.isEmpty)(preparedValue);

            var hasRealValue = pristine && !isInitialValueEmpty || dirty && !isValueEmpty;
            var hasPlaceholder = (0, _ramda.complement)(_ramda.isEmpty)(placeholder);

            return hasRealValue || hasPlaceholder;
        }
    }, {
        key: '_getMetaData',
        value: function _getMetaData() {
            var meta = this.props.meta;

            return (0, _ramda.isNil)(meta) ? (0, _ramda.clone)(FormTextInputComponentClass.defaultProps.meta) : meta;
        }
    }, {
        key: '_getInputData',
        value: function _getInputData() {
            var input = this.props.input;

            return (0, _ramda.isNil)(input) ? (0, _ramda.clone)(FormTextInputComponentClass.defaultProps.input) : input;
        }

        // endregion

        // region handlers
        // endregion

        // region render methods

    }, {
        key: '_renderIcon',
        value: function _renderIcon() {
            if ((0, _ramda.isNil)(this.props.iconClassNames)) {
                return;
            }

            var iconClassNames = this._getIconClasses();
            return this.props.iconClassNames ? React.createElement('i', { className: iconClassNames }) : undefined;
        }
    }, {
        key: '_renderLabel',
        value: function _renderLabel() {
            return React.createElement(
                'label',
                {
                    className: this._getLabelClasses(),
                    htmlFor: this._id
                },
                this._getLabel()
            );
        }
    }, {
        key: '_renderInput',
        value: function _renderInput() {
            var _props5 = this.props,
                type = _props5.type,
                readOnly = _props5.readOnly,
                disabled = _props5.disabled,
                placeholder = _props5.placeholder;

            var _getInputData4 = this._getInputData(),
                value = _getInputData4.value,
                name = _getInputData4.name,
                onChange = _getInputData4.onChange,
                onFocus = _getInputData4.onFocus,
                onBlur = _getInputData4.onBlur;

            var readOnlyParam = readOnly ? 'readonly' : undefined;
            var disabledParam = disabled ? 'disabled' : undefined;

            return React.createElement('input', {
                className: this._getInputClasses(),

                type: type,
                value: value,
                placeholder: placeholder,
                name: name,
                id: this._id,

                onChange: onChange,
                onFocus: onFocus,
                onBlur: onBlur,

                readOnly: readOnlyParam,
                disabled: disabledParam
            });
        }
    }, {
        key: '_renderInputContainer',
        value: function _renderInputContainer() {
            return React.createElement(
                'div',
                { className: this.props.classes.inputContainer },
                this._renderInput(),
                this._renderLabel(),
                this._renderIcon()
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: this._getComponentOuterContainerClasses() },
                this._renderInputContainer()
            );
        }

        // endregion

    }]);

    return FormTextInputComponentClass;
}(React.Component), _class.displayName = 'FormTextInputComponent', _class.defaultProps = {
    type: 'text',

    readOnly: false,
    disabled: false,

    placeholder: '',
    label: '',

    iconClassNames: '',

    meta: {
        initial: '',

        active: false,
        pristine: true,
        dirty: false
    },

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

var FormTextInputComponent = exports.FormTextInputComponent = (0, _reactJss2.default)(styles)(FormTextInputComponentClass);