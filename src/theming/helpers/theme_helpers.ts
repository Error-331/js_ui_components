'use strict';

// external imports
import { mergeAll } from 'ramda';

// local imports
import { FontFacesListType, FontFacesFuncType } from './../../types/theming/font_face_types';
import { FontStacksType, FontStacksFuncType } from './../../types/theming/font_stack_types';
import { ColorPaletteType, ColorPaletteFuncType } from './../../types/theming/color_palette_types';
import { MaterialDepthLevelsFuncType, MaterialDepthLevelsType } from './../../types/theming/material_depth_level_types';
import { BaseStylesFuncType, BaseStylesType } from './../../types/theming/base_style_types';
import { LayoutStylesType } from './../../types/theming/layout_style_types';
import { InputStylesType } from './../../types/theming/input_style_types';
import { ButtonStyleType } from './../../types/theming/button_style_types';
import { TableStyleType } from './../../types/theming/table_style_types';
import { WindowStylesType } from './../../types/theming/window_style_types';
import { DateStylesType } from './../../types/theming/date_style_types';
import { NavigationStylesType } from './../../types/theming/navigation_style_types';
import { ScrollBarStylesType } from './../../types/theming/scroll_bar_style_types';
import { BaseThemePartialsType } from './../../types/theming/base_theme_partials_types';
import { AdditionalThemePartialsType } from './../../types/theming/additional_theme_partials_types';

import { ThemeType } from './../../types/theme_types';

import { baseTheme } from '../themes/base_theme/theme';
import { fontFaces as commonFontFaces } from '../common_styles/font_faces';

import fontFacesFunc from './../themes/base_theme/style_partials/font_faces';
import fontStacksFunc from './../themes/base_theme/style_partials/font_stacks';
import colorPaletteFunc from './../themes/base_theme/style_partials/color_palette';
import materialDepthLevelsFunc from './../themes/base_theme/style_partials/material_depth_levels';
import baseStylesFunc from './../themes/base_theme/style_partials/base_styles';
import windowStylesFunc from './../themes/base_theme/style_partials/window_styles';
import inputStylesFunc from './../themes/base_theme/style_partials/input_styles';
import buttonStylesFunc from './../themes/base_theme/style_partials/button_styles';
import tableStylesFunc from './../themes/base_theme/style_partials/table_styles';
import layoutStylesFunc from './../themes/base_theme/style_partials/layout_styles';
import dateStylesFunc from './../themes/base_theme/style_partials/date_styles';
import navigationStylesFunc from './../themes/base_theme/style_partials/navigation_styles';
import scrollBarStylesFunc from './../themes/base_theme/style_partials/scrollbar_styles';

// implementation
const extendTheme = (
    newFontFacesFunc: FontFacesFuncType = fontFacesFunc,
    newFontStacksFunc: FontStacksFuncType = fontStacksFunc,
    newColorPaletteFunc: ColorPaletteFuncType = colorPaletteFunc,
    newMaterialDepthLevelsFunc: MaterialDepthLevelsFuncType = materialDepthLevelsFunc,
    newBaseStylesFunc: BaseStylesFuncType = baseStylesFunc,
): ThemeType => {
    const fontFaces: FontFacesListType = newFontFacesFunc(commonFontFaces);
    const fontStacks: FontStacksType = newFontStacksFunc();
    const colorPalette: ColorPaletteType = newColorPaletteFunc();
    const materialDepthLevels: MaterialDepthLevelsType = newMaterialDepthLevelsFunc();
    const baseStyles: BaseStylesType = newBaseStylesFunc(colorPalette, fontStacks);

    const newBaseThemePartials: BaseThemePartialsType = Object.freeze({
        '@font-face': fontFaces,
        fontStacks,

        colorPalette,
        materialDepthLevels,

        baseStyles,
    });

    const layoutStyles: LayoutStylesType = layoutStylesFunc(newBaseThemePartials);
    const inputStyles: InputStylesType = inputStylesFunc(newBaseThemePartials);
    const buttonStyles: ButtonStyleType = buttonStylesFunc(newBaseThemePartials);
    const tableStyles: TableStyleType = tableStylesFunc(newBaseThemePartials);
    const windowStyles: WindowStylesType = windowStylesFunc(newBaseThemePartials);
    const dateStyles: DateStylesType = dateStylesFunc(newBaseThemePartials);
    const navigationStyles: NavigationStylesType = navigationStylesFunc(newBaseThemePartials);
    const scrollBarStyles: ScrollBarStylesType = scrollBarStylesFunc(newBaseThemePartials);

    const newAdditionalThemePartials: AdditionalThemePartialsType = Object.freeze({
        layoutStyles,
        inputStyles,
        buttonStyles,
        tableStyles,
        windowStyles,
        dateStyles,
        navigationStyles,
        scrollBarStyles,
    });

    const newTheme: ThemeType = mergeAll([
        baseTheme,
        newBaseThemePartials,
        newAdditionalThemePartials
    ]) as ThemeType;

    return Object.freeze(newTheme);
};

// exports
export default extendTheme;
export { extendTheme };
