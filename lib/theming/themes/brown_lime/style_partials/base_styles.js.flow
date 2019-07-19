'use strict';

// @flow

// external imports
import {mergeDeepRight} from 'ramda';

// local imports
import type {ColorPaletteType, FontStacksType, BaseStylesType, BaseStylesFuncType} from './../../../../types/theming/';
import {baseStylesFunc as canonicalBaseStylesFunc} from './../../base_theme';

// exports
export const baseStylesFunc: BaseStylesFuncType = (colorPalette: ColorPaletteType, fontStacks: FontStacksType): BaseStylesType => {
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
