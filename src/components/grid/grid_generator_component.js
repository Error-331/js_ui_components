'use strict';

// @flow

// external imports
import type {ElementType} from 'react';
import type {NestedArray} from 'ramda';

import * as React from 'react';

import classNames from 'classnames';
import injectSheet from 'react-jss';

import {
    is,
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
    map,
} from 'ramda';

// local imports
import {MainThemeContext} from './../../theming/providers/main_theme_provider';

// type definitions
type CSSStylesType = {
    [string]: mixed
};

type PropsType = {
    [string]: any
};

type ItemType = {
    elm: ElementType,
    props?: PropsType,
    name?: string,
    span?: number,
    children?: React.Node
};

type ItemsType = NestedArray<ItemType>;

type PropsTypes = {
    /**
     * Grid items specifications
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

type StateTypes = {};

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

    // endregion

    // region private props
    // endregion

    // region constructor
    // endregion

    // region business logic
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
            );
        }, 0, items);
    }

    _prepareGridColumnString(items: Array<ItemType>, columnsCount: number): string {
        let itemIndex: number = 0;

        const columnStrings = reduce((gridColumnStrings: Array<string>, item: ItemType) => {
            let {elm, name, span} = item;
            name = isNil(elm) ? '*' : defaultTo(`${ITEM_DEFAULT_NAME}${itemIndex}`)(name);

            if (isNil(elm)) {
                name = '.';
            } else {
                name = defaultTo(`${ITEM_DEFAULT_NAME}${itemIndex}`)(name);
                name = this._getGridName(name);
            }

            itemIndex++;
            return concat(gridColumnStrings, repeat(name, this._getGridSpan(span)));
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
        return defaultTo(GridGeneratorClass.defaultProps.rightmostColSize)(this.props.rightmostColSize);
    }

    _getLeftmostColSize(): string {
        return defaultTo(GridGeneratorClass.defaultProps.leftmostColSize)(this.props.leftmostColSize);
    }

    _getItems(): ItemsType | null {
        let items: ItemsType | null = defaultTo(GridGeneratorClass.defaultProps.items)(this.props.items);

        if (isNil(items) || !is(Array, items)) {
            return items;
        } else {
            let index: number = 0;

            return map((rows: Array<ItemType>) => map((item: ItemType) => {
                const {elm, props, span, children} = item;

                let {name} = item;
                name = defaultTo(`${ITEM_DEFAULT_NAME}${index}`)(name);

                const newItem = {elm, props, name, span, children};
                index++;

                return newItem;
            }, rows), items);
        }
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

        name = defaultTo(`${ITEM_DEFAULT_NAME}${index}`)(name);
        props = defaultTo({style: {}})(props);

        let {style} = props;
        let composedComponentContainerStyles: CSSStylesType = defaultTo({})(style);

        composedComponentContainerStyles = Object.assign({}, this._getItemStyle(name), composedComponentContainerStyles);
        return React.createElement(elm, {...props, style: composedComponentContainerStyles, key: name}, children);
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

function GridGeneratorComponent(props: PropsTypes) {
    return (
        <MainThemeContext.Consumer>
            {windowDimensions => <GridGeneratorClass {...props} {...windowDimensions} />}
        </MainThemeContext.Consumer>
    );
}

GridGeneratorComponent.displayName = 'GridGeneratorComponent';

// exports
export type {PropsType, ItemType, ItemsType, PropsTypes, StateTypes};
export {GridGeneratorClass, GridGeneratorComponent};