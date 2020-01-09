'use strict';

// @flow

// external imports
import type {Node} from 'react';
import type {FieldProps} from 'redux-form';

import React, {useState, useCallback, useContext} from 'react';
import {createUseStyles, useTheme} from 'react-jss';

import {always, isNil, ifElse, defaultTo, any, mergeRight, apply, subtract, divide} from 'ramda';
import classNames from 'classnames';

// local imports
import type {ThemeType} from './../../types/theme_types';
import type {StateTypes as ThemContextType} from './../../theming/providers';

import {MainThemeContext} from './../../theming/providers';

// type definitions
type CSSStylesType = {
    [string]: mixed
};

export type FormTextInputTypes = {
    active?: boolean,

    /**
     * Number that indicates which visual variant will be used to represent the text input
     */

    variant?: number,

    /**
     * Flag that dictates whether component should be readable only (text can be readable but not editable)
     */

    readOnly?: ?boolean,

    /**
     * Flag that dictates whether component should be disabled (text can not be readable or editable)
     */

    disabled?: ?boolean,

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
        position: 'absolute',
        display: 'flex',

        flexBasis: 'auto',
        flexShrink: 1,
        flexGrow: 0,

        flexDirection: 'row',
        flexWrap: 'nowrap',

        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'flex-start',

        width: 'auto',
        height: 'auto',

        cursor: 'pointer',

        '& > $handleKnob': {
            position: 'relative',

            width: '12px',
            height: '12px',

            borderRadius: '50%',

            transition: 'box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            backgroundColor: theme.inputStyles.inactiveColor,

            '&:hover': {
                boxShadow: `0px 0px 0px 8px ${
                    apply(
                        theme.colorUtilities.toRGBAStyleString,
                        [...theme.colorUtilities.hexToRGBArray(theme.inputStyles.inactiveColor), 0.2]
                    )

                    }`,
            },

            '&.active': {
                boxShadow: `0px 0px 0px 12px ${
                    apply(
                        theme.colorUtilities.toRGBAStyleString,
                        [...theme.colorUtilities.hexToRGBArray(theme.inputStyles.inactiveColor), 0.2]
                    )

                    }`,
            }
        },
    },

    handleKnob: {},
}));

/**
 * Slider handle (knob) component styled according to material-UI guidelines.
 * Component is intended to be used as part of ['Redux-form' Form slider input component](#formsliderinputcomponent).
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function FormSliderHandleComponent(props: PropsTypes) {
    // region private variables declaration
    const active: boolean = defaultTo(false)(props.active);
    const style: CSSStylesType = defaultTo({})(props.style);

    // endregion

    // region style hooks declaration
    const theme = useTheme();
    const classes = useStyles({...props, theme});

    // endregion

    // region context hooks declaration
    const themeContext: ThemContextType = useContext(MainThemeContext);

    // endregion

    // region state hooks declaration
    const [componentContainerWidth, setComponentContainerWidth] = useState(null);

    // endregion

    // region state variables declaration
    const handlePositionXByContainerWidth: number = ifElse(
        any(isNil),
        always(0),
        ([handlePositionX, handleContainerWidth]) => subtract(handlePositionX, divide(handleContainerWidth, 2))
    )([props.value, componentContainerWidth]);


    // endregion

    // region callback hooks declaration
    const componentContainerRef: any = useCallback($node => {
        if (!isNil($node)) {
            const {width} = $node.getBoundingClientRect();

            setComponentContainerWidth(width);
        }
    }, [themeContext.windowDimensions.innerWidth]);

    // endregion

    // region business logic
    // endregion

    // region event handler helpers
    // endregion

    // region render helpers
    // endregion


    const renderHandleKnob = (): Node => {
        const {handleKnob} = classes;
        const className: string = classNames(handleKnob, {active: active});

        return <div
            className={className}
        />;
    };

    const renderComponentContainer = (): Node => {
        const {componentContainer} = classes;

        const preparedStyle = mergeRight({
            left: `${handlePositionXByContainerWidth}px`,
        }, style);

        return <div
            ref={componentContainerRef}

            className={componentContainer}
            style={preparedStyle}
        >
            {renderHandleKnob()}
        </div>;
    };

    // init render
    return renderComponentContainer();
}

// exports
export default FormSliderHandleComponent;
