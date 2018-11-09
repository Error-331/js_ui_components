'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';

import classNames from 'classnames';
import {isNil, defaultTo} from 'ramda';

// local imports

import {MainThemeContext} from './../../../theming/providers/main_theme_provider';

// type definitions
type CSSStylesType = {
    [string]: mixed
};

type DirectionType = 'leftToRight' | 'RightToLeft' | 'TopToBottom' | 'BottomToTop';

type PropsTypes = {

    /**
     * Direction of sliding
     */

    direction: DirectionType,

    /**
     * Flag indicates whether sliding part should be shown (begin sliding effect)
     */

    show?: boolean,

    /**
     * Duration of sliding
     */

    duration?: string,

    /**
     * React style object for in deep control of how component is represented
     */

    style?: CSSStylesType,

    /**
     * Name of the class which will be applied to component along with default one
     */

    className?: string,

    /**
     * JSS inner classes
     *
     * @ignore
     */

    classes: any,

    /**
     * Child node (with optional sub-nodes)
     */

    children?: React.ChildrenArray<any>,
}

type StateTypes = {};

// styles definition
const styles = theme => ({
    componentContainer: {
        position: 'absolute',

        backgroundColor: theme.baseStyles.mainSecondaryColor,

        transitionDelay: '0s',
        transitionProperty: 'top',
        transitionTimingFunction: 'ease-in-out',

        zIndex: '2',
    }
});

/**
 * Slider (bottom to top) visual effect.
 * Parent component should have 'position' set to 'absolute' or 'relative'.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation

// $FlowFixMe decorators
@injectSheet(styles)
export class BottomTopSlideVisualEffectClass extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'BottomTopSlideVisualEffect';

    static defaultProps = {
        direction: 'leftToRight',
        show: false,
        duration: '0.7s',

        style: {},
    };

    // endregion

    // region private props
    $componentContainer: any;

    // endregion

    // region constructor
    constructor(props: PropsTypes) {
        super(props);

        this.$componentContainer = React.createRef();
    }

    // endregion

    // region business logic
    // endregion

    // region lifecycle methods
    // endregion

    // region style accessors
    _getComponentContainerStyle(): CSSStylesType {
        const shouldShow: boolean = this._shouldShow();
        const transitionStyle: CSSStylesType = {transitionDuration: duration};

        switch(this._getDirection()) {
            case 'BottomToTop': {
                const componentHeight: number = this._getComponentContainerHeight();

                const componentStyle: CSSStylesType = {
                    top:  shouldShow ? `calc(100% - ${componentHeight}px)` : '100%',
                    left: '0px',

                    width: '100%',
                    height: 'auto'
                };



                return Object.assign({}, componentStyle, style);
            }
        }
    }

    _getComponentContainerClassName(): string {
        return classNames(this.props.classes.componentContainer, this.props.className);
    }

    // endregion

    // region label accessors
    // endregion

    // region state accessors
    // endregion

    // region prop accessors
    _shouldShow(): boolean {
        return defaultTo(BottomTopSlideVisualEffectClass.defaultProps.show)(this.props.show);
    }

    _getDirection(): DirectionType {
        return defaultTo(BottomTopSlideVisualEffectClass.defaultProps.direction)(this.props.direction);
    }

    _getComponentContainerHeight(): number {
        if (isNil(this.$componentContainer) || isNil(this.$componentContainer.current)) {
            return 0;
        }

        return this.$componentContainer.current.clientHeight;
    }

    _getComponentContainerWidth(): number {
        if (isNil(this.$componentContainer) || isNil(this.$componentContainer.current)) {
            return 0;
        }

        return this.$componentContainer.current.clientWidth;
    }

    // endregion

    // region handlers
    // endregion

    // region render methods
    _renderComponentContainer(): React.Node {
        let {show, duration, style, children} = this.props;

        show = defaultTo(false)(show);
        duration = defaultTo('2s')(duration);

        const componentHeight: number = this._getComponentContainerHeight();

        const topStyle: CSSStylesType = show ? {top: `calc(100% - ${componentHeight}px)`} : {top: '100%'};
        const transitionStyle: CSSStylesType = {transitionDuration: duration};
        const composedStyle: CSSStylesType = Object.assign({}, topStyle, transitionStyle, style);

        return <div
            ref={this.$componentContainer}
            className={this._getComponentContainerClassName()}
            style={composedStyle}
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
export function BottomTopSlideVisualEffect(props: PropsTypes) {
    return (
        <MainThemeContext.Consumer>
            {windowDimensions => <BottomTopSlideVisualEffectClass {...props} {...windowDimensions} />}
        </MainThemeContext.Consumer>
    );
}

BottomTopSlideVisualEffect.displayName = 'BottomTopSlideVisualEffect';
