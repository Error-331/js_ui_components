'use strict';

// external imports

// local imports
import type {
    ColorUtilitiesTypes,
    StyleValuesRegisterType,
    StyleSheetRegisterType,

    BaseThemePartialsType,
    AdditionalThemePartialsType,
    FontFamilyUtilitiesType,
    FontSizesUtilitiesType,
} from './theming';

import type {LayoutStylesType} from './theming/layout_style_types';

// type declaration
type CSSStylesType = {
    [key: string]: any
};

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
export {
    CSSStylesType,
    ThemeType,
}
