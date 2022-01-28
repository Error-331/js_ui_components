'use strict';

// external imports
import { mergeDeepRight } from 'ramda';

// local imports
import { ColorPaletteType, ColorPaletteFuncType } from './../../../../types/theming/';
import { default as canonicalColorPaletteFunc } from './../../base_theme/style_partials/color_palette';

// implementation
const colorPaletteFunc: ColorPaletteFuncType = (): ColorPaletteType => {
    const newColorPalette: ColorPaletteType = mergeDeepRight(canonicalColorPaletteFunc(), {
        // teal
        materialTeal500: '#009688',

        // deep orange
        materialDeepOrange300: '#ff8a65',
        materialDeepOrange400: '#ff7043',
        materialDeepOrange600: '#f4511e',
        materialDeepOrange900: '#bf360c',
    });

    return Object.freeze(newColorPalette);
};

// exports
export default colorPaletteFunc;
