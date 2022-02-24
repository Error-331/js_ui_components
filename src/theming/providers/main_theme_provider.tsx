'use strict';

// external imports
import React, { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash.debounce';

// local imports
import { RenderFunctionNoArgsType } from './../../types/common_types';
import { useEventListener } from '../../hooks/logic/events_hooks';
import { useConstructor } from './../../hooks/logic/class_to_function_hooks';

import fontSizeUtilities from './../business_logic/font_size_utilities';
import screenUtilities from './../business_logic/screen_utilities';

// type declarations
type PropsTypes = {
    /**
     * Child node (with optional sub-nodes)
     */

    children?: React.ReactNode,
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

type StateTypes = {
    windowDimensions: WindowDimensionsType,
    documentDimensions: DocumentStylesType,
    device: DeviceType,
};

// provider implementation
const defaultThemData = {
    windowDimensions: null,
    documentDimensions: null,
    device: null,
};

const MainThemeContext = React.createContext(defaultThemData);

function MainThemeProvider(props: PropsTypes): React.ReactNode {
    // region private variables declaration
    // endregion

    // region style hooks declaration
    // endregion

    // region context hooks declaration
    // endregion

    // region state hooks declaration
    const [themeData, setThemeData] = useState(defaultThemData);

    // endregion

    // region event handler helpers
    const onWindowResize = (): void => {
        saveScreenData();
    }

    // endregion

    // region callback hooks declaration
    const onWindowResizeBoundHandler = useCallback(
        debounce(onWindowResize, 150),
        [],
    );

    // endregion

    // region effect hooks declaration
    useEffect(() => {
        //  saveScreenData();
        saveDocumentDimensions();
    }, [])

    // endregion

    // region state variables declaration
    // endregion

    // region ref hooks declaration
    // endregion

    // region business logic
    const extractWindowDimensions = (): WindowDimensionsType => {
        const { outerHeight, outerWidth, innerWidth, innerHeight } = window;

        return {
            outerHeight,
            outerWidth,
            innerWidth,
            innerHeight
        };
    }

    const prepareDeviceData = (windowOuterWidth: number): DeviceType => {
        return {
            type: screenUtilities.determineDeviceByScreenWidth(windowOuterWidth),
        };
    }

    const saveDocumentDimensions = (): void => {
        fontSizeUtilities.parseFontSizePX(getComputedStyle(document.documentElement).fontSize);
        setThemeData({
            ...themeData,
            documentDimensions: {
                fontSize: fontSizeUtilities.parseFontSizePX(getComputedStyle(document.documentElement).fontSize),
            }
        });
    }

    const saveScreenData = (): void => {
        const windowDimensions: WindowDimensionsType = extractWindowDimensions();

        setThemeData({
            ...themeData,
            windowDimensions,

            device: prepareDeviceData(windowDimensions.outerWidth)
        });
    }

    // endregion

    // region custom hooks declaration
    useEventListener('resize', onWindowResizeBoundHandler, window);
    useEventListener('load', onWindowResizeBoundHandler, window);

    useConstructor(() => {
        const windowDimensions: WindowDimensionsType = extractWindowDimensions();
        setThemeData({
            windowDimensions,

            documentDimensions: {
                fontSize: null,
            },

            device: prepareDeviceData(windowDimensions.outerWidth)
        });
    });

    // endregion

    // region render helpers
    const renderComponentContainer: RenderFunctionNoArgsType = () => {
      return (
        <MainThemeContext.Provider value={themeData}>
            {props.children}
        </MainThemeContext.Provider>
      );
    };

    // endregion

    // init
    return renderComponentContainer();
}

// exports
export {
    StateTypes,

    MainThemeContext,
    MainThemeProvider,
}
