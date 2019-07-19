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
        accentColorPrimary: colorPalette.materialTeal500,

        // main colors
        mainPrimaryColor: colorPalette.materialDeepOrange900,
        mainSecondaryColor: colorPalette.materialDeepOrange600,
        mainTertiaryColor: colorPalette.materialDeepOrange400,
        mainQuaternaryColor: colorPalette.materialDeepOrange300,

        primaryBGColor: colorPalette.materialDeepOrange600,
    });

    return Object.freeze(newBaseStyles);
};
