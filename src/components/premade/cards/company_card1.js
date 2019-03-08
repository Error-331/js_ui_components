'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';

import moment from  'moment';
import {defaultTo, equals, unless} from 'ramda';

// local imports
import type {ItemsType} from './../../grid/grid_generator_component';

import {MEDIUM_SIZE} from './../../../theming/constants/general_constants';

import {SlideVisualEffect} from './../../visual_effects/slide_visual_effect';
import {GridGeneratorComponent} from './../../grid/grid_generator_component';
import {RegularCardComponent} from './../../layout/structure/regular_card_component';
import {RegularButtonComponent} from './../../buttons/regular_button_component';
import {InlineTextBlock} from './../../layout/text/inline_text_block';
import {InlineHeader} from './../../layout/text/inline_header';
import {FontIcon} from './../../layout/icons/font_icon';

// type definitions
type PropsTypes = {
    /**
     * Company's logo image
     */

    companyLogoSrc?: string,

    /**
     * Icon class name that is used when path to company logo image is not specified
     */

    noIconClassName?: string,

    /**
     * Company's name
     */

    name: string,

    /**
     * Company's phone
     */

    phone: string,

    /**
     * Date when company was created
     */

    creationDate?: string | Date | moment,

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

                '& $buttonsGridContainer': {
                    height: '100%',

                    justifyContent: 'center',
                    alignContent: 'center',
                }
            },

            '& > $contentGridContainer': {
                '&  $companyLogoContainer': {
                    alignSelf: 'start',
                    justifySelf: 'center',
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
                    color: theme.baseStyles.utilityBGColor,
                }
            },

        }
    },

    cardBodyContainer: {},
    overlayContainer: {},
    buttonsGridContainer: {},
    contentGridContainer: {},

    companyLogoContainer: {},
    creationDateContainer: {},
    nameContainer: {},
    phoneContainer: {},
});

/**
 * Company card (variant 1).
 * Pre-made card component which represents company.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
export function CompanyCard1Function(props: PropsTypes): React.Node {
    const {companyLogoSrc, name, phone, creationDate, classes} = props;

    const parsedCreationDate: moment = moment(creationDate);
    const formattedCreationDate: string = parsedCreationDate.format('LL');

    let {noIconClassName} = props;
    noIconClassName = defaultTo('fas fa-building')(noIconClassName);

    const companyLogoComponent: React.Node = companyLogoSrc ?
        <img src={companyLogoSrc} /> :
        <FontIcon size={MEDIUM_SIZE} iconClassName={noIconClassName}/>;

    const bodyItems: ItemsType = [
        [
            {elm: companyLogoComponent, props: {className: classes.companyLogoContainer}},
            {elm: InlineTextBlock, props: {className: classes.creationDateContainer},  children: formattedCreationDate},
        ],
        [
            {elm: InlineHeader, hspan: 2, props: {level: 6, className: classes.nameContainer}, children: name}
        ],
        [
            {elm: InlineTextBlock, hspan: 2, props: {className: classes.phoneContainer}, children: `phone: ${phone}`}
        ]
    ];

    const buttonItems: ItemsType = [
        [
            {elm: RegularButtonComponent, props: {shape: 'round', size: 'medium', iconClassName: 'fas fa-search'}},
            {elm: RegularButtonComponent, props: {shape: 'round', size: 'medium', iconClassName: 'fas fa-pencil'}},
            {elm: RegularButtonComponent, props: {shape: 'round', size: 'medium', iconClassName: 'fas fa-trash'}},
        ]
    ];

    const [shouldShowOverlay, setShouldShowOverlay] = React.useState(false);

    return <RegularCardComponent
        popOnHover={true}
        maxPopLevel={3}
        containerClassName={classes.componentContainer}
        bodyClassName={classes.cardBodyContainer}
        onMouseOverContainer={() => unless(equals(true), () => setShouldShowOverlay(true))(shouldShowOverlay)}
        onMouseLeaveContainer={() => unless(equals(false), () => setShouldShowOverlay(false))(shouldShowOverlay)}
    >
        <SlideVisualEffect
            direction='TopToBottom'
            show={shouldShowOverlay}
            className={classes.overlayContainer}
        >
            <GridGeneratorComponent className={classes.buttonsGridContainer} style={{gridTemplateColumns: 'max-content max-content',}} items={buttonItems}/>
        </SlideVisualEffect>

        <GridGeneratorComponent
            className={classes.contentGridContainer}
            style={
                {
                    gridTemplateColumns: '35px 1fr',
                    gridTemplateRows: 'minMax(35px, max-content) max-content',

                    gridColumnGap: '0px',
                    gridRowGap: '0px',
                }
            }
            items={bodyItems}/>
    </RegularCardComponent>;
}

CompanyCard1Function.displayName = 'CompanyCard1';

// exports
export const CompanyCard1 = injectSheet(styles)(CompanyCard1Function);


