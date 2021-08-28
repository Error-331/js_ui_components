'use strict';

// @flow

// external imports
import type {Node} from 'react';
import type {FieldProps} from 'redux-form';

import React, {useState, useCallback, useContext} from 'react';
import {createUseStyles, useTheme} from 'react-jss';

import {__, always, identity, isNil, ifElse, defaultTo, any, pipe, mergeRight, apply, subtract, divide, equals} from 'ramda';
import classNames from 'classnames';

// local imports
import type {ThemeType} from '../../../src/types/theme_types';
import type {StateTypes as ThemContextType} from '../../../src/theming/providers';

import {MainThemeContext} from '../../../src/theming/providers';

// type definitions
type CSSStylesType = {
    [string]: mixed
};

export type FormTextInputTypes = {
    /**
     * Flag which is set when user drags the slider handle
     */

    active?: boolean,

    /**
     * Number that indicates which visual variant will be used to represent the text input
     */

    variant?: number,

    /**
     * Flag that dictates whether component should be readable only (handle will be fixed in place and regular mouse pointer will be used)
     */

    readOnly?: boolean,

    /**
     * Flag that dictates whether component should be disabled (handle will be fixed in place, regular mouse pointer will be used
     * and whole component will be grayed)
     */

    disabled?: boolean,

    /**
     * Styles for component container (main outer container) of the form slider handle component
     */

    componentContainerStyles?: CSSStylesType,

    /**
     * Alias of 'componentContainerStyles'
     */

    style?: CSSStylesType,

    /**
     * Styles for knob container
     */

    knobStyle?: CSSStylesType,

    /**
     * Styles for knob container which are applied when user puts mouse cursor over this container
     */

    knobHoverStyle?: CSSStylesType,

    /**
     * Styles for knob container which are applied when user drags the slider handle
     */

    activeKnobStyle?: CSSStylesType,
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
            },

            '&.readonly:hover, &.disabled:hover': {
                boxShadow: 'initial',
            }
        },

        '&.variant1': {
            '& > $handleKnob': {
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

        '&.variant2': {
            '& > $handleKnob': {
                backgroundColor: theme.inputStyles.alternateInputColor,

                '&:hover': {
                    boxShadow: `0px 0px 0px 8px ${
                        apply(
                            theme.colorUtilities.toRGBAStyleString,
                            [...theme.colorUtilities.hexToRGBArray(theme.inputStyles.alternateInputColor), 0.2]
                        )

                        }`,
                },

                '&.active': {
                    boxShadow: `0px 0px 0px 12px ${
                        apply(
                            theme.colorUtilities.toRGBAStyleString,
                            [...theme.colorUtilities.hexToRGBArray(theme.inputStyles.alternateInputColor), 0.2]
                        )

                        }`,
                }
            },
        },

        '&.readonly': {
            cursor: 'initial',
        },

        '&.disabled': {
            cursor: 'initial',

            '& > $handleKnob': {
                backgroundColor: theme.inputStyles.disabledColor,
            }
        }

    },

    handleKnob: {},
}));

/**
 * Slider handle (knob) component styled according to material-UI guidelines.
 * Component is intended to be used as part of ['Redux-form' slider input component](#/UI%20Components/Redux%20form/ReduxFormSliderInputComponent) or
 * [form slider input component](#/UI%20Components/Form/FormSliderInputComponent).
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function FormSliderHandleComponent(props: PropsTypes) {
    // region private variables declaration
    const readOnly: boolean = defaultTo(false, props.readOnly);
    const disabled: boolean = defaultTo(false, props.disabled);
    const handleVariant: number = defaultTo(1, props.variant);

    const active: boolean = defaultTo(false)(props.active);
    const style: CSSStylesType = defaultTo({})(props.style);

    const knobStyle: CSSStylesType = defaultTo({})(props.knobStyle);
    const knobHoverStyle: CSSStylesType = defaultTo({})(props.knobHoverStyle);
    const activeKnobStyle: CSSStylesType = defaultTo({}, props.activeKnobStyle);

    // endregion

    // region style hooks declaration
    const theme: ThemeType = useTheme();
    const classes: {[string]: string} = useStyles({...props, theme});

    // endregion

    // region context hooks declaration
    const themeContext: ThemContextType = useContext(MainThemeContext);

    // endregion

    // region state hooks declaration
    const [componentContainerWidth, setComponentContainerWidth] = useState(null);
    const [isOver, setIsOver] = useState(false);

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
    const handleMouseOverHandler = (): void => setIsOver(true);
    const handleMouseLeaveHandler = (): void => setIsOver(false);

    // endregion

    // region render helpers
    const renderHandleKnob = (): Node => {
        const {handleKnob} = classes;
        const className: string = classNames(handleKnob, {
            active: active,
            readonly: equals(readOnly, true),
            disabled: equals(disabled, true),
        });

        const style: CSSStylesType = pipe(
            mergeRight(__, knobStyle),
            isOver ? mergeRight(__,  knobHoverStyle) : identity,
            active ? mergeRight(__,  activeKnobStyle) : identity,
        )({});

        return <div
            className={className}
            style={style}
        />;
    };

    const renderComponentContainer = (): Node => {
        const {componentContainer} = classes;
        const className: string = classNames(componentContainer,
            equals(disabled, true) ?
                {
                    disabled
                }

                :

                {
                    variant1: equals(handleVariant, 1),
                    variant2: equals(handleVariant, 2),
                    readonly: equals(readOnly, true),
                }
        );

        const preparedStyle = mergeRight({
            left: `${handlePositionXByContainerWidth}px`,
        }, style);

        return <div
            ref={componentContainerRef}

            onMouseOver={handleMouseOverHandler}
            onMouseLeave={handleMouseLeaveHandler}

            className={className}
            style={preparedStyle}
        >
            {renderHandleKnob()}
        </div>;
    };

    // endregion

    // init
    return renderComponentContainer();
}

// exports
export default FormSliderHandleComponent;
