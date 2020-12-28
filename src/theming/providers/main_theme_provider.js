'use strict';

// @flow

// external imports
import * as React from 'react';
import {bind} from 'ramda';
import debounce from 'lodash.debounce';

// local imports
import fontSizeUtilities from './../business_logic/font_size_utilities';
import screenUtilities from './../business_logic/screen_utilities';

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

type DeviceType = {
    type: string,
}

export type StateTypes = {
    windowDimensions: WindowDimensionsType,
    documentDimensions: DocumentStylesType,
    device: DeviceType,
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

        const windowDimensions: WindowDimensionsType = this._extractWindowDimensions();
        this.state = {
            windowDimensions,

            documentDimensions: {
                fontSize: null,
            },

            device: this._prepareDeviceData(windowDimensions.outerWidth)
        };

        this._onWindowResizeBound = debounce(bind(this._onWindowResize, this), 150);
    }

    // endregion

    // region business logic
    _extractWindowDimensions(): WindowDimensionsType {
        const {outerHeight, outerWidth, innerWidth, innerHeight} = window;

        return {
            outerHeight,
            outerWidth,
            innerWidth,
            innerHeight
        };
    }

    _prepareDeviceData(windowOuterWidth) {
        return {
            type: screenUtilities.determineDeviceByScreenWidth(windowOuterWidth),
        };
    }

    _saveDocumentDimensions(): void {
        fontSizeUtilities.parseFontSizePX(getComputedStyle(document.documentElement).fontSize);

        this.setState({
            documentDimensions: {
                fontSize: fontSizeUtilities.parseFontSizePX(getComputedStyle(document.documentElement).fontSize),
            }
        });
    }

    _saveScreenData(): void {
        const windowDimensions: WindowDimensionsType = this._extractWindowDimensions();

        this.state = {
            windowDimensions,

            device: this._prepareDeviceData(windowDimensions.outerWidth)
        };
    }


    // endregion

    // region lifecycle methods
    componentDidMount(): void {
        window.addEventListener('resize', this._onWindowResizeBound);
        window.addEventListener('load', this._onWindowResizeBound);

      //  this._saveScreenData();
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
        this._saveScreenData();
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
