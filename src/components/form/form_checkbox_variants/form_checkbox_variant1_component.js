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

        '& > $checkMarkBackgroundContainer': {
            position: 'absolute',
            boxSizing: 'border-box',

            width: '100%',
            height: '100%',

            border: `${theme.inputStyles.checkMarkLineWidth}px solid ${theme.inputStyles.switchSliderInactiveBodyBGColor}`,
            borderRadius: '2px',

            backGroundColor: 'white',
            transition: 'borderColor 0.3s, background 0.3s'
        },

        '& > $checkMarkContainer': {
            position: 'absolute',
            boxSizing: 'border-box',
            visibility: 'hidden',

            top: `${theme.inputStyles.checkMarkTopOffsetPercentage}%`,
            left: `${theme.inputStyles.checkMarkLeftOffsetPercentage}%`,

            width: `${theme.inputStyles.checkMarkWidthPercentage}%`,
            height: `${theme.inputStyles.checkMarkHeightPercentage}%`,

            border: `${theme.inputStyles.checkMarkLineWidth}px solid ${theme.inputStyles.switchSliderHandleActive}`,
            borderTopStyle: 'none',
            borderRightStyle: 'none',

            transform: 'rotate(-45deg)',

            '&.disabled': {
                borderColor: theme.inputStyles.switchSliderHandleInactive
            }
        },
    },

    checkMarkBackgroundContainer: {},
    checkMarkContainer: {}
});

/**
 * Checkbox (variant 1) component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
export class FormCheckboxVariant1ComponentClass extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'FormCheckboxVariant1Component';

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
        const {componentContainer, checkMarkBackgroundContainer, checkMarkContainer} = classes;
        const {styleSheetRegister} = theme;

        const checkMarkBackgroundContainerStylesName: string = `input:checked + .${componentContainer} > .${checkMarkBackgroundContainer}`;
        const checkMarkContainerStylesName: string = `input:checked + .${componentContainer} > .${checkMarkContainer}`;
        const checkMarkBackgroundContainerDisabledStylesName: string = `input:checked + .${componentContainer} > .${checkMarkBackgroundContainer}.disabled`;

        const newGlobalStyles: CSSStylesType = {
            [checkMarkBackgroundContainerStylesName]: this._getCheckedCheckMarkBackgroundContainerStyles(),
            [checkMarkContainerStylesName]: this._getCheckedCheckMarkContainerStyles(),
            [checkMarkBackgroundContainerDisabledStylesName]: this._getCheckedCheckMarkBackgroundContainerDisabledStyles(),
        };

        styleSheetRegister.addGlobalStyles(newGlobalStyles, FormCheckboxVariant1ComponentClass.displayName);
    }

    // endregion

    // region lifecycle methods
    // endregion

    // region style accessors
    _getCheckedCheckMarkBackgroundContainerStyles(): CSSStylesType {
        const {theme} = this.props;

        return {
            borderColor: theme.inputStyles.switchSliderActiveBodyBGColor,
            background: theme.inputStyles.switchSliderActiveBodyBGColor
        };
    }

    _getCheckedCheckMarkContainerStyles(): CSSStylesType {
        return {
            visibility: 'visible'
        };
    }

    _getCheckedCheckMarkBackgroundContainerDisabledStyles(): CSSStylesType {
        const {theme} = this.props;

        return {
            borderColor: theme.inputStyles.disabledColor,
            background: theme.inputStyles.disabledColor
        };
    }

    _getCheckMarkBackgroundContainerClasses(): string {
        const {disabled}: {disabled: ?boolean} = this.props;

        return classNames(
            this.props.classes.checkMarkBackgroundContainer,
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
    _renderCheckMarkContainer(): React.Node {
        return <div className={this._getCheckMarkContainerClasses()}>
        </div>;
    }

    _renderCheckMarkBackgroundContainer(): React.Node {
        return <div className={this._getCheckMarkBackgroundContainerClasses()}>
        </div>;
    }

    _renderComponentContainer(): React.Node {
        return <label htmlFor={this.props.htmlFor} className={this.props.classes.componentContainer}>
            {this._renderCheckMarkBackgroundContainer()}
            {this._renderCheckMarkContainer()}
        </label>;
    }

    render(): React.Node {
        return this._renderComponentContainer();
    }

    // endregion
}

// exports
export const FormCheckboxVariant1Component = injectSheet(styles)(FormCheckboxVariant1ComponentClass);