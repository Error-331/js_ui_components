'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet, {jss, SheetsRegistry} from 'react-jss';
import classNames from 'classnames';

import {always, defaultTo, equals, isNil, ifElse, clone} from 'ramda';

// type definitions
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
     * JSS inner classes
     *
     * @ignore
     */

    classes: any
};

type StateTypes = {};

// styles definition
const checkboxControlLabelWidth = 20; // px
const checkboxControlLabelHeight = 20; // px

const checkboxControlLabelHorizontalSpacing = 4; // px

const checkMarkWidth = checkboxControlLabelWidth - (2 * checkboxControlLabelHorizontalSpacing); // px
const checkMarkHeight = checkMarkWidth / 2; // px

const checkboxControlLabelVerticalSpacing = (checkboxControlLabelHeight / 2) - (checkMarkWidth / 4) - (checkboxControlLabelHeight / 10);

const checkMarkWidthPercentage = (checkMarkWidth * 100) / checkboxControlLabelWidth; // %
const checkMarkHeightPercentage = (checkMarkHeight * 100) / checkboxControlLabelHeight; // %

const checkMarkTopOffsetPercentage = (checkboxControlLabelVerticalSpacing * 100) / checkboxControlLabelHeight; // %
const checkMarkLeftOffsetPercentage = (checkboxControlLabelHorizontalSpacing * 100) / checkboxControlLabelWidth; // %

const styles = theme => ({
    '@global': {
        'input:checked + $componentContainer > $checkMarkBackgroundContainer': {
            borderColor: theme.inputStyles.switchSliderActiveBodyBGColor,
            background: theme.inputStyles.switchSliderActiveBodyBGColor
        },

        'input:checked + $componentContainer > $checkMarkContainer': {
            visibility: 'visible'
        },

        'input:checked + $componentContainer > $checkMarkBackgroundContainer.disabled': {
            borderColor: theme.inputStyles.disabledColor,
            background: theme.inputStyles.disabledColor
        },
    },

    'componentContainer': {
        position: 'relative',
        boxSizing: 'border-box',
        display: 'flex',

        width: `${checkboxControlLabelWidth}px`,
        height: `${checkboxControlLabelHeight}px`,



        '& > $checkMarkBackgroundContainer': {
            position: 'absolute',
            boxSizing: 'border-box',

            width: '100%',
            height: '100%',

            border: `2px solid ${theme.inputStyles.switchSliderInactiveBodyBGColor}`,
            borderRadius: '2px',

            backGroundColor: 'white',
            transition: 'borderColor 0.3s, background 0.3s'
        },

        '& > $checkMarkContainer': {
            position: 'absolute',
            boxSizing: 'border-box',
            visibility: 'hidden',

            top: `${checkMarkTopOffsetPercentage}%`,
            left: `${checkMarkLeftOffsetPercentage}%`,

            width: `${checkMarkWidthPercentage}%`,
            height: `${checkMarkHeightPercentage}%`,

            border: `2px solid ${theme.inputStyles.switchSliderHandleActive}`,
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

    static displayName = 'FormCheckboxVariant1Component';

    constructor(props) {
        super(props);
        this.attachSheet();
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

    //
// https://github.com/cssinjs/react-jss/issues/64
    //https://github.com/cssinjs/jss/blob/master/docs/js-api.md

    attachSheet() {

        /*
                'input:checked + $componentContainer > $checkMarkBackgroundContainer': {
            borderColor: theme.inputStyles.switchSliderActiveBodyBGColor,
            background: theme.inputStyles.switchSliderActiveBodyBGColor
        },
         */

        const sheets = new SheetsRegistry()

        const c = `input:checked + .${this.props.classes.componentContainer} > .${this.props.classes.checkMarkBackgroundContainer}`;
const b = `input:checked + .${this.props.classes.componentContainer} > .${this.props.classes.checkMarkContainer}`;

const a = `input:checked + .${this.props.classes.componentContainer} > .${this.props.classes.checkMarkBackgroundContainer}.disabled`;
        this.sheet = jss.createStyleSheet({
            '@global': {
                [c]: {
                    borderColor: this.props.theme.inputStyles.switchSliderActiveBodyBGColor,
                    background: this.props.theme.inputStyles.switchSliderActiveBodyBGColor
                },
                [b]: {
                    visibility: 'visible'
                },
                [a]: {
                    borderColor: this.props.theme.inputStyles.disabledColor,
                    background: this.props.theme.inputStyles.disabledColor
                }
            }





        }, {

            meta: 'cc-dynamic'
        })

        sheets.add(this.sheet);

          this.sheet.attach();
    }

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
}

// exports
export const FormCheckboxVariant1Component = injectSheet(styles)(FormCheckboxVariant1ComponentClass);