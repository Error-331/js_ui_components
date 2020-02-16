'use strict';

// @flow

// external imports

// local imports
import type {
    ColorUtilitiesTypes,
    StyleValuesRegisterType,
    StyleSheetRegisterType,

    BaseThemePartialsType,
    AdditionalThemePartialsType,
    FontFamilyUtilitiesType,
} from './theming';

import type {LayoutStylesType} from './theming/layout_style_types';

// exports
export type CSSStylesType = {
    [string]: mixed
};

// TODO: fix styles
export type ThemeType = BaseThemePartialsType & AdditionalThemePartialsType & {
    colorUtilities: ColorUtilitiesTypes,
    styleValuesRegister: StyleValuesRegisterType,
    styleSheetRegister: StyleSheetRegisterType,
    fontFamilyUtilities: FontFamilyUtilitiesType,

    layoutStyles: LayoutStylesType,
}
