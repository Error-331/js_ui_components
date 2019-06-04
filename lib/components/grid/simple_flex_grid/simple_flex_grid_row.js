'use strict'; // external imports

require("core-js/modules/es.symbol");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.keys");

require("core-js/modules/web.dom-collections.for-each");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleFlexGridRow = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ramda = require("ramda");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// styles definition
var styles = function styles(theme) {
  return {
    componentContainer: {
      boxSizing: 'border-box',
      display: 'flex',
      flexBasis: 'auto',
      flexGrow: 0,
      flexShrink: 1,
      flexDirection: 'row',
      flexWrap: 'nowrap',
      alignContent: 'flex-start'
    }
  };
}; // component implementation


function SimpleFlexGridRowFunction(props) {
  var full = props.full,
      xAlign = props.xAlign,
      yAlign = props.yAlign,
      style = props.style,
      className = props.className,
      classes = props.classes,
      children = props.children;
  var componentClassNames = (0, _classnames.default)(classes.componentContainer, className);
  var flexGrow = full === true ? 1 : 0;
  var justifyContent = (0, _ramda.defaultTo)('flex-start')(xAlign);
  var alignItems = (0, _ramda.defaultTo)('stretch')(yAlign);
  var alignContent = (0, _ramda.defaultTo)('stretch')(yAlign);
  return React.createElement("div", {
    className: componentClassNames,
    style: _objectSpread({
      flexGrow: flexGrow,
      justifyContent: justifyContent,
      alignItems: alignItems,
      alignContent: alignContent
    }, style)
  }, children);
}

SimpleFlexGridRowFunction.displayName = 'SimpleFlexGridRow'; // exports

var SimpleFlexGridRow = (0, _reactJss.default)(styles)(SimpleFlexGridRowFunction);
exports.SimpleFlexGridRow = SimpleFlexGridRow;