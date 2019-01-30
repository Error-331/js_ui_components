'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';

import moment from  'moment';
import {isNil} from 'ramda';

// local imports
import {MEDIUM_SIZE} from './../../../theming/constants/general_constants';

import {RegularCardComponent} from './../../layout/structure/regular_card_component';
import {InlineTextBlock} from './../../layout/text/inline_text_block';
import {InlineHeader} from './../../layout/text/inline_header';
import {FontIcon} from './../../layout/icons/font_icon';

// type definitions
type PropsTypes = {
    personLogoSrc?: string,

    /**
     * Icon class name that is used when path to person logo image is not specified
     */

    noIconClassName?: string,

    name: string,
    lastName: string,

    updateDate?: string | Date | moment,

    position: string,

    location?: string,

    remote?: boolean,


    desiredSalary?: number,


    /////


    specialization: string,





    skype?: boolean,

    phone?: boolean,

    linkedIn?: boolean,
    gitHub?: boolean,

    /**
     * Currency (sign) in which salary is paid
     */

    currency?: string,

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
                "person-logo name     last-name update-date"
                "position    position position  position"
                "location    location location  salary"
            `,

            gridTemplateColumns: '35px max-content 1fr max-content',
            gridTemplateRows: 'minMax(35px, max-content) 1fr max-content',

            cursor: 'pointer',

            '& > $personLogoContainer': {
                boxSizing: 'border-box',

                gridArea: 'person-logo',
                alignSelf: 'start',
                justifySelf: 'center',

                width: '100%',
            },

            '& > $nameContainer': {
                boxSizing: 'border-box',

                gridArea: 'name',
                alignSelf: 'left',

                paddingLeft: '8px',
                fontFamily: theme.fontStacks.boldFontFamilyStack,
                fontSize: '16px',

                color: theme.baseStyles.mainPrimaryColor
            },

            '& > $lastNameContainer': {
                boxSizing: 'border-box',

                gridArea: 'last-name',
                alignSelf: 'left',

                paddingLeft: '8px',
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

    personLogoContainer: {},
    nameContainer: {},
    lastNameContainer: {},
    updateDateContainer: {},
    positionContainer: {},
    locationContainer: {},
    salaryContainer: {},
});

/**
 * Resume card (variant 1).
 * Pre-made card component which represents resume.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
export function ResumeCard1Function(props: PropsTypes): React.Node {
    const {personLogoSrc, noIconClassName, name, lastName, updateDate, position, location, desiredSalary, classes} = props;

    const parsedUpdateDate: moment = moment(updateDate);
    const formattedUpdateDate: string = parsedUpdateDate.format('LL');

    return <RegularCardComponent
        popOnHover={true}
        maxPopLevel={3}
        containerClassName={classes.componentContainer}
        bodyClassName={classes.regularCardContainer}
    >

        {
            personLogoSrc ?
                <img src={personLogoSrc} className={classes.personLogoContainer}/> :
                <FontIcon size={MEDIUM_SIZE} iconClassName={noIconClassName} className={classes.companyLogoContainer}/>
        }

        <InlineTextBlock className={classes.nameContainer}>{name}</InlineTextBlock>
        <InlineTextBlock className={classes.lastNameContainer}>{lastName}</InlineTextBlock>
        <InlineTextBlock className={classes.updateDateContainer}>{formattedUpdateDate}</InlineTextBlock>

        <InlineTextBlock className={classes.positionContainer}>{position}</InlineTextBlock>
        <InlineTextBlock className={classes.locationContainer}>{location}</InlineTextBlock>

        <InlineTextBlock className={classes.salaryContainer}>{desiredSalary}</InlineTextBlock>
    </RegularCardComponent>;
}

ResumeCard1Function.displayName = 'VacancyCard1';

// exports
export const ResumeCard1 = injectSheet(styles)(ResumeCard1Function);