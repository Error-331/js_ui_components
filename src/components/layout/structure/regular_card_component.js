'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import {always, complement, isEmpty, ifElse} from 'ramda';

// local imports

// type definitions
type CardChildrenType = React.ChildrenArray<void | null | string | number | React.Element<any>>;

type PropsTypes = {
    /**
     * Card header
     */

    header?: ?CardChildrenType,

    /**
     * Content for card body
     */

    children?: ?CardChildrenType,

    /**
     * Class names for card container outer div
     */

    containerClassNames?: ?string,

    /**
     * Styles for card container outer div
     */

    containerStyles?: {
        [string]: mixed
    },

    /**
     * Styles for card container body div
     */

    bodyStyles?: {
        [string]: mixed
    },

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

        flexDirection: 'column',
        flexWrap: 'nowrap',

        justifyContent: 'flex-start',
        alignItems: 'stretch',
        alignContent: 'flex-start',

        borderRadius: theme.layoutStyles.layoutHeaderCommonBorderRadius,
        boxShadow: theme.materialDepthLevels.materialDepth1BoxShadow,

        backgroundColor: theme.layoutStyles.layoutBodyCommonBackgroundColor,

        '& > $componentHeader': {
            boxSizing: 'border-box',

            flexBasis: 'auto',
            flexGrow: 0,
            flexShrink: 1,
        },

        '& > $componentBody': {
            boxSizing: 'border-box',
            display: 'flex',

            flexBasis: 'auto',
            flexGrow: 0,
            flexShrink: 1,

            flexDirection: 'column',
            flexWrap: 'nowrap',

            justifyContent: 'flex-start',
            alignItems: 'stretch',
            alignContent: 'flex-start',

            padding: '8px 8px 10px 10px',
            borderRadius: theme.layoutStyles.layoutHeaderCommonBorderRadius,

            fontFamily: theme.layoutStyles.layoutBodyCommonFontFamily,
            fontSize: theme.layoutStyles.layoutBodyCommonFontSize
        }
    },

    componentHeader: {},
    componentBody: {}
});

/**
 * Regular card component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
class RegularCardComponent extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'RegularCardComponent';

    static defaultProps = {
        containerClassNames: ''
    };

    // endregion

    // region constructor
    // endregion

    // region lifecycle methods
    // endregion

    // region style accessors
    _getOuterContainerClasses(): string {
        return classNames(this.props.classes.componentContainer, this.props.containerClassNames);
    }

    // endregion

    // region label accessors
    // endregion

    // region state accessors
    // endregion

    // region prop accessors
    // endregion

    // region handlers
    // endregion

    // region render methods
    _renderHeader(): ?React.Node {
        return ifElse(
            complement(isEmpty),
            header =>
                <div className={this.props.classes.componentHeader}>
                    {header}
                </div>,
            always(null)
        )(this.props.header);
    }

    _renderBody(): React.Node {
        return <div className={this.props.classes.componentBody} style={this.props.bodyStyles}>
            {this.props.children}
        </div>;
    }

    _renderOuterContainer(): React.Node {
        return (
            <div className={this._getOuterContainerClasses()} style={this.props.containerStyles}>
                {this._renderHeader()}
                {this._renderBody()}
            </div>
        );
    }

    render(): React.Node {
        return this._renderOuterContainer()
    }

    // endregion
}

// exports
export default injectSheet(styles)(RegularCardComponent);