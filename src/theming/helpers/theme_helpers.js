'use strict';

// @flow

// external imports
import {always, mergeAll, mergeDeepRight} from 'ramda';

// local imports
import baseTheme from '../themes/base_theme';
import FontFaces from './../common_styles/font_faces';

import fontFacesFunc from '../themes/base_theme/style_partials/font_faces';
import fontStacksFunc from '../themes/base_theme/style_partials/font_stacks';
import colorPaletteFunc from '../themes/base_theme/style_partials/color_palette';
import materialDepthLevelsFunc from '../themes/base_theme/style_partials/material_depth_levels';
import baseStylesFunc from '../themes/base_theme/style_partials/base_styles';

import windowStylesFunc from '../themes/base_theme/style_partials/window_styles';
import inputStylesFunc from '../themes/base_theme/style_partials/input_styles';
import buttonStylesFunc from '../themes/base_theme/style_partials/button_styles';
import tableStylesFunc from '../themes/base_theme/style_partials/table_styles';
import layoutStylesFunc from '../themes/base_theme/style_partials/layout_styles';

export const extendTheme = (
    newFontFacesFunc = always({}),
    newFontStacksFunc = always({}),
    newColorPaletteFunc = always({}),
    newMaterialDeptsFunc = always({}),
    newBaseStylesFunc = always({})
) => {
    const fontFaces = mergeDeepRight(fontFacesFunc(FontFaces), newFontFacesFunc(FontFaces));
    const fontStacks = mergeDeepRight(fontStacksFunc(), newFontStacksFunc());
    const colorPalette = mergeDeepRight(colorPaletteFunc(), newColorPaletteFunc());
    const materialDepthLevels = mergeDeepRight(materialDepthLevelsFunc(), newMaterialDeptsFunc());
    const baseStyles = mergeDeepRight(baseStylesFunc(colorPalette), newBaseStylesFunc(colorPalette));

    const newBaseThemePartials = Object.freeze({
        '@font-face': fontFaces,
        fontStacks,

        colorPalette,
        materialDepthLevels,

        baseStyles,
    });

    const layoutStyles = layoutStylesFunc(newBaseThemePartials);
    const inputStyles = inputStylesFunc(newBaseThemePartials);
    const buttonStyles = buttonStylesFunc(newBaseThemePartials);
    const tableStyles = tableStylesFunc(newBaseThemePartials);
    const windowStyles = windowStylesFunc(newBaseThemePartials);

    const newAdditionalThemePartials = Object.freeze({
        layoutStyles,
        inputStyles,
        buttonStyles,
        tableStyles,
        windowStyles,
    });

    const newTheme = mergeAll([
        baseTheme,
        newBaseThemePartials,
        newAdditionalThemePartials
    ]);

    return Object.freeze(newTheme);
};