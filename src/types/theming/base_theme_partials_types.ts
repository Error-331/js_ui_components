'use strict';

// external imports

// local imports
import type {
    FontFacesListType,
    FontStacksType,
    ColorPaletteType,
    MaterialDepthLevelsType,
    BaseStylesType,
} from './';

// type declaration
type BaseThemePartialsType = {
    '@font-face': FontFacesListType,
    fontStacks: FontStacksType,
    colorPalette: ColorPaletteType,
    materialDepthLevels: MaterialDepthLevelsType,
    baseStyles: BaseStylesType
};

// exports
export { BaseThemePartialsType }
