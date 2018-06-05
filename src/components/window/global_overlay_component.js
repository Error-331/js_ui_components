'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import {is, isNil, defaultTo} from 'ramda';
import {isNotNil} from '@webfuturistics/design_components';

// local imports

// type definitions
type ThemeType = {
    [string]: mixed,
    styleValuesRegister: {
        zIndex: number,
        releaseZIndex: (oldZIndex?: number) => boolean
    }
};

type PropsTypes = {
    /**
     * Flag that indicates whether to show or not to show global overlay component
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
        position: 'fixed',

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

            backgroundColor: theme.windowStyles.windowCommonOverlayColor,
            opacity: 0.5
        },

        '& > $childrenContainer': {
            boxSizing: 'border-box',
            display: 'flex',

            position: 'absolute',

            top: '0px',
            left: '0px',

            width: '100%',
            height: '100%',

            flexDirection: 'column',
            flexWrap: 'wrap',

            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'flex-start',
        }
    },

    semiTransparentBackgroundContainer: {},
    childrenContainer: {},
});

/**
 * Global overlay component.
 * Component is intended to be used as an overlay for different modal dialog boxes.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
class GlobalOverlayComponent extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'GlobalOverlayComponent';

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
    _getChildrenContainerClasses(): string {
        return this.props.classes.childrenContainer;
    }

    _getSemiTransparentBackgroundContainerClasses(): string {
        return this.props.classes.semiTransparentBackgroundContainer;
    }

    _getOverlayContainerClasses(): string {
        const {children, classes} = this.props;
        const {componentContainer} = classes;

        const isChildrenEmpty: boolean = isNil(children);

        return classNames(componentContainer, {
            'c-overlay-component-hidden': isChildrenEmpty
        });
    }

    // endregion

    // region label accessors
    // endregion

    // region state accessors
    // endregion

    // region prop accessors
    // endregion

    // region handlers
    _onOverlayClick(event: SyntheticMouseEvent<any>): void {
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
        const {opacity} = this.props;
        const styles: Object = isNotNil(opacity) ? {opacity} : {};

        return <div className={this._getSemiTransparentBackgroundContainerClasses()} style={styles}>
        </div>;
    }

    _renderOverlayContainer(): React.Node {
        const styles: Object = {zIndex: this.state.zIndex};

        return <div onClick={this._onOverlayClick} className={this._getOverlayContainerClasses()} style={styles}>
            {this._renderSemiTransparentBackgroundContainer()}
            {this._renderChildrenContainer()}
        </div>
    }

    render(): React.Node {
        const {show} = this.props;
        return defaultTo(false)(show) ? this._renderOverlayContainer() : null;
    }

    // endregion
}

// exports
export default injectSheet(styles)(GlobalOverlayComponent);