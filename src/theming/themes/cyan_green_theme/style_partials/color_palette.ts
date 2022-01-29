'use strict';

// external imports
import { mergeDeepRight } from 'ramda';

// local imports
import { ColorPaletteType, ColorPaletteFuncType } from './../../../../types/theming/color_palette_types';
import { default as canonicalColorPaletteFunc } from './../../base_theme/style_partials/color_palette';

// implementation
const colorPaletteFunc: ColorPaletteFuncType = (): ColorPaletteType => {
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

// exports
export default colorPaletteFunc;
