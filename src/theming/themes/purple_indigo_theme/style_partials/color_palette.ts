'use strict';

// external imports
import { mergeDeepRight } from 'ramda';

// local imports
import { ColorPaletteType, ColorPaletteFuncType } from './../../../../types/theming/';
import { default as canonicalColorPaletteFunc } from './../../base_theme/style_partials/color_palette';

// implementation
const colorPaletteFunc: ColorPaletteFuncType = (): ColorPaletteType => {
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

// exports
export default colorPaletteFunc;
