'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet, {jss, SheetsRegistry} from 'react-jss';
import classNames from 'classnames';

// local imports
import type {ThemeType} from './../../../types/theme_types';

// type definitions
type CSSStylesType = {
    [string]: mixed
};

type PropsTypes = {
    /**
     * Flag that dictates whether component should be disabled
     */

    disabled?: ?boolean,

    /**
     * Specifies which form element a label is bound to
     */

    htmlFor?: string,

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
const styles = theme => ({
    'componentContainer': {
        position: 'relative',
        boxSizing: 'border-box',
        display: 'flex',

        width: `${theme.inputStyles.checkboxControlLabelWidth}px`,
        height: `${theme.inputStyles.checkboxControlLabelHeight}px`,

        '& > $checkMarkContainer': {
            position: 'absolute',
            boxSizing: 'border-box',

            top: `0%`,
            left: `0%`,

            width: `100%`,
            height: `50%`,

            border: `${theme.inputStyles.checkMarkLineWidth}px solid ${theme.inputStyles.switchSliderHandleActive}`,
            borderTopStyle: 'none',
            borderRightStyle: 'none',

            opacity: 0,
            transform: 'rotate(-90deg)',

            transition: 'transform 0.3s, opacity 0.3s',

            '&.disabled': {
                borderColor: theme.inputStyles.disabledColor
            }
        },

        '& > $crossMarkContainer': {
            position: 'relative',
            boxSizing: 'border-box',
            
            width: '100%',
            height: '100%',

            opacity: 1,
            transform: 'rotate(-45deg)',

            transition: 'transform 0.3s, opacity 0.3s',

            '& > $crossLineVertical': {
                position: 'absolute',
                boxSizing: 'border-box',

                top: '0%',
                left: `calc(50% - ${theme.inputStyles.checkMarkLineWidth / 2}px)`,

                width: `${theme.inputStyles.checkMarkLineWidth}px`,
                height: '100%',

                backgroundColor: theme.inputStyles.attentionColor,
            },

            '& > $crossLineHorizontal': {
                position: 'relative',
                boxSizing: 'border-box',

                top: `calc(50% - ${theme.inputStyles.checkMarkLineWidth / 2}px)`,
                left: '0%',

                width: '100%',
                height: `${theme.inputStyles.checkMarkLineWidth}px`,

                backgroundColor: theme.inputStyles.attentionColor,
            },

            '&.disabled': {
                '& > $crossLineVertical': {
                    backgroundColor: theme.inputStyles.disabledColor,
                },

                '& > $crossLineHorizontal': {
                    backgroundColor: theme.inputStyles.disabledColor,
                },
            }
        },
    },

    checkMarkContainer: {},

    crossMarkContainer: {},
    crossLineVertical: {},
    crossLineHorizontal: {}
});

/**
 * Checkbox (variant 2) component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
export class FormCheckboxVariant2ComponentClass extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'FormCheckboxVariant2Component';

    static defaultProps = {
        disabled: false,
        classes: {}
    };

    // endregion

    // region constructor
    constructor(props: PropsTypes) {
        super(props);
        this.attachSheet();
    }

    // endregion

    // region business logic
    attachSheet(): void {
        const {classes, theme} = this.props;
        const {componentContainer, checkMarkContainer, crossMarkContainer} = classes;
        const {styleSheetRegister} = theme;

        const checkMarkContainerStylesName: string = `input:checked + .${componentContainer} > .${checkMarkContainer}`;
        const checkCrossContainerStylesName: string = `input:checked + .${componentContainer} > .${crossMarkContainer}`;

        const newGlobalStyles: CSSStylesType = {
            [checkMarkContainerStylesName]: this._getCheckedCheckMarkContainerStyles(),
            [checkCrossContainerStylesName]: this._getCheckedCrossMarkContainerClasses(),
        };

        styleSheetRegister.addGlobalStyles(newGlobalStyles, FormCheckboxVariant2ComponentClass.displayName);
    }

    // endregion

    // region lifecycle methods
    // endregion

    // region style accessors
    _getCheckedCrossMarkContainerClasses(): CSSStylesType {
        return {
            opacity: 0,
            transform: 'rotate(0deg)',
        };
    }

    _getCheckedCheckMarkContainerStyles(): CSSStylesType {
        return {
            opacity: 1,
            transform: 'rotate(-45deg)',
        };
    }

    _getCrossMarkContainerClasses(): string {
        const {disabled}: {disabled: ?boolean} = this.props;

        return classNames(
            this.props.classes.crossMarkContainer,
            {'disabled': disabled}
        );
    }

    _getCheckMarkContainerClasses(): string {
        const {disabled}: {disabled: ?boolean} = this.props;

        return classNames(
            this.props.classes.checkMarkContainer,
            {'disabled': disabled}
        );
    }

    // endregion

    // region label accessors
    // endregion

    // region state accessors
    // endregion

    // region prop accessors
    // endregion

    // region handlers
    // endregion

    // region render methods
    _renderCrossMarkContainer(): React.Node {
        return <div className={this._getCrossMarkContainerClasses()}>
            <div className={this.props.classes.crossLineVertical}/>
            <div className={this.props.classes.crossLineHorizontal}/>
        </div>;
    }

    _renderCheckMarkContainer(): React.Node {
        return <div className={this._getCheckMarkContainerClasses()}>
        </div>;
    }

    _renderComponentContainer(): React.Node {
        return <label htmlFor={this.props.htmlFor} className={this.props.classes.componentContainer}>
            {this._renderCheckMarkContainer()}
            {this._renderCrossMarkContainer()}
        </label>;
    }

    render(): React.Node {
        return this._renderComponentContainer();
    }

    // endregion
}

// exports
export const FormCheckboxVariant2Component = injectSheet(styles)(FormCheckboxVariant2ComponentClass);