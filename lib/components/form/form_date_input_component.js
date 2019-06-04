'use strict'; // external imports

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.symbol.to-primitive");

require("core-js/modules/es.symbol.to-string-tag");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.find");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.array.splice");

require("core-js/modules/es.date.to-primitive");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.function.name");

require("core-js/modules/es.json.to-string-tag");

require("core-js/modules/es.math.to-string-tag");

require("core-js/modules/es.number.constructor");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormDateInputComponent = FormDateInputComponent;
exports.FormDateInputClass = void 0;

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function _getDecoratorsApi() { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function initializeInstanceElements(O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function initializeClassElements(F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function defineClassElement(receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function decorateClass(elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function addElementPlacement(element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function decorateElement(element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function decorateConstructor(elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function fromElementDescriptor(element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function toElementDescriptors(elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function toElementDescriptor(elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function toElementFinisherExtras(elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function fromClassDescriptor(elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function toClassDescriptor(obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function runClassFinishers(constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function disallowProperty(obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function isSameElement(other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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


var FormDateInputClass = _decorate([(0, _reactJss.default)(styles)], function (_initialize, _React$Component) {
  var FormDateInputClass =
  /*#__PURE__*/
  function (_React$Component2) {
    _inherits(FormDateInputClass, _React$Component2);

    // region static props
    // endregion
    // region constructor
    function FormDateInputClass(props) {
      var _this;

      _classCallCheck(this, FormDateInputClass);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(FormDateInputClass).call(this, props));

      _initialize(_assertThisInitialized(_this));

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
    // endregion


    return FormDateInputClass;
  }(_React$Component);

  return {
    F: FormDateInputClass,
    d: [{
      kind: "field",
      static: true,
      key: "displayName",
      value: function value() {
        return 'FormDateInputClass';
      }
    }, {
      kind: "field",
      static: true,
      key: "defaultProps",
      value: function value() {
        return {
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
        };
      }
    }, {
      kind: "field",
      key: "_id",
      value: void 0
    }, {
      kind: "method",
      key: "_closeDateSelector",
      value: function _closeDateSelector() {
        this.setState({
          dateSelectorShown: false
        });
      } // endregion
      // region style accessors

    }, {
      kind: "method",
      key: "_getComponentOuterContainerClassName",
      value: function _getComponentOuterContainerClassName() {
        return (0, _classnames.default)(this.props.classes.componentOuterContainer, this.props.componentContainerClassName);
      }
    }, {
      kind: "method",
      key: "_getTextInputContainerClassName",
      value: function _getTextInputContainerClassName() {
        return this.props.classes.textInputContainer;
      } // endregion
      // region label accessors
      // endregion
      // region state accessors

    }, {
      kind: "method",
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
      kind: "method",
      key: "_isReadOnly",
      value: function _isReadOnly() {
        var readOnly = this.props.readOnly;
        return (0, _ramda.defaultTo)(FormDateInputClass.defaultProps.readOnly)(readOnly);
      }
    }, {
      kind: "method",
      key: "_isDisabled",
      value: function _isDisabled() {
        var disabled = this.props.disabled;
        return (0, _ramda.defaultTo)(FormDateInputClass.defaultProps.disabled)(disabled);
      }
    }, {
      kind: "method",
      key: "_getDate",
      value: function _getDate() {
        var _this$_getInputData2 = this._getInputData(),
            value = _this$_getInputData2.value;

        var parsedDate = (0, _moment.default)(value);
        return parsedDate.isValid() ? parsedDate : (0, _moment.default)();
      }
    }, {
      kind: "method",
      key: "_getDateFormat",
      value: function _getDateFormat() {
        var dateFormat = this.props.dateFormat;
        return (0, _ramda.defaultTo)(FormDateInputClass.defaultProps.dateFormat)(dateFormat);
      }
    }, {
      kind: "method",
      key: "_getInputData",
      value: function _getInputData() {
        var input = this.props.input;
        return (0, _ramda.isNil)(input) ? (0, _ramda.clone)(FormDateInputClass.defaultProps.input) : input;
      }
    }, {
      kind: "method",
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
      kind: "method",
      key: "_getComponentContainerStyles",
      value: function _getComponentContainerStyles() {
        var componentContainerStyles = (0, _ramda.defaultTo)({})(this.props.componentContainerStyles);
        var style = (0, _ramda.defaultTo)({})(this.props.style);
        return Object.assign({}, componentContainerStyles, style);
      } // endregion
      // region handlers

    }, {
      kind: "method",
      key: "_onDateSelect",
      value: function _onDateSelect(date) {
        this._closeDateSelector();

        var _this$_getInputData3 = this._getInputData(),
            onChange = _this$_getInputData3.onChange;

        onChange(date);
      }
    }, {
      kind: "method",
      key: "_onOverlayClick",
      value: function _onOverlayClick() {
        this._closeDateSelector();
      }
    }, {
      kind: "method",
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
      kind: "method",
      key: "_renderTextInputComponent",
      value: function _renderTextInputComponent() {
        return React.createElement(_form_text_input_component.FormTextInputComponent, this._getFormTextInputComponentProps());
      }
    }, {
      kind: "method",
      key: "_renderTextInputContainer",
      value: function _renderTextInputContainer() {
        return React.createElement("div", {
          className: this._getTextInputContainerClassName(),
          onClick: this._onDateInputClick
        }, this._renderTextInputComponent());
      }
    }, {
      kind: "method",
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
      kind: "method",
      key: "_renderOuterContainer",
      value: function _renderOuterContainer() {
        return React.createElement("div", {
          className: this._getComponentOuterContainerClassName(),
          style: this._getComponentContainerStyles()
        }, this._renderTextInputContainer(), this._renderDateSelector());
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return this._renderOuterContainer();
      }
    }]
  };
}, React.Component); // exports


exports.FormDateInputClass = FormDateInputClass;

function FormDateInputComponent(props) {
  return React.createElement(_main_theme_provider.MainThemeContext.Consumer, null, function (windowDimensions) {
    return React.createElement(FormDateInputClass, _extends({}, props, windowDimensions));
  });
}

FormDateInputComponent.displayName = 'FormDateInputComponent';