'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import {defaultTo} from 'ramda';

// local imports
import {RegularPanelComponent} from './regular_panel_component';
import {MainThemeContext} from '../../../../src/theming/providers/main_theme_provider';

// type definitions
export type ClickCallbackType = (event: SyntheticEvent<HTMLElement>) => void;

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

    onIconClick?: ClickCallbackType,

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

        borderBottomLeftRadius: '0px',
        borderBottomRightRadius: '0px',

        '& > $titleContainer': {
            boxSizing: 'border-box',

            flexBasis: 'auto',
            flexGrow: 0,
            flexShrink: 1,

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

            fontSize: `${theme.layoutStyles.headerFontSize}px`,
            color: theme.layoutStyles.headerFontColor,
        }
    },

    titleContainer: {},
    iconContainer: {},
});

/**
 * Regular card header component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation

// $FlowFixMe decorators
@injectSheet(styles)
class RegularCardHeaderClass extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'RegularCardHeaderClass';

    static defaultProps = {
        onIconClick: () => {},
    };

    // endregion

    // region constructor
    // endregion

    // region lifecycle methods
    // endregion

    // region style accessors
    _getComponentContainerStyle(): StyleType {
        return Object.assign({}, this._getContainerStyle());
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
    _getIconClickHandler(): ClickCallbackType {
        return defaultTo(RegularCardHeaderClass.defaultProps.onIconClick)(this.props.onIconClick);
    }

    _getContainerStyle(): StyleType {
        return defaultTo({})(this.props.containerStyle);
    }

    // endregion

    // region handlers
    // endregion

    // region render methods
    _renderIconContainer(): React.Node {
        const {iconClassNames} = this.props;
        return iconClassNames ? <i
            onClick={this._getIconClickHandler()}
            className={this._getIconClasses()}
        /> : null;
    }

    _renderTitleContainer(): React.Node {
        return <div className={this._getTitleContainerClassName()}>
            {this.props.children}
        </div>;
    }

    _renderComponentContainer(): React.Node {
        return <RegularPanelComponent
            style={this._getComponentContainerStyle()}
            className={this._getComponentClassName()}
        >
            {this._renderTitleContainer()}
            {this._renderIconContainer()}
        </RegularPanelComponent>;
    }

    render(): React.Node {
        return this._renderComponentContainer();
    }

    // endregion
}

function RegularCardHeaderComponent(props: PropsTypes) {
    return (
        <MainThemeContext.Consumer>
            {windowDimensions => <RegularCardHeaderClass {...props} {...windowDimensions} />}
        </MainThemeContext.Consumer>
    );
}

RegularCardHeaderComponent.displayName = 'RegularCardHeaderComponent';

// exports
export {RegularCardHeaderClass, RegularCardHeaderComponent};
export default RegularCardHeaderComponent;
