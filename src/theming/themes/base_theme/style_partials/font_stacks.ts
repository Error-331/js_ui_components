'use strict';

//external imports

// local imports
import { FontStacksType, FontStacksFuncType } from './../../../../types/theming/font_stack_types';

// implementation
const fontStacksFunc: FontStacksFuncType = (): FontStacksType => {
    return Object.freeze({
        thinFontFamilyStack: '"Roboto-Thin", "Helvetica Neue", Helvetica, Arial, sans-serif',
        lightFontFamilyStack: '"Roboto-Light", "Helvetica Neue", Helvetica, Arial, sans-serif',
        regularFontFamilyStack: '"Roboto-Regular", "Helvetica Neue", Helvetica, Arial, sans-serif',
        boldFontFamilyStack: '"Roboto-Bold", "Helvetica Neue", Helvetica, Arial, sans-serif',
    });
};

// exports
export default fontStacksFunc;
