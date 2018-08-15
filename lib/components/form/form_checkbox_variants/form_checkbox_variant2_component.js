'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FormCheckboxVariant2Component = exports.FormCheckboxVariant2ComponentClass = undefined;

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
        'componentContainer': {
            position: 'relative',
            boxSizing: 'border-box',
            display: 'flex',

            width: theme.inputStyles.checkboxControlLabelWidth + 'px',
            height: theme.inputStyles.checkboxControlLabelHeight + 'px'
        }
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

var FormCheckboxVariant2ComponentClass = exports.FormCheckboxVariant2ComponentClass = function (_React$Component) {
    _inherits(FormCheckboxVariant2ComponentClass, _React$Component);

    function FormCheckboxVariant2ComponentClass() {
        _classCallCheck(this, FormCheckboxVariant2ComponentClass);

        return _possibleConstructorReturn(this, (FormCheckboxVariant2ComponentClass.__proto__ || Object.getPrototypeOf(FormCheckboxVariant2ComponentClass)).apply(this, arguments));
    }

    _createClass(FormCheckboxVariant2ComponentClass, [{
        key: '_renderComponentContainer',


        // endregion

        // region constructor
        // endregion

        // business logic
        // endregion

        // region lifecycle methods
        // endregion

        // region style accessors
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
        value: function _renderComponentContainer() {
            return React.createElement('label', { htmlFor: this.props.htmlFor, className: this.props.classes.componentContainer });
        }
    }, {
        key: 'render',
        value: function render() {
            return this._renderComponentContainer();
        }

        // endregion

    }]);

    return FormCheckboxVariant2ComponentClass;
}(React.Component);

// exports


FormCheckboxVariant2ComponentClass.displayName = 'FormCheckboxVariant2Component';
FormCheckboxVariant2ComponentClass.defaultProps = {
    disabled: false,
    classes: {}
};
var FormCheckboxVariant2Component = exports.FormCheckboxVariant2Component = (0, _reactJss2.default)(styles)(FormCheckboxVariant2ComponentClass);