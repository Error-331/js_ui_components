'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import {defaultTo, length, slice} from 'ramda';

// local imports
import {MainThemeContext} from './../../theming';

// type definitions

type PropsTypes = {
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

        maxWidth: '50px',
        height: '100%',

        flexDirection: 'column',
        flexWrap: 'nowrap',

        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'flex-start',

        backgroundColor: 'blue',

        '& > $topIconsContainer': {
            extend: iconsContainer(theme),

            alignContent: 'flex-start',
        },

        '& > $bottomIconsContainer': {
            extend: iconsContainer(theme),

            alignContent: 'flex-end',
        }
    },

    topIconsContainer: {},
    bottomIconsContainer: {}
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
        return this.props.classes.topIconsContainer;
    }

    _getBottomIconsContainerClassName(): string {
        return this.props.classes.bottomIconsContainer;
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
    _renderIconContainers(): React.Node {

    }

    _renderBottomIconsContainer(): React.Node {

    }

    _renderTopIconsContainer(): React.Node {

    }

    _renderComponentContainer(): React.Node {
        const children: Array<React.Node> = React.Children.toArray(this.props.children);
        const childrenCount: number = length(children);

        const bottomChildrenCount: number = this._getBottomItemsCount();
        const topChildrenCount: number = childrenCount - bottomChildrenCount;

        const bottomChildrenStartIndex: number = childrenCount - topChildrenCount;
        const bottomChildrenEndIndex: number = bottomChildrenStartIndex +  bottomChildrenCount;

        const topChildren = slice(0, topChildrenCount, children);
        const bottomChildren = slice(bottomChildrenStartIndex, bottomChildrenEndIndex, children);

        return (<div className={this._getComponentContainerClassName()}>
            <div className={this._getTopIconsContainerClassName()}>
                {topChildren}
            </div>

            <div className={this._getBottomIconsContainerClassName()}>
                {bottomChildren}
            </div>
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