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
    },
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
    // endregion

    // business logic
    // endregion

    // region lifecycle methods
    // endregion

    // region style accessors
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
    _renderComponentContainer(): React.Node {
        return <label htmlFor={this.props.htmlFor} className={this.props.classes.componentContainer}>

        </label>;
    }

    render(): React.Node {
        return this._renderComponentContainer();
    }

    // endregion
}

// exports
export const FormCheckboxVariant2Component = injectSheet(styles)(FormCheckboxVariant2ComponentClass);