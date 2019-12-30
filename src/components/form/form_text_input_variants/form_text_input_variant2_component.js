'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';

// local imports
import {FormTextInputVariant1Class} from './form_text_input_variant1_component';

// type definitions

// styles definition
const topAdditionalPadding: number = 7;
const iconAdditionalPadding: number = 2;

const styles = theme => ({
    componentContainer: {
        boxSizing: 'border-box',

        position: 'relative',
        display: 'flex',

        flexBasis: 'auto',
        flexShrink: 1,
        flexGrow: 0,

        flexDirection: 'column',
        flexWrap: 'nowrap',

        justifyContent: 'flex-start',
        alignItems: 'stretch',
        alignContent: 'flex-start',

        padding: `${theme.inputStyles.labelActiveFontSize + topAdditionalPadding}px 0px 0px 0px`,

        '& > $inputContainer': {
            boxSizing: 'border-box',
            position: 'relative',

            display: 'flex',

            flexBasis: 'auto',
            flexShrink: '1',
            flexGrow: '0',

            flexDirection: 'column',
            flexWrap: 'nowrap',

            justifyContent: 'flex-start',
            alignItems: 'stretch',
            alignContent: 'flex-start',

            '& > $inputControl': {
                boxSizing: 'border-box',
                overflow: 'hidden',

                flexBasis: `${theme.inputStyles.lineHeight}px`,
                flexShrink: '0',
                flexGrow: '0',

                margin: '0 0 0 0',

                border: 'none',
                borderBottomWidth: '1px',
                borderBottomStyle: 'solid',
                borderBottomColor: theme.inputStyles.alternateInputColor,
                borderRadius: '0',

                padding: '0',

                fontFamily: theme.inputStyles.fontStack,
                fontSize: `${theme.inputStyles.fontSize}px`,

                boxShadow: 'none',
                transition: 'all .3s',

                lineHeight: `${theme.inputStyles.lineHeight}px`,
                backgroundColor: theme.inputStyles.bgColor,

                resize: 'none',
                color: theme.inputStyles.alternateInputColor,

                '&::-webkit-input-placeholder': {
                    color: theme.inputStyles.alternateInputColor,
                },

                '&::-moz-placeholder': {
                    color: theme.inputStyles.alternateInputColor,
                },

                '&::-ms-input-placeholder': {
                    color: theme.inputStyles.alternateInputColor,
                },

                '&:focus': {
                    outline: 'none',

                    borderBottomColor: theme.inputStyles.alternateInputColor,
                    color: theme.inputStyles.alternateInputColor,
                },

                '&.error': {
                    color: theme.inputStyles.attentionColor,
                    borderBottomColor: theme.inputStyles.attentionColor,
                },

                '&.readOnly': {
                    color: theme.inputStyles.alternateInputColor,
                    borderBottomColor: theme.inputStyles.alternateInputColor,
                },

                '&.disabled': {
                    borderBottomStyle: 'dotted',
                    borderBottomColor: theme.inputStyles.alternateInputColor,

                    color: theme.inputStyles.alternateInputColor,
                },
            },

            '& > $inputControlLabel': {
                position: 'absolute',

                top: `${theme.inputStyles.fontSize - theme.inputStyles.labelInactiveFontSize}px`,
                left: '0px',

                fontFamily: theme.inputStyles.fontStack,
                fontSize: `${theme.inputStyles.labelActiveFontSize}px`,

                cursor: 'text',

                transition: '.2s ease-out',

                color: theme.inputStyles.alternateInputColor,

                '&.active': {
                    fontSize: `${theme.inputStyles.labelActiveFontSize}px`,
                    '-webkit-transform': 'translateY(-145%)',
                    transform: 'translateY(-145%)'
                },

                '&.passive': {
                    fontSize: `${theme.inputStyles.labelInactiveFontSize}px`,
                    '-webkit-transform': 'translateY(0%)',
                    transform: 'translateY(0%)'
                },

                '&.focus': {
                    color: theme.inputStyles.alternateInputColor,
                },

                '&.error': {
                    color: theme.inputStyles.attentionColor,
                },

                '&.readOnly': {
                    color: theme.inputStyles.alternateInputColor,
                },

                '&.disabled': {
                    color: theme.inputStyles.alternateInputColor,
                },
            },

            '& > $inputControlLabel:first-letter': {
                textTransform: 'capitalize',
            },

            '& > $inputControlIcon': {
                position: 'absolute',

                left: `calc(100%  - ${theme.inputStyles.iconFontSize + iconAdditionalPadding}px)`,
                bottom: `${theme.inputStyles.lineHeight - theme.inputStyles.iconFontSize}px`,

                transition: 'all .3s',

                fontSize: `${theme.inputStyles.iconFontSize}px`,

                color: theme.inputStyles.alternateInputColor,

                '&.focus': {
                    color: theme.inputStyles.alternateInputColor,
                },

                '&.error': {
                    color: theme.inputStyles.attentionColor
                },

                '&.readOnly': {
                    color: theme.inputStyles.alternateInputColor,
                },

                '&.disabled': {
                    color: theme.inputStyles.alternateInputColor,
                },
            },
        },

        '& > $subMessagesContainer': {
            boxSizing: 'border-box',
            display: 'flex',

            flexBasis: 'auto',
            flexShrink: '1',
            flexGrow: '0',

            flexDirection: 'column',
            flexWrap: 'nowrap',

            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            alignContent: 'flex-start',
        },

        '& > $errorsContainer': {
            color: theme.inputStyles.attentionColor,

            '& > $errorContainer': {
                marginTop: '2px',

                fontFamily: theme.inputStyles.fontStack,
                fontSize: theme.inputStyles.errorFontSize,
            }
        },

        '& > $warningsContainer': {
            color: theme.inputStyles.alternateInputColor,

            '& > $warningContainer': {
                marginTop: '2px',

                fontFamily: theme.inputStyles.fontStack,
                fontSize: theme.inputStyles.errorFontSize,
            },
        },
    },

    inputContainer: {},
    inputControl: {},
    inputControlLabel: {},
    inputControlIcon: {},

    subMessagesContainer: {},

    errorsContainer: {},
    errorContainer: {},

    warningsContainer: {},
    warningContainer: {},
});

/**
 * Text input component (variant 2) styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
const FormTextInputVariant2Component = injectSheet(styles, {injectTheme: true})(FormTextInputVariant1Class);
FormTextInputVariant2Component.displayName = 'FormTextInputVariant2Component';

// exports
export {FormTextInputVariant2Component}
export default FormTextInputVariant2Component;
