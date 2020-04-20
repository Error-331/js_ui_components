'use strict'; // external imports

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChipComponent = ChipComponent;
exports.default = exports.ChipClass = void 0;

var React = _interopRequireWildcard(require("react"));

var _testUtils = require("react-dom/test-utils");

var _ramda = require("ramda");

var _main_theme_provider = require("./../../theming/providers/main_theme_provider");

var _chip_variant1_component = _interopRequireDefault(require("./chip_variants/chip_variant1_component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(Object(source)); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// styles definition

/**
 * Chip component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation
var ChipClass =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ChipClass, _React$Component);

  function ChipClass() {
    _classCallCheck(this, ChipClass);

    return _possibleConstructorReturn(this, _getPrototypeOf(ChipClass).apply(this, arguments));
  }

  _createClass(ChipClass, [{
    key: "_getVariant",
    // region static props
    // endregion
    // region private props
    // endregion
    // region constructor
    // endregion
    // region business logic
    // endregion
    // region lifecycle methods
    // endregion
    // region style accessors
    // endregion
    // region label accessors
    // endregion
    // region state accessors
    // endregion
    // region prop accessors
    value: function _getVariant() {
      return (0, _ramda.defaultTo)(ChipClass.defaultProps.colorVariant)(this.props.colorVariant);
    } // endregion
    // region handlers
    // endregion
    // region render methods

  }, {
    key: "render",
    value: function render() {
      var customComponent = this.props.customComponent;
      var componentVariantProps = (0, _ramda.pick)(['variant', 'textType', 'clickable', 'rightIconClickable', 'label', 'labelSize', 'labelPosition', 'data', 'disabled', 'onClick', 'onRightIconClick', 'className', 'containerClassName', 'rightIconClassName', 'containerStyle', 'style', 'hoverStyle', 'labelStyle', 'rightIconStyle'], this.props);

      if (!(0, _ramda.isNil)(customComponent)) {
        return (0, _ramda.ifElse)(_testUtils.isElement, function (elm) {
          return React.cloneElement(elm, _objectSpread({}, elm.props, componentVariantProps));
        }, function (elm) {
          return React.createElement(elm, _objectSpread({}, componentVariantProps));
        })(customComponent);
      }

      return (0, _ramda.cond)([[(0, _ramda.equals)(1), (0, _ramda.always)(React.createElement(_chip_variant1_component.default, componentVariantProps))], [(0, _ramda.equals)(2), (0, _ramda.always)(React.createElement(_chip_variant1_component.default, componentVariantProps))], [_ramda.T, (0, _ramda.always)(null)]])(this._getVariant());
    } // endregion

  }]);

  return ChipClass;
}(React.Component);

exports.ChipClass = ChipClass;
ChipClass.displayName = 'ChipComponent';
ChipClass.defaultProps = {
  colorVariant: 1
};

function ChipComponent(props) {
  return React.createElement(_main_theme_provider.MainThemeContext.Consumer, null, function (windowDimensions) {
    return React.createElement(ChipClass, _extends({}, props, windowDimensions));
  });
}

ChipComponent.displayName = 'ChipComponent'; // exports

var _default = ChipComponent;
exports.default = _default;