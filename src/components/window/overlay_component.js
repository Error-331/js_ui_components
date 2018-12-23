'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import {is, isNil, defaultTo} from 'ramda';
import {isNotNil} from '@webfuturistics/design_components/lib/helpers/general/utility_helpers';

// local imports
import type {ThemeType} from './../../types/theme_types';

import {MainThemeContext} from './../../theming/providers/main_theme_provider';
import {ModalClass} from './modal_component';

// type definitions
type CSSStylesType = {
    [string]: mixed
};

type PropsTypes = {
    /**
     * Flag that indicates whether to show or not to show overlay component
     */

    show?: boolean,

    /**
     * Opacity of overlay
     */

    opacity: ?number,

    /**
     * Callback function which will be called when overlay is clicked
     */

    onOverlayClick?: (event: SyntheticMouseEvent<any>) => void,

    /**
     * Child node (with optional sub-nodes)
     */

    children?: React.ChildrenArray<any>,

    /**
     * Name of the class which will be applied to component container along with default one
     */

    containerClassName?: string,

    /**
     * React style object for in deep control of how overlay container is represented
     */

    containerStyle?: CSSStylesType,

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
     * CSS z-index property value for current overlay
     *
     * @ignore
     */

    zIndex: number
};

// styles definition
const styles = theme => ({
    componentContainer: {
        display: 'block',
        position: 'relative',

        top: '0px',
        left: '0px',

        width: '100%',
        height: '100%',

        '& > $semiTransparentBackgroundContainer': {
            position: 'absolute',

            top: '0px',
            left: '0px',

            width: '100%',
            height: '100%',

            backgroundColor: theme.windowStyles.overlayColor,
            opacity: 0.5
        },

        '& > $childrenContainer': {
            boxSizing: 'border-box',
            display: 'grid',

            position: 'absolute',

            top: '0px',
            left: '0px',

            width: '100%',
            height: '100%',

            gridColumnGap: '25px',
            gridRowGap: '15px',

            gridTemplateColumns: '1fr',
            gridTemplateRows: '1fr',

            justifyItems: 'center',
            alignItems: 'center',
        }
    },

    semiTransparentBackgroundContainer: {},
    childrenContainer: {},
});

/**
 * Overlay component.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation

// $FlowFixMe decorators
@injectSheet(styles)
export class OverlayClass extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'OverlayClass';

    // endregion

    // region constructor
    constructor(props: PropsTypes): void {
        super(props);
        const self: any = this;

        self._onOverlayClick = self._onOverlayClick.bind(this);

        this.state = {
            zIndex: this.props.theme.styleValuesRegister.zIndex
        };
    }

    // endregion

    // region lifecycle methods
    componentWillUnmount(): void {
        this.props.theme.styleValuesRegister.releaseZIndex(this.state.zIndex);
    }

    // endregion

    // region style accessors
    _getOverlayContainerStyle(): CSSStylesType {
        return Object.assign(
            {},
            {zIndex: this.state.zIndex},
            this._getOverlayContainerStyleProp()
        );
    }

    _getChildrenContainerClasses(): string {
        return this.props.classes.childrenContainer;
    }

    _getSemiTransparentBackgroundContainerClasses(): string {
        return this.props.classes.semiTransparentBackgroundContainer;
    }

    _getOverlayContainerClasses(): string {
        const {children, containerClassName, classes} = this.props;
        const {componentContainer} = classes;

        const isChildrenEmpty: boolean = isNil(children);

        return classNames(componentContainer, {
            'c-overlay-component-hidden': isChildrenEmpty,
        }, containerClassName);
    }

    // endregion

    // region label accessors
    // endregion

    // region state accessors
    // endregion

    // region prop accessors
    _getOverlayContainerStyleProp(): CSSStylesType {
        return defaultTo({})(this.props.containerStyle);
    }

    _getOpacity(): number {
        const {opacity, theme} = this.props;
        return defaultTo(theme.windowStyles.overlayOpacity)(opacity);
    }

    _shouldShow(): boolean {
        const {show} = this.props;
        return defaultTo(ModalClass.defaultProps.show)(show);
    }

    // endregion

    // region handlers
    _onOverlayClick(event: SyntheticMouseEvent<any>): void {
        event.stopPropagation()

        const targetDOMElement:EventTarget = event.target;
        const {classes, onOverlayClick} = this.props;
        const {childrenContainer} = classes;

        if (is(Function, onOverlayClick) &&
            isNotNil(targetDOMElement) &&
            targetDOMElement instanceof HTMLDivElement &&
            targetDOMElement.classList.contains(childrenContainer)) {
            onOverlayClick(event);
        }
    }

    // endregion

    // region render methods
    _renderChildrenContainer(): React.Node {
        return <div className={this._getChildrenContainerClasses()}>
            {this.props.children}
        </div>;
    }

    _renderSemiTransparentBackgroundContainer(): React.Node {
        const styles: Object = {opacity: this._getOpacity()};

        return <div  className={this._getSemiTransparentBackgroundContainerClasses()} style={styles}>
        </div>;
    }

    _renderOverlayContainer(): React.Node {
        return <div
            onClick={this._onOverlayClick}
            className={this._getOverlayContainerClasses()}
            style={this._getOverlayContainerStyle()}
        >
            {this._renderSemiTransparentBackgroundContainer()}
            {this._renderChildrenContainer()}
        </div>;
    }

    render(): React.Node {
        return this._shouldShow() ? this._renderOverlayContainer() : null;
    }

    // endregion
}

// exports
export function OverlayComponent(props: PropsTypes) {
    return (
        <MainThemeContext.Consumer>
            {windowDimensions => <OverlayClass {...props} {...windowDimensions} />}
        </MainThemeContext.Consumer>
    );
}

OverlayComponent.displayName = 'OverlayComponent';