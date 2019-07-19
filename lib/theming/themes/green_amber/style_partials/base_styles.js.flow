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
        accentColorPrimary: colorPalette.materialAmber200,

        // main colors
        mainPrimaryColor: colorPalette.materialGreen900,
        mainSecondaryColor: colorPalette.materialGreen600,
        mainTertiaryColor: colorPalette.materialGreen400,
        mainQuaternaryColor: colorPalette.materialGreen300,

        primaryBGColor: colorPalette.materialGreen600,
    });

    return Object.freeze(newBaseStyles);
};
