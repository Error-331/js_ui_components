'use strict';

// external imports

// local imports
import { BaseStylesType } from './../../../../types/theming/base_style_types';
import { TableStyleType } from './../../../../types/theming/table_style_types';

// implementation
const tableStylesFunc = ({baseStyles}: {baseStyles: BaseStylesType}): TableStyleType => {
    return Object.freeze({
        bodyFontStack: baseStyles.regularFontStack,
        headerFontStack: baseStyles.boldFontStack,

        cellFontSize: baseStyles.secondaryFontSize, // px
        cellLineHeight: baseStyles.primaryFontSize, // px

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

// exports
export default tableStylesFunc;
