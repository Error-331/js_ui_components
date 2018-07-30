'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';

import {merge, defaultTo} from 'ramda';

// local imports
import GlobalOverlayComponent from './global_overlay_component';
import RegularCardComponent from './../layout/structure/regular_card_component';

// type definitions
type CSSStylesType = {
    [string]: mixed
};

type PropsTypes = {
    /**
     * Flag that indicates whether to show or not to show modal dialog box component
     */

    show?: boolean,

    /**
     * Header of the modal component (any valid react component)
     */

    header: React.Element<any>,


    /**
     * Footer of the modal component (any valid react component)
     */

    footer: React.Element<any>,

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
class ModalComponent extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'ModalComponent';

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

    _getBodyInnerStyles(): CSSStylesType {
        const userStyles: CSSStylesType = defaultTo({})(this.props.bodyInnerStyles);
        return merge(defaultBodyInnerStyles, userStyles);
    }

    // endregion

    // region label accessors
    // endregion

    // region state accessors
    // endregion

    // region prop accessors
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
            containerStyles={this._getBodyOuterStyles()}
            bodyStyles={this._getBodyInnerStyles()}
        >
            {children}
            {this._renderFooter()}
        </RegularCardComponent>;
    }

    _renderOverlayComponent(): React.Node {
        const {show, overlayOpacity} = this.props;

        return <GlobalOverlayComponent show={show} opacity={overlayOpacity}>
            {this._renderBody()}
        </GlobalOverlayComponent>;
    }

    render(): React.Node {
        return this._renderOverlayComponent();
    }

    // endregion
}

// exports
export default injectSheet(styles)(ModalComponent);