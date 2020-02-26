'use strict'; // external imports

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.join");

require("core-js/modules/es.array.map");

require("core-js/modules/es.array.reduce");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.repeat");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GridGeneratorComponent = GridGeneratorComponent;
exports.default = exports.GridGeneratorClass = void 0;

var React = _interopRequireWildcard(require("react"));

var _testUtils = require("react-dom/test-utils");

var _classnames = _interopRequireDefault(require("classnames"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _ramda = require("ramda");

var _main_theme_provider = require("./../../theming/providers/main_theme_provider");

var _dec, _class, _class2, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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


var GridGeneratorClass = (_dec = (0, _reactJss.default)(styles), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GridGeneratorClass, _React$Component);

  // region static props
  // endregion
  // region private props
  // endregion
  // region constructor
  function GridGeneratorClass(props) {
    var _this;

    _classCallCheck(this, GridGeneratorClass);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GridGeneratorClass).call(this, props));
    _this.state = {
      items: GridGeneratorClass.defaultState.items
    };
    return _this;
  } // endregion
  // region business logic


  _createClass(GridGeneratorClass, [{
    key: "_getGridItemName",
    value: function _getGridItemName(name) {
      return "".concat(name).concat(ITEM_NAME_POSTFIX);
    }
  }, {
    key: "_getGridHSpan",
    value: function _getGridHSpan(hSpan) {
      return (0, _ramda.defaultTo)(1)(hSpan);
    }
  }, {
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
    key: "_getComponentContainerClassName",
    // endregion
    // region style accessors
    value: function _getComponentContainerClassName() {
      return (0, _classnames.default)(this.props.classes.componentContainer, this.props.className);
    }
  }, {
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
    key: "_getRightmostColSize",
    value: function _getRightmostColSize() {
      return (0, _ramda.defaultTo)(GridGeneratorClass.defaultProps.rightmostColSize)(this.props.rightmostColSize);
    }
  }, {
    key: "_getLeftmostColSize",
    value: function _getLeftmostColSize() {
      return (0, _ramda.defaultTo)(GridGeneratorClass.defaultProps.leftmostColSize)(this.props.leftmostColSize);
    } // endregion
    // region handlers
    // endregion
    // region render methods

  }, {
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
    key: "_renderItems",
    value: function _renderItems() {
      var items = this._getItems();

      if ((0, _ramda.isNil)(items)) {
        return null;
      }

      return (0, _ramda.addIndex)(_ramda.map)((0, _ramda.bind)(this._renderItem, this), (0, _ramda.flatten)(items));
    }
  }, {
    key: "_renderComponentContainer",
    value: function _renderComponentContainer() {
      return React.createElement("div", {
        className: this._getComponentContainerClassName(),
        style: this._getComponentContainerStyle()
      }, this._renderItems());
    }
  }, {
    key: "render",
    value: function render() {
      return this._renderComponentContainer();
    } // endregion

  }], [{
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
    key: "getDefaultGridItemName",
    value: function getDefaultGridItemName(itemIndex, name) {
      return (0, _ramda.defaultTo)("".concat(ITEM_DEFAULT_NAME).concat(itemIndex))(name);
    }
  }, {
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
    }
  }]);

  return GridGeneratorClass;
}(React.Component), _class2.displayName = 'GridGeneratorClass', _class2.defaultProps = {
  items: null,
  leftmostColSize: '1fr',
  rightmostColSize: '1fr'
}, _class2.defaultState = {
  items: null
}, _temp)) || _class);
exports.GridGeneratorClass = GridGeneratorClass;

function GridGeneratorComponent(props) {
  return React.createElement(_main_theme_provider.MainThemeContext.Consumer, null, function (windowDimensions) {
    return React.createElement(GridGeneratorClass, _extends({}, props, windowDimensions));
  });
}

GridGeneratorComponent.displayName = 'GridGeneratorComponent'; // exports

var _default = GridGeneratorComponent;
exports.default = _default;