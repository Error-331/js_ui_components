'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';

import moment from  'moment';
import {isNil} from 'ramda';

// local imports
import {RegularCardComponent} from './../../layout/structure/regular_card_component';
import {InlineTextBlock} from './../../layout/text/inline_text_block';
import {InlineHeader} from './../../layout/text/inline_header';

// type definitions
type PropsTypes = {
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
                "name     last-name update-date"
                "position position  position",
                "location location  salary"
            `,

            gridTemplateColumns: '35px 1fr max-content',
            gridTemplateRows: 'minMax(35px, max-content) 1fr max-content',

            cursor: 'pointer',

            '& > $nameContainer': {
                boxSizing: 'border-box',

                gridArea: 'name',
            },

            '& > $lastNameContainer': {
                boxSizing: 'border-box',

                gridArea: 'last-name',
            },

            '& > $updateDateContainer': {
                boxSizing: 'border-box',

                gridArea: 'update-date',
            },

            '& > $positionContainer': {
                boxSizing: 'border-box',

                gridArea: 'position',
            },

            '& > $locationContainer': {
                boxSizing: 'border-box',

                gridArea: 'location',
            },

            '& > $salaryContainer': {
                boxSizing: 'border-box',

                gridArea: 'salary',
            },
        }
    },

    regularCardContainer: {},

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
    const {name, lastName, updateDate, position, location, desiredSalary, classes} = props;

    const parsedUpdateDate: moment = moment(updateDate);
    const formattedUpdateDate: string = parsedUpdateDate.format('LL');

    return <RegularCardComponent
        popOnHover={true}
        maxPopLevel={3}
        containerClassName={classes.componentContainer}
        bodyClassName={classes.regularCardContainer}
    >
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