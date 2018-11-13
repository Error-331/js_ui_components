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
        // green
        materialGreen200: '#a5d6a7',

        // cyan
        materialCyan300: '#4dd0e1',
        materialCyan400: '#26c6da',
        materialCyan600: '#00acc1',
        materialCyan900: '#006064',
    });

    return Object.freeze(newColorPalette);
};
