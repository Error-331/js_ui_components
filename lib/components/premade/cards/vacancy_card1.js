'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.VacancyCard1 = undefined;
exports.VacancyCard1Function = VacancyCard1Function;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _ramda = require('ramda');

var _regular_card_component = require('./../../layout/structure/regular_card_component');

var _inline_text_block = require('./../../layout/text/inline_text_block');

var _inline_header = require('./../../layout/text/inline_header');

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

                gridTemplateAreas: '\n                    "company-logo company-name publish-date"\n                    "title        title        title"\n                    "location     location       salary"\n                ',

                gridTemplateColumns: '35px 1fr max-content',
                gridTemplateRows: 'minMax(35px, max-content) 1fr max-content',

                cursor: 'pointer',

                '& > $companyLogoContainer': {
                    boxSizing: 'border-box',

                    gridArea: 'company-logo',
                    alignSelf: 'start',

                    width: '100%'
                },

                '& > $companyNameContainer': {
                    boxSizing: 'border-box',

                    gridArea: 'company-name',
                    alignSelf: 'center',

                    paddingLeft: '8px',
                    fontFamily: theme.fontStacks.boldFontFamilyStack,
                    fontSize: '16px',

                    color: theme.baseStyles.mainPrimaryColor
                },

                '& > $publishDateContainer': {
                    boxSizing: 'border-box',

                    gridArea: 'publish-date',
                    textAlign: 'right',

                    paddingLeft: '8px',
                    fontSize: '10px',
                    color: theme.baseStyles.utilityBGColor
                },

                '& > $titleContainer': {
                    gridArea: 'title',
                    paddingTop: '8px',
                    fontFamily: theme.fontStacks.boldFontFamilyStack,
                    fontSize: '18px',
                    color: theme.baseStyles.mainPrimaryColor
                },

                '& > $locationContainer': {
                    gridArea: 'location',
                    textAlign: 'left',
                    fontSize: '14px',
                    color: theme.baseStyles.utilityBGColor
                },

                '& > $salaryContainer': {
                    gridArea: 'salary',
                    fontFamily: theme.fontStacks.boldFontFamilyStack,
                    fontSize: '15px',
                    color: theme.baseStyles.accentColorPrimary,
                    textAlign: 'right'
                }
            }
        },

        regularCardContainer: {},

        companyLogoContainer: {},
        companyNameContainer: {},
        publishDateContainer: {},

        titleContainer: {},
        salaryContainer: {},
        locationContainer: {}
    };
};

/**
 * Vacancy card (variant 1).
 * Pre-made card component which represents vacancy.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation


// local imports
function VacancyCard1Function(props) {
    var logoSrc = props.logoSrc,
        date = props.date,
        company = props.company,
        title = props.title,
        location = props.location,
        remote = props.remote,
        salaryMin = props.salaryMin,
        salaryMax = props.salaryMax,
        currency = props.currency,
        classes = props.classes;


    var parsedDate = (0, _moment2.default)(date);
    var formattedDate = parsedDate.format('LL');

    var salary = '';

    if ((0, _ramda.isNil)(salaryMin) && (0, _ramda.isNil)(salaryMax)) {
        salary = 'Negotiable';
    } else {
        salary = '' + currency + (salaryMin ? salaryMin : '') + (salaryMax ? '' + (salaryMin ? '-' : '') + salaryMax : '');
    }

    return React.createElement(
        _regular_card_component.RegularCardComponent,
        {
            popOnHover: true,
            maxPopLevel: 3,
            containerClassName: classes.componentContainer,
            bodyClassName: classes.regularCardContainer
        },
        logoSrc ? React.createElement('img', { src: logoSrc, className: classes.companyLogoContainer }) : React.createElement('div', null),
        React.createElement(
            _inline_text_block.InlineTextBlock,
            { className: classes.companyNameContainer },
            company
        ),
        React.createElement(
            _inline_text_block.InlineTextBlock,
            { className: classes.publishDateContainer },
            formattedDate
        ),
        React.createElement(
            _inline_header.InlineHeader,
            { level: 6, className: classes.titleContainer },
            title
        ),
        React.createElement(
            _inline_text_block.InlineTextBlock,
            { className: classes.locationContainer },
            location,
            location && remote ? ',' : '',
            ' ',
            remote ? 'Remote' : ''
        ),
        React.createElement(
            _inline_text_block.InlineTextBlock,
            { className: classes.salaryContainer },
            salary
        )
    );
}

VacancyCard1Function.displayName = 'VacancyCard1';

// exports
var VacancyCard1 = exports.VacancyCard1 = (0, _reactJss2.default)(styles)(VacancyCard1Function);