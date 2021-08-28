'use strict';

// @flow

// external imports
import type {ElementType, Node} from 'react';

import * as React from 'react';
import injectSheet from 'react-jss';

import {isNotNil} from '@webfuturistics/design_components';
import {isNil, defaultTo, clone, mergeDeepRight, unless, addIndex, map, bind, toLower} from 'ramda';

// local imports
import type {ItemType as GridItemType} from '../grid/grid_generator_component';

import type {PropsTypes as ReduxFormTextInputPropsType} from './redux_form_text_input_component';
import type {PropsTypes as ReduxCheckboxInputPropsType} from './redux_form_checkbox_input_component';
import type {PropsTypes as ReduxRadioButtonInputPropsType} from './redux_form_radio_button_input_component';
import type {PropsTypes as ReduxFormDropDownInputPropsType} from './redux_form_drop_down_input_component';
import type {PropsTypes as ReduxFormDateInputPropsType} from './redux_form_date_input_component';
import type {PropsTypes as ReduxFormSliderInputPropsType} from './redux_form_slider_input_component'
import type {PropsTypes as ReduxFormTagInputSeparatePropsType} from './redux_form_tag_input_separate_component'

import type {PropsTypes as ElementsGroupPropsType} from '../layout/alignment/elements/elements_group';

import {MainThemeContext} from '../../../src/theming/providers/main_theme_provider';
import {GridGeneratorComponent} from '../grid/grid_generator_component';
import ElementsGroup from '../layout/alignment/elements/elements_group';

import {ReduxFormTextInputComponent} from './redux_form_text_input_component';
import {ReduxFormCheckboxInputComponent} from './redux_form_checkbox_input_component';
import {ReduxFormRadioButtonInputComponent} from './redux_form_radio_button_input_component';
import {ReduxFormDropDownInputComponent} from './redux_form_drop_down_input_component';
import {ReduxFormDateInputComponent} from './redux_form_date_input_component';
import ReduxFormSliderInputComponent from './redux_form_slider_input_component';
import ReduxFormTagInputSeparateComponent from './redux_form_tag_input_separate_component';

// type definitions
type CSSStylesType = {
    [string]: mixed
};

export type PropsType = ReduxFormTextInputPropsType |
                   ReduxCheckboxInputPropsType |
                   ReduxRadioButtonInputPropsType |
                   ReduxFormDropDownInputPropsType |
                   ReduxFormDateInputPropsType |
                   ReduxFormSliderInputPropsType |
                   ReduxFormTagInputSeparatePropsType |
                   ElementsGroupPropsType;

export type MiscElementPropsType = {[any]: any};
export type MiscElementsProps = Array<MiscElementPropsType>;

