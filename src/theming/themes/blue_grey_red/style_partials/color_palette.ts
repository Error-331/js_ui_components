'use strict';

// external imports
import { mergeDeepRight } from 'ramda';

// local imports
import { ColorPaletteType, ColorPaletteFuncType } from './../../../../types/theming/';
import { default as canonicalColorPaletteFunc } from './../../base_theme/style_partials/color_palette';

// implementation
const colorPaletteFunc: ColorPaletteFuncType = (): ColorPaletteType => {
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

// exports
export default colorPaletteFunc;
