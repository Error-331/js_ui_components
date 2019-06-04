'use strict'; // external imports

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.symbol.to-primitive");

require("core-js/modules/es.symbol.to-string-tag");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.find");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.join");

require("core-js/modules/es.array.map");

require("core-js/modules/es.array.reduce");

require("core-js/modules/es.array.slice");

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

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.repeat");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GridGeneratorComponent = GridGeneratorComponent;
exports.GridGeneratorClass = void 0;

var React = _interopRequireWildcard(require("react"));

var _testUtils = require("react-dom/test-utils");

var _classnames = _interopRequireDefault(require("classnames"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _ramda = require("ramda");

var _main_theme_provider = require("./../../theming/providers/main_theme_provider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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

// constants definition
var ITEM_DEFAULT_NAME = 'elm_';
var ITEM_NAME_POSTFIX = '_item'; // styles definition

var styles = function styles(theme) {
  return {
    componentContainer: {
      boxSizing: 'border-box',
      display: 'grid',
      alignItems: 'end',
      gridColumnGap: "".concat(theme.layoutStyles.sectionHorizontalSpacing, "px"),
      gridRowGap: "".concat(theme.layoutStyles.sectionVerticalSpacing, "px")
    }
  };
};
/**
 * Grid generator.
 * Component accepts elements specification and returns a container with nested elements aligned using CSS Grid.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation
// $FlowFixMe decorators


var GridGeneratorClass = _decorate([(0, _reactJss.default)(styles)], function (_initialize, _React$Component) {
  var GridGeneratorClass =
  /*#__PURE__*/
  function (_React$Component2) {
    _inherits(GridGeneratorClass, _React$Component2);

    // region static props
    // endregion
    // region private props
    // endregion
    // region constructor
    function GridGeneratorClass(props) {
      var _this;

      _classCallCheck(this, GridGeneratorClass);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(GridGeneratorClass).call(this, props));

      _initialize(_assertThisInitialized(_this));

      _this.state = {
        items: GridGeneratorClass.defaultState.items
      };
      return _this;
    } // endregion
    // region business logic
    // endregion


    return GridGeneratorClass;
  }(_React$Component);

  return {
    F: GridGeneratorClass,
    d: [{
      kind: "field",
      static: true,
      key: "displayName",
      value: function value() {
        return 'GridGeneratorClass';
      }
    }, {
      kind: "field",
      static: true,
      key: "defaultProps",
      value: function value() {
        return {
          items: null,
          leftmostColSize: '1fr',
          rightmostColSize: '1fr'
        };
      }
    }, {
      kind: "field",
      static: true,
      key: "defaultState",
      value: function value() {
        return {
          items: null
        };
      }
    }, {
      kind: "method",
      static: true,
      key: "populateRowsWithVSpanItems",
      value: function populateRowsWithVSpanItems(newItems, subRowItems, subRowIndex, totalSubRowHSpan, totalRowHSpan, originalColumnHSpan, name) {
        for (var subColumnIndex = 0; subColumnIndex < (0, _ramda.length)(subRowItems); subColumnIndex++) {
          var subHSpan = (0, _ramda.defaultTo)(1)(subRowItems[subColumnIndex].hspan);
          totalSubRowHSpan = (0, _ramda.add)(totalSubRowHSpan, subHSpan);

          if ((0, _ramda.equals)(totalRowHSpan, totalSubRowHSpan)) {
            var _newServiceItem = GridGeneratorClass.getServiceDataRowData(name, originalColumnHSpan);

            newItems[subRowIndex] = (0, _ramda.insert)(subColumnIndex + 1, _newServiceItem, subRowItems);
            return newItems;
          }
        }

        var newServiceItem = GridGeneratorClass.getServiceDataRowData(name, originalColumnHSpan);
        newItems[subRowIndex] = (0, _ramda.append)(newServiceItem, subRowItems);
        return newItems;
      }
    }, {
      kind: "method",
      static: true,
      key: "getServiceDataRowData",
      value: function getServiceDataRowData(name, hSpan) {
        return {
          elm: null,
          serviceItem: true,
          hspan: hSpan,
          name: name
        };
      }
    }, {
      kind: "method",
      static: true,
      key: "getDefaultGridItemName",
      value: function getDefaultGridItemName(itemIndex, name) {
        return (0, _ramda.defaultTo)("".concat(ITEM_DEFAULT_NAME).concat(itemIndex))(name);
      }
    }, {
      kind: "method",
      key: "_getGridItemName",
      value: function _getGridItemName(name) {
        return "".concat(name).concat(ITEM_NAME_POSTFIX);
      }
    }, {
      kind: "method",
      key: "_getGridHSpan",
      value: function _getGridHSpan(hSpan) {
        return (0, _ramda.defaultTo)(1)(hSpan);
      }
    }, {
      kind: "method",
      key: "_calcColumnsCount",
      value: function _calcColumnsCount(items) {
        var _this2 = this;

        return (0, _ramda.reduce)(function (columnCount, itemsRow) {
          return (0, _ramda.max)(columnCount, (0, _ramda.reduce)(function (localColumnCount, item) {
            return (0, _ramda.add)(localColumnCount, _this2._getGridHSpan(item.hspan));
          }, 0, itemsRow));
        }, 0, items);
      }
    }, {
      kind: "method",
      key: "_prepareGridColumnString",
      value: function _prepareGridColumnString(items, columnsCount) {
        var _this3 = this;

        var itemIndex = 0;
        var columnStrings = (0, _ramda.reduce)(function (gridColumnStrings, item) {
          var elm = item.elm,
              name = item.name,
              hspan = item.hspan;
          name = (0, _ramda.and)((0, _ramda.isNil)(elm), (0, _ramda.isNil)(item.serviceItem)) ? '.' : _this3._getGridItemName(GridGeneratorClass.getDefaultGridItemName(itemIndex, name));
          itemIndex++;
          return (0, _ramda.concat)(gridColumnStrings, (0, _ramda.repeat)(name, _this3._getGridHSpan(hspan)));
        }, [], items);
        var columnStringsLength = (0, _ramda.length)(columnStrings);
        return (0, _ramda.ifElse)(function () {
          return (0, _ramda.lt)(columnStringsLength, columnsCount);
        }, function (strings) {
          return (0, _ramda.concat)(strings, (0, _ramda.repeat)('.', (0, _ramda.subtract)(columnsCount, columnStringsLength)));
        }, _ramda.identity)(columnStrings).join(' ');
      } // endregion
      // region lifecycle methods

    }, {
      kind: "method",
      static: true,
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(props, state) {
        // if no items found - return unmodified state
        if ((0, _ramda.isNil)(props.items)) {
          return state;
        }

        var newItems = props.items.slice();
        var elementIndex = 0;

        for (var rowIndex = 0; rowIndex < (0, _ramda.length)(newItems); rowIndex++) {
          var rowItems = newItems[rowIndex];
          var totalRowHSpan = 0;

          for (var columnIndex = 0; columnIndex < (0, _ramda.length)(rowItems); columnIndex++) {
            var _rowItems$columnIndex = rowItems[columnIndex],
                hspan = _rowItems$columnIndex.hspan,
                vspan = _rowItems$columnIndex.vspan,
                name = _rowItems$columnIndex.name;
            hspan = (0, _ramda.defaultTo)(1)(hspan);
            vspan = (0, _ramda.defaultTo)(0)(vspan); //

            if (vspan > 0) {
              if ((0, _ramda.isNil)(name)) {
                rowItems = rowItems.slice();
                rowItems[columnIndex].name = GridGeneratorClass.getDefaultGridItemName(elementIndex, name);
                newItems[rowIndex] = rowItems;
              }

              var subRowIndexStart = rowIndex + 1;
              var subRowIndexLimit = subRowIndexStart + vspan - 1;
              var numberOfNeededRows = subRowIndexLimit - (0, _ramda.length)(newItems);

              if ((0, _ramda.gt)(numberOfNeededRows, 0)) {
                newItems = (0, _ramda.concat)(newItems, (0, _ramda.repeat)([], numberOfNeededRows));
              }

              for (var subRowIndex = subRowIndexStart; subRowIndex < subRowIndexLimit; subRowIndex++) {
                var subRowItems = newItems[subRowIndex];
                var totalSubRowHSpan = 0;

                if (columnIndex === 0) {
                  var newServiceItem = GridGeneratorClass.getServiceDataRowData(GridGeneratorClass.getDefaultGridItemName(elementIndex, name), hspan);
                  newItems[subRowIndex] = (0, _ramda.prepend)(newServiceItem, subRowItems);
                } else {
                  newItems = GridGeneratorClass.populateRowsWithVSpanItems(newItems, subRowItems, subRowIndex, totalSubRowHSpan, totalRowHSpan, hspan, GridGeneratorClass.getDefaultGridItemName(elementIndex, name));
                }
              }
            }

            elementIndex = (0, _ramda.add)(elementIndex, 1);
            totalRowHSpan = (0, _ramda.add)(totalRowHSpan, hspan);
          }
        }

        return {
          items: newItems
        };
      } // endregion
      // region style accessors

    }, {
      kind: "method",
      key: "_getComponentContainerClassName",
      value: function _getComponentContainerClassName() {
        return (0, _classnames.default)(this.props.classes.componentContainer, this.props.className);
      }
    }, {
      kind: "method",
      key: "_getComponentContainerStyle",
      value: function _getComponentContainerStyle() {
        var _this4 = this;

        var items = this._getItems();

        if ((0, _ramda.isNil)(items)) {
          return {};
        }

        var columnsCount = this._calcColumnsCount(items);

        var gridTemplateAreas = (0, _ramda.reduce)(function (templateAreas, itemsRow) {
          var columnString = _this4._prepareGridColumnString(itemsRow, columnsCount);

          return (0, _ramda.concat)(templateAreas, "\"".concat(columnString, "\" "));
        }, '', items);
        var gridTemplateColumns = (0, _ramda.repeat)('1fr', columnsCount);
        gridTemplateColumns[0] = this._getLeftmostColSize();
        gridTemplateColumns[gridTemplateColumns.length - 1] = this._getRightmostColSize();
        var rowsCount = items.length;
        return _objectSpread({
          gridTemplateAreas: gridTemplateAreas,
          gridTemplateColumns: gridTemplateColumns.join(' '),
          gridTemplateRows: "repeat(".concat(rowsCount, ", max-content)")
        }, (0, _ramda.defaultTo)({})(this.props.style));
      }
    }, {
      kind: "method",
      key: "_getItemStyle",
      value: function _getItemStyle(name) {
        return {
          boxSizing: 'border-box',
          gridArea: this._getGridItemName(name)
        };
      } // endregion
      // region label accessors
      // endregion
      // region state accessors

    }, {
      kind: "method",
      key: "_getItems",
      value: function _getItems() {
        var items = (0, _ramda.defaultTo)(GridGeneratorClass.defaultState.items)(this.state.items);

        if ((0, _ramda.isNil)(items) || !(0, _ramda.is)(Array, items)) {
          return items;
        } else {
          var index = 0;
          return (0, _ramda.map)(function (rows) {
            return (0, _ramda.map)(function (item) {
              var name = item.name;
              name = GridGeneratorClass.getDefaultGridItemName(index, name);

              var newItem = _objectSpread({}, item, {
                name: name
              });

              index++;
              return newItem;
            }, rows);
          }, items);
        }
      } // endregion
      // region prop accessors

    }, {
      kind: "method",
      key: "_getRightmostColSize",
      value: function _getRightmostColSize() {
        return (0, _ramda.defaultTo)(GridGeneratorClass.defaultProps.rightmostColSize)(this.props.rightmostColSize);
      }
    }, {
      kind: "method",
      key: "_getLeftmostColSize",
      value: function _getLeftmostColSize() {
        return (0, _ramda.defaultTo)(GridGeneratorClass.defaultProps.leftmostColSize)(this.props.leftmostColSize);
      } // endregion
      // region handlers
      // endregion
      // region render methods

    }, {
      kind: "method",
      key: "_renderItem",
      value: function _renderItem(item, index) {
        var elm = item.elm;

        if ((0, _ramda.isNil)(elm)) {
          return null;
        }

        var name = item.name,
            props = item.props,
            children = item.children;
        name = GridGeneratorClass.getDefaultGridItemName(index, name);
        props = (0, _ramda.defaultTo)({
          style: {}
        })(props);
        var _props = props,
            style = _props.style;
        var composedComponentContainerStyles = (0, _ramda.defaultTo)({})(style);
        composedComponentContainerStyles = Object.assign({}, this._getItemStyle(name), composedComponentContainerStyles);
        return (0, _ramda.ifElse)(_testUtils.isElement, function (elm) {
          return React.cloneElement(elm, _objectSpread({}, elm.props, props, {
            style: Object.assign({}, elm.props.style, composedComponentContainerStyles),
            key: name
          }));
        }, function (elm) {
          return React.createElement(elm, _objectSpread({}, props, {
            style: composedComponentContainerStyles,
            key: name
          }), children);
        })(elm);
      }
    }, {
      kind: "method",
      key: "_renderItems",
      value: function _renderItems() {
        var items = this._getItems();

        if ((0, _ramda.isNil)(items)) {
          return null;
        }

        return (0, _ramda.addIndex)(_ramda.map)((0, _ramda.bind)(this._renderItem, this), (0, _ramda.flatten)(items));
      }
    }, {
      kind: "method",
      key: "_renderComponentContainer",
      value: function _renderComponentContainer() {
        return React.createElement("div", {
          className: this._getComponentContainerClassName(),
          style: this._getComponentContainerStyle()
        }, this._renderItems());
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return this._renderComponentContainer();
      }
    }]
  };
}, React.Component);

exports.GridGeneratorClass = GridGeneratorClass;

function GridGeneratorComponent(props) {
  return React.createElement(_main_theme_provider.MainThemeContext.Consumer, null, function (windowDimensions) {
    return React.createElement(GridGeneratorClass, _extends({}, props, windowDimensions));
  });
}

GridGeneratorComponent.displayName = 'GridGeneratorComponent'; // exports