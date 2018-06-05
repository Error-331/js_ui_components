'use strict';

// local imports
import coloPalette from './color_palette';

// exports
export default Object.freeze({
    commonPrimaryTextColor: coloPalette.materialRed800,
    commonSecondaryTextColor: coloPalette.materialLightBlue900,
    commonTertiaryTextColor: coloPalette.materialLightBlue600,
    commonQuaternaryTextColor: coloPalette.materialLightBlue400,
    commonQuinaryTextColor: coloPalette.materialLightBlue300,

    commonHoverColor: coloPalette.materialBlack,
    commonDisabledColor: coloPalette.materialBlueGrey200,

    commonApplicationBGColor: coloPalette.materialLime50,
    commonPrimaryBGColor: coloPalette.materialLightBlue600,
    commonTransparentBGColor: coloPalette.materialTransparent,
    commonUtilityBGColor: coloPalette.materialBlueGrey300,
    commonNoneTransparentBGColor: coloPalette.materialWhite,

    commonTitleFontSize: 18, // px
    commonPrimaryFontSize: 18, // px
    commonSecondaryFontSize: 15, // px
    commonTertiaryFontSize: 12,

    commonIconPrimaryFontSize: 15 // px
});