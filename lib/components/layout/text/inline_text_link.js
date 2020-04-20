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
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

var _ramda = require("ramda");

var _classnames = _interopRequireDefault(require("classnames"));

var _general_constants = require("./../../../theming/constants/general_constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(Object(source)); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// styles definition
var useStyles = (0, _reactJss.createUseStyles)(function (theme) {
  return {
    componentContainer: {
      textDecoration: 'underline',
      color: theme.layoutStyles.linkFontColor
    }
  };
});
/**
 * Inline text link component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation

function InlineTextLink(props) {
  // region private variables declaration
  var href = (0, _ramda.defaultTo)('#')(props.href);
  var fontFamilyType = (0, _ramda.defaultTo)(_general_constants.REGULAR_FONT)(props.fontFamilyType);
  var className = (0, _ramda.defaultTo)('')(props.className);
  var style = (0, _ramda.defaultTo)({})(props.style); // endregion
  // region style hooks declaration

  var theme = (0, _reactJss.useTheme)();
  var classes = useStyles(_objectSpread({}, props, {
    theme: theme
  })); // endregion
  // region context hooks declaration
  // endregion
  // region state hooks declaration
  // endregion
  // region effect hooks declaration
  // endregion
  // region state variables declaration
  // endregion
  // region ref hooks declaration
  // endregion
  // region callback hooks declaration
  // endregion
  // region custom hooks declaration
  // endregion
  // region business logic
  // endregion
  // region event handler helpers
  // endregion
  // region render helpers

  var renderComponentContainer = function renderComponentContainer() {
    var componentContainer = classes.componentContainer;
    var componentClassName = (0, _classnames.default)(componentContainer, className);
    var newStyle = (0, _ramda.mergeDeepRight)({
      fontFamily: theme.fontFamilyUtilities.getFontFamilyByType(theme, fontFamilyType),
      fontSize: (0, _ramda.isNil)(props.fontSize) ? 'inherit' : "".concat(props.fontSize, "px")
    }, style);
    return _react.default.createElement("a", {
      href: href,
      className: componentClassName,
      style: newStyle
    }, props.children);
  }; // endregion
  // init


  return renderComponentContainer();
} // exports


var _default = InlineTextLink;
exports.default = _default;