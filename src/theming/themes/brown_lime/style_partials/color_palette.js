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
        // lime
        materialLime200: '#e6ee9c',

        // brown
        materialBrown300: '#a1887f',
        materialBrown400: '#8d6e63',
        materialBrown600: '#6d4c41',
        materialBrown900: '#3e2723',
    });

    return Object.freeze(newColorPalette);
};
