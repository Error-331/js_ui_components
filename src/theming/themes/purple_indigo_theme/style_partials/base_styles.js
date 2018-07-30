'use strict';

// @flow

// external imports
import {mergeDeepRight} from 'ramda';

// local imports
import type {ColorPaletteType, BaseStylesType, BaseStylesFuncType} from './../../../../types/theming/';
import {baseStylesFunc as canonicalBaseStylesFunc} from './../../base_theme';

// exports
export const baseStylesFunc: BaseStylesFuncType = (colorPalette: ColorPaletteType): BaseStylesType => {
    const newBaseStyles: BaseStylesType = mergeDeepRight(canonicalBaseStylesFunc(colorPalette), {
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
