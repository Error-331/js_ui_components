'use strict';

// @flow

// external imports
import type {Node} from 'react';

import React from 'react';
import {createUseStyles, useTheme} from 'react-jss';
import {mergeDeepRight} from 'ramda';

// local imports
import type {ThemeType} from '../../../../src/types/theme_types';
import type {RenderFunctionNoArgsType} from '../../../../src/types/common_types';
import type {BaseRadioButtonInputPropsTypes} from '../../../../src/types/form/form_radio_button_types';

import FormRadioButtonInputBaseComponent from './form_radio_button_input_base_component';
import {stylesFunc} from './form_radio_button_input_variant1_component';

// styles definition
const useStyles = createUseStyles(theme => {
    return mergeDeepRight(
        stylesFunc(theme),
        {
            componentContainer: {
                '& > $radioButtonLabel': {
                    color: theme.inputStyles.alternateInputColor,
                },

                '& > $inputControlLabel': {
                    border: `2px solid ${theme.inputStyles.alternateInputColor}`,

                    '& > $inputControlIcon': {
                        backgroundColor: theme.inputStyles.alternateInputColor,
                    }
                },

            },

            radioButtonLabel: {},

            inputControlLabel: {},
            inputControlIcon: {},
        }
    )
});

/**
 * Radio button input component (variant 2) styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function FormRadioButtonInputVariant2Component(props: BaseRadioButtonInputPropsTypes) {
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
export default FormRadioButtonInputVariant2Component;
