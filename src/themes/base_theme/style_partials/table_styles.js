'use strict';

// local imports
import commonStyles from './base_styles';

// exports
export default Object.freeze({
    commonTableCellFontSize: commonStyles.commonSecondaryFontSize, // px

    commonTableHeaderCellFontColor:  commonStyles.quinaryColor,
    commonTableCellFontColor: commonStyles.secondaryColor,

    commonTableCellBGColor: commonStyles.commonTransparentBGColor,
    commonTableCellHoverBGColor: commonStyles.quinaryColor,

    commonTableCellBorderColor: commonStyles.quinaryColor,

    commonTableCellPaddingTop: 12, // px
    commonTableCellPaddingBottom: 12, // px

    commonTableCellPaddingLeft: 5, // px
    commonTableCellPaddingRight: 5 // px
});