'use strict';

// exports
export default (colorPalette) => {
    return Object.freeze({
        // accent colors
        accentColorPrimary: colorPalette.materialIndigoA200,

        // main colors
        mainPrimaryColor: colorPalette.materialPurple900,
        mainSecondaryColor: colorPalette.materialPurple600,
        mainTertiaryColor: colorPalette.materialPurple400,
        mainQuaternaryColor: colorPalette.materialPurple300,

        primaryBGColor: colorPalette.materialPurple600,
    });
};
