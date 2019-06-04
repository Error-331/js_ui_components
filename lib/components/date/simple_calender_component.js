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
exports.SimpleCalendarComponent = SimpleCalendarComponent;
exports.SimpleCalendarClass = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ramda = require("ramda");

var _moment = _interopRequireDefault(require("moment"));

var _layout = require("./../layout");

var _simple_month_selector_component = require("./simple_month_selector_component");

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
var daySelectionInnerContainer = function daySelectionInnerContainer(theme) {
  return {
    padding: '20px',
    fontSize: "".concat(theme.dateStyles.regularFontSize, "px"),
    color: theme.dateStyles.fontColor
  };
};

var styles = function styles(theme) {
  return {
    headerTitleContainer: {
      boxSizing: 'border-box',
      display: 'grid',
      width: '100%',
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'max-content max-content',
      gridRowGap: '2px',
      '& > $headerTitleText': {
        color: theme.layoutStyles.headerFontColor
      }
    },
    headerTitleText: {},
    cardContainer: {
      '&.compact': {
        maxWidth: "".concat(theme.dateStyles.calendarCompactMaxWidth, "px")
      }
    },
    daysSelectionOuterContainer: {
      boxSizing: 'border-box',
      display: 'grid',
      gridAutoColumns: '1fr',
      gridAutoRows: 'max-content max-content',
      '& > $daysSelectionInnerContainer': {
        boxSizing: 'border-box',
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        gridAutoRows: 'minmax(40px, 1fr)',
        justifyItems: 'center',
        alignItems: 'center'
      },
      '& > $daysSelectionHeaderContainer': {
        '& > $daySelectionHeaderOuterContainer': {
          '& > $daySelectionHeaderInnerContainer': {
            extend: daySelectionInnerContainer(theme)
          }
        }
      },
      '& > $daysSelectionBodyContainer': {
        '& > $daySelectionBodyOuterContainer': {
          '& > $daySelectionBodyInnerContainer': {
            extend: daySelectionInnerContainer(theme),
            '&.selected': {
              borderRadius: '50%',
              backgroundColor: theme.dateStyles.selectionBackgroundColor,
              color: theme.dateStyles.selectionFontColor
            }
          }
        },
        '&.selectable': {
          '& > $daySelectionBodyOuterContainer': {
            '& > $daySelectionBodyInnerContainer:not(.selected):not(:empty)': {
              cursor: 'pointer'
            }
          }
        }
      }
    },
    daysSelectionInnerContainer: {},
    daysSelectionHeaderContainer: {},
    daysSelectionBodyContainer: {},
    daySelectionHeaderOuterContainer: {},
    daySelectionHeaderInnerContainer: {},
    daySelectionBodyOuterContainer: {},
    daySelectionBodyInnerContainer: {}
  };
}; // constants definition


