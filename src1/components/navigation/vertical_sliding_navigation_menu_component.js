'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import {T, isNil, isEmpty, equals, unless, or, cond, always, defaultTo, addIndex, bind, map, reduce, clone} from 'ramda';
import {isNotNil} from '@webfuturistics/design_components/lib/helpers/general/utility_helpers';

// local imports
import type {CombinedEventType, ExtendedEventTargetType} from '../../../src/types/dom_types';

import {MainThemeContext} from '../../../src/theming/providers/main_theme_provider';
import {HorizontalDivider} from '../utility/horizontal_divider_component';

// type definitions
type OnMenuItemClickCallbackType = (itemIndex: number) => void;

type ItemType = {
    /**
     * Class name which will be used for icon element
     */

    iconClassName?: string,

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
     *
     */

    children?: Array<ItemType>,
};

type PropsTypes = {
    /**
     * Navigation items
     */

    items?: Array<ItemType | null>,

    /**
     * Indexes of selected items in deep
     */

    selectedItems?: Array<number>,

    /**
     * Flag that indicates whether menu (and its contents) should have inverted colors
     */

    invertColor?: boolean,

    /**
     * Callback function which will be called once user clicks on menu item
     */

    onMenuItemClickCallback?: OnMenuItemClickCallbackType,

    /**
     * Callback function which will be called once user clicks on menu parent item (back button)
     */

    onMenuParentItemClickCallback?: OnMenuItemClickCallbackType,

    /**
     * Custom caption for 'back' button
     */

    backButtonCaption?: string,

    /**
     * Custom icon class name for 'back' button
     */

    backButtonIconClassName?: string,

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

        maxWidth: `${theme.navigationStyles.verticalNavigationMaxWidth}px`,
        minWidth: '245px',

        height: '100%',

        flexDirection: 'column',
        flexWrap: 'nowrap',

        justifyContent: 'flex-start',
        alignItems: 'stretch',
        alignContent: 'flex-start',

        padding: `${theme.layoutStyles.topSpacing}px 
                  ${theme.layoutStyles.rightSpacing}px 
                  ${theme.layoutStyles.leftSpacing}px 
                  ${theme.layoutStyles.bottomSpacing}px
        `,

        backgroundColor: theme.navigationStyles.bodyBGColor1,

        '& > $menuItemContainer': {
            boxSizing: 'border-box',
            display: 'flex',

            flexBasis: 'auto',
            flexGrow: '0',
            flexShrink: '1',

            borderRadius: theme.layoutStyles.headerBorderRadius,
            padding: '8px 12px 8px 12px',

            flexDirection: 'row',
            flexWrap: 'nowrap',

            justifyContent: 'flex-start',
            alignItems: 'center',
            alignContent: 'flex-start',

            cursor: 'pointer',

            '&:hover': {
                backgroundColor: theme.navigationStyles.bodyHoverColor1,
            },

            '&.utility': {
                cursor: 'default',

                '& > $dividerOuterContainer': {
                    padding: '0px',

                    '& > $dividerInnerContainer': {
                        backgroundColor: theme.navigationStyles.fontColor1
                    }
                },
            },

            '&.utility:hover': {
                backgroundColor: 'initial',
            },

            '& > $itemNodeContainer': {
                boxSizing: 'border-box',

                flexBasis: 'auto',
                flexGrow: '1',
                flexShrink: '1',
            },

            '& > $itemIconContainer': {
                boxSizing: 'border-box',

                flexBasis: 'auto',
                flexGrow: '0',
                flexShrink: '1',

                color: theme.navigationStyles.fontColor1,

                '& > i': {
                    fontSize: `${theme.navigationStyles.iconFontSize}px`,
                }
            },

            '& > $itemCaptionContainer': {
                boxSizing: 'border-box',

                flexBasis: 'auto',
                flexGrow: '0',
                flexShrink: '1',

                paddingLeft: '8px',

                fontFamily: theme.navigationStyles.fontStack,
                fontSize: `${theme.navigationStyles.captionFontSize}px`,

                color: theme.navigationStyles.fontColor1,

                '&::first-letter': {
                    textTransform: 'uppercase'
                }
            }
        },

        '&.inverted': {
            backgroundColor: theme.navigationStyles.bodyBGColor2,

            '& > $menuItemContainer': {
                '&:hover': {
                    backgroundColor: theme.navigationStyles.bodyHoverColor1,

                    '& > $itemIconContainer': {
                        color: theme.navigationStyles.fontColor1,
                    },

                    '& > $itemCaptionContainer': {
                        color: theme.navigationStyles.fontColor1,
                    }
                },

                '&.utility': {
                    cursor: 'default',

                    '& > $dividerOuterContainer': {
                        '& > $dividerInnerContainer': {
                            backgroundColor: theme.navigationStyles.bodyBGColor1
                        }
                    },
                },

                '&.utility:hover': {
                },

                '& > $itemNodeContainer': {
                },

                '& > $itemIconContainer': {
                    color: theme.navigationStyles.bodyBGColor1,
                },

                '& > $itemCaptionContainer': {
                    color: theme.navigationStyles.bodyBGColor1,
                }
            },
        }
    },

    menuItemContainer: {},

    itemNodeContainer: {},
    itemIconContainer: {},
    itemCaptionContainer: {},

    dividerOuterContainer: {},
    dividerInnerContainer: {}
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
class VerticalSlidingNavigationMenuClass extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'VerticalSlidingNavigationMenuClass';

    static defaultProps = {
        items: null,
        selectedItems: null,

        invertColor: false,

        backButtonCaption: 'back',
        backButtonIconClassName: 'fas fa-arrow-left',

        onMenuItemClickCallback: () => {},
        onMenuParentItemClickCallback: () => {},
    };

    // endregion

    // region private props
    // endregion

    // region constructor
    // endregion

    // region business logic
    // endregion

    // region lifecycle methods
    _onMenuItemClick(event: CombinedEventType): void {
        const target: ExtendedEventTargetType = event.target;

        const $menuItemElement: ExtendedEventTargetType = unless(
            currentTarget => !isNil(currentTarget.dataset['data-menuitemtype']),
            currentTarget => currentTarget.closest('div[data-menuitemtype]'))(target);

        if (isNil($menuItemElement) || isNil($menuItemElement.dataset['index'])) {
            return;
        }

        const menuItemIndex: number = parseInt($menuItemElement.dataset['index']);

        cond([
            [equals('child'), () => {this._getOnMenuItemClickCallback()(menuItemIndex);}],
            [equals('parent'), () => {this._getOnMenuParentItemClickCallback()(menuItemIndex);}],
            [T, always(null)]
        ])($menuItemElement.dataset['menuitemtype']);
    }

    // endregion

    // region style accessors
    _getBackButtonIconClassName(): string {
        return defaultTo(VerticalSlidingNavigationMenuClass.defaultProps.backButtonIconClassName)(this.props.backButtonIconClassName);
    }

    _getComponentContainerClassName(): string {
        return classNames(
            this.props.classes.componentContainer,
            {inverted: this._isInverted()},
        );
    }

    _getMenuItemContainer(): string {
        return this.props.classes.menuItemContainer;
    }

    _getItemNodeContainerClassName(): string {
        return this.props.classes.itemNodeContainer;
    }

    _getItemIconContainerClassName(): string {
        return this.props.classes.itemIconContainer;
    }

    _getItemCaptionContainerClassName(): string {
        return this.props.classes. itemCaptionContainer;
    }

    // endregion

    // region label accessors
    // endregion

    // region state accessors
    // endregion

    // region prop accessors
    _isInverted(): boolean {
        return defaultTo(VerticalSlidingNavigationMenuClass.defaultProps.invertColor)
        (this.props.invertColor);
    }

    _getBackButtonCaption(): string {
        return defaultTo(VerticalSlidingNavigationMenuClass.defaultProps.backButtonCaption)(this.props.backButtonCaption);
    }

    _getSelectedItems(): Array<number> | null {
        const selectedItems: Array<number> | null =
            defaultTo(VerticalSlidingNavigationMenuClass.defaultProps.selectedItems)(this.props.selectedItems);

        return unless(isNil, clone)(selectedItems);
    }

    _getItems(): Array<ItemType> | null {
        if (isNil(this.props.items)) {
            return null;
        }

        const items: Array<ItemType> = this.props.items;
        const selectedItems: Array<number> | null = this._getSelectedItems();

        if (isNotNil(selectedItems)) {
            const newItems: Array<ItemType> | null = reduce((subItems: Array<ItemType> | null, itemIndex: number): Array<ItemType> | null => {
                if (isNil(itemIndex) || isNil(subItems)) {
                    return null;
                }

                return isNotNil(subItems[itemIndex].children) ? subItems[itemIndex].children : null;
            } , items, selectedItems);

            return unless(isNil, clone)(newItems);
        } else {
            return items;
        }

    }

    _getOnMenuItemClickCallback(): OnMenuItemClickCallbackType {
        return defaultTo(VerticalSlidingNavigationMenuClass.defaultProps.onMenuItemClickCallback)
        (this.props.onMenuItemClickCallback);
    }

    _getOnMenuParentItemClickCallback(): OnMenuItemClickCallbackType {
        return defaultTo(VerticalSlidingNavigationMenuClass.defaultProps.onMenuParentItemClickCallback)
        (this.props.onMenuParentItemClickCallback);
    }

    // endregion

    // region handlers
    // endregion

    // region render methods
    _renderDivider(): React.Node {
        const {dividerOuterContainer, dividerInnerContainer} = this.props.classes;

        return <HorizontalDivider
            componentContainerClassName={dividerOuterContainer}
            bodyContainerClassName={dividerInnerContainer}
        />;
    }

    _renderMenuItemContainer(
        key?: number,
        type: 'child' | 'parent' | 'node',
        index: number | null,
        className: string | null,
        children?: React.Node,
    ): React.Node {
        const composedKey: string | null = isNil(key) ? null : `${type}_${key}`;
        const menuItemClassName: string = classNames(this._getMenuItemContainer(), className);

        return <div key={composedKey}
                    data-menuitemtype={type}
                    data-index={index}
                    className={menuItemClassName}
        >
            {children}
        </div>;
    }

    _renderNodeContainer(node?: React.Node): React.Node {
        return <div className={this._getItemNodeContainerClassName()}>
            {node}
        </div>;
    }

    _renderCaptionContainer(
        caption?: string
    ): React.Node {
        return <div
            className={this._getItemCaptionContainerClassName()}
        >
            {caption}
        </div>;
    }

    _renderIconContainer(iconClassName?: string): React.Node {
        return <div className={this._getItemIconContainerClassName()}>
            <i className={iconClassName} />
        </div>;
    }

    _renderItem(item: ItemType, index: number): React.Node {
        if (isNil(item)) {
            return this._renderMenuItemContainer(0, 'node', null, 'utility', this._renderDivider());
        }

        const {node, caption, iconClassName, children} = item;

        if (isNotNil(node)) {
            return this._renderMenuItemContainer(index, 'node', null, null, this._renderNodeContainer(node));
        } else {
            const dataIndex: number | null = isNotNil(children) ? index : null;
            const menuItemChildren: React.Node = <React.Fragment>
                {this._renderIconContainer(iconClassName)}
                {this._renderCaptionContainer(caption)}
            </React.Fragment>;

            return this._renderMenuItemContainer(index, 'child', dataIndex, null, menuItemChildren);
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
        const selectedItems: Array<number> | null = this._getSelectedItems();

        return unless(
            (selectedItems: Array<number> | null) => or(isNil(selectedItems), isEmpty(selectedItems)),
            (selectedItems: Array<number>) => {
            const lastSelectedItem: number = selectedItems.pop();

            const backButtonIconClassName: string = this._getBackButtonIconClassName();
            const backButtonCaption: string = this._getBackButtonCaption();

            const menuItemChildren: React.Node = <React.Fragment>
                {this._renderIconContainer(backButtonIconClassName)}
                {this._renderCaptionContainer(backButtonCaption)}
            </React.Fragment>;

            return <React.Fragment>
                {this._renderMenuItemContainer(0, 'parent', lastSelectedItem, null, menuItemChildren)}
                {this._renderMenuItemContainer(0, 'node', null, 'utility', this._renderDivider())}
            </React.Fragment>;
        })(selectedItems);
    }

    _renderComponentContainer(): React.Node {
        return <div
            onClick={bind(this._onMenuItemClick, this)}
            className={this._getComponentContainerClassName()}
        >
            {this._renderParentItem()}
            {this._renderItems()}
        </div>;
    }

    render(): React.Node {
        return this._renderComponentContainer();
    }

    // endregion
}

function VerticalSlidingNavigationMenuComponent(props: PropsTypes) {
    return (
        <MainThemeContext.Consumer>
            {windowDimensions => <VerticalSlidingNavigationMenuClass {...props} {...windowDimensions} />}
        </MainThemeContext.Consumer>
    );
}

VerticalSlidingNavigationMenuComponent.displayName = 'VerticalSlidingNavigationMenuComponent';

// exports
export {VerticalSlidingNavigationMenuClass, VerticalSlidingNavigationMenuComponent};
export default VerticalSlidingNavigationMenuComponent;
