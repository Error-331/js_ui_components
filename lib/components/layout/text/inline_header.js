'use strict'; // external imports

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineHeader = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ramda = require("ramda");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// styles definition
var styles = function styles(theme) {
  return {
    componentContainer: {
      fontFamily: theme.layoutStyles.fontStack,
      color: theme.layoutStyles.bodyFontColor,
      '&.level1': {
        fontSize: theme.layoutStyles.inlineHeaderLevel1FontSize
      },
      '&.level2': {
        fontSize: theme.layoutStyles.inlineHeaderLevel2FontSize
      },
      '&.level3': {
        fontSize: theme.layoutStyles.inlineHeaderLevel3FontSize
      },
      '&.level4': {
        fontSize: theme.layoutStyles.inlineHeaderLevel4FontSize
      },
      '&.level5': {
        fontSize: theme.layoutStyles.inlineHeaderLevel5FontSize
      },
      '&.level6': {
        fontSize: theme.layoutStyles.inlineHeaderLevel6FontSize
      }
    }
  };
};
/**
 * Inline header component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation


function InlineHeaderFunction(props) {
  var level = props.level,
      classes = props.classes,
      children = props.children,
      className = props.className,
      style = props.style;
  var userLevel = (0, _ramda.defaultTo)(1)(level);
  var levelClassName = (0, _ramda.cond)([[_ramda.isNil, (0, _ramda.always)('level1')], [function (level) {
    return (0, _ramda.lt)(level, 0);
  }, (0, _ramda.always)('level1')], [function (level) {
    return (0, _ramda.gt)(level, 6);
  }, (0, _ramda.always)('level6')], [_ramda.T, function (level) {
    return "level".concat(level);
  }]])(userLevel);
  var componentClassNames = (0, _classnames.default)(classes.componentContainer, levelClassName, className);
  return React.createElement("span", {
    className: componentClassNames,
    style: style
  }, children);
}

InlineHeaderFunction.displayName = 'InlineHeader'; // exports

var InlineHeader = (0, _reactJss.default)(styles)(InlineHeaderFunction);
exports.InlineHeader = InlineHeader;