'use strict';

// @flow

// external imports

// local imports
import type {FontStacksType} from './../../../../types/theming/font_stack_types';
import type {BaseStylesType} from './../../../../types/theming/base_style_types';
import type {TableStyleType} from './../../../../types/theming/table_style_types';

// exports
export const tableStylesFunc = ({fontStacks, baseStyles}: {fontStacks: FontStacksType, baseStyles: BaseStylesType}): TableStyleType => {
    return Object.freeze({
        bodyFontStack: fontStacks.regularFontFamilyStack,
        headerFontStack: fontStacks.boldFontFamilyStack,

        cellFontSize: baseStyles.secondaryFontSize, // px

        headerCellFontColor: baseStyles.mainQuaternaryColor,
        cellFontColor: baseStyles.mainPrimaryColor,

        cellBGColor: baseStyles.transparentBGColor,
        cellHoverBGColor: baseStyles.mainQuaternaryColor,

        cellBorderColor: baseStyles.mainQuaternaryColor,

        cellPaddingTop: 12, // px
        cellPaddingBottom: 12, // px

        cellPaddingLeft: 5, // px
        cellPaddingRight: 5 // px
    });
};
