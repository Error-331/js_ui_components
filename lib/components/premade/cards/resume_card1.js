'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ResumeCard1 = undefined;
exports.ResumeCard1Function = ResumeCard1Function;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _ramda = require('ramda');

var _general_constants = require('./../../../theming/constants/general_constants');

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

            '& > $regularCardContainer': {
                boxSizing: 'border-box',
                display: 'grid',

                width: '100%',
                height: '100%',

                gridTemplateAreas: '\n                "person-logo name     last-name update-date"\n                "position    position position  position"\n                "location    location location  salary"\n            ',

                gridTemplateColumns: '35px max-content 1fr max-content',
                gridTemplateRows: 'minMax(35px, max-content) 1fr max-content',

                cursor: 'pointer',

                '& > $personLogoContainer': {
                    boxSizing: 'border-box',

                    gridArea: 'person-logo',
                    alignSelf: 'start',
                    justifySelf: 'center'
                },

                '& > $nameContainer': {
                    boxSizing: 'border-box',

                    gridArea: 'name',
                    alignSelf: 'center',

                    paddingLeft: '10px',
                    paddingRight: '8px',

                    fontFamily: theme.fontStacks.boldFontFamilyStack,
                    fontSize: '16px',

                    color: theme.baseStyles.mainPrimaryColor
                },

                '& > $lastNameContainer': {
                    boxSizing: 'border-box',

                    gridArea: 'last-name',
                    alignSelf: 'center',

                    fontFamily: theme.fontStacks.boldFontFamilyStack,
                    fontSize: '16px',

                    color: theme.baseStyles.mainPrimaryColor
                },

                '& > $updateDateContainer': {
                    boxSizing: 'border-box',

                    gridArea: 'update-date',
                    textAlign: 'right',

                    paddingLeft: '8px',
                    fontSize: '10px',
                    color: theme.baseStyles.utilityBGColor
                },

                '& > $positionContainer': {
                    boxSizing: 'border-box',

                    gridArea: 'position',
                    paddingTop: '8px',

                    fontFamily: theme.fontStacks.boldFontFamilyStack,
                    fontSize: '18px',

                    color: theme.baseStyles.mainPrimaryColor
                },

                '& > $locationContainer': {
                    boxSizing: 'border-box',
                    display: 'flex',
                    gridArea: 'location',

                    flexDirection: 'row',
                    justifyСontent: 'flex-start',

                    alignItems: 'center',
                    alignContent: 'flex-start',

                    '& > $currentLocationContainer': {
                        boxSizing: 'border-box',

                        flexBasis: 'auto',
                        flexShrink: '1',
                        flexGrow: '0',

                        textAlign: 'left',
                        fontSize: '14px',

                        color: theme.baseStyles.utilityBGColor
                    },

                    '& > $desiredLocationLogoContainer': {
                        boxSizing: 'border-box',

                        flexBasis: 'auto',
                        flexShrink: '1',
                        flexGrow: '0',

                        paddingLeft: '8px'
                    }
                },

                '& > $salaryContainer': {
                    boxSizing: 'border-box',
                    gridArea: 'salary',

                    fontFamily: theme.fontStacks.boldFontFamilyStack,
                    fontSize: '15px',

                    textAlign: 'right',
                    color: theme.baseStyles.accentColorPrimary
                }
            }
        },

        regularCardContainer: {},

        personLogoContainer: {},
        nameContainer: {},
        lastNameContainer: {},
        updateDateContainer: {},
        positionContainer: {},

        locationContainer: {},
        currentLocationContainer: {},
        desiredLocationLogoContainer: {},

        salaryContainer: {}
    };
};

/**
 * Resume card (variant 1).
 * Pre-made card component which represents resume.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation


// local imports
function ResumeCard1Function(props) {
    var personLogoSrc = props.personLogoSrc,
        name = props.name,
        lastName = props.lastName,
        updateDate = props.updateDate,
        currentLocation = props.currentLocation,
        classes = props.classes;


    var parsedUpdateDate = (0, _moment2.default)(updateDate);
    var formattedUpdateDate = parsedUpdateDate.format('LL');

    var position = props.position,
        specialization = props.specialization,
        currency = props.currency,
        remote = props.remote,
        desiredSalary = props.desiredSalary,
        noIconClassName = props.noIconClassName;


    position = '' + position + ((0, _ramda.isNil)(specialization) ? '' : ' (' + specialization.toLowerCase() + ')');
    currency = (0, _ramda.defaultTo)('')(currency);

    if ((0, _ramda.isNil)(desiredSalary)) {
        desiredSalary = 'Negotiable';
    } else {
        desiredSalary = '' + currency + desiredSalary;
    }

    noIconClassName = (0, _ramda.defaultTo)('fas fa-address-card')(noIconClassName);

    remote = (0, _ramda.defaultTo)(false)(remote);
    var locationIcon = remote ? 'fas fa-map-marker' : 'fas fa-map-marker-slash';

    return React.createElement(
        _regular_card_component.RegularCardComponent,
        {
            popOnHover: true,
            maxPopLevel: 3,
            containerClassName: classes.componentContainer,
            bodyClassName: classes.regularCardContainer
        },
        personLogoSrc ? React.createElement('img', { src: personLogoSrc, className: classes.personLogoContainer }) : React.createElement(_font_icon.FontIcon, { size: _general_constants.MEDIUM_SIZE, iconClassName: noIconClassName, className: classes.personLogoContainer }),
        React.createElement(
            _inline_text_block.InlineTextBlock,
            { className: classes.nameContainer },
            name
        ),
        React.createElement(
            _inline_text_block.InlineTextBlock,
            { className: classes.lastNameContainer },
            lastName
        ),
        React.createElement(
            _inline_text_block.InlineTextBlock,
            { className: classes.updateDateContainer },
            formattedUpdateDate
        ),
        React.createElement(
            _inline_header.InlineHeader,
            { level: 6, className: classes.positionContainer },
            position
        ),
        React.createElement(
            'div',
            { className: classes.locationContainer },
            React.createElement(
                _inline_text_block.InlineTextBlock,
                { className: classes.currentLocationContainer },
                currentLocation
            ),
            React.createElement(_font_icon.FontIcon, { size: _general_constants.SMALL_SIZE, className: classes.desiredLocationLogoContainer, iconClassName: locationIcon })
        ),
        React.createElement(
            _inline_text_block.InlineTextBlock,
            { className: classes.salaryContainer },
            desiredSalary
        )
    );
}

ResumeCard1Function.displayName = 'ResumeCard1';

// exports
var ResumeCard1 = exports.ResumeCard1 = (0, _reactJss2.default)(styles)(ResumeCard1Function);