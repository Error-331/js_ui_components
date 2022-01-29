'use strict';

// external imports
import { mergeDeepRight } from 'ramda';

// local imports
import { ColorPaletteType } from './../../../../types/theming/color_palette_types';
import { FontStacksType } from './../../../../types/theming/font_stack_types';
import { BaseStylesType, BaseStylesFuncType } from './../../../../types/theming/base_style_types';
import { default as canonicalBaseStylesFunc } from './../../base_theme/style_partials/base_styles';

// implementation
const baseStylesFunc: BaseStylesFuncType = (colorPalette: ColorPaletteType, fontStacks: FontStacksType): BaseStylesType => {
    const newBaseStyles: BaseStylesType = mergeDeepRight(canonicalBaseStylesFunc(colorPalette, fontStacks), {
        // accent colors
        accentColorPrimary: colorPalette.materialIndigoA200,

        // main colors
        mainPrimaryColor: colorPalette.materialPurple900,
        mainSecondaryColor: colorPalette.materialPurple600,
        mainTertiaryColor: colorPalette.materialPurple400,
        mainQuaternaryColor: colorPalette.materialPurple300,

        primaryBGColor: colorPalette.materialPurple600,
    });

    return Object.freeze(newBaseStyles);
};

// exports
export default baseStylesFunc;
