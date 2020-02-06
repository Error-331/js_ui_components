'use strict';

// @flow

// external imports
import type {Node} from 'react';

import React, {useState, useEffect, useRef, useContext} from 'react';
import {createUseStyles, useTheme} from 'react-jss';

import {isNil} from 'ramda';
import classNames from 'classnames';

// local imports
import type {ThemeType} from './../../types/theme_types';
import type {StateTypes as ThemContextType} from './../../theming/providers';

import {MainThemeContext} from './../../theming/providers';

import FontIcon from './../layout/icons/font_icon';

// type definitions
type CSSStylesType = {
    [string]: mixed
};

export type FormTextInputTypes = {

    className?: string,
    style?: CSSStylesType,
};

type PropsTypes = FormTextInputTypes & {
    /**
     * JSS theme object
     *
     * @ignore
     */

    theme: ThemeType,

    /**
     * JSS inner classes
     *
     * @ignore
     */

    classes: any
};

type StateTypes = {};

// styles definition
const useStyles = createUseStyles(theme => ({
    componentContainer: {
        boxSizing: 'border-box',
        display: 'flex',
        position: 'relative',

        flexDirection: 'column',
        flexWrap: 'nowrap',

        flexBasis: 'auto',
        flexShrink: 1,
        flexGrow: 0,

        justifyContent: 'flex-start',
        alignItems: 'stretch',
        alignContent: 'flex-start',

        '& > $controlSection': {
            boxSizing: 'border-box',
            display: 'flex',

            flexBasis: 'auto',
            flexShrink: 1,
            flexGrow: 0,

            flexDirection: 'row',
            flexWrap: 'wrap',

            justifyContent: 'flex-start',
            alignItems: 'center',
            alignContent: 'flex-start',

            '& > $controlsGroup': {
                boxSizing: 'border-box',
                display: 'flex',

                flexBasis: 'auto',
                flexShrink: 1,
                flexGrow: 0,

                flexDirection: 'row',
                flexWrap: 'wrap',

                justifyContent: 'flex-start',
                alignItems: 'center',
                alignContent: 'flex-start',

                '& > $control': {
                    boxSizing: 'border-box',

                    flexBasis: 'auto',
                    flexShrink: 1,
                    flexGrow: 0,

                    marginLeft: `${theme.layoutStyles.leftSpacing}px`,

                    color: theme.inputStyles.inactiveColor,

                    '&.active': {
                        color: theme.inputStyles.activeColor,
                    },

                    '&:hover': {
                        color: theme.inputStyles.hoverColor
                    },

                    '&:first-child': {
                        marginLeft: `0px`,
                    },
                }
            }
        },
    },

    controlSection: {},
    controlsGroup: {},
    control: {},
}));

/**
 * Horizontal icon toolbar component styled according to material-UI guidelines.
 * Component is intendent to be used as a toolbar for other components such as.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function HorizontalIconToolbarComponent(props: PropsTypes) {
    // region private variables declaration
    // endregion

    // region style hooks declaration
    const theme: ThemeType = useTheme();
    const classes: {[string]: string} = useStyles({...props, theme});

    // endregion

    // region context hooks declaration
    const themeContext: ThemContextType = useContext(MainThemeContext);

    // endregion

    // region state hooks declaration
    // endregion

    // region effect hooks declaration
    useEffect(() => {
        if (isNil($toolbarRef) || isNil($toolbarRef.current)) {
            return;
        }

        console.log($toolbarRef.current.children);

        for (let i = 0; i < $toolbarRef.current.children.length; i++) {


            const $currentControlSection = $toolbarRef.current.children[i];
            let c0 = 0;
            let c1 = [];

            for (let i = 0; i < $currentControlSection.children.length; i++) {
                if (i === 0) {
                    c0 = $currentControlSection.children[i].offsetTop;
                    c1.push(true);
                } else {
                    if ($currentControlSection.children[i].offsetTop > c0) {
                        c0 = $currentControlSection.children[i].offsetTop;
                        c1.push(true);
                    } else {
                        c1.push(false);
                    }
                }






            }
        }
    });

    // endregion

    // region state variables declaration
    // endregion

    // region ref hooks declaration
    const $toolbarRef: any = useRef(null);

    // endregion

    // region callback hooks declaration
    // endregion

    // region business logic
    // endregion

    // region event handler helpers
    // endregion

    // region render helpers
    const renderComponentContainer = () => {
        const {componentContainer, controlSection, controlsGroup, control} = classes;

        return <div ref={$toolbarRef} className={componentContainer}>
            <div className={controlSection}>
                <div className={controlsGroup}>
                    <FontIcon size='small' className={control} iconClassName='fas fa-h1' />
                    <FontIcon size='small' className={control} iconClassName='fas fa-h2' />
                    <FontIcon size='small' className={control} iconClassName='fas fa-h3' />
                    <FontIcon size='small' className={control} iconClassName='fas fa-h4' />
                </div>
                <div className={controlsGroup}>
                    <FontIcon size='small' className={control} iconClassName='fas fa-link' />
                    <FontIcon size='small' className={control} iconClassName='fas fa-image' />
                    <FontIcon size='small' className={control} iconClassName='fas fa-film' />
                </div>
                <div className={controlsGroup}>
                    <FontIcon size='small' className={control} iconClassName='fas fa-h1' />
                    <FontIcon size='small' className={control} iconClassName='fas fa-h2' />
                    <FontIcon size='small' className={control} iconClassName='fas fa-h3' />
                    <FontIcon size='small' className={control} iconClassName='fas fa-h4' />
                </div>
                <div className={controlsGroup}>
                    <FontIcon size='small' className={control} iconClassName='fas fa-link' />
                    <FontIcon size='small' className={control} iconClassName='fas fa-image' />
                    <FontIcon size='small' className={control} iconClassName='fas fa-film' />
                </div>
                <div className={controlsGroup}>
                    <FontIcon size='small' className={control} iconClassName='fas fa-h1' />
                    <FontIcon size='small' className={control} iconClassName='fas fa-h2' />
                    <FontIcon size='small' className={control} iconClassName='fas fa-h3' />
                    <FontIcon size='small' className={control} iconClassName='fas fa-h4' />
                </div>
                <div className={controlsGroup}>
                    <FontIcon size='small' className={control} iconClassName='fas fa-link' />
                    <FontIcon size='small' className={control} iconClassName='fas fa-image' />
                    <FontIcon size='small' className={control} iconClassName='fas fa-film' />
                </div>
            </div>
        </div>;
    };

    // endregion

    // init
    return renderComponentContainer();
}

// exports
export default HorizontalIconToolbarComponent;
