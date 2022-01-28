'use strict';

// external imports

// local imports
import { FontFacesListType } from './font_face_types';
import { FontStacksType } from './font_stack_types';
import { ColorPaletteType } from './color_palette_types';
import { MaterialDepthLevelsType } from './material_depth_level_types';
import { BaseStylesType } from './base_style_types';

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
