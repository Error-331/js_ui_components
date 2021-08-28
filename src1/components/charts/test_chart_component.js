'use strict';

// @flow

// external imports
import type {Node} from 'react';

import React, {useState, useCallback, useContext} from 'react';
import {createUseStyles, useTheme} from 'react-jss';

import {
    __,
    always,
    identity,
    isNil,
    ifElse,
    defaultTo,
    any,
    pipe,
    mergeRight,
    apply,
    subtract,
    divide,
    equals,
    sort, ascend,
    mergeDeepRight
} from 'ramda';
import classNames from 'classnames';

// local imports
import type {ThemeType} from '../../../src/types/theme_types';
import type {StateTypes as ThemContextType} from '../../../src/theming/providers';

import {MainThemeContext} from '../../../src/theming/providers';
import screenUtilities from "../../../src/theming/business_logic/screen_utilities";

// type definitions
type CSSStylesType = {
    [string]: mixed
};

export type FormTextInputTypes = {

};

type StateTypes = {};

// styles definition
const useStyles = createUseStyles((theme) => {


    const screenWidths = sort(ascend(identity), [500, 600, 800, 1440, 1920]);
    const lockValues = [75, 10, 20, 30, 40];


    return mergeDeepRight({
        componentContainer: {
            backgroundColor: 'gold',
            padding: props => {
                return props.padding;
            }
        },


    }, theme.screenUtilities.prepareMediaQueriesForStyle('componentContainer', 'fontSize', screenWidths, lockValues))
});

// component implementation
function TestChartComponent(props: PropsTypes) {
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
    const renderComponentContainer = (): Node => {
        const {componentContainer} = classes;

        return <div className={componentContainer}>
            test...
        </div>;
    };

    // endregion

    // init
    return renderComponentContainer();
}

// exports
export default TestChartComponent;
