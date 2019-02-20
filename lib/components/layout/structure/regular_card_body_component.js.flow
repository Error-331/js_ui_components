'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import {defaultTo} from 'ramda';

// local imports

// type definitions
export type CSSStylesType = {
    [string]: mixed
};

export type ClickCallbackType = (event: SyntheticEvent<HTMLDivElement>) => void;

type PropsTypes = {
    /**
     * Component container class name
     */

    className?: string,

    /**
     * Component container styles
     */

    style?: CSSStylesType,

    /**
     * Content for card body
     */

    children?: React.Node,

    /**
     * Callback function which will be called once user clicks on a card body
     */

    onClick?: ?ClickCallbackType,

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
        position: 'relative',

        flexBasis: 'auto',
        flexGrow: 0,
        flexShrink: 1,

        flexDirection: 'column',
        flexWrap: 'nowrap',

        justifyContent: 'flex-start',
        alignItems: 'stretch',
        alignContent: 'flex-start',

        padding: `${theme.layoutStyles.topSpacing}px 
                      ${theme.layoutStyles.rightSpacing}px 
                      ${theme.layoutStyles.bottomSpacing}px 
                      ${theme.layoutStyles.leftSpacing}px
            `,

        borderRadius: theme.layoutStyles.headerBorderRadius,

        fontFamily: theme.layoutStyles.bodyFontStack,
        fontSize: theme.layoutStyles.bodyFontSize,

        color: theme.layoutStyles.bodyFontColor,
    },
});

/**
 * Regular card body component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation

// $FlowFixMe decorators
@injectSheet(styles)
class RegularCardBodyComponent extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'RegularCardBodyComponent';

    static defaultProps = {
        onClick: () => {},

        classes: {},
        style: {},
    };

    // endregion

    // region constructor
    // endregion

    // region business logic
    // endregion

    // region lifecycle methods
    // endregion

    // region style accessors
    _getStyle(): CSSStylesType {
        return defaultTo(RegularCardBodyComponent.defaultProps.style)
        (this.props.style);
    }

    _getClassName(): string {
        return classNames(
            this.props.classes.componentContainer,
            this.props.className
        );
    }

    // endregion

    // region label accessors
    // endregion

    // region state accessors
    // endregion

    // region prop accessors
    _getClickHandler(): ClickCallbackType {
        return defaultTo(RegularCardBodyComponent.defaultProps.onClick)
        (this.props.onClick);
    }

    // endregion

    // region handlers
    // endregion

    // region render methods
    _renderComponentContainer(): React.Node {
        const {children} = this.props;

        return <div
            className={this._getClassName()}
            style={this._getStyle()}
            onClick={this._getClickHandler()}
        >
            {children}
        </div>;
    }

    render(): React.Node {
        return this._renderComponentContainer();
    }

    // endregion
}

// exports
export {RegularCardBodyComponent};