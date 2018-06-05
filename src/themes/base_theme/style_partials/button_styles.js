'use strict';

// local imports
import fontStacks from './font_stacks';
import coloPalette from './color_palette';

// exports
export default Object.freeze({
    buttonCommonFontStack: fontStacks.regularFontFamilyStack,

    buttonCommonColor: coloPalette.materialRed800,
    buttonCommonHoverColor: coloPalette.materialBlack,

    buttonCommonBGColor: coloPalette.materialLightBlue600,
});