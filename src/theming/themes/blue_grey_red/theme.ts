'use strict';

// external imports

// local imports
import fontFacesFunc from './../base_theme/style_partials/font_faces';
import fontStacksFunc from './../base_theme/style_partials/font_stacks';
import materialDepthLevelsFunc from './../base_theme/style_partials/material_depth_levels';

import colorPaletteFunc from './style_partials/color_palette';
import baseStylesFunc from './style_partials/base_styles';

import { extendTheme } from './../../helpers/theme_helpers';

// implementation
const blueGreyRed = extendTheme(
    fontFacesFunc,
    fontStacksFunc,
    colorPaletteFunc,
    materialDepthLevelsFunc,
    baseStylesFunc
);

// exports
export default blueGreyRed;
