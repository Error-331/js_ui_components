'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FormDropDownInputComponent = exports.FormDropDownInputComponentClass = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

// local imports


var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ramda = require('ramda');

var _design_components = require('@webfuturistics/design_components');

var _form_text_input_component = require('./form_text_input_component');

var _global_overlay_component = require('./../window/global_overlay_component');

var _regular_card_component = require('./../layout/structure/regular_card_component');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// styles definition


// type definitions
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

            '& > $inputControl': {
                display: 'none'
            },

            '& > $textInputContainer': {
                position: 'relative',

                flexBasis: 'auto',
                flexShrink: 1,
                flexGrow: 0
            },

            '& > $optionsContainer': {
                boxSizing: 'border-box',
                position: 'absolute',

                top: 0,
                left: 0,

                width: '100%',

                flexBasis: 'auto',
                flexShrink: 1,
                flexGrow: 0,

                '& $optionContainer': {
                    padding: '8px 8px 8px 10px',
                    cursor: 'pointer',
                    color: theme.inputStyles.inactiveColor
                },

                '& $optionContainer.selected': {
                    backgroundColor: theme.inputStyles.selectedBGColor
                },

                '& $optionContainer:hover': {
                    color: theme.inputStyles.hoverColor
                },

                '& $optionContainer.selected:hover': {
                    cursor: 'auto',
                    color: theme.inputStyles.inactiveColor
                }
            }
        },

        inputControl: {},
        textInputContainer: {},
        optionsContainer: {},
        optionContainer: {}
    };
};

