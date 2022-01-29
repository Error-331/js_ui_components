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
        accentColorPrimary: colorPalette.materialLime200,

        // main colors
        mainPrimaryColor: colorPalette.materialBrown900,
        mainSecondaryColor: colorPalette.materialBrown600,
        mainTertiaryColor: colorPalette.materialBrown400,
        mainQuaternaryColor: colorPalette.materialBrown300,

        primaryBGColor: colorPalette.materialBrown600,
    });

    return Object.freeze(newBaseStyles);
};

// exports
export default baseStylesFunc;
