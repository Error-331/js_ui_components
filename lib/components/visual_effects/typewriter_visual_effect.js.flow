'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import {always, isNil, is, unless, or, ifElse, defaultTo, length, bind, lte, gte, equals} from 'ramda';

// local imports
import type {ThemeType} from './../../types/theme_types';

import {MainThemeContext} from './../../theming/providers/main_theme_provider';
import {InlineHeader} from './../layout/text/inline_header';

// type definitions
type CSSStylesType = {
    [string]: mixed
};

type AnimationStageType = 'forward' | 'backward';

type PropsTypes = {
    /**
     * Text (or texts) to which visual effect will be applied
     */

    text?: string | Array<string>,

    /**
     * Header level (effects font size)
     */

    level?: number,

    /**
     * Number of loops before whole animation stops
     */

    loopCount?: number,

    /**
     * Flag which indicates whether animation should stop after `backward` animation is played.
     * Works only if `loopCount` is not Infinity
     */

    stopOnEnd?: boolean,

    /**
     * Delay in milliseconds before each animation step
     */

    animationDelay?: number,

    /**
     * Outer container class name
     */

    containerClassName?: string,

    /**
     * Text container class name
     */

    textClassName?: string,

    /**
     * Outer container style
     */

    containerStyle?: CSSStylesType,

    /**
     * JSS inner classes
     *
     * @ignore
     */

    classes: any,

    /**
     * JSS theme object
     *
     * @ignore
     */

    theme: ThemeType,
};

type StateTypes = {
    /**
     * Current text index (if there is a single text - it will also be converted to array)
     */

    currentTextIndex: number,

    /**
     * Animation loop index (whole animation)
     */

    currentLoopIndex: number,

    /**
     * Current animation stage (caret moving forward or backward)
     */

    animationStage: AnimationStageType
};

// styles definition
const styles = theme => ({
    componentContainer: {
        boxSizing: 'border-box',
        display: 'inline-block',

        '& > $textContainer': {
            display: 'inline-block',
            overflow: 'hidden',

            margin: '0 auto',
            borderRight: `4px solid ${theme.baseStyles.accentColorPrimary}`,

            whiteSpace: 'nowrap',
            letterSpacing: '4px',
        }
    },

    textContainer: {},
});

// constants definition TYPEWRITER_VISUAL_EFFECT_
export const TYPEWRITER_VISUAL_EFFECT_ANIMATION_STEP_RATIO: number = 0.0875;
export const TYPEWRITER_VISUAL_EFFECT_TYPING_FORWARD_KEYFRAMES_STYLE_NAME: string = 'typewriter_visual_effect_typing_forward_keyframes';
export const TYPEWRITER_VISUAL_EFFECT_TYPING_BACKWARD_KEYFRAMES_STYLE_NAME: string = 'typewriter_visual_effect_typing_backward_keyframes';
export const TYPEWRITER_VISUAL_EFFECT_CARET_BLINK_KEYFRAMES_STYLE_NAME: string = 'typewriter_visual_effect_caret_bling_keyframes';

export const TYPEWRITER_VISUAL_EFFECT_ANIMATION_STAGE_FORWARD_NAME: AnimationStageType = 'forward';
export const TYPEWRITER_VISUAL_EFFECT_ANIMATION_STATE_BACKWARD_NAME: AnimationStageType = 'backward';

