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
