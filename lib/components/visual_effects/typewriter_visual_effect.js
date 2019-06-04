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

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.replace");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TypewriterVisualEffect = TypewriterVisualEffect;
exports.TypewriterVisualEffectClass = exports.TYPEWRITER_VISUAL_EFFECT_ANIMATION_STATE_BACKWARD_NAME = exports.TYPEWRITER_VISUAL_EFFECT_ANIMATION_STAGE_FORWARD_NAME = exports.TYPEWRITER_VISUAL_EFFECT_CARET_BLINK_KEYFRAMES_STYLE_NAME = exports.TYPEWRITER_VISUAL_EFFECT_TYPING_BACKWARD_KEYFRAMES_STYLE_NAME = exports.TYPEWRITER_VISUAL_EFFECT_TYPING_FORWARD_KEYFRAMES_STYLE_NAME = exports.TYPEWRITER_VISUAL_EFFECT_ANIMATION_STEP_RATIO = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ramda = require("ramda");

var _main_theme_provider = require("./../../theming/providers/main_theme_provider");

var _inline_header = require("./../layout/text/inline_header");

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
    componentContainer: {
      boxSizing: 'border-box',
      display: 'inline-block',
      '& > $textContainer': {
        display: 'inline-block',
        overflow: 'hidden',
        margin: '0 auto',
        borderRight: "4px solid ".concat(theme.baseStyles.accentColorPrimary),
        whiteSpace: 'nowrap',
        letterSpacing: '4px'
      }
    },
    textContainer: {}
  };
}; // constants definition TYPEWRITER_VISUAL_EFFECT_


