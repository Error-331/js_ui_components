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

import FontFaces from './../../common_styles/font_faces';

import fontFacesFunc from './style_partials/font_faces';
import fontStacksFunc from './style_partials/font_stacks';

import colorPaletteFunc from './style_partials/color_palette';
import materialDepthLevelsFunc from './style_partials/material_depth_levels';

import baseStylesFunc from './style_partials/base_styles';

import layoutStylesFunc from './style_partials/layout_styles';
import inputStylesFunc from './style_partials/input_styles';
import buttonStylesFunc from './style_partials/button_styles';
import tableStylesFunc from './style_partials/table_styles';
import windowStylesFunc from './style_partials/window_styles';

import colorUtilities from './../../business_logic/color_utilities';
import styleValuesRegister from './../../business_logic/style_values_register';

// base theme partials preparation
const fontFaces: FontFacesListType = fontFacesFunc(FontFaces);
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
const theme: ThemeType = {
    colorUtilities,
    styleValuesRegister,

    ...clone(baseThemePartials),
    ...clone(additionalThemePartials)
};

export default Object.freeze(theme);
