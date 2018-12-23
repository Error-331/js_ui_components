'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import {isNil, complement, equals, always, defaultTo, pathSatisfies, cond} from 'ramda';
import {isNotNil} from '@webfuturistics/design_components/lib/helpers/general/utility_helpers';

// local imports

// type definitions
export type StyleType = {[string]: mixed};

export type OuterContainerStylesType = {
    display?: ?string,
    visibility?: ?string,

    height?: ?string,

    transition?: ?number,
    transitionProperty?: ?string
};

type PropsTypes = {
    /**
     * Class names which will be added to the outer container (div) of the 'collapsable' component
     */

    outerContainerClassNames?: string,

    /**
     * Class names which will be added to the inner container (div) of the 'collapsable' component
     */

    innerContainerClassNames?: string,

    /**
     * Style which will be added to the outer container (div) of the 'collapsable' component
     */

    outerContainerStyle?: StyleType,

    /**
     * Flag that dictates whether 'collapsible' component should be open or closed at the moment
     */

    open?: boolean,

    /**
     * Flag that dictates whether to use 'visibility' style to hide/show content ('display' style will  be used on 'false' value)
     */

    useVisibility?: boolean,

    /**
     * Flag that dictates whether to completely remove content (children elements) during collapsed state
     */

    removeContentOnClose?: boolean,

    /**
     * JSS inner classes
     *
     * @ignore
     */

    classes: any,

    /**
     * Content of the 'collapsible' component, can be of any JS primitive or react node(s)
     */

    children?: React.ChildrenArray<any>
};

type StateTypes = {
    animationStage: string,
    outerContainerStyles: OuterContainerStylesType
};

// styles definition
const styles = theme => ({
    componentOuterContainer: {
        boxSizing: 'border-box',
        overflow: 'hidden',

        transitionProperty: 'height',
        transitionDuration: '0.2s',
        transitionTimingFunction: 'ease-out',

        '& > $componentInnerContainer': {}
    },

    componentInnerContainer: {}
});

