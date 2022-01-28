'use strict';

// external imports
import { mergeDeepRight } from 'ramda';

// local imports
import { ColorPaletteType, ColorPaletteFuncType } from './../../../../types/theming/';
import { default as canonicalColorPaletteFunc } from './../../base_theme/style_partials/color_palette';

// implementation
const colorPaletteFunc: ColorPaletteFuncType = (): ColorPaletteType => {
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

// exports
export default colorPaletteFunc;
