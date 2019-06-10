'use strict'; // external imports

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

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
exports.SnackBarComponent = SnackBarComponent;
exports.SnackBarClass = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _ramda = require("ramda");

var _regular_alert_component = require("./regular_alert_component");

var _main_theme_provider = require("./../../../theming/providers/main_theme_provider");

var _dec, _class, _class2, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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
  return {
    componentContainer: {
      boxSizing: 'border-box',
      display: 'flex',
      position: 'fixed',
      top: '0px',
      left: '0px',
      width: '100%',
      height: 'auto',
      flexDirection: 'column',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      alignItems: 'center',
      alignContent: 'center',
      padding: "".concat(theme.layoutStyles.topSpacing, "px \n                  ").concat(theme.layoutStyles.rightSpacing, "px \n                  ").concat(theme.layoutStyles.bottomSpacing, "px \n                  ").concat(theme.layoutStyles.leftSpacing, "px\n        "),
      transitionProperty: 'height',
      transitionDuration: '0.2s',
      transitionTimingFunction: 'ease-out',
      '& > $itemContainer': {
        flexBasis: 'auto',
        flexGrow: 0,
        flexShrink: 1,
        width: '50%',
        marginTop: "".concat(theme.layoutStyles.sectionVerticalSpacing, "px")
      },
      '& > $itemContainer:first-child': {
        marginTop: '0px'
      }
    },
    itemContainer: {}
  };
};
/**
 * Snack bar component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation
// $FlowFixMe decorators


var SnackBarClass = (_dec = (0, _reactJss.default)(styles), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SnackBarClass, _React$Component);

  // region static props
  // endregion
  // region private props
  // endregion
  // region constructor
  function SnackBarClass(props) {
    var _this;

    _classCallCheck(this, SnackBarClass);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SnackBarClass).call(this, props));
    _this.state = {
      zIndex: _this.props.theme.styleValuesRegister.zIndex
    };
    return _this;
  } // endregion
  // region business logic
  // endregion
  // region lifecycle methods


  _createClass(SnackBarClass, [{
    key: "_getItemClassName",
    // endregion
    // region style accessors
    value: function _getItemClassName() {
      return this.props.classes.itemContainer;
    }
  }, {
    key: "_getComponentContainerClassName",
    value: function _getComponentContainerClassName() {
      return this.props.classes.componentContainer;
    }
  }, {
    key: "_getComponentContainerStyle",
    value: function _getComponentContainerStyle() {
      return {
        zIndex: this._getComponentContainerZIndex()
      };
    } // endregion
    // region label accessors
    // endregion
    // region state accessors

  }, {
    key: "_getComponentContainerZIndex",
    value: function _getComponentContainerZIndex() {
      return (0, _ramda.defaultTo)(SnackBarClass.defaultState.zIndex)(this.state.zIndex);
    } // endregion
    // region prop accessors

  }, {
    key: "_getItems",
    value: function _getItems() {
      return (0, _ramda.defaultTo)(SnackBarClass.defaultProps.items)(this.props.items);
    } // endregion
    // region handlers
    // endregion
    // region render methods

  }, {
    key: "_renderAlerts",
    value: function _renderAlerts() {
      var _this2 = this;

      var items = this._getItems();

      if ((0, _ramda.isNil)(items)) {
        return null;
      }

      return (0, _ramda.map)(function (item) {
        return React.createElement(_regular_alert_component.RegularAlertComponent, {
          accent: item.type === 'error',
          containerClassName: _this2._getItemClassName(),
          iconClassName: item.iconClassName,
          key: item.id
        }, item.caption);
      }, items);
    }
  }, {
    key: "_renderComponentContainer",
    value: function _renderComponentContainer() {
      if ((0, _ramda.isNil)(this._getItems())) {
        return null;
      }

      return React.createElement("div", {
        className: this._getComponentContainerClassName(),
        style: this._getComponentContainerStyle()
      }, this._renderAlerts());
    }
  }, {
    key: "render",
    value: function render() {
      return this._renderComponentContainer();
    } // endregion

  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (!props.theme.styleValuesRegister.isTop(state.zIndex)) {
        props.theme.styleValuesRegister.releaseZIndex(state.zIndex);
        return {
          zIndex: props.theme.styleValuesRegister.zIndex
        };
      }

      return null;
    }
  }]);

  return SnackBarClass;
}(React.Component), _class2.displayName = 'SnackBarClass', _class2.defaultProps = {
  items: null
}, _class2.defaultState = {
  zIndex: 0
}, _temp)) || _class);
exports.SnackBarClass = SnackBarClass;

function SnackBarComponent(props) {
  return React.createElement(_main_theme_provider.MainThemeContext.Consumer, null, function (windowDimensions) {
    return React.createElement(SnackBarClass, _extends({}, props, windowDimensions));
  });
}

SnackBarComponent.displayName = 'SnackBarComponent'; // exports