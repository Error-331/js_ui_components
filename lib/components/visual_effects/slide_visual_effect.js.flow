'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';

import classNames from 'classnames';
import {isNil, equals, defaultTo, unless} from 'ramda';

// local imports
import {MainThemeContext} from './../../theming/providers/main_theme_provider';

// type definitions
type CSSStylesType = {
    [string]: mixed
};

type DirectionType = 'LeftToRight' | 'RightToLeft' | 'TopToBottom' | 'BottomToTop';
type ComponentContainerWidthChangeHandler = (width: number) => void;

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
     * Callback function that will be called if width of the components top container width changes
     */

    onComponentContainerWidthChange?: ComponentContainerWidthChangeHandler,

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
        boxSizing: 'border-box',
        position: 'absolute',

        padding: `${theme.layoutStyles.topSpacing}px 
                  ${theme.layoutStyles.rightSpacing}px 
                  ${theme.layoutStyles.bottomSpacing}px 
                  ${theme.layoutStyles.bottomSpacing}px
        `,

        transitionDelay: '0s',
        transitionProperty: 'top',
        transitionTimingFunction: 'ease-in-out',

        zIndex: '2',

        backgroundColor: theme.baseStyles.mainSecondaryColor,
    }
});

/**
 * Slide - visual effect.
 * Parent component should have 'position' style set to 'absolute' or 'relative' as well as 'overflow' to 'hidden'.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation

// $FlowFixMe decorators
@injectSheet(styles)
export class SlideVisualEffectClass extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'SlideVisualEffectClass';

    static defaultProps = {
        direction: 'BottomToTop',
        show: false,
        duration: '0.7s',

        onComponentContainerWidthChange: () => {},

        style: {},
    };

    // endregion

    // region private props
    $componentContainer: any;

    componentContainerWidth: number = 0; // px

    // endregion

    // region constructor
    constructor(props: PropsTypes) {
        super(props);
        const self: any = this;

        self._onComponentContainerWidthRead = self._onComponentContainerWidthRead.bind(this);
        this.$componentContainer = React.createRef();
    }

    // endregion

    // region business logic
    // endregion

    // region lifecycle methods
    // endregion

    // region style accessors
    _getComponentContainerLeftToRightStyle(): CSSStylesType {
        const shouldShow: boolean = this._shouldShow();
        const duration: string = this._getDuration();

        const style: CSSStylesType = this._getStyle();

        // +1 - accounting  fault
        const componentWidth: number = this._getComponentContainerWidth() + 1;
        this._onComponentContainerWidthRead(componentWidth);

        const transitionStyle: CSSStylesType = {
            transitionProperty: 'left',
            transitionDuration: duration
        };

        const componentStyle: CSSStylesType = {
            top:  '0px',
            left: shouldShow ? `0%` : `calc(0% - ${componentWidth}px)`,

            width: 'auto',
            height: '100%'
        };

        return Object.assign({}, componentStyle, transitionStyle, style);
    }

    _getComponentContainerRightToLeftStyle(): CSSStylesType {
        const shouldShow: boolean = this._shouldShow();
        const duration: string = this._getDuration();

        const style: CSSStylesType = this._getStyle();

        const componentWidth: number = this._getComponentContainerWidth();
        this._onComponentContainerWidthRead(componentWidth);

        const transitionStyle: CSSStylesType = {
            transitionProperty: 'left',
            transitionDuration: duration
        };

        const componentStyle: CSSStylesType = {
            top:  '0px',
            left: shouldShow ? `calc(100% - ${componentWidth}px)` : '100%',

            width: 'auto',
            height: '100%'
        };

        return Object.assign({}, componentStyle, transitionStyle, style);
    }

    _getComponentContainerBottomToTopStyle(): CSSStylesType {
        const shouldShow: boolean = this._shouldShow();
        const duration: string = this._getDuration();

        const style: CSSStylesType = this._getStyle();

        const componentHeight: number = this._getComponentContainerHeight();

        const transitionStyle: CSSStylesType = {
            transitionProperty: 'top',
            transitionDuration: duration
        };

        const componentStyle: CSSStylesType = {
            top:  shouldShow ? `calc(100% - ${componentHeight}px)` : '100%',
            left: '0px',

            width: 'auto',
            height: 'auto'
        };

        const componentWidth: number = this._getComponentContainerWidth();
        this._onComponentContainerWidthRead(componentWidth);

        return Object.assign({}, componentStyle, transitionStyle, style);
    }

    _getComponentContainerTopToBottomStyle(): CSSStylesType {
        const shouldShow: boolean = this._shouldShow();
        const duration: string = this._getDuration();

        const style: CSSStylesType = this._getStyle();

        const componentHeight: number = this._getComponentContainerHeight();

        const transitionStyle: CSSStylesType = {
            transitionProperty: 'top',
            transitionDuration: duration
        };

        const componentStyle: CSSStylesType = {
            top:  shouldShow ? '0%' : `calc(0% - ${componentHeight}px)`,
            left: '0px',

            width: 'auto',
            height: 'auto'
        };

        const componentWidth: number = this._getComponentContainerWidth();
        this._onComponentContainerWidthRead(componentWidth);

        return Object.assign({}, componentStyle, transitionStyle, style);
    }

    _getComponentContainerStyle(): CSSStylesType {
        switch(this._getDirection()) {
            case 'LeftToRight':
                return this._getComponentContainerLeftToRightStyle();

            case 'RightToLeft':
                return this._getComponentContainerRightToLeftStyle();

            case 'BottomToTop':
                return this._getComponentContainerBottomToTopStyle();

            case 'TopToBottom':
                return this._getComponentContainerTopToBottomStyle();

            default:
                return this._getComponentContainerBottomToTopStyle();
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
    _getComponentContainerWidthChangeHandler(): ComponentContainerWidthChangeHandler {
        return defaultTo(SlideVisualEffectClass.defaultProps.onComponentContainerWidthChange)
        (this.props.onComponentContainerWidthChange);
    }

    _shouldShow(): boolean {
        return defaultTo(SlideVisualEffectClass.defaultProps.show)(this.props.show);
    }

    _getDirection(): DirectionType {
        return defaultTo(SlideVisualEffectClass.defaultProps.direction)(this.props.direction);
    }

    _getDuration(): string {
        return defaultTo(SlideVisualEffectClass.defaultProps.duration)(this.props.duration);
    }

    _getStyle(): CSSStylesType {
        return defaultTo(SlideVisualEffectClass.defaultProps.style)(this.props.style);
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
    _onComponentContainerWidthRead(width: number) {
        unless(equals(this.componentContainerWidth), (width: number) => {
            this.componentContainerWidth = width;
            this._getComponentContainerWidthChangeHandler()(width);
        })(width);
    }

    // endregion

    // region render methods
    _renderComponentContainer(): React.Node {
        return <div
            ref={this.$componentContainer}
            className={this._getComponentContainerClassName()}
            style={this._getComponentContainerStyle()}
        >
            {this.props.children}
        </div>;
    }

    render(): React.Node {
        return this._renderComponentContainer();
    }
    // endregion
}

// exports
export function SlideVisualEffect(props: PropsTypes) {
    return (
        <MainThemeContext.Consumer>
            {windowDimensions => <SlideVisualEffectClass {...props} {...windowDimensions} />}
        </MainThemeContext.Consumer>
    );
}

SlideVisualEffect.displayName = 'SlideVisualEffect';
