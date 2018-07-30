'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

// local imports

// type definitions
type PropsTypes = {
    /**
     * Card title
     */

    title?: string,

    /**
     * Class names which will be used to display icon
     */

    iconClassNames?: string,

    /**
     * Callback function which will be called when icon is clicked
     */

    onIconClick?: (event: SyntheticMouseEvent<any>) => void,

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
class RegularCardHeaderComponent extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'RegularCardHeaderComponent';

    // endregion

    // region constructor
    // endregion

    // region lifecycle methods
    // endregion

    // region style accessors
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
    // endregion

    // region handlers
    // endregion

    // region render methods
    _renderIconContainer(): React.Node {
        const {iconClassNames} = this.props;
        return iconClassNames ? <i className={this._getIconClasses()}/> : null;
    }

    _renderTitleContainer(): React.Node {
        return <div className={this.props.classes.titleContainer}>
            {this.props.title}
        </div>;
    }

    _renderComponentContainer(): React.Node {
        return <div className={this.props.classes.componentContainer}>
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
export default injectSheet(styles)(RegularCardHeaderComponent);