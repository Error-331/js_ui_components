'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RegularCardComponent = undefined;

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

            flexBasis: 'auto',
            flexGrow: 0,
            flexShrink: 1,

            flexDirection: 'column',
            flexWrap: 'nowrap',

            justifyContent: 'flex-start',
            alignItems: 'stretch',
            alignContent: 'flex-start',

            borderRadius: theme.layoutStyles.headerBorderRadius,
            backgroundColor: theme.layoutStyles.bodyBGColor,

            transition: 'box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',

            '&.height1': {
                boxShadow: theme.materialDepthLevels.materialDepth1BoxShadow
            },

            '&.height2': {
                boxShadow: theme.materialDepthLevels.materialDepth2BoxShadow
            },

            '&.height3': {
                boxShadow: theme.materialDepthLevels.materialDepth3BoxShadow
            },

            '&.height4': {
                boxShadow: theme.materialDepthLevels.materialDepth4BoxShadow
            },

            '&.height5': {
                boxShadow: theme.materialDepthLevels.materialDepth5BoxShadow
            },

            '&.poppable2:hover': {
                boxShadow: theme.materialDepthLevels.materialDepth2BoxShadow
            },

            '&.poppable3:hover': {
                boxShadow: theme.materialDepthLevels.materialDepth3BoxShadow
            },

            '&.poppable4:hover': {
                boxShadow: theme.materialDepthLevels.materialDepth4BoxShadow
            },

            '&.poppable5:hover': {
                boxShadow: theme.materialDepthLevels.materialDepth5BoxShadow
            },

            '& > $componentHeader': {
                boxSizing: 'border-box',

                flexBasis: 'auto',
                flexGrow: 0,
                flexShrink: 1
            },

            '& > $componentBody': {
                boxSizing: 'border-box',
                display: 'flex',

                flexBasis: 'auto',
                flexGrow: 0,
                flexShrink: 1,

                flexDirection: 'column',
                flexWrap: 'nowrap',

                justifyContent: 'flex-start',
                alignItems: 'stretch',
                alignContent: 'flex-start',

                padding: theme.layoutStyles.topSpacing + 'px \n                      ' + theme.layoutStyles.rightSpacing + 'px \n                      ' + theme.layoutStyles.bottomSpacing + 'px \n                      ' + theme.layoutStyles.bottomSpacing + 'px\n            ',

                borderRadius: theme.layoutStyles.headerBorderRadius,

                fontFamily: theme.layoutStyles.bodyFontStack,
                fontSize: theme.layoutStyles.bodyFontSize,

                color: theme.layoutStyles.bodyFontColor
            }
        },

        componentHeader: {},
        componentBody: {}
    };
};

/**
 * Regular card component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation

// $FlowFixMe decorators
var RegularCardComponent = exports.RegularCardComponent = (_dec = (0, _reactJss2.default)(styles), _dec(_class = (_temp = _class2 = function (_React$Component) {
    _inherits(RegularCardComponent, _React$Component);

    function RegularCardComponent() {
        _classCallCheck(this, RegularCardComponent);

        return _possibleConstructorReturn(this, (RegularCardComponent.__proto__ || Object.getPrototypeOf(RegularCardComponent)).apply(this, arguments));
    }

    _createClass(RegularCardComponent, [{
        key: '_getHeightLevel',


        // endregion

        // region constructor
        // endregion

        // region business logic

        // region static props
        value: function _getHeightLevel(heightLevel) {
            heightLevel = (0, _ramda.unless)((0, _ramda.gt)(5), (0, _ramda.always)(5))(heightLevel);
            heightLevel = (0, _ramda.unless)((0, _ramda.lt)(1), (0, _ramda.always)(1))(heightLevel);

            return heightLevel;
        }

        // endregion

        // region lifecycle methods
        // endregion

        // region style accessors

    }, {
        key: '_getOuterContainerStyles',
        value: function _getOuterContainerStyles() {
            return Object.assign({}, this.props.containerStyles);
        }
    }, {
        key: '_getOuterContainerClasses',
        value: function _getOuterContainerClasses() {
            var _classNames;

            var heightClassName = 'height' + this._getCardHeightLevel();
            var poppableClassName = 'poppable' + this._getCardPopHeightLevel();

            var containerClassName = (0, _classnames2.default)(this.props.classes.componentContainer, (_classNames = {}, _defineProperty(_classNames, heightClassName, true), _defineProperty(_classNames, poppableClassName, this._getPopOnHover()), _classNames), this.props.containerClassName);

            return containerClassName;
        }
    }, {
        key: '_getBodyClasses',
        value: function _getBodyClasses() {
            return (0, _classnames2.default)(this.props.classes.componentBody, this.props.bodyClassName);
        }

        // endregion

        // region label accessors
        // endregion

        // region state accessors
        // endregion

        // region prop accessors

    }, {
        key: '_getCardPopHeightLevel',
        value: function _getCardPopHeightLevel() {
            var _props$maxPopLevel = this.props.maxPopLevel,
                maxPopLevel = _props$maxPopLevel === undefined ? 5 : _props$maxPopLevel;

            return this._getHeightLevel(maxPopLevel);
        }
    }, {
        key: '_getCardHeightLevel',
        value: function _getCardHeightLevel() {
            var _props$heightLevel = this.props.heightLevel,
                heightLevel = _props$heightLevel === undefined ? 1 : _props$heightLevel;

            return this._getHeightLevel(heightLevel);
        }
    }, {
        key: '_getPopOnHover',
        value: function _getPopOnHover() {
            var _props$popOnHover = this.props.popOnHover,
                popOnHover = _props$popOnHover === undefined ? false : _props$popOnHover;

            return popOnHover;
        }

        // endregion

        // region handlers
        // endregion

        // region render methods

    }, {
        key: '_renderHeader',
        value: function _renderHeader() {
            var _this2 = this;

            return (0, _ramda.ifElse)((0, _ramda.complement)(_ramda.isEmpty), function (header) {
                return React.createElement(
                    'div',
                    { className: _this2.props.classes.componentHeader },
                    header
                );
            }, (0, _ramda.always)(null))(this.props.header);
        }
    }, {
        key: '_renderBody',
        value: function _renderBody() {
            return React.createElement(
                'div',
                {
                    className: this._getBodyClasses(),
                    style: this.props.bodyStyles
                },
                this.props.children
            );
        }
    }, {
        key: '_renderOuterContainer',
        value: function _renderOuterContainer() {
            return React.createElement(
                'div',
                {
                    className: this._getOuterContainerClasses(),
                    style: this._getOuterContainerStyles()
                },
                this._renderHeader(),
                this._renderBody()
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return this._renderOuterContainer();
        }

        // endregion

    }]);

    return RegularCardComponent;
}(React.Component), _class2.displayName = 'RegularCardComponent', _class2.defaultProps = {
    containerClassName: '',

    theme: {},
    classes: {}
}, _temp)) || _class);

// exports