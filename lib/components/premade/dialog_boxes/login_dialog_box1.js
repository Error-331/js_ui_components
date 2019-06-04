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
exports.LoginDialogBox1Component = LoginDialogBox1Component;
exports.LoginDialogBox1Class = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _ramda = require("ramda");

var _main_theme_provider = require("./../../../theming/providers/main_theme_provider");

var _regular_card_component = require("./../../layout/structure/regular_card_component");

var _regular_card_header_component = require("./../../layout/structure/regular_card_header_component");

var _dialog_box_actions_container = require("./../../layout/alignment/dialog_box/dialog_box_actions_container");

var _redux_form_text_input_component = require("./../../redux_form/redux_form_text_input_component");

var _redux_form_drop_down_input_component = require("./../../redux_form/redux_form_drop_down_input_component");

var _regular_button_component = require("./../../buttons/regular_button_component");

var _regular_alert_component = require("./../../layout/alerts/regular_alert_component");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
    cardContainer: {
      boxSizing: 'border-box',
      maxWidth: '510px'
    },
    controlsContainer: {
      boxSizing: 'border-box',
      display: 'grid',
      gridTemplateAreas: "\n            \"alert    \"\n            \"email    \"\n            \"password \"\n            \"selection\"\n            \"actions  \"\n        ",
      gridColumnGap: "".concat(theme.layoutStyles.formHorizontalSpacing, "px"),
      gridRowGap: "".concat(theme.layoutStyles.formVerticalSpacing, "px"),
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'repeat(auto-fit, max-content)',
      '& > $alertContainer': {
        boxSizing: 'border-box',
        gridArea: 'alert'
      },
      '& > $emailControl': {
        boxSizing: 'border-box',
        gridArea: 'email'
      },
      '& > $passwordControl': {
        boxSizing: 'border-box',
        gridArea: 'password'
      },
      '& > $selectionContainer': {
        gridArea: 'selection'
      },
      '& > $actionsContainer': {
        gridArea: 'actions'
      }
    },
    alertContainer: {},
    emailControl: {},
    passwordControl: {},
    selectionContainer: {},
    actionsContainer: {}
  };
};
/**
 * Login dialog box (variant 1).
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation
// $FlowFixMe decorators


var LoginDialogBox1Class = _decorate([(0, _reactJss.default)(styles)], function (_initialize, _React$Component) {
  var LoginDialogBox1Class =
  /*#__PURE__*/
  function (_React$Component2) {
    _inherits(LoginDialogBox1Class, _React$Component2);

    function LoginDialogBox1Class() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, LoginDialogBox1Class);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LoginDialogBox1Class)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _initialize(_assertThisInitialized(_this));

      return _this;
    }

    return LoginDialogBox1Class;
  }(_React$Component);

  return {
    F: LoginDialogBox1Class,
    d: [{
      kind: "field",
      static: true,
      key: "displayName",
      value: function value() {
        return 'LoginDialogBox1Class';
      }
    }, {
      kind: "field",
      static: true,
      key: "defaultProps",
      value: function value() {
        return {
          headerText: 'Login',
          alertText: null,
          loginInputLabel: 'Email',
          loginInputPlaceholder: 'user email...',
          loginInputIconClassName: 'fas fa-at',
          passwordInputLabel: 'Password',
          passwordInputPlaceholder: 'user password...',
          dropDownInputLabel: '',
          dropDownInputPlaceholder: '',
          dropDownInputOptions: {},
          showDropDownInput: false,
          showRegisterButton: false,
          showForgotPasswordButton: false,
          loginButtonLabel: 'Login',
          forgotPasswordButtonLabel: 'Forgot password ?',
          registerButtonLabel: 'Register',
          onClickLogin: function onClickLogin() {},
          onClickRegister: function onClickRegister() {},
          onClickForgotPassword: function onClickForgotPassword() {}
        };
      }
    }, {
      kind: "method",
      key: "_getActionsContainerClassName",
      value: // region static props
      // endregion
      // region private props
      // endregion
      // region constructor
      // endregion
      // region business logic
      // endregion
      // region lifecycle methods
      // endregion
      // region style accessors
      function _getActionsContainerClassName() {
        return this.props.classes.actionsContainer;
      }
    }, {
      kind: "method",
      key: "_getSelectionContainer",
      value: function _getSelectionContainer() {
        return this.props.classes.selectionContainer;
      }
    }, {
      kind: "method",
      key: "_getPasswordInputClassName",
      value: function _getPasswordInputClassName() {
        return this.props.classes.passwordControl;
      }
    }, {
      kind: "method",
      key: "_getLoginInputIconClassName",
      value: function _getLoginInputIconClassName() {
        return (0, _ramda.defaultTo)(LoginDialogBox1Class.defaultProps.loginInputIconClassName)(this.props.loginInputIconClassName);
      }
    }, {
      kind: "method",
      key: "_getAlertContainerClassName",
      value: function _getAlertContainerClassName() {
        return this.props.classes.alertContainer;
      }
    }, {
      kind: "method",
      key: "_getLoginInputClassName",
      value: function _getLoginInputClassName() {
        return this.props.classes.emailControl;
      }
    }, {
      kind: "method",
      key: "_getControlsContainerClassName",
      value: function _getControlsContainerClassName() {
        return this.props.classes.controlsContainer;
      }
    }, {
      kind: "method",
      key: "_getCardContainerClassName",
      value: function _getCardContainerClassName() {
        return this.props.classes.cardContainer;
      } // endregion
      // region label accessors
      // endregion
      // region state accessors
      // endregion
      // region prop accessors

    }, {
      kind: "method",
      key: "_getMainButtonsGroupCount",
      value: function _getMainButtonsGroupCount() {
        var buttonsCount = 0;
        buttonsCount = this._renderLoginButton() ? buttonsCount + 1 : buttonsCount;
        buttonsCount = this._renderRegisterButton() ? buttonsCount + 1 : buttonsCount;
        return buttonsCount;
      }
    }, {
      kind: "method",
      key: "_getClickRegisterButtonCallback",
      value: function _getClickRegisterButtonCallback() {
        return (0, _ramda.defaultTo)(LoginDialogBox1Class.defaultProps.onClickRegister)(this.props.onClickRegister);
      }
    }, {
      kind: "method",
      key: "_getClickForgotPasswordButtonCallback",
      value: function _getClickForgotPasswordButtonCallback() {
        return (0, _ramda.defaultTo)(LoginDialogBox1Class.defaultProps.onClickForgotPassword)(this.props.onClickForgotPassword);
      }
    }, {
      kind: "method",
      key: "_getClickLoginButtonCallback",
      value: function _getClickLoginButtonCallback() {
        return (0, _ramda.defaultTo)(LoginDialogBox1Class.defaultProps.onClickLogin)(this.props.onClickLogin);
      }
    }, {
      kind: "method",
      key: "_getDropDownInputOptions",
      value: function _getDropDownInputOptions() {
        return (0, _ramda.defaultTo)(LoginDialogBox1Class.defaultProps.dropDownInputOptions)(this.props.dropDownInputOptions);
      }
    }, {
      kind: "method",
      key: "_showDropDownInput",
      value: function _showDropDownInput() {
        return (0, _ramda.defaultTo)(LoginDialogBox1Class.defaultProps.showDropDownInput)(this.props.showDropDownInput);
      }
    }, {
      kind: "method",
      key: "_showRegisterButton",
      value: function _showRegisterButton() {
        return (0, _ramda.defaultTo)(LoginDialogBox1Class.defaultProps.showRegisterButton)(this.props.showRegisterButton);
      }
    }, {
      kind: "method",
      key: "_showForgotPasswordButton",
      value: function _showForgotPasswordButton() {
        return (0, _ramda.defaultTo)(LoginDialogBox1Class.defaultProps.showForgotPasswordButton)(this.props.showForgotPasswordButton);
      }
    }, {
      kind: "method",
      key: "_getRegisterButtonLabel",
      value: function _getRegisterButtonLabel() {
        return (0, _ramda.defaultTo)(LoginDialogBox1Class.defaultProps.registerButtonLabel)(this.props.registerButtonLabel);
      }
    }, {
      kind: "method",
      key: "_getForgotPasswordButtonLabel",
      value: function _getForgotPasswordButtonLabel() {
        return (0, _ramda.defaultTo)(LoginDialogBox1Class.defaultProps.forgotPasswordButtonLabel)(this.props.forgotPasswordButtonLabel);
      }
    }, {
      kind: "method",
      key: "_getLoginButtonLabel",
      value: function _getLoginButtonLabel() {
        return (0, _ramda.defaultTo)(LoginDialogBox1Class.defaultProps.loginButtonLabel)(this.props.loginButtonLabel);
      }
    }, {
      kind: "method",
      key: "_getDropDownInputPlaceholder",
      value: function _getDropDownInputPlaceholder() {
        return (0, _ramda.defaultTo)(LoginDialogBox1Class.defaultProps.dropDownInputPlaceholder)(this.props.dropDownInputPlaceholder);
      }
    }, {
      kind: "method",
      key: "_getPasswordInputPlaceholder",
      value: function _getPasswordInputPlaceholder() {
        return (0, _ramda.defaultTo)(LoginDialogBox1Class.defaultProps.passwordInputPlaceholder)(this.props.passwordInputPlaceholder);
      }
    }, {
      kind: "method",
      key: "_getLoginInputPlaceholder",
      value: function _getLoginInputPlaceholder() {
        return (0, _ramda.defaultTo)(LoginDialogBox1Class.defaultProps.loginInputPlaceholder)(this.props.loginInputPlaceholder);
      }
    }, {
      kind: "method",
      key: "_getDropDownInputLabel",
      value: function _getDropDownInputLabel() {
        return (0, _ramda.defaultTo)(LoginDialogBox1Class.defaultProps.dropDownInputLabel)(this.props.dropDownInputLabel);
      }
    }, {
      kind: "method",
      key: "_getPasswordInputLabel",
      value: function _getPasswordInputLabel() {
        return (0, _ramda.defaultTo)(LoginDialogBox1Class.defaultProps.passwordInputLabel)(this.props.passwordInputLabel);
      }
    }, {
      kind: "method",
      key: "_getLoginInputLabel",
      value: function _getLoginInputLabel() {
        return (0, _ramda.defaultTo)(LoginDialogBox1Class.defaultProps.loginInputLabel)(this.props.loginInputLabel);
      }
    }, {
      kind: "method",
      key: "_getPasswordInputName",
      value: function _getPasswordInputName() {
        return this.props.passwordInputName;
      }
    }, {
      kind: "method",
      key: "_getLoginInputName",
      value: function _getLoginInputName() {
        return this.props.loginInputName;
      }
    }, {
      kind: "method",
      key: "_getDropDownInputName",
      value: function _getDropDownInputName() {
        return (0, _ramda.defaultTo)('')(this.props.dropDownInputName);
      }
    }, {
      kind: "method",
      key: "_getAlertText",
      value: function _getAlertText() {
        return (0, _ramda.defaultTo)(LoginDialogBox1Class.defaultProps.alertText)(this.props.alertText);
      }
    }, {
      kind: "method",
      key: "_getHeaderText",
      value: function _getHeaderText() {
        return (0, _ramda.defaultTo)(LoginDialogBox1Class.defaultProps.headerText)(this.props.headerText);
      } // endregion
      // region handlers
      // endregion
      // region render methods

    }, {
      kind: "method",
      key: "_renderForgotPasswordButton",
      value: function _renderForgotPasswordButton() {
        return this._showForgotPasswordButton() && React.createElement(_regular_button_component.RegularButtonComponent, {
          variant: "text",
          textType: "secondary",
          containerStyle: {},
          label: this._getForgotPasswordButtonLabel(),
          onClick: this._getClickRegisterButtonCallback()
        });
      }
    }, {
      kind: "method",
      key: "_renderRegisterButton",
      value: function _renderRegisterButton() {
        return this._showRegisterButton() && React.createElement(_regular_button_component.RegularButtonComponent, {
          variant: "outlined",
          textType: "secondary",
          label: this._getRegisterButtonLabel(),
          onClick: this._getClickForgotPasswordButtonCallback()
        });
      }
    }, {
      kind: "method",
      key: "_renderLoginButton",
      value: function _renderLoginButton() {
        return React.createElement(_regular_button_component.RegularButtonComponent, {
          label: this._getLoginButtonLabel(),
          onClick: this._getClickLoginButtonCallback()
        });
      }
    }, {
      kind: "method",
      key: "_renderActionsContainer",
      value: function _renderActionsContainer() {
        return React.createElement(_dialog_box_actions_container.DialogBoxActionsContainer, {
          mainGroupCount: this._getMainButtonsGroupCount(),
          containerClassName: this._getActionsContainerClassName()
        }, this._renderLoginButton(), this._renderRegisterButton(), this._renderForgotPasswordButton());
      }
    }, {
      kind: "method",
      key: "_renderPasswordInput",
      value: function _renderPasswordInput() {
        return React.createElement(_redux_form_text_input_component.ReduxFormTextInputComponent, {
          type: "password",
          name: this._getPasswordInputName(),
          label: this._getPasswordInputLabel(),
          placeholder: this._getPasswordInputPlaceholder(),
          componentContainerClassName: this._getPasswordInputClassName(),
          iconClassNames: "fas fa-key"
        });
      }
    }, {
      kind: "method",
      key: "_renderSelectionInput",
      value: function _renderSelectionInput() {
        if (!this._showDropDownInput()) {
          return null;
        }

        return React.createElement(_redux_form_drop_down_input_component.ReduxFormDropDownInputComponent, {
          name: this._getDropDownInputName(),
          label: this._getDropDownInputLabel(),
          placeholder: this._getDropDownInputPlaceholder(),
          options: this._getDropDownInputOptions()
        });
      }
    }, {
      kind: "method",
      key: "_renderSelectionContainer",
      value: function _renderSelectionContainer() {
        return React.createElement("div", {
          className: this._getSelectionContainer()
        }, this._renderSelectionInput());
      }
    }, {
      kind: "method",
      key: "_renderLoginInput",
      value: function _renderLoginInput() {
        return React.createElement(_redux_form_text_input_component.ReduxFormTextInputComponent, {
          name: this._getLoginInputName(),
          label: this._getLoginInputLabel(),
          placeholder: this._getLoginInputPlaceholder(),
          componentContainerClassName: this._getLoginInputClassName(),
          iconClassNames: this._getLoginInputIconClassName()
        });
      }
    }, {
      kind: "method",
      key: "_renderAlert",
      value: function _renderAlert() {
        var alertText = this._getAlertText();

        return React.createElement("div", {
          className: this._getAlertContainerClassName()
        }, (0, _ramda.isNil)(alertText) ? null : React.createElement(_regular_alert_component.RegularAlertComponent, {
          accent: true
        }, alertText));
      }
    }, {
      kind: "method",
      key: "_renderControlsContainer",
      value: function _renderControlsContainer() {
        return React.createElement("div", {
          className: this._getControlsContainerClassName()
        }, this._renderAlert(), this._renderLoginInput(), this._renderPasswordInput(), this._renderSelectionContainer(), this._renderActionsContainer());
      }
    }, {
      kind: "method",
      key: "_renderCardHeader",
      value: function _renderCardHeader() {
        return React.createElement(_regular_card_header_component.RegularCardHeaderComponent, {
          iconClassNames: "fas fa-sign-in"
        }, this._getHeaderText());
      }
    }, {
      kind: "method",
      key: "_renderCard",
      value: function _renderCard() {
        return React.createElement(_regular_card_component.RegularCardComponent, {
          header: this._renderCardHeader(),
          containerClassName: this._getCardContainerClassName()
        }, this._renderControlsContainer());
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return this._renderCard();
      } // endregion

    }]
  };
}, React.Component); // exports


exports.LoginDialogBox1Class = LoginDialogBox1Class;

function LoginDialogBox1Component(props) {
  return React.createElement(_main_theme_provider.MainThemeContext.Consumer, null, function (windowDimensions) {
    return React.createElement(LoginDialogBox1Class, _extends({}, props, windowDimensions));
  });
}

LoginDialogBox1Component.displayName = 'LoginDialogBox1Component';