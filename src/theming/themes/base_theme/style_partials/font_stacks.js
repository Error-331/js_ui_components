'use strict';

// @flow

//external imports

// local imports
import type {FontStacksType} from './../../../../types/theming/font_stack_types';

// exports
export default (): FontStacksType => {
    return Object.freeze({
        regularFontFamilyStack: '"Roboto-Regular", "Helvetica Neue", Helvetica, Arial, sans-serif',
        boldFontFamilyStack: '"Roboto-Bold", "Helvetica Neue", Helvetica, Arial, sans-serif',
    });
};
