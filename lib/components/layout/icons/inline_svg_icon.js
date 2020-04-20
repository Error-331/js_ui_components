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
exports.default = exports.InlineSVGIcon = void 0;

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
      '&.tiny': {
        minHeight: "".concat(theme.layoutStyles.tinyIconSize, "px"),
        '& > $svgContainer': {
          height: "".concat(theme.layoutStyles.tinyIconSize, "px")
        }
      },
      '&.small': {
        minHeight: "".concat(theme.layoutStyles.smallIconSize, "px"),
        '& > $svgContainer': {
          height: "".concat(theme.layoutStyles.smallIconSize, "px")
        }
      },
      '&.medium': {
        minHeight: "".concat(theme.layoutStyles.mediumIconSize, "px"),
        '& > $svgContainer': {
          height: "".concat(theme.layoutStyles.mediumIconSize, "px")
        }
      },
      '&.large': {
        minHeight: "".concat(theme.layoutStyles.largeIconSize, "px"),
        '& > $svgContainer': {
          height: "".concat(theme.layoutStyles.largeIconSize, "px")
        }
      },
      '&.extraLarge': {
        minHeight: "".concat(theme.layoutStyles.extraLargeIconSize, "px"),
        '& > $svgContainer': {
          height: "".concat(theme.layoutStyles.extraLargeIconSize, "px")
        }
      },
      '& > $svgContainer': {
        '& path': {
          fill: 'none',
          stroke: theme.layoutStyles.baseIconColor,
          strokeWidth: '2.5',
          strokeLinecap: 'butt',
          strokeLinejoin: 'miter',
          strokeMiterlimit: 10,
          strokeDasharray: 'none',
          strokeOpacity: 1
        }
      }
    },
    svgContainer: {}
  };
};
/**
 * SVG inline icon component.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation


function InlineSVGIconFunction(props) {
  var containerClassName = props.containerClassName,
      classes = props.classes,
      containerStyle = props.containerStyle;
  var size = (0, _ramda.defaultTo)(_general_constants.MEDIUM_SIZE)(props.size);
  var combinedContainerClassName = (0, _classnames.default)(classes.componentContainer, size, containerClassName);
  var svgWidth = props.svgWidth,
      svgHeight = props.svgHeight,
      svgViewBox = props.svgViewBox,
      svgContainerClassName = props.svgContainerClassName,
      svgContainerStyle = props.svgContainerStyle,
      children = props.children;
  var combinedSvgContainerClassName = (0, _classnames.default)(classes.svgContainer, svgContainerClassName);
  return React.createElement("div", {
    className: combinedContainerClassName,
    style: containerStyle
  }, React.createElement("svg", {
    width: svgWidth,
    height: svgHeight,
    viewBox: svgViewBox,
    className: combinedSvgContainerClassName,
    style: svgContainerStyle
  }, children));
}

InlineSVGIconFunction.displayName = 'InlineSVGIcon'; // exports

var InlineSVGIcon = (0, _reactJss.default)(styles)(InlineSVGIconFunction);
exports.InlineSVGIcon = InlineSVGIcon;
var _default = InlineSVGIcon;
exports.default = _default;