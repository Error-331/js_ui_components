'use strict'; // external imports

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.symbol.to-primitive");

require("core-js/modules/es.symbol.to-string-tag");

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
exports.RegularCardComponent = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ramda = require("ramda");

var _regular_card_body_component = require("./regular_card_body_component");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
    componentContainer: {
      boxSizing: 'border-box',
      display: 'flex',
      flexBasis: 'auto',
      flexGrow: 0,
      flexShrink: 1,
      flexDirection: 'column',
      flexWrap: 'nowrap',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      alignContent: 'flex-start',
      borderRadius: theme.layoutStyles.headerBorderRadius,
      backgroundColor: theme.layoutStyles.bodyBGColor,
      transition: 'box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
      '&.height1': {
        boxShadow: theme.materialDepthLevels.materialDepth1BoxShadow
      },
      '&.height2': {
        boxShadow: theme.materialDepthLevels.materialDepth2BoxShadow
      },
      '&.height3': {
        boxShadow: theme.materialDepthLevels.materialDepth3BoxShadow
      },
      '&.height4': {
        boxShadow: theme.materialDepthLevels.materialDepth4BoxShadow
      },
      '&.height5': {
        boxShadow: theme.materialDepthLevels.materialDepth5BoxShadow
      },
      '&.poppable2:hover': {
        boxShadow: theme.materialDepthLevels.materialDepth2BoxShadow
      },
      '&.poppable3:hover': {
        boxShadow: theme.materialDepthLevels.materialDepth3BoxShadow
      },
      '&.poppable4:hover': {
        boxShadow: theme.materialDepthLevels.materialDepth4BoxShadow
      },
      '&.poppable5:hover': {
        boxShadow: theme.materialDepthLevels.materialDepth5BoxShadow
      },
      '& > $componentHeader': {
        boxSizing: 'border-box',
        flexBasis: 'auto',
        flexGrow: 0,
        flexShrink: 1
      }
    },
    componentHeader: {}
  };
};
/**
 * Regular card component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation
// $FlowFixMe decorators


var RegularCardComponent = _decorate([(0, _reactJss.default)(styles)], function (_initialize, _React$Component) {
  var RegularCardComponent =
  /*#__PURE__*/
  function (_React$Component2) {
    _inherits(RegularCardComponent, _React$Component2);

    // region static props
    // endregion
    // region constructor
    function RegularCardComponent(props) {
      var _this;

      _classCallCheck(this, RegularCardComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(RegularCardComponent).call(this, props));

      _initialize(_assertThisInitialized(_this));

      var self = _assertThisInitialized(_this);

      self._onMouseOverContainer = self._onMouseOverContainer.bind(_assertThisInitialized(_this));
      self._onMouseLeaveContainer = self._onMouseLeaveContainer.bind(_assertThisInitialized(_this));
      return _this;
    } // endregion
    // region business logic
    // endregion


    return RegularCardComponent;
  }(_React$Component);

  return {
    F: RegularCardComponent,
    d: [{
      kind: "field",
      static: true,
      key: "displayName",
      value: function value() {
        return 'RegularCardComponent';
      }
    }, {
      kind: "field",
      static: true,
      key: "defaultProps",
      value: function value() {
        return {
          containerClassName: '',
          bodyClassName: '',
          bodyStyle: {},
          onClickBody: function onClickBody() {},
          theme: {},
          classes: {}
        };
      }
    }, {
      kind: "method",
      key: "_getHeightLevel",
      value: function _getHeightLevel(heightLevel) {
        heightLevel = (0, _ramda.unless)((0, _ramda.gt)(5), (0, _ramda.always)(5))(heightLevel);
        heightLevel = (0, _ramda.unless)((0, _ramda.lt)(1), (0, _ramda.always)(1))(heightLevel);
        return heightLevel;
      } // endregion
      // region lifecycle methods
      // endregion
      // region style accessors

    }, {
      kind: "method",
      key: "_getBodyStyle",
      value: function _getBodyStyle() {
        return (0, _ramda.defaultTo)(RegularCardComponent.defaultProps.bodyStyle)(this.props.bodyStyle);
      }
    }, {
      kind: "method",
      key: "_getOuterContainerStyle",
      value: function _getOuterContainerStyle() {
        return Object.assign({}, this.props.containerStyle);
      }
    }, {
      kind: "method",
      key: "_getOuterContainerClasses",
      value: function _getOuterContainerClasses() {
        var _classNames;

        var heightClassName = "height".concat(this._getCardHeightLevel());
        var poppableClassName = "poppable".concat(this._getCardPopHeightLevel());
        var containerClassName = (0, _classnames.default)(this.props.classes.componentContainer, (_classNames = {}, _defineProperty(_classNames, heightClassName, true), _defineProperty(_classNames, poppableClassName, this._getPopOnHover()), _classNames), this.props.containerClassName);
        return containerClassName;
      }
    }, {
      kind: "method",
      key: "_getBodyClasses",
      value: function _getBodyClasses() {
        return (0, _ramda.defaultTo)(RegularCardComponent.defaultProps.bodyClassName)(this.props.bodyClassName);
      } // endregion
      // region label accessors
      // endregion
      // region state accessors
      // endregion
      // region prop accessors

    }, {
      kind: "method",
      key: "_getCardPopHeightLevel",
      value: function _getCardPopHeightLevel() {
        var _this$props$maxPopLev = this.props.maxPopLevel,
            maxPopLevel = _this$props$maxPopLev === void 0 ? 5 : _this$props$maxPopLev;
        return this._getHeightLevel(maxPopLevel);
      }
    }, {
      kind: "method",
      key: "_getCardHeightLevel",
      value: function _getCardHeightLevel() {
        var _this$props$heightLev = this.props.heightLevel,
            heightLevel = _this$props$heightLev === void 0 ? 1 : _this$props$heightLev;
        return this._getHeightLevel(heightLevel);
      }
    }, {
      kind: "method",
      key: "_getPopOnHover",
      value: function _getPopOnHover() {
        var _this$props$popOnHove = this.props.popOnHover,
            popOnHover = _this$props$popOnHove === void 0 ? false : _this$props$popOnHove;
        return popOnHover;
      }
    }, {
      kind: "method",
      key: "_getClickBodyHandler",
      value: function _getClickBodyHandler() {
        return (0, _ramda.defaultTo)(RegularCardComponent.defaultProps.onClickBody)(this.props.onClickBody);
      } // endregion
      // region handlers

    }, {
      kind: "method",
      key: "_onMouseLeaveContainer",
      value: function _onMouseLeaveContainer(event) {
        var onMouseLeaveContainer = this.props.onMouseLeaveContainer;

        if ((0, _ramda.isNil)(onMouseLeaveContainer) && !(0, _ramda.is)(Function, onMouseLeaveContainer)) {
          return;
        }

        onMouseLeaveContainer(event);
      }
    }, {
      kind: "method",
      key: "_onMouseOverContainer",
      value: function _onMouseOverContainer(event) {
        var onMouseOverContainer = this.props.onMouseOverContainer;

        if ((0, _ramda.isNil)(onMouseOverContainer) && !(0, _ramda.is)(Function, onMouseOverContainer)) {
          return;
        }

        onMouseOverContainer(event);
      } // endregion
      // region render methods

    }, {
      kind: "method",
      key: "_renderHeader",
      value: function _renderHeader() {
        var _this2 = this;

        return (0, _ramda.ifElse)((0, _ramda.complement)(_ramda.isEmpty), function (header) {
          return React.createElement("div", {
            className: _this2.props.classes.componentHeader
          }, header);
        }, (0, _ramda.always)(null))(this.props.header);
      }
    }, {
      kind: "method",
      key: "_renderBody",
      value: function _renderBody() {
        var children = this.props.children;

        if ((0, _ramda.isNil)(children)) {
          return null;
        }

        return React.createElement(_regular_card_body_component.RegularCardBodyComponent, {
          className: this._getBodyClasses(),
          style: this._getBodyStyle(),
          onClick: this._getClickBodyHandler()
        }, children);
      }
    }, {
      kind: "method",
      key: "_renderOuterContainer",
      value: function _renderOuterContainer() {
        return React.createElement("div", {
          className: this._getOuterContainerClasses(),
          style: this._getOuterContainerStyle(),
          onMouseOver: this._onMouseOverContainer,
          onMouseLeave: this._onMouseLeaveContainer
        }, this._renderHeader(), this._renderBody());
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


exports.RegularCardComponent = RegularCardComponent;