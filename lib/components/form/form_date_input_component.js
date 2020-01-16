'use strict'; // external imports

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormDateInputComponent = FormDateInputComponent;
exports.default = exports.FormDateInputClass = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _classnames = _interopRequireDefault(require("classnames"));

var _moment = _interopRequireDefault(require("moment"));

var _ramda = require("ramda");

var _dom_helpers = require("@webfuturistics/design_components/lib/helpers/general/dom_helpers");

var _main_theme_provider = require("./../../theming/providers/main_theme_provider");

var _form_text_input_component = require("./form_text_input_component");

var _simple_calender_component = require("./../date/simple_calender_component");

var _global_overlay_component = require("./../window/global_overlay_component");

var _dec, _class, _class2, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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


var FormDateInputClass = (_dec = (0, _reactJss.default)(styles), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FormDateInputClass, _React$Component);

  // region static props
  // endregion
  // region constructor
  function FormDateInputClass(props) {
    var _this;

    _classCallCheck(this, FormDateInputClass);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormDateInputClass).call(this, props));
    _this._id = void 0;

    var self = _assertThisInitialized(_this);

    self._onDateInputClick = self._onDateInputClick.bind(_assertThisInitialized(_this));
    self._onOverlayClick = self._onOverlayClick.bind(_assertThisInitialized(_this));
    self._onDateSelect = self._onDateSelect.bind(_assertThisInitialized(_this));
    _this.state = {
      dateSelectorShown: false
    };
    _this._id = _this._createInputId();
    return _this;
  } // endregion
  // region lifecycle methods


  _createClass(FormDateInputClass, [{
    key: "_closeDateSelector",
    value: function _closeDateSelector() {
      this.setState({
        dateSelectorShown: false
      });
    } // endregion
    // region style accessors

  }, {
    key: "_getComponentOuterContainerClassName",
    value: function _getComponentOuterContainerClassName() {
      return (0, _classnames.default)(this.props.classes.componentOuterContainer, this.props.componentContainerClassName);
    }
  }, {
    key: "_getTextInputContainerClassName",
    value: function _getTextInputContainerClassName() {
      return this.props.classes.textInputContainer;
    } // endregion
    // region label accessors
    // endregion
    // region state accessors

  }, {
    key: "_createInputId",
    value: function _createInputId() {
      var _this$_getInputData = this._getInputData(),
          name = _this$_getInputData.name;

      var randomIdNumber = (0, _dom_helpers.generateRandomIdNumber)();

      if ((0, _ramda.isNil)(name)) {
        throw new Error('Name cannot be null, cannot create input ID');
      }

      return "date_input_".concat(name, "_").concat(randomIdNumber);
    } // endregion
    // region prop accessors

  }, {
    key: "_isReadOnly",
    value: function _isReadOnly() {
      var readOnly = this.props.readOnly;
      return (0, _ramda.defaultTo)(FormDateInputClass.defaultProps.readOnly)(readOnly);
    }
  }, {
    key: "_isDisabled",
    value: function _isDisabled() {
      var disabled = this.props.disabled;
      return (0, _ramda.defaultTo)(FormDateInputClass.defaultProps.disabled)(disabled);
    }
  }, {
    key: "_getDate",
    value: function _getDate() {
      var _this$_getInputData2 = this._getInputData(),
          value = _this$_getInputData2.value;

      var parsedDate = (0, _moment.default)(value);
      return parsedDate.isValid() ? parsedDate : (0, _moment.default)();
    }
  }, {
    key: "_getDateFormat",
    value: function _getDateFormat() {
      var dateFormat = this.props.dateFormat;
      return (0, _ramda.defaultTo)(FormDateInputClass.defaultProps.dateFormat)(dateFormat);
    }
  }, {
    key: "_getInputData",
    value: function _getInputData() {
      var input = this.props.input;
      return (0, _ramda.isNil)(input) ? (0, _ramda.clone)(FormDateInputClass.defaultProps.input) : input;
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
      var currentValue = (0, _ramda.defaultTo)('')(input.value);

      var dateFormat = this._getDateFormat();

      var newInput = (0, _ramda.mergeDeepRight)(input, {
        name: "".concat(currentName, "_subTextField"),
        value: (0, _ramda.is)(Object, currentValue) ? (0, _moment.default)(currentValue).format(dateFormat) : '',
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
        iconClassNames: 'fas fa-calendar',
        meta: meta,
        input: newInput
      };
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
    key: "_onDateSelect",
    value: function _onDateSelect(date) {
      this._closeDateSelector();

      var _this$_getInputData3 = this._getInputData(),
          onChange = _this$_getInputData3.onChange;

      onChange(date);
    }
  }, {
    key: "_onOverlayClick",
    value: function _onOverlayClick() {
      this._closeDateSelector();
    }
  }, {
    key: "_onDateInputClick",
    value: function _onDateInputClick() {
      if (this._isReadOnly() || this._isDisabled()) {
        return;
      }

      this.setState({
        dateSelectorShown: true
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
        className: this._getTextInputContainerClassName(),
        onClick: this._onDateInputClick
      }, this._renderTextInputComponent());
    }
  }, {
    key: "_renderDateSelector",
    value: function _renderDateSelector() {
      return React.createElement(_global_overlay_component.GlobalOverlayComponent, {
        show: this.state.dateSelectorShown,
        onOverlayClick: this._onOverlayClick
      }, React.createElement(_simple_calender_component.SimpleCalendarComponent, {
        date: this._getDate(),
        onDateSelect: this._onDateSelect
      }));
    }
  }, {
    key: "_renderOuterContainer",
    value: function _renderOuterContainer() {
      return React.createElement("div", {
        className: this._getComponentOuterContainerClassName(),
        style: this._getComponentContainerStyles()
      }, this._renderTextInputContainer(), this._renderDateSelector());
    }
  }, {
    key: "render",
    value: function render() {
      return this._renderOuterContainer();
    } // endregion

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
  }, "onFocus", function onFocus() {}),
  classes: {}
}, _temp)) || _class);
exports.FormDateInputClass = FormDateInputClass;

function FormDateInputComponent(props) {
  return React.createElement(_main_theme_provider.MainThemeContext.Consumer, null, function (windowDimensions) {
    return React.createElement(FormDateInputClass, _extends({}, props, windowDimensions));
  });
}

FormDateInputComponent.displayName = 'FormDateInputComponent'; // exports

var _default = FormDateInputComponent;
exports.default = _default;