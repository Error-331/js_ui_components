'use strict';

// @flow

// external imports
import type {ElementType} from 'react';

import * as React from 'react';
import {isElement} from 'react-dom/test-utils';

import classNames from 'classnames';
import injectSheet from 'react-jss';

import {
    is,
    isNil,
    equals,
    lt,
    gt,
    and,
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
    append,
    prepend,
    insert,
    repeat,
    reduce,
    map,
} from 'ramda';

// local imports
import {MainThemeContext} from './../../theming/providers/main_theme_provider';

// type definitions
type CSSStylesType = {
    [string]: mixed
};

export type PropsType = {
    [string]: any
};

export type ItemBaseType = {
    props?: PropsType,
    name?: string,
    hspan?: number,
    vspan?: number,
    children?: React.Node
};

export type ItemType = ItemBaseType & {
    elm: ElementType | React.Node,
};

export type ServiceItemType = ItemBaseType & {
    elm: null,
    serviceItem: boolean,
}

export type RowItemsType = Array<ItemType | ServiceItemType>;
export type ItemsType = Array<RowItemsType>;

type PropsTypes = {
    /**
     * Grid items specifications
     */

    items?: ItemsType | null,

    /**
     * Size of the leftmost column ('1f', 'max-content', etc)
     */

    leftmostColSize?: string,

    /**
     * Size of the rightmost column ('1f', 'max-content', etc)
     */

    rightmostColSize?: string,

    /**
     * React style object for in deep control of how grid container is represented
     */

    style?: {[string]: mixed},

    /**
     * Name of the class which will be applied to grid container along with default one
     */

    className?: string,

    /**
     * JSS inner classes
     *
     * @ignore
     */

    classes: any,
}

type StateTypes = {
    /**
     * Prepared grid items specifications
     */

    items?: ItemsType | null,
};

// constants definition
const ITEM_DEFAULT_NAME: string = 'elm_';
const ITEM_NAME_POSTFIX: string = '_item';

// styles definition
const styles = theme => ({
    componentContainer: {
        boxSizing: 'border-box',
        display: 'grid',

        alignItems: 'end',

        gridColumnGap: `${theme.layoutStyles.sectionHorizontalSpacing}px`,
        gridRowGap: `${theme.layoutStyles.sectionVerticalSpacing}px`,
    }
});

