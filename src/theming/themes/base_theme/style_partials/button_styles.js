'use strict';

// exports
export default ({fontStacks, baseStyles}) => {
    return Object.freeze({
        fontStackRegular: fontStacks.regularFontFamilyStack,
        fontStackBold: fontStacks.boldFontFamilyStack,

        captionFontSize: 14, // px
        iconFontSize: 17,

        borderSize: 2, // px

        fontColorPrimary: baseStyles.accentColorPrimary,
        fontColorSecondary: baseStyles.subSecondaryColor,
        fontColorDefaultWithBG: baseStyles.noneTransparentBGColor,
        fontColorDefaultNoBG: baseStyles.subPrimaryColor,

        borderColor: baseStyles.mainSecondaryColor,
        bgColor: baseStyles.mainSecondaryColor,
    });
};
