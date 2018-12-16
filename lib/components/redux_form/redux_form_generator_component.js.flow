'use strict';

// @flow

// external imports
import type {NestedArray} from 'ramda';

import * as React from 'react';
import injectSheet from 'react-jss';

import {
    isNil,
    lt,
    max,
    defaultTo,
    identity,
    ifElse,
    bind,
    add,
    subtract,
    addIndex,
    length,
    flatten,
    concat,
    repeat,
    reduce,
    map
} from 'ramda';

// local imports
import type {PropsTypes as ReduxFormTextInputPropsType} from './redux_form_text_input_component';
import type {PropsTypes as ReduxCheckboxInputPropsType} from './redux_form_checkbox_input_component';
import type {PropsTypes as ReduxFormDropDownInputPropsType} from './redux_form_drop_down_input_component';
import type {PropsTypes as ReduxFormDateInputPropsType} from './redux_form_date_input_component';

import {MainThemeContext} from './../../theming/providers/main_theme_provider';

import {ReduxFormTextInputComponent} from './redux_form_text_input_component';
import {ReduxFormCheckboxInputComponent} from './redux_form_checkbox_input_component';
import {ReduxFormDropDownInputComponent} from './redux_form_drop_down_input_component';
import {ReduxFormDateInputComponent} from './redux_form_date_input_component';

// type definitions
type CSSStylesType = {
    [string]: mixed
};

type OptionsType = ReduxFormTextInputPropsType |
                   ReduxCheckboxInputPropsType |
                   ReduxFormDropDownInputPropsType |
                   ReduxFormDateInputPropsType;

type ItemType = {
    type: 'text' | 'checkbox',
    span?: number,
    name: string,

    options: OptionsType
};

type ItemsType = NestedArray<ItemType>;

type PropsTypes = {
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
     * JSS inner classes
     *
     * @ignore
     */

    classes: any,
}

type StateTypes = {};

// constants definition
const ITEM_NAME_POSTFIX: string = '_item';

// styles definition
const styles = theme => ({
    componentContainer: {
        boxSizing: 'border-box',
        display: 'grid',

        alignItems: 'end',

        gridColumnGap: `${theme.layoutStyles.sectionVerticalSpacing}px`,
        gridRowGap: `${theme.layoutStyles.sectionHorizontalSpacing}px`,
    }
});

