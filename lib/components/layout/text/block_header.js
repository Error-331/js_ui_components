'use strict'; // external imports

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.weak-map");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BlockHeader = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ramda = require("ramda");

var _general_constants = require("./../../../theming/constants/general_constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// styles definition
var styles = function styles(theme) {
  return {
    componentContainer: {
      boxSizing: 'border-box',
      marginTop: theme.layoutStyles.sectionVerticalSpacing,
      marginBottom: theme.layoutStyles.sectionVerticalSpacing,
      fontFamily: theme.layoutStyles.fontStack,
      fontWeight: 'normal',
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
 * Block header component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation


function BlockHeaderFunction(props) {
  var level = props.level;
  level = (0, _ramda.cond)([[_ramda.isNil, (0, _ramda.always)(1)], [function (level) {
    return (0, _ramda.lt)(level, 0);
  }, (0, _ramda.always)(1)], [function (level) {
    return (0, _ramda.gt)(level, 6);
  }, (0, _ramda.always)(6)], [_ramda.T, _ramda.identity]])(level);
  console.log('m', props);
  var classes = props.classes,
      theme = props.theme,
      children = props.children,
      className = props.className;
  var componentClassNames = (0, _classnames.default)(classes.componentContainer, "level".concat(level), className);
  var style = props.style,
      fontFamilyType = props.fontFamilyType;
  fontFamilyType = (0, _ramda.defaultTo)(_general_constants.REGULAR_FONT)(fontFamilyType);
  style = (0, _ramda.defaultTo)({})(style);
  style = (0, _ramda.mergeDeepRight)({
    fontFamily: theme.fontFamilyUtilities.getFontFamilyByType(theme, fontFamilyType)
  }, style);
  return (0, _ramda.cond)([[(0, _ramda.equals)(1), (0, _ramda.always)(React.createElement("h1", {
    className: componentClassNames,
    style: style
  }, children))], [(0, _ramda.equals)(2), (0, _ramda.always)(React.createElement("h2", {
    className: componentClassNames,
    style: style
  }, children))], [(0, _ramda.equals)(3), (0, _ramda.always)(React.createElement("h3", {
    className: componentClassNames,
    style: style
  }, children))], [(0, _ramda.equals)(4), (0, _ramda.always)(React.createElement("h4", {
    className: componentClassNames,
    style: style
  }, children))], [(0, _ramda.equals)(5), (0, _ramda.always)(React.createElement("h5", {
    className: componentClassNames,
    style: style
  }, children))], [(0, _ramda.equals)(6), (0, _ramda.always)(React.createElement("h6", {
    className: componentClassNames,
    style: style
  }, children))]])(level);
}

BlockHeaderFunction.displayName = 'BlockHeader'; // exports

var BlockHeader = (0, _reactJss.default)(styles, {
  injectTheme: true
})(BlockHeaderFunction);
exports.BlockHeader = BlockHeader;
var _default = BlockHeader;
exports.default = _default;