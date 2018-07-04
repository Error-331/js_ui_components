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
        // indigo
        materialIndigoA200: '#536dfe',

        // purple
        materialPurple300: '#ba68c8',
        materialPurple400: '#ab47bc',
        materialPurple600: '#8e24aa',
        materialPurple900: '#4a148c',
    });

    return Object.freeze(newColorPalette);
};
