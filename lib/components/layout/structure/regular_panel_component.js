'use strict'; // external imports

require("core-js/modules/es.array.concat");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RegularPanelComponent = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// styles definition
var styles = function styles(theme) {
  return {
    componentContainer: {
      boxSizing: 'border-box',
      padding: "".concat(theme.layoutStyles.topSpacing, "px \n                  ").concat(theme.layoutStyles.rightSpacing, "px \n                  ").concat(theme.layoutStyles.bottomSpacing, "px \n                  ").concat(theme.layoutStyles.leftSpacing, "px\n        "),
      borderRadius: theme.layoutStyles.headerBorderRadius,
      backgroundColor: theme.layoutStyles.headerBGColor,
      fontFamily: theme.layoutStyles.headerFontStack,
      fontSize: "".concat(theme.layoutStyles.headerFontSize, "px"),
      color: theme.layoutStyles.headerFontColor
    }
  };
};
/**
 * Regular panel component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation


function RegularPanelFunction(props) {
  var className = props.className,
      style = props.style,
      children = props.children,
      classes = props.classes;
  var combinedClassName = (0, _classnames.default)(classes.componentContainer, className);
  return React.createElement("div", {
    className: combinedClassName,
    style: style
  }, children);
}

RegularPanelFunction.displayName = 'RegularPanelComponent'; // exports

var RegularPanelComponent = (0, _reactJss.default)(styles)(RegularPanelFunction);
exports.RegularPanelComponent = RegularPanelComponent;