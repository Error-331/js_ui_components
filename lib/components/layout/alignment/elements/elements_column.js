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
exports.ElementsColumn = void 0;

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
      flexDirection: 'column',
      flexWrap: 'nowrap',
      justifyContent: 'flex-start',
      alignItems: 'center',
      alignContent: 'flex-start',
      '&.left': {
        alignItems: 'flex-start'
      },
      '&.left > div': {
        marginTop: "".concat(theme.layoutStyles.sectionVerticalSpacing, "px")
      },
      '&.left > button': {
        marginTop: "".concat(theme.layoutStyles.sectionVerticalSpacing, "px")
      },
      '&.left > div:first-child': {
        marginTop: '0px'
      },
      '&.left > button:first-child': {
        marginTop: '0px'
      },
      '&.right': {
        alignItems: 'flex-end'
      },
      '&.right > div': {
        marginTop: "".concat(theme.layoutStyles.sectionVerticalSpacing, "px")
      },
      '&.right > button': {
        marginTop: "".concat(theme.layoutStyles.sectionVerticalSpacing, "px")
      },
      '&.right > div:first-child': {
        marginTop: '0px'
      },
      '&.right > button:first-child': {
        marginTop: '0px'
      },
      '&.center': {
        alignItems: 'center'
      },
      '&.center > div': {
        marginTop: "".concat(theme.layoutStyles.sectionVerticalSpacing, "px")
      },
      '&.center > button': {
        marginTop: "".concat(theme.layoutStyles.sectionVerticalSpacing, "px")
      },
      '&.center > div:first-child': {
        marginTop: '0px'
      },
      '&.center > button:first-child': {
        marginTop: '0px'
      }
    }
  };
};
/**
 * Elements column component.
 * Used to align columns of elements.
 * Best used with [RegularButtonComponent](#regularbuttoncomponent)
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation


function ElementsColumnFunction(props) {
  var alignment = props.alignment,
      classes = props.classes,
      style = props.style;
  alignment = (0, _ramda.defaultTo)('left')(alignment);
  var containerClasses = (0, _classnames.default)(classes.componentContainer, alignment);
  return React.createElement("div", {
    className: containerClasses,
    style: _objectSpread({}, style)
  }, props.children);
}

ElementsColumnFunction.displayName = 'ElementsColumn'; // exports

var ElementsColumn = (0, _reactJss.default)(styles)(ElementsColumnFunction);
exports.ElementsColumn = ElementsColumn;