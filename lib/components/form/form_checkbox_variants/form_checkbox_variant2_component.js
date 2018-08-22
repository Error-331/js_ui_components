'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FormCheckboxVariant2Component = exports.FormCheckboxVariant2ComponentClass = undefined;

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

            '& > $checkMarkContainer': {
                position: 'absolute',
                boxSizing: 'border-box',

                top: '0%',
                left: '0%',

                width: '100%',
                height: '50%',

                border: theme.inputStyles.checkMarkLineWidth + 'px solid ' + theme.inputStyles.switchSliderHandleActive,
                borderTopStyle: 'none',
                borderRightStyle: 'none',

                opacity: 0,
                transform: 'rotate(-90deg)',

                transition: 'transform 0.3s, opacity 0.3s',

                '&.disabled': {
                    borderColor: theme.inputStyles.disabledColor
                }
            },

            '& > $crossMarkContainer': {
                position: 'relative',
                boxSizing: 'border-box',

                width: '100%',
                height: '100%',

                opacity: 1,
                transform: 'rotate(-45deg)',

                transition: 'transform 0.3s, opacity 0.3s',

                '& > $crossLineVertical': {
                    position: 'absolute',
                    boxSizing: 'border-box',

                    top: '0%',
                    left: 'calc(50% - ' + theme.inputStyles.checkMarkLineWidth / 2 + 'px)',

                    width: theme.inputStyles.checkMarkLineWidth + 'px',
                    height: '100%',

                    backgroundColor: theme.inputStyles.attentionColor
                },

                '& > $crossLineHorizontal': {
                    position: 'relative',
                    boxSizing: 'border-box',

                    top: 'calc(50% - ' + theme.inputStyles.checkMarkLineWidth / 2 + 'px)',
                    left: '0%',

                    width: '100%',
                    height: theme.inputStyles.checkMarkLineWidth + 'px',

                    backgroundColor: theme.inputStyles.attentionColor
                },

                '&.disabled': {
                    '& > $crossLineVertical': {
                        backgroundColor: theme.inputStyles.disabledColor
                    },

                    '& > $crossLineHorizontal': {
                        backgroundColor: theme.inputStyles.disabledColor
                    }
                }
            }
        },

        checkMarkContainer: {},

        crossMarkContainer: {},
        crossLineVertical: {},
        crossLineHorizontal: {}
    };
};

/**
 * Checkbox (variant 2) component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
var FormCheckboxVariant2ComponentClass = exports.FormCheckboxVariant2ComponentClass = (_temp = _class = function (_React$Component) {
    _inherits(FormCheckboxVariant2ComponentClass, _React$Component);

    // endregion

    // region constructor

    // region static props
    function FormCheckboxVariant2ComponentClass(props) {
        _classCallCheck(this, FormCheckboxVariant2ComponentClass);

        var _this = _possibleConstructorReturn(this, (FormCheckboxVariant2ComponentClass.__proto__ || Object.getPrototypeOf(FormCheckboxVariant2ComponentClass)).call(this, props));

        _this.attachSheet();
        return _this;
    }

    // endregion

    // region business logic


    _createClass(FormCheckboxVariant2ComponentClass, [{
        key: 'attachSheet',
        value: function attachSheet() {
            var _newGlobalStyles;

            var _props = this.props,
                classes = _props.classes,
                theme = _props.theme;
            var componentContainer = classes.componentContainer,
                checkMarkContainer = classes.checkMarkContainer,
                crossMarkContainer = classes.crossMarkContainer;
            var styleSheetRegister = theme.styleSheetRegister;


            var checkMarkContainerStylesName = 'input:checked + .' + componentContainer + ' > .' + checkMarkContainer;
            var checkCrossContainerStylesName = 'input:checked + .' + componentContainer + ' > .' + crossMarkContainer;

            var newGlobalStyles = (_newGlobalStyles = {}, _defineProperty(_newGlobalStyles, checkMarkContainerStylesName, this._getCheckedCheckMarkContainerStyles()), _defineProperty(_newGlobalStyles, checkCrossContainerStylesName, this._getCheckedCrossMarkContainerClasses()), _newGlobalStyles);

            styleSheetRegister.addGlobalStyles(newGlobalStyles, FormCheckboxVariant2ComponentClass.displayName);
        }

        // endregion

        // region lifecycle methods
        // endregion

        // region style accessors

    }, {
        key: '_getCheckedCrossMarkContainerClasses',
        value: function _getCheckedCrossMarkContainerClasses() {
            return {
                opacity: 0,
                transform: 'rotate(0deg)'
            };
        }
    }, {
        key: '_getCheckedCheckMarkContainerStyles',
        value: function _getCheckedCheckMarkContainerStyles() {
            return {
                opacity: 1,
                transform: 'rotate(-45deg)'
            };
        }
    }, {
        key: '_getCrossMarkContainerClasses',
        value: function _getCrossMarkContainerClasses() {
            var disabled = this.props.disabled;


            return (0, _classnames2.default)(this.props.classes.crossMarkContainer, { 'disabled': disabled });
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

    }, {
        key: '_getForceCheckProp',
        value: function _getForceCheckProp() {
            return (0, _ramda.defaultTo)(false)(this.props.forceCheck);
        }

        // endregion

        // region handlers
        // endregion

        // region render methods

    }, {
        key: '_renderCrossMarkContainer',
        value: function _renderCrossMarkContainer() {
            return React.createElement(
                'div',
                { className: this._getCrossMarkContainerClasses() },
                React.createElement('div', { className: this.props.classes.crossLineVertical }),
                React.createElement('div', { className: this.props.classes.crossLineHorizontal })
            );
        }
    }, {
        key: '_renderCheckMarkContainer',
        value: function _renderCheckMarkContainer() {
            var forceCheck = this._getForceCheckProp();
            var customStyles = forceCheck ? this._getCheckedCheckMarkContainerStyles() : {};

            return React.createElement('div', { className: this._getCheckMarkContainerClasses(), style: customStyles });
        }
    }, {
        key: '_renderComponentContainer',
        value: function _renderComponentContainer() {
            var forceCheck = this._getForceCheckProp();

            return React.createElement(
                'label',
                { htmlFor: this.props.htmlFor, className: this.props.classes.componentContainer },
                this._renderCheckMarkContainer(),
                forceCheck ? null : this._renderCrossMarkContainer()
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return this._renderComponentContainer();
        }

        // endregion

    }]);

    return FormCheckboxVariant2ComponentClass;
}(React.Component), _class.displayName = 'FormCheckboxVariant2Component', _class.defaultProps = {
    disabled: false,
    classes: {}
}, _temp);

// exports

var FormCheckboxVariant2Component = exports.FormCheckboxVariant2Component = (0, _reactJss2.default)(styles)(FormCheckboxVariant2ComponentClass);