var EMPTY_DATE_CELL_DATA = 'empty';
/**
 * Simple calendar component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation
// $FlowFixMe decorators

var SimpleCalendarClass = _decorate([(0, _reactJss.default)(styles)], function (_initialize, _React$Component) {
  var SimpleCalendarClass =
  /*#__PURE__*/
  function (_React$Component2) {
    _inherits(SimpleCalendarClass, _React$Component2);

    // region static props
    // endregion
    // region constructor
    function SimpleCalendarClass(props) {
      var _this;

      _classCallCheck(this, SimpleCalendarClass);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(SimpleCalendarClass).call(this, props));

      _initialize(_assertThisInitialized(_this));

      var self = _assertThisInitialized(_this);

      self._onMonthSelected = self._onMonthSelected.bind(_assertThisInitialized(_this));
      self._onDayCellClick = self._onDayCellClick.bind(_assertThisInitialized(_this));
      var date = props.date;
      _this.state = {
        date: _this._getDateOrDefault(date)
      };
      return _this;
    } // endregion
    // region general logic methods
    // TODO: to generic functions
    // endregion


    return SimpleCalendarClass;
  }(_React$Component);

  return {
    F: SimpleCalendarClass,
    d: [{
      kind: "field",
      static: true,
      key: "displayName",
      value: function value() {
        return 'SimpleCalendarClass';
      }
    }, {
      kind: "field",
      static: true,
      key: "defaultProps",
      value: function value() {
        return {
          date: (0, _moment.default)(),
          heightLightDate: true,
          compact: false,
          selectable: true,
          showMonthSelector: true,
          onDateSelect: function onDateSelect() {}
        };
      }
    }, {
      kind: "method",
      key: "_normalizeDate",
      value: function _normalizeDate(usrDate) {
        return usrDate.clone().hour(0).minute(0).second(0).millisecond(0);
      } // TODO: to generic functions

    }, {
      kind: "method",
      key: "_getDateOrDefault",
      value: function _getDateOrDefault(usrDate) {
        var currentDate = (0, _ramda.defaultTo)((0, _moment.default)())((0, _moment.default)(usrDate));
        return this._normalizeDate(currentDate);
      } // endregion
      // region lifecycle methods

    }, {
      kind: "method",
      key: "_onMonthSelected",
      value: function _onMonthSelected(newDate) {
        this.setState({
          date: newDate
        });
      } // endregion
      // region style accessors

    }, {
      kind: "method",
      key: "_getCardContainerClassName",
      value: function _getCardContainerClassName() {
        return (0, _classnames.default)(this.props.classes.cardContainer, {
          compact: this._isCompact()
        });
      }
    }, {
      kind: "method",
      key: "_getHeaderTitleTextClassName",
      value: function _getHeaderTitleTextClassName() {
        return this.props.classes.headerTitleText;
      }
    }, {
      kind: "method",
      key: "_getHeaderTitleContainerClassName",
      value: function _getHeaderTitleContainerClassName() {
        return this.props.classes.headerTitleContainer;
      }
    }, {
      kind: "method",
      key: "_getDaysSelectionOuterContainerClassName",
      value: function _getDaysSelectionOuterContainerClassName() {
        return this.props.classes.daysSelectionOuterContainer;
      }
    }, {
      kind: "method",
      key: "_getDaysSelectionHeaderContainerClassName",
      value: function _getDaysSelectionHeaderContainerClassName() {
        var _this$props$classes = this.props.classes,
            daysSelectionInnerContainer = _this$props$classes.daysSelectionInnerContainer,
            daysSelectionHeaderContainer = _this$props$classes.daysSelectionHeaderContainer;
        return (0, _classnames.default)(daysSelectionInnerContainer, daysSelectionHeaderContainer);
      }
    }, {
      kind: "method",
      key: "_getDaySelectionHeaderOuterCellClassName",
      value: function _getDaySelectionHeaderOuterCellClassName() {
        return this.props.classes.daySelectionHeaderOuterContainer;
      }
    }, {
      kind: "method",
      key: "_getDaySelectionHeaderInnerCellClassName",
      value: function _getDaySelectionHeaderInnerCellClassName() {
        return this.props.classes.daySelectionHeaderInnerContainer;
      }
    }, {
      kind: "method",
      key: "_getDaysSelectionBodyContainerClassName",
      value: function _getDaysSelectionBodyContainerClassName() {
        var _this$props$classes2 = this.props.classes,
            daysSelectionInnerContainer = _this$props$classes2.daysSelectionInnerContainer,
            daysSelectionBodyContainer = _this$props$classes2.daysSelectionBodyContainer;
        return (0, _classnames.default)(daysSelectionInnerContainer, daysSelectionBodyContainer, {
          'selectable': this._isSelectable()
        });
      }
    }, {
      kind: "method",
      key: "_getDaySelectionBodyOuterCellClassName",
      value: function _getDaySelectionBodyOuterCellClassName() {
        return this.props.classes.daySelectionBodyOuterContainer;
      }
    }, {
      kind: "method",
      key: "_getDaySelectionBodyInnerCellClassName",
      value: function _getDaySelectionBodyInnerCellClassName(selected) {
        return (0, _classnames.default)(this.props.classes.daySelectionBodyInnerContainer, {
          'selected': selected && this._heightLightDate()
        });
      } // endregion
      // region label accessors
      // endregion
      // region state accessors

    }, {
      kind: "method",
      key: "_getDate",
      value: function _getDate() {
        return this.state.date.clone();
      }
    }, {
      kind: "method",
      key: "_getDateForMonthSelector",
      value: function _getDateForMonthSelector() {
        return (0, _moment.default)(this._getDate()).day(1);
      }
    }, {
      kind: "method",
      key: "_getStartOfMonthOfDate",
      value: function _getStartOfMonthOfDate() {
        return this._getDate().date(1);
      }
    }, {
      kind: "method",
      key: "_getEndOfMonthOfDate",
      value: function _getEndOfMonthOfDate() {
        return this._getDate().endOf('month');
      }
    }, {
      kind: "method",
      key: "_getStartOfMonthDay",
      value: function _getStartOfMonthDay() {
        return this._getStartOfMonthOfDate().day();
      }
    }, {
      kind: "method",
      key: "_getNumberOfDays",
      value: function _getNumberOfDays() {
        return this._getEndOfMonthOfDate().date();
      }
    }, {
      kind: "method",
      key: "_getNumberOfWeeks",
      value: function _getNumberOfWeeks() {
        var numberOfDays = this._getNumberOfDays();

        var startOfMonthDay = this._getStartOfMonthDay();

        var numberOfDaysWithPadding = numberOfDays + startOfMonthDay;
        return Math.floor(numberOfDaysWithPadding / 7) + (numberOfDaysWithPadding % 7 > 0 ? 1 : 0);
      }
    }, {
      kind: "method",
      key: "_getStartingDayNumber",
      value: function _getStartingDayNumber() {
        return this._getStartOfMonthOfDate().day();
      } // endregion
      // region prop accessors

    }, {
      kind: "method",
      key: "_getSelectedDate",
      value: function _getSelectedDate() {
        if ((0, _ramda.isNil)(this.props.date)) {
          return null;
        } else {
          return (0, _moment.default)(this.props.date);
        }
      }
    }, {
      kind: "method",
      key: "_getOnDateSelectCallback",
      value: function _getOnDateSelectCallback() {
        return (0, _ramda.defaultTo)(SimpleCalendarClass.defaultProps.onDateSelect)(this.props.onDateSelect);
      }
    }, {
      kind: "method",
      key: "_getShowMonthSelector",
      value: function _getShowMonthSelector() {
        return (0, _ramda.defaultTo)(SimpleCalendarClass.defaultProps.showMonthSelector)(this.props.showMonthSelector);
      }
    }, {
      kind: "method",
      key: "_heightLightDate",
      value: function _heightLightDate() {
        return (0, _ramda.defaultTo)(SimpleCalendarClass.defaultProps.heightLightDate)(this.props.heightLightDate);
      }
    }, {
      kind: "method",
      key: "_isSelectable",
      value: function _isSelectable() {
        return (0, _ramda.defaultTo)(SimpleCalendarClass.defaultProps.selectable)(this.props.selectable);
      }
    }, {
      kind: "method",
      key: "_isCompact",
      value: function _isCompact() {
        return (0, _ramda.defaultTo)(SimpleCalendarClass.defaultProps.compact)(this.props.compact);
      } // endregion
      // region handlers

    }, {
      kind: "method",
      key: "_onDayCellClick",
      value: function _onDayCellClick(event) {
        var _this2 = this;

        var target = event.target;
        var $dayCellElement = (0, _ramda.unless)(function (currentTarget) {
          return !(0, _ramda.isNil)(currentTarget.dataset['data-date']);
        }, function (currentTarget) {
          return currentTarget.closest('div[data-date]');
        })(target);
        var dayCellData = (0, _ramda.isNil)($dayCellElement) ? null : $dayCellElement.dataset['date'];
        (0, _ramda.unless)(function (dayCellData) {
          return (0, _ramda.isNil)(dayCellData) || (0, _ramda.equals)(EMPTY_DATE_CELL_DATA, dayCellData);
        }, function (dayCellData) {
          return _this2._getOnDateSelectCallback()((0, _moment.default)(dayCellData));
        })(dayCellData);
      } // endregion
      // region render methods

    }, {
      kind: "method",
      key: "_renderDaysSelectionHeader",
      value: function _renderDaysSelectionHeader() {
        var _this3 = this;

        var weekDays = _moment.default.weekdaysMin();

        var mapIndexed = (0, _ramda.addIndex)(_ramda.map);
        return mapIndexed(function (day, dayIndex) {
          return React.createElement("div", {
            key: "weekDay_".concat(dayIndex),
            className: _this3._getDaySelectionHeaderOuterCellClassName()
          }, React.createElement("div", {
            className: _this3._getDaySelectionHeaderInnerCellClassName()
          }, weekDays[dayIndex]));
        }, weekDays);
      }
    }, {
      kind: "method",
      key: "_renderDaysSelectionBodyCell",
      value: function _renderDaysSelectionBodyCell(dayIndex, cellText, isSelected, currentDayDate) {
        var dateData = (0, _ramda.isNil)(currentDayDate) ? EMPTY_DATE_CELL_DATA : currentDayDate.format();
        var nbsp = String.fromCharCode(160);
        var preparedCellText = parseInt(cellText) > 9 ? "".concat(cellText) : "".concat(nbsp).concat(nbsp).concat(cellText);
        return React.createElement("div", {
          key: "day_".concat(dayIndex),
          className: this._getDaySelectionBodyOuterCellClassName(),
          "data-date": dateData
        }, React.createElement("div", {
          className: this._getDaySelectionBodyInnerCellClassName(isSelected)
        }, preparedCellText));
      }
    }, {
      kind: "method",
      key: "_renderDaySelectionDays",
      value: function _renderDaySelectionDays(weekIndex) {
        var _this4 = this;

        var selectedDate = this._getSelectedDate();

        var currentDayDate = this._getDate();

        var startingDayNumber = this._getStartingDayNumber();

        var numberOfDays = (0, _ramda.add)(this._getNumberOfDays(), startingDayNumber) - 1;
        return (0, _ramda.map)((0, _ramda.cond)([[function (dayIndex) {
          return (0, _ramda.gt)(dayIndex, numberOfDays);
        }, function (dayIndex) {
          return _this4._renderDaysSelectionBodyCell(dayIndex, '', false);
        }], [function (dayIndex) {
          return (0, _ramda.lt)(dayIndex, startingDayNumber);
        }, function (dayIndex) {
          return _this4._renderDaysSelectionBodyCell(dayIndex, '', false);
        }], [_ramda.T, function (dayIndex) {
          var currentDay = dayIndex - (startingDayNumber - 1);
          var currentDayText = (dayIndex + 1 - startingDayNumber).toString();
          currentDayDate.set('date', currentDay);
          var isSameDate = (0, _ramda.isNil)(selectedDate) ? false : currentDayDate.isSame(_this4._normalizeDate(selectedDate));
          return _this4._renderDaysSelectionBodyCell(dayIndex, currentDayText, isSameDate, currentDayDate);
        }]]), (0, _ramda.range)(7 * weekIndex, 7 * weekIndex + 7));
      }
    }, {
      kind: "method",
      key: "_renderDaysSelectionRows",
      value: function _renderDaysSelectionRows() {
        var _this5 = this;

        var numberOfWeeks = this._getNumberOfWeeks();

        return (0, _ramda.map)(function (weekIndex) {
          return _this5._renderDaySelectionDays(weekIndex);
        }, (0, _ramda.range)(0, numberOfWeeks));
      }
    }, {
      kind: "method",
      key: "_renderDaysSelection",
      value: function _renderDaysSelection() {
        var selectDayCallback = this._isSelectable() ? this._onDayCellClick : null;
        return React.createElement("div", {
          className: this._getDaysSelectionOuterContainerClassName()
        }, React.createElement("div", {
          className: this._getDaysSelectionHeaderContainerClassName()
        }, this._renderDaysSelectionHeader()), React.createElement("div", {
          className: this._getDaysSelectionBodyContainerClassName(),
          onClick: selectDayCallback
        }, this._renderDaysSelectionRows()));
      }
    }, {
      kind: "method",
      key: "_renderMonthSelector",
      value: function _renderMonthSelector() {
        var _this6 = this;

        return (0, _ramda.cond)([[(0, _ramda.equals)(true), function () {
          return React.createElement(_simple_month_selector_component.SimpleMonthSelectorComponent, {
            onDateChange: _this6._onMonthSelected,
            initialDate: _this6._getDateForMonthSelector()
          });
        }], [(0, _ramda.equals)(false), function () {
          return null;
        }]])(this._getShowMonthSelector());
      }
    }, {
      kind: "method",
      key: "_renderHeaderDate",
      value: function _renderHeaderDate() {
        var formattedDate = this._getSelectedDate().format('dd, MMM D');

        return React.createElement(_layout.InlineHeader, {
          className: this._getHeaderTitleTextClassName(),
          level: 4
        }, formattedDate);
      }
    }, {
      kind: "method",
      key: "_renderHeaderYear",
      value: function _renderHeaderYear() {
        var formattedDate = this._getSelectedDate().format('YYYY');

        return React.createElement(_layout.InlineHeader, {
          className: this._getHeaderTitleTextClassName(),
          level: 6
        }, formattedDate);
      }
    }, {
      kind: "method",
      key: "_renderCardHeader",
      value: function _renderCardHeader() {
        return React.createElement(_layout.RegularCardHeaderComponent, {
          titleClassName: this._getHeaderTitleContainerClassName()
        }, this._renderHeaderYear(), this._renderHeaderDate());
      }
    }, {
      kind: "method",
      key: "_renderCard",
      value: function _renderCard() {
        return React.createElement(_layout.RegularCardComponent, {
          header: this._renderCardHeader(),
          containerClassName: this._getCardContainerClassName()
        }, this._renderMonthSelector(), this._renderDaysSelection());
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return this._renderCard();
      }
    }]
  };
}, React.Component); // exports


exports.SimpleCalendarClass = SimpleCalendarClass;

function SimpleCalendarComponent(props) {
  return React.createElement(_main_theme_provider.MainThemeContext.Consumer, null, function (windowDimensions) {
    return React.createElement(SimpleCalendarClass, _extends({}, props, windowDimensions));
  });
}

SimpleCalendarComponent.displayName = 'SimpleCalendarComponent';