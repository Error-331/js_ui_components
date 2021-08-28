'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import {defaultTo, addIndex, length, slice, map} from 'ramda';

// local imports
import {MainThemeContext} from '../../../src/theming/providers/main_theme_provider';

// type definitions
type CSSStylesType = {
    [string]: mixed
};

type PropsTypes = {
    /**
     * Number of icons that will be placed at the bottom part of the component
     */

    bottomItemsCount?: number,

    /**
     * Container style object
     */

    style?: CSSStylesType,

    /**
     * Icon components (or any other components) which will be used to build navigation
     */

    children?: React.Node,

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

        flexBasis: 'auto',
        flexGrow: 0,
        flexShrink: 1,

        width: '50px',
        height: '100%',

        paddingTop: `${theme.layoutStyles.topSpacing}px`,
        paddingBottom: `${theme.layoutStyles.bottomSpacing}px`,

        flexDirection: 'column',
        flexWrap: 'nowrap',

        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'flex-start',

        backgroundColor: theme.navigationStyles.bodyBGColor1,

        '& > $iconsContainer': {
            boxSizing: 'border-box',
            display: 'flex',

            flexBasis: 'auto',
            flexGrow: 0,
            flexShrink: 1,

            flexDirection: 'column',
            flexWrap: 'nowrap',

            justifyContent: 'space-between',
            alignItems: 'center',
            alignContent: 'flex-start',

            '& > $iconContainer': {
                display: 'flex',

                flexBasis: 'auto',
                flexGrow: 0,
                flexShrink: 1,

                flexDirection: 'column',
                flexWrap: 'nowrap',

                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',

                width: '36px',
                height: '36px',

                borderRadius: '50%',

                cursor: 'pointer',

                '& > a': {
                    boxSizing: 'border-box',
                    display: 'flex',

                    width: '100%',

                    flexBasis: '100%',
                    flexGrow: 0,
                    flexShrink: 1,

                    flexDirection: 'column',
                    flexWrap: 'nowrap',

                    justifyContent: 'center',
                    alignItems: 'center',
                    alignContent: 'center',

                    textDecoration: 'none',
                    color: theme.navigationStyles.fontColor1,
                },

                '& > i': {
                    boxSizing: 'border-box',

                    fontSize: `${theme.navigationStyles.iconFontSize}px`,

                    textDecoration: 'none',
                    color: theme.navigationStyles.fontColor1,
                },

                '&:hover': {
                    backgroundColor: theme.navigationStyles.bodyHoverColor1,
                }
            },
        },

        '& > $topIconsContainer': {
            alignContent: 'flex-start',
        },

        '& > $bottomIconsContainer': {
            alignContent: 'flex-end',
        }
    },

    iconsContainer: {},
    topIconsContainer: {},
    bottomIconsContainer: {},
    iconContainer: {}
});

/**
 * Vertical icon navigation styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation

// $FlowFixMe decorators
@injectSheet(styles)
class VerticalIconNavigationMenuClass extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'VerticalIconNavigationMenuClass';

    static defaultProps = {
        bottomItemsCount: 0,
        style: {},
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
    _getComponentContainerStyle(): CSSStylesType {
        return defaultTo(VerticalIconNavigationMenuClass.defaultProps.style)
        (this.props.style);
    }

    _getComponentContainerClassName(): string {
        return this.props.classes.componentContainer;
    }

    _getTopIconsContainerClassName(): string {
        return classNames(
            this.props.classes.iconsContainer,
            this.props.classes.topIconsContainer
        );
    }

    _getBottomIconsContainerClassName(): string {
        return classNames(
            this.props.classes.iconsContainer,
            this.props.classes.bottomIconsContainer
        );
    }

    _getIconContainerClassName(): string {
        return this.props.classes.iconContainer;
    }

    // endregion

    // region label accessors
    // endregion

    // region state accessors
    // endregion

    // region prop accessors
    _getBottomItemsCount(): number {
        const {bottomItemsCount} = this.props;
        return defaultTo(VerticalIconNavigationMenuClass.defaultProps.bottomItemsCount)(bottomItemsCount);
    }

    // endregion

    // region handlers
    // endregion

    // region render methods
    _renderIconContainers(icons: Array<React.Node>, sectionKey: string): React.Node {
        const indexedMap = addIndex(map);

        return indexedMap((icon: React.Node, key: number) => <div
            className={this._getIconContainerClassName()}
            key={`${sectionKey}_${key}`}
        >
            {icon}
        </div>, icons);
    }

    _renderBottomIconsContainer(bottomChildren: Array<React.Node>): React.Node {
        return <div className={this._getBottomIconsContainerClassName()}>
            {this._renderIconContainers(bottomChildren, 'bottom')}
        </div>;
    }

    _renderTopIconsContainer(topChildren: Array<React.Node>): React.Node {
        return <div className={this._getTopIconsContainerClassName()}>
            {this._renderIconContainers(topChildren, 'top')}
        </div>;
    }

    _renderComponentContainer(): React.Node {
        const children: Array<React.Node> = React.Children.toArray(this.props.children);
        const childrenCount: number = length(children);

        const bottomChildrenCount: number = this._getBottomItemsCount();
        const topChildrenCount: number = childrenCount - bottomChildrenCount;

        const topChildrenStartIndex: number = 0;
        const topChildrenEndIndex: number = topChildrenCount;

        const bottomChildrenStartIndex: number = topChildrenCount;
        const bottomChildrenEndIndex: number = childrenCount;

        const topChildren: Array<React.Node> = slice(topChildrenStartIndex, topChildrenEndIndex, children);
        const bottomChildren: Array<React.Node> = slice(bottomChildrenStartIndex, bottomChildrenEndIndex, children);

        return (<div
            className={this._getComponentContainerClassName()}
            style={this._getComponentContainerStyle()}
        >
            {this._renderTopIconsContainer(topChildren)}
            {this._renderBottomIconsContainer(bottomChildren)}
        </div>);
    }

    render(): React.Node {
        return this._renderComponentContainer();
    }

    // endregion
}

function VerticalIconNavigationMenuComponent(props: PropsTypes) {
    return (
        <MainThemeContext.Consumer>
            {windowDimensions => <VerticalIconNavigationMenuClass {...props} {...windowDimensions} />}
        </MainThemeContext.Consumer>
    );
}

VerticalIconNavigationMenuComponent.displayName = 'VerticalIconNavigationMenuComponent';

// exports
export {VerticalIconNavigationMenuClass, VerticalIconNavigationMenuComponent};
export default VerticalIconNavigationMenuComponent;
