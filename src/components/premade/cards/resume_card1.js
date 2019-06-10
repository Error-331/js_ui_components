'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';

import moment from  'moment';
import {defaultTo, isNil, equals, unless} from 'ramda';

// local imports
import type {ItemsType} from './../../grid/grid_generator_component';

import {SMALL_SIZE, MEDIUM_SIZE} from './../../../theming/constants/general_constants';

import {ElementsRow} from './../../layout/alignment/elements/elements_row';
import {SlideVisualEffect} from './../../visual_effects/slide_visual_effect';
import {GridGeneratorComponent} from './../../grid/grid_generator_component';
import {RegularCardComponent} from './../../layout/structure/regular_card_component';
import {InlineTextBlock} from './../../layout/text/inline_text_block';
import {InlineHeader} from './../../layout/text/inline_header';
import {FontIcon} from './../../layout/icons/font_icon';

// type definitions
type PropsTypes = {
    /**
     * Person's logo image
     */

    personLogoSrc?: string,

    /**
     * Icon class name that is used when path to person logo image is not specified
     */

    noIconClassName?: string,

    /**
     * Person's name
     */

    name: string,

    /**
     * Person's last name
     */

    lastName: string,

    /**
     * Date when vacancy was last updated
     */

    updateDate?: string | Date | moment,

    /**
     * Position which current person is seeking
     */

    position: string,

    /**
     * Specialization in which current person is proficient
     */

    specialization?: string,

    /**
     * Location where current person is living
     */

    currentLocation?: string,

    /**
     * Flag that indicates whether person prefers to work remotely
     */

    remote?: boolean,

    /**
     * Desired wage
     */

    desiredSalary?: number,

    /**
     * Currency (sign) in which desired salary is paid
     */

    currency?: string,

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
                '& $personLogoContainer': {
                    alignSelf: 'start',
                    justifySelf: 'center',
                },

                '& > $nameContainer': {
                    alignSelf: 'center',

                    paddingLeft: '10px',
                    paddingRight: '8px',

                    fontFamily: theme.fontStacks.boldFontFamilyStack,
                    fontSize: '16px',

                    color: theme.baseStyles.mainPrimaryColor
                },

                '& > $lastNameContainer': {
                    alignSelf: 'center',

                    fontFamily: theme.fontStacks.boldFontFamilyStack,
                    fontSize: '16px',

                    color: theme.baseStyles.mainPrimaryColor
                },

                '& > $updateDateContainer': {
                    alignSelf: 'start',
                    textAlign: 'right',

                    paddingLeft: '8px',
                    fontSize: '10px',
                    color: theme.baseStyles.utilityBGColor
                },

                '& > $positionContainer': {
                    paddingTop: '8px',

                    fontFamily: theme.fontStacks.boldFontFamilyStack,
                    fontSize: '18px',

                    color: theme.baseStyles.mainPrimaryColor
                },

                '& > $locationContainer': {
                    boxSizing: 'border-box',
                    display: 'flex',

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

                        paddingLeft: '8px',
                    }
                },

                '& > $salaryContainer': {
                    boxSizing: 'border-box',
                    gridArea: 'salary',

                    fontFamily: theme.fontStacks.boldFontFamilyStack,
                    fontSize: '15px',

                    textAlign: 'right',
                    color: theme.baseStyles.accentColorPrimary,
                },
            },
        }
    },

    cardBodyContainer: {},
    overlayContainer: {},
    buttonsContainer: {},
    contentGridContainer: {},

    personLogoContainer: {},
    nameContainer: {},
    lastNameContainer: {},
    updateDateContainer: {},
    positionContainer: {},

    locationContainer: {},
    currentLocationContainer: {},
    desiredLocationLogoContainer: {},

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
function renderElementsGrid(props: PropsTypes): React.Node {
    const {personLogoSrc, name, lastName, updateDate, currentLocation, classes} = props;

    const parsedUpdateDate: moment = moment(updateDate);
    const formattedUpdateDate: string = parsedUpdateDate.format('LL');

    let {position, specialization, currency, remote, desiredSalary, noIconClassName} = props;

    position = `${position}${isNil(specialization) ? '' : ` (${specialization.toLowerCase()})`}`;
    currency = defaultTo('')(currency);

    if (isNil(desiredSalary)) {
        desiredSalary = 'Negotiable';
    } else {
        desiredSalary = `${currency}${desiredSalary}`;
    }

    noIconClassName = defaultTo('fas fa-address-card')(noIconClassName);

    remote = defaultTo(false)(remote);
    const locationIcon: string = remote ? 'fas fa-map-marker' : 'fas fa-map-marker-slash';

    const personLogoComponent: React.Node =  personLogoSrc ?
        <img src={personLogoSrc} /> :
        <FontIcon size={MEDIUM_SIZE} iconClassName={noIconClassName} />;

     const personLocation: React.Node = <div>
         <InlineTextBlock className={classes.currentLocationContainer}>{currentLocation}</InlineTextBlock>
         <FontIcon size={SMALL_SIZE} className={classes.desiredLocationLogoContainer} iconClassName={locationIcon}/>
     </div>;

    const bodyItems: ItemsType = [
        [
            {elm: personLogoComponent, props: {className: classes.personLogoContainer}},
            {elm: InlineTextBlock, props: {className: classes.nameContainer}, children: name},
            {elm: InlineTextBlock, props: {className: classes.lastNameContainer}, children: lastName},
            {elm: InlineTextBlock, props: {className: classes.updateDateContainer}, children: formattedUpdateDate},
        ],
        [
            {elm: InlineHeader, hspan: 4, props: {level: 6, className: classes.positionContainer}, children: position},
        ],
        [
            {elm: personLocation, hspan: 3, props: {className: classes.locationContainer}},
            {elm: InlineTextBlock, props: {className: classes.salaryContainer}, children: desiredSalary}
        ]
    ];

    return <GridGeneratorComponent
        className={classes.contentGridContainer}
        style={
            {
                gridTemplateColumns: '35px max-content 1fr max-content',
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

function ResumeCard1Function(props: PropsTypes): React.Node {
    const {classes} = props;
    const [shouldShowOverlay, setShouldShowOverlay] = React.useState(false);

    let {showButtonsOverlay} = props;
    showButtonsOverlay = defaultTo(false)(showButtonsOverlay);

    return <RegularCardComponent
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

ResumeCard1Function.displayName = 'ResumeCard1';

const ResumeCard1 = injectSheet(styles)(ResumeCard1Function);

// exports
export {ResumeCard1Function, ResumeCard1};
export default ResumeCard1;