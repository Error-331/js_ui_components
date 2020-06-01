'use strict';

// @flow

// external imports
import * as React from 'react';
import {bind} from 'ramda';
import debounce from 'lodash.debounce';

// local imports
import {fontSizeUtilities} from './../business_logic/font_size_utilities';

// type definitions
type PropsTypes = {
    /**
     * Child node (with optional sub-nodes)
     */

    children?: React.ChildrenArray<any>,
}

type WindowDimensionsType = {
    outerHeight: number | null,
    outerWidth: number | null,

    innerWidth: number | null,
    innerHeight: number | null
};

type DocumentStylesType = {
    fontSize: number | null,
};

export type StateTypes = {
    windowDimensions: WindowDimensionsType,
    documentDimensions: DocumentStylesType,
};

// provider implementation
export const MainThemeContext = React.createContext();

export class MainThemeProvider extends React.Component<PropsTypes, StateTypes> {
    // region static props
    // endregion


    // region private props
    _onWindowResizeBound = null;

    // endregion

    // region constructor
    constructor(props: PropsTypes) {
        super(props);

        this.state = {
            windowDimensions: {
                outerHeight: null,
                outerWidth: null,

                innerWidth: null,
                innerHeight: null
            },

            documentDimensions: {

            }
        };

        this._onWindowResizeBound = debounce(bind(this._onWindowResize, this), 150);
    }

    // endregion

    // region business logic
    _saveDocumentDimensions(): void {
        fontSizeUtilities.parseFontSizePX(getComputedStyle(document.documentElement).fontSize);

        this.setState({
            documentDimensions: {
                fontSize: fontSizeUtilities.parseFontSizePX(getComputedStyle(document.documentElement).fontSize),
            }
        });
    }

    _saveWindowDimensions(): void {
        const {outerHeight, outerWidth, innerWidth, innerHeight} = window;

        this.setState({
            windowDimensions: {outerHeight, outerWidth, innerWidth, innerHeight}
        });
    }

    // endregion

    // region lifecycle methods
    componentDidMount(): void {
        window.addEventListener('resize', this._onWindowResizeBound);
        window.addEventListener('load', this._onWindowResizeBound);

        this._saveWindowDimensions();
        this._saveDocumentDimensions();
    }

    componentWillUnmount(): void {
        window.removeEventListener('resize', this._onWindowResizeBound);
        window.removeEventListener('load', this._onWindowResizeBound);
    }

    // endregion

    // region style accessors
    // endregion

    // region label accessors
    // endregion

    // region state accessors
    // endregion

    // region prop accessors
    // endregion

    // region handlers
    _onWindowResize(): void {
        this._saveWindowDimensions();
    }

    // endregion

    // region render methods
    render(): React.Node {
        return <MainThemeContext.Provider value={this.state}>
            {this.props.children}
        </MainThemeContext.Provider>;
    }

    // endregion
}

// exports
