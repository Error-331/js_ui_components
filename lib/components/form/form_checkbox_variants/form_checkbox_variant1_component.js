'use strict'; // external imports

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormCheckboxVariant1Component = FormCheckboxVariant1Component;
exports.default = exports.FormCheckboxVariant1Class = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireWildcard(require("react-jss"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ramda = require("ramda");

var _main_theme_provider = require("./../../../theming/providers/main_theme_provider");

var _dec, _class, _class2, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
var styles = function styles(theme) {
  return {
    'componentContainer': {
      position: 'relative',
      boxSizing: 'border-box',
      display: 'flex',
      width: "".concat(theme.inputStyles.checkboxControlLabelWidth, "px"),
      height: "".concat(theme.inputStyles.checkboxControlLabelHeight, "px"),
      '& > $checkMarkBackgroundContainer': {
        position: 'absolute',
        boxSizing: 'border-box',
        width: '100%',
        height: '100%',
        border: "".concat(theme.inputStyles.checkMarkLineWidth, "px solid ").concat(theme.inputStyles.switchSliderInactiveBodyBGColor),
        borderRadius: '2px',
        transition: 'borderColor 0.3s, background 0.3s'
      },
      '& > $checkMarkContainer': {
        position: 'absolute',
        boxSizing: 'border-box',
        visibility: 'hidden',
        top: "".concat(theme.inputStyles.checkMarkTopOffsetPercentage, "%"),
        left: "".concat(theme.inputStyles.checkMarkLeftOffsetPercentage, "%"),
        width: "".concat(theme.inputStyles.checkMarkWidthPercentage, "%"),
        height: "".concat(theme.inputStyles.checkMarkHeightPercentage, "%"),
        border: "".concat(theme.inputStyles.checkMarkLineWidth, "px solid ").concat(theme.inputStyles.switchSliderHandleActive),
        borderTopStyle: 'none',
        borderRightStyle: 'none',
        transform: 'rotate(-45deg)'
      }
    },
    checkMarkBackgroundContainer: {},
    checkMarkContainer: {}
  };
};
/**
 * Checkbox (variant 1) component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation
// $FlowFixMe decorators


var FormCheckboxVariant1Class = (_dec = (0, _reactJss.default)(styles, {
  injectTheme: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FormCheckboxVariant1Class, _React$Component);

  // region static props
  // endregion
  // region constructor
  function FormCheckboxVariant1Class(props) {
    var _this;

    _classCallCheck(this, FormCheckboxVariant1Class);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormCheckboxVariant1Class).call(this, props));

    _this.attachSheet();

    return _this;
  } // endregion
  // region business logic


  _createClass(FormCheckboxVariant1Class, [{
    key: "attachSheet",
    value: function attachSheet() {
      var _newGlobalStyles;

      var _this$props = this.props,
          classes = _this$props.classes,
          theme = _this$props.theme;
      var componentContainer = classes.componentContainer,
          checkMarkBackgroundContainer = classes.checkMarkBackgroundContainer,
          checkMarkContainer = classes.checkMarkContainer;
      var styleSheetRegister = theme.styleSheetRegister;
      var checkMarkBackgroundContainerStylesName = "input:checked + .".concat(componentContainer, " > .").concat(checkMarkBackgroundContainer);
      var checkMarkContainerStylesName = "input:checked + .".concat(componentContainer, " > .").concat(checkMarkContainer);
      var checkMarkBackgroundContainerDisabledStylesName = "input:checked + .".concat(componentContainer, " > .").concat(checkMarkBackgroundContainer, ".disabled");
      var newGlobalStyles = (_newGlobalStyles = {}, _defineProperty(_newGlobalStyles, checkMarkBackgroundContainerStylesName, this._getCheckedCheckMarkBackgroundContainerStyles()), _defineProperty(_newGlobalStyles, checkMarkContainerStylesName, this._getCheckedCheckMarkContainerStyles()), _defineProperty(_newGlobalStyles, checkMarkBackgroundContainerDisabledStylesName, this._getCheckedCheckMarkBackgroundContainerDisabledStyles()), _newGlobalStyles);
      var styleSheetName = this.props.styleSheetName;
      styleSheetName = (0, _ramda.defaultTo)(FormCheckboxVariant1Class.displayName)(styleSheetName);
      styleSheetRegister.addGlobalStyles(newGlobalStyles, styleSheetName);
    } // endregion
    // region lifecycle methods
    // endregion
    // region style accessors

  }, {
    key: "_getCheckedCheckMarkBackgroundContainerDisabledStyle",
    value: function _getCheckedCheckMarkBackgroundContainerDisabledStyle() {
      return (0, _ramda.defaultTo)(FormCheckboxVariant1Class.defaultProps.checkedCheckMarkBackgroundContainerDisabledStyle)(this.props.checkedCheckMarkBackgroundContainerDisabledStyle);
    }
  }, {
    key: "_getCheckedCheckMarkBackgroundContainerStyle",
    value: function _getCheckedCheckMarkBackgroundContainerStyle() {
      return (0, _ramda.defaultTo)(FormCheckboxVariant1Class.defaultProps.checkedCheckMarkBackgroundContainerStyle)(this.props.checkedCheckMarkBackgroundContainerStyle);
    }
  }, {
    key: "_getCheckMarkContainerStyle",
    value: function _getCheckMarkContainerStyle() {
      return (0, _ramda.defaultTo)(FormCheckboxVariant1Class.defaultProps.checkMarkContainerStyle)(this.props.checkMarkContainerStyle);
    }
  }, {
    key: "_getCheckMarkBackgroundContainerStyle",
    value: function _getCheckMarkBackgroundContainerStyle() {
      return (0, _ramda.defaultTo)(FormCheckboxVariant1Class.defaultProps.checkMarkBackgroundContainerStyle)(this.props.checkMarkBackgroundContainerStyle);
    }
  }, {
    key: "_getCheckedCheckMarkBackgroundContainerStyles",
    value: function _getCheckedCheckMarkBackgroundContainerStyles() {
      var theme = this.props.theme;
      return Object.assign({}, {
        borderColor: theme.inputStyles.switchSliderActiveBodyBGColor,
        backgroundColor: theme.inputStyles.switchSliderActiveBodyBGColor
      }, this._getCheckedCheckMarkBackgroundContainerStyle());
    }
  }, {
    key: "_getCheckedCheckMarkContainerStyles",
    value: function _getCheckedCheckMarkContainerStyles() {
      return {
        visibility: 'visible'
      };
    }
  }, {
    key: "_getCheckedCheckMarkBackgroundContainerDisabledStyles",
    value: function _getCheckedCheckMarkBackgroundContainerDisabledStyles() {
      var theme = this.props.theme;
      return Object.assign({}, {
        borderColor: theme.inputStyles.disabledColor,
        backgroundColor: theme.inputStyles.disabledColor
      }, this._getCheckedCheckMarkBackgroundContainerDisabledStyle());
    }
  }, {
    key: "_getCheckMarkBackgroundContainerClasses",
    value: function _getCheckMarkBackgroundContainerClasses() {
      var disabled = this.props.disabled;
      return (0, _classnames.default)(this.props.classes.checkMarkBackgroundContainer, {
        'disabled': disabled
      });
    }
  }, {
    key: "_getCheckMarkContainerClasses",
    value: function _getCheckMarkContainerClasses() {
      var disabled = this.props.disabled;
      return (0, _classnames.default)(this.props.classes.checkMarkContainer, {
        'disabled': disabled
      });
    } // endregion
    // region label accessors
    // endregion
    // region state accessors
    // endregion
    // region prop accessors
    // endregion
    // region handlers
    // endregion
    // region render methods

  }, {
    key: "_renderCheckMarkContainer",
    value: function _renderCheckMarkContainer() {
      return React.createElement("div", {
        className: this._getCheckMarkContainerClasses(),
        style: this._getCheckMarkContainerStyle()
      });
    }
  }, {
    key: "_renderCheckMarkBackgroundContainer",
    value: function _renderCheckMarkBackgroundContainer() {
      return React.createElement("div", {
        className: this._getCheckMarkBackgroundContainerClasses(),
        style: this._getCheckMarkBackgroundContainerStyle()
      });
    }
  }, {
    key: "_renderComponentContainer",
    value: function _renderComponentContainer() {
      return React.createElement("label", {
        htmlFor: this.props.htmlFor,
        className: this.props.classes.componentContainer
      }, this._renderCheckMarkBackgroundContainer(), this._renderCheckMarkContainer());
    }
  }, {
    key: "render",
    value: function render() {
      return this._renderComponentContainer();
    } // endregion

  }]);

  return FormCheckboxVariant1Class;
}(React.Component), _class2.displayName = 'FormCheckboxVariant1Class', _class2.defaultProps = {
  disabled: false,
  classes: {},
  checkMarkBackgroundContainerStyle: {},
  checkMarkContainerStyle: {},
  checkedCheckMarkBackgroundContainerStyle: {},
  checkedCheckMarkBackgroundContainerDisabledStyle: {}
}, _temp)) || _class);
exports.FormCheckboxVariant1Class = FormCheckboxVariant1Class;

function FormCheckboxVariant1Component(props) {
  return React.createElement(_main_theme_provider.MainThemeContext.Consumer, null, function (windowDimensions) {
    return React.createElement(FormCheckboxVariant1Class, _extends({}, props, windowDimensions));
  });
}

FormCheckboxVariant1Component.displayName = 'FormCheckboxVariant1Component'; // exports

var _default = FormCheckboxVariant1Component;
exports.default = _default;