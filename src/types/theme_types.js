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
} from './theming';

// exports
export type ThemeType = BaseThemePartialsType & AdditionalThemePartialsType & {
    colorUtilities: ColorUtilitiesTypes,
    styleValuesRegister: StyleValuesRegisterType,
    styleSheetRegister: StyleSheetRegisterType
}
