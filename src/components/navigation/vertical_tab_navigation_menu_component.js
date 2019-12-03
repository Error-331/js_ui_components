'use strict';

// @flow

// external imports
import type {ElementType} from 'react';

import * as React from 'react';
import injectSheet from 'react-jss';

import classNames from 'classnames';
import {is, isNil, ifElse, defaultTo, map, length, mergeDeepRight, addIndex} from 'ramda';

// local imports
import {MainThemeContext} from './../../theming/providers/main_theme_provider';

// type definitions
type CSSStylesType = {
    [string]: mixed
};

export type TabData = {
    label: string | React.Node | ElementType | null;
    icon: string | null;
};

export type TabsData = TabData[];

type PropsTypes = {
    /**
     * Tabs data
     *
     */

    tabs: TabsData,

    /**
     * Index of the selected tab (if not set - selection bar will not be shown).
     * Starts from zero.
     *
     */

    selectedTabIndex?: number | null,

    /**
     * Class name that will be added to component outer container.
     *
     */

    componentContainerClassName?: string,

    /**
     * Class name that will be added to component tabs container (real part of it).
     *
     */

    realTabsContainerClassName?: string,

    /**
     * Class name that will be added to component tab container.
     *
     */

    tabContainerClassName?: string,

    /**
     * Class name that will be added to components selection bar container.
     *
     */

    selectionBarClassName?: string,

    /**
     * Style object that will be added to outer component container.
     *
     */

    componentContainerStyle?: CSSStylesType,

    /**
     * Style object that will be added to component tabs container (real part of it).
     *
     */

    realTabsContainerStyle?: CSSStylesType,

    /**
     * Style object that will be added to component tab container.
     *
     */

    tabContainerStyle?: CSSStylesType,

    /**
     * Style object that will be added to component tabs container (imaginary part of it).
     *
     */

    imaginaryTabsContainerStyle?: CSSStylesType,

    /**
     * Style object that will be added to components tab label container.
     *
     */

    tabLabelContainerStyle?: CSSStylesType,

    /**
     * Style object that will be added to components selection bar outer container.
     *
     */

    selectionBarContainerStyle?: CSSStylesType,

    /**
     * Style object that will be added to components selection bar container.
     *
     */

    selectionBarStyle?: CSSStylesType,

    /**
     * JSS inner classes
     *
     * @ignore
     *
     */

    classes: any,
}

type StateTypes = {};

// styles definition
const styles = theme => ({
    componentContainer: {
        boxSizing: 'border-box',
        position: 'relative',

        '& > $realTabsContainer': {
            boxSizing: 'border-box',
            position: 'relative',
            display: 'flex',

            top: '0px',

            flexDirection: 'column',
            flexWrap: 'nowrap',

            justifyContent: 'flex-start',
            alignItems: 'stretch',
            alignContent: 'flex-start',

            zIndex: 2,

            '& > $tabContainer': {
                flexBasis: 'auto',
                flexShrink: 1,
                flexGrow: 0,

                cursor: 'pointer',

                '& > $tabLabelContainer': {
                    textAlign: 'left',

                    paddingTop: '10px',
                    paddingBottom: '10px',

                    paddingLeft: '20px',

                    textTransform: 'uppercase',

                    fontFamily: theme.navigationStyles.fontStack,
                    fontSize: `${theme.navigationStyles.captionFontSize}px`,

                    textDecoration: 'none',
                    color: theme.navigationStyles.fontColor2
                }
            },
        },

        '& > $imaginaryTabsContainer': {
            boxSizing: 'border-box',
            position: 'absolute',

            width: '100%',
            height: '50px',

            top: '0px',
            zIndex: 1,

            '& > $selectionBarContainer': {
                boxSizing: 'border-box',

                display: 'flex',
                position: 'relative',

                top: '0px',

                flexDirection: 'row',
                flexWrap: 'nowrap',

                justifyContent: 'flex-start',
                alignItems: 'stretch',
                alignContent: 'flex-start',

                backgroundColor: theme.baseStyles.noneTransparentBGColor,

                '& > $selectionBar': {
                    boxSizing: 'border-box',
                    flexBasis: 'auto',
                    flexShrink: 0,
                    flexGrow: 0,

                    width: '4px',
                    height: '100%',

                    backgroundColor: theme.baseStyles.accentColorPrimary,
                }
            }
        },

    },

    realTabsContainer: {},
    imaginaryTabsContainer: {},

    tabContainer: {},
    tabLabelContainer: {},

    selectionBarContainer: {},
    selectionBar: {},
});

