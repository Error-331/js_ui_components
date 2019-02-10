'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ReduxFormGeneratorComponent = exports.ReduxFormGeneratorClass = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

// local imports


var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _design_components = require('@webfuturistics/design_components');

var _ramda = require('ramda');

var _main_theme_provider = require('./../../theming/providers/main_theme_provider');

var _grid_generator_component = require('./../grid/grid_generator_component');

var _redux_form_text_input_component = require('./redux_form_text_input_component');

var _redux_form_checkbox_input_component = require('./redux_form_checkbox_input_component');

var _redux_form_drop_down_input_component = require('./redux_form_drop_down_input_component');

var _redux_form_date_input_component = require('./redux_form_date_input_component');

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
 * Form generator.
 * Component accepts form specification and returns a container with nested Redux-form elements aligned using CSS Grid.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation

// $FlowFixMe decorators
var ReduxFormGeneratorClass = (_dec = (0, _reactJss2.default)(styles), _dec(_class = (_temp = _class2 = function (_React$Component) {
    _inherits(ReduxFormGeneratorClass, _React$Component);

    function ReduxFormGeneratorClass() {
        _classCallCheck(this, ReduxFormGeneratorClass);

        return _possibleConstructorReturn(this, (ReduxFormGeneratorClass.__proto__ || Object.getPrototypeOf(ReduxFormGeneratorClass)).apply(this, arguments));
    }

    _createClass(ReduxFormGeneratorClass, [{
        key: '_prepareProps',


        // endregion

        // region private props
        // endregion

        // region constructor
        // endregion

        // region business logic

        // region static props
        value: function _prepareProps(props) {
            var preparedProps = props;
            return preparedProps;
        }

        // endregion

        // region lifecycle methods
        // endregion

        // region style accessors

    }, {
        key: '_getComponentClassName',
        value: function _getComponentClassName() {
            return (0, _ramda.defaultTo)('')(this.props.className);
        }
    }, {
        key: '_getComponentStyle',
        value: function _getComponentStyle() {
            return (0, _ramda.defaultTo)({})(this.props.style);
        }

        // endregion

        // region label accessors
        // endregion

        // region state accessors
        // endregion

        // region prop accessors

    }, {
        key: '_getRightmostColSize',
        value: function _getRightmostColSize() {
            return (0, _ramda.defaultTo)(ReduxFormGeneratorClass.defaultProps.rightmostColSize)(this.props.rightmostColSize);
        }
    }, {
        key: '_getLeftmostColSize',
        value: function _getLeftmostColSize() {
            return (0, _ramda.defaultTo)(ReduxFormGeneratorClass.defaultProps.leftmostColSize)(this.props.leftmostColSize);
        }
    }, {
        key: '_getItems',
        value: function _getItems() {
            return (0, _ramda.defaultTo)(ReduxFormGeneratorClass.defaultProps.items)(this.props.items);
        }

        // endregion

        // region handlers
        // endregion

        // region render methods

    }, {
        key: '_prepareDateInputItem',
        value: function _prepareDateInputItem(item) {
            var name = item.name,
                hspan = item.hspan,
                vspan = item.vspan,
                props = item.props;


            var newProps = this._prepareProps(props);
            newProps = (0, _ramda.defaultTo)({ name: name })(newProps);

            var _newProps = newProps,
                label = _newProps.label,
                placeholder = _newProps.placeholder;

            placeholder = (0, _ramda.isNil)(placeholder) && !(0, _ramda.isNil)(label) ? label + '...' : placeholder;

            return {
                elm: _redux_form_date_input_component.ReduxFormDateInputComponent,
                name: name,
                hspan: hspan,
                vspan: vspan,
                props: _extends({ name: name }, props, { placeholder: placeholder })
            };
        }
    }, {
        key: '_prepareDropDownInputItem',
        value: function _prepareDropDownInputItem(item) {
            var name = item.name,
                hspan = item.hspan,
                vspan = item.vspan,
                props = item.props;


            var newProps = this._prepareProps(props);
            newProps = (0, _ramda.defaultTo)({ name: name, options: {} })(newProps);

            var _newProps2 = newProps,
                label = _newProps2.label,
                placeholder = _newProps2.placeholder;

            placeholder = (0, _ramda.isNil)(placeholder) && !(0, _ramda.isNil)(label) ? label + '...' : placeholder;

            return {
                elm: _redux_form_drop_down_input_component.ReduxFormDropDownInputComponent,
                name: name,
                hspan: hspan,
                vspan: vspan,
                props: _extends({ name: name }, newProps, { placeholder: placeholder })
            };
        }
    }, {
        key: '_prepareCheckboxInputItem',
        value: function _prepareCheckboxInputItem(item) {
            var name = item.name,
                hspan = item.hspan,
                vspan = item.vspan,
                props = item.props;


            var newProps = this._prepareProps(props);
            newProps = (0, _ramda.defaultTo)({ name: name })(newProps);

            return {
                elm: _redux_form_checkbox_input_component.ReduxFormCheckboxInputComponent,
                name: name,
                hspan: hspan,
                vspan: vspan,
                props: _extends({ name: name }, newProps)
            };
        }
    }, {
        key: '_prepareTextInputItem',
        value: function _prepareTextInputItem(item) {
            var name = item.name,
                hspan = item.hspan,
                vspan = item.vspan,
                props = item.props;


            var newProps = this._prepareProps(props);
            newProps = (0, _ramda.defaultTo)({ name: name })(newProps);

            var _newProps3 = newProps,
                label = _newProps3.label,
                placeholder = _newProps3.placeholder;

            placeholder = (0, _ramda.isNil)(placeholder) && !(0, _ramda.isNil)(label) ? label + '...' : placeholder;

            return {
                elm: _redux_form_text_input_component.ReduxFormTextInputComponent,
                name: name,
                hspan: hspan,
                vspan: vspan,
                props: _extends({ name: name }, newProps, { placeholder: placeholder })
            };
        }
    }, {
        key: '_prepareItem',
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
        key: '_prepareItems',
        value: function _prepareItems() {
            var _this2 = this;

            var items = this._getItems();

            return (0, _ramda.unless)(_ramda.isNil, (0, _ramda.map)(function (rows) {
                return (0, _ramda.map)((0, _ramda.bind)(_this2._prepareItem, _this2), rows);
            }))(items);
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(_grid_generator_component.GridGeneratorComponent, {
                items: this._prepareItems(),

                className: this._getComponentClassName(),
                style: this._getComponentStyle(),

                leftmostColSize: this._getLeftmostColSize(),
                rightmostColSize: this._getRightmostColSize()
            });
        }

        // endregion

    }]);

    return ReduxFormGeneratorClass;
}(React.Component), _class2.displayName = 'ReduxFormGeneratorClass', _class2.defaultProps = {
    items: null,

    leftmostColSize: '1fr',
    rightmostColSize: '1fr'
}, _temp)) || _class);


function ReduxFormGeneratorComponent(props) {
    return React.createElement(
        _main_theme_provider.MainThemeContext.Consumer,
        null,
        function (windowDimensions) {
            return React.createElement(ReduxFormGeneratorClass, _extends({}, props, windowDimensions));
        }
    );
}

ReduxFormGeneratorComponent.displayName = 'ReduxFormGeneratorComponent';

// exports
exports.ReduxFormGeneratorClass = ReduxFormGeneratorClass;
exports.ReduxFormGeneratorComponent = ReduxFormGeneratorComponent;