'use strict';

// @flow

// external imports
import {clone} from 'ramda';

// local imports
import type {
    FontFacesListType,
    FontStacksType,
    ColorPaletteType,
    MaterialDepthLevelsType,
    BaseStylesType,

    LayoutStylesType,
    InputStylesType,
    ButtonStyleType,
    TableStyleType,
    WindowStylesType,

    BaseThemePartialsType,
    AdditionalThemePartialsType,
} from './../../../types/theming/';

import type {ThemeType} from './../../../types/theme_types';

import {fontFaces as commonFontFaces} from './../../common_styles/font_faces';

import {
    fontFacesFunc,
    fontStacksFunc,
    colorPaletteFunc,
    materialDepthLevelsFunc,
    baseStylesFunc,

    layoutStylesFunc,
    inputStylesFunc,
    buttonStylesFunc,
    tableStylesFunc,
    windowStylesFunc
} from './';

import {colorUtilities} from './../../business_logic/color_utilities';
import {styleValuesRegister} from './../../business_logic/style_values_register';

// base theme partials preparation
const fontFaces: FontFacesListType = fontFacesFunc(commonFontFaces);
const fontStacks: FontStacksType = fontStacksFunc();

const colorPalette: ColorPaletteType = colorPaletteFunc();
const materialDepthLevels: MaterialDepthLevelsType = materialDepthLevelsFunc();

const baseStyles: BaseStylesType = baseStylesFunc(colorPalette);

export const baseThemePartials: BaseThemePartialsType = Object.freeze({
    '@font-face': fontFaces,
    fontStacks,

    colorPalette,
    materialDepthLevels,

    baseStyles,
});

// additional theme partials preparation
const layoutStyles: LayoutStylesType = layoutStylesFunc(baseThemePartials);
const inputStyles: InputStylesType = inputStylesFunc(baseThemePartials);
const buttonStyles: ButtonStyleType = buttonStylesFunc(baseThemePartials);
const tableStyles: TableStyleType = tableStylesFunc(baseThemePartials);
const windowStyles: WindowStylesType = windowStylesFunc(baseThemePartials);

export const additionalThemePartials: AdditionalThemePartialsType = Object.freeze({
    layoutStyles,
    inputStyles,
    buttonStyles,
    tableStyles,
    windowStyles,
});

// exports
export const baseTheme: ThemeType = Object.freeze({
    colorUtilities,
    styleValuesRegister,

    ...clone(baseThemePartials),
    ...clone(additionalThemePartials)
});
