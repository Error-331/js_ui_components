'use strict';

// @flow

//external imports

// local imports
import type {ColorPaletteType} from './../../../../types/theming/color_palette_types';
import type {BaseStylesType, BaseStylesFuncType} from './../../../../types/theming/base_style_types';

// exports
export const baseStylesFunc: BaseStylesFuncType = (colorPalette: ColorPaletteType): BaseStylesType => {
    return Object.freeze({
        // accent colors
        accentColorPrimary: colorPalette.materialRed800,

        // main colors
        mainPrimaryColor: colorPalette.materialLightBlue900,
        mainSecondaryColor: colorPalette.materialLightBlue600,
        mainTertiaryColor: colorPalette.materialLightBlue400,
        mainQuaternaryColor: colorPalette.materialLightBlue300,

        // sub colors
        subPrimaryColor: colorPalette.materialGrey900,
        subSecondaryColor: colorPalette.materialGrey600,
        subTertiaryColor: colorPalette.materialGrey400,
        subQuaternaryColor: colorPalette.materialGrey300,

        regularTextColor: colorPalette.materialBlack,

        hoverColor: colorPalette.materialBlack,
        disabledColor: colorPalette.materialGrey400,

        applicationBGColor: colorPalette.materialLime50,
        primaryBGColor: colorPalette.materialLightBlue600,
        transparentBGColor: colorPalette.materialTransparent,
        utilityBGColor: colorPalette.materialGrey600,
        noneTransparentBGColor: colorPalette.materialWhite,

        inlineHeaderLevel1FontSize: 68, // px
        inlineHeaderLevel2FontSize: 58, // px
        inlineHeaderLevel3FontSize: 48, // px
        inlineHeaderLevel4FontSize: 38, // px
        inlineHeaderLevel5FontSize: 28, // px
        inlineHeaderLevel6FontSize: 18, // px

        primaryFontSize: 18, // px
        secondaryFontSize: 15, // px
        tertiaryFontSize: 12,

        iconPrimaryFontSize: 15 // px
    });
};
