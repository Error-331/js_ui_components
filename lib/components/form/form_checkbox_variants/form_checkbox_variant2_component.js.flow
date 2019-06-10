'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet, {jss, SheetsRegistry} from 'react-jss';

import {defaultTo} from 'ramda';

// local imports
import type {ThemeType} from './../../../types/theme_types';

import {FormCheckboxVariant1Component} from './form_checkbox_variant1_component';
import {MainThemeContext} from './../../../theming/providers/main_theme_provider';

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
const styles = theme => ({});

/**
 * Checkbox (variant 2) component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation

// $FlowFixMe decorators
@injectSheet(styles)
class FormCheckboxVariant2Class extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'FormCheckboxVariant2Class';

    static defaultProps = {
        disabled: false,
    };

    // endregion

    // region constructor
    // endregion

    // region business logic
    // endregion

    // region lifecycle methods
    // endregion

    // region style accessors
    _getCheckMarkContainerStyle(): CSSStylesType {
        return {
            borderColor: this.props.theme.inputStyles.alternateInputColor
        };
    }

    _getCheckedCheckMarkBackgroundContainerStyle(): CSSStylesType {
        return {
            backgroundColor: this.props.theme.inputStyles.bgColor
        };
    }

    _getCheckMarkBackgroundContainerStyle(): CSSStylesType {
        return {
            borderColor: this._isDisabled() ?
                this.props.theme.inputStyles.disabledColor :
                this.props.theme.inputStyles.alternateInputColor
        };
    }

    // endregion

    // region label accessors
    // endregion

    // region state accessors
    // endregion

    // region prop accessors
    _isDisabled(): boolean {
        return defaultTo(FormCheckboxVariant2Class.defaultProps.disabled)
        (this.props.disabled);
    }

    // endregion

    // region handlers
    // endregion

    // region render methods
    render(): React.Node {
        return <FormCheckboxVariant1Component
            styleSheetName={FormCheckboxVariant2Class.displayName}
            disabled={this.props.disabled}
            htmlFor={this.props.htmlFor}

            checkMarkBackgroundContainerStyle={this._getCheckMarkBackgroundContainerStyle()}
            checkedCheckMarkBackgroundContainerStyle={this._getCheckedCheckMarkBackgroundContainerStyle()}
            checkMarkContainerStyle={this._getCheckMarkContainerStyle()}
        />;
    }

    // endregion
}

function FormCheckboxVariant2Component(props: PropsTypes) {
    return (
        <MainThemeContext.Consumer>
            {windowDimensions => <FormCheckboxVariant2Class {...props} {...windowDimensions} />}
        </MainThemeContext.Consumer>
    );
}

FormCheckboxVariant2Component.displayName = 'FormCheckboxVariant2Component';

// exports
export {FormCheckboxVariant2Class, FormCheckboxVariant2Component};
export default FormCheckboxVariant2Component;