'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DraggableCardComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class, _class2, _temp;

// local imports


var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactDnd = require('react-dnd');

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _regular_card_component = require('./../../layout/structure/regular_card_component');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// styles definition


// type definitions
var styles = function styles(theme) {
    return {
        componentContainer: {}
    };
};

// component implementation

var cardSource = {
    beginDrag: function beginDrag(props) {
        return {
            text: 'vv'
        };
    },
    endDrag: function endDrag(props, monitor, component) {
        if (!monitor.didDrop()) {
            return;
        }

        // When dropped on a compatible target, do something
        //  const item = monitor.getItem();
        //  const dropResult = monitor.getDropResult();
        // CardActions.moveCardToList(item.id, dropResult.listId);
    }
};

// $FlowFixMe decorators
var DraggableCardComponent = exports.DraggableCardComponent = (_dec = (0, _reactDnd.DragSource)('ff', cardSource, function (connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
}), _dec2 = (0, _reactJss2.default)(styles), _dec(_class = _dec2(_class = (_temp = _class2 = function (_React$Component) {
    _inherits(DraggableCardComponent, _React$Component);

    function DraggableCardComponent() {
        _classCallCheck(this, DraggableCardComponent);

        return _possibleConstructorReturn(this, (DraggableCardComponent.__proto__ || Object.getPrototypeOf(DraggableCardComponent)).apply(this, arguments));
    }

    _createClass(DraggableCardComponent, [{
        key: 'render',
        value: function render() {
            alert('a');
            var connectDragSource = this.props.connectDragSource;

            return connectDragSource(React.createElement(
                _regular_card_component.RegularCardComponent,
                null,
                '432'
            ));
        }
    }]);

    return DraggableCardComponent;
}(React.Component), _class2.defaultProps = {
    classes: {}
}, _temp)) || _class) || _class);

// exports
//export const DraggableCardComponent = injectSheet(styles)(DraggableCardComponentClass);