'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

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

            flexBasis: 'auto',
            flexGrow: 0,
            flexShrink: 1,

            flexDirection: 'row',
            flexWrap: 'nowrap',

            justifyContent: 'space-between',
            alignItems: 'center',
            alignContent: 'flex-start',

            borderTopLeftRadius: theme.layoutStyles.headerBorderRadius,
            borderTopRightRadius: theme.layoutStyles.headerBorderRadius,

            backgroundColor: theme.layoutStyles.headerBGColor,

            '& > $titleContainer': {
                boxSizing: 'border-box',

                flexBasis: 'auto',
                flexGrow: 0,
                flexShrink: 1,

                padding: '10px 0px 10px 10px',

                overflow: 'hidden',
                textOverflow: 'ellipsis',

                fontFamily: theme.layoutStyles.headerFontStack,
                fontSize: theme.layoutStyles.headerFontSize + 'px',

                color: theme.layoutStyles.headerFontColor
            },

            '& > $titleContainer:first-letter': {
                textTransform: 'capitalize'
            },

            '& > $iconContainer': {
                boxSizing: 'border-box',

                flexBasis: 'auto',
                flexGrow: 0,
                flexShrink: 1,

                paddingRight: '10px',

                fontSize: theme.layoutStyles.headerFontSize + 'px',
                cursor: 'pointer',
                color: theme.layoutStyles.headerFontColor
            }
        },

        titleContainer: {},
        iconContainer: {}
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

var RegularCardHeaderComponent = function (_React$Component) {
    _inherits(RegularCardHeaderComponent, _React$Component);

    function RegularCardHeaderComponent() {
        _classCallCheck(this, RegularCardHeaderComponent);

        return _possibleConstructorReturn(this, (RegularCardHeaderComponent.__proto__ || Object.getPrototypeOf(RegularCardHeaderComponent)).apply(this, arguments));
    }

    _createClass(RegularCardHeaderComponent, [{
        key: '_getIconClasses',


        // endregion

        // region constructor
        // endregion

        // region lifecycle methods
        // endregion

        // region style accessors
        value: function _getIconClasses() {
            return (0, _classnames2.default)(this.props.classes.iconContainer, this.props.iconClassNames);
        }

        // endregion

        // region label accessors
        // endregion

        // region state accessors
        // endregion

        // region prop accessors
        // endregion

        // region handlers
        // endregion

        // region render methods

        // region static props

    }, {
        key: '_renderIconContainer',
        value: function _renderIconContainer() {
            var iconClassNames = this.props.iconClassNames;

            return iconClassNames ? React.createElement('i', { className: this._getIconClasses() }) : null;
        }
    }, {
        key: '_renderTitleContainer',
        value: function _renderTitleContainer() {
            return React.createElement(
                'div',
                { className: this.props.classes.titleContainer },
                this.props.title
            );
        }
    }, {
        key: '_renderComponentContainer',
        value: function _renderComponentContainer() {
            return React.createElement(
                'div',
                { className: this.props.classes.componentContainer },
                this._renderTitleContainer(),
                this._renderIconContainer()
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return this._renderComponentContainer();
        }

        // endregion

    }]);

    return RegularCardHeaderComponent;
}(React.Component);

// exports


RegularCardHeaderComponent.displayName = 'RegularCardHeaderComponent';
exports.default = (0, _reactJss2.default)(styles)(RegularCardHeaderComponent);