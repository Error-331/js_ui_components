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
exports.ElementsRowFunction = ElementsRowFunction;
exports.default = exports.ElementsRow = void 0;

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
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      alignContent: 'flex-start',
      '&.left': {
        justifyContent: 'flex-start'
      },
      '&.left > div': {
        marginRight: "".concat(theme.layoutStyles.sectionHorizontalSpacing, "px")
      },
      '&.left > button': {
        marginRight: "".concat(theme.layoutStyles.sectionHorizontalSpacing, "px")
      },
      '&.left > i': {
        marginRight: "".concat(theme.layoutStyles.sectionHorizontalSpacing, "px")
      },
      '&.left > div:last-child': {
        marginRight: '0px'
      },
      '&.left > button:last-child': {
        marginRight: '0px'
      },
      '&.left > i:last-child': {
        marginRight: '0px'
      },
      '&.right': {
        justifyContent: 'flex-end'
      },
      '&.right > div': {
        marginLeft: "".concat(theme.layoutStyles.sectionHorizontalSpacing, "px")
      },
      '&.right > button': {
        marginLeft: "".concat(theme.layoutStyles.sectionHorizontalSpacing, "px")
      },
      '&.right > i': {
        marginLeft: "".concat(theme.layoutStyles.sectionHorizontalSpacing, "px")
      },
      '&.right > div:first-child': {
        marginLeft: '0px'
      },
      '&.right > button:first-child': {
        marginLeft: '0px'
      },
      '&.right > i:first-child': {
        marginLeft: '0px'
      },
      '&.center': {
        justifyContent: 'center'
      },
      '&.center > div': {
        marginRight: "".concat(theme.layoutStyles.sectionHorizontalSpacing, "px")
      },
      '&.center > button': {
        marginRight: "".concat(theme.layoutStyles.sectionHorizontalSpacing, "px")
      },
      '&.center > div:last-child': {
        marginRight: '0px'
      },
      '&.center > button:last-child': {
        marginRight: '0px'
      },
      '&.center > i:last-child': {
        marginRight: '0px'
      }
    }
  };
};
/**
 * Elements row component.
 * Used to align rows of elements (for example: align buttons at the bottom of the dialog box or at tools panel).
 * Best used with [RegularButtonComponent](#regularbuttoncomponent)
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation


function ElementsRowFunction(props) {
  var alignment = props.alignment,
      wrap = props.wrap,
      className = props.className,
      classes = props.classes,
      style = props.style;
  alignment = (0, _ramda.defaultTo)('left')(alignment);
  wrap = (0, _ramda.defaultTo)(false)(wrap);
  var containerClasses = (0, _classnames.default)(classes.componentContainer, alignment, className);
  var flexWrap = wrap ? 'wrap' : 'nowrap';
  return React.createElement("div", {
    className: containerClasses,
    style: _objectSpread({
      flexWrap: flexWrap
    }, style)
  }, props.children);
}

ElementsRowFunction.displayName = 'ElementsRow'; // exports

var ElementsRow = (0, _reactJss.default)(styles)(ElementsRowFunction);
exports.ElementsRow = ElementsRow;
var _default = ElementsRow;
exports.default = _default;