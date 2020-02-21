'use strict';

// @flow

// external imports
import type {Node} from 'react';

import React from 'react';
import {createUseStyles, useTheme} from 'react-jss';

// local imports
import type {ThemeType} from './../../../types/theme_types';
import type {RenderFunctionNoArgsType} from './../../../types/common_types';
import type {BasePropTypes} from './form_radio_button_input_base_component';

import FormRadioButtonInputBaseComponent from './form_radio_button_input_base_component';

// styles definition
const stylesFunc = (theme) => ({
    componentContainer: {
        boxSizing: 'border-box',
        display: 'flex',

        flexBasis: 'auto',
        flexGrow: 0,
        flexShrink: 1,

        flexDirection: 'row',
        flexWrap: 'nowrap',

        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'flex-start',

        '& > $radioButtonLabel': {
            boxSizing: 'border-box',

            flexBasis: 'auto',
            flexShrink: 1,
            flexGrow: 0,

            fontFamily: theme.inputStyles.fontStack,
            fontSize: theme.inputStyles.fontSize,

            color: theme.inputStyles.labelColor,

            '&.disabled': {
                color: theme.inputStyles.disabledColor
            }
        },

        '& > $radioButtonLeftLabel': {
            paddingRight: `${theme.inputStyles.switchLabelOffset}px`,
        },

        '& > $radioButtonRightLabel': {
            paddingLeft: `${theme.inputStyles.switchLabelOffset}px`,
        },

        '& > $inputControl': {
            display: 'none',

            '&:checked + $inputControlLabel > $inputControlIcon': {
                transform: 'scale(1)',
            },

            '&:checked + $inputControlLabel.disabled > $inputControlIcon': {
                backgroundColor: theme.inputStyles.disabledColor
            },
        },

        '& > $inputControlLabel': {
            boxSizing: 'border-box',
            display: 'flex',

            flexDirection: 'column',
            flexWrap: 'nowrap',

            justifyContent: 'center',
            alignItems: 'stretch',
            alignContent: 'flex-start',

            width: '20px',
            height: '20px',

            padding: '3px',

            borderRadius: '50%',
            border: `2px solid ${theme.inputStyles.switchSliderActiveBodyBGColor}`,

            cursor: 'pointer',

            '& > $inputControlIcon': {
                flexBasis: 'auto',
                flexShrink: 0,
                flexGrow: 1,

                borderRadius: '50%',

                backgroundColor: theme.inputStyles.switchSliderHandleActive,

                transform: 'scale(0)',

                transition: 'all .3s ease',
                transitionProperty: 'transform, border-color',
            }
        },

        '& > $inputControlLabel.readonly': {
            cursor: 'initial',
        },

        '& > $inputControlLabel.disabled': {
            borderColor: theme.inputStyles.disabledColor,
            cursor: 'initial',
        }
    },

    radioButtonLabel: {},
    radioButtonLeftLabel: {},
    radioButtonRightLabel: {},

    inputControl: {},
    inputControlLabel: {},
    inputControlIcon: {},
});

const useStyles = createUseStyles(stylesFunc);

/**
 * Radio button input component (variant 1) styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function FormRadioButtonInputVariant1Component(props: BasePropTypes) {
    // region private variables declaration
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

    // region business logic
    // endregion

    // region event handler helpers
    // endregion

    // region render helpers
    const render: RenderFunctionNoArgsType = (): Node => {
        return <FormRadioButtonInputBaseComponent {...props} classes={classes}/>
    };

    // endregion

    // init
    return render();
}

// exports
export {stylesFunc};
export default FormRadioButtonInputVariant1Component;