/**
 * Drop down input component styled according to material-UI guidelines.
 * Component is intended to be used as a parameter for ['Redux-form' Field component](#reduxformdropdowninputcomponent).
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
var FormDropDownInputComponentClass = exports.FormDropDownInputComponentClass = (_temp = _class = function (_React$Component) {
    _inherits(FormDropDownInputComponentClass, _React$Component);

    // endregion

    // region constructor

    // region static props
    function FormDropDownInputComponentClass(props) {
        _classCallCheck(this, FormDropDownInputComponentClass);

        var _this = _possibleConstructorReturn(this, (FormDropDownInputComponentClass.__proto__ || Object.getPrototypeOf(FormDropDownInputComponentClass)).call(this, props));

        var self = _this;

        self._onDropDownInputClick = self._onDropDownInputClick.bind(_this);
        self._onOverlayClick = self._onOverlayClick.bind(_this);
        self._onOptionClick = self._onOptionClick.bind(_this);

        _this.state = {
            optionsShown: false
        };

        _this._id = _this._createInputId();
        return _this;
    }

    // endregion

    // region lifecycle methods


    _createClass(FormDropDownInputComponentClass, [{
        key: '_closeOptionsContainer',
        value: function _closeOptionsContainer() {
            this.props.theme.styleValuesRegister.releaseZIndex(this.state.optionsContainerZIndex);

            this.setState({
                optionsShown: false,
                optionsContainerZIndex: undefined
            });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.props.theme.styleValuesRegister.releaseZIndex(this.state.optionsContainerZIndex);
        }

        // endregion

        // region style accessors

    }, {
        key: '_getOptionContainerClasses',
        value: function _getOptionContainerClasses(optionValue) {
            return (0, _classnames2.default)(this.props.classes.optionContainer, { 'selected': this._isOptionValueSelected(optionValue) });
        }
    }, {
        key: '_getInputClasses',
        value: function _getInputClasses() {
            return this.props.classes.inputControl;
        }
    }, {
        key: '_getComponentOuterContainerClasses',
        value: function _getComponentOuterContainerClasses() {
            return (0, _classnames2.default)(this.props.classes.componentOuterContainer, this.props.componentContainerClassName);
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

            return 'drop_down_input_' + name + '_' + randomIdNumber;
        }

        // endregion

        // region prop accessors

    }, {
        key: '_getInputData',
        value: function _getInputData() {
            var input = this.props.input;

            return (0, _ramda.isNil)(input) ? (0, _ramda.clone)(FormDropDownInputComponentClass.defaultProps.input) : input;
        }
    }, {
        key: '_getFormTextInputComponentProps',
        value: function _getFormTextInputComponentProps() {
            var input = this._getInputData();
            var _props = this.props,
                readOnly = _props.readOnly,
                disabled = _props.disabled,
                placeholder = _props.placeholder,
                label = _props.label,
                meta = _props.meta;


            var currentName = (0, _ramda.defaultTo)(this._id)(input.name);
            var currentValue = (0, _ramda.defaultTo)('')(this._getSelectedLabel());

            var newInput = (0, _ramda.mergeDeepRight)(input, {
                name: currentName + '_subTextField',
                value: currentValue,

                onFocus: function onFocus() {},
                onBlur: function onBlur() {}
            });

            return {
                type: 'text',
                readOnly: readOnly,
                disabled: disabled,
                placeholder: placeholder,
                label: label,
                iconClassNames: 'fas fa-angle-down',
                meta: meta,
                input: newInput
            };
        }
    }, {
        key: '_getSelectedValueLabel',
        value: function _getSelectedValueLabel() {
            var _getInputData3 = this._getInputData(),
                value = _getInputData3.value;

            var options = this.props.options;


            if ((0, _ramda.isNil)(value)) {
                return;
            }

            var labelValue = (0, _ramda.find)(function (labelValue) {
                return value === labelValue[1];
            })((0, _ramda.toPairs)(options));

            if ((0, _design_components.isNotNil)(labelValue)) {
                return _defineProperty({}, labelValue[0], labelValue[1]);
            }
        }
    }, {
        key: '_getSelectedLabel',
        value: function _getSelectedLabel() {
            var selectedValueLabel = this._getSelectedValueLabel();
            return (0, _design_components.isNotNil)(selectedValueLabel) ? (0, _ramda.toPairs)(selectedValueLabel)[0][0] : selectedValueLabel;
        }
    }, {
        key: '_isOptionValueSelected',
        value: function _isOptionValueSelected(optionValue) {
            var selectedOption = this._getSelectedValueLabel();

            if ((0, _ramda.isNil)(selectedOption)) {
                return false;
            }

            return (0, _ramda.equals)(optionValue, (0, _ramda.toPairs)(selectedOption)[0][1]);
        }
    }, {
        key: '_getComponentContainerStyles',
        value: function _getComponentContainerStyles() {
            return (0, _ramda.defaultTo)(FormDropDownInputComponentClass.defaultProps.componentContainerStyles)(this.props.componentContainerStyles);
        }

        // endregion

        // region handlers

    }, {
        key: '_onOptionClick',
        value: function _onOptionClick(event, optionValue) {
            this._closeOptionsContainer();

            var _getInputData4 = this._getInputData(),
                onChange = _getInputData4.onChange;

            onChange(optionValue);
        }
    }, {
        key: '_onOverlayClick',
        value: function _onOverlayClick() {
            this._closeOptionsContainer();
        }
    }, {
        key: '_onDropDownInputClick',
        value: function _onDropDownInputClick() {
            var _props2 = this.props,
                readOnly = _props2.readOnly,
                disabled = _props2.disabled;


            readOnly = (0, _ramda.defaultTo)(false)(readOnly);
            disabled = (0, _ramda.defaultTo)(false)(disabled);

            if (readOnly || disabled) {
                return;
            }

            this.setState({
                optionsShown: true,
                optionsContainerZIndex: this.props.theme.styleValuesRegister.zIndex
            });
        }

        // endregion

        // region render methods

    }, {
        key: '_renderTextInputComponent',
        value: function _renderTextInputComponent() {
            return React.createElement(_form_text_input_component.FormTextInputComponent, this._getFormTextInputComponentProps());
        }
    }, {
        key: '_renderTextInputContainer',
        value: function _renderTextInputContainer() {
            return React.createElement(
                'div',
                { className: this.props.classes.textInputContainer, onClick: this._onDropDownInputClick },
                this._renderTextInputComponent()
            );
        }
    }, {
        key: '_renderInputOptions',
        value: function _renderInputOptions() {
            // TODO: indexedMap function here, 'any' is definitely bad chose
            var indexedMap = (0, _ramda.addIndex)(_ramda.map);

            return indexedMap(function (option, index) {
                return React.createElement(
                    'option',
                    { value: option[1], key: 'input_option_' + index },
                    option[0]
                );
            }, (0, _ramda.toPairs)(this.props.options));
        }
    }, {
        key: '_renderInput',
        value: function _renderInput() {
            var disabled = this.props.disabled;

            var _getInputData5 = this._getInputData(),
                value = _getInputData5.value,
                name = _getInputData5.name,
                onChange = _getInputData5.onChange;

            var disabledParam = disabled ? 'disabled' : undefined;

            return React.createElement(
                'select',
                {
                    className: this._getInputClasses(),
                    disabled: disabledParam,
                    size: 1,

                    value: value,
                    name: name,

                    onChange: onChange
                },
                this._renderInputOptions()
            );
        }
    }, {
        key: '_renderGlobalOverlayComponent',
        value: function _renderGlobalOverlayComponent() {
            return React.createElement(_global_overlay_component.GlobalOverlayComponent, { show: this.state.optionsShown, opacity: 0, onOverlayClick: this._onOverlayClick });
        }
    }, {
        key: '_renderOptionContainer',
        value: function _renderOptionContainer(index, label, className, clickCallback) {
            return React.createElement(
                'div',
                { onClick: clickCallback, className: className, key: 'option_' + index },
                label
            );
        }
    }, {
        key: '_renderOptionsContainers',
        value: function _renderOptionsContainers() {
            var _this2 = this;

            // TODO: indexedMap function here, 'any' is definitely bad chose
            var indexedMap = (0, _ramda.addIndex)(_ramda.map);

            return indexedMap(function (option, index) {
                var currentOptionLabel = option[0];
                var currentOptionValue = option[1];

                return _this2._renderOptionContainer(index, currentOptionLabel, _this2._getOptionContainerClasses(currentOptionValue), _this2._isOptionValueSelected(currentOptionValue) ? undefined : function (event) {
                    return _this2._onOptionClick(event, currentOptionValue);
                });
            }, (0, _ramda.toPairs)(this.props.options));
        }
    }, {
        key: '_renderOptionsContainer',
        value: function _renderOptionsContainer() {
            var containerStyles = { zIndex: this.state.optionsContainerZIndex };
            var bodyStyle = { padding: '0px' };

            return this.state.optionsShown ? React.createElement(
                _regular_card_component.RegularCardComponent,
                {
                    containerClassName: this.props.classes.optionsContainer,
                    containerStyle: containerStyles,
                    bodyStyle: bodyStyle
                },
                this._renderOptionsContainers()
            ) : null;
        }
    }, {
        key: '_renderOuterContainer',
        value: function _renderOuterContainer() {
            return React.createElement(
                'div',
                {
                    className: this._getComponentOuterContainerClasses(),
                    style: this._getComponentContainerStyles()
                },
                this._renderInput(),
                this._renderTextInputContainer(),
                this._renderGlobalOverlayComponent(),
                this._renderOptionsContainer()
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return this._renderOuterContainer();
        }

        // endregion

    }]);

    return FormDropDownInputComponentClass;
}(React.Component), _class.displayName = 'FormDropDownInputComponent', _class.defaultProps = {
    readOnly: false,
    disabled: false,

    placeholder: '',
    label: '',

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

    classes: {},

    componentContainerStyles: {}
}, _temp);

// exports

var FormDropDownInputComponent = exports.FormDropDownInputComponent = (0, _reactJss2.default)(styles)(FormDropDownInputComponentClass);