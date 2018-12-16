'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ReduxFormGeneratorClass = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

// local imports


exports.ReduxFormGeneratorComponent = ReduxFormGeneratorComponent;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _ramda = require('ramda');

var _main_theme_provider = require('./../../theming/providers/main_theme_provider');

var _redux_form_text_input_component = require('./redux_form_text_input_component');

var _redux_form_checkbox_input_component = require('./redux_form_checkbox_input_component');

var _redux_form_drop_down_input_component = require('./redux_form_drop_down_input_component');

var _redux_form_date_input_component = require('./redux_form_date_input_component');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// constants definition


// type definitions
var ITEM_NAME_POSTFIX = '_item';

// styles definition
var styles = function styles(theme) {
    return {
        componentContainer: {
            boxSizing: 'border-box',
            display: 'grid',

            alignItems: 'end',

            gridColumnGap: theme.layoutStyles.sectionVerticalSpacing + 'px',
            gridRowGap: theme.layoutStyles.sectionHorizontalSpacing + 'px'
        }
    };
};

/**
 * Form generator.
 * Component accepts form specification and returns a container with nested Redux elements aligned using CSS Grid.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation

// $FlowFixMe decorators
var ReduxFormGeneratorClass = exports.ReduxFormGeneratorClass = (_dec = (0, _reactJss2.default)(styles), _dec(_class = (_temp = _class2 = function (_React$Component) {
    _inherits(ReduxFormGeneratorClass, _React$Component);

    function ReduxFormGeneratorClass() {
        _classCallCheck(this, ReduxFormGeneratorClass);

        return _possibleConstructorReturn(this, (ReduxFormGeneratorClass.__proto__ || Object.getPrototypeOf(ReduxFormGeneratorClass)).apply(this, arguments));
    }

    _createClass(ReduxFormGeneratorClass, [{
        key: '_prepareOptions',


        // endregion

        // region private props
        // endregion

        // region constructor
        // endregion

        // region business logic

        // region static props
        value: function _prepareOptions(options) {
            var preparedOptions = options;
            return preparedOptions;
        }
    }, {
        key: '_getGridName',
        value: function _getGridName(name) {
            return '' + name + ITEM_NAME_POSTFIX;
        }
    }, {
        key: '_getGridSpan',
        value: function _getGridSpan(span) {
            return (0, _ramda.defaultTo)(1)(span);
        }
    }, {
        key: '_calcColumnsCount',
        value: function _calcColumnsCount(items) {
            var _this2 = this;

            return (0, _ramda.reduce)(function (columnCount, itemsRow) {
                return (0, _ramda.max)(columnCount, (0, _ramda.reduce)(function (localColumnCount, item) {
                    return (0, _ramda.add)(localColumnCount, _this2._getGridSpan(item.span));
                }, 0, itemsRow));
            }, 0, items);
        }
    }, {
        key: '_prepareGridColumnString',
        value: function _prepareGridColumnString(items, columnsCount) {
            var _this3 = this;

            var columnStrings = (0, _ramda.reduce)(function (gridColumnStrings, item) {
                return (0, _ramda.concat)(gridColumnStrings, (0, _ramda.repeat)(_this3._getGridName(item.name), _this3._getGridSpan(item.span)));
            }, [], items);

            var columnStringsLength = (0, _ramda.length)(columnStrings);

            return (0, _ramda.ifElse)(function () {
                return (0, _ramda.lt)(columnStringsLength, columnsCount);
            }, function (strings) {
                return (0, _ramda.concat)(strings, (0, _ramda.repeat)('.', (0, _ramda.subtract)(columnsCount, columnStringsLength)));
            }, _ramda.identity)(columnStrings).join(' ');
        }

        // endregion

        // region lifecycle methods
        // endregion

        // region style accessors

    }, {
        key: '_getComponentContainerClassName',
        value: function _getComponentContainerClassName() {
            return this.props.classes.componentContainer;
        }
    }, {
        key: '_getComponentContainerStyle',
        value: function _getComponentContainerStyle() {
            var _this4 = this;

            var items = this._getItems();

            if ((0, _ramda.isNil)(items)) {
                return {};
            }

            var columnsCount = this._calcColumnsCount(items);
            var gridTemplateAreas = (0, _ramda.reduce)(function (templateAreas, itemsRow) {
                var columnString = _this4._prepareGridColumnString(itemsRow, columnsCount);

                return (0, _ramda.concat)(templateAreas, '"' + columnString + '" ');
            }, '', items);

            var gridTemplateColumns = (0, _ramda.repeat)('1fr', columnsCount);

            gridTemplateColumns[0] = this._getLeftmostColSize();
            gridTemplateColumns[gridTemplateColumns.length - 1] = this._getRightmostColSize();

            var rowsCount = items.length;

            return {
                gridTemplateAreas: gridTemplateAreas,
                gridTemplateColumns: gridTemplateColumns.join(' '),
                gridTemplateRows: 'repeat(' + rowsCount + ', max-content)'
            };
        }
    }, {
        key: '_getItemStyle',
        value: function _getItemStyle(name) {
            return {
                boxSizing: 'border-box',
                gridArea: this._getGridName(name)
            };
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
        key: '_renderDateInputItem',
        value: function _renderDateInputItem(name, index, options) {
            options = (0, _ramda.defaultTo)({ name: name })(options);
            var _options = options,
                componentContainerStyles = _options.componentContainerStyles,
                label = _options.label,
                placeholder = _options.placeholder;


            componentContainerStyles = (0, _ramda.defaultTo)({})(componentContainerStyles);
            placeholder = (0, _ramda.isNil)(placeholder) && !(0, _ramda.isNil)(label) ? label + '...' : placeholder;

            var composedComponentContainerStyles = (0, _ramda.defaultTo)({})(componentContainerStyles);
            composedComponentContainerStyles = Object.assign({}, composedComponentContainerStyles, this._getItemStyle(name));

            return React.createElement(_redux_form_date_input_component.ReduxFormDateInputComponent, _extends({}, options, {
                name: name,
                label: label,
                placeholder: placeholder,
                componentContainerStyles: composedComponentContainerStyles,
                key: 'item_' + index
            }));
        }
    }, {
        key: '_renderDropDownInputItem',
        value: function _renderDropDownInputItem(name, index, options) {
            options = (0, _ramda.defaultTo)({ name: name, options: {} })(options);
            var _options2 = options,
                componentContainerStyles = _options2.componentContainerStyles,
                label = _options2.label,
                placeholder = _options2.placeholder;


            componentContainerStyles = (0, _ramda.defaultTo)({})(componentContainerStyles);
            placeholder = (0, _ramda.isNil)(placeholder) && !(0, _ramda.isNil)(label) ? label + '...' : placeholder;

            var composedComponentContainerStyles = (0, _ramda.defaultTo)({})(componentContainerStyles);
            composedComponentContainerStyles = Object.assign({}, composedComponentContainerStyles, this._getItemStyle(name));

            return React.createElement(_redux_form_drop_down_input_component.ReduxFormDropDownInputComponent, _extends({}, options, {
                name: name,
                label: label,
                placeholder: placeholder,
                componentContainerStyles: composedComponentContainerStyles,
                key: 'item_' + index
            }));
        }
    }, {
        key: '_renderCheckboxInputItem',
        value: function _renderCheckboxInputItem(name, index, options) {
            options = (0, _ramda.defaultTo)({ name: name })(options);
            var _options3 = options,
                componentContainerStyles = _options3.componentContainerStyles;


            var composedComponentContainerStyles = (0, _ramda.defaultTo)({})(componentContainerStyles);
            composedComponentContainerStyles = Object.assign({}, composedComponentContainerStyles, this._getItemStyle(name));

            return React.createElement(_redux_form_checkbox_input_component.ReduxFormCheckboxInputComponent, _extends({}, options, {
                name: name,
                componentContainerStyles: composedComponentContainerStyles,
                key: 'item_' + index
            }));
        }
    }, {
        key: '_renderTextInputItem',
        value: function _renderTextInputItem(name, index, options) {
            options = (0, _ramda.defaultTo)({ name: name })(options);
            var _options4 = options,
                componentContainerStyles = _options4.componentContainerStyles,
                label = _options4.label,
                placeholder = _options4.placeholder;


            componentContainerStyles = (0, _ramda.defaultTo)({})(componentContainerStyles);
            placeholder = (0, _ramda.isNil)(placeholder) && !(0, _ramda.isNil)(label) ? label + '...' : placeholder;

            var composedComponentContainerStyles = (0, _ramda.defaultTo)({})(componentContainerStyles);
            composedComponentContainerStyles = Object.assign({}, composedComponentContainerStyles, this._getItemStyle(name));

            return React.createElement(_redux_form_text_input_component.ReduxFormTextInputComponent, _extends({}, options, {
                name: name,
                label: label,
                placeholder: placeholder,
                componentContainerStyles: composedComponentContainerStyles,
                key: 'item_' + index
            }));
        }
    }, {
        key: '_renderItem',
        value: function _renderItem(item, index) {
            var name = item.name,
                type = item.type,
                options = item.options;


            switch (type) {
                case 'text':
                    return this._renderTextInputItem(name, index, this._prepareOptions(options));
                case 'checkbox':
                    return this._renderCheckboxInputItem(name, index, this._prepareOptions(options));
                case 'dropdown':
                    return this._renderDropDownInputItem(name, index, this._prepareOptions(options));
                case 'date':
                    return this._renderDateInputItem(name, index, this._prepareOptions(options));
                default:
                    return null;
            }
        }
    }, {
        key: '_renderItems',
        value: function _renderItems() {
            var items = this._getItems();

            if ((0, _ramda.isNil)(items)) {
                return null;
            }

            return (0, _ramda.addIndex)(_ramda.map)((0, _ramda.bind)(this._renderItem, this), (0, _ramda.flatten)(items));
        }
    }, {
        key: '_renderComponentContainer',
        value: function _renderComponentContainer() {
            return React.createElement(
                'div',
                {
                    className: this._getComponentContainerClassName(),
                    style: this._getComponentContainerStyle()
                },
                this._renderItems()
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return this._renderComponentContainer();
        }

        // endregion

    }]);

    return ReduxFormGeneratorClass;
}(React.Component), _class2.displayName = 'ReduxFormGeneratorClass', _class2.defaultProps = {
    items: null,

    leftmostColSize: '1fr',
    rightmostColSize: '1fr'
}, _temp)) || _class);

// exports

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