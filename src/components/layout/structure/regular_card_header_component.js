'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import {defaultTo} from 'ramda';

// local imports

// type definitions
type StyleType = {
    [string]: mixed
};

type PropsTypes = {
    /**
     * Class name for card header container outer div
     */

    containerClassName?: string,

    /**
     * Styles for card header container outer div
     */

    containerStyle?: StyleType,

    /**
     * Class names which will be added to title container
     */

    titleClassName?: string,

    /**
     * Class names which will be used to display icon
     */

    iconClassNames?: string,

    /**
     * Callback function which will be called when icon is clicked
     */

    onIconClick?: (event: SyntheticMouseEvent<any>) => void,

    /**
     * Content for card header
     */

    children?: React.ChildrenArray<any>,

    /**
     * JSS inner classes
     *
     * @ignore
     */

    classes: any
};

type StateTypes = {};

// styles definition
const styles = theme => ({
    componentContainer: {
        boxSizing: 'border-box',
        display: 'flex',

        flexBasis: 'auto',
        flexGrow: 0,
        flexShrink: 1,

        flexDirection: 'row',
        flexWrap: 'nowrap',

        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'flex-start',

        borderTopLeftRadius: theme.layoutStyles.headerBorderRadius,
        borderTopRightRadius: theme.layoutStyles.headerBorderRadius,

        backgroundColor: theme.layoutStyles.headerBGColor,

        '& > $titleContainer': {
            boxSizing: 'border-box',

            flexBasis: 'auto',
            flexGrow: 0,
            flexShrink: 1,

            padding: '10px 0px 10px 10px',

            overflow: 'hidden',
            textOverflow: 'ellipsis',

            fontFamily: theme.layoutStyles.headerFontStack,
            fontSize: `${theme.layoutStyles.headerFontSize}px`,

            color: theme.layoutStyles.headerFontColor,
        },

        '& > $titleContainer:first-letter': {
            textTransform: 'capitalize',
        },

        '& > $iconContainer': {
            boxSizing: 'border-box',

            flexBasis: 'auto',
            flexGrow: 0,
            flexShrink: 1,

            paddingRight: '10px',

            fontSize: `${theme.layoutStyles.headerFontSize}px`,
            cursor: 'pointer',
            color: theme.layoutStyles.headerFontColor,
        }
    },

    titleContainer: {},
    iconContainer: {},
});

/**
 * Regular card component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
export class RegularCardHeaderComponentClass extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'RegularCardHeaderComponent';

    // endregion

    // region constructor
    // endregion

    // region lifecycle methods
    // endregion

    // region style accessors
    _getComponentContainerStyle(): StyleType {
        return Object.assign({}, this._getContainerStyle())
    }

    _getComponentClassName(): string {
        return classNames(this.props.classes.componentContainer, this.props.containerClassName);
    }

    _getTitleContainerClassName(): string {
        return classNames(this.props.classes.titleContainer, this.props.titleClassName);
    }

    _getIconClasses(): string {
        return classNames(
            this.props.classes.iconContainer,
            this.props.iconClassNames,

        );
    }

    // endregion

    // region label accessors
    // endregion

    // region state accessors
    // endregion

    // region prop accessors
    _getContainerStyle(): StyleType {
        return defaultTo({})(this.props.containerStyle);
    }

    // endregion

    // region handlers
    // endregion

    // region render methods
    _renderIconContainer(): React.Node {
        const {iconClassNames} = this.props;
        return iconClassNames ? <i className={this._getIconClasses()}/> : null;
    }

    _renderTitleContainer(): React.Node {
        return <div className={this._getTitleContainerClassName()}>
            {this.props.children}
        </div>;
    }

    _renderComponentContainer(): React.Node {
        return <div
            style={this._getComponentContainerStyle()}
            className={this._getComponentClassName()}
        >
            {this._renderTitleContainer()}
            {this._renderIconContainer()}
        </div>;
    }

    render(): React.Node {
        return this._renderComponentContainer();
    }

    // endregion
}

// exports
export const RegularCardHeaderComponent = injectSheet(styles)(RegularCardHeaderComponentClass);