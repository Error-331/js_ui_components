'use strict';

// @flow

// external imports
import type {ElementType} from 'react';

import * as React from 'react';
import injectSheet from 'react-jss';

import classNames from 'classnames';
import {is, isNil, ifElse, equals, defaultTo, unless, map, length, mergeDeepRight, addIndex} from 'ramda';

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
     * Flag that indicates whether tabs should occupy space equal to there content
     *
     */

    flexible?: boolean,

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
     * Class name that will be added to component tabs container.
     *
     */

    tabsContainerClassName?: string,

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
     * Style object that will be added to component tabs container.
     *
     */

    tabsContainerStyle?: CSSStylesType,

    /**
     * Style object that will be added to component tab container.
     *
     */

    tabContainerStyle?: CSSStylesType,

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
     * Spacing between elements.
     *
     */

    tabSpacing?: number,

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
        width: '100%',

        '& > $tabsContainer': {
            boxSizing: 'border-box',
            display: 'flex',
            overflow: 'hidden',

            flexDirection: 'row',
            flexWrap: 'nowrap',
            justifyContent: 'flex-start',
            alignItems: 'stretch',
            alignContent: 'flex-start',

            '& > $tabContainer': {
                flexBasis: 'auto',
                flexShrink: 0,
                flexGrow: 0,

                cursor: 'pointer',

                '& > $tabLabelContainer': {
                    textAlign: 'center',

                    padding: '3px',

                    textTransform: 'uppercase',

                    fontFamily: theme.navigationStyles.fontStack,
                    fontSize: `${theme.navigationStyles.captionFontSize}px`,

                    textDecoration: 'none',
                    color: theme.navigationStyles.fontColor2
                }
            },
        },

        '& > $selectionBarContainer': {
            boxSizing: 'border-box',
            position: 'relative',
            overflow: 'hidden',
            width: '100%',

            marginTop: '3px',

            '& > $selectionBar': {
                boxSizing: 'border-box',
                position: 'relative',

                height: '2px',

                backgroundColor: theme.baseStyles.accentColorPrimary,
            }
        }
    },

    tabsContainer: {},
    tabContainer: {},
    tabLabelContainer: {},

    selectionBarContainer: {},
    selectionBar: {},
});

