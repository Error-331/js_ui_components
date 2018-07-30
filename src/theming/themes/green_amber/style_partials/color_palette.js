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
        // amber
        materialAmber200: '#ffe082',

        // green
        materialGreen300: '#81c784',
        materialGreen400: '#66bb6a',
        materialGreen600: '#43a047',
        materialGreen900: '#1b5e20',
    });

    return Object.freeze(newColorPalette);
};