var TYPEWRITER_VISUAL_EFFECT_ANIMATION_STEP_RATIO = 0.0875;
exports.TYPEWRITER_VISUAL_EFFECT_ANIMATION_STEP_RATIO = TYPEWRITER_VISUAL_EFFECT_ANIMATION_STEP_RATIO;
var TYPEWRITER_VISUAL_EFFECT_TYPING_FORWARD_KEYFRAMES_STYLE_NAME = 'typewriter_visual_effect_typing_forward_keyframes';
exports.TYPEWRITER_VISUAL_EFFECT_TYPING_FORWARD_KEYFRAMES_STYLE_NAME = TYPEWRITER_VISUAL_EFFECT_TYPING_FORWARD_KEYFRAMES_STYLE_NAME;
var TYPEWRITER_VISUAL_EFFECT_TYPING_BACKWARD_KEYFRAMES_STYLE_NAME = 'typewriter_visual_effect_typing_backward_keyframes';
exports.TYPEWRITER_VISUAL_EFFECT_TYPING_BACKWARD_KEYFRAMES_STYLE_NAME = TYPEWRITER_VISUAL_EFFECT_TYPING_BACKWARD_KEYFRAMES_STYLE_NAME;
var TYPEWRITER_VISUAL_EFFECT_CARET_BLINK_KEYFRAMES_STYLE_NAME = 'typewriter_visual_effect_caret_bling_keyframes';
exports.TYPEWRITER_VISUAL_EFFECT_CARET_BLINK_KEYFRAMES_STYLE_NAME = TYPEWRITER_VISUAL_EFFECT_CARET_BLINK_KEYFRAMES_STYLE_NAME;
var TYPEWRITER_VISUAL_EFFECT_ANIMATION_STAGE_FORWARD_NAME = 'forward';
exports.TYPEWRITER_VISUAL_EFFECT_ANIMATION_STAGE_FORWARD_NAME = TYPEWRITER_VISUAL_EFFECT_ANIMATION_STAGE_FORWARD_NAME;
var TYPEWRITER_VISUAL_EFFECT_ANIMATION_STATE_BACKWARD_NAME = 'backward';
/**
 * Typewriter visual effect.
 * Uses [InlineHeader](#inlineheader) component for text representation.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation
// $FlowFixMe decorators

exports.TYPEWRITER_VISUAL_EFFECT_ANIMATION_STATE_BACKWARD_NAME = TYPEWRITER_VISUAL_EFFECT_ANIMATION_STATE_BACKWARD_NAME;

var TypewriterVisualEffectClass = _decorate([(0, _reactJss.default)(styles)], function (_initialize, _React$Component) {
  var TypewriterVisualEffectClass =
  /*#__PURE__*/
  function (_React$Component2) {
    _inherits(TypewriterVisualEffectClass, _React$Component2);

    // region static props
    // endregion
    // region private props
    // endregion
    // region constructor
    function TypewriterVisualEffectClass(props) {
      var _this;

      _classCallCheck(this, TypewriterVisualEffectClass);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(TypewriterVisualEffectClass).call(this, props));

      _initialize(_assertThisInitialized(_this));

      var self = _assertThisInitialized(_this);

      self.state = {
        currentTextIndex: TypewriterVisualEffectClass.defaultState.currentTextIndex,
        currentLoopIndex: TypewriterVisualEffectClass.defaultState.currentLoopIndex,
        animationStage: TypewriterVisualEffectClass.defaultState.animationStage
      };
      self._onAnimationEnd = (0, _ramda.bind)(self._onAnimationEnd, _assertThisInitialized(_this));
      return _this;
    } // endregion
    // region business logic
    // endregion


    return TypewriterVisualEffectClass;
  }(_React$Component);

  return {
    F: TypewriterVisualEffectClass,
    d: [{
      kind: "field",
      static: true,
      key: "displayName",
      value: function value() {
        return 'TypewriterVisualEffect';
      }
    }, {
      kind: "field",
      static: true,
      key: "defaultProps",
      value: function value() {
        return {
          text: null,
          level: 5,
          loopCount: 0,
          stopOnEnd: false,
          animationDelay: 1500,
          // ms
          containerStyle: {}
        };
      }
    }, {
      kind: "field",
      static: true,
      key: "defaultState",
      value: function value() {
        return {
          currentTextIndex: 0,
          currentLoopIndex: 0,
          animationStage: TYPEWRITER_VISUAL_EFFECT_ANIMATION_STAGE_FORWARD_NAME
        };
      }
    }, {
      kind: "field",
      key: "_animationDelayTimeoutId",
      value: function value() {
        return null;
      }
    }, {
      kind: "method",
      key: "_updateAnimationState",
      value: function _updateAnimationState(animationStage, currentTextIndex, currentLoopIndex) {
        var _this2 = this;

        animationStage = (0, _ramda.defaultTo)(this.state.animationStage)(animationStage);
        currentTextIndex = (0, _ramda.defaultTo)(this.state.currentTextIndex)(currentTextIndex);
        currentLoopIndex = (0, _ramda.defaultTo)(this.state.currentLoopIndex)(currentLoopIndex);
        this._animationDelayTimeoutId = setTimeout(function () {
          return _this2.setState({
            animationStage: animationStage,
            currentTextIndex: currentTextIndex,
            currentLoopIndex: currentLoopIndex
          });
        }, this._getAnimationDelay());
      }
    }, {
      kind: "method",
      key: "_canRenderLoopIteration",
      value: function _canRenderLoopIteration() {
        if ((0, _ramda.isNil)(this._getCurrentText())) {
          return false;
        }

        var loopCount = this._getLoopCount();

        var currentLoopIndex = this.state.currentLoopIndex;

        if ((0, _ramda.equals)(loopCount, Infinity)) {
          return true;
        }

        return !(0, _ramda.or)((0, _ramda.lte)(loopCount, 0), (0, _ramda.gte)(currentLoopIndex, loopCount));
      }
    }, {
      kind: "method",
      key: "_prepareGlobalKeyframeStyles",
      value: function _prepareGlobalKeyframeStyles() {
        if ((0, _ramda.isNil)(this._getText())) {
          return;
        }

        this.props.theme.styleSheetRegister.addGlobalStyles(_defineProperty({}, "@keyframes ".concat(TYPEWRITER_VISUAL_EFFECT_TYPING_FORWARD_KEYFRAMES_STYLE_NAME), {
          'from': {
            width: '0%'
          },
          'to': {
            width: '100%'
          }
        }), "@keyframes ".concat(TYPEWRITER_VISUAL_EFFECT_TYPING_FORWARD_KEYFRAMES_STYLE_NAME));
        this.props.theme.styleSheetRegister.addGlobalStyles(_defineProperty({}, "@keyframes ".concat(TYPEWRITER_VISUAL_EFFECT_TYPING_BACKWARD_KEYFRAMES_STYLE_NAME), {
          'from': {
            width: '100%'
          },
          'to': {
            width: '0%'
          }
        }), "@keyframes ".concat(TYPEWRITER_VISUAL_EFFECT_TYPING_BACKWARD_KEYFRAMES_STYLE_NAME));

        var borderColor = this._getBorderColor();

        this.props.theme.styleSheetRegister.addGlobalStyles(_defineProperty({}, "@keyframes ".concat(TYPEWRITER_VISUAL_EFFECT_CARET_BLINK_KEYFRAMES_STYLE_NAME), {
          'from, to': {
            borderColor: 'transparent'
          },
          '50%': {
            borderColor: borderColor
          }
        }), "@keyframes ".concat(TYPEWRITER_VISUAL_EFFECT_CARET_BLINK_KEYFRAMES_STYLE_NAME, "_").concat(this._getPreparedBorderColor()));
      } // endregion
      // region lifecycle methods

    }, {
      kind: "method",
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        var prevBorderColor = prevProps.theme.baseStyles.accentColorPrimary;
        var currentBorderColor = this.props.theme.baseStyles.accentColorPrimary;

        if (prevBorderColor !== currentBorderColor) {
          this._prepareGlobalKeyframeStyles();
        }
      }
    }, {
      kind: "method",
      key: "componentDidMount",
      value: function componentDidMount() {
        this._prepareGlobalKeyframeStyles();
      }
    }, {
      kind: "method",
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        (0, _ramda.unless)(_ramda.isNil, function (id) {
          return clearTimeout(id);
        })(this._animationDelayTimeoutId);
      } // endregion
      // region style accessors

    }, {
      kind: "method",
      key: "_getTextContainerClassName",
      value: function _getTextContainerClassName() {
        return (0, _classnames.default)(this.props.classes.textContainer, this.props.textClassName);
      }
    }, {
      kind: "method",
      key: "_getComponentContainerClassName",
      value: function _getComponentContainerClassName() {
        return (0, _classnames.default)(this.props.classes.componentContainer, this.props.containerClassName);
      }
    }, {
      kind: "method",
      key: "_getCurrentTextStyle",
      value: function _getCurrentTextStyle() {
        var texts = this._getText();

        if ((0, _ramda.isNil)(texts)) {
          return null;
        }

        var currentTextIndex = this.state.currentTextIndex;
        var text = texts[currentTextIndex];

        if ((0, _ramda.isNil)(text)) {
          return null;
        }

        var textLength = text.length;
        return {
          width: this.state.animationStage === TYPEWRITER_VISUAL_EFFECT_ANIMATION_STAGE_FORWARD_NAME ? 'auto' : '0%',
          animation: "\n            ".concat(this._getTypingKeyframesName(), " ").concat(TYPEWRITER_VISUAL_EFFECT_ANIMATION_STEP_RATIO * textLength, "s steps(").concat(textLength * 2, ", end),\n            ").concat(TYPEWRITER_VISUAL_EFFECT_CARET_BLINK_KEYFRAMES_STYLE_NAME, "_").concat(this._getPreparedBorderColor(), " .75s step-end infinite")
        };
      } // endregion
      // region label accessors
      // endregion
      // region state accessors

    }, {
      kind: "method",
      key: "_shouldStopOnEndNow",
      value: function _shouldStopOnEndNow() {
        return !this._isInfiniteLoop() && this._isLastText() && this._isLastLoop() && this._shouldStopOnEnd();
      }
    }, {
      kind: "method",
      key: "_shouldStopOnStartNow",
      value: function _shouldStopOnStartNow() {
        return !this._isInfiniteLoop() && this._isLastText() && this._isLastLoop() && !this._shouldStopOnEnd();
      }
    }, {
      kind: "method",
      key: "_isInfiniteLoop",
      value: function _isInfiniteLoop() {
        return (0, _ramda.equals)(this._getLoopCount(), Infinity);
      }
    }, {
      kind: "method",
      key: "_isLastText",
      value: function _isLastText() {
        var textsLength = this._getTextsLength();

        if ((0, _ramda.isNil)(textsLength)) {
          return true;
        }

        return (0, _ramda.gte)(this.state.currentTextIndex + 1, textsLength);
      }
    }, {
      kind: "method",
      key: "_isLastLoop",
      value: function _isLastLoop() {
        return (0, _ramda.gte)(this.state.currentLoopIndex + 1, this._getLoopCount());
      }
    }, {
      kind: "method",
      key: "_getCurrentText",
      value: function _getCurrentText() {
        var texts = this._getText();

        if ((0, _ramda.isNil)(texts)) {
          return null;
        }

        var currentTextIndex = this.state.currentTextIndex;

        if ((0, _ramda.gte)(currentTextIndex, (0, _ramda.length)(texts))) {
          return null;
        }

        return texts[currentTextIndex];
      }
    }, {
      kind: "method",
      key: "_getTypingKeyframesName",
      value: function _getTypingKeyframesName() {
        return this.state.animationStage === TYPEWRITER_VISUAL_EFFECT_ANIMATION_STAGE_FORWARD_NAME ? TYPEWRITER_VISUAL_EFFECT_TYPING_FORWARD_KEYFRAMES_STYLE_NAME : TYPEWRITER_VISUAL_EFFECT_TYPING_BACKWARD_KEYFRAMES_STYLE_NAME;
      } // endregion
      // region prop accessors

    }, {
      kind: "method",
      key: "_getPreparedBorderColor",
      value: function _getPreparedBorderColor() {
        return this._getBorderColor().replace('#', '');
      }
    }, {
      kind: "method",
      key: "_getBorderColor",
      value: function _getBorderColor() {
        return this.props.theme.baseStyles.accentColorPrimary;
      }
    }, {
      kind: "method",
      key: "_getContainerStyle",
      value: function _getContainerStyle() {
        return (0, _ramda.defaultTo)(TypewriterVisualEffectClass.defaultProps.containerStyle)(this.props.containerStyle);
      }
    }, {
      kind: "method",
      key: "_getTextsLength",
      value: function _getTextsLength() {
        return (0, _ramda.ifElse)(_ramda.isNil, (0, _ramda.always)(null), _ramda.length)(this._getText());
      }
    }, {
      kind: "method",
      key: "_getText",
      value: function _getText() {
        var text = this.props.text;

        if ((0, _ramda.isNil)(text)) {
          return null;
        }

        return (0, _ramda.unless)((0, _ramda.is)(Array), function (text) {
          return [text];
        })(text);
      }
    }, {
      kind: "method",
      key: "_getAnimationDelay",
      value: function _getAnimationDelay() {
        return (0, _ramda.defaultTo)(TypewriterVisualEffectClass.defaultProps.animationDelay)(this.props.animationDelay);
      }
    }, {
      kind: "method",
      key: "_shouldStopOnEnd",
      value: function _shouldStopOnEnd() {
        return (0, _ramda.defaultTo)(TypewriterVisualEffectClass.defaultProps.stopOnEnd)(this.props.stopOnEnd);
      }
    }, {
      kind: "method",
      key: "_getLoopCount",
      value: function _getLoopCount() {
        return (0, _ramda.defaultTo)(TypewriterVisualEffectClass.defaultProps.loopCount)(this.props.loopCount);
      }
    }, {
      kind: "method",
      key: "_getLevel",
      value: function _getLevel() {
        return (0, _ramda.defaultTo)(TypewriterVisualEffectClass.defaultProps.level)(this.props.level);
      } // endregion
      // region handlers

    }, {
      kind: "method",
      key: "_onAnimationEnd",
      value: function _onAnimationEnd() {
        var _this$state = this.state,
            animationStage = _this$state.animationStage,
            currentLoopIndex = _this$state.currentLoopIndex;

        if (animationStage === TYPEWRITER_VISUAL_EFFECT_ANIMATION_STAGE_FORWARD_NAME) {
          if (this._shouldStopOnStartNow()) {
            return;
          }

          return this._updateAnimationState(TYPEWRITER_VISUAL_EFFECT_ANIMATION_STATE_BACKWARD_NAME);
        } else {
          if (this._shouldStopOnEndNow()) {
            return;
          }

          var textsLength = this._getTextsLength();

          var loopCount = this._getLoopCount();

          var nextTextIndex = this.state.currentTextIndex + 1;
          var nextLoopIndex = currentLoopIndex + 1;

          if ((0, _ramda.isNil)(textsLength)) {
            return;
          }

          if ((0, _ramda.gte)(nextTextIndex, textsLength)) {
            if ((0, _ramda.equals)(loopCount, Infinity)) {
              return this._updateAnimationState(TYPEWRITER_VISUAL_EFFECT_ANIMATION_STAGE_FORWARD_NAME, 0, Infinity);
            }

            if ((0, _ramda.gte)(nextLoopIndex, loopCount)) {
              return;
            } else {
              return this._updateAnimationState(TYPEWRITER_VISUAL_EFFECT_ANIMATION_STAGE_FORWARD_NAME, 0, nextLoopIndex);
            }
          }

          return this._updateAnimationState(TYPEWRITER_VISUAL_EFFECT_ANIMATION_STAGE_FORWARD_NAME, nextTextIndex);
        }
      } // endregion
      // region render methods

    }, {
      kind: "method",
      key: "_renderInlineHeader",
      value: function _renderInlineHeader() {
        return React.createElement(_inline_header.InlineHeader, {
          className: this._getTextContainerClassName(),
          style: this._getCurrentTextStyle(),
          level: this._getLevel()
        }, this._getCurrentText());
      }
    }, {
      kind: "method",
      key: "_renderComponentContainer",
      value: function _renderComponentContainer() {
        return React.createElement("div", {
          className: this._getComponentContainerClassName(),
          style: this._getContainerStyle(),
          onAnimationEnd: this._onAnimationEnd
        }, this._renderInlineHeader());
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return (0, _ramda.ifElse)((0, _ramda.equals)(false), (0, _ramda.always)(null), (0, _ramda.bind)(this._renderComponentContainer, this))(this._canRenderLoopIteration());
      }
    }]
  };
}, React.Component); // exports


exports.TypewriterVisualEffectClass = TypewriterVisualEffectClass;

function TypewriterVisualEffect(props) {
  return React.createElement(_main_theme_provider.MainThemeContext.Consumer, null, function (windowDimensions) {
    return React.createElement(TypewriterVisualEffectClass, _extends({}, props, windowDimensions));
  });
}

TypewriterVisualEffect.displayName = 'TypewriterVisualEffect';