/**
 * Simple utility component used to show/hide content in accordion like way.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
export class CollapsibleComponentClass extends React.Component<PropsTypes, StateTypes> {
    static displayName = 'CollapsibleComponent';

    static defaultProps: {
        outerContainerClassNames: string,
        innerContainerClassNames: string,

        open: boolean,
        useVisibility: boolean,
        removeContentOnClose: boolean
    } = {
        outerContainerClassNames: '',
        innerContainerClassNames: '',

        open: false,
        useVisibility: false,
        removeContentOnClose: true
    };

    _outerContainer: ?HTMLDivElement;
    _innerContainer: ?HTMLDivElement;

    _animationTimeoutId: ?TimeoutID;

    _onAccordionTransitionEnd(): void  {
        let newState: StateTypes = {animationStage: this.state.animationStage, outerContainerStyles: {}};

        if (pathSatisfies(stage => stage === 'open', ['state', 'animationStage'], this)) {
            newState.outerContainerStyles = this._createOuterContainerStylesObj(true, 'auto', 'none');
        } else {
            newState.outerContainerStyles = this._createOuterContainerStylesObj(false);
        }

        this.setState(newState);
    }

    _onSetStateAfterTimeout(): void {
        this._animationTimeoutId = null;
    }

    _createOuterContainerStylesObj(shown?: boolean, newHeight?: ?string, newTransitionProperty?: ?string = 'height'): OuterContainerStylesType {
        const state: StateTypes = this.state || {};
        const outerContainerStyles: OuterContainerStylesType = isNotNil(state.outerContainerStyles) ? state.outerContainerStyles : {};

        const display: ?string = defaultTo(outerContainerStyles.display)(isNotNil(shown) ? (shown ? 'block' : 'none') : undefined);
        const visibility: ?string = defaultTo(outerContainerStyles.visibility)(isNotNil(shown) ? (shown ? 'visible' : 'hidden') : undefined);

        const height: ?string = defaultTo(outerContainerStyles.height)(newHeight);
        const transitionProperty: ?string = defaultTo(outerContainerStyles.transitionProperty)(newTransitionProperty);

        const styleObject: OuterContainerStylesType = {height, transitionProperty};

        cond([
            [equals(false), () => styleObject.display = display],
            [equals(true), () => styleObject.visibility = visibility]
        ])(this.props.useVisibility);

        return styleObject;
    }

    _preOpenOuterContainer(setStateCallback = _ => _): void {
        this.setState({
            animationStage: 'preOpen',
            outerContainerStyles: this._createOuterContainerStylesObj(true, '0px')
        }, setStateCallback);
    }

    _preCloseOuterContainer(setStateCallback = _ => _): void {
        this.setState({
            animationStage: 'preClose',
            outerContainerStyles: this._createOuterContainerStylesObj(true, this._getInnerContainerHeightString())
        }, setStateCallback);
    }

    _openOuterContainer(setStateCallback): void {
        this.setState({
            animationStage: 'open',
            outerContainerStyles: this._createOuterContainerStylesObj(true, this._getInnerContainerHeightString())
        }, setStateCallback);
    }

    _closeOuterContainer(setStateCallback): void {
        this.setState({
            animationStage: 'close',
            outerContainerStyles: this._createOuterContainerStylesObj(true, '0px')
        }, setStateCallback);
    }

    _getInnerContainerHeightString(): ?string {
        const {_innerContainer}: {_innerContainer: ?HTMLDivElement} = this;
        return isNil(_innerContainer) ? null : `${_innerContainer.offsetHeight}px`;
    }

    _getAnimationStage(): string {
        return this.state.animationStage;
    }

    _getComponentInnerContainerClassNames(): string {
        const {componentInnerContainer}: {componentInnerContainer: string} = this.props.classes;
        const innerContainerClassNames: string = this.props.innerContainerClassNames ? this.props.innerContainerClassNames : '';

        return classNames(componentInnerContainer, innerContainerClassNames);
    }

    _getComponentOuterContainerClassNames(): string {
        const {componentOuterContainer}: {componentOuterContainer: string} = this.props.classes;
        const outerContainerClassNames: string = this.props.outerContainerClassNames ? this.props.outerContainerClassNames : '';

        return classNames(componentOuterContainer, outerContainerClassNames);
    }

    _getOuterContainerStyle(): StyleType {
        const userStyle: StyleType = defaultTo({})(this.props.outerContainerStyle);
        return Object.assign({}, this.state.outerContainerStyles, userStyle);
    }

    componentWillReceiveProps(nextProps): void {
        cond([
            [equals(this.props.open), always(true)],
            [equals(true), () => this._preOpenOuterContainer()],
            [complement(equals(true)), () => this._preCloseOuterContainer()]
        ])(nextProps.open);
    }

    componentDidUpdate(): void {
        const animationStage: string = this._getAnimationStage();
        const {_onSetStateAfterTimeout} = this;

        this._animationTimeoutId = cond([
            [equals('preOpen'), () => setTimeout(() => this._openOuterContainer(_onSetStateAfterTimeout), 100)],
            [equals('preClose'), () => setTimeout(() => this._closeOuterContainer(_onSetStateAfterTimeout), 100)]
        ])(animationStage);
    }

    componentWillUnmount(): void {
        if (isNotNil(this._animationTimeoutId)) {
            clearTimeout(this._animationTimeoutId);
        }

        this._outerContainer ? this._outerContainer.removeEventListener('transitionend', this._onAccordionTransitionEnd, false) : null;
    }

    componentDidMount(): void {
        if (this._outerContainer) {
            this._outerContainer.addEventListener('transitionend', this._onAccordionTransitionEnd, false);
        }
    }

    render(): React.Node {
        const isContainerNotVisible: boolean = this.state.outerContainerStyles.display !== 'block' && this.state.outerContainerStyles.visibility !== 'visible';
        const removeContentOnClose = defaultTo(CollapsibleComponentClass.defaultProps.removeContentOnClose)(this.props.removeContentOnClose);
        const isHideChildren: boolean = isContainerNotVisible && removeContentOnClose;

        return (
            <div ref={outerContainer => (this._outerContainer = outerContainer)} className={this._getComponentOuterContainerClassNames()} style={this._getOuterContainerStyle()}>
                <div ref={innerContainer => (this._innerContainer = innerContainer)} className={this._getComponentInnerContainerClassNames()}>
                    {isHideChildren ? null : this.props.children}
                </div>
            </div>

        );
    }

    constructor(props: PropsTypes): void {
        super(props);

        const self: any = this;

        const open: boolean = this.props.open ? this.props.open : false;
        const isOpen = defaultTo(false);

        let initialState: StateTypes;

        this._animationTimeoutId = null;

        if (isOpen(open)) {
            initialState = {
                animationStage: 'open',
                outerContainerStyles: this._createOuterContainerStylesObj(true, 'auto', 'height')
            };
        } else {
            initialState = {
                animationStage: 'close',
                outerContainerStyles: this._createOuterContainerStylesObj(false, '0px', 'none')
            };
        }

        this.state = initialState;

        self._onAccordionTransitionEnd = this._onAccordionTransitionEnd.bind(this);
        self._onSetStateAfterTimeout = this._onSetStateAfterTimeout.bind(this);
    }
}

// exports
export const CollapsibleComponent = injectSheet(styles)(CollapsibleComponentClass);