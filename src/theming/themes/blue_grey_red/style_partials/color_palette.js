'use strict';

// @flow

// external imports
import {mergeDeepRight} from 'ramda';

// local imports
import type {ColorPaletteType, ColorPaletteFuncType} from './../../../../types/theming/';
import {colorPaletteFunc as canonicalColorPaletteFunc} from './../../base_theme';

// exports
export const colorPaletteFunc: ColorPaletteFuncType = (): ColorPaletteType => {
    const newColorPalette: ColorPaletteType = mergeDeepRight(canonicalColorPaletteFunc(), {
        // red
        materialRed200: '#ef9a9a',

        // blue grey
        materialBlueGrey300: '#90a4ae',
        materialBlueGrey400: '#78909c',
        materialBlueGrey600: '#546e7a',
        materialBlueGrey900: '#263238',
    });

    return Object.freeze(newColorPalette);
};
