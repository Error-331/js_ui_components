'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import {isNil, unless, defaultTo, addIndex, bind, map, reduce, clone} from 'ramda';
import {isNotNil} from '@webfuturistics/design_components';

// local imports
import {MainThemeContext} from './../../theming';

// type definitions
type ItemType = {
    /**
     * Class name which will be used for icon element
     */

    iconClassName:? string,

    /**
     * React node which will be used as an menu element (overrides caption)
     */

    node?: React.Node,

    /**
     * Menu element caption (if node is specified it will be used instead)
     */

    caption?: string,

    /**
     * Nested children
     */

    children?: Array<ItemType>,
};

type PropsTypes = {
    /**
     * Navigation items
     */

    items?: Array<ItemType>,

    /**
     * Indexes of selected items in deep
     */

    selectedItems?: Array<number>,

    /**
     * JSS inner classes
     *
     * @ignore
     */

    classes: any,
}

type StateTypes = {};

// styles definition
const styles = theme => ({
    componentContainer: {
        boxSizing: 'border-box',
        display: 'flex',

        flexDirection: 'column',
        flexWrap: 'nowrap',

        justifyContent: 'flex-start',
        alignItems: 'stretch',
        alignContent: 'flex-start',
    },
});

/**
 * Vertical sliding navigation styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation

// $FlowFixMe decorators
@injectSheet(styles)
export class VerticalSlidingNavigationMenuClass extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'VerticalSlidingNavigationMenuClass';

    static defaultProps = {
        items: null,
        selectedItems: null,
    };

    // endregion

    // region private props
    // endregion

    // region constructor
    // endregion

    // region business logic
    // endregion

    // region lifecycle methods
    // endregion

    // region style accessors
    _getComponentContainerClassName(): React.Node {
        return this.props.classes.componentContainer;
    }

    // endregion

    // region label accessors
    // endregion

    // region state accessors
    // endregion

    // region prop accessors
    _getSelectedItems(): Array<number> | null {
        return defaultTo(VerticalSlidingNavigationMenuClass.defaultProps.selectedItems)(this.props.selectedItems);
    }

    _getItems(): Array<ItemType> | null {
        if (isNil(this.props.items)) {
            return null;
        }

        const items: Array<ItemType> = this.props.items;
        const selectedItems: Array<number> | null = this._getSelectedItems();

        if (isNotNil(selectedItems)) {
            const newItems: Array<ItemType> | null = reduce((subItems: Array<ItemType> | null, itemIndex: number): Array<ItemType> | null => {
                if (isNil(subItems)) {
                    return null;
                }

                return isNotNil(subItems[itemIndex].children) ? subItems[itemIndex].children : null;
            } , items, selectedItems);

            return unless(isNil, clone)(newItems);
        } else {
            return items;
        }

    }

    // endregion

    // region handlers
    // endregion

    // region render methods
    _renderItem({node, caption, iconClassName}: ItemType, index: number): React.Node {
        const key: string = `item_${index}`;

        if (isNotNil(node)) {
            return <div key={key}>
                {node}
            </div>;
        } else {
            return <div key={key}>
                {caption}
            </div>;
        }
    }

    _renderItems(): React.Node {
        const items: Array<ItemType> | null = this._getItems();

        if (isNil(items)) {
            return null;
        }

        const indexedMap = addIndex(map);
        return indexedMap(bind(this._renderItem, this), items);
    }

    _renderParentItem(): React.Node {
        return null;
    }

    _renderComponentContainer(): React.Node {
        return <div className={this._getComponentContainerClassName()}>
            {this._renderParentItem()}
            {this._renderItems()}
        </div>;
    }

    render(): React.Node {
        return this._renderComponentContainer();
    }

    // endregion
}

// exports
export function VerticalSlidingNavigationMenuComponent(props: PropsTypes) {
    return (
        <MainThemeContext.Consumer>
            {windowDimensions => <VerticalSlidingNavigationMenuClass {...props} {...windowDimensions} />}
        </MainThemeContext.Consumer>
    );
}

VerticalSlidingNavigationMenuComponent.displayName = 'VerticalSlidingNavigationMenuComponent';