/**
 * Grid generator.
 * Component accepts elements specification and returns a container with nested elements aligned using CSS Grid.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation

// $FlowFixMe decorators
@injectSheet(styles)
class GridGeneratorClass extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'GridGeneratorClass';

    static defaultProps = {
        items: null,

        leftmostColSize: '1fr',
        rightmostColSize: '1fr',
    };

    static defaultState = {
        items: null,
    };

    // endregion

    // region private props
    // endregion

    // region constructor
    constructor(props: PropsTypes) {
        super(props);

        this.state = {
            items: GridGeneratorClass.defaultState.items,
        };
    }

    // endregion

    // region business logic
    static populateRowsWithVSpanItems(
        newItems: ItemsType,
        subRowItems: RowItemsType,
        subRowIndex: number,
        totalSubRowHSpan: number,
        totalRowHSpan: number,
        originalColumnHSpan: number,
        name: string,
    ): ItemsType {
        for (let subColumnIndex = 0; subColumnIndex < length(subRowItems); subColumnIndex++) {
            const subHSpan: number = defaultTo(1)(subRowItems[subColumnIndex].hspan);
            totalSubRowHSpan = add(totalSubRowHSpan, subHSpan);

            if (equals(totalRowHSpan, totalSubRowHSpan)) {
                const newServiceItem: ServiceItemType = GridGeneratorClass.getServiceDataRowData(name, originalColumnHSpan);
                newItems[subRowIndex] = insert(subColumnIndex + 1, newServiceItem, subRowItems);

                return newItems;
            }
        }

        const newServiceItem: ServiceItemType = GridGeneratorClass.getServiceDataRowData(name, originalColumnHSpan);
        newItems[subRowIndex] = append(newServiceItem, subRowItems);

        return newItems;
    }

    static getServiceDataRowData(name: string, hSpan: number): ServiceItemType {
        return {
            elm: null,
            serviceItem: true,
            hspan: hSpan,
            name
        };
    }

    static getDefaultGridItemName(itemIndex: number, name?: string): string {
        return defaultTo(`${ITEM_DEFAULT_NAME}${itemIndex}`)(name);
    }

    _getGridItemName(name: string): string {
        return `${name}${ITEM_NAME_POSTFIX}`;
    }

    _getGridHSpan(hSpan?: number): number {
        return defaultTo(1)(hSpan);
    }

    _calcColumnsCount(items: ItemsType): number {
        return reduce((columnCount: number, itemsRow: RowItemsType) => {
            return max(columnCount, reduce(
                (localColumnCount: number, item: ItemType) => add(localColumnCount, this._getGridHSpan(item.hspan)), 0, itemsRow)
            );
        }, 0, items);
    }

    _prepareGridColumnString(items: Array<ItemType>, columnsCount: number): string {
        let itemIndex: number = 0;

        const columnStrings = reduce((gridColumnStrings: Array<string>, item: ServiceItemType | ItemType) => {
            let {elm, name, hspan} = item;
            name = and(isNil(elm), isNil(item.serviceItem)) ? '.' : this._getGridItemName(GridGeneratorClass.getDefaultGridItemName(itemIndex, name));

            itemIndex++;
            return concat(gridColumnStrings, repeat(name, this._getGridHSpan(hspan)));
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
    static getDerivedStateFromProps(props: PropsTypes, state: StateTypes): StateTypes {
        // if no items found - return unmodified state
        if (isNil(props.items)) {
            return state;
        }

        let newItems = props.items.slice();
        let elementIndex: number = 0;

        for (let rowIndex = 0; rowIndex < length(newItems); rowIndex++) {
            let rowItems: RowItemsType = newItems[rowIndex];
            let totalRowHSpan: number = 0;

            for(let columnIndex = 0; columnIndex < length(rowItems); columnIndex++) {
                let {hspan, vspan, name} = rowItems[columnIndex];

                hspan = defaultTo(1)(hspan);
                vspan = defaultTo(0)(vspan);

                //
                if (vspan > 0) {
                    if (isNil(name)) {
                        rowItems = rowItems.slice();
                        rowItems[columnIndex].name = GridGeneratorClass.getDefaultGridItemName(elementIndex, name);

                        newItems[rowIndex] = rowItems;
                    }

                    const subRowIndexStart: number = rowIndex + 1;
                    const subRowIndexLimit: number = subRowIndexStart + vspan - 1;
                    const numberOfNeededRows: number = subRowIndexLimit - length(newItems);

                    if (gt(numberOfNeededRows, 0)) {
                        newItems = concat(newItems, repeat([], numberOfNeededRows));
                    }

                    for (let subRowIndex = subRowIndexStart; subRowIndex < subRowIndexLimit; subRowIndex++) {
                        let subRowItems: RowItemsType = newItems[subRowIndex];
                        let totalSubRowHSpan: number = 0;

                        if (columnIndex === 0) {
                            const newServiceItem: ServiceItemType = GridGeneratorClass.getServiceDataRowData(GridGeneratorClass.getDefaultGridItemName(elementIndex, name), hspan);
                            newItems[subRowIndex] = prepend(newServiceItem, subRowItems);
                        } else {
                            newItems = GridGeneratorClass.populateRowsWithVSpanItems(
                                newItems,
                                subRowItems,
                                subRowIndex,
                                totalSubRowHSpan,
                                totalRowHSpan,
                                hspan,
                                GridGeneratorClass.getDefaultGridItemName(elementIndex, name),
                            );
                        }
                    }
                }

                elementIndex = add(elementIndex, 1);
                totalRowHSpan = add(totalRowHSpan, hspan);
            }
        }

        return {items: newItems};
    }

    // endregion

    // region style accessors
    _getComponentContainerClassName(): string {
        return classNames(
            this.props.classes.componentContainer,
            this.props.className
        );
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
            ...defaultTo({})(this.props.style)
        };
    }

    _getItemStyle(name: string): CSSStylesType {
        return {
            boxSizing: 'border-box',
            gridArea: this._getGridItemName(name),
        };
    }

    // endregion

    // region label accessors
    // endregion

    // region state accessors
    _getItems(): ItemsType | null {
        let items: ItemsType | null = defaultTo(GridGeneratorClass.defaultState.items)(this.state.items);

        if (isNil(items) || !is(Array, items)) {
            return items;
        } else {
            let index: number = 0;

            return map((rows: Array<ItemType>) => map((item: ItemType) => {
                let {name} = item;
                name = GridGeneratorClass.getDefaultGridItemName(index, name);

                const newItem = {...item, name};
                index++;

                return newItem;
            }, rows), items);
        }
    }

    // endregion

    // region prop accessors
    _getRightmostColSize(): string {
        return defaultTo(GridGeneratorClass.defaultProps.rightmostColSize)(this.props.rightmostColSize);
    }

    _getLeftmostColSize(): string {
        return defaultTo(GridGeneratorClass.defaultProps.leftmostColSize)(this.props.leftmostColSize);
    }

    // endregion

    // region handlers
    // endregion

    // region render methods
    _renderItem(item: ItemType, index: number): React.Node {
        const {elm} = item;

        if (isNil(elm)) {
            return null;
        }

        let {name, props, children} = item;

        name = GridGeneratorClass.getDefaultGridItemName(index, name);
        props = defaultTo({style: {}})(props);

        let {style} = props;
        let composedComponentContainerStyles: CSSStylesType = defaultTo({})(style);

        composedComponentContainerStyles = Object.assign({}, this._getItemStyle(name), composedComponentContainerStyles);

        return ifElse(
            isElement,
            (elm) => {
                return React.cloneElement(
                    elm,
                    {
                        ...elm.props,
                        ...props,
                        style: Object.assign({}, elm.props.style, composedComponentContainerStyles),
                        key: name
                    }
                );
            },
            (elm) => {
                return React.createElement(elm, {...props, style: composedComponentContainerStyles, key: name}, children);
            }
        )(elm);
    }

    _renderItems(): React.Node {
        const items: ItemsType | null = this._getItems();

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

function GridGeneratorComponent(props: PropsTypes) {
    return (
        <MainThemeContext.Consumer>
            {windowDimensions => <GridGeneratorClass {...props} {...windowDimensions} />}
        </MainThemeContext.Consumer>
    );
}

GridGeneratorComponent.displayName = 'GridGeneratorComponent';

// exports
export type {PropsType, ItemType, ItemsType, StateTypes};
export {GridGeneratorClass, GridGeneratorComponent};
export default GridGeneratorComponent;