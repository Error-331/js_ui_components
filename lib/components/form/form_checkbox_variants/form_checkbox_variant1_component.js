'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FormCheckboxVariant1Component = exports.FormCheckboxVariant1ComponentClass = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

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
        'componentContainer': {
            position: 'relative',
            boxSizing: 'border-box',
            display: 'flex',

            width: theme.inputStyles.checkboxControlLabelWidth + 'px',
            height: theme.inputStyles.checkboxControlLabelHeight + 'px',

            '& > $checkMarkBackgroundContainer': {
                position: 'absolute',
                boxSizing: 'border-box',

                width: '100%',
                height: '100%',

                border: theme.inputStyles.checkMarkLineWidth + 'px solid ' + theme.inputStyles.switchSliderInactiveBodyBGColor,
                borderRadius: '2px',

                transition: 'borderColor 0.3s, background 0.3s'
            },

            '& > $checkMarkContainer': {
                position: 'absolute',
                boxSizing: 'border-box',
                visibility: 'hidden',

                top: theme.inputStyles.checkMarkTopOffsetPercentage + '%',
                left: theme.inputStyles.checkMarkLeftOffsetPercentage + '%',

                width: theme.inputStyles.checkMarkWidthPercentage + '%',
                height: theme.inputStyles.checkMarkHeightPercentage + '%',

                border: theme.inputStyles.checkMarkLineWidth + 'px solid ' + theme.inputStyles.switchSliderHandleActive,
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
var FormCheckboxVariant1ComponentClass = exports.FormCheckboxVariant1ComponentClass = (_temp = _class = function (_React$Component) {
    _inherits(FormCheckboxVariant1ComponentClass, _React$Component);

    // endregion

    // region constructor

    // region static props
    function FormCheckboxVariant1ComponentClass(props) {
        _classCallCheck(this, FormCheckboxVariant1ComponentClass);

        var _this = _possibleConstructorReturn(this, (FormCheckboxVariant1ComponentClass.__proto__ || Object.getPrototypeOf(FormCheckboxVariant1ComponentClass)).call(this, props));

        _this.attachSheet();
        return _this;
    }

    // endregion

    // region business logic


    _createClass(FormCheckboxVariant1ComponentClass, [{
        key: 'attachSheet',
        value: function attachSheet() {
            var _newGlobalStyles;

            var _props = this.props,
                classes = _props.classes,
                theme = _props.theme;
            var componentContainer = classes.componentContainer,
                checkMarkBackgroundContainer = classes.checkMarkBackgroundContainer,
                checkMarkContainer = classes.checkMarkContainer;
            var styleSheetRegister = theme.styleSheetRegister;


            var checkMarkBackgroundContainerStylesName = 'input:checked + .' + componentContainer + ' > .' + checkMarkBackgroundContainer;
            var checkMarkContainerStylesName = 'input:checked + .' + componentContainer + ' > .' + checkMarkContainer;
            var checkMarkBackgroundContainerDisabledStylesName = 'input:checked + .' + componentContainer + ' > .' + checkMarkBackgroundContainer + '.disabled';

            var newGlobalStyles = (_newGlobalStyles = {}, _defineProperty(_newGlobalStyles, checkMarkBackgroundContainerStylesName, this._getCheckedCheckMarkBackgroundContainerStyles()), _defineProperty(_newGlobalStyles, checkMarkContainerStylesName, this._getCheckedCheckMarkContainerStyles()), _defineProperty(_newGlobalStyles, checkMarkBackgroundContainerDisabledStylesName, this._getCheckedCheckMarkBackgroundContainerDisabledStyles()), _newGlobalStyles);

            var styleSheetName = this.props.styleSheetName;

            styleSheetName = (0, _ramda.defaultTo)(FormCheckboxVariant1ComponentClass.displayName)(styleSheetName);

            styleSheetRegister.addGlobalStyles(newGlobalStyles, styleSheetName);
        }

        // endregion

        // region lifecycle methods
        // endregion

        // region style accessors

    }, {
        key: '_getCheckedCheckMarkBackgroundContainerDisabledStyle',
        value: function _getCheckedCheckMarkBackgroundContainerDisabledStyle() {
            return (0, _ramda.defaultTo)(FormCheckboxVariant1ComponentClass.defaultProps.checkedCheckMarkBackgroundContainerDisabledStyle)(this.props.checkedCheckMarkBackgroundContainerDisabledStyle);
        }
    }, {
        key: '_getCheckedCheckMarkBackgroundContainerStyle',
        value: function _getCheckedCheckMarkBackgroundContainerStyle() {
            return (0, _ramda.defaultTo)(FormCheckboxVariant1ComponentClass.defaultProps.checkedCheckMarkBackgroundContainerStyle)(this.props.checkedCheckMarkBackgroundContainerStyle);
        }
    }, {
        key: '_getCheckMarkContainerStyle',
        value: function _getCheckMarkContainerStyle() {
            return (0, _ramda.defaultTo)(FormCheckboxVariant1ComponentClass.defaultProps.checkMarkContainerStyle)(this.props.checkMarkContainerStyle);
        }
    }, {
        key: '_getCheckMarkBackgroundContainerStyle',
        value: function _getCheckMarkBackgroundContainerStyle() {
            return (0, _ramda.defaultTo)(FormCheckboxVariant1ComponentClass.defaultProps.checkMarkBackgroundContainerStyle)(this.props.checkMarkBackgroundContainerStyle);
        }
    }, {
        key: '_getCheckedCheckMarkBackgroundContainerStyles',
        value: function _getCheckedCheckMarkBackgroundContainerStyles() {
            var theme = this.props.theme;


            return Object.assign({}, {
                borderColor: theme.inputStyles.switchSliderActiveBodyBGColor,
                backgroundColor: theme.inputStyles.switchSliderActiveBodyBGColor
            }, this._getCheckedCheckMarkBackgroundContainerStyle());
        }
    }, {
        key: '_getCheckedCheckMarkContainerStyles',
        value: function _getCheckedCheckMarkContainerStyles() {
            return {
                visibility: 'visible'
            };
        }
    }, {
        key: '_getCheckedCheckMarkBackgroundContainerDisabledStyles',
        value: function _getCheckedCheckMarkBackgroundContainerDisabledStyles() {
            var theme = this.props.theme;


            return Object.assign({}, {
                borderColor: theme.inputStyles.disabledColor,
                backgroundColor: theme.inputStyles.disabledColor
            }, this._getCheckedCheckMarkBackgroundContainerDisabledStyle());
        }
    }, {
        key: '_getCheckMarkBackgroundContainerClasses',
        value: function _getCheckMarkBackgroundContainerClasses() {
            var disabled = this.props.disabled;


            return (0, _classnames2.default)(this.props.classes.checkMarkBackgroundContainer, { 'disabled': disabled });
        }
    }, {
        key: '_getCheckMarkContainerClasses',
        value: function _getCheckMarkContainerClasses() {
            var disabled = this.props.disabled;


            return (0, _classnames2.default)(this.props.classes.checkMarkContainer, { 'disabled': disabled });
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

    }, {
        key: '_renderCheckMarkContainer',
        value: function _renderCheckMarkContainer() {
            return React.createElement('div', {
                className: this._getCheckMarkContainerClasses(),
                style: this._getCheckMarkContainerStyle()
            });
        }
    }, {
        key: '_renderCheckMarkBackgroundContainer',
        value: function _renderCheckMarkBackgroundContainer() {
            return React.createElement('div', { className: this._getCheckMarkBackgroundContainerClasses(),
                style: this._getCheckMarkBackgroundContainerStyle() });
        }
    }, {
        key: '_renderComponentContainer',
        value: function _renderComponentContainer() {
            return React.createElement(
                'label',
                { htmlFor: this.props.htmlFor, className: this.props.classes.componentContainer },
                this._renderCheckMarkBackgroundContainer(),
                this._renderCheckMarkContainer()
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return this._renderComponentContainer();
        }

        // endregion

    }]);

    return FormCheckboxVariant1ComponentClass;
}(React.Component), _class.displayName = 'FormCheckboxVariant1Component', _class.defaultProps = {
    disabled: false,
    classes: {},

    checkMarkBackgroundContainerStyle: {},
    checkMarkContainerStyle: {},
    checkedCheckMarkBackgroundContainerStyle: {},
    checkedCheckMarkBackgroundContainerDisabledStyle: {}
}, _temp);

// exports

var FormCheckboxVariant1Component = exports.FormCheckboxVariant1Component = (0, _reactJss2.default)(styles)(FormCheckboxVariant1ComponentClass);