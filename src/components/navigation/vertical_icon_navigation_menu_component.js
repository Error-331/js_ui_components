'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import {defaultTo, length, slice, map} from 'ramda';

// local imports
import {MainThemeContext} from './../../theming';

// type definitions
type PropsTypes = {
    /**
     * Number of icons that will be placed at the bottom part of the component
     */

    bottomItemsCount?: number,

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
const iconsContainer = (theme) => ({
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

    '& > i': {
        fontSize: '18px',
        color: 'white'
    }
});

const styles = theme => ({
    componentContainer: {
        boxSizing: 'border-box',
        display: 'flex',

        flexBasis: 'auto',
        flexGrow: 0,
        flexShrink: 1,

        width: '50px',
        height: '100%',

        paddingTop: '3px',
        paddingBottom: '3px',

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
                alignContent: 'flex-start',

                width: '35px',
                height: '35px',

                borderRadius: '50%',

                cursor: 'pointer',

                '& > i': {
                    fontSize: `${theme.navigationStyles.primaryFontSize}px`,
                    color: theme.navigationStyles.fontColor1,
                },

                '&:hover': {
                    backgroundColor: theme.navigationStyles.bodyHoverColor1
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
export class VerticalIconNavigationMenuClass extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'VerticalIconNavigationMenuClass';

    static defaultProps = {
        bottomItemsCount: 0,
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
    _renderIconContainers(icons: Array<React.Node>): React.Node {
        return map(icon => <div className={this._getIconContainerClassName()}>
            {icon}
        </div>, icons);
    }

    _renderBottomIconsContainer(bottomChildren: Array<React.Node>): React.Node {
        return <div className={this._getBottomIconsContainerClassName()}>
            {this._renderIconContainers(bottomChildren)}
        </div>;
    }

    _renderTopIconsContainer(topChildren: Array<React.Node>): React.Node {
        return <div className={this._getTopIconsContainerClassName()}>
            {this._renderIconContainers(topChildren)}
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

        const topChildren = slice(topChildrenStartIndex, topChildrenEndIndex, children);
        const bottomChildren = slice(bottomChildrenStartIndex, bottomChildrenEndIndex, children);

        return (<div className={this._getComponentContainerClassName()}>
            {this._renderTopIconsContainer(topChildren)}
            {this._renderBottomIconsContainer(bottomChildren)}
        </div>);
    }

    render(): React.Node {
        return this._renderComponentContainer();
    }

    // endregion
}

// exports
export function VerticalIconNavigationMenuComponent(props: PropsTypes) {
    return (
        <MainThemeContext.Consumer>
            {windowDimensions => <VerticalIconNavigationMenuClass {...props} {...windowDimensions} />}
        </MainThemeContext.Consumer>
    );
}

VerticalIconNavigationMenuComponent.displayName = 'VerticalIconNavigationMenuComponent';