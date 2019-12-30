'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';

// local imports
import type {ThemeType} from './../../types/theme_types';

import {OverlayComponent} from './overlay_component';

// type definitions
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

    onOverlayClick?: (event: SyntheticEvent<HTMLElement>) => void,

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

// styles definition
const styles = theme => ({
    componentContainer: {
        position: 'fixed',
    }
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
function GlobalOverlayFunction(props: PropsTypes) {
    const {show, opacity, onOverlayClick, children, classes} = props;

    return <OverlayComponent
        show={show}
        opacity={opacity}
        onOverlayClick={onOverlayClick}
        containerClassName={classes.componentContainer}
    >
        {children}
    </OverlayComponent>;
}

GlobalOverlayFunction.displayName = 'GlobalOverlayComponent';

// exports
export const GlobalOverlayComponent = injectSheet(styles, {injectTheme: true})(GlobalOverlayFunction);
export default GlobalOverlayComponent;
