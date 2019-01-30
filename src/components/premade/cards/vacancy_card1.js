'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';

import moment from  'moment';
import {isNil, defaultTo} from 'ramda';

// local imports
import {MEDIUM_SIZE} from './../../../theming/constants/general_constants';

import {RegularCardComponent} from './../../layout/structure/regular_card_component';
import {InlineTextBlock} from './../../layout/text/inline_text_block';
import {InlineHeader} from './../../layout/text/inline_header';
import {FontIcon} from './../../layout/icons/font_icon';

// type definitions
export type ClickCallbackType = (event: SyntheticEvent<HTMLDivElement>) => void;

type PropsTypes = {
    /**
     * Path to image with logo
     */

    logoSrc?: string,

    /**
     * Icon class name that is used when path to logo image is not specified
     */

    noIconClassName?: string,

    /**
     * Date when vacancy was posted
     */

    date?: string | Date | moment,

    /**
     * Company name
     */

    company?: string,

    /**
     * Job title
     */

    title?: string,

    /**
     * Job location
     */

    location?: string,

    /**
     * Flag that indicates whether employee can work from remote location
     */

    remote?: boolean,

    /**
     * Minimum wage
     */

    salaryMin?: number,

    /**
     * Maximum wage
     */

    salaryMax?: number,

    /**
     * Currency (sign) in which salary is paid
     */

    currency?: string,

    /**
     * Callback function which will be called once user clicks on a card
     */

    onClick?: ?ClickCallbackType,

    /**
     * JSS inner classes
     *
     * @ignore
     */

    classes: any,
};

type StateTypes = {};

// styles definition
const styles = theme => ({
    componentContainer: {
        height: '100%',

        '& > $regularCardContainer': {
            boxSizing: 'border-box',
            display: 'grid',

            width: '100%',
            height: '100%',

            gridTemplateAreas: `
                "company-logo company-name publish-date"
                "title        title        title"
                "location     location     salary"
            `,

            gridTemplateColumns: '35px 1fr max-content',
            gridTemplateRows: 'minMax(35px, max-content) 1fr max-content',

            cursor: 'pointer',

            '& > $companyLogoContainer': {
                boxSizing: 'border-box',

                gridArea: 'company-logo',
                alignSelf: 'start',
                justifySelf: 'center',

                width: '100%'
            },

            '& > $companyNameContainer': {
                boxSizing: 'border-box',

                gridArea: 'company-name',
                alignSelf: 'center',

                paddingLeft: '10px',
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
                boxSizing: 'border-box',

                gridArea: 'title',
                paddingTop: '8px',

                fontFamily: theme.fontStacks.boldFontFamilyStack,
                fontSize: '18px',

                color: theme.baseStyles.mainPrimaryColor
            },

            '& > $locationContainer': {
                boxSizing: 'border-box',
                gridArea: 'location',

                textAlign: 'left',
                fontSize: '14px',

                color: theme.baseStyles.utilityBGColor
            },

            '& > $salaryContainer': {
                boxSizing: 'border-box',
                gridArea: 'salary',

                fontFamily: theme.fontStacks.boldFontFamilyStack,
                fontSize: '15px',

                textAlign: 'right',
                color: theme.baseStyles.accentColorPrimary,
            },
        }
    },

    regularCardContainer: {},

    companyLogoContainer: {},
    companyNameContainer: {},
    publishDateContainer: {},

    titleContainer: {},
    salaryContainer: {},
    locationContainer: {}
});

/**
 * Vacancy card (variant 1).
 * Pre-made card component which represents vacancy.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
export function VacancyCard1Function(props: PropsTypes): React.Node {
    const {logoSrc, date, company, title, location, remote, salaryMin, salaryMax, currency, classes} = props;

    const parsedDate: moment = moment(date);
    const formattedDate: string = parsedDate.format('LL');

    let salary: string = '';

    if (isNil(salaryMin) && isNil(salaryMax)) {
        salary = 'Negotiable';
    } else {
        salary = `${currency}${salaryMin ? salaryMin : ''}${salaryMax ? `${salaryMin ? '-' : ''}${salaryMax}` : ''}`;
    }

    let {onClick} = props;
    onClick = defaultTo(() => {})(onClick);

    let {noIconClassName} = props;
    noIconClassName = isNil(noIconClassName) ? 'fas fa-search-dollar' : noIconClassName;

    return <RegularCardComponent
        onClickBody={onClick}
        popOnHover={true}
        maxPopLevel={3}
        containerClassName={classes.componentContainer}
        bodyClassName={classes.regularCardContainer}
    >
        {
            logoSrc ?
                <img src={logoSrc} className={classes.companyLogoContainer}/> :
                <FontIcon size={MEDIUM_SIZE} iconClassName={noIconClassName} className={classes.companyLogoContainer}/>
        }

        <InlineTextBlock className={classes.companyNameContainer}>{company}</InlineTextBlock>
        <InlineTextBlock className={classes.publishDateContainer}>{formattedDate}</InlineTextBlock>

        <InlineHeader level={6} className={classes.titleContainer}>{title}</InlineHeader>
        <InlineTextBlock className={classes.locationContainer}>{location}{location && remote ? ',' : ''} {remote ? 'Remote' : ''}</InlineTextBlock>
        <InlineTextBlock className={classes.salaryContainer}>{salary}</InlineTextBlock>
    </RegularCardComponent>;
}

VacancyCard1Function.displayName = 'VacancyCard1';

// exports
export const VacancyCard1 = injectSheet(styles)(VacancyCard1Function);