export type ItemType = {
    elm?: ElementType,
    props: PropsType,
    type?: 'text' | 'textarea' | 'checkbox' | 'radio' | 'dropdown' | 'date' | 'slider' | 'tag_separate' | 'radio_row' | 'radio_column',
    name: string,
    hspan?: number,
    vspan?: number,
    childrenProps?: MiscElementsProps,
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
        let {props} = item;
        props = defaultTo({}, props);

        let {label, placeholder} = props;

        return isNil(placeholder) && !isNil(label) ? `${label}...` : placeholder;
    }

    _prepareInputProps<InputPropsType>(item: ItemType): InputPropsType {
        const {name, props} = item;

        let newProps: InputPropsType = this._prepareProps(props);
        return defaultTo({name})(newProps);
    }

    _prepareInputName(item: ItemType | MiscElementPropsType, rowId: number, columnId: number): string {
        const {name} = item;
        return`${name}_${rowId}_${columnId}`;
    }

    _prepareBlockItem<InputPropsType>(
        elm: ElementType,
        item: ItemType,
        rowId: number,
        columnId: number,
        extraProps?: InputPropsType,
        children?: React.Node,
    ): GridItemType {
        const {hspan, vspan} = item;
        extraProps = defaultTo({})(extraProps);

        return {
            elm,
            hspan,
            vspan,
            props: extraProps,
            children,
        };
    }

    _prepareInputItem<InputPropsType>(
        elm: ElementType,
        item: ItemType,
        rowId: number,
        columnId: number,
        extraProps?: InputPropsType
    ): GridItemType {
        const {name, hspan, vspan} = item;
        extraProps = defaultTo({})(extraProps);
        const elementName: string = this._prepareInputName(item, rowId, columnId);

        return {
            elm,
            elementName,
            hspan,
            vspan,
            props: {
                name,
                ...this._prepareInputProps<ReduxFormTextInputPropsType>(item),
                ...extraProps
            }
        };
    }

    _prepareTextLikeInputItem<InputPropsType>(
        elm: ElementType,
        item: ItemType,
        rowId: number,
        columnId: number,
        extraProps?: InputPropsType
    ): GridItemType {
        extraProps = defaultTo({})(extraProps);

        return this._prepareInputItem<InputPropsType>(
            elm,
            item,
            rowId,
            columnId,
            {placeholder: this._prepareTextInputPlaceholder(item), ...extraProps}
        );
    }

    _prepareRadioGroup(
        elm: ElementType,
        item: ItemType,
        rowId: number,
        columnId: number,
        extraProps?: ElementsGroupPropsType,
        childrenProps?: MiscElementsProps,
    ): GridItemType {
        extraProps = defaultTo({direction: 'column'})(extraProps);
        childrenProps = defaultTo([])(childrenProps);
        const children: Node = addIndex(map)((childProps: MiscElementPropsType, childIndex: number) => {
            const elementName: string = this._prepareInputName(childProps, rowId, columnId);

            return <ReduxFormRadioButtonInputComponent
                {...childProps}
                name={elementName}

                key={`radio_${childIndex}`}
            />
        }, childrenProps);

        const alignStyle: {[string]: string} = toLower(extraProps.direction) === 'column' ? {alignSelf: 'start'} : {alignSelf: 'center'};
        const newExtraProps: InputPropsType = mergeDeepRight({style: alignStyle}, extraProps);

        return this._prepareBlockItem(ElementsGroup, item, rowId, columnId, newExtraProps, children)
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
    _prepareItem(item: ItemType, rowId: number, columnId: number): GridItemType | null {
        const {elm, type, childrenProps} = item;

        if (isNotNil(elm)) {
            return item;
        }

        switch(type) {
            case 'text':
                return this._prepareTextLikeInputItem<ReduxFormTextInputPropsType>(ReduxFormTextInputComponent, item, rowId, columnId);
            case 'textarea':
                return this._prepareTextLikeInputItem<ReduxFormTextInputPropsType>(ReduxFormTextInputComponent, item, rowId, columnId, {type: 'textarea'});
            case 'dropdown':
                return this._prepareTextLikeInputItem<ReduxFormDropDownInputPropsType>(ReduxFormDropDownInputComponent, item, rowId, columnId);
            case 'date':
                return this._prepareTextLikeInputItem<ReduxFormDateInputPropsType>(ReduxFormDateInputComponent, item, rowId, columnId);
            case 'tag_separate':
                return this._prepareTextLikeInputItem<ReduxFormTagInputSeparatePropsType>(ReduxFormTagInputSeparateComponent, item, rowId, columnId);
            case 'checkbox':
                return this._prepareInputItem<ReduxCheckboxInputPropsType>(ReduxFormCheckboxInputComponent, item, rowId, columnId);
            case 'radio':
                return this._prepareInputItem<ReduxRadioButtonInputPropsType>(ReduxFormRadioButtonInputComponent, item, rowId, columnId);
            case 'slider':
                return this._prepareInputItem<ReduxFormSliderInputPropsType>(ReduxFormSliderInputComponent, item, rowId, columnId);
            case 'radio_row':
                return this._prepareRadioGroup(ElementsGroup, item, rowId, columnId, {direction: 'row'}, childrenProps);
            case 'radio_column':
                return this._prepareRadioGroup(ElementsGroup, item, rowId, columnId, {direction: 'column'}, childrenProps);
            default:
                return null;
        }
    }
    _prepareItems(): ItemsType {
        const items: ItemsType | null = this._getItems();

        return unless(
            isNil,
            addIndex(map)(
                (rows: Array<ItemType>, rowId: number) => addIndex(map)(
                    (column: ItemType, columnId: number) => bind(this._prepareItem, this)(column, rowId, columnId),
                    rows,
                ),
            ),
        )(items);
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
