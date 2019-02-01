'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FormDateInputClass = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

// local imports


exports.FormDateInputComponent = FormDateInputComponent;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _ramda = require('ramda');

var _dom_helpers = require('@webfuturistics/design_components/lib/helpers/general/dom_helpers');

var _main_theme_provider = require('./../../theming/providers/main_theme_provider');

var _form_text_input_component = require('./form_text_input_component');

var _simple_calender_component = require('./../date/simple_calender_component');

var _global_overlay_component = require('./../window/global_overlay_component');

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

            '& > $textInputContainer': {
                position: 'relative',

                flexBasis: 'auto',
                flexShrink: 1,
                flexGrow: 0
            }
        },

        textInputContainer: {}
    };
};

/**
 * Date input component styled according to material-UI guidelines.
 * Component is intended to be used as a parameter for ['Redux-form' Field component](#reduxdateinputcomponent).
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation

// $FlowFixMe decorators
var FormDateInputClass = exports.FormDateInputClass = (_dec = (0, _reactJss2.default)(styles), _dec(_class = (_temp = _class2 = function (_React$Component) {
    _inherits(FormDateInputClass, _React$Component);

    // endregion

    // region constructor

    // region static props
    function FormDateInputClass(props) {
        _classCallCheck(this, FormDateInputClass);

        var _this = _possibleConstructorReturn(this, (FormDateInputClass.__proto__ || Object.getPrototypeOf(FormDateInputClass)).call(this, props));

        var self = _this;

        self._onDateInputClick = self._onDateInputClick.bind(_this);
        self._onOverlayClick = self._onOverlayClick.bind(_this);
        self._onDateSelect = self._onDateSelect.bind(_this);

        _this.state = {
            dateSelectorShown: false
        };

        _this._id = _this._createInputId();
        return _this;
    }

    // endregion

    // region lifecycle methods


    _createClass(FormDateInputClass, [{
        key: '_closeDateSelector',
        value: function _closeDateSelector() {
            this.setState({
                dateSelectorShown: false
            });
        }

        // endregion

        // region style accessors

    }, {
        key: '_getComponentOuterContainerClassName',
        value: function _getComponentOuterContainerClassName() {
            return (0, _classnames2.default)(this.props.classes.componentOuterContainer, this.props.componentContainerClassName);
        }
    }, {
        key: '_getTextInputContainerClassName',
        value: function _getTextInputContainerClassName() {
            return this.props.classes.textInputContainer;
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

            return 'date_input_' + name + '_' + randomIdNumber;
        }

        // endregion

        // region prop accessors

    }, {
        key: '_isReadOnly',
        value: function _isReadOnly() {
            var readOnly = this.props.readOnly;

            return (0, _ramda.defaultTo)(FormDateInputClass.defaultProps.readOnly)(readOnly);
        }
    }, {
        key: '_isDisabled',
        value: function _isDisabled() {
            var disabled = this.props.disabled;

            return (0, _ramda.defaultTo)(FormDateInputClass.defaultProps.disabled)(disabled);
        }
    }, {
        key: '_getDate',
        value: function _getDate() {
            var _getInputData3 = this._getInputData(),
                value = _getInputData3.value;

            var parsedDate = (0, _moment2.default)(value);

            return parsedDate.isValid() ? parsedDate : (0, _moment2.default)();
        }
    }, {
        key: '_getDateFormat',
        value: function _getDateFormat() {
            var dateFormat = this.props.dateFormat;

            return (0, _ramda.defaultTo)(FormDateInputClass.defaultProps.dateFormat)(dateFormat);
        }
    }, {
        key: '_getInputData',
        value: function _getInputData() {
            var input = this.props.input;

            return (0, _ramda.isNil)(input) ? (0, _ramda.clone)(FormDateInputClass.defaultProps.input) : input;
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
            var currentValue = (0, _ramda.defaultTo)('')(input.value);

            var dateFormat = this._getDateFormat();

            var newInput = (0, _ramda.mergeDeepRight)(input, {
                name: currentName + '_subTextField',
                value: (0, _ramda.is)(Object, currentValue) ? (0, _moment2.default)(currentValue).format(dateFormat) : '',

                onFocus: function onFocus() {},
                onBlur: function onBlur() {}
            });

            return {
                type: 'text',
                readOnly: readOnly,
                disabled: disabled,
                placeholder: placeholder,
                label: label,
                iconClassNames: 'fas fa-calendar',
                meta: meta,
                input: newInput
            };
        }
    }, {
        key: '_getComponentContainerStyles',
        value: function _getComponentContainerStyles() {
            var componentContainerStyles = (0, _ramda.defaultTo)({})(this.props.componentContainerStyles);
            var style = (0, _ramda.defaultTo)({})(this.props.style);

            return Object.assign({}, componentContainerStyles, style);
        }

        // endregion

        // region handlers

    }, {
        key: '_onDateSelect',
        value: function _onDateSelect(date) {
            this._closeDateSelector();

            var _getInputData4 = this._getInputData(),
                onChange = _getInputData4.onChange;

            onChange(date);
        }
    }, {
        key: '_onOverlayClick',
        value: function _onOverlayClick() {
            this._closeDateSelector();
        }
    }, {
        key: '_onDateInputClick',
        value: function _onDateInputClick() {
            if (this._isReadOnly() || this._isDisabled()) {
                return;
            }

            this.setState({
                dateSelectorShown: true
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
                { className: this._getTextInputContainerClassName(), onClick: this._onDateInputClick },
                this._renderTextInputComponent()
            );
        }
    }, {
        key: '_renderDateSelector',
        value: function _renderDateSelector() {
            return React.createElement(
                _global_overlay_component.GlobalOverlayComponent,
                { show: this.state.dateSelectorShown, onOverlayClick: this._onOverlayClick },
                React.createElement(_simple_calender_component.SimpleCalendarComponent, { date: this._getDate(), onDateSelect: this._onDateSelect })
            );
        }
    }, {
        key: '_renderOuterContainer',
        value: function _renderOuterContainer() {
            return React.createElement(
                'div',
                {
                    className: this._getComponentOuterContainerClassName(),
                    style: this._getComponentContainerStyles()
                },
                this._renderTextInputContainer(),
                this._renderDateSelector()
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return this._renderOuterContainer();
        }

        // endregion

    }]);

    return FormDateInputClass;
}(React.Component), _class2.displayName = 'FormDateInputClass', _class2.defaultProps = {
    dateFormat: ' YYYY-MM-DD',

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

    classes: {}
}, _temp)) || _class);

// exports

function FormDateInputComponent(props) {
    return React.createElement(
        _main_theme_provider.MainThemeContext.Consumer,
        null,
        function (windowDimensions) {
            return React.createElement(FormDateInputClass, _extends({}, props, windowDimensions));
        }
    );
}

FormDateInputComponent.displayName = 'FormDateInputComponent';