'use strict'; // external imports

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineImageIcon = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ramda = require("ramda");

var _general_constants = require("./../../../theming/constants/general_constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// styles definition
var styles = function styles(theme) {
  return {
    componentContainer: {}
  };
};
/**
 * Inline image icon component.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation


function InlineImageIconFunction(props) {
  var src = props.src,
      className = props.className,
      classes = props.classes,
      theme = props.theme,
      style = props.style;
  var size = (0, _ramda.defaultTo)(_general_constants.MEDIUM_SIZE)(props.size);
  var height = theme.layoutStyles["".concat(size, "IconSize")];
  var combinedContainerClassName = (0, _classnames.default)(classes.componentContainer, className);
  return React.createElement("img", {
    src: src,
    height: "".concat(height, "px"),
    border: 0,
    className: combinedContainerClassName,
    style: style
  });
}

InlineImageIconFunction.displayName = 'InlineImageIcon'; // exports

var InlineImageIcon = (0, _reactJss.default)(styles)(InlineImageIconFunction);
exports.InlineImageIcon = InlineImageIcon;