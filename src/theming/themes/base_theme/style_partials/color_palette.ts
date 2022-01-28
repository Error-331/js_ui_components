'use strict';

// external imports

// local imports
import { ColorPaletteType, ColorPaletteFuncType } from './../../../../types/theming/color_palette_types';

// implementation
const colorPaletteFunc: ColorPaletteFuncType = (): ColorPaletteType => {
    return Object.freeze({
        // red
        materialRed800: '#c62828',

        // lime
        materialLime50: '#f9fbe7',

        // light blue
        materialLightBlue300: '#4fc3f7',
        materialLightBlue400: '#29b6f6',
        materialLightBlue600: '#039be5',
        materialLightBlue900: '#01579b',

        // grey
        materialGrey300: '#e0e0e0',
        materialGrey400: '#bdbdbd',
        materialGrey600: '#757575',
        materialGrey900: '#212121',

        // black/white
        materialBlack: '#000000',
        materialWhite: '#ffffff',

        // other
        materialTransparent: 'transparent',
    });
};

// exports
export default colorPaletteFunc;
