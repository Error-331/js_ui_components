'use strict'; // external imports

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormCheckboxVariant2Component = FormCheckboxVariant2Component;
exports.default = exports.FormCheckboxVariant2Class = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireWildcard(require("react-jss"));

var _ramda = require("ramda");

var _form_checkbox_variant1_component = require("./form_checkbox_variant1_component");

var _main_theme_provider = require("./../../../theming/providers/main_theme_provider");

var _dec, _class, _class2, _temp;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// styles definition
var styles = function styles(theme) {
  return {};
};
/**
 * Checkbox (variant 2) component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation
// $FlowFixMe decorators


var FormCheckboxVariant2Class = (_dec = (0, _reactJss.default)(styles, {
  injectTheme: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FormCheckboxVariant2Class, _React$Component);

  function FormCheckboxVariant2Class() {
    _classCallCheck(this, FormCheckboxVariant2Class);

    return _possibleConstructorReturn(this, _getPrototypeOf(FormCheckboxVariant2Class).apply(this, arguments));
  }

  _createClass(FormCheckboxVariant2Class, [{
    key: "_getCheckMarkContainerStyle",
    // region static props
    // endregion
    // region constructor
    // endregion
    // region business logic
    // endregion
    // region lifecycle methods
    // endregion
    // region style accessors
    value: function _getCheckMarkContainerStyle() {
      return {
        borderColor: this.props.theme.inputStyles.alternateInputColor
      };
    }
  }, {
    key: "_getCheckedCheckMarkBackgroundContainerStyle",
    value: function _getCheckedCheckMarkBackgroundContainerStyle() {
      return {
        backgroundColor: this.props.theme.inputStyles.bgColor
      };
    }
  }, {
    key: "_getCheckMarkBackgroundContainerStyle",
    value: function _getCheckMarkBackgroundContainerStyle() {
      return {
        borderColor: this._isDisabled() ? this.props.theme.inputStyles.disabledColor : this.props.theme.inputStyles.alternateInputColor
      };
    } // endregion
    // region label accessors
    // endregion
    // region state accessors
    // endregion
    // region prop accessors

  }, {
    key: "_isDisabled",
    value: function _isDisabled() {
      return (0, _ramda.defaultTo)(FormCheckboxVariant2Class.defaultProps.disabled)(this.props.disabled);
    } // endregion
    // region handlers
    // endregion
    // region render methods

  }, {
    key: "render",
    value: function render() {
      return React.createElement(_form_checkbox_variant1_component.FormCheckboxVariant1Component, {
        styleSheetName: FormCheckboxVariant2Class.displayName,
        disabled: this.props.disabled,
        htmlFor: this.props.htmlFor,
        checkMarkBackgroundContainerStyle: this._getCheckMarkBackgroundContainerStyle(),
        checkedCheckMarkBackgroundContainerStyle: this._getCheckedCheckMarkBackgroundContainerStyle(),
        checkMarkContainerStyle: this._getCheckMarkContainerStyle()
      });
    } // endregion

  }]);

  return FormCheckboxVariant2Class;
}(React.Component), _class2.displayName = 'FormCheckboxVariant2Class', _class2.defaultProps = {
  disabled: false
}, _temp)) || _class);
exports.FormCheckboxVariant2Class = FormCheckboxVariant2Class;

function FormCheckboxVariant2Component(props) {
  return React.createElement(_main_theme_provider.MainThemeContext.Consumer, null, function (windowDimensions) {
    return React.createElement(FormCheckboxVariant2Class, _extends({}, props, windowDimensions));
  });
}

FormCheckboxVariant2Component.displayName = 'FormCheckboxVariant2Component'; // exports

var _default = FormCheckboxVariant2Component;
exports.default = _default;