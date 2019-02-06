'use strict';

// @flow

// external imports
import type {ElementType} from 'react';
import type {NestedArray} from 'ramda';

import * as React from 'react';
import injectSheet from 'react-jss';

import {isNotNil} from '@webfuturistics/design_components';
import {isNil, defaultTo, unless, map, bind} from 'ramda';

// local imports
import type {ItemType as GridItemType} from './../grid/grid_generator_component';

import type {PropsTypes as ReduxFormTextInputPropsType} from './redux_form_text_input_component';
import type {PropsTypes as ReduxCheckboxInputPropsType} from './redux_form_checkbox_input_component';
import type {PropsTypes as ReduxFormDropDownInputPropsType} from './redux_form_drop_down_input_component';
import type {PropsTypes as ReduxFormDateInputPropsType} from './redux_form_date_input_component';

import {MainThemeContext} from './../../theming/providers/main_theme_provider';
import {GridGeneratorComponent} from './../grid/grid_generator_component';

import {ReduxFormTextInputComponent} from './redux_form_text_input_component';
import {ReduxFormCheckboxInputComponent} from './redux_form_checkbox_input_component';
import {ReduxFormDropDownInputComponent} from './redux_form_drop_down_input_component';
import {ReduxFormDateInputComponent} from './redux_form_date_input_component';

// type definitions
type CSSStylesType = {
    [string]: mixed
};

export type PropsType = ReduxFormTextInputPropsType |
                   ReduxCheckboxInputPropsType |
                   ReduxFormDropDownInputPropsType |
                   ReduxFormDateInputPropsType;

export type ItemType = {
    elm?: ElementType,
    props: PropsType,
    type?: 'text' | 'checkbox',
    name: string,
    span?: number,
    children?: React.Node
};

export type ItemsType = NestedArray<ItemType>;

export type PropsTypes = {
    /**
     * Form items specifications
     */

    items?: ItemsType,

    /**
     * Size of the leftmost column ('1f', 'max-content', etc)
     */

    leftmostColSize?: string,

    /**
     * Size of the rightmost column ('1f', 'max-content', etc)
     */

    rightmostColSize?: string,

    /**
     * React style object for in deep control of how form container is represented
     */

    style?: {[string]: mixed},

    /**
     * Name of the class which will be applied to form container along with default one
     */

    className?: string,

    /**
     * JSS inner classes
     *
     * @ignore
     */

    classes: any,
}

export type StateTypes = {};

// styles definition
const styles = theme => ({});

/**
 * Form generator.
 * Component accepts form specification and returns a container with nested Redux-form elements aligned using CSS Grid.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation

// $FlowFixMe decorators
@injectSheet(styles)
class ReduxFormGeneratorClass extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'ReduxFormGeneratorClass';

    static defaultProps = {
        items: null,

        leftmostColSize: '1fr',
        rightmostColSize: '1fr',
    };

    // endregion

    // region private props
    // endregion

    // region constructor
    // endregion

    // region business logic
    _prepareProps<T>(props: PropsType): T {
        const preparedProps: T = (props:  any);
        return preparedProps
    }

    // endregion

    // region lifecycle methods
    // endregion

    // region style accessors
    _getComponentClassName(): string {
        return defaultTo('')(this.props.className);
    }

    _getComponentStyle(): CSSStylesType {
        return defaultTo({})(this.props.style);
    }

    // endregion

    // region label accessors
    // endregion

    // region state accessors
    // endregion

    // region prop accessors
    _getRightmostColSize(): string {
        return defaultTo(ReduxFormGeneratorClass.defaultProps.rightmostColSize)(this.props.rightmostColSize);
    }

    _getLeftmostColSize(): string {
        return defaultTo(ReduxFormGeneratorClass.defaultProps.leftmostColSize)(this.props.leftmostColSize);
    }

    _getItems(): ItemsType | null {
        return defaultTo(ReduxFormGeneratorClass.defaultProps.items)(this.props.items);
    }

    // endregion

    // region handlers
    // endregion

    // region render methods
    _prepareDateInputItem(item: ItemType): GridItemType {
        const {name, span, props} = item;

        let newProps: ReduxFormDateInputPropsType = this._prepareProps(props);
        newProps = defaultTo({name})(newProps);

        let {label, placeholder} = newProps;
        placeholder = isNil(placeholder) && !isNil(label) ? `${label}...` : placeholder;

        return {
            elm: ReduxFormDateInputComponent,
            name,
            span,
            props: {name, ...props, placeholder}
        }
    }

    _prepareDropDownInputItem(item: ItemType): GridItemType {
        const {name, span, props} = item;

        let newProps: ReduxFormDropDownInputPropsType = this._prepareProps(props);
        newProps = defaultTo({name, options: {}})(newProps);

        let {label, placeholder} = newProps;
        placeholder = isNil(placeholder) && !isNil(label) ? `${label}...` : placeholder;

        return {
            elm: ReduxFormDropDownInputComponent,
            name,
            span,
            props: {name, ...newProps, placeholder}
        }
    }

    _prepareCheckboxInputItem(item: ItemType): GridItemType {
        const {name, span, props} = item;

        let newProps: ReduxCheckboxInputPropsType = this._prepareProps(props);
        newProps = defaultTo({name})(newProps);

        return {
            elm: ReduxFormCheckboxInputComponent,
            name,
            span,
            props: {name, ...newProps},
        }
    }

    _prepareTextInputItem(item: ItemType): GridItemType {
        const {name, span, props} = item;

        let newProps: ReduxFormTextInputPropsType = this._prepareProps(props);
        newProps = defaultTo({name})(newProps);

        let {label, placeholder} = newProps;
        placeholder = isNil(placeholder) && !isNil(label) ? `${label}...` : placeholder;

        return {
            elm: ReduxFormTextInputComponent,
            name,
            span,
            props: {name, ...newProps, placeholder},
        }
    }

    _prepareItem(item: ItemType): GridItemType | null {
        const {elm, type} = item;

        if (isNotNil(elm)) {
            return item;
        }

        switch(type) {
            case 'text':
                return this._prepareTextInputItem(item);
            case 'checkbox':
                return this._prepareCheckboxInputItem(item);
            case 'dropdown':
                return this._prepareDropDownInputItem(item);
            case 'date':
                return this._prepareDateInputItem(item);
            default:
                return null;
        }
    }
    _prepareItems(): ItemsType {
        const items: ItemsType | null = this._getItems();

        return unless(isNil, map((rows: Array<ItemType>) => map(bind(this._prepareItem, this), rows)))(items);
    }

    render(): React.Node {
        return <GridGeneratorComponent
            items={this._prepareItems()}

            className={this._getComponentClassName()}
            style={this._getComponentStyle()}

            leftmostColSize={this._getLeftmostColSize()}
            rightmostColSize={this._getRightmostColSize()}
        />
    }

    // endregion
}

function ReduxFormGeneratorComponent(props: PropsTypes) {
    return (
        <MainThemeContext.Consumer>
            {windowDimensions => <ReduxFormGeneratorClass {...props} {...windowDimensions} />}
        </MainThemeContext.Consumer>
    );
}

ReduxFormGeneratorComponent.displayName = 'ReduxFormGeneratorComponent';

// exports
export {ReduxFormGeneratorClass, ReduxFormGeneratorComponent};