/**
 * Form generator.
 * Component accepts form specification and returns a container with nested Redux elements aligned using CSS Grid.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation

// $FlowFixMe decorators
@injectSheet(styles)
export class ReduxFormGeneratorClass extends React.Component<PropsTypes, StateTypes> {
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
    _prepareOptions<T>(options: OptionsType): T {
        const preparedOptions: T = (options:  any);
        return preparedOptions
    }

    _getGridName(name: string): string {
        return `${name}${ITEM_NAME_POSTFIX}`;
    }

    _getGridSpan(span?: number): number {
        return defaultTo(1)(span);
    }

    _calcColumnsCount(items: ItemsType): number {
        return reduce((columnCount: number, itemsRow: NestedArray<ItemType>) => {
            return max(columnCount, reduce(
                (localColumnCount: number, item: ItemType) => add(localColumnCount, this._getGridSpan(item.span)), 0, itemsRow)
            )
        }, 0, items);
    }

    _prepareGridColumnString(items: Array<ItemType>, columnsCount: number): string {
        const columnStrings = reduce((gridColumnStrings: Array<string>, item: ItemType) => {
            return concat(gridColumnStrings, repeat(this._getGridName(item.name), this._getGridSpan(item.span)));
        }, [], items);

        const columnStringsLength: number = length(columnStrings);

        return ifElse(
            () => lt(columnStringsLength, columnsCount),
            strings => concat(strings, repeat('.', subtract(columnsCount, columnStringsLength))),
            identity,
        )(columnStrings).join(' ');
    }

    // endregion

    // region lifecycle methods
    // endregion

    // region style accessors
    _getComponentContainerClassName(): string {
        return this.props.classes.componentContainer;
    }

    _getComponentContainerStyle(): CSSStylesType {
        const items: ItemsType | null =  this._getItems();

        if (isNil(items)) {
            return {};
        }

        const columnsCount: number = this._calcColumnsCount(items);
        const gridTemplateAreas: string = reduce((templateAreas: string, itemsRow: Array<ItemType>) => {
            const columnString: string = this._prepareGridColumnString(itemsRow, columnsCount);

            return concat(templateAreas, `"${columnString}" `);
        }, '', items);

        let gridTemplateColumns: Array<string> = repeat('1fr', columnsCount);

        gridTemplateColumns[0] = this._getLeftmostColSize();
        gridTemplateColumns[gridTemplateColumns.length - 1] = this._getRightmostColSize();

        const rowsCount: number = items.length;

        return {
            gridTemplateAreas,
            gridTemplateColumns: gridTemplateColumns.join(' '),
            gridTemplateRows: `repeat(${rowsCount}, max-content)`,
        };
    }

    _getItemStyle(name: string): CSSStylesType {
        return {
            boxSizing: 'border-box',
            gridArea: this._getGridName(name),
        };
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
    _renderDateInputItem(name: string, index: number, options?: ReduxFormDateInputPropsType): React.Node {
        options = defaultTo({name})(options);
        let {componentContainerStyles, label, placeholder} = options;

        componentContainerStyles = defaultTo({})(componentContainerStyles);
        placeholder = isNil(placeholder) && !isNil(label) ? `${label}...` : placeholder;

        let composedComponentContainerStyles: CSSStylesType = defaultTo({})(componentContainerStyles);
        composedComponentContainerStyles = Object.assign({}, composedComponentContainerStyles, this._getItemStyle(name));

        return <ReduxFormDateInputComponent
            {...options}
            name={name}
            label={label}
            placeholder={placeholder}
            componentContainerStyles={composedComponentContainerStyles}
            key={`item_${index}`}
        />;
    }

    _renderDropDownInputItem(name: string, index: number, options?: ReduxFormDropDownInputPropsType): React.Node {
        options = defaultTo({name, options: {}})(options);
        let {componentContainerStyles, label, placeholder} = options;

        componentContainerStyles = defaultTo({})(componentContainerStyles);
        placeholder = isNil(placeholder) && !isNil(label) ? `${label}...` : placeholder;

        let composedComponentContainerStyles: CSSStylesType = defaultTo({})(componentContainerStyles);
        composedComponentContainerStyles = Object.assign({}, composedComponentContainerStyles, this._getItemStyle(name));

        return <ReduxFormDropDownInputComponent
            {...options}
            name={name}
            label={label}
            placeholder={placeholder}
            componentContainerStyles={composedComponentContainerStyles}
            key={`item_${index}`}
        />;
    }

    _renderCheckboxInputItem(name: string, index: number, options?: ReduxCheckboxInputPropsType): React.Node {
        options = defaultTo({name})(options);
        let {componentContainerStyles} = options;

        let composedComponentContainerStyles: CSSStylesType = defaultTo({})(componentContainerStyles);
        composedComponentContainerStyles = Object.assign({}, composedComponentContainerStyles, this._getItemStyle(name));

        return <ReduxFormCheckboxInputComponent
            {...options}
            name={name}
            componentContainerStyles={composedComponentContainerStyles}
            key={`item_${index}`}
        />;
    }

    _renderTextInputItem(name: string, index: number, options: ReduxFormTextInputPropsType): React.Node {
        options = defaultTo({name})(options);
        let {componentContainerStyles, label, placeholder} = options;

        componentContainerStyles = defaultTo({})(componentContainerStyles);
        placeholder = isNil(placeholder) && !isNil(label) ? `${label}...` : placeholder;

        let composedComponentContainerStyles: CSSStylesType = defaultTo({})(componentContainerStyles);
        composedComponentContainerStyles = Object.assign({}, composedComponentContainerStyles, this._getItemStyle(name));

        return <ReduxFormTextInputComponent
            {...options}
            name={name}
            label={label}
            placeholder={placeholder}
            componentContainerStyles={composedComponentContainerStyles}
            key={`item_${index}`}
        />;
    }

    _renderItem(item: ItemType, index: number): React.Node {
        const {name, type, options} = item;

        switch(type) {
            case 'text':
                return this._renderTextInputItem(name, index, this._prepareOptions(options));
            case 'checkbox':
                return this._renderCheckboxInputItem(name, index, this._prepareOptions(options));
            case 'dropdown':
                return this._renderDropDownInputItem(name, index, this._prepareOptions(options));
            case 'date':
                return this._renderDateInputItem(name, index, this._prepareOptions(options));
            default:
                return null;
        }
    }

    _renderItems(): React.Node {
        const items: ItemsType | null =  this._getItems();

        if (isNil(items)) {
            return null;
        }

        return addIndex(map)(bind(this._renderItem, this), flatten(items));
    }

    _renderComponentContainer(): React.Node {
        return <div
            className={this._getComponentContainerClassName()}
            style={this._getComponentContainerStyle()}
        >
            {this._renderItems()}
        </div>;
    }

    render(): React.Node {
        return this._renderComponentContainer();
    }

    // endregion
}

// exports
export function ReduxFormGeneratorComponent(props: PropsTypes) {
    return (
        <MainThemeContext.Consumer>
            {windowDimensions => <ReduxFormGeneratorClass {...props} {...windowDimensions} />}
        </MainThemeContext.Consumer>
    );
}

ReduxFormGeneratorComponent.displayName = 'ReduxFormGeneratorComponent';