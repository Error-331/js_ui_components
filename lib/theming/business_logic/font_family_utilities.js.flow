'use strict';

// @flow

// external imports

// local imports
import type {ThemeType} from './../../types/theme_types';
import type {FontFamilyUtilitiesType} from './../../types/theming/font_family_utilities_types';

import {
    THIN_FONT,
    LIGHT_FONT,
    REGULAR_FONT,
    BOLD_FONT,
} from './../constants/general_constants';

// exports
export const fontFamilyUtilities: FontFamilyUtilitiesType = Object.seal({
    getFontFamilyByType(theme: ThemeType, fontFamilyType?: string): string {
        switch(fontFamilyType) {
            case THIN_FONT: {
                return theme.baseStyles.thinFontStack;
            }

            case LIGHT_FONT: {
                return theme.baseStyles.lightFontStack;
            }

            case REGULAR_FONT: {
                return theme.baseStyles.regularFontStack;
            }

            case BOLD_FONT: {
                return theme.baseStyles.boldFontStack;
            }

            default: {
                return theme.baseStyles.regularFontStack;
            }
        }
    },
});