/**
 * Horizontal tab navigation component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
class HorizontalTabNavigationClass extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'HorizontalTabNavigationClass';

    static defaultProps = {
        flexible: false,
        tabs: [],
        selectedTabIndex: null,

        componentContainerClassName: '',
        tabsContainerClassName: '',
        tabContainerClassName: '',
        selectionBarClassName: '',

        componentContainerStyle: {},
        tabsContainerStyle: {},
        tabContainerStyle: {},
        tabLabelContainerStyle: {},
        selectionBarContainerStyle: {},
        selectionBarStyle: {},

        tabSpacing: 0,
    };

    // endregion

    // region private props
    $tabsContainer: any;

    componentContainerWidth: number = 0; // px

    // endregion

    // region constructor

    constructor(props: PropsTypes) {
        super(props);
        const self: any = this;

        this.$tabsContainer = React.createRef();

        self._renderStringLabel = self._renderStringLabel.bind(this);
        self._renderComponentLabel = self._renderComponentLabel.bind(this);
    }

    // endregion

    // region business logic
    // endregion

    // region lifecycle methods

    // endregion

    // region style accessors
    _getSelectionBarContainerStyle(): CSSStylesType {
        return defaultTo(HorizontalTabNavigationClass.defaultProps.selectionBarContainerStyle)
        (this.props.selectionBarContainerStyle);
    }

    _getSelectionBarStyle(): CSSStylesType {
        const selectedTabIndex: number | null = this._getSelectedTabIndex();
        const selectionBarStyle: CSSStylesType = defaultTo(HorizontalTabNavigationClass.defaultProps.selectionBarStyle)
        (this.props.selectionBarStyle);

        if (isNil(selectedTabIndex) || selectedTabIndex === null) {
            console.log('sas1');
            return mergeDeepRight({
                left: `0px`,
                width: `0px`,
            }, selectionBarStyle);
        }

        let tabWidth: number | string = 0;
        let barLeftPosition: number = 0;

        const tabSpacing: number = this._getTabSpacing();
        const halfTabSpacing: number = tabSpacing / 2;
        const spacing = tabSpacing * selectedTabIndex + halfTabSpacing;

        if (this._isFlexible()) {
            tabWidth = this._getChildWidth(selectedTabIndex);
            barLeftPosition = this._getChildrenWidth(selectedTabIndex) + spacing;
        } else {
            tabWidth = this._getTabWidth();
            barLeftPosition = tabWidth * selectedTabIndex + spacing;
        }

        return mergeDeepRight({
            left: `${barLeftPosition}px`,
            width: `${tabWidth}px`,
        }, selectionBarStyle);
    }

    _getTabsContainerStyle(): CSSStylesType {
        return defaultTo(HorizontalTabNavigationClass.defaultProps.tabsContainerStyle)
        (this.props.tabsContainerStyle);
    }

    _getTabContainerStyle(): CSSStylesType {
        const isFlexible: boolean = this._isFlexible();
        const margin: number = this._getTabSpacing() / 2;

        const tabContainerStyle = defaultTo(HorizontalTabNavigationClass.defaultProps.tabContainerStyle)
        (this.props.tabContainerStyle);

        return mergeDeepRight({
            width: isFlexible ? 'auto' : `${this._getTabWidth()}px`,
            marginLeft: `${margin}px`,
            marginRight: `${margin}px`,
        }, tabContainerStyle);
    }

    _getTabLabelContainerStyle(): CSSStylesType {
        return defaultTo(HorizontalTabNavigationClass.defaultProps.tabLabelContainerStyle)
        (this.props.tabLabelContainerStyle);
    }

    _getComponentContainerStyle(): CSSStylesType {
        return defaultTo(HorizontalTabNavigationClass.defaultProps.componentContainerStyle)
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

    _getTabsContainerClassName(): string {
        return classNames(
            this.props.classes.tabsContainer,
            this._getUserTabsContainerClassName(),
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
    _getTabSpacing(): number {
        return defaultTo(HorizontalTabNavigationClass.defaultProps.tabSpacing)
        (this.props.tabSpacing);
    }

    _getUserComponentContainerClassName(): string {
        return defaultTo(HorizontalTabNavigationClass.defaultProps.componentContainerClassName)
        (this.props.componentContainerClassName);
    }

    _getUserTabsContainerClassName(): string {
        return defaultTo(HorizontalTabNavigationClass.defaultProps.tabsContainerClassName)
        (this.props.tabsContainerClassName);
    }

    _getUserTabContainerClassName(): string {
        return defaultTo(HorizontalTabNavigationClass.defaultProps.tabContainerClassName)
        (this.props.tabContainerClassName);
    }

    _getUserSelectionBarClassName(): string {
        return defaultTo(HorizontalTabNavigationClass.defaultProps.selectionBarClassName)
        (this.props.selectionBarClassName);
    }

    _getSelectedTabIndex(): number | null {
        return defaultTo(HorizontalTabNavigationClass.defaultProps.selectedTabIndex)(this.props.selectedTabIndex);
    }

    _getTabWidth(): number {
        const tabCont: number = this._getTabCount();

        return unless(
            equals(0),
            (count: number) => this._getTabsContainerWidth() / count - this._getTabSpacing(),
        )(tabCont);
    }

    _getChildrenWidth(endChildIndex: number): number {
        if (isNil(this.$tabsContainer) || isNil(this.$tabsContainer.current)) {
            return 0;
        }

        let totalChildrenWidth: number = 0;
        for (let childIndex = 0; childIndex < endChildIndex; childIndex++) {
            totalChildrenWidth += this.$tabsContainer.current.children[childIndex].clientWidth;
        }

        return totalChildrenWidth;
    }

    _getChildWidth(childIndex: number): number {
        if (isNil(this.$tabsContainer) || isNil(this.$tabsContainer.current)) {
            return 0;
        }

        return this.$tabsContainer.current.children[childIndex].clientWidth;
    }

    _getTabsContainerWidth(): number {
        if (isNil(this.$tabsContainer) || isNil(this.$tabsContainer.current)) {
            return 0;
        }

        return this.$tabsContainer.current.clientWidth;
    }

    _getTabCount(): number {
        return length(this._getTabsData());
    }

    _getTabsData(): TabsData {
        return defaultTo(HorizontalTabNavigationClass.defaultProps.tabs)(this.props.tabs);
    }

    _isFlexible(): boolean {
        return defaultTo(HorizontalTabNavigationClass.defaultProps.flexible)(this.props.flexible);
    }

    // endregion

    // region handlers
    // endregion

    // region render methods
    _renderSelectionBarContainer(): React.Node {
        const selectedTabIndex: number | null = this._getSelectedTabIndex();

        return <div
            className={this._getSelectionBarContainerClassName()}
            style={this._getSelectionBarContainerStyle()}
        >
            <div
                className={this._getSelectionBarClassName()}
                style={this._getSelectionBarStyle()}
            />
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

    _renderTabsContainer(): React.Node {
        return <div
            ref={this.$tabsContainer}
            className={this._getTabsContainerClassName()}
            style={this._getTabsContainerStyle()}
        >
            {this._renderTabContainers()}
        </div>;
    }

    _renderComponentContainer(): React.Node {
        return <div
            className={this._getComponentContainerClassName()}
            style={this._getComponentContainerStyle()}
        >

            {this._renderTabsContainer()}
            {this._renderSelectionBarContainer()}
        </div>;
    }

    render(): React.Node {
        return this._renderComponentContainer();
    }

    // endregion
}

function HorizontalTabNavigationComponent(props: PropsTypes) {
    return (
        <MainThemeContext.Consumer>
            {windowDimensions => <HorizontalTabNavigationClass {...props} {...windowDimensions} />}
        </MainThemeContext.Consumer>
    );
}

HorizontalTabNavigationComponent = injectSheet(styles)(HorizontalTabNavigationComponent);
HorizontalTabNavigationComponent.displayName = 'HorizontalTabNavigationComponent';

// exports
export {HorizontalTabNavigationClass, HorizontalTabNavigationComponent};
export default HorizontalTabNavigationComponent;