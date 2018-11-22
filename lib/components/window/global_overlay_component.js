'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlobalOverlayComponent = undefined;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _overlay_component = require('./overlay_component');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// styles definition


// type definitions
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


// local imports
function GlobalOverlayFunction(props) {
  var show = props.show,
      opacity = props.opacity,
      onOverlayClick = props.onOverlayClick,
      children = props.children,
      classes = props.classes;


  return React.createElement(
    _overlay_component.OverlayComponent,
    {
      show: show,
      opacity: opacity,
      onOverlayClick: onOverlayClick,
      containerClassName: classes.componentContainer
    },
    children
  );
}

GlobalOverlayFunction.displayName = 'GlobalOverlayComponent';

// exports
var GlobalOverlayComponent = exports.GlobalOverlayComponent = (0, _reactJss2.default)(styles)(GlobalOverlayFunction);