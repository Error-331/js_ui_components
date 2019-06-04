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

require("core-js/modules/es.array.reduce");

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

require("core-js/modules/es.parse-int");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VerticalSlidingNavigationMenuComponent = VerticalSlidingNavigationMenuComponent;
exports.VerticalSlidingNavigationMenuClass = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ramda = require("ramda");

var _utility_helpers = require("@webfuturistics/design_components/lib/helpers/general/utility_helpers");

var _main_theme_provider = require("./../../theming/providers/main_theme_provider");

var _horizontal_divider_component = require("./../utility/horizontal_divider_component");

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
    componentContainer: {
      boxSizing: 'border-box',
      display: 'flex',
      maxWidth: "".concat(theme.navigationStyles.verticalNavigationMaxWidth, "px"),
      minWidth: '245px',
      height: '100%',
      flexDirection: 'column',
      flexWrap: 'nowrap',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      alignContent: 'flex-start',
      padding: "".concat(theme.layoutStyles.topSpacing, "px \n                  ").concat(theme.layoutStyles.rightSpacing, "px \n                  ").concat(theme.layoutStyles.leftSpacing, "px \n                  ").concat(theme.layoutStyles.bottomSpacing, "px\n        "),
      backgroundColor: theme.navigationStyles.bodyBGColor1,
      '& > $menuItemContainer': {
        boxSizing: 'border-box',
        display: 'flex',
        flexBasis: 'auto',
        flexGrow: '0',
        flexShrink: '1',
        borderRadius: theme.layoutStyles.headerBorderRadius,
        padding: '8px 12px 8px 12px',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'flex-start',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: theme.navigationStyles.bodyHoverColor1
        },
        '&.utility': {
          cursor: 'default',
          '& > $dividerOuterContainer': {
            padding: '0px',
            '& > $dividerInnerContainer': {
              backgroundColor: theme.navigationStyles.fontColor1
            }
          }
        },
        '&.utility:hover': {
          backgroundColor: 'initial'
        },
        '& > $itemNodeContainer': {
          boxSizing: 'border-box',
          flexBasis: 'auto',
          flexGrow: '1',
          flexShrink: '1'
        },
        '& > $itemIconContainer': {
          boxSizing: 'border-box',
          flexBasis: 'auto',
          flexGrow: '0',
          flexShrink: '1',
          color: theme.navigationStyles.fontColor1,
          '& > i': {
            fontSize: "".concat(theme.navigationStyles.iconFontSize, "px")
          }
        },
        '& > $itemCaptionContainer': {
          boxSizing: 'border-box',
          flexBasis: 'auto',
          flexGrow: '0',
          flexShrink: '1',
          paddingLeft: '8px',
          fontFamily: theme.navigationStyles.fontStack,
          fontSize: "".concat(theme.navigationStyles.captionFontSize, "px"),
          color: theme.navigationStyles.fontColor1,
          '&::first-letter': {
            textTransform: 'uppercase'
          }
        }
      }
    },
    menuItemContainer: {},
    itemNodeContainer: {},
    itemIconContainer: {},
    itemCaptionContainer: {},
    dividerOuterContainer: {},
    dividerInnerContainer: {}
  };
};
/**
 * Vertical sliding navigation styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation
// $FlowFixMe decorators


var VerticalSlidingNavigationMenuClass = _decorate([(0, _reactJss.default)(styles)], function (_initialize, _React$Component) {
  var VerticalSlidingNavigationMenuClass =
  /*#__PURE__*/
  function (_React$Component2) {
    _inherits(VerticalSlidingNavigationMenuClass, _React$Component2);

    function VerticalSlidingNavigationMenuClass() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, VerticalSlidingNavigationMenuClass);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(VerticalSlidingNavigationMenuClass)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _initialize(_assertThisInitialized(_this));

      return _this;
    }

    return VerticalSlidingNavigationMenuClass;
  }(_React$Component);

  return {
    F: VerticalSlidingNavigationMenuClass,
    d: [{
      kind: "field",
      static: true,
      key: "displayName",
      value: function value() {
        return 'VerticalSlidingNavigationMenuClass';
      }
    }, {
      kind: "field",
      static: true,
      key: "defaultProps",
      value: function value() {
        return {
          items: null,
          selectedItems: null,
          backButtonCaption: 'back',
          backButtonIconClassName: 'fas fa-arrow-left',
          onMenuItemClickCallback: function onMenuItemClickCallback() {},
          onMenuParentItemClickCallback: function onMenuParentItemClickCallback() {}
        };
      }
    }, {
      kind: "method",
      key: "_onMenuItemClick",
      value: // region static props
      // endregion
      // region private props
      // endregion
      // region constructor
      // endregion
      // region business logic
      // endregion
      // region lifecycle methods
      function _onMenuItemClick(event) {
        var _this2 = this;

        var target = event.target;
        var $menuItemElement = (0, _ramda.unless)(function (currentTarget) {
          return !(0, _ramda.isNil)(currentTarget.dataset['data-menuitemtype']);
        }, function (currentTarget) {
          return currentTarget.closest('div[data-menuitemtype]');
        })(target);

        if ((0, _ramda.isNil)($menuItemElement) || (0, _ramda.isNil)($menuItemElement.dataset['index'])) {
          return;
        }

        var menuItemIndex = parseInt($menuItemElement.dataset['index']);
        (0, _ramda.cond)([[(0, _ramda.equals)('child'), function () {
          _this2._getOnMenuItemClickCallback()(menuItemIndex);
        }], [(0, _ramda.equals)('parent'), function () {
          _this2._getOnMenuParentItemClickCallback()(menuItemIndex);
        }], [_ramda.T, (0, _ramda.always)(null)]])($menuItemElement.dataset['menuitemtype']);
      } // endregion
      // region style accessors

    }, {
      kind: "method",
      key: "_getBackButtonIconClassName",
      value: function _getBackButtonIconClassName() {
        return (0, _ramda.defaultTo)(VerticalSlidingNavigationMenuClass.defaultProps.backButtonIconClassName)(this.props.backButtonIconClassName);
      }
    }, {
      kind: "method",
      key: "_getComponentContainerClassName",
      value: function _getComponentContainerClassName() {
        return this.props.classes.componentContainer;
      }
    }, {
      kind: "method",
      key: "_getMenuItemContainer",
      value: function _getMenuItemContainer() {
        return this.props.classes.menuItemContainer;
      }
    }, {
      kind: "method",
      key: "_getItemNodeContainerClassName",
      value: function _getItemNodeContainerClassName() {
        return this.props.classes.itemNodeContainer;
      }
    }, {
      kind: "method",
      key: "_getItemIconContainerClassName",
      value: function _getItemIconContainerClassName() {
        return this.props.classes.itemIconContainer;
      }
    }, {
      kind: "method",
      key: "_getItemCaptionContainerClassName",
      value: function _getItemCaptionContainerClassName() {
        return this.props.classes.itemCaptionContainer;
      } // endregion
      // region label accessors
      // endregion
      // region state accessors
      // endregion
      // region prop accessors

    }, {
      kind: "method",
      key: "_getBackButtonCaption",
      value: function _getBackButtonCaption() {
        return (0, _ramda.defaultTo)(VerticalSlidingNavigationMenuClass.defaultProps.backButtonCaption)(this.props.backButtonCaption);
      }
    }, {
      kind: "method",
      key: "_getSelectedItems",
      value: function _getSelectedItems() {
        var selectedItems = (0, _ramda.defaultTo)(VerticalSlidingNavigationMenuClass.defaultProps.selectedItems)(this.props.selectedItems);
        return (0, _ramda.unless)(_ramda.isNil, _ramda.clone)(selectedItems);
      }
    }, {
      kind: "method",
      key: "_getItems",
      value: function _getItems() {
        if ((0, _ramda.isNil)(this.props.items)) {
          return null;
        }

        var items = this.props.items;

        var selectedItems = this._getSelectedItems();

        if ((0, _utility_helpers.isNotNil)(selectedItems)) {
          var newItems = (0, _ramda.reduce)(function (subItems, itemIndex) {
            if ((0, _ramda.isNil)(itemIndex) || (0, _ramda.isNil)(subItems)) {
              return null;
            }

            return (0, _utility_helpers.isNotNil)(subItems[itemIndex].children) ? subItems[itemIndex].children : null;
          }, items, selectedItems);
          return (0, _ramda.unless)(_ramda.isNil, _ramda.clone)(newItems);
        } else {
          return items;
        }
      }
    }, {
      kind: "method",
      key: "_getOnMenuItemClickCallback",
      value: function _getOnMenuItemClickCallback() {
        return (0, _ramda.defaultTo)(VerticalSlidingNavigationMenuClass.defaultProps.onMenuItemClickCallback)(this.props.onMenuItemClickCallback);
      }
    }, {
      kind: "method",
      key: "_getOnMenuParentItemClickCallback",
      value: function _getOnMenuParentItemClickCallback() {
        return (0, _ramda.defaultTo)(VerticalSlidingNavigationMenuClass.defaultProps.onMenuParentItemClickCallback)(this.props.onMenuParentItemClickCallback);
      } // endregion
      // region handlers
      // endregion
      // region render methods

    }, {
      kind: "method",
      key: "_renderDivider",
      value: function _renderDivider() {
        var _this$props$classes = this.props.classes,
            dividerOuterContainer = _this$props$classes.dividerOuterContainer,
            dividerInnerContainer = _this$props$classes.dividerInnerContainer;
        return React.createElement(_horizontal_divider_component.HorizontalDivider, {
          componentContainerClassName: dividerOuterContainer,
          bodyContainerClassName: dividerInnerContainer
        });
      }
    }, {
      kind: "method",
      key: "_renderMenuItemContainer",
      value: function _renderMenuItemContainer(key, type, index, className, children) {
        var composedKey = (0, _ramda.isNil)(key) ? null : "".concat(type, "_").concat(key);
        var menuItemClassName = (0, _classnames.default)(this._getMenuItemContainer(), className);
        return React.createElement("div", {
          key: composedKey,
          "data-menuitemtype": type,
          "data-index": index,
          className: menuItemClassName
        }, children);
      }
    }, {
      kind: "method",
      key: "_renderNodeContainer",
      value: function _renderNodeContainer(node) {
        return React.createElement("div", {
          className: this._getItemNodeContainerClassName()
        }, node);
      }
    }, {
      kind: "method",
      key: "_renderCaptionContainer",
      value: function _renderCaptionContainer(caption) {
        return React.createElement("div", {
          className: this._getItemCaptionContainerClassName()
        }, caption);
      }
    }, {
      kind: "method",
      key: "_renderIconContainer",
      value: function _renderIconContainer(iconClassName) {
        return React.createElement("div", {
          className: this._getItemIconContainerClassName()
        }, React.createElement("i", {
          className: iconClassName
        }));
      }
    }, {
      kind: "method",
      key: "_renderItem",
      value: function _renderItem(_ref, index) {
        var node = _ref.node,
            caption = _ref.caption,
            iconClassName = _ref.iconClassName,
            children = _ref.children;

        if ((0, _utility_helpers.isNotNil)(node)) {
          return this._renderMenuItemContainer(index, 'node', null, null, this._renderNodeContainer(node));
        } else {
          var dataIndex = (0, _utility_helpers.isNotNil)(children) ? index : null;
          var menuItemChildren = React.createElement(React.Fragment, null, this._renderIconContainer(iconClassName), this._renderCaptionContainer(caption));
          return this._renderMenuItemContainer(index, 'child', dataIndex, null, menuItemChildren);
        }
      }
    }, {
      kind: "method",
      key: "_renderItems",
      value: function _renderItems() {
        var items = this._getItems();

        if ((0, _ramda.isNil)(items)) {
          return null;
        }

        var indexedMap = (0, _ramda.addIndex)(_ramda.map);
        return indexedMap((0, _ramda.bind)(this._renderItem, this), items);
      }
    }, {
      kind: "method",
      key: "_renderParentItem",
      value: function _renderParentItem() {
        var _this3 = this;

        var selectedItems = this._getSelectedItems();

        return (0, _ramda.unless)(function (selectedItems) {
          return (0, _ramda.or)((0, _ramda.isNil)(selectedItems), (0, _ramda.isEmpty)(selectedItems));
        }, function (selectedItems) {
          var lastSelectedItem = selectedItems.pop();

          var backButtonIconClassName = _this3._getBackButtonIconClassName();

          var backButtonCaption = _this3._getBackButtonCaption();

          var menuItemChildren = React.createElement(React.Fragment, null, _this3._renderIconContainer(backButtonIconClassName), _this3._renderCaptionContainer(backButtonCaption));
          return React.createElement(React.Fragment, null, _this3._renderMenuItemContainer(0, 'parent', lastSelectedItem, null, menuItemChildren), _this3._renderMenuItemContainer(0, 'node', null, 'utility', _this3._renderDivider()));
        })(selectedItems);
      }
    }, {
      kind: "method",
      key: "_renderComponentContainer",
      value: function _renderComponentContainer() {
        return React.createElement("div", {
          onClick: (0, _ramda.bind)(this._onMenuItemClick, this),
          className: this._getComponentContainerClassName()
        }, this._renderParentItem(), this._renderItems());
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return this._renderComponentContainer();
      } // endregion

    }]
  };
}, React.Component); // exports


exports.VerticalSlidingNavigationMenuClass = VerticalSlidingNavigationMenuClass;

function VerticalSlidingNavigationMenuComponent(props) {
  return React.createElement(_main_theme_provider.MainThemeContext.Consumer, null, function (windowDimensions) {
    return React.createElement(VerticalSlidingNavigationMenuClass, _extends({}, props, windowDimensions));
  });
}

VerticalSlidingNavigationMenuComponent.displayName = 'VerticalSlidingNavigationMenuComponent';