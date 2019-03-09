'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CompanyCard1 = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// local imports


exports.CompanyCard1Function = CompanyCard1Function;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _ramda = require('ramda');

var _general_constants = require('./../../../theming/constants/general_constants');

var _slide_visual_effect = require('./../../visual_effects/slide_visual_effect');

var _grid_generator_component = require('./../../grid/grid_generator_component');

var _regular_card_component = require('./../../layout/structure/regular_card_component');

var _inline_text_block = require('./../../layout/text/inline_text_block');

var _inline_header = require('./../../layout/text/inline_header');

var _font_icon = require('./../../layout/icons/font_icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// styles definition


// type definitions
var styles = function styles(theme) {
    return {
        componentContainer: {
            height: '100%',

            '& > $cardBodyContainer': {
                boxSizing: 'border-box',
                position: 'relative',
                overflow: 'hidden',

                width: '100%',
                height: '100%',

                cursor: 'pointer',

                '& > $overlayContainer': {
                    width: '100%',
                    height: '100%',

                    '& $buttonsGridContainer': {
                        height: '100%',

                        justifyContent: 'center',
                        alignContent: 'center'
                    }
                },

                '& > $contentGridContainer': {
                    '&  $companyLogoContainer': {
                        alignSelf: 'start',
                        justifySelf: 'center'
                    },

                    '& > $creationDateContainer': {
                        alignSelf: 'start',
                        textAlign: 'right',

                        paddingLeft: '8px',
                        fontSize: '10px',
                        color: theme.baseStyles.utilityBGColor
                    },

                    '& > $nameContainer': {
                        paddingTop: '8px',

                        fontFamily: theme.fontStacks.boldFontFamilyStack,
                        fontSize: '18px',

                        color: theme.baseStyles.mainPrimaryColor
                    },

                    '& > $phoneContainer': {
                        textAlign: 'left',
                        fontSize: '14px',

                        textTransform: 'capitalize',
                        color: theme.baseStyles.utilityBGColor
                    }
                }

            }
        },

        cardBodyContainer: {},
        overlayContainer: {},
        buttonsGridContainer: {},
        contentGridContainer: {},

        companyLogoContainer: {},
        creationDateContainer: {},
        nameContainer: {},
        phoneContainer: {}
    };
};

/**
 * Company card (variant 1).
 * Pre-made card component which represents company.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function renderElementsGrid(props) {
    var companyLogoSrc = props.companyLogoSrc,
        name = props.name,
        phone = props.phone,
        creationDate = props.creationDate,
        classes = props.classes;


    var parsedCreationDate = (0, _moment2.default)(creationDate);
    var formattedCreationDate = parsedCreationDate.format('LL');

    var noIconClassName = props.noIconClassName;

    noIconClassName = (0, _ramda.defaultTo)('fas fa-building')(noIconClassName);

    var companyLogoComponent = companyLogoSrc ? React.createElement('img', { src: companyLogoSrc }) : React.createElement(_font_icon.FontIcon, { size: _general_constants.MEDIUM_SIZE, iconClassName: noIconClassName });

    var bodyItems = [[{ elm: companyLogoComponent, props: { className: classes.companyLogoContainer } }, { elm: _inline_text_block.InlineTextBlock, props: { className: classes.creationDateContainer }, children: formattedCreationDate }], [{ elm: _inline_header.InlineHeader, hspan: 2, props: { level: 6, className: classes.nameContainer }, children: name }], [{ elm: _inline_text_block.InlineTextBlock, hspan: 2, props: { className: classes.phoneContainer }, children: 'phone: ' + phone }]];

    return React.createElement(_grid_generator_component.GridGeneratorComponent, {
        className: classes.contentGridContainer,
        style: {
            gridTemplateColumns: '35px 1fr',
            gridTemplateRows: 'minMax(35px, max-content) max-content',

            gridColumnGap: '0px',
            gridRowGap: '0px'
        },
        items: bodyItems });
}

function renderButtonsSlider(props, shouldShowOverlay) {
    var overlayButtonItems = props.overlayButtonItems,
        classes = props.classes;


    return React.createElement(
        _slide_visual_effect.SlideVisualEffect,
        {
            direction: 'TopToBottom',
            show: shouldShowOverlay,
            className: classes.overlayContainer
        },
        React.createElement(_grid_generator_component.GridGeneratorComponent, {
            className: classes.buttonsGridContainer,
            style: { gridTemplateColumns: 'max-content max-content' },
            items: (0, _ramda.defaultTo)([])(overlayButtonItems)
        })
    );
}

function CompanyCard1Function(props) {
    var classes = props.classes;

    var _React$useState = React.useState(false),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        shouldShowOverlay = _React$useState2[0],
        setShouldShowOverlay = _React$useState2[1];

    var showButtonsOverlay = props.showButtonsOverlay;

    showButtonsOverlay = (0, _ramda.defaultTo)(false)(showButtonsOverlay);

    return React.createElement(
        _regular_card_component.RegularCardComponent,
        {
            popOnHover: true,
            maxPopLevel: 3,
            containerClassName: classes.componentContainer,
            bodyClassName: classes.cardBodyContainer,
            onMouseOverContainer: function onMouseOverContainer() {
                return (0, _ramda.unless)((0, _ramda.equals)(true), function () {
                    return showButtonsOverlay && setShouldShowOverlay(true);
                })(shouldShowOverlay);
            },
            onMouseLeaveContainer: function onMouseLeaveContainer() {
                return (0, _ramda.unless)((0, _ramda.equals)(false), function () {
                    return showButtonsOverlay && setShouldShowOverlay(false);
                })(shouldShowOverlay);
            }
        },
        showButtonsOverlay ? renderButtonsSlider(props, shouldShowOverlay) : null,
        renderElementsGrid(props)
    );
}

CompanyCard1Function.displayName = 'CompanyCard1';

// exports
var CompanyCard1 = exports.CompanyCard1 = (0, _reactJss2.default)(styles)(CompanyCard1Function);