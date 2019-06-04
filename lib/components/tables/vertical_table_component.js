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

require("core-js/modules/es.parse-int");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VerticalTableComponent = VerticalTableComponent;
exports.VerticalTableClass = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _ramda = require("ramda");

var _main_theme_provider = require("./../../theming/providers/main_theme_provider");

var _table_styles = require("./../../theming/common_styles/table_styles");

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
      overflow: 'hidden',
      flexBasis: 'auto',
      flexGrow: 0,
      flexShrink: 1,
      '& > table': {
        boxSizing: 'border-box',
        overflow: 'hidden',
        width: '100%',
        tableLayout: 'fixed',
        borderCollapse: 'collapse',
        '& > thead': {
          '& > tr': {
            '& th': {
              extend: (0, _table_styles.commonHeaderCellStylesFunc)(theme)
            }
          }
        },
        '& > tfoot': {
          '& > tr': {
            '& th': {
              extend: (0, _table_styles.commonFooterCellStylesFunc)(theme)
            }
          }
        },
        '& > tbody': {
          '& tr': {
            '& td': {
              extend: (0, _table_styles.commonVerticalTableCellStylesFunc)(theme)
            }
          },
          '& tr:hover': {
            '& td': {
              backgroundColor: theme.tableStyles.cellHoverBGColor
            }
          },
          '& tr:last-child': {
            '& td': {
              borderBottom: '0px none'
            }
          }
        }
      }
    }
  };
}; // component implementation

