'use strict'; // external imports

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.GlobalOverlayComponent = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _overlay_component = require("./overlay_component");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// styles definition
var styles = function styles(theme) {
  return {
    componentContainer: {
      position: 'fixed'
    }
  };
};
/**
 * Global overlay component.
 * Component is intended to be used as an overlay for different modal dialog boxes.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation


function GlobalOverlayFunction(props) {
  var show = props.show,
      opacity = props.opacity,
      onOverlayClick = props.onOverlayClick,
      children = props.children,
      classes = props.classes;
  return React.createElement(_overlay_component.OverlayComponent, {
    show: show,
    opacity: opacity,
    onOverlayClick: onOverlayClick,
    containerClassName: classes.componentContainer
  }, children);
}

GlobalOverlayFunction.displayName = 'GlobalOverlayComponent'; // exports

var GlobalOverlayComponent = (0, _reactJss.default)(styles)(GlobalOverlayFunction);
exports.GlobalOverlayComponent = GlobalOverlayComponent;
var _default = GlobalOverlayComponent;
exports.default = _default;