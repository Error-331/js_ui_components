'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';

import classNames from 'classnames';
import {T, isNil, always, equals, defaultTo, unless, cond} from 'ramda';

// local imports
import type {ThemeType} from '../../../src/types/theme_types';

import {MainThemeContext} from '../../../src/theming/providers/main_theme_provider';
import {OverlayComponent} from '../window/overlay_component';

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
     * Opacity of overlay
     */

    overlayOpacity?: number,

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

        transitionDelay: '0s',
        transitionProperty: 'top',
        transitionTimingFunction: 'ease-in-out',

        zIndex: '2',

        backgroundColor: 'transparent',

        '&.horizontalSlider': {
            width: 'auto',
            height: '100%'
        },

        '&.verticalSlider': {
            width: 'auto',
            height: 'auto'
        },

        '& $contentContainer': {
            boxSizing: 'border-box',

            width: '100%',
            height: '100%',

            padding: `${theme.layoutStyles.topSpacing}px 
                      ${theme.layoutStyles.rightSpacing}px 
                      ${theme.layoutStyles.bottomSpacing}px 
                      ${theme.layoutStyles.bottomSpacing}px
            `,
        }
    },

    contentContainer: {},
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
@injectSheet(styles, {injectTheme: true})
class SlideVisualEffectClass extends React.Component<PropsTypes, StateTypes> {
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

        self._getComponentContainerLeftToRightStyle = self._getComponentContainerLeftToRightStyle.bind(this);
        self._getComponentContainerRightToLeftStyle = self._getComponentContainerRightToLeftStyle.bind(this);
        self._getComponentContainerBottomToTopStyle = self._getComponentContainerBottomToTopStyle.bind(this);
        self._getComponentContainerTopToBottomStyle = self._getComponentContainerTopToBottomStyle.bind(this);

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
        };

        const componentWidth: number = this._getComponentContainerWidth();
        this._onComponentContainerWidthRead(componentWidth);

        return Object.assign({}, componentStyle, transitionStyle, style);
    }

    _getComponentContainerStyle(): CSSStylesType {
        return cond([
            [equals('LeftToRight'), this._getComponentContainerLeftToRightStyle],
            [equals('RightToLeft'), this._getComponentContainerRightToLeftStyle],
            [equals('BottomToTop'), this._getComponentContainerBottomToTopStyle],
            [equals('TopToBottom'), this._getComponentContainerTopToBottomStyle],
            [T, this._getComponentContainerBottomToTopStyle]
        ])(this._getDirection());
    }

    _getComponentContainerClassName(): string {
        const sliderClassName: string = cond([
            [equals('LeftToRight'), always('horizontalSlider')],
            [equals('RightToLeft'), always('horizontalSlider')],
            [equals('BottomToTop'), always('verticalSlider')],
            [equals('TopToBottom'), always('verticalSlider')],
            [T, always('horizontalSlider')]
        ])(this._getDirection());

        return classNames(this.props.classes.componentContainer, sliderClassName, this.props.className);
    }

    _getContentContainerClassName(): string {
        return defaultTo('')(this.props.classes.contentContainer);
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

    _getOverlayOpacity(): number {
        const {overlayOpacity, theme} = this.props;
        return defaultTo(theme.windowStyles.overlayOpacity)(overlayOpacity);
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
    _renderContentContainer(): React.Node {
        return <div className={this._getContentContainerClassName()}>
            {this.props.children}
        </div>;
    }

    _renderOverlayComponent(): React.Node {
        return <OverlayComponent opacity={this._getOverlayOpacity()} show={true}>
            {this._renderContentContainer()}
        </OverlayComponent>;
    }

    _renderComponentContainer(): React.Node {
        return <div
            ref={this.$componentContainer}
            className={this._getComponentContainerClassName()}
            style={this._getComponentContainerStyle()}
        >
            {this._renderOverlayComponent()}
        </div>;
    }

    render(): React.Node {
        return this._renderComponentContainer();
    }
    // endregion
}

function SlideVisualEffect(props: PropsTypes) {
    return (
        <MainThemeContext.Consumer>
            {windowDimensions => <SlideVisualEffectClass {...props} {...windowDimensions} />}
        </MainThemeContext.Consumer>
    );
}

SlideVisualEffect.displayName = 'SlideVisualEffect';

// exports
export {SlideVisualEffectClass, SlideVisualEffect};
export default SlideVisualEffect;
