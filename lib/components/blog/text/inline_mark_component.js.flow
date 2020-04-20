'use strict';

// @flow

// external imports
import type {Node, Element} from 'react';

import React from 'react';
import {createUseStyles, useTheme} from 'react-jss';
import {defaultTo, mergeDeepRight} from 'ramda';

import classNames from "classnames";

// local imports
import type {ThemeType} from './../../../types/theme_types';
import type {RenderFunctionNoArgsType} from './../../../types/common_types';

import {REGULAR_FONT} from './../../../theming/constants/general_constants';

// type definitions
export type FontFamilyType = 'thin' | 'light' | 'regular' | 'bold';

type CSSStylesType = {
    [string]: mixed
};

type PropsTypes =  {
    accent?: boolean,

    /**
     * Font family type ('thin', 'light', 'regular', 'bold')
     */

    fontFamilyType?: FontFamilyType,

    /**
     * Name of the class which will be applied to component outer container along with default one
     */

    className?: string,

    /**
     * React style object for in deep control of how mark is represented
     */

    style?: CSSStylesType,

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

const useStyles = createUseStyles(theme => {
    const verticalPadding: number = (20 * theme.layoutStyles.bodyFontSize) / 100;
    const horizontalPadding = (33 * theme.layoutStyles.bodyFontSize) / 100;

    return {
        componentContainer: {
            marginRight: `${theme.layoutStyles.rightSpacing}px`,
            padding: `${verticalPadding}px ${horizontalPadding}px ${verticalPadding}px ${horizontalPadding}px`,

            fontFamily: theme.layoutStyles.fontStack,
            fontSize: theme.layoutStyles.bodyFontSize,

            backgroundColor: theme.layoutStyles.baseIconColor,
            color: theme.layoutStyles.bodyBGColor,

            '&.accent': {
                backgroundColor: theme.baseStyles.accentColorPrimary,
            }
        }
    };
});

/**
 * Text mark styled according to material-UI guidelines.
 * Used alongside text blocks to highlight words, somehow similar to ['Chip'](#/UI%20Components/Buttons/ChipComponent) component but more minimalistic.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function InlineMark(props: PropsTypes) {
    // region private variables declaration
    const accent: string = defaultTo(false)(props.accent);
    const fontFamilyType: string = defaultTo(REGULAR_FONT)(props.fontFamilyType);

    const className: string = defaultTo('')(props.className);
    const style: CSSStylesType = defaultTo({})(props.style);

    // endregion

    // region style hooks declaration
    const theme: ThemeType = useTheme();
    const classes: {[string]: string} = useStyles({...props, theme});

    // endregion

    // region context hooks declaration
    // endregion

    // region state hooks declaration
    // endregion

    // region effect hooks declaration
    // endregion

    // region state variables declaration
    // endregion

    // region ref hooks declaration
    // endregion

    // region callback hooks declaration
    // endregion

    // region custom hooks declaration
    // endregion

    // region business logic
    // endregion

    // region event handler helpers
    // endregion

    // region render helpers
    const renderComponentContainer: RenderFunctionNoArgsType = (): Node => {
        const {componentContainer} = classes;
        const componentClassName: string = classNames(componentContainer, {accent}, className);

        const newStyle: CSSStylesType = mergeDeepRight({
            fontFamily: theme.fontFamilyUtilities.getFontFamilyByType(theme, fontFamilyType),
        }, style);

        return <span
            className={componentClassName}
            style={newStyle}
        >
            {props.children}
        </span>;
    };

    // endregion

    // init
    return renderComponentContainer();
}

// exports
export default InlineMark;