/**
 * Typewriter visual effect.
 * Uses [InlineHeader](#inlineheader) component for text representation.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation

// $FlowFixMe decorators
@injectSheet(styles)
class TypewriterVisualEffectClass extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'TypewriterVisualEffectClass';

    static defaultProps = {
        text: null,
        level: 5,
        loopCount: 0,
        stopOnEnd: false,
        animationDelay: 1500, // ms

        containerStyle: {},
    };

    static defaultState = {
        currentTextIndex: 0,
        currentLoopIndex: 0,
        animationStage: TYPEWRITER_VISUAL_EFFECT_ANIMATION_STAGE_FORWARD_NAME,
    };

    // endregion

    // region private props
    _animationDelayTimeoutId: TimeoutID | null = null;

    // endregion

    // region constructor
    constructor(props: PropsTypes) {
        super(props);
        const self: any = this;

        self.state = {
            currentTextIndex: TypewriterVisualEffectClass.defaultState.currentTextIndex,
            currentLoopIndex: TypewriterVisualEffectClass.defaultState.currentLoopIndex,
            animationStage: TypewriterVisualEffectClass.defaultState.animationStage,
        };

        self._onAnimationEnd = bind(self._onAnimationEnd, this);
    }

    // endregion

    // region business logic
    _updateAnimationState(
        animationStage?: AnimationStageType,
        currentTextIndex?: number,
        currentLoopIndex?: number
    ): void {
        animationStage = defaultTo(this.state.animationStage)(animationStage);
        currentTextIndex = defaultTo(this.state.currentTextIndex)(currentTextIndex);
        currentLoopIndex = defaultTo(this.state.currentLoopIndex)(currentLoopIndex);

        this._animationDelayTimeoutId = setTimeout(() => this.setState({
            animationStage,
            currentTextIndex,
            currentLoopIndex,
        }), this._getAnimationDelay());
    }

    _canRenderLoopIteration(): boolean {
        if (isNil(this._getCurrentText())) {
            return false;
        }

        const loopCount: number = this._getLoopCount();
        const {currentLoopIndex} = this.state;

        if (equals(loopCount, Infinity)) {
            return true;
        }

        return !or(lte(loopCount, 0), gte(currentLoopIndex, loopCount));
    }

    _prepareGlobalKeyframeStyles(): void {
        if (isNil(this._getText())) {
            return;
        }

        this.props.theme.styleSheetRegister.addGlobalStyles({
            [`@keyframes ${TYPEWRITER_VISUAL_EFFECT_TYPING_FORWARD_KEYFRAMES_STYLE_NAME}`]: {
                'from': {
                    width: '0%'
                },
                'to': {
                    width: '100%'
                }
            }
        }, `@keyframes ${TYPEWRITER_VISUAL_EFFECT_TYPING_FORWARD_KEYFRAMES_STYLE_NAME}`);

        this.props.theme.styleSheetRegister.addGlobalStyles({
            [`@keyframes ${TYPEWRITER_VISUAL_EFFECT_TYPING_BACKWARD_KEYFRAMES_STYLE_NAME}`]: {
                'from': {
                    width: '100%'
                },
                'to': {
                    width: '0%'
                }
            }
        }, `@keyframes ${TYPEWRITER_VISUAL_EFFECT_TYPING_BACKWARD_KEYFRAMES_STYLE_NAME}`);

        const borderColor: string = this._getBorderColor();

        this.props.theme.styleSheetRegister.addGlobalStyles({
            [`@keyframes ${TYPEWRITER_VISUAL_EFFECT_CARET_BLINK_KEYFRAMES_STYLE_NAME}`]: {
                'from, to': {
                    borderColor: 'transparent'
                },
                '50%': {
                    borderColor
                }
            }
        }, `@keyframes ${TYPEWRITER_VISUAL_EFFECT_CARET_BLINK_KEYFRAMES_STYLE_NAME}_${this._getPreparedBorderColor()}`);
    }

    // endregion

    // region lifecycle methods
    componentDidUpdate(prevProps: PropsTypes): void {
        const prevBorderColor: string = prevProps.theme.baseStyles.accentColorPrimary;
        const currentBorderColor: string = this.props.theme.baseStyles.accentColorPrimary;

        if (prevBorderColor !== currentBorderColor) {
            this._prepareGlobalKeyframeStyles();
        }
    }

    componentDidMount(): void {
        this._prepareGlobalKeyframeStyles();
    }

    componentWillUnmount(): void {
        unless(isNil, id => clearTimeout(id))(this._animationDelayTimeoutId);
    }

    // endregion

    // region style accessors
    _getTextContainerClassName(): string {
        return classNames(this.props.classes.textContainer, this.props.textClassName);
    }

    _getComponentContainerClassName(): string {
        return classNames(
            this.props.classes.componentContainer,
            this.props.containerClassName
        );
    }

    _getCurrentTextStyle(): CSSStylesType | null {
        const texts: null | Array<string> = this._getText();

        if (isNil(texts)) {
            return null;
        }

        const {currentTextIndex} = this.state;
        const text: string  = texts[currentTextIndex];

        if (isNil(text)) {
            return null;
        }

        const textLength: number = text.length;

        return {
            width: this.state.animationStage === TYPEWRITER_VISUAL_EFFECT_ANIMATION_STAGE_FORWARD_NAME ?
                'auto' :
                '0%',

            animation:`
            ${this._getTypingKeyframesName()} ${TYPEWRITER_VISUAL_EFFECT_ANIMATION_STEP_RATIO * textLength}s steps(${textLength * 2}, end),
            ${TYPEWRITER_VISUAL_EFFECT_CARET_BLINK_KEYFRAMES_STYLE_NAME}_${this._getPreparedBorderColor()} .75s step-end infinite`
        };
    }

    // endregion

    // region label accessors
    // endregion

    // region state accessors
    _shouldStopOnEndNow(): boolean {
        return !this._isInfiniteLoop() &&
            this._isLastText() &&
            this._isLastLoop() &&
            this._shouldStopOnEnd();
    }

    _shouldStopOnStartNow(): boolean {
        return !this._isInfiniteLoop() &&
            this._isLastText() &&
            this._isLastLoop() &&
            !this._shouldStopOnEnd();
    }

    _isInfiniteLoop(): boolean {
        return equals(this._getLoopCount(), Infinity);
    }

    _isLastText(): boolean {
        const textsLength: number | null = this._getTextsLength();

        if (isNil(textsLength)) {
            return true;
        }

        return gte(this.state.currentTextIndex + 1, textsLength);
    }

    _isLastLoop(): boolean {
        return gte(this.state.currentLoopIndex + 1, this._getLoopCount());
    }

    _getCurrentText(): string | null {
        const texts: Array<string> | null = this._getText();

        if (isNil(texts)) {
            return null;
        }

        const {currentTextIndex} = this.state;

        if (gte(currentTextIndex, length(texts))) {
            return null;
        }

        return texts[currentTextIndex];
    }

    _getTypingKeyframesName(): string {
        return this.state.animationStage === TYPEWRITER_VISUAL_EFFECT_ANIMATION_STAGE_FORWARD_NAME ?
            TYPEWRITER_VISUAL_EFFECT_TYPING_FORWARD_KEYFRAMES_STYLE_NAME :
            TYPEWRITER_VISUAL_EFFECT_TYPING_BACKWARD_KEYFRAMES_STYLE_NAME;
    }

    // endregion

    // region prop accessors
    _getPreparedBorderColor(): string {
        return this._getBorderColor().replace('#', '');
    }

    _getBorderColor(): string {
        return this.props.theme.baseStyles.accentColorPrimary;
    }

    _getContainerStyle(): CSSStylesType {
        return defaultTo(TypewriterVisualEffectClass.defaultProps.containerStyle)(this.props.containerStyle);
    }

    _getTextsLength(): number | null {
        return ifElse(isNil, always(null), length)(this._getText());
    }

    _getText(): Array<string> | null {
        const {text} = this.props;

        if (isNil(text)) {
            return null;
        }

        return unless(is(Array), text => [text])(text);
    }

    _getAnimationDelay(): number {
        return defaultTo(TypewriterVisualEffectClass.defaultProps.animationDelay)(this.props.animationDelay);
    }

    _shouldStopOnEnd(): boolean {
        return defaultTo(TypewriterVisualEffectClass.defaultProps.stopOnEnd)(this.props.stopOnEnd);
    }

    _getLoopCount(): number {
        return defaultTo(TypewriterVisualEffectClass.defaultProps.loopCount)(this.props.loopCount);
    }

    _getLevel(): number {
        return defaultTo(TypewriterVisualEffectClass.defaultProps.level)(this.props.level);
    }

    // endregion

    // region handlers
    _onAnimationEnd(): void {
        const {animationStage, currentLoopIndex} = this.state;

        if (animationStage === TYPEWRITER_VISUAL_EFFECT_ANIMATION_STAGE_FORWARD_NAME) {
            if (this._shouldStopOnStartNow()) {
                return;
            }

            return this._updateAnimationState(TYPEWRITER_VISUAL_EFFECT_ANIMATION_STATE_BACKWARD_NAME);
        } else {
            if (this._shouldStopOnEndNow()) {
                return;
            }

            const textsLength: number | null = this._getTextsLength();
            const loopCount: number = this._getLoopCount();

            const nextTextIndex: number = this.state.currentTextIndex + 1;
            const nextLoopIndex: number = currentLoopIndex + 1;

            if (isNil(textsLength)) {
                return;
            }

            if (gte(nextTextIndex, textsLength)) {
                if(equals(loopCount, Infinity)) {
                    return this._updateAnimationState(TYPEWRITER_VISUAL_EFFECT_ANIMATION_STAGE_FORWARD_NAME, 0, Infinity);
                }

                if (gte(nextLoopIndex, loopCount)) {
                    return;
                } else {
                    return this._updateAnimationState(TYPEWRITER_VISUAL_EFFECT_ANIMATION_STAGE_FORWARD_NAME, 0, nextLoopIndex);
                }
            }

            return this._updateAnimationState(TYPEWRITER_VISUAL_EFFECT_ANIMATION_STAGE_FORWARD_NAME, nextTextIndex);
        }
    }

    // endregion

    // region render methods
    _renderInlineHeader(): React.Node {
        return <InlineHeader
            className={this._getTextContainerClassName()}
            style={this._getCurrentTextStyle()}
            level={this._getLevel()}
        >
            {this._getCurrentText()}
        </InlineHeader>;
    }

    _renderComponentContainer(): React.Node {
        return <div
            className={this._getComponentContainerClassName()}
            style={this._getContainerStyle()}
            onAnimationEnd={this._onAnimationEnd}
        >
            {this._renderInlineHeader()}
        </div>;
    }

    render(): React.Node {
        return ifElse(
            equals(false),
            always(null),
            bind(this._renderComponentContainer, this)
        )(this._canRenderLoopIteration());
    }

    // endregion
}

function TypewriterVisualEffect(props: PropsTypes) {
    return (
        <MainThemeContext.Consumer>
            {windowDimensions => <TypewriterVisualEffectClass {...props} {...windowDimensions} />}
        </MainThemeContext.Consumer>
    );
}

TypewriterVisualEffect.displayName = 'TypewriterVisualEffect';

// exports
export {TypewriterVisualEffectClass, TypewriterVisualEffect};
export default TypewriterVisualEffect;