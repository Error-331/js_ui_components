'use strict'; // external imports

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.number.constructor");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardDrawerComponent = CardDrawerComponent;
exports.default = exports.CardDrawerClass = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactDnd = require("react-dnd");

var _reactDndHtml5Backend = _interopRequireDefault(require("react-dnd-html5-backend"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ramda = require("ramda");

var _dom_helpers = require("@webfuturistics/design_components/lib/helpers/general/dom_helpers");

var _draggable_card_component = require("./draggable_card_component");

var _main_theme_provider = require("./../../../theming/providers/main_theme_provider");

var _dec, _dec2, _class, _class2, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// styles definition
var styles = function styles(theme) {
  return {
    componentContainerOuter: {
      boxSizing: 'border-box',
      '&.withScrollX': {
        'overflowX': 'scroll',
        'overflowY': 'hidden'
      },
      '&.withScrollY': {
        'overflowX': 'hidden',
        'overflowY': 'scroll'
      },
      '& > $componentContainerInner': {
        boxSizing: 'border-box',
        display: 'grid',
        padding: '5px'
      }
    },
    componentContainerInner: {}
  };
}; // component implementation
// $FlowFixMe decorators


var CardDrawerClass = (_dec = (0, _reactDnd.DragDropContext)(_reactDndHtml5Backend.default), _dec2 = (0, _reactJss.default)(styles), _dec(_class = _dec2(_class = (_temp = _class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CardDrawerClass, _React$Component);

  // region static props
  // endregion
  // region private props
  // endregion
  // region constructor
  function CardDrawerClass(props) {
    _classCallCheck(this, CardDrawerClass);

    return _possibleConstructorReturn(this, _getPrototypeOf(CardDrawerClass).call(this, props));
  } // endregion
  // region business logic
  // endregion
  // region lifecycle methods
  // endregion
  // region style accessors


  _createClass(CardDrawerClass, [{
    key: "_getCardStyle",
    value: function _getCardStyle() {
      var cardStyle = {};

      var verticalGapSize = this._getVerticalGapSize();

      var rowCount = this._getRowCount();

      if (this._isOneLine() && (0, _ramda.is)(Number, rowCount)) {
        return cardStyle;
      } else if (this._isRestrictedVertically() && (0, _ramda.is)(Number, rowCount)) {
        return Object.assign(cardStyle, {
          paddingBottom: "".concat(verticalGapSize, "px")
        });
      } else {
        return cardStyle;
      }
    }
  }, {
    key: "_getInnerComponentContainerStyle",
    value: function _getInnerComponentContainerStyle() {
      var horizontalGapSize = this._getHorizontalGapSize();

      var verticalGapSize = this._getVerticalGapSize();

      var colWidth = this._getColSize();

      var rowHeight = this._getRowSize();

      var rowCount = this._getRowCount();

      var containerStyle = {
        gridAutoRows: "".concat(rowHeight, "px"),
        gridColumnGap: "".concat(horizontalGapSize, "px"),
        gridRowGap: "".concat(verticalGapSize, "px"),
        gridTemplateColumns: "repeat(auto-fill, minmax(".concat(colWidth, "px, 1fr))")
      };

      if (this._isOneLine() && typeof rowCount === 'number') {
        var data = this._getData();

        var totalGaps = data.length * 2 - 2;
        var totalGapsWidth = horizontalGapSize * totalGaps;
        var totalColumnsWidth = colWidth * data.length;
        var width = totalGapsWidth + totalColumnsWidth;
        var height = verticalGapSize * 2 + rowHeight;
        return Object.assign(containerStyle, {
          'gridRowGap': "0px",
          'width': "".concat(width, "px"),
          'height': "".concat(height, "px")
        });
      } else if (this._isRestrictedVertically() && typeof rowCount === 'number') {
        var gridRowsHeight = rowHeight + verticalGapSize;
        var gapsHeight = verticalGapSize * rowCount;
        var rowsHeight = rowHeight * rowCount;

        var _height = gapsHeight + rowsHeight;

        return Object.assign(containerStyle, {
          'gridAutoRows': "".concat(gridRowsHeight, "px"),
          'gridRowGap': "0px",
          'height': "".concat(_height, "px")
        });
      } else {
        return containerStyle;
      }
    }
  }, {
    key: "_getInnerComponentContainerClass",
    value: function _getInnerComponentContainerClass() {
      return (0, _classnames.default)(this.props.classes.componentContainerInner);
    }
  }, {
    key: "_getOuterComponentContainerClass",
    value: function _getOuterComponentContainerClass() {
      return (0, _classnames.default)(this.props.classes.componentContainerOuter, {
        withScrollX: this._isOneLine(),
        withScrollY: this._isRestrictedVertically()
      });
    } // endregion
    // region label accessors
    // endregion
    // region state accessors
    // endregion
    // region prop accessors

  }, {
    key: "_getVerticalGapSize",
    value: function _getVerticalGapSize() {
      return (0, _ramda.defaultTo)(this.props.theme.layoutStyles.sectionVerticalSpacing)(this.props.gapSize);
    }
  }, {
    key: "_getHorizontalGapSize",
    value: function _getHorizontalGapSize() {
      return (0, _ramda.defaultTo)(this.props.theme.layoutStyles.sectionHorizontalSpacing)(this.props.gapSize);
    }
  }, {
    key: "_getColSize",
    value: function _getColSize() {
      return (0, _ramda.defaultTo)(CardDrawerClass.defaultProps.colSize)(this.props.colSize);
    }
  }, {
    key: "_getRowSize",
    value: function _getRowSize() {
      return (0, _ramda.defaultTo)(CardDrawerClass.defaultProps.rowSize)(this.props.rowSize);
    }
  }, {
    key: "_getRowCount",
    value: function _getRowCount() {
      return (0, _ramda.defaultTo)('auto')(this.props.rowCount);
    }
  }, {
    key: "_getData",
    value: function _getData() {
      return (0, _ramda.defaultTo)([])(this.props.data);
    }
  }, {
    key: "_getDndType",
    value: function _getDndType() {
      return (0, _ramda.defaultTo)(CardDrawerClass.defaultProps.dndType)(this.props.dndType);
    }
  }, {
    key: "_isOneLine",
    value: function _isOneLine() {
      var rowCount = this._getRowCount();

      return (0, _ramda.and)((0, _ramda.is)(Number, rowCount), (0, _ramda.equals)(rowCount, 1));
    }
  }, {
    key: "_isRestrictedVertically",
    value: function _isRestrictedVertically() {
      var rowCount = this._getRowCount();

      return (0, _ramda.and)((0, _ramda.is)(Number, rowCount), (0, _ramda.gt)(rowCount, 1));
    } // endregion
    // region handlers
    // endregion
    // region render methods

  }, {
    key: "_renderDraggableCards",
    value: function _renderDraggableCards() {
      var _this = this;

      var draggableCardKey = -1;
      return (0, _ramda.map)(function (_ref) {
        var id = _ref.id,
            data = _ref.data,
            card = _ref.card;
        draggableCardKey = (0, _ramda.inc)(draggableCardKey);
        return React.createElement(_draggable_card_component.DraggableCardComponent, {
          id: id,
          data: data,
          dndType: _this._getDndType(),
          style: _this._getCardStyle(),
          key: "draggable_card_".concat(draggableCardKey)
        }, card);
      }, this._getData());
    }
  }, {
    key: "_renderInnerComponentContainer",
    value: function _renderInnerComponentContainer() {
      return React.createElement("div", {
        className: this._getInnerComponentContainerClass(),
        style: this._getInnerComponentContainerStyle()
      }, this._renderDraggableCards());
    }
  }, {
    key: "_renderOuterComponentContainer",
    value: function _renderOuterComponentContainer() {
      return React.createElement("div", {
        className: this._getOuterComponentContainerClass()
      }, this._renderInnerComponentContainer());
    }
  }, {
    key: "render",
    value: function render() {
      return this._renderOuterComponentContainer();
    } // endregion

  }]);

  return CardDrawerClass;
}(React.Component), _class2.displayName = 'CardDrawerClass', _class2.defaultProps = {
  dndType: "card_drawer_".concat((0, _dom_helpers.generateRandomIdNumber)()),
  colSize: 295,
  rowSize: 175,
  classes: {}
}, _temp)) || _class) || _class);
exports.CardDrawerClass = CardDrawerClass;

function CardDrawerComponent(props) {
  return React.createElement(_main_theme_provider.MainThemeContext.Consumer, null, function (windowDimensions) {
    return React.createElement(CardDrawerClass, _extends({}, props, windowDimensions));
  });
}

CardDrawerComponent.displayName = 'CardDrawerComponent'; // exports

var _default = CardDrawerComponent;
exports.default = _default;