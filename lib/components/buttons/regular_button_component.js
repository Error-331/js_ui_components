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
exports.RegularButtonComponent = RegularButtonComponent;
exports.RegularButtonClass = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ramda = require("ramda");

var _utility_helpers = require("@webfuturistics/design_components/lib/helpers/general/utility_helpers");

var _general_constants = require("./../../theming/constants/general_constants");

var _font_icon = require("./../layout/icons/font_icon");

var _inline_text_block = require("./../layout/text/inline_text_block");

var _main_theme_provider = require("./../../theming/providers/main_theme_provider");

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
var verticalPadding = 11; // px

var horizontalPadding = 16; // px

var doubleVerticalPadding = verticalPadding * 2;
var doubleHorizontalPadding = horizontalPadding * 2;
var roundButtonSpacing = (0, _ramda.max)(doubleHorizontalPadding, doubleVerticalPadding);

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
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'flex-start',
      borderRadius: '2px',
      padding: "".concat(verticalPadding, "px ").concat(horizontalPadding, "px"),
      '-webkit-tap-highlight-color': 'transparent',
      transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      cursor: 'pointer',
      '&.rectangular': {
        '&.tiny': {
          minWidth: theme.buttonStyles.tinyRegularButtonMinimumWidth
        },
        '&.small': {
          minWidth: theme.buttonStyles.smallRegularButtonMinimumWidth
        },
        '&.medium': {
          minWidth: theme.buttonStyles.mediumRegularButtonMinimumWidth
        },
        '&.large': {
          minWidth: theme.buttonStyles.largeRegularButtonMinimumWidth
        },
        '&.extraLarge': {
          minWidth: theme.buttonStyles.extraLargeRegularButtonMinimumWidth
        }
      },
      '&.round': {
        borderRadius: '50%',
        '&.tiny': {
          minWidth: "".concat(theme.layoutStyles.tinyIconSize + roundButtonSpacing, "px"),
          minHeight: "".concat(theme.layoutStyles.tinyIconSize + roundButtonSpacing, "px")
        },
        '&.small': {
          minWidth: "".concat(theme.layoutStyles.smallIconSize + roundButtonSpacing, "px"),
          minHeight: "".concat(theme.layoutStyles.smallIconSize + roundButtonSpacing, "px")
        },
        '&.medium': {
          minWidth: "".concat(theme.layoutStyles.mediumIconSize + roundButtonSpacing, "px"),
          minHeight: "".concat(theme.layoutStyles.mediumIconSize + roundButtonSpacing, "px")
        },
        '&.large': {
          minWidth: "".concat(theme.layoutStyles.largeIconSize + roundButtonSpacing, "px"),
          minHeight: "".concat(theme.layoutStyles.largeIconSize + roundButtonSpacing, "px")
        },
        '&.extraLarge': {
          minWidth: "".concat(theme.layoutStyles.extraLargeIconSize + roundButtonSpacing, "px"),
          minHeight: "".concat(theme.layoutStyles.extraLargeIconSize + roundButtonSpacing, "px")
        }
      },
      '&.text': {
        border: 'none',
        '&:hover': {
          backgroundColor: theme.colorUtilities.shadeColorFast(theme.buttonStyles.bgColor, 0.8)
        },
        '& > $iconContainer': {
          '&.default': {
            color: theme.buttonStyles.fontColorDefaultNoBG
          }
        },
        '& > $captionContainer': {
          fontFamily: theme.buttonStyles.fontStackBold,
          '&.default': {
            color: theme.buttonStyles.fontColorDefaultNoBG
          }
        }
      },
      '&.outlined': {
        border: "".concat(theme.buttonStyles.borderSize, "px solid ").concat(theme.buttonStyles.borderColor),
        padding: "".concat(verticalPadding - theme.buttonStyles.borderSize, "px ").concat(horizontalPadding - theme.buttonStyles.borderSize, "px"),
        '&:hover': {
          backgroundColor: theme.colorUtilities.shadeColorFast(theme.buttonStyles.bgColor, 0.8)
        },
        '& > $iconContainer': {
          '&.default': {
            color: theme.buttonStyles.fontColorDefaultNoBG
          }
        },
        '& > $captionContainer': {
          fontFamily: theme.buttonStyles.fontStackRegular,
          '&.default': {
            color: theme.buttonStyles.fontColorDefaultNoBG
          }
        }
      },
      '&.contained': {
        border: 'none',
        boxShadow: theme.materialDepthLevels.materialDepth1BoxShadow,
        backgroundColor: theme.buttonStyles.bgColor,
        '&:hover': {
          backgroundColor: theme.colorUtilities.shadeColorFast(theme.buttonStyles.bgColor, -0.2)
        },
        '& > $iconContainer': {
          '&.default': {
            color: theme.buttonStyles.fontColorDefaultWithBG
          }
        },
        '& > $captionContainer': {
          fontFamily: theme.buttonStyles.fontStackRegular,
          '&.default': {
            color: theme.buttonStyles.fontColorDefaultWithBG
          }
        }
      },
      '&.text.disabled': {
        '&:hover': {
          backgroundColor: theme.baseStyles.transparentBGColor
        },
        '& > $iconContainer': {
          '&.default': {
            color: theme.buttonStyles.fontColorSecondary
          }
        },
        '& > $captionContainer': {
          '&.default': {
            color: theme.buttonStyles.fontColorSecondary
          }
        }
      },
      '&.outlined.disabled': {
        borderColor: theme.buttonStyles.disabledBgColor,
        '&:hover': {
          backgroundColor: theme.baseStyles.transparentBGColor
        },
        '& > $iconContainer': {
          '&.default': {
            color: theme.buttonStyles.fontColorSecondary
          }
        },
        '& > $captionContainer': {
          '&.default': {
            color: theme.buttonStyles.fontColorSecondary
          }
        }
      },
      '&.contained.disabled': {
        backgroundColor: theme.buttonStyles.disabledBgColor,
        '&:hover': {
          backgroundColor: theme.buttonStyles.disabledBgColor
        },
        '& > $iconContainer': {
          '&.default': {
            color: theme.buttonStyles.fontColorSecondary
          }
        },
        '& > $captionContainer': {
          '&.default': {
            color: theme.buttonStyles.fontColorSecondary
          }
        }
      },
      '& > $iconContainer': {
        flexBasis: 'auto',
        flexGrow: 0,
        flexShrink: 1,
        color: theme.buttonStyles.fontColorDefault,
        '&.left': {
          marginLeft: '10px'
        },
        '&.right': {
          marginRight: '10px'
        },
        '&.primary': {
          color: theme.buttonStyles.fontColorPrimary
        },
        '&.secondary': {
          color: theme.buttonStyles.fontColorSecondary
        }
      },
      '& > $captionContainer': {
        flexBasis: 'auto',
        flexGrow: 0,
        flexShrink: 1,
        textTransform: 'uppercase',
        textAlign: 'center',
        letterSpacing: '.5px',
        '&.primary': {
          color: theme.buttonStyles.fontColorPrimary
        },
        '&.secondary': {
          color: theme.buttonStyles.fontColorSecondary
        },
        '&.tiny': {
          fontSize: theme.buttonStyles.tinyCaptionFontSize
        },
        '&.small': {
          fontSize: theme.buttonStyles.smallCaptionFontSize
        },
        '&.medium': {
          fontSize: theme.buttonStyles.mediumCaptionFontSize
        },
        '&.large': {
          fontSize: theme.buttonStyles.largeCaptionFontSize
        },
        '&.extraLarge': {
          fontSize: theme.buttonStyles.extraLargeCaptionFontSize
        }
      }
    },
    iconContainer: {},
    captionContainer: {}
  };
};
/**
 * Regular button component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation
// $FlowFixMe decorators


var RegularButtonClass = _decorate([(0, _reactJss.default)(styles)], function (_initialize, _React$Component) {
  var RegularButtonClass =
  /*#__PURE__*/
  function (_React$Component2) {
    _inherits(RegularButtonClass, _React$Component2);

    // region static props
    // endregion
    // region constructor
    function RegularButtonClass(props) {
      var _this;

      _classCallCheck(this, RegularButtonClass);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(RegularButtonClass).call(this, props));

      _initialize(_assertThisInitialized(_this));

      var self = _assertThisInitialized(_this);

      self._onClick = self._onClick.bind(_assertThisInitialized(_this));
      return _this;
    } // endregion
    // region lifecycle methods
    // endregion
    // region style accessors
    // endregion


    return RegularButtonClass;
  }(_React$Component);

  return {
    F: RegularButtonClass,
    d: [{
      kind: "field",
      static: true,
      key: "displayName",
      value: function value() {
        return 'RegularButtonClass';
      }
    }, {
      kind: "field",
      static: true,
      key: "defaultProps",
      value: function value() {
        return {
          label: '',
          onClick: function onClick() {}
        };
      }
    }, {
      kind: "method",
      key: "_getIconClassName",
      value: function _getIconClassName() {
        var _this$props = this.props,
            iconClassName = _this$props.iconClassName,
            classes = _this$props.classes;

        var textType = this._getTextType();

        if ((0, _ramda.isNil)(iconClassName)) {
          return null;
        }

        return (0, _classnames.default)(classes.iconContainer, iconClassName, {
          'left': (0, _ramda.equals)('left', this._getLabelPosition()),
          'right': (0, _ramda.equals)('right', this._getLabelPosition())
        }, textType);
      }
    }, {
      kind: "method",
      key: "_getComponentContainerClass",
      value: function _getComponentContainerClass() {
        var _this$props2 = this.props,
            componentContainer = _this$props2.classes.componentContainer,
            containerClassName = _this$props2.containerClassName,
            className = _this$props2.className;

        var buttonShape = this._getShape();

        var buttonVariant = this._getVariant();

        var size = this._getSize();

        return (0, _classnames.default)(componentContainer, buttonShape, size, buttonVariant, {
          'disabled': this._getDisabled()
        }, containerClassName, className);
      }
    }, {
      kind: "method",
      key: "_getCaptionContainerClass",
      value: function _getCaptionContainerClass() {
        var captionContainer = this.props.classes.captionContainer;

        var textType = this._getTextType();

        return (0, _classnames.default)(captionContainer, this._getSize(), textType);
      } // endregion
      // region label accessors
      // endregion
      // region state accessors
      // endregion
      // region prop accessors

    }, {
      kind: "method",
      key: "_getDisabled",
      value: function _getDisabled() {
        return (0, _ramda.defaultTo)(false)(this.props.disabled);
      }
    }, {
      kind: "method",
      key: "_getVariant",
      value: function _getVariant() {
        var _this$props$variant = this.props.variant,
            variant = _this$props$variant === void 0 ? 'contained' : _this$props$variant;
        return variant.toLowerCase();
      }
    }, {
      kind: "method",
      key: "_getShape",
      value: function _getShape() {
        var _this$props$shape = this.props.shape,
            shape = _this$props$shape === void 0 ? 'rectangular' : _this$props$shape;
        return shape.toLowerCase();
      }
    }, {
      kind: "method",
      key: "_getTextType",
      value: function _getTextType() {
        var _this$props$textType = this.props.textType,
            textType = _this$props$textType === void 0 ? 'default' : _this$props$textType;
        return textType.toLowerCase();
      }
    }, {
      kind: "method",
      key: "_getLabelPosition",
      value: function _getLabelPosition() {
        var labelPosition = this.props.labelPosition;
        labelPosition = (0, _ramda.is)(String, labelPosition) ? labelPosition.toLowerCase() : labelPosition;

        if (this._isLabelEmpty()) {
          return '';
        }

        return (0, _ramda.unless)(_utility_helpers.isNotNil, (0, _ramda.always)('left'))(labelPosition);
      }
    }, {
      kind: "method",
      key: "_getLabel",
      value: function _getLabel() {
        return (0, _ramda.defaultTo)('')(this.props.label);
      }
    }, {
      kind: "method",
      key: "_getContainerStyles",
      value: function _getContainerStyles() {
        var containerStyles = (0, _ramda.defaultTo)({})(this.props.containerStyles);
        var style = (0, _ramda.defaultTo)({})(this.props.style);
        return Object.assign({}, containerStyles, style);
      }
    }, {
      kind: "method",
      key: "_getSize",
      value: function _getSize() {
        return (0, _ramda.defaultTo)(_general_constants.SMALL_SIZE)(this.props.size);
      }
    }, {
      kind: "method",
      key: "_isLabelEmpty",
      value: function _isLabelEmpty() {
        return (0, _ramda.isEmpty)(this._getLabel());
      } // endregion
      // region handlers

    }, {
      kind: "method",
      key: "_onClick",
      value: function _onClick(event) {
        var onClick = this.props.onClick;

        if ((0, _ramda.isNil)(onClick) && !(0, _ramda.is)(Function, onClick)) {
          return;
        }

        onClick(event);
      } // endregion
      // region render methods

    }, {
      kind: "method",
      key: "_renderCaptionContainer",
      value: function _renderCaptionContainer() {
        return React.createElement(_inline_text_block.InlineTextBlock, {
          className: this._getCaptionContainerClass()
        }, this._getLabel());
      }
    }, {
      kind: "method",
      key: "_renderIconContainer",
      value: function _renderIconContainer() {
        var _this2 = this;

        return (0, _ramda.unless)(_ramda.isNil, function (className) {
          return React.createElement(_font_icon.FontIcon, {
            size: _this2._getSize(),
            className: className
          });
        })(this._getIconClassName());
      }
    }, {
      kind: "method",
      key: "_renderComponentContainer",
      value: function _renderComponentContainer() {
        var onClickHandler = this._onClick;

        var labelPosition = this._getLabelPosition();

        var isDisabled = this._getDisabled();

        return React.createElement("div", {
          onClick: isDisabled ? null : onClickHandler,
          className: this._getComponentContainerClass(),
          style: this._getContainerStyles()
        }, (0, _ramda.equals)('right', labelPosition) ? this._renderIconContainer() : null, this._renderCaptionContainer(), (0, _ramda.or)((0, _ramda.equals)('left', labelPosition), this._isLabelEmpty()) ? this._renderIconContainer() : null);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return this._renderComponentContainer();
      }
    }]
  };
}, React.Component); // exports


exports.RegularButtonClass = RegularButtonClass;

function RegularButtonComponent(props) {
  return React.createElement(_main_theme_provider.MainThemeContext.Consumer, null, function (windowDimensions) {
    return React.createElement(RegularButtonClass, _extends({}, props, windowDimensions));
  });
}

RegularButtonComponent.displayName = 'RegularButtonComponent';