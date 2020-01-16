'use strict'; // external imports

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DialogBoxActionsContainer = DialogBoxActionsContainer;
exports.default = exports.DialogBoxActionsContainerClass = exports.LEFT_TO_RIGHT_DIRECTION = exports.RIGHT_TO_LEFT_DIRECTION = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ramda = require("ramda");

var _main_theme_provider = require("./../../../../theming/providers/main_theme_provider");

var _dec, _class, _class2, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  return {
    componentContainer: {
      boxSizing: 'border-box',
      display: 'flex',
      flexBasis: 'auto',
      flexGrow: 0,
      flexShrink: 1,
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      alignContent: 'flex-start',
      '& > $buttonsContainer': {
        boxSizing: 'border-box',
        flexBasis: '50%',
        flexGrow: 0,
        flexShrink: 0,
        gridArea: 'buttons',
        display: 'grid',
        gridTemplateColumns: "repeat(auto-fill, minmax(max-content, ".concat(theme.buttonStyles.regularButtonMinimumWidth, "px))"),
        gridAutoRows: 'max-content',
        gridColumnGap: "".concat(theme.layoutStyles.sectionHorizontalSpacing, "px"),
        '&.fullWidth': {
          flexBasis: '100%'
        },
        '& > *': {
          direction: LEFT_TO_RIGHT_DIRECTION
        }
      }
    },
    buttonsContainer: {}
  };
}; // constants definition


var RIGHT_TO_LEFT_DIRECTION = 'rtl';
exports.RIGHT_TO_LEFT_DIRECTION = RIGHT_TO_LEFT_DIRECTION;
var LEFT_TO_RIGHT_DIRECTION = 'ltr';
/**
 * Dialog box actions container.
 * Helps to layout buttons (actions) on the bottom of the regular dialog box.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation
// $FlowFixMe decorators

exports.LEFT_TO_RIGHT_DIRECTION = LEFT_TO_RIGHT_DIRECTION;
var DialogBoxActionsContainerClass = (_dec = (0, _reactJss.default)(styles), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DialogBoxActionsContainerClass, _React$Component);

  function DialogBoxActionsContainerClass() {
    _classCallCheck(this, DialogBoxActionsContainerClass);

    return _possibleConstructorReturn(this, _getPrototypeOf(DialogBoxActionsContainerClass).apply(this, arguments));
  }

  _createClass(DialogBoxActionsContainerClass, [{
    key: "_getComponentContainerStyle",
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
    value: function _getComponentContainerStyle() {
      return (0, _ramda.defaultTo)({})(this.props.containerStyle);
    }
  }, {
    key: "_getComponentContainerClassName",
    value: function _getComponentContainerClassName() {
      return (0, _classnames.default)(this.props.classes.componentContainer, this.props.containerClassName);
    }
  }, {
    key: "_getRightContainerClassName",
    value: function _getRightContainerClassName() {
      return this.props.classes.buttonsContainer;
    }
  }, {
    key: "_getLeftContainerClassName",
    value: function _getLeftContainerClassName() {
      return (0, _classnames.default)(this.props.classes.buttonsContainer, {
        'fullWidth': this._getMainGroupCount() === 0
      });
    } // endregion
    // region label accessors
    // endregion
    // region state accessors
    // endregion
    // region prop accessors

  }, {
    key: "_getMainGroupCount",
    value: function _getMainGroupCount() {
      return (0, _ramda.defaultTo)(DialogBoxActionsContainerClass.defaultProps.mainGroupCount)(this.props.mainGroupCount);
    }
  }, {
    key: "_getDirection",
    value: function _getDirection() {
      return (0, _ramda.defaultTo)(DialogBoxActionsContainerClass.defaultProps.direction)(this.props.direction);
    } // endregion
    // region handlers
    // endregion
    // region render methods

  }, {
    key: "_renderRightGroup",
    value: function _renderRightGroup(children, style) {
      if (this._getMainGroupCount() === 0) {
        return null;
      }

      return React.createElement("div", {
        className: this._getRightContainerClassName(),
        style: style
      }, children);
    }
  }, {
    key: "_renderLeftGroup",
    value: function _renderLeftGroup(children, style) {
      return React.createElement("div", {
        className: this._getLeftContainerClassName(),
        style: style
      }, children);
    }
  }, {
    key: "_renderComponentContainer",
    value: function _renderComponentContainer() {
      var children = React.Children.toArray(this.props.children);
      var childrenCount = (0, _ramda.length)(children);

      var mainGroupCount = this._getMainGroupCount();

      var leftChildrenCount = mainGroupCount > 0 ? mainGroupCount : childrenCount;
      var leftChildrenStartIndex = 0;
      var leftChildrenEndIndex = leftChildrenCount;
      var rightChildrenStartIndex = leftChildrenCount;
      var rightChildrenEndIndex = childrenCount;
      var leftChildren = (0, _ramda.slice)(leftChildrenStartIndex, leftChildrenEndIndex, children);
      var rightChildren = (0, _ramda.slice)(rightChildrenStartIndex, rightChildrenEndIndex, children);

      var direction = this._getDirection();

      leftChildren = direction !== RIGHT_TO_LEFT_DIRECTION ? (0, _ramda.reverse)(leftChildren) : leftChildren;
      rightChildren = direction !== RIGHT_TO_LEFT_DIRECTION ? (0, _ramda.reverse)(rightChildren) : rightChildren;
      var groupContainerStyle = Object.assign({
        direction: direction
      }, this._getComponentContainerStyle());
      var leftGroupDirection = direction !== RIGHT_TO_LEFT_DIRECTION ? 'ltr' : 'rtl';
      var rightGroupDirection = direction !== RIGHT_TO_LEFT_DIRECTION ? 'rtl' : 'ltr';
      return React.createElement("div", {
        className: this._getComponentContainerClassName(),
        style: groupContainerStyle
      }, this._renderLeftGroup(leftChildren, {
        direction: leftGroupDirection
      }), this._renderRightGroup(rightChildren, {
        direction: rightGroupDirection
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return this._renderComponentContainer();
    } // endregion

  }]);

  return DialogBoxActionsContainerClass;
}(React.Component), _class2.displayName = 'DialogBoxActionsContainerClass', _class2.defaultProps = {
  direction: RIGHT_TO_LEFT_DIRECTION,
  mainGroupCount: 0,
  containerClassName: ''
}, _temp)) || _class);
exports.DialogBoxActionsContainerClass = DialogBoxActionsContainerClass;

function DialogBoxActionsContainer(props) {
  return React.createElement(_main_theme_provider.MainThemeContext.Consumer, null, function (windowDimensions) {
    return React.createElement(DialogBoxActionsContainerClass, _extends({}, props, windowDimensions));
  });
}

DialogBoxActionsContainer.displayName = 'DialogBoxActionsContainer'; // exports

var _default = DialogBoxActionsContainer;
exports.default = _default;