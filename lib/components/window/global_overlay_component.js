'use strict'; // external imports

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.weak-map");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.GlobalOverlayComponent = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _overlay_component = require("./overlay_component");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
      onMouseUp = props.onMouseUp,
      onMouseMove = props.onMouseMove,
      onMouseLeave = props.onMouseLeave,
      children = props.children,
      classes = props.classes;
  return React.createElement(_overlay_component.OverlayComponent, {
    show: show,
    opacity: opacity,
    containerClassName: classes.componentContainer,
    onOverlayClick: onOverlayClick,
    onMouseUp: onMouseUp,
    onMouseMove: onMouseMove,
    onMouseLeave: onMouseLeave
  }, children);
}

GlobalOverlayFunction.displayName = 'GlobalOverlayComponent'; // exports

var GlobalOverlayComponent = (0, _reactJss.default)(styles, {
  injectTheme: true
})(GlobalOverlayFunction);
exports.GlobalOverlayComponent = GlobalOverlayComponent;
var _default = GlobalOverlayComponent;
exports.default = _default;