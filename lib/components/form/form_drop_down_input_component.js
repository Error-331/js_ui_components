'use strict'; // external imports

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.find");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormDropDownInputComponent = FormDropDownInputComponent;
exports.default = exports.FormDropDownInputClass = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ramda = require("ramda");

var _utility_helpers = require("@webfuturistics/design_components/lib/helpers/general/utility_helpers");

var _dom_helpers = require("@webfuturistics/design_components/lib/helpers/general/dom_helpers");

var _form_text_input_component = require("./form_text_input_component");

var _global_overlay_component = require("./../window/global_overlay_component");

var _regular_card_component = require("./../layout/structure/regular_card_component");

var _main_theme_provider = require("./../../theming/providers/main_theme_provider");

var _dec, _class, _class2, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// styles definition
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
// $FlowFixMe decorators


var FormDropDownInputClass = (_dec = (0, _reactJss.default)(styles), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FormDropDownInputClass, _React$Component);

  // region static props
  // endregion
  // region constructor
  function FormDropDownInputClass(props) {
    var _this;

    _classCallCheck(this, FormDropDownInputClass);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormDropDownInputClass).call(this, props));
    _this._id = void 0;

    var self = _assertThisInitialized(_this);

    self._onDropDownInputClick = self._onDropDownInputClick.bind(_assertThisInitialized(_this));
    self._onOverlayClick = self._onOverlayClick.bind(_assertThisInitialized(_this));
    self._onOptionClick = self._onOptionClick.bind(_assertThisInitialized(_this));
    _this.state = {
      optionsShown: FormDropDownInputClass.defaultState.optionsShown,
      selectedOption: FormDropDownInputClass.defaultState.selectedOption
    };
    _this._id = _this._createInputId();
    return _this;
  } // endregion
  // region lifecycle methods


  _createClass(FormDropDownInputClass, [{
    key: "_createInputId",
    value: function _createInputId() {
      var _this$_getInputData = this._getInputData(),
          name = _this$_getInputData.name;

      var randomIdNumber = (0, _dom_helpers.generateRandomIdNumber)();

      if ((0, _ramda.isNil)(name)) {
        throw new Error('Name cannot be null, cannot create input ID');
      }

      return "drop_down_input_".concat(name, "_").concat(randomIdNumber);
    }
  }, {
    key: "_closeOptionsContainer",
    value: function _closeOptionsContainer() {
      this.props.theme.styleValuesRegister.releaseZIndex(this.state.optionsContainerZIndex);
      this.setState({
        optionsShown: false,
        optionsContainerZIndex: undefined
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.theme.styleValuesRegister.releaseZIndex(this.state.optionsContainerZIndex);
    } // endregion
    // region style accessors

  }, {
    key: "_getOptionContainerClasses",
    value: function _getOptionContainerClasses(optionValue, optionLabel) {
      return (0, _classnames.default)(this.props.classes.optionContainer, {
        'selected': this._isOptionValueSelected(optionValue, optionLabel)
      });
    }
  }, {
    key: "_getInputClasses",
    value: function _getInputClasses() {
      return this.props.classes.inputControl;
    }
  }, {
    key: "_getComponentOuterContainerClasses",
    value: function _getComponentOuterContainerClasses() {
      return (0, _classnames.default)(this.props.classes.componentOuterContainer, this.props.componentContainerClassName);
    } // endregion
    // region label accessors
    // endregion
    // region state accessors

  }, {
    key: "_getInternalSelectedOption",
    value: function _getInternalSelectedOption() {
      return (0, _ramda.defaultTo)(FormDropDownInputClass.defaultState.selectedOption)(this.state.selectedOption);
    } // endregion
    // region prop accessors

  }, {
    key: "_getInputData",
    value: function _getInputData() {
      var input = this.props.input;
      return (0, _ramda.isNil)(input) ? (0, _ramda.clone)(FormDropDownInputClass.defaultProps.input) : input;
    }
  }, {
    key: "_getFormTextInputComponentProps",
    value: function _getFormTextInputComponentProps() {
      var input = this._getInputData();

      var _this$props = this.props,
          variant = _this$props.variant,
          readOnly = _this$props.readOnly,
          disabled = _this$props.disabled,
          placeholder = _this$props.placeholder,
          label = _this$props.label,
          meta = _this$props.meta;
      var currentName = (0, _ramda.defaultTo)(this._id)(input.name);
      var currentValue = (0, _ramda.defaultTo)('')(this._getSelectedLabel());
      var newInput = (0, _ramda.mergeDeepRight)(input, {
        name: "".concat(currentName, "_subTextField"),
        value: currentValue,
        onFocus: function onFocus() {},
        onBlur: function onBlur() {}
      });
      return {
        variant: variant,
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
    key: "_getSelectedValueLabel",
    value: function _getSelectedValueLabel() {
      var selectedOption = this._getInternalSelectedOption();

      var options = this.props.options;

      if ((0, _ramda.isNil)(selectedOption)) {
        return;
      }

      var selectedOptionLabel = (0, _ramda.keys)(selectedOption)[0];
      var selectedOptionValue = selectedOption[selectedOptionLabel];
      var labelValue = (0, _ramda.find)(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            optionLabel = _ref2[0],
            optionValue = _ref2[1];

        return (0, _ramda.and)((0, _ramda.equals)(selectedOptionLabel, optionLabel), (0, _ramda.equals)(selectedOptionValue, optionValue));
      })((0, _ramda.toPairs)(options));

      if ((0, _utility_helpers.isNotNil)(labelValue)) {
        return selectedOption;
      }
    }
  }, {
    key: "_getSelectedLabel",
    value: function _getSelectedLabel() {
      var selectedValueLabel = this._getSelectedValueLabel();

      return (0, _utility_helpers.isNotNil)(selectedValueLabel) ? (0, _ramda.toPairs)(selectedValueLabel)[0][0] : selectedValueLabel;
    }
  }, {
    key: "_isOptionValueSelected",
    value: function _isOptionValueSelected(optionValue, optionLabel) {
      var selectedOption = this._getInternalSelectedOption();

      if ((0, _ramda.isNil)(selectedOption)) {
        return false;
      }

      var selectedOptionLabel = (0, _ramda.keys)(selectedOption)[0];
      var selectedOptionValue = selectedOption[selectedOptionLabel];
      return (0, _ramda.and)((0, _ramda.equals)(selectedOptionLabel, optionLabel), (0, _ramda.equals)(optionValue, selectedOptionValue));
    }
  }, {
    key: "_getComponentContainerStyles",
    value: function _getComponentContainerStyles() {
      var componentContainerStyles = (0, _ramda.defaultTo)({})(this.props.componentContainerStyles);
      var style = (0, _ramda.defaultTo)({})(this.props.style);
      return Object.assign({}, componentContainerStyles, style);
    } // endregion
    // region handlers

  }, {
    key: "_onOptionClick",
    value: function _onOptionClick(event, optionValue, optionLabel) {
      this._closeOptionsContainer();

      var _this$_getInputData2 = this._getInputData(),
          onChange = _this$_getInputData2.onChange;

      this.setState({
        selectedOption: _defineProperty({}, optionLabel, optionValue)
      });
      onChange(optionValue);
    }
  }, {
    key: "_onOverlayClick",
    value: function _onOverlayClick() {
      this._closeOptionsContainer();
    }
  }, {
    key: "_onDropDownInputClick",
    value: function _onDropDownInputClick() {
      var _this$props2 = this.props,
          readOnly = _this$props2.readOnly,
          disabled = _this$props2.disabled;
      readOnly = (0, _ramda.defaultTo)(false)(readOnly);
      disabled = (0, _ramda.defaultTo)(false)(disabled);

      if (readOnly || disabled) {
        return;
      }

      this.setState({
        optionsShown: true,
        optionsContainerZIndex: this.props.theme.styleValuesRegister.zIndex
      });
    } // endregion
    // region render methods

  }, {
    key: "_renderTextInputComponent",
    value: function _renderTextInputComponent() {
      return React.createElement(_form_text_input_component.FormTextInputComponent, this._getFormTextInputComponentProps());
    }
  }, {
    key: "_renderTextInputContainer",
    value: function _renderTextInputContainer() {
      return React.createElement("div", {
        className: this.props.classes.textInputContainer,
        onClick: this._onDropDownInputClick
      }, this._renderTextInputComponent());
    }
  }, {
    key: "_renderInputOptions",
    value: function _renderInputOptions() {
      // TODO: indexedMap function here, 'any' is definitely bad chose
      var indexedMap = (0, _ramda.addIndex)(_ramda.map);
      return indexedMap(function (option, index) {
        return React.createElement("option", {
          value: option[1],
          key: "input_option_".concat(index)
        }, option[0]);
      }, (0, _ramda.toPairs)(this.props.options));
    }
  }, {
    key: "_renderInput",
    value: function _renderInput() {
      var disabled = this.props.disabled;

      var _this$_getInputData3 = this._getInputData(),
          value = _this$_getInputData3.value,
          name = _this$_getInputData3.name,
          onChange = _this$_getInputData3.onChange;

      var disabledParam = disabled ? 'disabled' : undefined;
      return React.createElement("select", {
        className: this._getInputClasses(),
        disabled: disabledParam,
        size: 1,
        value: value,
        name: name,
        onChange: onChange
      }, this._renderInputOptions());
    }
  }, {
    key: "_renderGlobalOverlayComponent",
    value: function _renderGlobalOverlayComponent() {
      return React.createElement(_global_overlay_component.GlobalOverlayComponent, {
        show: this.state.optionsShown,
        opacity: 0,
        onOverlayClick: this._onOverlayClick
      });
    }
  }, {
    key: "_renderOptionContainer",
    value: function _renderOptionContainer(index, label, className, clickCallback) {
      return React.createElement("div", {
        onClick: clickCallback,
        className: className,
        key: "option_".concat(index)
      }, label);
    }
  }, {
    key: "_renderOptionsContainers",
    value: function _renderOptionsContainers() {
      var _this2 = this;

      // TODO: indexedMap function here, 'any' is definitely bad chose
      var indexedMap = (0, _ramda.addIndex)(_ramda.map);
      return indexedMap(function (option, index) {
        var currentOptionLabel = option[0];
        var currentOptionValue = option[1];
        return _this2._renderOptionContainer(index, currentOptionLabel, _this2._getOptionContainerClasses(currentOptionValue, currentOptionLabel), _this2._isOptionValueSelected(currentOptionValue, currentOptionLabel) ? undefined : function (event) {
          return _this2._onOptionClick(event, currentOptionValue, currentOptionLabel);
        });
      }, (0, _ramda.toPairs)(this.props.options));
    }
  }, {
    key: "_renderOptionsContainer",
    value: function _renderOptionsContainer() {
      var containerStyles = {
        zIndex: this.state.optionsContainerZIndex
      };
      var bodyStyle = {
        padding: '0px'
      };
      return this.state.optionsShown ? React.createElement(_regular_card_component.RegularCardComponent, {
        containerClassName: this.props.classes.optionsContainer,
        containerStyle: containerStyles,
        bodyStyle: bodyStyle
      }, this._renderOptionsContainers()) : null;
    }
  }, {
    key: "_renderOuterContainer",
    value: function _renderOuterContainer() {
      return React.createElement("div", {
        className: this._getComponentOuterContainerClasses(),
        style: this._getComponentContainerStyles()
      }, this._renderInput(), this._renderTextInputContainer(), this._renderGlobalOverlayComponent(), this._renderOptionsContainer());
    }
  }, {
    key: "render",
    value: function render() {
      return this._renderOuterContainer();
    } // endregion

  }]);

  return FormDropDownInputClass;
}(React.Component), _class2.displayName = 'FormDropDownInputClass', _class2.defaultProps = {
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
  }, "onFocus", function onFocus() {}),
  classes: {}
}, _class2.defaultState = {
  optionsShown: false,
  selectedOption: null
}, _temp)) || _class);
exports.FormDropDownInputClass = FormDropDownInputClass;

function FormDropDownInputComponent(props) {
  return React.createElement(_main_theme_provider.MainThemeContext.Consumer, null, function (windowDimensions) {
    return React.createElement(FormDropDownInputClass, _extends({}, props, windowDimensions));
  });
}

FormDropDownInputComponent.displayName = 'FormDropDownInputComponent'; // exports

var _default = FormDropDownInputComponent;
exports.default = _default;