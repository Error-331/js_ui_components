'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';

import {merge, defaultTo} from 'ramda';

// local imports
import type {ThemeType} from './../../types/theme_types';

import {MainThemeContext} from './../../theming/providers/main_theme_provider';

import {GlobalOverlayComponent} from './global_overlay_component';
import {RegularCardComponent} from './../layout/structure/regular_card_component';

// type definitions
export type OnOverlayClickCallbackType = (event: SyntheticEvent<HTMLElement>) => void;;

type CSSStylesType = {
    [string]: mixed
};

type PropsTypes = {
    /**
     * Flag that indicates whether to show or not to show modal component
     */

    show?: boolean,

    /**
     * Header of the modal component (any valid react component)
     */

    header: React.Node,

    /**
     * Footer of the modal component (any valid react component)
     */

    footer: React.Node,

    /**
     * Callback function which will be called when overlay is clicked
     */

    onOverlayClick?: OnOverlayClickCallbackType,

    /**
     * Content for modal component (body)
     */

    children?: React.ChildrenArray<any>,

    /**
     * Opacity of the underlying overlay
     */

    overlayOpacity: ?number,

    /**
     * Styles for body outer container of modal component
     */

    bodyOuterStyles?: CSSStylesType,

    /**
     * Styles for body inner container of modal component
     */

    bodyInnerStyles?: CSSStylesType,

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

type StateTypes = {};

// styles definition
const defaultBodyOuterStyles: CSSStylesType = {
    maxWidth: '60%'
};

const defaultBodyInnerStyles: CSSStylesType = {};
const styles = theme => ({});

/**
 * Modal component.
 * Base component for different modal dialog boxes and modal windows.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation

// $FlowFixMe decorators
@injectSheet(styles)
export class ModalClass extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'ModalClass';

    static defaultProps = {
        show: false,
        onOverlayClick: () => {},
    };

    // endregion

    // region constructor
    // endregion

    // region lifecycle methods
    // endregion

    // region style accessors
    _getBodyOuterStyles(): CSSStylesType {
        const userStyles: CSSStylesType = defaultTo({})(this.props.bodyOuterStyles);
        return merge(defaultBodyOuterStyles, userStyles);
    }

    _getBodyInnerStyle(): CSSStylesType {
        const userStyles: CSSStylesType = defaultTo({})(this.props.bodyInnerStyles);
        return merge(defaultBodyInnerStyles, userStyles);
    }

    // endregion

    // region label accessors
    // endregion

    // region state accessors
    // endregion

    // region prop accessors
    _getOverlayOpacity(): number {
        const {overlayOpacity, theme} = this.props;
        return defaultTo(theme.windowStyles.overlayOpacity)(overlayOpacity);
    }

    _shouldShow(): boolean {
        const {show} = this.props;
        return defaultTo(ModalClass.defaultProps.show)(show);
    }

    _getOverlayClickHandler(): OnOverlayClickCallbackType {
        return defaultTo(ModalClass.defaultProps.onOverlayClick)(this.props.onOverlayClick);
    }

    // endregion

    // region handlers
    // endregion

    // region render methods
    _renderFooter(): React.Node {
        return this.props.footer;
    }

    _renderBody(): React.Node {
        const {children, header} = this.props;

        return <RegularCardComponent
            header={header}
            containerStyle={this._getBodyOuterStyles()}
            bodyStyle={this._getBodyInnerStyle()}
        >
            {children}
            {this._renderFooter()}
        </RegularCardComponent>;
    }

    _renderOverlayComponent(): React.Node {
        return <GlobalOverlayComponent
            show={this._shouldShow()}
            opacity={this._getOverlayOpacity()}
            onOverlayClick={this._getOverlayClickHandler()}
        >
            {this._renderBody()}
        </GlobalOverlayComponent>;
    }

    render(): React.Node {
        return this._renderOverlayComponent();
    }

    // endregion
}

// exports
export function ModalComponent(props: PropsTypes) {
    return (
        <MainThemeContext.Consumer>
            {windowDimensions => <ModalClass {...props} {...windowDimensions} />}
        </MainThemeContext.Consumer>
    );
}

ModalComponent.displayName = 'ModalComponent';