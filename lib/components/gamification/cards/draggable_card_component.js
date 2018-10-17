'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DraggableCardComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _class, _class2, _temp;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactDnd = require('react-dnd');

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _ramda = require('ramda');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// styles definition


// local imports

// type definitions
var styles = function styles(theme) {
    return {
        componentContainer: {}
    };
};

// component implementation
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
}

// $FlowFixMe decorators
var DraggableCardComponent = exports.DraggableCardComponent = (_dec = (0, _reactDnd.DragSource)(function (_ref) {
    var dndType = _ref.dndType;
    return dndType;
}, cardSourceSpec, dragSourceCollector), _dec2 = (0, _reactDnd.DropTarget)(function (_ref2) {
    var dndType = _ref2.dndType;
    return dndType;
}, cardTargetSpec, dragTargetCollector), _dec3 = (0, _reactJss2.default)(styles), _dec(_class = _dec2(_class = _dec3(_class = (_temp = _class2 = function (_React$Component) {
    _inherits(DraggableCardComponent, _React$Component);

    function DraggableCardComponent() {
        _classCallCheck(this, DraggableCardComponent);

        return _possibleConstructorReturn(this, (DraggableCardComponent.__proto__ || Object.getPrototypeOf(DraggableCardComponent)).apply(this, arguments));
    }

    _createClass(DraggableCardComponent, [{
        key: '_getStyle',


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
        // region static props

    }, {
        key: '_getComponentContainerStyle',
        value: function _getComponentContainerStyle() {
            return Object.assign({}, this._getStyle());
        }

        // endregion

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
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                connectDragSource = _props.connectDragSource,
                connectDropTarget = _props.connectDropTarget,
                isDragging = _props.isDragging,
                isOver = _props.isOver;


            return connectDropTarget(connectDragSource(React.createElement(
                'div',
                { style: this._getComponentContainerStyle() },
                React.Children.map(children, function (child) {
                    return React.cloneElement(child, {
                        isDragging: isDragging, isOver: isOver
                    });
                })
            )));
        }

        // endregion

    }]);

    return DraggableCardComponent;
}(React.Component), _class2.defaultProps = {
    classes: {}
}, _temp)) || _class) || _class) || _class);

// exports