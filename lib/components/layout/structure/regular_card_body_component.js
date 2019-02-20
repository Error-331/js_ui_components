'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RegularCardBodyComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ramda = require('ramda');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// styles definition


// local imports

// type definitions
var styles = function styles(theme) {
    return {
        componentContainer: {
            boxSizing: 'border-box',
            display: 'flex',
            position: 'relative',

            flexBasis: 'auto',
            flexGrow: 0,
            flexShrink: 1,

            flexDirection: 'column',
            flexWrap: 'nowrap',

            justifyContent: 'flex-start',
            alignItems: 'stretch',
            alignContent: 'flex-start',

            padding: theme.layoutStyles.topSpacing + 'px \n                      ' + theme.layoutStyles.rightSpacing + 'px \n                      ' + theme.layoutStyles.bottomSpacing + 'px \n                      ' + theme.layoutStyles.leftSpacing + 'px\n            ',

            borderRadius: theme.layoutStyles.headerBorderRadius,

            fontFamily: theme.layoutStyles.bodyFontStack,
            fontSize: theme.layoutStyles.bodyFontSize,

            color: theme.layoutStyles.bodyFontColor
        }
    };
};

/**
 * Regular card body component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation

// $FlowFixMe decorators
var RegularCardBodyComponent = (_dec = (0, _reactJss2.default)(styles), _dec(_class = (_temp = _class2 = function (_React$Component) {
    _inherits(RegularCardBodyComponent, _React$Component);

    function RegularCardBodyComponent() {
        _classCallCheck(this, RegularCardBodyComponent);

        return _possibleConstructorReturn(this, (RegularCardBodyComponent.__proto__ || Object.getPrototypeOf(RegularCardBodyComponent)).apply(this, arguments));
    }

    _createClass(RegularCardBodyComponent, [{
        key: '_getStyle',


        // endregion

        // region constructor
        // endregion

        // region business logic
        // endregion

        // region lifecycle methods
        // endregion

        // region style accessors

        // region static props
        value: function _getStyle() {
            return (0, _ramda.defaultTo)(RegularCardBodyComponent.defaultProps.style)(this.props.style);
        }
    }, {
        key: '_getClassName',
        value: function _getClassName() {
            return (0, _classnames2.default)(this.props.classes.componentContainer, this.props.className);
        }

        // endregion

        // region label accessors
        // endregion

        // region state accessors
        // endregion

        // region prop accessors

    }, {
        key: '_getClickHandler',
        value: function _getClickHandler() {
            return (0, _ramda.defaultTo)(RegularCardBodyComponent.defaultProps.onClick)(this.props.onClick);
        }

        // endregion

        // region handlers
        // endregion

        // region render methods

    }, {
        key: '_renderComponentContainer',
        value: function _renderComponentContainer() {
            var children = this.props.children;


            return React.createElement(
                'div',
                {
                    className: this._getClassName(),
                    style: this._getStyle(),
                    onClick: this._getClickHandler()
                },
                children
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return this._renderComponentContainer();
        }

        // endregion

    }]);

    return RegularCardBodyComponent;
}(React.Component), _class2.displayName = 'RegularCardBodyComponent', _class2.defaultProps = {
    onClick: function onClick() {},

    classes: {},
    style: {}
}, _temp)) || _class);

// exports

exports.RegularCardBodyComponent = RegularCardBodyComponent;