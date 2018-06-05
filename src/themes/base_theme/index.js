'use strict';

// local imports
import fontFaces from './style_partials/font_faces';
import fontStacks from './style_partials/font_stacks';

import colorPalette from './style_partials/color_palette';
import materialDepthLevels from './style_partials/material_depth_levels';

import baseStyles from './style_partials/base_styles'
import layoutStyles from './style_partials/layout_styles';

import inputStyles from './style_partials/input_styles';
import buttonStyles from './style_partials/button_styles';
import tableStyles from './style_partials/table_styles';
import windowStyles from './style_partials/window_styles';

import styleValuesRegister from './../business_logic/style_values_register';

// theme implementation
const theme = Object.freeze({
    '@font-face': fontFaces,
    fontStacks,

    colorPalette,
    materialDepthLevels,

    baseStyles,
    layoutStyles,

    inputStyles,
    buttonStyles,
    tableStyles,
    windowStyles,

    // panel elements common styles
    panelHeaderFontColor: colorPalette.materialRed800,
    panelHeaderBackgroundColor: colorPalette.materialLightBlue600,

    // registers
    styleValuesRegister,
});

// exports
export default theme;