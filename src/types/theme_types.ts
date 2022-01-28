'use strict';

// external imports

// local imports
import { ColorUtilitiesTypes } from './theming/color_utilities_types';
import { StyleValuesRegisterType } from './theming/style_values_register_types';
import { StyleSheetRegisterType } from './theming/style_sheet_register_types';
import { BaseThemePartialsType } from './theming/base_theme_partials_types';
import { AdditionalThemePartialsType } from './theming/additional_theme_partials_types';
import { FontFamilyUtilitiesType } from './theming/font_family_utilities_types';
import { FontSizesUtilitiesType } from './theming/font_sizes_utilities_types';

import { LayoutStylesType } from './theming/layout_style_types';

// type declaration

// TODO: fix styles
type ThemeType = BaseThemePartialsType & AdditionalThemePartialsType & {
    colorUtilities: ColorUtilitiesTypes,
    styleValuesRegister: StyleValuesRegisterType,
    styleSheetRegister: StyleSheetRegisterType,
    fontFamilyUtilities: FontFamilyUtilitiesType,
    fontSizeUtilities: FontSizesUtilitiesType,

    layoutStyles: LayoutStylesType,
}

// exports
export { ThemeType };
