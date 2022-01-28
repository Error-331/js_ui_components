'use strict';

// external imports
import { clone } from 'ramda';

// local imports
import { FontFacesListType } from './../../../types/theming/font_face_types';
import { FontStacksType } from './../../../types/theming/font_stack_types';
import { ColorPaletteType } from './../../../types/theming/color_palette_types';
import { MaterialDepthLevelsType } from './../../../types/theming/material_depth_level_types';
import { LayoutStylesType } from './../../../types/theming/layout_style_types';
import { InputStylesType } from './../../../types/theming/input_style_types';
import { ButtonStyleType } from './../../../types/theming/button_style_types';
import { TableStyleType } from './../../../types/theming/table_style_types';
import { WindowStylesType } from './../../../types/theming/window_style_types';
import { DateStylesType } from './../../../types/theming/date_style_types';
import { NavigationStylesType } from './../../../types/theming/navigation_style_types';
import { ScrollBarStylesType } from './../../../types/theming/scroll_bar_style_types';
import { BaseThemePartialsType } from './../../../types/theming/base_theme_partials_types';
import { AdditionalThemePartialsType } from './../../../types/theming/additional_theme_partials_types';
import { BaseStylesType } from './../../../types/theming/base_style_types';

import { ThemeType } from './../../../types/theme_types';

import { fontFaces as commonFontFaces } from './../../common_styles/font_faces';

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
import dateStylesFunc from './style_partials/date_styles';
import navigationStylesFunc from './style_partials/navigation_styles';
import scrollBarStylesFunc from './style_partials/scrollbar_styles';

import colorUtilities from './../../business_logic/color_utilities';
import styleValuesRegister from './../../business_logic/style_values_register';
import styleSheetRegister from './../../business_logic/style_sheet_register';
import fontFamilyUtilities from './../../business_logic/font_family_utilities';
import fontSizeUtilities from './../../business_logic/font_size_utilities';
import screenUtilities from './../../business_logic/screen_utilities';

// base theme partials preparation
const fontFaces: FontFacesListType = fontFacesFunc(commonFontFaces);
const fontStacks: FontStacksType = fontStacksFunc();

const colorPalette: ColorPaletteType = colorPaletteFunc();
const materialDepthLevels: MaterialDepthLevelsType = materialDepthLevelsFunc();

const baseStyles: BaseStylesType = baseStylesFunc(colorPalette, fontStacks);

const baseThemePartials: BaseThemePartialsType = Object.freeze({
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
const dateStyles: DateStylesType = dateStylesFunc(baseThemePartials);
const navigationStyles: NavigationStylesType = navigationStylesFunc(baseThemePartials);
const scrollBarStyles: ScrollBarStylesType = scrollBarStylesFunc(baseThemePartials);

const additionalThemePartials: AdditionalThemePartialsType = Object.freeze({
    layoutStyles,
    inputStyles,
    buttonStyles,
    tableStyles,
    windowStyles,
    dateStyles,
    navigationStyles,
    scrollBarStyles,
});

const baseTheme: ThemeType = Object.freeze({
    colorUtilities,
    styleValuesRegister,
    styleSheetRegister,
    fontFamilyUtilities,
    fontSizeUtilities,
    screenUtilities,

    ...clone(baseThemePartials),
    ...clone(additionalThemePartials)
});

// exports
export default baseTheme;
export { baseTheme, baseThemePartials, additionalThemePartials };
