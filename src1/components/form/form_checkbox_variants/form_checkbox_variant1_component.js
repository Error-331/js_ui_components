'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet, {jss, SheetsRegistry} from 'react-jss';
import classNames from 'classnames';

import {defaultTo} from 'ramda';

// local imports
import type {ThemeType} from '../../../../src/types/theme_types';

import {MainThemeContext} from '../../../../src/theming/providers/main_theme_provider';

// type definitions
type CSSStylesType = {
    [string]: mixed
};

type PropsTypes = {
    styleSheetName?: string,

    /**
     * Flag that dictates whether component should be disabled
     */

    disabled?: ?boolean,

    /**
     * Specifies which form element a label is bound to
     */

    htmlFor?: string,

    /**
     * Style object for check mark background container
     */

    checkMarkBackgroundContainerStyle?: CSSStylesType,

    /**
     * Style object for checked check mark background container
     */

    checkedCheckMarkBackgroundContainerStyle?: CSSStylesType,

    /**
     * Style object for checked and disabled check mark background container
     */

    checkedCheckMarkBackgroundContainerDisabledStyle?: CSSStylesType,

    /**
     * Style object for check mark container
     */

    checkMarkContainerStyle?: CSSStylesType,

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

// $FlowFixMe decorators
@injectSheet(styles, {injectTheme: true})
class FormCheckboxVariant1Class extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'FormCheckboxVariant1Class';

    static defaultProps = {
        disabled: false,
        classes: {},

        checkMarkBackgroundContainerStyle: {},
        checkMarkContainerStyle: {},
        checkedCheckMarkBackgroundContainerStyle: {},
        checkedCheckMarkBackgroundContainerDisabledStyle: {},
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

        let {styleSheetName} = this.props;
        styleSheetName = defaultTo(FormCheckboxVariant1Class.displayName)(styleSheetName);

        styleSheetRegister.addGlobalStyles(newGlobalStyles, styleSheetName);
    }

    // endregion

    // region lifecycle methods
    // endregion

    // region style accessors
    _getCheckedCheckMarkBackgroundContainerDisabledStyle(): CSSStylesType {
        return defaultTo(FormCheckboxVariant1Class.defaultProps.checkedCheckMarkBackgroundContainerDisabledStyle)
        (this.props.checkedCheckMarkBackgroundContainerDisabledStyle);
    }

    _getCheckedCheckMarkBackgroundContainerStyle(): CSSStylesType {
        return defaultTo(FormCheckboxVariant1Class.defaultProps.checkedCheckMarkBackgroundContainerStyle)
        (this.props.checkedCheckMarkBackgroundContainerStyle);
    }

    _getCheckMarkContainerStyle(): CSSStylesType {
        return defaultTo(FormCheckboxVariant1Class.defaultProps.checkMarkContainerStyle)
        (this.props.checkMarkContainerStyle);
    }

    _getCheckMarkBackgroundContainerStyle(): CSSStylesType {
        return defaultTo(FormCheckboxVariant1Class.defaultProps.checkMarkBackgroundContainerStyle)
        (this.props.checkMarkBackgroundContainerStyle);
    }

    _getCheckedCheckMarkBackgroundContainerStyles(): CSSStylesType {
        const {theme} = this.props;

        return Object.assign({}, {
            borderColor: theme.inputStyles.switchSliderActiveBodyBGColor,
            backgroundColor: theme.inputStyles.switchSliderActiveBodyBGColor
        }, this._getCheckedCheckMarkBackgroundContainerStyle());
    }

    _getCheckedCheckMarkContainerStyles(): CSSStylesType {
        return {
            visibility: 'visible'
        };
    }

    _getCheckedCheckMarkBackgroundContainerDisabledStyles(): CSSStylesType {
        const {theme} = this.props;

        return Object.assign({}, {
            borderColor: theme.inputStyles.disabledColor,
            backgroundColor: theme.inputStyles.disabledColor
        }, this._getCheckedCheckMarkBackgroundContainerDisabledStyle());
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
            {'disabled': disabled},
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
        return <div
            className={this._getCheckMarkContainerClasses()}
            style={this._getCheckMarkContainerStyle()}
        >
        </div>;
    }

    _renderCheckMarkBackgroundContainer(): React.Node {
        return <div className={this._getCheckMarkBackgroundContainerClasses()}
                    style={this._getCheckMarkBackgroundContainerStyle()}>
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

function FormCheckboxVariant1Component(props: PropsTypes) {
    return (
        <MainThemeContext.Consumer>
            {windowDimensions => <FormCheckboxVariant1Class {...props} {...windowDimensions} />}
        </MainThemeContext.Consumer>
    );
}

FormCheckboxVariant1Component.displayName = 'FormCheckboxVariant1Component';

// exports
export {FormCheckboxVariant1Class, FormCheckboxVariant1Component};
export default FormCheckboxVariant1Component;
