'use strict';

//external imports
import {mergeAll} from 'ramda';

// local imports
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
const fontFaces = fontFacesFunc(FontFaces);
const fontStacks = fontStacksFunc();

const colorPalette = colorPaletteFunc();
const materialDepthLevels = materialDepthLevelsFunc();

const baseStyles = baseStylesFunc(colorPalette);

export const baseThemePartials = Object.freeze({
    '@font-face': fontFaces,
    fontStacks,

    colorPalette,
    materialDepthLevels,

    baseStyles,
});

// additional theme partials preparation
const layoutStyles = layoutStylesFunc(baseThemePartials);
const inputStyles = inputStylesFunc(baseThemePartials);
const buttonStyles = buttonStylesFunc(baseThemePartials);
const tableStyles = tableStylesFunc(baseThemePartials);
const windowStyles = windowStylesFunc(baseThemePartials);

export const additionalThemePartials = Object.freeze({
    layoutStyles,
    inputStyles,
    buttonStyles,
    tableStyles,
    windowStyles,
});

// exports
const theme = mergeAll([
    {
        // utilities
        colorUtilities,

        // registers
        styleValuesRegister,
    },
    baseThemePartials,
    additionalThemePartials
]);

export default Object.freeze(theme);
