'use strict';

// @flow

// external imports

// local imports

// exports
import type {ColorPaletteType} from './';

export type BaseStylesType = {
    accentColorPrimary: string,

    mainPrimaryColor: string,
    mainSecondaryColor: string,
    mainTertiaryColor: string,
    mainQuaternaryColor: string,

    subPrimaryColor: string,
    subSecondaryColor: string,
    subTertiaryColor: string,
    subQuaternaryColor: string,

    hoverColor: string,
    disabledColor: string,

    applicationBGColor: string,
    primaryBGColor: string,
    transparentBGColor: string,
    utilityBGColor: string,
    noneTransparentBGColor: string,

    inlineHeaderLevel1FontSize: number,
    inlineHeaderLevel2FontSize: number,
    inlineHeaderLevel3FontSize: number,
    inlineHeaderLevel4FontSize: number,
    inlineHeaderLevel5FontSize: number,
    inlineHeaderLevel6FontSize: number,

    primaryFontSize: number,
    secondaryFontSize: number,
    tertiaryFontSize: number,

    iconPrimaryFontSize: number,
};

export type BaseStylesFuncType = (colorPalette: ColorPaletteType) => BaseStylesType;