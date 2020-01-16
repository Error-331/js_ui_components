'use strict'; // external imports

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.weak-map");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DraggableCardComponent = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactDnd = require("react-dnd");

var _reactJss = _interopRequireDefault(require("react-jss"));

var _ramda = require("ramda");

var _dec, _dec2, _dec3, _class, _class2, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
    componentContainer: {}
  };
}; // component implementation


var cardSourceSpec = {
  beginDrag: function beginDrag(props) {
    return {
      dragId: props,
      dragData: props.data
    };
  },
  endDrag: function endDrag(props, monitor) {
    if (!monitor.didDrop()) {
      return;
    }

    var item = monitor.getItem();
    var dropResult = monitor.getDropResult();
  }
};
var cardTargetSpec = {
  drop: function drop(props) {
    return {
      dragId: props,
      dragData: props.data
    };
  }
};

function dragSourceCollector(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

function dragTargetCollector(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
} // $FlowFixMe decorators


var DraggableCardComponent = (_dec = (0, _reactDnd.DragSource)(function (_ref) {
  var dndType = _ref.dndType;
  return dndType;
}, cardSourceSpec, dragSourceCollector), _dec2 = (0, _reactDnd.DropTarget)(function (_ref2) {
  var dndType = _ref2.dndType;
  return dndType;
}, cardTargetSpec, dragTargetCollector), _dec3 = (0, _reactJss.default)(styles), _dec(_class = _dec2(_class = _dec3(_class = (_temp = _class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DraggableCardComponent, _React$Component);

  function DraggableCardComponent() {
    _classCallCheck(this, DraggableCardComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(DraggableCardComponent).apply(this, arguments));
  }

  _createClass(DraggableCardComponent, [{
    key: "_getStyle",
    // region static props
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
    value: function _getStyle() {
      return (0, _ramda.defaultTo)({})(this.props.style);
    }
  }, {
    key: "_getComponentContainerStyle",
    value: function _getComponentContainerStyle() {
      return Object.assign({}, this._getStyle());
    } // endregion
    // region label accessors
    // endregion
    // region state accessors
    // endregion
    // region prop accessors
    // endregion
    // region handlers
    // endregion
    // region render methods

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          connectDragSource = _this$props.connectDragSource,
          connectDropTarget = _this$props.connectDropTarget,
          isDragging = _this$props.isDragging,
          isOver = _this$props.isOver;
      return connectDropTarget(connectDragSource(React.createElement("div", {
        style: this._getComponentContainerStyle()
      }, React.Children.map(children, function (child) {
        return React.cloneElement(child, {
          isDragging: isDragging,
          isOver: isOver
        });
      }))));
    } // endregion

  }]);

  return DraggableCardComponent;
}(React.Component), _class2.defaultProps = {
  classes: {}
}, _temp)) || _class) || _class) || _class); // exports

exports.DraggableCardComponent = DraggableCardComponent;