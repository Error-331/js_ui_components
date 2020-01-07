'use strict';

// @flow

// external imports
import type {ElementType} from 'react';

import * as React from 'react';
import injectSheet from 'react-jss';

import {isNotNil} from '@webfuturistics/design_components';
import {isNil, defaultTo, clone, unless, map, bind} from 'ramda';

// local imports
import type {ItemType as GridItemType} from './../grid/grid_generator_component';

import type {PropsTypes as ReduxFormTextInputPropsType} from './redux_form_text_input_component';
import type {PropsTypes as ReduxCheckboxInputPropsType} from './redux_form_checkbox_input_component';
import type {PropsTypes as ReduxRadioButtonInputPropsType} from './redux_form_radio_button_input_component';
import type {PropsTypes as ReduxFormDropDownInputPropsType} from './redux_form_drop_down_input_component';
import type {PropsTypes as ReduxFormDateInputPropsType} from './redux_form_date_input_component';

import {MainThemeContext} from './../../theming/providers/main_theme_provider';
import {GridGeneratorComponent} from './../grid/grid_generator_component';

import {ReduxFormTextInputComponent} from './redux_form_text_input_component';
import {ReduxFormCheckboxInputComponent} from './redux_form_checkbox_input_component';
import {ReduxFormRadioButtonInputComponent} from './redux_form_radio_button_input_component';
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
    type?: 'text' | 'textarea' | 'checkbox' | 'radio' | 'dropdown' | 'date',
    name: string,
    hspan?: number,
    vspan?: number,
    children?: React.Node
};

export type RowItemsType = Array<ItemType>;
export type ItemsType = Array<RowItemsType>;

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
        const preparedProps: T = (props: any);
        return clone(preparedProps);
    }

    _prepareTextInputPlaceholder(item: ItemType): string {
        const {props} = item;

        let {label, placeholder} = props;
        return isNil(placeholder) && !isNil(label) ? `${label}...` : placeholder;
    }

    _prepareInputProps<InputPropsType>(item: ItemType): InputPropsType {
        const {name, props} = item;

        let newProps: InputPropsType = this._prepareProps(props);
        return defaultTo({name})(newProps);
    }

    _prepareInputItem<InputPropsType>(elm: ElementType, item: ItemType, extraProps?: InputPropsType): GridItemType {
        const {name, hspan, vspan} = item;
        extraProps = defaultTo({})(extraProps);

        return {
            elm,
            name,
            hspan,
            vspan,
            props: {
                name,
                ...this._prepareInputProps<ReduxFormTextInputPropsType>(item),
                ...extraProps
            }
        };
    }

    _prepareTextLikeInputItem<InputPropsType>(elm: ElementType, item: ItemType, extraProps?: InputPropsType): GridItemType {
        extraProps = defaultTo({})(extraProps);

        return this._prepareInputItem<InputPropsType>(
            elm,
            item,
            {placeholder: this._prepareTextInputPlaceholder(item), ...extraProps}
        );
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
    _prepareItem(item: ItemType): GridItemType | null {
        const {elm, type} = item;

        if (isNotNil(elm)) {
            return item;
        }

        switch(type) {
            case 'text':
                return this._prepareTextLikeInputItem<ReduxFormTextInputPropsType>(ReduxFormTextInputComponent, item);
            case 'textarea':
                return this._prepareTextLikeInputItem<ReduxFormTextInputPropsType>(ReduxFormTextInputComponent, item, {type: 'textarea'});
            case 'checkbox':
                return this._prepareInputItem<ReduxCheckboxInputPropsType>(ReduxFormCheckboxInputComponent, item);
            case 'radio':
                return this._prepareInputItem<ReduxRadioButtonInputPropsType>(ReduxFormRadioButtonInputComponent, item);
            case 'dropdown':
                return this._prepareTextLikeInputItem<ReduxFormDropDownInputPropsType>(ReduxFormDropDownInputComponent, item);
            case 'date':
                return this._prepareTextLikeInputItem<ReduxFormDateInputPropsType>(ReduxFormDateInputComponent, item);
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
        />;
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
export default ReduxFormGeneratorComponent;
