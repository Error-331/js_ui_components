'use strict'; // external imports

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.function.name");

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
exports.ReduxFormGeneratorComponent = ReduxFormGeneratorComponent;
exports.default = exports.ReduxFormGeneratorClass = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _design_components = require("@webfuturistics/design_components");

var _ramda = require("ramda");

var _main_theme_provider = require("./../../theming/providers/main_theme_provider");

var _grid_generator_component = require("./../grid/grid_generator_component");

var _redux_form_text_input_component = require("./redux_form_text_input_component");

var _redux_form_checkbox_input_component = require("./redux_form_checkbox_input_component");

var _redux_form_drop_down_input_component = require("./redux_form_drop_down_input_component");

var _redux_form_date_input_component = require("./redux_form_date_input_component");

var _dec, _class, _class2, _temp;

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
var styles = function styles(theme) {
  return {};
};
/**
 * Form generator.
 * Component accepts form specification and returns a container with nested Redux-form elements aligned using CSS Grid.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation
// $FlowFixMe decorators


var ReduxFormGeneratorClass = (_dec = (0, _reactJss.default)(styles), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ReduxFormGeneratorClass, _React$Component);

  function ReduxFormGeneratorClass() {
    _classCallCheck(this, ReduxFormGeneratorClass);

    return _possibleConstructorReturn(this, _getPrototypeOf(ReduxFormGeneratorClass).apply(this, arguments));
  }

  _createClass(ReduxFormGeneratorClass, [{
    key: "_prepareProps",
    // region static props
    // endregion
    // region private props
    // endregion
    // region constructor
    // endregion
    // region business logic
    value: function _prepareProps(props) {
      var preparedProps = props;
      return preparedProps;
    } // endregion
    // region lifecycle methods
    // endregion
    // region style accessors

  }, {
    key: "_getComponentClassName",
    value: function _getComponentClassName() {
      return (0, _ramda.defaultTo)('')(this.props.className);
    }
  }, {
    key: "_getComponentStyle",
    value: function _getComponentStyle() {
      return (0, _ramda.defaultTo)({})(this.props.style);
    } // endregion
    // region label accessors
    // endregion
    // region state accessors
    // endregion
    // region prop accessors

  }, {
    key: "_getRightmostColSize",
    value: function _getRightmostColSize() {
      return (0, _ramda.defaultTo)(ReduxFormGeneratorClass.defaultProps.rightmostColSize)(this.props.rightmostColSize);
    }
  }, {
    key: "_getLeftmostColSize",
    value: function _getLeftmostColSize() {
      return (0, _ramda.defaultTo)(ReduxFormGeneratorClass.defaultProps.leftmostColSize)(this.props.leftmostColSize);
    }
  }, {
    key: "_getItems",
    value: function _getItems() {
      return (0, _ramda.defaultTo)(ReduxFormGeneratorClass.defaultProps.items)(this.props.items);
    } // endregion
    // region handlers
    // endregion
    // region render methods

  }, {
    key: "_prepareDateInputItem",
    value: function _prepareDateInputItem(item) {
      var name = item.name,
          hspan = item.hspan,
          vspan = item.vspan,
          props = item.props;

      var newProps = this._prepareProps(props);

      newProps = (0, _ramda.defaultTo)({
        name: name
      })(newProps);
      var _newProps = newProps,
          label = _newProps.label,
          placeholder = _newProps.placeholder;
      placeholder = (0, _ramda.isNil)(placeholder) && !(0, _ramda.isNil)(label) ? "".concat(label, "...") : placeholder;
      return {
        elm: _redux_form_date_input_component.ReduxFormDateInputComponent,
        name: name,
        hspan: hspan,
        vspan: vspan,
        props: _objectSpread({
          name: name
        }, props, {
          placeholder: placeholder
        })
      };
    }
  }, {
    key: "_prepareDropDownInputItem",
    value: function _prepareDropDownInputItem(item) {
      var name = item.name,
          hspan = item.hspan,
          vspan = item.vspan,
          props = item.props;

      var newProps = this._prepareProps(props);

      newProps = (0, _ramda.defaultTo)({
        name: name,
        options: {}
      })(newProps);
      var _newProps2 = newProps,
          label = _newProps2.label,
          placeholder = _newProps2.placeholder;
      placeholder = (0, _ramda.isNil)(placeholder) && !(0, _ramda.isNil)(label) ? "".concat(label, "...") : placeholder;
      return {
        elm: _redux_form_drop_down_input_component.ReduxFormDropDownInputComponent,
        name: name,
        hspan: hspan,
        vspan: vspan,
        props: _objectSpread({
          name: name
        }, newProps, {
          placeholder: placeholder
        })
      };
    }
  }, {
    key: "_prepareCheckboxInputItem",
    value: function _prepareCheckboxInputItem(item) {
      var name = item.name,
          hspan = item.hspan,
          vspan = item.vspan,
          props = item.props;

      var newProps = this._prepareProps(props);

      newProps = (0, _ramda.defaultTo)({
        name: name
      })(newProps);
      return {
        elm: _redux_form_checkbox_input_component.ReduxFormCheckboxInputComponent,
        name: name,
        hspan: hspan,
        vspan: vspan,
        props: _objectSpread({
          name: name
        }, newProps)
      };
    }
  }, {
    key: "_prepareTextInputItem",
    value: function _prepareTextInputItem(item) {
      var name = item.name,
          hspan = item.hspan,
          vspan = item.vspan,
          props = item.props;

      var newProps = this._prepareProps(props);

      newProps = (0, _ramda.defaultTo)({
        name: name
      })(newProps);
      var _newProps3 = newProps,
          label = _newProps3.label,
          placeholder = _newProps3.placeholder;
      placeholder = (0, _ramda.isNil)(placeholder) && !(0, _ramda.isNil)(label) ? "".concat(label, "...") : placeholder;
      return {
        elm: _redux_form_text_input_component.ReduxFormTextInputComponent,
        name: name,
        hspan: hspan,
        vspan: vspan,
        props: _objectSpread({
          name: name
        }, newProps, {
          placeholder: placeholder
        })
      };
    }
  }, {
    key: "_prepareItem",
    value: function _prepareItem(item) {
      var elm = item.elm,
          type = item.type;

      if ((0, _design_components.isNotNil)(elm)) {
        return item;
      }

      switch (type) {
        case 'text':
          return this._prepareTextInputItem(item);

        case 'checkbox':
          return this._prepareCheckboxInputItem(item);

        case 'dropdown':
          return this._prepareDropDownInputItem(item);

        case 'date':
          return this._prepareDateInputItem(item);

        default:
          return null;
      }
    }
  }, {
    key: "_prepareItems",
    value: function _prepareItems() {
      var _this = this;

      var items = this._getItems();

      return (0, _ramda.unless)(_ramda.isNil, (0, _ramda.map)(function (rows) {
        return (0, _ramda.map)((0, _ramda.bind)(_this._prepareItem, _this), rows);
      }))(items);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(_grid_generator_component.GridGeneratorComponent, {
        items: this._prepareItems(),
        className: this._getComponentClassName(),
        style: this._getComponentStyle(),
        leftmostColSize: this._getLeftmostColSize(),
        rightmostColSize: this._getRightmostColSize()
      });
    } // endregion

  }]);

  return ReduxFormGeneratorClass;
}(React.Component), _class2.displayName = 'ReduxFormGeneratorClass', _class2.defaultProps = {
  items: null,
  leftmostColSize: '1fr',
  rightmostColSize: '1fr'
}, _temp)) || _class);
exports.ReduxFormGeneratorClass = ReduxFormGeneratorClass;

function ReduxFormGeneratorComponent(props) {
  return React.createElement(_main_theme_provider.MainThemeContext.Consumer, null, function (windowDimensions) {
    return React.createElement(ReduxFormGeneratorClass, _extends({}, props, windowDimensions));
  });
}

ReduxFormGeneratorComponent.displayName = 'ReduxFormGeneratorComponent'; // exports

var _default = ReduxFormGeneratorComponent;
exports.default = _default;