/**
 * Vertical table component to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// $FlowFixMe decorators


var VerticalTableClass = _decorate([(0, _reactJss.default)(styles)], function (_initialize, _React$Component) {
  var VerticalTableClass =
  /*#__PURE__*/
  function (_React$Component2) {
    _inherits(VerticalTableClass, _React$Component2);

    function VerticalTableClass() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, VerticalTableClass);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(VerticalTableClass)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _initialize(_assertThisInitialized(_this));

      return _this;
    }

    return VerticalTableClass;
  }(_React$Component);

  return {
    F: VerticalTableClass,
    d: [{
      kind: "field",
      static: true,
      key: "displayName",
      value: function value() {
        return 'VerticalTableClass';
      }
    }, {
      kind: "field",
      static: true,
      key: "defaultProps",
      value: function value() {
        return {
          showTableHeader: true,
          showTableFooter: true,
          showPlaceholder: false,
          columnNames: [],
          columnWidths: [],
          idColumnIndex: null,
          data: [],
          onCellClick: function onCellClick() {}
        };
      }
    }, {
      kind: "method",
      key: "_onTableClick",
      value: // region static props
      // endregion
      // region constructor
      // endregion
      // region lifecycle methods
      function _onTableClick(event) {
        var target = event.target;
        var rowElement = (0, _ramda.unless)(function (currentTarget) {
          return (0, _ramda.equals)('tr', currentTarget.tagName.toLowerCase());
        }, function (currentTarget) {
          return currentTarget.closest('tr');
        })(target);

        this._getOnCellClickCallback()(event, parseInt(rowElement.dataset['row-index']));
      } // endregion
      // region style accessors

    }, {
      kind: "method",
      key: "_getTHStyle",
      value: function _getTHStyle(columnIndex) {
        return {
          width: this._getColumnWidth(columnIndex)
        };
      }
    }, {
      kind: "method",
      key: "_getComponentContainerClassName",
      value: function _getComponentContainerClassName() {
        return this.props.classes.componentContainer;
      } // endregion
      // region label accessors
      // endregion
      // region state accessors
      // endregion
      // region prop accessors

    }, {
      kind: "method",
      key: "_getColumnNames",
      value: function _getColumnNames() {
        return (0, _ramda.defaultTo)(VerticalTableClass.defaultProps.columnNames)(this.props.columnNames);
      }
    }, {
      kind: "method",
      key: "_getColumnWidths",
      value: function _getColumnWidths() {
        return (0, _ramda.defaultTo)(VerticalTableClass.defaultProps.columnWidths)(this.props.columnWidths);
      }
    }, {
      kind: "method",
      key: "_getColumnWidth",
      value: function _getColumnWidth(columnIndex) {
        var columnWidth = this._getColumnWidths()[columnIndex];

        return (0, _ramda.cond)([[_ramda.isNil, (0, _ramda.always)('auto')], [(0, _ramda.is)(Number), function (columnWidth) {
          return "".concat(columnWidth, "px");
        }], [(0, _ramda.is)(String), (0, _ramda.always)(columnWidth)]])(columnWidth);
      }
    }, {
      kind: "method",
      key: "_getData",
      value: function _getData() {
        return (0, _ramda.defaultTo)(VerticalTableClass.defaultProps.data)(this.props.data);
      }
    }, {
      kind: "method",
      key: "_getDataRow",
      value: function _getDataRow(dataRow) {
        return (0, _ramda.defaultTo)([])(dataRow);
      }
    }, {
      kind: "method",
      key: "_getDataColumn",
      value: function _getDataColumn(dataColumn) {
        return (0, _ramda.defaultTo)(null)(dataColumn);
      }
    }, {
      kind: "method",
      key: "_getIdColumnIndex",
      value: function _getIdColumnIndex() {
        return (0, _ramda.defaultTo)(VerticalTableClass.defaultProps.idColumnIndex)(this.props.idColumnIndex);
      }
    }, {
      kind: "method",
      key: "_isIdColumn",
      value: function _isIdColumn(columnIndex) {
        var idColumnIndex = this.props.idColumnIndex;

        if ((0, _ramda.isNil)(idColumnIndex)) {
          return false;
        }

        return columnIndex === idColumnIndex;
      }
    }, {
      kind: "method",
      key: "_getOnCellClickCallback",
      value: function _getOnCellClickCallback() {
        return (0, _ramda.defaultTo)(VerticalTableClass.defaultProps.onCellClick)(this.props.onCellClick);
      }
    }, {
      kind: "method",
      key: "_shouldShowTableFooter",
      value: function _shouldShowTableFooter() {
        return (0, _ramda.defaultTo)(VerticalTableClass.defaultProps.showTableFooter)(this.props.showTableFooter);
      }
    }, {
      kind: "method",
      key: "_shouldShowTableHeader",
      value: function _shouldShowTableHeader() {
        return (0, _ramda.defaultTo)(VerticalTableClass.defaultProps.showTableHeader)(this.props.showTableHeader);
      } // endregion
      // region handlers
      // endregion
      // region render methods

    }, {
      kind: "method",
      key: "_renderTableBodyColumn",
      value: function _renderTableBodyColumn(columnData, columnIndex) {
        return React.createElement("td", {
          key: "column_".concat(columnIndex)
        }, columnData);
      }
    }, {
      kind: "method",
      key: "_renderTableBodyColumns",
      value: function _renderTableBodyColumns(rowData) {
        var _this2 = this;

        var columnIndex = -1;
        return (0, _ramda.map)(function (columnData) {
          ++columnIndex;

          if (_this2._isIdColumn(columnIndex)) {
            return null;
          }

          return _this2._renderTableBodyColumn(_this2._getDataColumn(columnData), columnIndex);
        }, rowData);
      }
    }, {
      kind: "method",
      key: "_renderTableBodyRows",
      value: function _renderTableBodyRows() {
        var _this3 = this;

        var rowIndex = -1;
        return (0, _ramda.map)(function (rowData) {
          ++rowIndex;
          rowData = _this3._getDataRow(rowData);
          return React.createElement("tr", {
            key: "row_".concat(rowIndex),
            "data-row-index": rowIndex
          }, _this3._renderTableBodyColumns(rowData));
        }, this._getData());
      }
    }, {
      kind: "method",
      key: "_renderTableBody",
      value: function _renderTableBody() {
        var data = this.props.data;
        var renderedData = (0, _ramda.isNil)(data) || (0, _ramda.isEmpty)(data) ? null : this._renderTableBodyRows();
        return React.createElement("tbody", {
          onClick: (0, _ramda.bind)(this._onTableClick, this)
        }, renderedData);
      }
    }, {
      kind: "method",
      key: "_renderTableHeaderCells",
      value: function _renderTableHeaderCells() {
        var _this4 = this;

        var columnIndex = -1;
        return (0, _ramda.map)(function (columnName) {
          ++columnIndex;
          return React.createElement("th", {
            style: _this4._getTHStyle(columnIndex),
            key: "headerColumn_".concat(columnIndex)
          }, columnName);
        }, this._getColumnNames());
      }
    }, {
      kind: "method",
      key: "_renderTableFooter",
      value: function _renderTableFooter() {
        return React.createElement("tfoot", null, React.createElement("tr", null, this._renderTableHeaderCells()));
      }
    }, {
      kind: "method",
      key: "_renderTableHeader",
      value: function _renderTableHeader() {
        return React.createElement("thead", null, React.createElement("tr", null, this._renderTableHeaderCells()));
      }
    }, {
      kind: "method",
      key: "_renderTable",
      value: function _renderTable() {
        return React.createElement("table", null, this._shouldShowTableHeader() && this._renderTableHeader(), this._shouldShowTableFooter() && this._renderTableFooter(), this._renderTableBody());
      }
    }, {
      kind: "method",
      key: "_renderComponentContainer",
      value: function _renderComponentContainer() {
        return React.createElement("div", {
          className: this._getComponentContainerClassName()
        }, this._renderTable());
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


exports.VerticalTableClass = VerticalTableClass;

function VerticalTableComponent(props) {
  return React.createElement(_main_theme_provider.MainThemeContext.Consumer, null, function (windowDimensions) {
    return React.createElement(VerticalTableClass, _extends({}, props, windowDimensions));
  });
}

VerticalTableComponent.displayName = 'VerticalTableComponent';