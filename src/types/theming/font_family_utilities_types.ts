'use strict';

// external imports

// local imports
import type { ThemeType } from '../theme_types';

// type declaration
type GetFontFamilyByTypeType = (theme: ThemeType, fontFamilyType?: string) => string;

type FontFamilyUtilitiesType = {
    getFontFamilyByType: GetFontFamilyByTypeType,
};

// exports
export {
    GetFontFamilyByTypeType,
    FontFamilyUtilitiesType,
}
