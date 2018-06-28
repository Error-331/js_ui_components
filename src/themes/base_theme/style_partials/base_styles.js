'use strict';

// local imports
import coloPalette from './color_palette';

// exports
export default Object.freeze({
    primaryColor: coloPalette.materialRed800,
    secondaryColor: coloPalette.materialLightBlue900,
    tertiaryColor: coloPalette.materialLightBlue600,
    quaternaryColor: coloPalette.materialLightBlue400,
    quinaryColor: coloPalette.materialLightBlue300,

    primaryTextColor: coloPalette.materialGrey900,
    secondaryTextColor: coloPalette.materialGrey600,
    dividerColor: coloPalette.materialGrey400,

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