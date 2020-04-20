'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';

import moment from  'moment';
import {isNil, defaultTo, equals, unless} from 'ramda';

// local imports
import type {ItemsType} from './../../grid/grid_generator_component';

import {MEDIUM_SIZE} from './../../../theming/constants/general_constants';

import {ElementsRow} from './../../layout/alignment/elements/elements_row';
import {SlideVisualEffect} from './../../visual_effects/slide_visual_effect';
import {GridGeneratorComponent} from './../../grid/grid_generator_component';
import {RegularCardComponent} from './../../layout/structure/regular_card_component';
import InlineTextBlock from './../../layout/text/inline_text_block';
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
     * Flag that indicates whether to show or not to show overlay with buttons
     */

    showButtonsOverlay?: boolean,

    /**
     * Buttons which will be shown in button overlay
     */

    children?: React.Node,

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

                '& $buttonsContainer': {
                    height: '100%',

                    alignItems: 'center',
                }
            },

            '& > $contentGridContainer': {
                '& $companyLogoContainer': {
                    alignSelf: 'start',
                    justifySelf: 'center',

                    width: '100%'
                },

                '& > $companyNameContainer': {
                    alignSelf: 'center',

                    paddingLeft: '10px',
                    fontFamily: theme.fontStacks.boldFontFamilyStack,
                    fontSize: '16px',

                    color: theme.baseStyles.mainPrimaryColor
                },

                '& > $publishDateContainer': {
                    alignSelf: 'start',
                    textAlign: 'right',

                    paddingLeft: '8px',
                    fontSize: '10px',
                    color: theme.baseStyles.utilityBGColor
                },

                '& > $titleContainer': {
                    paddingTop: '8px',

                    fontFamily: theme.fontStacks.boldFontFamilyStack,
                    fontSize: '18px',

                    color: theme.baseStyles.mainPrimaryColor
                },

                '& > $locationContainer': {
                    textAlign: 'left',
                    fontSize: '14px',

                    color: theme.baseStyles.utilityBGColor
                },

                '& > $salaryContainer': {
                    fontFamily: theme.fontStacks.boldFontFamilyStack,
                    fontSize: '15px',

                    textAlign: 'right',
                    color: theme.baseStyles.accentColorPrimary,
                },
            }
        }
    },

    cardBodyContainer: {},
    overlayContainer: {},
    buttonsContainer: {},
    contentGridContainer: {},

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
function renderElementsGrid(props: PropsTypes): React.Node {
    const {logoSrc, date, company, title, location, remote, salaryMin, salaryMax, classes} = props;

    const parsedDate: moment = moment(date);
    const formattedDate: string = parsedDate.format('LL');

    let {currency} = props;

    currency = defaultTo('')(currency);

    let salary: string = '';

    if (isNil(salaryMin) && isNil(salaryMax)) {
        salary = 'Negotiable';
    } else {
        salary = `${currency}${salaryMin ? salaryMin : ''}${salaryMax ? `${salaryMin ? '-' : ''}${salaryMax}` : ''}`;
    }

    let {noIconClassName} = props;
    noIconClassName = defaultTo('fas fa-search-dollar')(noIconClassName);

    const companyLogoComponent: React.Node = logoSrc ?
        <img src={logoSrc} /> :
        <FontIcon size={MEDIUM_SIZE} iconClassName={noIconClassName}/>;

    const preparedLocation: string = `${location ? location : ''}${location && remote ? ',' : ''} ${remote ? 'Remote' : ''}`;

    const bodyItems: ItemsType = [
        [
            {elm: companyLogoComponent, props: {className: classes.companyLogoContainer}},
            {elm: InlineTextBlock, props: {className: classes.companyNameContainer}, children: company},
            {elm: InlineTextBlock, props: {className: classes.publishDateContainer}, children: formattedDate},
        ],
        [
            {elm: InlineHeader, hspan: 3, props: {level: 6, className: classes.titleContainer}, children: title},
        ],
        [
            {elm: InlineTextBlock, hspan: 2, props: {className: classes.locationContainer}, children: preparedLocation},
            {elm: InlineTextBlock, props: {className: classes.salaryContainer}, children: salary},
        ]
    ];

    return <GridGeneratorComponent
        className={classes.contentGridContainer}
        style={
            {
                gridTemplateColumns: '35px 1fr max-content',
                gridTemplateRows: 'minMax(35px, max-content) 1fr max-content',

                gridColumnGap: '0px',
                gridRowGap: '0px',
            }
        }
        items={bodyItems}/>;
}

function renderButtonsSlider(props: PropsTypes, shouldShowOverlay: boolean): React.Node {
    const {children, classes} = props;

    return <SlideVisualEffect
        direction='TopToBottom'
        show={shouldShowOverlay}
        className={classes.overlayContainer}
    >
        <ElementsRow alignment='center' className={classes.buttonsContainer}>
            {children}
        </ElementsRow>
    </SlideVisualEffect>;
}

function VacancyCard1Function(props: PropsTypes): React.Node {
    const {classes} = props;
    let {showButtonsOverlay, onClick} = props;

    showButtonsOverlay = defaultTo(false)(showButtonsOverlay);
    onClick = defaultTo(() => {})(onClick);

    const [shouldShowOverlay, setShouldShowOverlay] = React.useState(false);

    return <RegularCardComponent
        onClickBody={onClick}
        popOnHover={true}
        maxPopLevel={3}
        containerClassName={classes.componentContainer}
        bodyClassName={classes.cardBodyContainer}
        onMouseOverContainer={() => unless(equals(true), () => showButtonsOverlay && setShouldShowOverlay(true))(shouldShowOverlay)}
        onMouseLeaveContainer={() => unless(equals(false), () => showButtonsOverlay && setShouldShowOverlay(false))(shouldShowOverlay)}
    >
        {showButtonsOverlay ? renderButtonsSlider(props, shouldShowOverlay) : null}
        {renderElementsGrid(props)}
    </RegularCardComponent>;
}

VacancyCard1Function.displayName = 'VacancyCard1';

const VacancyCard1 = injectSheet(styles)(VacancyCard1Function);

// exports
export {VacancyCard1Function, VacancyCard1};
export default VacancyCard1;