/**
 * Vertical tab navigation menu.
 * Displays vertical tab navigation menu.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
class VerticalTabNavigationMenuClass extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'VerticalTabNavigationMenuClass';

    static defaultProps = {
        tabs: [],
        selectedTabIndex: null,

        componentContainerClassName: '',
        realTabsContainerClassName: '',
        tabContainerClassName: '',
        selectionBarClassName: '',

        componentContainerStyle: {},
        realTabsContainerStyle: {},
        tabContainerStyle: {},
        tabLabelContainerStyle: {},
        selectionBarContainerStyle: {},
        imaginaryTabsContainerStyle: {},
        selectionBarStyle: {},
    };

    // endregion

    // region private props
    $realTabsContainer: any;

    componentContainerWidth: number = 0; // px

    // endregion

    // region constructor
    constructor(props: PropsTypes) {
        super(props);
        const self: any = this;

        this.$realTabsContainer = React.createRef();

        self._renderStringLabel = self._renderStringLabel.bind(this);
        self._renderComponentLabel = self._renderComponentLabel.bind(this);
    }

    // endregion

    // region business logic
    // endregion

    // region lifecycle methods
    // endregion

    // region style accessors
    _getSelectionBarStyle(): CSSStylesType {
        return defaultTo(VerticalTabNavigationMenuClass.defaultProps.selectionBarStyle)
        (this.props.selectionBarStyle);
    }

    _getSelectionBarContainerStyle(): CSSStylesType {
        const selectedTabIndex: number | null = this._getSelectedTabIndex();

        if (isNil(selectedTabIndex) || selectedTabIndex === null) {
            return {
                display: 'none',
            };
        }

        const selectionBarStyle: CSSStylesType = defaultTo(VerticalTabNavigationMenuClass.defaultProps.selectionBarContainerStyle)
        (this.props.selectionBarContainerStyle);


        const tabsContainerHeight: number = this._getRealTabsContainerHeight();
        const tabCount: number = this._getTabCount();

        let selectionBarContainerHeight: number = 0;

        if (tabCount !== 0) {
            selectionBarContainerHeight = tabsContainerHeight / tabCount
        }

        const selectionBarContainerTop: number = selectedTabIndex * selectionBarContainerHeight;

        return mergeDeepRight({
            top: `${selectionBarContainerTop}px`,
            height: `${selectionBarContainerHeight}px`,
        }, selectionBarStyle);
    }

    _getImaginaryTabsContainerStyle(): CSSStylesType {
        return defaultTo(VerticalTabNavigationMenuClass.defaultProps.imaginaryTabsContainerStyle)
        (this.props.imaginaryTabsContainerStyle);
    }

    _getRealTabsContainerStyle(): CSSStylesType {
        return defaultTo(VerticalTabNavigationMenuClass.defaultProps.realTabsContainerStyle)
        (this.props.realTabsContainerStyle);
    }

    _getTabContainerStyle(): CSSStylesType {
        return defaultTo(VerticalTabNavigationMenuClass.defaultProps.tabContainerStyle)
        (this.props.tabContainerStyle);
    }

    _getTabLabelContainerStyle(): CSSStylesType {
        return defaultTo(VerticalTabNavigationMenuClass.defaultProps.tabLabelContainerStyle)
        (this.props.tabLabelContainerStyle);
    }

    _getComponentContainerStyle(): CSSStylesType {
        return defaultTo(VerticalTabNavigationMenuClass.defaultProps.componentContainerStyle)
        (this.props.componentContainerStyle);
    }

    _getSelectionBarClassName(): string {
        return classNames(
            this.props.classes.selectionBar,
            this._getUserSelectionBarClassName(),
        );
    }

    _getSelectionBarContainerClassName(): string {
        return this.props.classes.selectionBarContainer;
    }

    _getImaginaryTabsContainerClassName(): string {
        return this.props.classes.imaginaryTabsContainer;
    }

    _getTabLabelContainerClassName(customClassName?: string): string {
        return classNames(
            this.props.classes.tabLabelContainer,
            customClassName,
        );
    }

    _getTabContainerClassName(): string {
        return classNames(
            this.props.classes.tabContainer,
            this._getUserTabContainerClassName(),
        );
    }

    _getRealTabsContainerClassName(): string {
        return classNames(
            this.props.classes.realTabsContainer,
            this._getUserRealTabsContainerClassName(),
        );
    }

    _getComponentContainerClassName(): string {
        return classNames(
            this.props.classes.componentContainer,
            this._getUserComponentContainerClassName(),
        );
    }
    // endregion

    // region label accessors
    // endregion

    // region state accessors
    // endregion

    // region prop accessors
    _getUserComponentContainerClassName(): string {
        return defaultTo(VerticalTabNavigationMenuClass.defaultProps.componentContainerClassName)
        (this.props.componentContainerClassName);
    }

    _getUserRealTabsContainerClassName(): string {
        return defaultTo(VerticalTabNavigationMenuClass.defaultProps.realTabsContainerClassName)
        (this.props.realTabsContainerClassName);
    }

    _getUserTabContainerClassName(): string {
        return defaultTo(VerticalTabNavigationMenuClass.defaultProps.tabContainerClassName)
        (this.props.tabContainerClassName);
    }

    _getUserSelectionBarClassName(): string {
        return defaultTo(VerticalTabNavigationMenuClass.defaultProps.selectionBarClassName)
        (this.props.selectionBarClassName);
    }

    _getSelectedTabIndex(): number | null {
        return defaultTo(VerticalTabNavigationMenuClass.defaultProps.selectedTabIndex)(this.props.selectedTabIndex);
    }

    _getRealTabsContainerHeight(): number {
        if (isNil(this.$realTabsContainer ) || isNil(this.$realTabsContainer.current)) {
            return 0;
        }

        return this.$realTabsContainer.current.clientHeight;
    }

    _getTabCount(): number {
        return length(this._getTabsData());
    }

    _getTabsData(): TabsData {
        return defaultTo(VerticalTabNavigationMenuClass.defaultProps.tabs)(this.props.tabs);
    }

    // endregion

    // region handlers
    // endregion

    // region render methods
    _renderSelectionBar(): React.Node {
        return <div
            className={this._getSelectionBarClassName()}
            style={this._getSelectionBarStyle()}
        />;
    }

    _renderSelectionBarContainer(): React.Node {
        return <div
            className={this._getSelectionBarContainerClassName()}
            style={this._getSelectionBarContainerStyle()}
        >
            {this._renderSelectionBar()}
        </div>;
    }

    _renderImaginaryTabsContainer(): React.Node {
        return <div
            className={this._getImaginaryTabsContainerClassName()}
            style={this._getImaginaryTabsContainerStyle()}
        >
            {this._renderSelectionBarContainer()}
        </div>;
    }

    _renderComponentLabel(label: ElementType): React.Node {
        return React.cloneElement(
            label,
            {
                ...label.props,
                style: Object.assign({}, this._getTabLabelContainerStyle(), label.props.style),
                className: this._getTabLabelContainerClassName(label.props.className)
            }
        );
    }

    _renderStringLabel(label: string): React.Node {
        return <div
            className={this._getTabLabelContainerClassName()}
            style={this._getTabLabelContainerStyle()}
        >
            {label}
        </div>;
    }

    _renderTabLabel(label: string | ElementType | React.Node): React.Node {
        return ifElse(
            is(String),
            this._renderStringLabel,
            this._renderComponentLabel,
        )(label);
    }

    _renderTabContainers(): React.Node {
        const tabStyle: CSSStylesType = this._getTabContainerStyle();
        const mapIndexed = addIndex(map);

        return mapIndexed((tabData: TabData, tabIndex: string) => {
            const label: string | React.Node = defaultTo('')(tabData.label);

            return <div key={`tab_${tabIndex}`}
                        className={this._getTabContainerClassName()}
                        style={tabStyle}
            >
                {this._renderTabLabel(label)}
            </div>;
        }, this._getTabsData());
    }

    _renderRealTabsContainer(): React.Node {
        return <div
            ref={this.$realTabsContainer}
            className={this._getRealTabsContainerClassName()}
            style={this._getRealTabsContainerStyle()}
        >
            {this._renderTabContainers()}
        </div>;
    }

    _renderComponentContainer(): React.Node {
        return <div
            className={this._getComponentContainerClassName()}
            style={this._getComponentContainerStyle()}
        >
            {this._renderRealTabsContainer()}
            {this._renderImaginaryTabsContainer()}
        </div>;
    }

    render(): React.Node {
        return this._renderComponentContainer();
    }

    // endregion
}

function VerticalTabNavigationMenuComponent(props: PropsTypes) {
    return (
        <MainThemeContext.Consumer>
            {windowDimensions => <VerticalTabNavigationMenuClass {...props} {...windowDimensions} />}
        </MainThemeContext.Consumer>
    );
}

VerticalTabNavigationMenuComponent = injectSheet(styles)(VerticalTabNavigationMenuComponent);
VerticalTabNavigationMenuComponent.displayName = 'VerticalTabNavigationMenuComponent';

// exports
export {VerticalTabNavigationMenuClass, VerticalTabNavigationMenuComponent};
export default VerticalTabNavigationMenuComponent;
