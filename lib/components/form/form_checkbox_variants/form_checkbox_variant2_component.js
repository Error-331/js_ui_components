'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FormCheckboxVariant2Component = exports.FormCheckboxVariant2ComponentClass = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

// local imports


var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _ramda = require('ramda');

var _form_checkbox_variant1_component = require('./form_checkbox_variant1_component');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// styles definition


// type definitions
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
var FormCheckboxVariant2ComponentClass = exports.FormCheckboxVariant2ComponentClass = (_temp = _class = function (_React$Component) {
    _inherits(FormCheckboxVariant2ComponentClass, _React$Component);

    function FormCheckboxVariant2ComponentClass() {
        _classCallCheck(this, FormCheckboxVariant2ComponentClass);

        return _possibleConstructorReturn(this, (FormCheckboxVariant2ComponentClass.__proto__ || Object.getPrototypeOf(FormCheckboxVariant2ComponentClass)).apply(this, arguments));
    }

    _createClass(FormCheckboxVariant2ComponentClass, [{
        key: '_getCheckMarkContainerStyle',


        // endregion

        // region constructor
        // endregion

        // region business logic
        // endregion

        // region lifecycle methods
        // endregion

        // region style accessors

        // region static props
        value: function _getCheckMarkContainerStyle() {
            return {
                borderColor: this.props.theme.inputStyles.alternateInputColor
            };
        }
    }, {
        key: '_getCheckedCheckMarkBackgroundContainerStyle',
        value: function _getCheckedCheckMarkBackgroundContainerStyle() {
            return {
                backgroundColor: this.props.theme.inputStyles.bgColor
            };
        }
    }, {
        key: '_getCheckMarkBackgroundContainerStyle',
        value: function _getCheckMarkBackgroundContainerStyle() {
            return {
                borderColor: this._isDisabled() ? this.props.theme.inputStyles.disabledColor : this.props.theme.inputStyles.alternateInputColor
            };
        }

        // endregion

        // region label accessors
        // endregion

        // region state accessors
        // endregion

        // region prop accessors

    }, {
        key: '_isDisabled',
        value: function _isDisabled() {
            return (0, _ramda.defaultTo)(FormCheckboxVariant2ComponentClass.defaultProps.disabled)(this.props.disabled);
        }

        // endregion

        // region handlers
        // endregion

        // region render methods

    }, {
        key: 'render',
        value: function render() {
            return React.createElement(_form_checkbox_variant1_component.FormCheckboxVariant1Component, {
                styleSheetName: FormCheckboxVariant2ComponentClass.displayName,
                disabled: this.props.disabled,
                htmlFor: this.props.htmlFor,

                checkMarkBackgroundContainerStyle: this._getCheckMarkBackgroundContainerStyle(),
                checkedCheckMarkBackgroundContainerStyle: this._getCheckedCheckMarkBackgroundContainerStyle(),
                checkMarkContainerStyle: this._getCheckMarkContainerStyle()
            });
        }

        // endregion

    }]);

    return FormCheckboxVariant2ComponentClass;
}(React.Component), _class.displayName = 'FormCheckboxVariant2Component', _class.defaultProps = {
    disabled: false
}, _temp);

// exports

var FormCheckboxVariant2Component = exports.FormCheckboxVariant2Component = (0, _reactJss2.default)(styles)(FormCheckboxVariant2ComponentClass);