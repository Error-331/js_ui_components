'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';

import {isNil, defaultTo, map} from 'ramda';

// local imports
import type {StateTypes as ThemeProps} from '../../../../src/theming/providers/main_theme_provider';
import type {ThemeType} from '../../../../src/types/theme_types';

import {RegularAlertComponent} from './regular_alert_component';

import {MainThemeContext} from '../../../../src/theming/providers/main_theme_provider';

// type definitions
type StyleType = {[string]: mixed};

type SnackBarItemType = {
    id: string | number,
    caption: string,
    iconClassName?: string,
    type?: 'error' | 'regular'
};

type PropsTypes = ThemeProps & {
    /**
     * Snack bar content items
     *
     */

    items?: Array<SnackBarItemType>,

    /**
     * JSS theme object
     *
     * @ignore
     */

    theme: ThemeType,

    /**
     * JSS inner classes
     *
     * @ignore
     */

    classes: any
}

type StateTypes = {
    /**
     * CSS z-index property value for current snack bar
     *
     * @ignore
     */

    zIndex: number
};

// styles definition
const styles = theme => ({
    componentContainer: {
        boxSizing: 'border-box',
        display: 'flex',
        position: 'fixed',

        top: '0px',
        left: '0px',

        width: '100%',
        height: 'auto',

        flexDirection: 'column',
        flexWrap: 'wrap',

        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'center',

        padding: `${theme.layoutStyles.topSpacing}px 
                  ${theme.layoutStyles.rightSpacing}px 
                  ${theme.layoutStyles.bottomSpacing}px 
                  ${theme.layoutStyles.leftSpacing}px
        `,

        transitionProperty: 'height',
        transitionDuration: '0.2s',
        transitionTimingFunction: 'ease-out',

        '& > $itemContainer': {
            flexBasis: 'auto',
            flexGrow: 0,
            flexShrink: 1,

            width: '50%',

            marginTop: `${theme.layoutStyles.sectionVerticalSpacing}px`
        },

        '& > $itemContainer:first-child': {
            marginTop: '0px'
        }
    },

    itemContainer: {},
});

/**
 * Snack bar component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation

// $FlowFixMe decorators
@injectSheet(styles, {injectTheme: true})
class SnackBarClass extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'SnackBarClass';

    static defaultProps = {
        items: null,
    };

    static defaultState = {
        zIndex: 0
    };

    // endregion

    // region private props
    // endregion

    // region constructor
    constructor(props: PropsTypes): void {
        super(props);

        this.state = {
            zIndex: this.props.theme.styleValuesRegister.zIndex
        };
    }

    // endregion

    // region business logic
    // endregion

    // region lifecycle methods
    static getDerivedStateFromProps(props: PropsTypes, state: StateTypes): StateTypes | null {
        if (!props.theme.styleValuesRegister.isTop(state.zIndex)) {
            props.theme.styleValuesRegister.releaseZIndex(state.zIndex);

            return {
                zIndex: props.theme.styleValuesRegister.zIndex
            };
        }

        return null;
    }

    // endregion

    // region style accessors
    _getItemClassName(): string {
        return this.props.classes.itemContainer;
    }

    _getComponentContainerClassName(): string {
        return this.props.classes.componentContainer;
    }

    _getComponentContainerStyle(): StyleType {
        return {
          zIndex: this._getComponentContainerZIndex()
        };
    }

    // endregion

    // region label accessors
    // endregion

    // region state accessors
    _getComponentContainerZIndex(): number {
        return defaultTo(SnackBarClass.defaultState.zIndex)(this.state.zIndex);
    }

    // endregion

    // region prop accessors
    _getItems(): Array<SnackBarItemType> | null {
        return defaultTo(SnackBarClass.defaultProps.items)(this.props.items)
    }

    // endregion

    // region handlers
    // endregion

    // region render methods
    _renderAlerts(): React.Node {
        const items: Array<SnackBarItemType> | null = this._getItems();

        if (isNil(items)) {
            return null;
        }

        return map(item => <RegularAlertComponent
            accent={item.type === 'error'}
            containerClassName={this._getItemClassName()}
            iconClassName={item.iconClassName}
            key={item.id}
        >{item.caption}</RegularAlertComponent>, items);
    }

    _renderComponentContainer(): React.Node {
        if (isNil(this._getItems())) {
            return null;
        }

        return <div
            className={this._getComponentContainerClassName()}
            style={this._getComponentContainerStyle()}
        >
            {this._renderAlerts()}
        </div>;
    }

    render(): React.Node {
        return this._renderComponentContainer();
    }

    // endregion
}

function SnackBarComponent(props: PropsTypes) {
    return (
        <MainThemeContext.Consumer>
            {windowDimensions => <SnackBarClass {...props} {...windowDimensions} />}
        </MainThemeContext.Consumer>
    );
}

SnackBarComponent.displayName = 'SnackBarComponent';

// exports
export type {SnackBarItemType, PropsTypes, StateTypes};
export {SnackBarClass, SnackBarComponent};
