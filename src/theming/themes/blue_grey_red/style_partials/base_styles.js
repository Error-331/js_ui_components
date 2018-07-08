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
        accentColorPrimary: colorPalette.materialRed200,

        // main colors
        mainPrimaryColor: colorPalette.materialBlueGrey900,
        mainSecondaryColor: colorPalette.materialBlueGrey600,
        mainTertiaryColor: colorPalette.materialBlueGrey400,
        mainQuaternaryColor: colorPalette.materialBlueGrey300,

        primaryBGColor: colorPalette.materialBlueGrey600,
    });

    return Object.freeze(newBaseStyles);
};
